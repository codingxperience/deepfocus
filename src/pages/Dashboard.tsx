import { useEffect, useState, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  ChevronRight,
  CircleAlert,
  Clock3,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

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
  const requestedTerm = pathway.terms.find((term) => term.id === plan.activeTermId) ?? pathway.terms[0]
  const requestedTermUnits = getTermUnits(pathway, requestedTerm.id).filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const activeTerm = requestedTermUnits.length
    ? requestedTerm
    : pathway.terms.find((term) => getTermUnits(pathway, term.id).some((unit) => plan.registeredUnitIds.includes(unit.id))) ?? requestedTerm
  const activeUnits = getTermUnits(pathway, activeTerm.id).filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const activeMapIds = new Set(activeUnits.flatMap((unit) => unit.revisionMapIds ?? []))
  const activeCourses = courses.filter((course) => activeMapIds.has(course.id))
  const unitsWithoutMaps = activeUnits.filter((unit) => !(unit.revisionMapIds?.length))
  const coursesOutsideTerm = registeredUnits.length - activeUnits.length

  if (!registeredUnits.length) {
    return <EmptyDashboard onOpenPlanner={() => navigate('/planner')} />
  }

  return (
    <AppShell pageTitle="Dashboard" pageEyebrow={pathway.credential}>
      <main className="focused-dashboard">
        <section className="focused-dashboard__main">
          <header className="focused-dashboard__header">
            <div>
              <span className="eyebrow eyebrow--accent"><Sparkles size={14} /> Your current study term</span>
              <h1>{activeTerm.label}</h1>
              <p>{activeTerm.period} · {pathway.credential}</p>
            </div>
            <button className="focused-dashboard__manage" onClick={() => navigate('/planner')}>Manage plan <ChevronRight size={16} /></button>
          </header>

          <section className="term-overview" aria-label="Current study term overview">
            <div className="term-overview__intro">
              <span>Current term</span>
              <strong>A quiet, deliberate revision space.</strong>
              <p>Only the course choices you saved for this term appear here.</p>
            </div>
            <div className="term-overview__stat"><strong>{activeUnits.length}</strong><span>course unit{activeUnits.length === 1 ? '' : 's'} selected</span></div>
            <div className="term-overview__stat"><strong>{activeCourses.length}</strong><span>detailed map{activeCourses.length === 1 ? '' : 's'} ready</span></div>
          </section>

          <section className="focused-dashboard__courses" aria-labelledby="course-maps-title">
            <header className="focused-section-heading">
              <div>
                <span className="eyebrow">Course maps</span>
                <h2 id="course-maps-title">Continue where your term begins.</h2>
              </div>
              {activeCourses.length > 0 && <span>{activeCourses.length} ready to revise</span>}
            </header>

            {activeCourses.length > 0 && <div className="course-grid course-grid--focused">{activeCourses.map((course, index) => <CourseCard key={course.id} course={course} index={index} onOpen={() => navigate(`/courses/${course.id}`)} />)}</div>}
            {unitsWithoutMaps.length > 0 && <CourseAvailabilityNote units={unitsWithoutMaps} onOpenPlanner={() => navigate('/planner')} />}
            {!activeCourses.length && !unitsWithoutMaps.length && <TermSelectionNote onOpenPlanner={() => navigate('/planner')} />}
          </section>

          <footer className="dashboard-footer dashboard-footer--focused">
            <span>DeepFocus revision</span>
            <p>One term. One clear direction.</p>
          </footer>
        </section>

        <aside className="focused-dashboard__aside" aria-label="Study term tools">
          <section className="focus-rail-card focus-rail-card--primary">
            <span className="eyebrow">Your rhythm</span>
            <div className="focus-rail-card__metric"><strong>{plan.sessionsPerWeek}</strong><span>focused sessions<br />each week</span></div>
            <p>Build a pace you can return to—not one you have to recover from.</p>
            <button onClick={() => navigate('/calendar')}>Plan a focus block <CalendarDays size={15} /></button>
          </section>

          <section className="focus-rail-card">
            <div className="focus-rail-card__title"><BookOpenCheck size={17} /><strong>Study selection</strong></div>
            <p>{activeTerm.label} · {activeTerm.period}</p>
            {coursesOutsideTerm > 0 && <small>{coursesOutsideTerm} saved course unit{coursesOutsideTerm === 1 ? '' : 's'} in another term</small>}
            <button className="focus-rail-card__link" onClick={() => navigate('/planner')}>Review all terms <ArrowRight size={14} /></button>
          </section>

          <section className="focus-rail-note">
            <Clock3 size={17} />
            <p>Keep deadlines in the calendar. Keep course choices in the planner.</p>
          </section>
        </aside>
      </main>
    </AppShell>
  )
}

