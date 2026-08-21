import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, ChevronRight, Sparkles } from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { getStudyPathway, getTermUnits } from '../curriculum'
import { courses, type Course } from '../data'
import { getPathwayPlan, getRegisteredUnits, loadPlannerState, plannerChangeEvent, type PlannerState } from '../planner'

function usePlannerRecord() {
  const [record, setRecord] = useState<PlannerState>(loadPlannerState)

  useEffect(() => {
    const refresh = () => setRecord(loadPlannerState())
    window.addEventListener(plannerChangeEvent, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(plannerChangeEvent, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  return record
}

export function Dashboard() {
  const navigate = useNavigate()
  const plannerRecord = usePlannerRecord()
  const pathway = getStudyPathway(plannerRecord.activePathwayId)
  const plan = getPathwayPlan(plannerRecord, pathway.id)
  const registeredUnits = getRegisteredUnits(plannerRecord)

  if (!registeredUnits.length) {
    return <EmptyDashboard onOpenPlanner={() => navigate('/planner')} />
  }

  const requestedTerm = pathway.terms.find((term) => term.id === plan.activeTermId) ?? pathway.terms[0]
  const termWithSelections = pathway.terms.find((term) => getTermUnits(pathway, term.id).some((unit) => plan.registeredUnitIds.includes(unit.id)))
  const activeTerm = getTermUnits(pathway, requestedTerm.id).some((unit) => plan.registeredUnitIds.includes(unit.id)) ? requestedTerm : termWithSelections ?? requestedTerm
  const activeUnits = getTermUnits(pathway, activeTerm.id).filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const activeMapIds = new Set(activeUnits.flatMap((unit) => unit.revisionMapIds ?? []))
  const activeCourses = courses.filter((course) => activeMapIds.has(course.id))

  return (
    <AppShell pageTitle="Dashboard" pageEyebrow={pathway.credential}>
      <main className="minimal-dashboard">
        <header className="minimal-dashboard__header">
          <div>
            <span className="eyebrow eyebrow--accent"><Sparkles size={13} /> Your current study term</span>
            <h1>Dashboard</h1>
          </div>
          <button onClick={() => navigate('/planner')}>Manage plan <ChevronRight size={16} /></button>
        </header>

        <section className="minimal-dashboard__term" aria-label="Current study term">
          <span>Current term</span>
          <div><strong>{activeTerm.label}</strong><p>{activeTerm.period} · {pathway.credential}</p></div>
        </section>

        <section className="minimal-dashboard__section" aria-labelledby="recent-study">
          <header><h2 id="recent-study">Recent study</h2></header>
          {activeCourses.length > 0
            ? <div className="minimal-study-list">{activeCourses.map((course) => <StudyRow key={course.id} course={course} onOpen={() => navigate(`/courses/${course.id}`)} />)}</div>
            : <EmptyStudyState activeUnits={activeUnits.length} onOpenPlanner={() => navigate('/planner')} />}
        </section>

        <footer className="minimal-dashboard__footer"><span>DeepFocus revision</span><p>Private study planning</p></footer>
      </main>
    </AppShell>
  )
}

function EmptyDashboard({ onOpenPlanner }: { onOpenPlanner: () => void }) {
  return (
    <AppShell pageTitle="Dashboard">
      <main className="minimal-dashboard minimal-dashboard--empty">
        <header className="minimal-dashboard__header">
          <div><span className="eyebrow eyebrow--accent"><Sparkles size={13} /> DeepFocus revision</span><h1>Dashboard</h1></div>
        </header>
        <section className="minimal-dashboard__notice" role="status">
          <BookOpen size={18} />
          <div><strong>Your study space is ready when you are.</strong><p>Choose a pathway and term in the planner to add your course units here.</p></div>
          <button onClick={onOpenPlanner}>Open planner <ArrowRight size={15} /></button>
        </section>
        <section className="minimal-dashboard__section" aria-labelledby="recent-study-empty"><header><h2 id="recent-study-empty">Recent study</h2></header><p className="minimal-dashboard__empty-copy">Nothing to show yet.</p></section>
        <footer className="minimal-dashboard__footer"><span>DeepFocus revision</span><p>Private study planning</p></footer>
      </main>
    </AppShell>
  )
}

function EmptyStudyState({ activeUnits, onOpenPlanner }: { activeUnits: number; onOpenPlanner: () => void }) {
  return <div className="minimal-dashboard__empty-state"><p>{activeUnits ? 'No detailed revision map is available for this term yet.' : 'No course units have been selected for this term yet.'}</p><button onClick={onOpenPlanner}>{activeUnits ? 'Review plan' : 'Choose a term'} <ArrowRight size={14} /></button></div>
}

function StudyRow({ course, onOpen }: { course: Course; onOpen: () => void }) {
  return <button className="minimal-study-row" onClick={onOpen} aria-label={`Open ${course.title}`}>
    <span className="minimal-study-row__image"><img src={course.image} alt="" /></span>
    <span className="minimal-study-row__copy"><small>{course.code}</small><strong>{course.title}</strong><em>{course.weeks.length} week revision map</em></span>
    <ChevronRight size={17} />
  </button>
}
