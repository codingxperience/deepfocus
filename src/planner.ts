import { getStudyPathway, studyPathways, type CurriculumTerm, type CurriculumUnit, type PathwayId, type StudyPathway } from './curriculum'

export type PathwayPlan = {
  entryTermId: string
  activeTermId: string
  sessionsPerWeek: number
  registeredUnitIds: string[]
  clearedTermIds: string[]
  setupComplete: boolean
  savedAt?: string
}

export type PlannerState = {
  activePathwayId: PathwayId
  pathways: Record<PathwayId, PathwayPlan>
}

type LegacyPlan = {
  pathwayId?: PathwayId
  termId?: string
  sessionsPerWeek?: number
}

const storageKey = 'deepfocus-study-planner-v2'
const legacyStorageKey = 'deepfocus-clinical-pathway-plan-v1'
export const plannerChangeEvent = 'deepfocus-study-planner-change'

// Version 2 initially mirrored composite lines from the supplied outlines. DeepFocus
// now lets learners select each named subject separately while keeping the original
// outline code as the visible reference. Expand an earlier saved selection so no one
// loses the revision subjects they had already chosen.
const legacyCompositeUnitSelections: Partial<Record<PathwayId, Record<string, string[]>>> = {
  nursing: {
    cn111: ['cn111-anatomy-physiology-1', 'cn111-first-aid'],
    cn112: ['cn112-foundations-nursing-1', 'cn112-computer'],
    cn113: ['cn113-personal-communal-health', 'cn113-microbiology'],
    cn122: ['cn122-foundations-nursing-2', 'cn122-sociology', 'cn122-psychology'],
    cn211: ['cn211-medical-nursing-1', 'cn211-pharmacology-1'],
    cn212: ['cn212-surgical-nursing-1', 'cn212-gynaecologic-nursing'],
    cn213: ['cn213-paediatric-nursing-1', 'cn213-palliative-care'],
    cn221: ['cn221-medical-nursing-2', 'cn221-pharmacology-2'],
    cn222: ['cn222-surgical-nursing-2', 'cn222-paediatric-nursing-2'],
    cn223: ['cn223-mental-health-nursing', 'cn223-occupational-health'],
    cn311: ['cn311-tropical-medicine', 'cn311-surgical-nursing-3'],
    cn312: ['cn312-reproductive-health', 'cn312-guidance-counselling'],
    cn313: ['cn313-health-services-management', 'cn313-entrepreneurship'],
  },
  midwifery: {
    cm111: ['cm111-anatomy-physiology-1', 'cm111-first-aid'],
    cm112: ['cm112-foundations-nursing-1', 'cm112-basic-computer'],
    cm113: ['cm113-personal-communal-health', 'cm113-microbiology'],
    cm122: ['cm122-foundations-nursing-2', 'cm122-sociology', 'cm122-psychology'],
    cm212: ['cm212-midwifery-1', 'cm212-pharmacology-1'],
    cm213: ['cm213-paediatric-nursing-1', 'cm213-palliative-care-nursing'],
    cm221: ['cm221-midwifery-2', 'cm221-tropical-medicine'],
    cm222: ['cm222-paediatric-nursing-2', 'cm222-pharmacology-2'],
    cm223: ['cm223-community-health', 'cm223-occupational-health-safety'],
    cm311: ['cm311-gynaecology', 'cm311-reproductive-health'],
    cm312: ['cm312-mental-health', 'cm312-guidance-counselling'],
    cm313: ['cm313-health-services-management', 'cm313-entrepreneurship'],
  },
}

function createPathwayPlan(pathway: StudyPathway): PathwayPlan {
  return {
    entryTermId: pathway.terms[0].id,
    activeTermId: pathway.terms[0].id,
    sessionsPerWeek: 3,
    registeredUnitIds: [],
    clearedTermIds: [],
    setupComplete: false,
  }
}

export function createPlannerState(): PlannerState {
  return {
    activePathwayId: 'nursing',
    pathways: {
      nursing: createPathwayPlan(getStudyPathway('nursing')),
      midwifery: createPathwayPlan(getStudyPathway('midwifery')),
    },
  }
}

function validPathwayId(value: unknown): value is PathwayId {
  return value === 'nursing' || value === 'midwifery'
}

