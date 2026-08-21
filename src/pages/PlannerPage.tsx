import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ChevronRight, CircleCheckBig, Clock3, ExternalLink, GraduationCap, Lock, Minus, Plus } from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { getCourseById } from '../data'
import { getStudyPathway, getTermUnits, studyPathways, type PathwayId } from '../curriculum'
import { getPathwayPlan, getTermReadiness, loadPlannerState, savePlannerState, type PlannerState } from '../planner'

type PlannerScreen = 'welcome' | 'certificate' | 'entry' | 'workload' | 'plan' | 'registration' | 'progress'

function workloadDetail(sessions: number) {
  const minutes = sessions * 90
  const hours = Math.floor(minutes / 60)
  const remainder = minutes % 60
  return `about ${hours}${remainder ? '.5' : ''} hours of focused revision per week`
}

function initialScreen() {
  const state = loadPlannerState()
  return getPathwayPlan(state, state.activePathwayId).setupComplete ? 'plan' : 'welcome'
}

export function PlannerPage() {
  const navigate = useNavigate()
  const [plannerState, setPlannerState] = useState<PlannerState>(loadPlannerState)
  const [screen, setScreen] = useState<PlannerScreen>(initialScreen)
  const [selectedTermId, setSelectedTermId] = useState(() => {
    const state = loadPlannerState()
    return getPathwayPlan(state, state.activePathwayId).entryTermId
  })
  const [selectedUnitIds, setSelectedUnitIds] = useState<string[]>([])
  const pathway = getStudyPathway(plannerState.activePathwayId)
  const plan = getPathwayPlan(plannerState, pathway.id)
  const entryTerm = pathway.terms.find((term) => term.id === plan.entryTermId) ?? pathway.terms[0]
  const selectedTerm = pathway.terms.find((term) => term.id === selectedTermId) ?? entryTerm
  const termUnits = useMemo(() => getTermUnits(pathway, selectedTerm.id), [pathway, selectedTerm.id])
  const readiness = getTermReadiness(pathway, plan, selectedTerm.id)
  const registeredUnits = pathway.units.filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const registeredTermUnits = termUnits.filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const registrationHasChanged = selectedUnitIds.length !== registeredTermUnits.length || selectedUnitIds.some((id) => !plan.registeredUnitIds.includes(id))

  const commit = (updater: (state: PlannerState) => PlannerState) => {
    setPlannerState((current) => savePlannerState(updater(current)))
  }

  const updateActivePlan = (updater: (current: ReturnType<typeof getPathwayPlan>) => ReturnType<typeof getPathwayPlan>) => {
    commit((current) => {
      const pathwayId = current.activePathwayId
      return {
        ...current,
        pathways: {
          ...current.pathways,
          [pathwayId]: { ...updater(current.pathways[pathwayId]), savedAt: new Date().toISOString() },
        },
      }
    })
  }

  const chooseCertificate = (pathwayId: PathwayId) => {
    const nextPathway = getStudyPathway(pathwayId)
    commit((current) => ({
      ...current,
      activePathwayId: pathwayId,
      pathways: {
        ...current.pathways,
        [pathwayId]: { ...current.pathways[pathwayId], setupComplete: false, savedAt: new Date().toISOString() },
      },
    }))
    setSelectedTermId(nextPathway.terms[0].id)
    setSelectedUnitIds([])
    setScreen('entry')
  }

  const chooseEntryPoint = (termId: string) => {
    updateActivePlan((current) => ({ ...current, entryTermId: termId }))
    setSelectedTermId(termId)
    setScreen('workload')
  }

  const finishSetup = () => {
    updateActivePlan((current) => ({ ...current, setupComplete: true }))
    setScreen('plan')
  }

  const chooseTerm = (termId: string, nextScreen: PlannerScreen = screen) => {
    setSelectedTermId(termId)
    setSelectedUnitIds(getTermUnits(pathway, termId).filter((unit) => plan.registeredUnitIds.includes(unit.id)).map((unit) => unit.id))
    setScreen(nextScreen)
  }

  const toggleClearance = (termId: string) => {
    updateActivePlan((current) => ({
      ...current,
      clearedTermIds: current.clearedTermIds.includes(termId)
        ? current.clearedTermIds.filter((id) => id !== termId)
        : [...current.clearedTermIds, termId],
    }))
  }

  const toggleSelectedUnit = (unitId: string) => {
    if (!readiness.ready) return
    setSelectedUnitIds((current) => current.includes(unitId) ? current.filter((id) => id !== unitId) : [...current, unitId])
  }

  const saveRegistration = () => {
    if (!readiness.ready) return
    const termUnitIds = new Set(termUnits.map((unit) => unit.id))
    updateActivePlan((current) => ({
      ...current,
      registeredUnitIds: [...current.registeredUnitIds.filter((id) => !termUnitIds.has(id)), ...selectedUnitIds],
    }))
    setScreen('plan')
  }

  return (
    <AppShell pageTitle="Study planner" pageEyebrow={screen === 'plan' ? pathway.credential : undefined}>
      <main className="degree-planner">
        {screen === 'welcome' && <WelcomeScreen onStart={() => setScreen('certificate')} hasExistingPlan={registeredUnits.length > 0} onContinue={() => setScreen('plan')} />}
        {screen === 'certificate' && <CertificateScreen onChoose={chooseCertificate} onBack={() => setScreen('welcome')} />}
        {screen === 'entry' && <EntryScreen pathwayId={pathway.id} selectedTermId={plan.entryTermId} onChoose={chooseEntryPoint} onBack={() => setScreen('certificate')} />}
        {screen === 'workload' && <WorkloadScreen pathwayId={pathway.id} entryTermId={plan.entryTermId} sessions={plan.sessionsPerWeek} onChangeSessions={(change) => updateActivePlan((current) => ({ ...current, sessionsPerWeek: Math.max(1, Math.min(7, current.sessionsPerWeek + change)) }))} onChangeCertificate={() => setScreen('certificate')} onChangeEntry={() => setScreen('entry')} onFinish={finishSetup} />}
        {screen === 'plan' && <PlanScreen pathwayId={pathway.id} selectedTermId={selectedTerm.id} onChangeCertificate={() => setScreen('certificate')} onOpenRegistration={() => chooseTerm(selectedTerm.id, 'registration')} onOpenProgress={() => setScreen('progress')} onChooseTerm={(termId) => chooseTerm(termId)} onOpenCalendar={() => navigate('/calendar')} />}
        {screen === 'registration' && <RegistrationScreen pathwayId={pathway.id} termId={selectedTerm.id} selectedUnitIds={selectedUnitIds} onBack={() => setScreen('plan')} onOpenProgress={() => setScreen('progress')} onChooseTerm={(termId) => chooseTerm(termId, 'registration')} onToggleClearance={toggleClearance} onToggleUnit={toggleSelectedUnit} onSave={saveRegistration} registrationHasChanged={registrationHasChanged} />}
        {screen === 'progress' && <ProgressScreen pathwayId={pathway.id} onBack={() => setScreen('plan')} onToggleClearance={toggleClearance} />}
      </main>
    </AppShell>
  )
}