function EmptyDashboard({ onOpenPlanner }: { onOpenPlanner: () => void }) {
  return (
    <AppShell pageTitle="Dashboard">
      <main className="empty-dashboard">
        <section className="empty-dashboard__stage">
          <div className="empty-dashboard__halo" aria-hidden="true"><GraduationCap size={32} /></div>
          <span className="eyebrow eyebrow--accent">DeepFocus revision</span>
          <h1>Build a study space that fits your term.</h1>
          <p>Choose your Nursing or Midwifery pathway, select the term you are joining, then save the course units you want to revise. Your dashboard stays intentionally quiet until then.</p>
          <ol className="empty-dashboard__steps">
            <li><span>01</span><div><strong>Choose your pathway</strong><small>Certificate in Nursing or Certificate in Midwifery</small></div></li>
            <li><span>02</span><div><strong>Set your current term</strong><small>February–June or July–December, at the year and semester you are joining</small></div></li>
            <li><span>03</span><div><strong>Save your course choices</strong><small>Only saved choices are brought back to this dashboard</small></div></li>
          </ol>
          <button className="empty-dashboard__action" onClick={onOpenPlanner}>Build my study plan <ArrowRight size={17} /></button>
          <p className="empty-dashboard__note">Your planning choices are private to this device in the current prototype.</p>
        </section>
      </main>
    </AppShell>
  )
}

function CourseAvailabilityNote({ units, onOpenPlanner }: { units: ReturnType<typeof getRegisteredUnits>; onOpenPlanner: () => void }) {
  return <section className="course-availability-note"><CircleAlert size={19} /><div><strong>Your course selection is saved.</strong><p>{units.length === 1 ? units[0].title : `${units.length} selected course units`} {units.length === 1 ? 'does' : 'do'} not have a supplied DeepFocus weekly map yet. The planner keeps the unit visible without inventing material.</p></div><button onClick={onOpenPlanner}>Review plan <ChevronRight size={15} /></button></section>
}

function TermSelectionNote({ onOpenPlanner }: { onOpenPlanner: () => void }) {
  return <section className="course-availability-note course-availability-note--quiet"><BookOpenCheck size={19} /><div><strong>Your saved choices are in another term.</strong><p>Choose the term you want to work on in the planner, then this dashboard will bring that selection forward.</p></div><button onClick={onOpenPlanner}>Open planner <ChevronRight size={15} /></button></section>
}

function CourseCard({ course, index, onOpen }: { course: Course; index: number; onOpen: () => void }) {
  return <button className="course-card course-card--interactive" onClick={onOpen} aria-label={`Open ${course.title}`}>
    <div className="course-card__image">
      <img src={course.image} alt="" />
      <span className="course-card__wash" style={{ '--course-accent': course.accent } as CSSProperties} />
      <span className="course-card__number">0{index + 1}</span>
      <span className="course-card__status"><span /> In your term</span>
    </div>
    <div className="course-card__content">
      <span className="course-card__code">{course.code}</span>
      <h3>{course.title}</h3>
      <div className="course-card__meta"><span><span className="mini-progress"><i /></span> {course.weeks.length} weeks</span><span className="course-card__open">Open course <ArrowRight size={15} /></span></div>
    </div>
  </button>
}
