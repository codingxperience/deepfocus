import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  MoreHorizontal,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { ProgressRing } from '../components/ProgressRing'
import { getStudyPathway } from '../curriculum'
import { courses, type Course } from '../data'
import { getPathwayPlan, getRegisteredUnits, loadPlannerState, plannerChangeEvent, type PlannerState } from '../planner'

type DashboardFilter = 'registered' | 'library'

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
  const [filter, setFilter] = useState<DashboardFilter>('registered')
  const navigate = useNavigate()
  const plannerRecord = usePlannerRecord()
  const pathway = getStudyPathway(plannerRecord.activePathwayId)
  const plan = getPathwayPlan(plannerRecord, pathway.id)
  const registeredUnits = getRegisteredUnits(plannerRecord)
  const registeredMapIds = new Set(registeredUnits.flatMap((unit) => unit.revisionMapIds ?? []))
  const registeredCourses = courses.filter((course) => registeredMapIds.has(course.id))
  const unitsWithoutMaps = registeredUnits.filter((unit) => !(unit.revisionMapIds?.length))
  const visibleCourses = filter === 'registered' ? registeredCourses : courses
  const featuredCourse = registeredCourses[0]
  const entryTerm = pathway.terms.find((term) => term.id === plan.entryTermId) ?? pathway.terms[0]

  return (
    <AppShell pageTitle="Dashboard">
      <div className="dashboard-layout">
        <section className="dashboard-main">
          <header className="page-heading page-heading--dashboard">
            <div>
              <span className="eyebrow eyebrow--accent"><Sparkles size={14} /> Your learning space</span>
              <h1>Welcome back.</h1>
              <p>{registeredUnits.length ? `${pathway.credential} · ${registeredUnits.length} local revision registration${registeredUnits.length === 1 ? '' : 's'}.` : 'Start a pathway, then choose the individual course units you want to revise.'}</p>
            </div>
            <div className="segmented-control" aria-label="Choose dashboard view">
              <button className={filter === 'registered' ? 'is-active' : ''} onClick={() => setFilter('registered')}>My study space</button>
              <button className={filter === 'library' ? 'is-active' : ''} onClick={() => setFilter('library')}>Course maps</button>
            </div>
          </header>

          <section className="dashboard-pathway-summary" aria-label="Active study pathway">
            <div><span className="eyebrow">Active pathway</span><strong>{pathway.credential}</strong><small>Entry point: {entryTerm.label}</small></div>
            <div><span className="eyebrow">Revision rhythm</span><strong>{plan.sessionsPerWeek} sessions</strong><small>per personal study week</small></div>
            <div><span className="eyebrow">Clearance record</span><strong>{plan.clearedTermIds.length} terms</strong><small>recorded for planning</small></div>
            <button onClick={() => navigate('/planner')}>Open planner <ArrowRight size={15} /></button>
          </section>

          <div className="section-heading">
            <div>
              <h2>{filter === 'registered' ? 'Your registered course maps' : 'Available detailed course maps'}</h2>
              <span>{filter === 'registered' ? `${registeredCourses.length} detailed map${registeredCourses.length === 1 ? '' : 's'}` : `${courses.length} supplied maps`}</span>
            </div>
            {filter === 'library' && <button className="text-button"><SlidersHorizontal size={16} /> Sort</button>}
          </div>

          {filter === 'registered' && !registeredUnits.length ? (
            <PlannerEmptyState onOpen={() => navigate('/planner')} />
          ) : (
            <>
              {visibleCourses.length > 0 && <div className="course-grid">{visibleCourses.map((course, index) => <CourseCard key={course.id} course={course} index={index} registered={registeredMapIds.has(course.id)} onOpen={() => navigate(`/courses/${course.id}`)} />)}</div>}
              {filter === 'registered' && unitsWithoutMaps.length > 0 && <RegisteredUnitList units={unitsWithoutMaps} onOpenPlanner={() => navigate('/planner')} />}
              {filter === 'registered' && registeredUnits.length > 0 && !visibleCourses.length && <NoDetailedMapsState onOpen={() => navigate('/planner')} />}
            </>
          )}

          <footer className="dashboard-footer">
            <span>DeepFocus revision</span>
            <p>Local study choices, deliberate clinical revision.</p>
          </footer>
        </section>

        <LearningPanel course={featuredCourse} pathwayLabel={pathway.credential} registeredUnitCount={registeredUnits.length} />
      </div>
    </AppShell>
  )
}

function PlannerEmptyState({ onOpen }: { onOpen: () => void }) {
  return <section className="dashboard-empty-state"><span><BookOpenCheck size={25} /></span><div><span className="eyebrow">No local registrations yet</span><h3>Build the study space around your actual pathway.</h3><p>Choose Nursing or Midwifery, select the term where you begin, record earlier clearance if you joined later, and register only the units you want DeepFocus to surface here.</p></div><button className="button button--primary" onClick={onOpen}>Open study planner <ArrowRight size={16} /></button></section>
}