function WelcomeScreen({ onStart, hasExistingPlan, onContinue }: { onStart: () => void; hasExistingPlan: boolean; onContinue: () => void }) {
  return <section className="degree-stage degree-stage--welcome"><span className="degree-stage__mark"><GraduationCap size={25} /></span><h1>Welcome to Study Planner!</h1><p>Build your DeepFocus revision pathway in just a few easy steps.</p><ol><li>Choose a certificate pathway</li><li>Set where you are joining the programme</li><li>Set your revision workload</li></ol><button className="degree-button degree-button--primary" onClick={onStart}>Start: Choose a Certificate <ArrowRight size={16} /></button>{hasExistingPlan && <button className="degree-text-button" onClick={onContinue}>Continue your saved plan</button>}<DegreeFooter /></section>
}

function CertificateScreen({ onChoose, onBack }: { onChoose: (pathwayId: PathwayId) => void; onBack: () => void }) {
  return <section className="degree-stage"><StepHeader number="1" title="Choose a certificate" copy="Choose the five-term course sequence that matches your professional programme. You can change this later." /><div className="degree-choice-list">{studyPathways.map((pathway) => <article key={pathway.id}><div><strong>{pathway.credential}</strong><small>{pathway.units.length} individual course units across five study terms</small></div><span><button className="degree-button degree-button--outline" onClick={() => onChoose(pathway.id)}>Choose</button><a href={pathway.source.url} target="_blank" rel="noreferrer">Learn more <ExternalLink size={13} /></a></span></article>)}</div><button className="degree-back" onClick={onBack}><ArrowLeft size={15} /> Back</button><DegreeFooter /></section>
}