function normalisePlan(pathway: StudyPathway, value: Partial<PathwayPlan> | undefined): PathwayPlan {
  const fallback = createPathwayPlan(pathway)
  const termIds = new Set(pathway.terms.map((term) => term.id))
  const unitIds = new Set(pathway.units.map((unit) => unit.id))
  const savedUnitIds = Array.isArray(value?.registeredUnitIds)
    ? value.registeredUnitIds.filter((id): id is string => typeof id === 'string')
    : []
  const registeredUnitIds = [...new Set(savedUnitIds.flatMap((id) => legacyCompositeUnitSelections[pathway.id]?.[id] ?? [id]).filter((id) => unitIds.has(id)))]
  const firstRegisteredUnit = pathway.units.find((unit) => registeredUnitIds.includes(unit.id))
  const firstRegisteredTermId = firstRegisteredUnit
    ? pathway.terms.find((term) => term.year === firstRegisteredUnit.year && term.semester === firstRegisteredUnit.semester)?.id
    : undefined
  return {
    entryTermId: typeof value?.entryTermId === 'string' && termIds.has(value.entryTermId) ? value.entryTermId : fallback.entryTermId,
    activeTermId: typeof value?.activeTermId === 'string' && termIds.has(value.activeTermId)
      ? value.activeTermId
      : firstRegisteredTermId ?? (typeof value?.entryTermId === 'string' && termIds.has(value.entryTermId) ? value.entryTermId : fallback.activeTermId),
    sessionsPerWeek: typeof value?.sessionsPerWeek === 'number' ? Math.max(1, Math.min(7, Math.round(value.sessionsPerWeek))) : fallback.sessionsPerWeek,
    registeredUnitIds,
    clearedTermIds: Array.isArray(value?.clearedTermIds) ? [...new Set(value.clearedTermIds.filter((id): id is string => typeof id === 'string' && termIds.has(id)))] : [],
    setupComplete: value?.setupComplete === true,
    savedAt: typeof value?.savedAt === 'string' ? value.savedAt : undefined,
  }
}

function normaliseState(value: Partial<PlannerState> | undefined): PlannerState {
  const fallback = createPlannerState()
  const pathways = Object.fromEntries(studyPathways.map((pathway) => [pathway.id, normalisePlan(pathway, value?.pathways?.[pathway.id])])) as PlannerState['pathways']
  return {
    activePathwayId: validPathwayId(value?.activePathwayId) ? value.activePathwayId : fallback.activePathwayId,
    pathways,
  }
}

function getLegacyState(): PlannerState | null {
  try {
    const raw = localStorage.getItem(legacyStorageKey)
    if (!raw) return null
    const legacy = JSON.parse(raw) as LegacyPlan
    if (!validPathwayId(legacy.pathwayId)) return null
    const state = createPlannerState()
    const pathway = getStudyPathway(legacy.pathwayId)
    state.activePathwayId = legacy.pathwayId
    state.pathways[legacy.pathwayId] = normalisePlan(pathway, {
      entryTermId: legacy.termId,
      sessionsPerWeek: legacy.sessionsPerWeek,
    })
    return state
  } catch {
    return null
  }
}

export function loadPlannerState(): PlannerState {
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw) return normaliseState(JSON.parse(raw) as Partial<PlannerState>)
  } catch {
    // A malformed local record should never prevent access to the planner.
  }
  return getLegacyState() ?? createPlannerState()
}

export function savePlannerState(next: PlannerState): PlannerState {
  const state = normaliseState(next)
  localStorage.setItem(storageKey, JSON.stringify(state))
  window.dispatchEvent(new CustomEvent(plannerChangeEvent))
  return state
}

export function resetPlannerState(): PlannerState {
  return savePlannerState(createPlannerState())
}

export function getPathwayPlan(state: PlannerState, pathwayId: PathwayId): PathwayPlan {
  return state.pathways[pathwayId]
}

export function hasCompletedPlannerSetup(state: PlannerState): boolean {
  return getPathwayPlan(state, state.activePathwayId).setupComplete
}

export function getRegisteredUnits(state: PlannerState, pathwayId = state.activePathwayId): CurriculumUnit[] {
  const pathway = getStudyPathway(pathwayId)
  const registered = new Set(getPathwayPlan(state, pathwayId).registeredUnitIds)
  return pathway.units.filter((unit) => registered.has(unit.id))
}

export function getPriorTerms(pathway: StudyPathway, termId: string): CurriculumTerm[] {
  const currentIndex = pathway.terms.findIndex((term) => term.id === termId)
  return currentIndex > 0 ? pathway.terms.slice(0, currentIndex) : []
}

export function getTermReadiness(pathway: StudyPathway, plan: PathwayPlan, termId: string) {
  const missingClearanceTerms = getPriorTerms(pathway, termId).filter((term) => !plan.clearedTermIds.includes(term.id))
  return {
    ready: missingClearanceTerms.length === 0,
    missingClearanceTerms,
  }
}