function NoDetailedMapsState({ onOpen }: { onOpen: () => void }) {
  return <section className="dashboard-no-maps"><CircleAlert size={19} /><div><strong>Your course-unit registration is saved.</strong><p>Detailed DeepFocus weekly maps have only been supplied for selected Nursing Year 2 Semester 1 material. The planner has kept your other registered units visible without fabricating lessons.</p></div><button onClick={onOpen}>Review registration <ChevronRight size={15} /></button></section>
}

function RegisteredUnitList({ units, onOpenPlanner }: { units: ReturnType<typeof getRegisteredUnits>; onOpenPlanner: () => void }) {
  return <section className="registered-unit-list"><header><div><span className="eyebrow">Registered course units</span><h3>Saved without invented study material.</h3></div><span>{units.length} unit{units.length === 1 ? '' : 's'}</span></header><div>{units.map((unit) => <article key={unit.id}><span>{unit.code}</span><div><strong>{unit.title}</strong><small>Local DeepFocus registration · Detailed revision map not yet supplied</small></div><Check size={17} /></article>)}</div><button onClick={onOpenPlanner}>Manage registrations in planner <ArrowRight size={15} /></button></section>
}

function CourseCard({ course, index, registered, onOpen }: { course: Course; index: number; registered: boolean; onOpen: () => void }) {
  return <button className="course-card course-card--interactive" onClick={onOpen} aria-label={`Open ${course.title}`}>
    <div className="course-card__image">
      <img src={course.image} alt="" />
      <span className="course-card__wash" style={{ '--course-accent': course.accent } as React.CSSProperties} />
      <span className="course-card__number">0{index + 1}</span>
      {registered && <span className="course-card__status"><span /> Registered</span>}
      <span className="course-card__more" aria-hidden="true"><MoreHorizontal size={20} /></span>
    </div>
    <div className="course-card__content">
      <span className="course-card__code">{course.code}</span>
      <h3>{course.title}</h3>
      <div className="course-card__meta"><span><span className="mini-progress"><i /></span> {course.weeks.length} weeks</span><span className="course-card__open">Open course <ArrowRight size={15} /></span></div>
    </div>
  </button>
}

function LearningPanel({ course, pathwayLabel, registeredUnitCount }: { course?: Course; pathwayLabel: string; registeredUnitCount: number }) {
  const navigate = useNavigate()
  const weeks = course?.weeks ?? []

  if (!course) {
    return <aside className="learning-panel"><div className="learning-panel__sticky"><div className="learning-panel__brand"><span className="eyebrow">Your pathway</span><span className="live-date">Private study record</span></div><section className="focus-card focus-card--empty"><div className="focus-card__top"><div><span className="focus-card__label"><span /> {pathwayLabel}</span><h2>{registeredUnitCount ? 'Choose a detailed map when it is ready.' : 'Your next step starts in the planner.'}</h2><p>{registeredUnitCount ? 'Your course-unit registrations are saved. DeepFocus has not been given a detailed weekly map for them yet.' : 'The dashboard will reflect the course units you confirm for local revision.'}</p></div><ProgressRing value={0} size={58} /></div><button onClick={() => navigate('/planner')}>Open planner <ArrowRight size={16} /></button></section><section className="study-note"><div className="study-note__icon"><Clock3 size={18} /></div><div><strong>Keep the calendar separate.</strong><p>Use the planner for pathway decisions and the calendar for dates that genuinely help you study.</p></div></section></div></aside>
  }

  return <aside className="learning-panel"><div className="learning-panel__sticky"><div className="learning-panel__brand"><span className="eyebrow">Today</span><span className="live-date">Registered map</span></div><section className="focus-card"><div className="focus-card__top"><div><span className="focus-card__label"><span /> In your study space</span><h2>{course.title}</h2><p>{course.kicker}</p></div><ProgressRing value={0} size={58} /></div><button onClick={() => navigate(`/courses/${course.id}`)}>Enter course <ArrowRight size={16} /></button></section><section className="learning-list"><div className="panel-heading"><h3>Your course path</h3><span>{weeks.length} weeks</span></div><div className="path-list">{weeks.slice(0, 4).map((week, index) => <button key={week.number} onClick={() => navigate(`/courses/${course.id}/modules?week=${week.number}`)}><span className={`path-list__check${index === 0 ? ' path-list__check--next' : ''}`}>{index === 0 ? <BookOpenCheck size={16} /> : <span>{week.number}</span>}</span><span className="path-list__copy"><small>Week {String(week.number).padStart(2, '0')}</small><strong>{week.shortTitle}</strong></span><ChevronRight size={16} /></button>)}</div><button className="view-all-button" onClick={() => navigate(`/courses/${course.id}/modules`)}>View all modules <ArrowRight size={15} /></button></section><section className="study-note"><div className="study-note__icon"><Clock3 size={18} /></div><div><strong>Small sessions, stronger recall.</strong><p>Choose one concept, study it fully, then test what stayed.</p></div></section><div className="learning-panel__footer"><span><Check size={13} /> Local registration</span><span>DeepFocus</span></div></div></aside>
}