function EntryScreen({ pathwayId, selectedTermId, onChoose, onBack }: { pathwayId: PathwayId; selectedTermId: string; onChoose: (termId: string) => void; onBack: () => void }) {
  const pathway = getStudyPathway(pathwayId)
  return <section className="degree-stage"><CompletedStep number="1" label={pathway.credential} action="Change certificate" onClick={onBack} /><StepHeader number="2" title="Set your entry point" copy="Start at Year 1 · Semester 1, or choose the term you are joining. If you join later, you will record already-cleared terms in My Progress before registering a later term." /><div className="degree-choice-list degree-choice-list--terms">{pathway.terms.map((term) => <article key={term.id} className={term.id === selectedTermId ? 'is-selected' : ''}><div><strong>{term.label}</strong><small>{getTermUnits(pathway, term.id).length} individual course units</small></div><button className="degree-button degree-button--outline" onClick={() => onChoose(term.id)}>Choose</button></article>)}</div><button className="degree-back" onClick={onBack}><ArrowLeft size={15} /> Back</button><DegreeFooter /></section>
}

function WorkloadScreen({ pathwayId, entryTermId, sessions, onChangeSessions, onChangeCertificate, onChangeEntry, onFinish }: { pathwayId: PathwayId; entryTermId: string; sessions: number; onChangeSessions: (change: number) => void; onChangeCertificate: () => void; onChangeEntry: () => void; onFinish: () => void }) {
  const pathway = getStudyPathway(pathwayId)
  const term = pathway.terms.find((item) => item.id === entryTermId) ?? pathway.terms[0]
  return <section className="degree-stage degree-stage--workload"><CompletedStep number="1" label={pathway.credential} action="Change certificate" onClick={onChangeCertificate} /><CompletedStep number="2" label={`Start: ${term.label}`} action="Change entry point" onClick={onChangeEntry} /><StepHeader number="3" title="Set your revision workload" copy="Estimate the number of focused DeepFocus sessions you can protect each week. You can change this later." /><div className="degree-workload"><span>Sessions each week:</span><div><button onClick={() => onChangeSessions(-1)} disabled={sessions === 1} aria-label="Reduce sessions"><Minus size={18} /></button><strong>{sessions}</strong><button onClick={() => onChangeSessions(1)} disabled={sessions === 7} aria-label="Increase sessions"><Plus size={18} /></button></div><small>({workloadDetail(sessions)})</small></div><button className="degree-button degree-button--primary" onClick={onFinish}>Next: Build My Plan <ArrowRight size={16} /></button><DegreeFooter /></section>
}

function PlanScreen({ pathwayId, selectedTermId, onChangeCertificate, onOpenRegistration, onOpenProgress, onChooseTerm, onOpenCalendar }: { pathwayId: PathwayId; selectedTermId: string; onChangeCertificate: () => void; onOpenRegistration: () => void; onOpenProgress: () => void; onChooseTerm: (termId: string) => void; onOpenCalendar: () => void }) {
  const pathway = getStudyPathway(pathwayId)
  const state = loadPlannerState()
  const plan = getPathwayPlan(state, pathwayId)
  const selectedTerm = pathway.terms.find((term) => term.id === selectedTermId) ?? pathway.terms[0]
  const selectedUnits = getTermUnits(pathway, selectedTerm.id)
  const readiness = getTermReadiness(pathway, plan, selectedTerm.id)
  return <section className="degree-plan"><PlannerNav active="plan" onPlan={() => undefined} onRegistration={onOpenRegistration} onProgress={onOpenProgress} /><header className="degree-plan__header"><div><span className="eyebrow">My plan</span><h1>{pathway.credential}</h1><p>DeepFocus keeps this revision pathway local to this browser. It is not an official school record.</p></div><button className="degree-button degree-button--outline" onClick={onChangeCertificate}>Change certificate</button></header><section className="degree-plan__status"><span><Check size={14} /> Entry point: {pathway.terms.find((term) => term.id === plan.entryTermId)?.label}</span><span><Clock3 size={14} /> {plan.sessionsPerWeek} sessions each week</span><span><CircleCheckBig size={14} /> {plan.registeredUnitIds.length} unit{plan.registeredUnitIds.length === 1 ? '' : 's'} registered</span></section><div className="degree-plan__workspace"><TermList pathwayId={pathwayId} selectedTermId={selectedTerm.id} onChoose={onChooseTerm} /><section className="degree-term-detail"><header><div><span className="eyebrow">Selected term</span><h2>{selectedTerm.label}</h2></div><span>{selectedUnits.length} units</span></header>{!readiness.ready && <div className="degree-gate"><Lock size={17} /><div><strong>Earlier-term clearance needed</strong><p>Open My Progress to record the terms already cleared by your school before registering this term.</p></div><button onClick={onOpenProgress}>My Progress <ChevronRight size={15} /></button></div>}<div className="degree-course-list">{selectedUnits.map((unit) => <article key={unit.id}><span>{unit.code}</span><div><strong>{unit.title}</strong><small>{plan.registeredUnitIds.includes(unit.id) ? 'Registered for DeepFocus revision' : 'Not registered'}</small></div>{unit.revisionMapIds?.length ? <span className="degree-course-list__maps">{unit.revisionMapIds.length} map{unit.revisionMapIds.length === 1 ? '' : 's'}</span> : <span className="degree-course-list__maps is-quiet">No map yet</span>}</article>)}</div><footer><p>{readiness.ready ? 'Review this term, then register only the units you want to appear on your dashboard.' : 'Clearance is a personal planning record; it is not an official prerequisite decision.'}</p><button className="degree-button degree-button--primary" onClick={onOpenRegistration} disabled={!readiness.ready}>Review registration <ArrowRight size={15} /></button></footer></section></div><section className="degree-calendar-callout"><div><strong>Need to place a date?</strong><p>Use the separate focus calendar after you have shaped the pathway.</p></div><button onClick={onOpenCalendar}>Open calendar <ChevronRight size={15} /></button></section><DegreeFooter /></section>
}

