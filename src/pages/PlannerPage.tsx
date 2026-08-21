import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  ExternalLink,
  GraduationCap,
  Minus,
  Plus,
  RotateCcw,
  Save,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { getCourseById } from '../data'
import { getStudyPathway, getTermUnits, studyPathways, type PathwayId } from '../curriculum'

type PlannerSettings = {
  pathwayId: PathwayId
  termId: string
  sessionsPerWeek: number
  focusedUnitIds: string[]
  savedAt?: string
}

const plannerStorageKey = 'deepfocus-clinical-pathway-plan-v1'

function defaultPlan(): PlannerSettings {
  return {
    pathwayId: 'nursing',
    termId: 'y2s1',
    sessionsPerWeek: 3,
    focusedUnitIds: ['cn211'],
  }
}

function loadPlan(): PlannerSettings {
  const fallback = defaultPlan()
  try {
    const saved = localStorage.getItem(plannerStorageKey)
    if (!saved) return fallback
    const value = JSON.parse(saved) as Partial<PlannerSettings>
    if ((value.pathwayId !== 'nursing' && value.pathwayId !== 'midwifery') || typeof value.termId !== 'string') return fallback
    return {
      pathwayId: value.pathwayId,
      termId: value.termId,
      sessionsPerWeek: typeof value.sessionsPerWeek === 'number' ? Math.min(7, Math.max(1, value.sessionsPerWeek)) : fallback.sessionsPerWeek,
      focusedUnitIds: Array.isArray(value.focusedUnitIds) ? value.focusedUnitIds.filter((item): item is string => typeof item === 'string') : [],
      savedAt: typeof value.savedAt === 'string' ? value.savedAt : undefined,
    }
  } catch {
    return fallback
  }
}

function workloadCopy(sessions: number) {
  if (sessions <= 2) return 'A light rhythm with room to settle into each subject.'
  if (sessions <= 4) return 'A steady rhythm for one deliberate focus block on most study days.'
  return 'An ambitious rhythm. Keep the sessions short and protect recovery time.'
}

function savedLabel(value?: string) {
  if (!value) return 'Not yet saved in this browser'
  return `Saved ${new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }).format(new Date(value))}`
}

