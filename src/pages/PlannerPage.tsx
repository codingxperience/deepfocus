import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronRight,
  CircleAlert,
  CircleCheckBig,
  Clock3,
  ExternalLink,
  GraduationCap,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { getCourseById } from '../data'
import { getStudyPathway, getTermUnits, studyPathways, type PathwayId } from '../curriculum'
import { getPathwayPlan, getTermReadiness, loadPlannerState, savePlannerState, type PlannerState } from '../planner'

function workloadCopy(sessions: number) {
  if (sessions <= 2) return 'A light rhythm with room to settle into each subject.'
  if (sessions <= 4) return 'A steady rhythm for deliberate revision on most study days.'
  return 'An ambitious rhythm. Keep the sessions short and protect recovery time.'
}

function savedLabel(value?: string) {
  if (!value) return 'No local changes saved yet'
  return `Updated ${new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }).format(new Date(value))}`
}

export function PlannerPage() {
  const navigate = useNavigate()
  const [plannerState, setPlannerState] = useState<PlannerState>(loadPlannerState)
  const [selectedTermId, setSelectedTermId] = useState(() => {
    const initial = loadPlannerState()
    return getPathwayPlan(initial, initial.activePathwayId).entryTermId
  })
  const [selectedUnitIds, setSelectedUnitIds] = useState<string[]>([])
  const [notice, setNotice] = useState('')
  const pathway = getStudyPathway(plannerState.activePathwayId)
  const plan = getPathwayPlan(plannerState, pathway.id)
  const selectedTerm = pathway.terms.find((term) => term.id === selectedTermId) ?? pathway.terms[0]
  const entryTerm = pathway.terms.find((term) => term.id === plan.entryTermId) ?? pathway.terms[0]
  const termUnits = useMemo(() => getTermUnits(pathway, selectedTerm.id), [pathway, selectedTerm.id])
  const readiness = getTermReadiness(pathway, plan, selectedTerm.id)
  const registeredUnits = pathway.units.filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const registeredInTerm = termUnits.filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const isSelectionChanged = selectedUnitIds.length !== registeredInTerm.length || selectedUnitIds.some((id) => !plan.registeredUnitIds.includes(id))

  useEffect(() => {
    setSelectedUnitIds(termUnits.filter((unit) => plan.registeredUnitIds.includes(unit.id)).map((unit) => unit.id))
  }, [pathway.id, selectedTerm.id, plan.registeredUnitIds, termUnits])

  const commit = (updater: (current: PlannerState) => PlannerState) => {
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

  const choosePathway = (pathwayId: PathwayId) => {
    const nextPlan = getPathwayPlan(plannerState, pathwayId)
    commit((current) => ({ ...current, activePathwayId: pathwayId }))
    setSelectedTermId(nextPlan.entryTermId)
    setNotice(`${getStudyPathway(pathwayId).credential} is now the active local study pathway.`)
  }

  const chooseEntryTerm = (termId: string) => {
    updateActivePlan((current) => ({ ...current, entryTermId: termId }))
    setSelectedTermId(termId)
    setNotice('Your entry point has been saved. Earlier terms still need your own clearance record before you register later study terms.')
  }

  const changeSessions = (amount: number) => {
    updateActivePlan((current) => ({ ...current, sessionsPerWeek: Math.max(1, Math.min(7, current.sessionsPerWeek + amount)) }))
  }

  const toggleClearance = (termId: string) => {
    const term = pathway.terms.find((item) => item.id === termId)
    if (!term) return
    updateActivePlan((current) => ({
      ...current,
      clearedTermIds: current.clearedTermIds.includes(termId)
        ? current.clearedTermIds.filter((id) => id !== termId)
        : [...current.clearedTermIds, termId],
    }))
    setNotice(`${term.label} has been ${plan.clearedTermIds.includes(termId) ? 'removed from' : 'recorded in'} your private clearance history.`)
  }

  const toggleUnit = (unitId: string) => {
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
    setNotice(selectedUnitIds.length
      ? `${selectedUnitIds.length} ${selectedUnitIds.length === 1 ? 'course unit is' : 'course units are'} now registered in your local DeepFocus study space.`
      : `The local DeepFocus registrations for ${selectedTerm.label} have been cleared.`)
  }

  return (
    <AppShell pageTitle="Study pathway planner" pageEyebrow={`${pathway.credential} · ${selectedTerm.label}`}>
      <main className="pathway-page pathway-page--registration">
        <header className="pathway-hero">
          <div>
            <span className="eyebrow eyebrow--accent"><Sparkles size={14} /> Standalone study planner</span>
            <h1>Build a pathway that begins where you are.</h1>
            <p>Choose Nursing or Midwifery, begin at Year 1 or join later, record the terms you have already cleared, then register the individual course units you want DeepFocus to organise.</p>
          </div>
          <div className="pathway-hero__status">
            <span className="is-saved"><Check size={15} /> Local study record</span>
            <small>{savedLabel(plan.savedAt)}</small>
            <small>Private to this browser</small>
          </div>
        </header>

        <section className="pathway-stepper" aria-label="How the planner works">
          <article><span>01</span><div><small>Choose a pathway</small><strong>{pathway.credential}</strong></div></article>
          <article><span>02</span><div><small>Set your entry point</small><strong>{entryTerm.label}</strong></div></article>
          <article><span>03</span><div><small>Register for revision</small><strong>{registeredUnits.length} course unit{registeredUnits.length === 1 ? '' : 's'}</strong></div></article>
        </section>

        <section className="pathway-controls pathway-controls--expanded" aria-label="Pathway setup">
          <div className="pathway-control">
            <div className="pathway-control__heading"><span className="eyebrow">Study programme</span><h2>Keep each profession’s course sequence distinct.</h2></div>
            <div className="pathway-programmes" role="group" aria-label="Choose a study programme">
              {studyPathways.map((option) => (
                <button key={option.id} className={option.id === pathway.id ? 'is-active' : ''} onClick={() => choosePathway(option.id)}>
                  <GraduationCap size={18} /><span><strong>{option.credential}</strong><small>{option.units.length} individual course units · 5 study terms</small></span><Check size={16} />
                </button>
              ))}
            </div>
          </div>

          <div className="pathway-control pathway-control--rhythm">
            <div className="pathway-control__heading"><span className="eyebrow">Revision rhythm</span><h2>What fits your week?</h2></div>
            <div className="pathway-rhythm">
              <button onClick={() => changeSessions(-1)} disabled={plan.sessionsPerWeek === 1} aria-label="Reduce weekly sessions"><Minus size={18} /></button>
              <strong>{plan.sessionsPerWeek}</strong>
              <button onClick={() => changeSessions(1)} disabled={plan.sessionsPerWeek === 7} aria-label="Increase weekly sessions"><Plus size={18} /></button>
            </div>
            <p>{workloadCopy(plan.sessionsPerWeek)}</p>
            <small>This is a private revision preference, not academic credit or an official timetable.</small>
          </div>
        </section>

        <section className="term-navigator" aria-labelledby="pathway-map-title">
          <div className="term-navigator__heading"><div><span className="eyebrow">Curriculum map</span><h2 id="pathway-map-title">Start from any term, with the right history.</h2></div><span>{pathway.units.length} individual course units</span></div>
          <p className="planner-entry-copy">New at the beginning? Choose Year 1 · Semester 1. Joining later? Choose the term you are entering, then record the earlier terms your school has already cleared or credited.</p>
          <div className="term-navigator__list">
            {pathway.terms.map((term, index) => {
              const registered = getTermUnits(pathway, term.id).filter((unit) => plan.registeredUnitIds.includes(unit.id)).length
              const isEntry = term.id === plan.entryTermId
              return (
                <button key={term.id} className={term.id === selectedTerm.id ? 'is-active' : ''} onClick={() => setSelectedTermId(term.id)}>
                  <span className="term-navigator__number">{String(index + 1).padStart(2, '0')}</span>
                  <span><small>{term.label}</small><strong>{getTermUnits(pathway, term.id).length} course unit{getTermUnits(pathway, term.id).length === 1 ? '' : 's'}</strong></span>
                  <span className="term-navigator__meta">{isEntry ? 'Entry point' : registered ? `${registered} registered` : 'Explore term'}</span>
                </button>
              )
            })}
          </div>
          <div className="entry-term-selector" aria-label="Set study entry term">
            <div><span className="eyebrow">Your entry point</span><strong>{entryTerm.label}</strong><small>This sets where your own plan begins; it does not alter the published course sequence.</small></div>
            <div>{pathway.terms.map((term) => <button key={term.id} className={term.id === plan.entryTermId ? 'is-active' : ''} onClick={() => chooseEntryTerm(term.id)}>{`Y${term.year} S${term.semester}`}</button>)}</div>
          </div>
        </section>

        <section className="pathway-workspace">
          <div className="pathway-workspace__main">
            <header className="term-header">
              <div><span className="eyebrow eyebrow--accent">Selected study term</span><h2>{selectedTerm.label}</h2><p>{termUnits.length} individual course unit{termUnits.length === 1 ? '' : 's'} in the published {pathway.title.toLowerCase()} sequence. A unit is always displayed by its actual code, never merged into a generic paper.</p></div>
              <span className={readiness.ready ? 'term-header__focus' : 'term-header__focus term-header__focus--locked'}>{readiness.ready ? <BookOpenCheck size={16} /> : <Lock size={15} />}{readiness.ready ? 'Ready to register' : 'Clearance check'}</span>
            </header>

            <section className={readiness.ready ? 'clearance-panel is-ready' : 'clearance-panel'} aria-labelledby="clearance-title">
              <div className="clearance-panel__icon">{readiness.ready ? <CircleCheckBig size={21} /> : <Lock size={20} />}</div>
              <div><span className="eyebrow">Progression & clearance</span><h3 id="clearance-title">{readiness.ready ? 'This term is ready for your DeepFocus registration.' : 'Record earlier-term clearance first.'}</h3><p>{readiness.ready ? 'You can now choose only the course units you want in your local revision space.' : 'This planner checks that earlier study terms are recorded as completed or formally cleared before it opens a later term for revision registration.'}</p><small className="clearance-panel__boundary">This is a personal DeepFocus planning gate—not an institutional prerequisite ruling. No unit-level prerequisite has been invented.</small></div>
            </section>

            {!readiness.ready && (
              <section className="clearance-actions" aria-label="Record earlier term clearance">
                <div><strong>Clearance still needed</strong><p>Use these controls only to record results, credit, or clearance already confirmed by your school.</p></div>
                <div>{readiness.missingClearanceTerms.map((term) => <button key={term.id} onClick={() => toggleClearance(term.id)}><BadgeCheck size={16} /> Record {term.label} as cleared</button>)}</div>
              </section>
            )}

            <div className={`unit-list ${readiness.ready ? '' : 'unit-list--locked'}`}>
              {termUnits.map((unit) => {
                const isSelected = selectedUnitIds.includes(unit.id)
                const revisionMaps = unit.revisionMapIds?.map((id) => getCourseById(id)).filter((course): course is NonNullable<typeof course> => Boolean(course)) ?? []
                return (
                  <article key={unit.id} className={isSelected ? 'is-focused' : ''}>
                    <div className="unit-list__identity"><span>{unit.code}</span><h3>{unit.title}</h3><p>{revisionMaps.length ? `${revisionMaps.length} detailed DeepFocus revision map${revisionMaps.length === 1 ? '' : 's'} available.` : 'Registered course unit; a detailed DeepFocus study map has not yet been supplied.'}</p></div>
                    <div className="unit-list__actions"><button className={isSelected ? 'unit-focus is-focused' : 'unit-focus'} onClick={() => toggleUnit(unit.id)} disabled={!readiness.ready} aria-pressed={isSelected}>{isSelected ? <Check size={15} /> : <Plus size={15} />}{isSelected ? 'Selected' : 'Select unit'}</button></div>
                    {revisionMaps.length > 0 && <div className="unit-list__maps"><span>Open detailed revision map</span>{revisionMaps.map((course) => <button key={course.id} onClick={() => navigate(`/courses/${course.id}`)}>{course.title}<ArrowRight size={14} /></button>)}</div>}
                  </article>
                )
              })}
            </div>

            {readiness.ready && (
              <footer className="registration-tray">
                <div><span className="eyebrow">Local DeepFocus registration</span><strong>{selectedUnitIds.length} selected in {selectedTerm.label}</strong><p>Only confirmed units will appear in the dashboard. This does not enrol you with a school.</p></div>
                <button className="button button--primary" onClick={saveRegistration} disabled={!isSelectionChanged}><Check size={16} /> {selectedUnitIds.length ? `Save ${selectedUnitIds.length} selected unit${selectedUnitIds.length === 1 ? '' : 's'}` : 'Clear this term'}</button>
              </footer>
            )}
          </div>

          <aside className="pathway-summary">
            <section className="pathway-summary__card pathway-summary__card--dark">
              <span className="eyebrow">Your study space</span>
              <strong>{registeredUnits.length}</strong>
              <p>course unit{registeredUnits.length === 1 ? '' : 's'} registered for local revision.</p>
              <div><Clock3 size={15} /><span>{plan.sessionsPerWeek} deliberate session{plan.sessionsPerWeek === 1 ? '' : 's'} each week</span></div>
            </section>
            <section className="pathway-summary__card">
              <span className="eyebrow">Recorded progression</span>
              <h3>{plan.clearedTermIds.length} of {pathway.terms.length} terms marked as cleared</h3>
              <p>Clearance is a personal record for planning. It never awards credit, changes a result, or overrides your school.</p>
              {plan.clearedTermIds.length > 0 && <div className="clearance-history">{pathway.terms.filter((term) => plan.clearedTermIds.includes(term.id)).map((term) => <button key={term.id} onClick={() => toggleClearance(term.id)} title={`Remove ${term.label} clearance`}><Check size={12} /> {`Y${term.year} S${term.semester}`}</button>)}</div>}
            </section>
            <section className="pathway-summary__card">
              <span className="eyebrow">Curriculum reference</span>
              <h3>{pathway.source.title}</h3>
              <p>{pathway.source.note}</p>
              <a href={pathway.source.url} target="_blank" rel="noreferrer">Review source <ExternalLink size={14} /></a>
            </section>
            <section className="pathway-summary__boundary"><ShieldCheck size={18} /><div><strong>Important boundary</strong><p>DeepFocus organises your revision. Confirm course registration, prerequisites, clinical placement, and programme decisions directly with your school.</p></div></section>
          </aside>
        </section>

        {notice && <div className="planner-notice" role="status"><Check size={16} /><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss message">×</button></div>}

        <section className="pathway-calendar-link">
          <div><span className="eyebrow">Keep dates separate</span><h2>Your personal focus calendar is still here.</h2><p>The standalone pathway planner decides what belongs in your revision space. Use the calendar only when you want to place a personal study block on a date.</p></div>
          <button className="button button--quiet" onClick={() => navigate('/calendar')}>Open focus calendar <ChevronRight size={16} /></button>
        </section>

        <footer className="planner-boundary"><CircleAlert size={17} /><p>There is no institutional connection behind this frontend. Course registration, progression clearance, and dashboard updates are intentionally saved only in this browser.</p></footer>
      </main>
    </AppShell>
  )
}