function RegistrationScreen({ pathwayId, termId, selectedUnitIds, onBack, onOpenProgress, onChooseTerm, onToggleClearance, onToggleUnit, onSave, registrationHasChanged }: { pathwayId: PathwayId; termId: string; selectedUnitIds: string[]; onBack: () => void; onOpenProgress: () => void; onChooseTerm: (termId: string) => void; onToggleClearance: (termId: string) => void; onToggleUnit: (unitId: string) => void; onSave: () => void; registrationHasChanged: boolean }) {
  const pathway = getStudyPathway(pathwayId)
  const state = loadPlannerState()
  const plan = getPathwayPlan(state, pathwayId)
  const term = pathway.terms.find((item) => item.id === termId) ?? pathway.terms[0]
  const units = getTermUnits(pathway, term.id)
  const readiness = getTermReadiness(pathway, plan, term.id)
  return <section className="degree-plan"><PlannerNav active="registration" onPlan={onBack} onRegistration={() => undefined} onProgress={onOpenProgress} /><header className="degree-registration-header"><button className="degree-back" onClick={onBack}><ArrowLeft size={15} /> My Plan</button><div><span className="eyebrow">Course registration</span><h1>{term.label}</h1><p>Select the individual units DeepFocus should put in your study space. This does not enrol you with a school.</p></div></header><div className="degree-plan__workspace"><TermList pathwayId={pathwayId} selectedTermId={term.id} onChoose={onChooseTerm} /><section className="degree-term-detail degree-term-detail--registration">{readiness.ready ? <><header><div><span className="eyebrow">Choose units</span><h2>Register for revision</h2></div><span>{selectedUnitIds.length} selected</span></header><div className="degree-register-list">{units.map((unit) => { const selected = selectedUnitIds.includes(unit.id); const maps = unit.revisionMapIds?.map((id) => getCourseById(id)).filter(Boolean) ?? []; return <button key={unit.id} className={selected ? 'is-selected' : ''} onClick={() => onToggleUnit(unit.id)} aria-pressed={selected}><span className="degree-register-list__mark">{selected && <Check size={15} />}</span><span><small>{unit.code}</small><strong>{unit.title}</strong>{maps.length ? <em>{maps.length} detailed revision map{maps.length === 1 ? '' : 's'} available</em> : <em>Detailed study map not yet supplied</em>}</span></button>})}</div><footer><p>Only saved selections will appear in the dashboard.</p><button className="degree-button degree-button--primary" onClick={onSave} disabled={!registrationHasChanged}>Save registration <ArrowRight size={15} /></button></footer></> : <RegistrationGate pathwayId={pathwayId} termId={term.id} onToggleClearance={onToggleClearance} onBack={onBack} />}</section></div><DegreeFooter /></section>
}