export function PlannerPage() {
  const navigate = useNavigate()
  const [savedPlan, setSavedPlan] = useState<PlannerSettings>(loadPlan)
  const [draft, setDraft] = useState<PlannerSettings>(savedPlan)
  const pathway = getStudyPathway(draft.pathwayId)
  const term = pathway.terms.find((item) => item.id === draft.termId) ?? pathway.terms[0]
  const termUnits = useMemo(() => getTermUnits(pathway, term.id), [pathway, term.id])
  const focusedCount = draft.focusedUnitIds.filter((id) => pathway.units.some((unit) => unit.id === id)).length
  const isDirty = JSON.stringify({ ...draft, savedAt: undefined }) !== JSON.stringify({ ...savedPlan, savedAt: undefined })

  const setPathway = (pathwayId: PathwayId) => {
    const nextPathway = getStudyPathway(pathwayId)
    setDraft((current) => ({ ...current, pathwayId, termId: nextPathway.terms[0].id, focusedUnitIds: [] }))
  }

  const setSessions = (amount: number) => {
    setDraft((current) => ({ ...current, sessionsPerWeek: Math.max(1, Math.min(7, current.sessionsPerWeek + amount)) }))
  }

  const toggleFocus = (unitId: string) => {
    setDraft((current) => ({
      ...current,
      focusedUnitIds: current.focusedUnitIds.includes(unitId)
        ? current.focusedUnitIds.filter((id) => id !== unitId)
        : [...current.focusedUnitIds, unitId],
    }))
  }

  const savePlan = () => {
    const next = { ...draft, savedAt: new Date().toISOString() }
    localStorage.setItem(plannerStorageKey, JSON.stringify(next))
    setDraft(next)
    setSavedPlan(next)
  }

  const resetDraft = () => setDraft(savedPlan)

  return (
    <AppShell pageTitle="Clinical pathway planner" pageEyebrow={`${pathway.credential} · ${term.label}`}>
      <main className="pathway-page">
        <header className="pathway-hero">
          <div>
            <span className="eyebrow eyebrow--accent"><Sparkles size={14} /> Your revision pathway</span>
            <h1>Plan the next clear clinical step.</h1>
            <p>Choose your programme, inspect one study term at a time, and set a revision rhythm you can sustain. This is a private study plan—not a registration or assessment system.</p>
          </div>
          <div className="pathway-hero__status">
            <span className={isDirty ? 'is-draft' : 'is-saved'}>{isDirty ? <Clock3 size={15} /> : <Check size={15} />}{isDirty ? 'Unsaved what-if' : 'Saved plan'}</span>
            <small>{savedLabel(savedPlan.savedAt)}</small>
          </div>
        </header>

        <section className="pathway-stepper" aria-label="Planner setup">
          <article>
            <span>01</span><div><small>Choose pathway</small><strong>{pathway.credential}</strong></div>
          </article>
          <article>
            <span>02</span><div><small>Choose term</small><strong>{term.label}</strong></div>
          </article>
          <article>
            <span>03</span><div><small>Set your rhythm</small><strong>{draft.sessionsPerWeek} sessions / week</strong></div>
          </article>
        </section>

        <section className="pathway-controls" aria-label="Planner controls">
          <div className="pathway-control">
            <div className="pathway-control__heading"><span className="eyebrow">Pathway</span><h2>Start with the programme.</h2></div>
            <div className="pathway-programmes" role="group" aria-label="Choose a programme">
              {studyPathways.map((option) => <button key={option.id} className={option.id === pathway.id ? 'is-active' : ''} onClick={() => setPathway(option.id)}><GraduationCap size={18} /><span><strong>{option.title}</strong><small>{option.units.length} course units · 5 study terms</small></span><Check size={16} /></button>)}
            </div>
          </div>

          <div className="pathway-control pathway-control--rhythm">
            <div className="pathway-control__heading"><span className="eyebrow">Revision rhythm</span><h2>How many focused sessions fit your week?</h2></div>
            <div className="pathway-rhythm">
              <button onClick={() => setSessions(-1)} disabled={draft.sessionsPerWeek === 1} aria-label="Reduce weekly sessions"><Minus size={18} /></button>
              <strong>{draft.sessionsPerWeek}</strong>
              <button onClick={() => setSessions(1)} disabled={draft.sessionsPerWeek === 7} aria-label="Increase weekly sessions"><Plus size={18} /></button>
            </div>
            <p>{workloadCopy(draft.sessionsPerWeek)}</p>
            <small>Sessions are a personal revision preference, not academic credits or a promised timetable.</small>
          </div>
        </section>

        <section className="term-navigator" aria-label="Study terms">
          <div className="term-navigator__heading"><div><span className="eyebrow">Curriculum map</span><h2>Move across the pathway.</h2></div><span>{pathway.units.length} individual course units</span></div>
          <div className="term-navigator__list">
            {pathway.terms.map((item, index) => {
              const units = getTermUnits(pathway, item.id)
              const focused = units.filter((unit) => draft.focusedUnitIds.includes(unit.id)).length
              return <button key={item.id} className={item.id === term.id ? 'is-active' : ''} onClick={() => setDraft((current) => ({ ...current, termId: item.id }))}><span className="term-navigator__number">{String(index + 1).padStart(2, '0')}</span><span><small>{item.label}</small><strong>{units.length} course unit{units.length === 1 ? '' : 's'}</strong></span>{focused > 0 && <i>{focused} in focus</i>}</button>
            })}
          </div>
        </section>

        <section className="pathway-workspace">
          <div className="pathway-workspace__main">
            <header className="term-header"><div><span className="eyebrow eyebrow--accent">Selected term</span><h2>{term.label}</h2><p>{termUnits.length} individual course unit{termUnits.length === 1 ? '' : 's'} in the published {pathway.title.toLowerCase()} sequence. A code identifies a course unit; it is not a generic “paper” label.</p></div><span className="term-header__focus"><BookOpenCheck size={16} /> {termUnits.filter((unit) => draft.focusedUnitIds.includes(unit.id)).length} in focus</span></header>
            <div className="unit-list">
              {termUnits.map((unit) => {
                const isFocused = draft.focusedUnitIds.includes(unit.id)
                const revisionMaps = unit.revisionMapIds?.map((id) => getCourseById(id)).filter((course): course is NonNullable<typeof course> => Boolean(course)) ?? []
                return <article key={unit.id} className={isFocused ? 'is-focused' : ''}>
                  <div className="unit-list__identity"><span>{unit.code}</span><h3>{unit.title}</h3></div>
                  <div className="unit-list__actions"><button className={isFocused ? 'unit-focus is-focused' : 'unit-focus'} onClick={() => toggleFocus(unit.id)}>{isFocused ? <Check size={15} /> : <Plus size={15} />}{isFocused ? 'In focus' : 'Add to focus'}</button></div>
                  {revisionMaps.length > 0 && <div className="unit-list__maps"><span>Individual DeepFocus revision maps</span>{revisionMaps.map((course) => <button key={course.id} onClick={() => navigate(`/courses/${course.id}`)}>{course.title}<ArrowRight size={14} /></button>)}</div>}
                </article>
              })}
            </div>
          </div>

          <aside className="pathway-summary">
            <section className="pathway-summary__card pathway-summary__card--dark">
              <span className="eyebrow">Your focus list</span>
              <strong>{focusedCount}</strong>
              <p>course unit{focusedCount === 1 ? '' : 's'} marked for this study plan.</p>
              <div><Clock3 size={15} /><span>{draft.sessionsPerWeek} deliberate session{draft.sessionsPerWeek === 1 ? '' : 's'} each week</span></div>
            </section>
            <section className="pathway-summary__card">
              <span className="eyebrow">Curriculum reference</span>
              <h3>{pathway.source.title}</h3>
              <p>{pathway.source.note}</p>
              <a href={pathway.source.url} target="_blank" rel="noreferrer">Review source <ExternalLink size={14} /></a>
            </section>
            <section className="pathway-summary__boundary"><ShieldCheck size={18} /><div><strong>Revision boundary</strong><p>DeepFocus organises study. It does not replace course materials, clinical supervision, local protocols, or official programme decisions.</p></div></section>
          </aside>
        </section>

        <footer className="pathway-actions">
          <div><CircleAlert size={17} /><p>You can test a different pathway, term, or rhythm before saving. Nothing changes outside this browser.</p></div>
          <span><button className="button button--quiet" onClick={resetDraft} disabled={!isDirty}><RotateCcw size={15} /> Reset draft</button><button className="button button--primary" onClick={savePlan} disabled={!isDirty}><Save size={15} /> Save this plan</button></span>
        </footer>

        <section className="pathway-calendar-link"><div><span className="eyebrow">Need dated blocks?</span><h2>Take your saved rhythm to the personal calendar.</h2><p>Use it only when dates help. Your curriculum remains separate from your own study commitments.</p></div><button className="button button--quiet" onClick={() => navigate('/calendar')}>Open focus calendar <ChevronRight size={16} /></button></section>
      </main>
    </AppShell>
  )
}