function RegistrationGate({ pathwayId, termId, onToggleClearance, onBack }: { pathwayId: PathwayId; termId: string; onToggleClearance: (termId: string) => void; onBack: () => void }) {
  const pathway = getStudyPathway(pathwayId)
  const plan = getPathwayPlan(loadPlannerState(), pathwayId)
  const readiness = getTermReadiness(pathway, plan, termId)
  return <div className="degree-registration-gate"><Lock size={24} /><h2>Clearance needed before registration</h2><p>DeepFocus uses an earlier-term clearance record to keep a later revision plan in sequence. This is not a formal institutional prerequisite ruling.</p><div>{readiness.missingClearanceTerms.map((term) => <button key={term.id} onClick={() => onToggleClearance(term.id)}><Check size={14} /> Record {term.label} as cleared</button>)}</div><button className="degree-text-button" onClick={onBack}>Return to My Plan</button></div>
}

function ProgressScreen({ pathwayId, onBack, onToggleClearance }: { pathwayId: PathwayId; onBack: () => void; onToggleClearance: (termId: string) => void }) {
  const pathway = getStudyPathway(pathwayId)
  const plan = getPathwayPlan(loadPlannerState(), pathwayId)
  return <section className="degree-plan"><PlannerNav active="progress" onPlan={onBack} onRegistration={onBack} onProgress={() => undefined} /><header className="degree-registration-header"><button className="degree-back" onClick={onBack}><ArrowLeft size={15} /> My Plan</button><div><span className="eyebrow">My Progress</span><h1>Record prior clearance.</h1><p>For learners joining later, record only terms that your school has already completed, credited, or formally cleared.</p></div></header><section className="degree-progress"><div className="degree-progress__notice"><CircleCheckBig size={20} /><p>These controls only save a private DeepFocus planning record. They do not award credit or change an official result.</p></div>{pathway.terms.map((term) => <article key={term.id}><div><strong>{term.label}</strong><small>{getTermUnits(pathway, term.id).length} individual course units</small></div><button className={plan.clearedTermIds.includes(term.id) ? 'is-cleared' : ''} onClick={() => onToggleClearance(term.id)}>{plan.clearedTermIds.includes(term.id) ? <><Check size={15} /> Cleared</> : 'Record clearance'}</button></article>)}<a href={pathway.source.url} target="_blank" rel="noreferrer">Review curriculum reference <ExternalLink size={14} /></a></section><DegreeFooter /></section>
}

function TermList({ pathwayId, selectedTermId, onChoose }: { pathwayId: PathwayId; selectedTermId: string; onChoose: (termId: string) => void }) {
  const pathway = getStudyPathway(pathwayId)
  const plan = getPathwayPlan(loadPlannerState(), pathwayId)
  return <aside className="degree-term-list">{pathway.terms.map((term) => { const units = getTermUnits(pathway, term.id); const registered = units.filter((unit) => plan.registeredUnitIds.includes(unit.id)).length; return <button key={term.id} className={term.id === selectedTermId ? 'is-selected' : ''} onClick={() => onChoose(term.id)}><span><strong>{term.label}</strong><small>{registered ? `${registered} registered` : `${units.length} units`}</small></span><ChevronRight size={16} /></button>})}</aside>
}

function PlannerNav({ active, onPlan, onRegistration, onProgress }: { active: 'plan' | 'registration' | 'progress'; onPlan: () => void; onRegistration: () => void; onProgress: () => void }) {
  return <nav className="degree-main-nav" aria-label="Planner sections"><button className={active === 'plan' ? 'is-active' : ''} onClick={onPlan}>My Plan</button><button className={active === 'registration' ? 'is-active' : ''} onClick={onRegistration}>Registration</button><button className={active === 'progress' ? 'is-active' : ''} onClick={onProgress}>My Progress</button></nav>
}

function StepHeader({ number, title, copy }: { number: string; title: string; copy: string }) {
  return <header className="degree-step-header"><h1>{number}. {title}</h1><p>{copy}</p></header>
}

function CompletedStep({ number, label, action, onClick }: { number: string; label: string; action: string; onClick: () => void }) {
  return <div className="degree-completed-step"><span><Check size={14} /> {number}. {label}</span><button onClick={onClick}>{action}</button></div>
}

function DegreeFooter() {
  return <footer className="degree-footer"><span>DeepFocus revision planner</span><small>Local browser-only study planning</small></footer>
}
