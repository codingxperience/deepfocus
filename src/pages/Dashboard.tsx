import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  Clock3,
  MoreHorizontal,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { ProgressRing } from '../components/ProgressRing'
import { courseWeeks, courses, type Course } from '../data'

export function Dashboard() {
  const [filter, setFilter] = useState<'all' | 'active'>('all')
  const navigate = useNavigate()
  const visibleCourses = useMemo(
    () => filter === 'active' ? courses.filter((course) => course.active) : courses,
    [filter],
  )

  return (
    <AppShell pageTitle="Dashboard">
      <div className="dashboard-layout">
        <section className="dashboard-main">
          <header className="page-heading page-heading--dashboard">
            <div>
              <span className="eyebrow eyebrow--accent"><Sparkles size={14} /> Your learning space</span>
              <h1>Welcome back.</h1>
              <p>Six nursing courses. One clear place to focus.</p>
            </div>
            <div className="segmented-control" aria-label="Filter courses">
              <button className={filter === 'all' ? 'is-active' : ''} onClick={() => setFilter('all')}>All courses</button>
              <button className={filter === 'active' ? 'is-active' : ''} onClick={() => setFilter('active')}>In focus</button>
            </div>
          </header>

          <div className="section-heading">
            <div>
              <h2>Your courses</h2>
              <span>{visibleCourses.length} course{visibleCourses.length === 1 ? '' : 's'}</span>
            </div>
            <button className="text-button"><SlidersHorizontal size={16} /> Sort</button>
          </div>

          <div className="course-grid">
            {visibleCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} onOpen={() => navigate(`/courses/${course.id}`)} />
            ))}
          </div>

          <footer className="dashboard-footer">
            <span>DeepFocus revision</span>
            <p>Built for deliberate, distraction-free learning.</p>
          </footer>
        </section>

        <LearningPanel />
      </div>
    </AppShell>
  )
}

function CourseCard({ course, index, onOpen }: { course: Course; index: number; onOpen: () => void }) {
  const content = (
    <>
      <div className="course-card__image">
        <img src={course.image} alt="" />
        <span className="course-card__wash" style={{ '--course-accent': course.accent } as React.CSSProperties} />
        <span className="course-card__number">0{index + 1}</span>
        {course.active && <span className="course-card__status"><span /> In focus</span>}
        <span className="course-card__more" aria-hidden="true"><MoreHorizontal size={20} /></span>
      </div>
      <div className="course-card__content">
        <span className="course-card__code">{course.code}</span>
        <h3>{course.title}</h3>
        <div className="course-card__meta">
          <span><span className="mini-progress"><i /></span> {course.weeks.length} weeks</span>
          <span className="course-card__open">Open course <ArrowRight size={15} /></span>
        </div>
      </div>
    </>
  )

  return course.weeks.length ? (
    <button className="course-card course-card--interactive" onClick={onOpen} aria-label={`Open ${course.title}`}>
      {content}
    </button>
  ) : (
    <article className="course-card">{content}</article>
  )
}

function LearningPanel() {
  const navigate = useNavigate()
  return (
    <aside className="learning-panel">
      <div className="learning-panel__sticky">
        <div className="learning-panel__brand">
          <span className="eyebrow">Today</span>
          <span className="live-date">Course preview</span>
        </div>

        <section className="focus-card">
          <div className="focus-card__top">
            <div>
              <span className="focus-card__label"><span /> In focus</span>
              <h2>Pharmacology I</h2>
              <p>Introduction to Pharmacology</p>
            </div>
            <ProgressRing value={0} size={58} />
          </div>
            <button onClick={() => navigate('/courses/pharmacology-1')}>
            Enter course <ArrowRight size={16} />
          </button>
        </section>

        <section className="learning-list">
          <div className="panel-heading">
            <h3>Your course path</h3>
            <span>5 weeks</span>
          </div>
          <div className="path-list">
            {courseWeeks.slice(0, 4).map((week, index) => (
              <button key={week.number} onClick={() => navigate(`/courses/pharmacology-1/modules?week=${week.number}`)}>
                <span className={`path-list__check${index === 0 ? ' path-list__check--next' : ''}`}>
                  {index === 0 ? <BookOpenCheck size={16} /> : <span>{week.number}</span>}
                </span>
                <span className="path-list__copy">
                  <small>Week {String(week.number).padStart(2, '0')}</small>
                  <strong>{week.shortTitle}</strong>
                </span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
          <button className="view-all-button" onClick={() => navigate('/courses/pharmacology-1/modules')}>View all modules <ArrowRight size={15} /></button>
        </section>

        <section className="study-note">
          <div className="study-note__icon"><Clock3 size={18} /></div>
          <div><strong>Small sessions, stronger recall.</strong><p>Choose one concept, study it fully, then test what stayed.</p></div>
        </section>

        <div className="learning-panel__footer">
          <span><Check size={13} /> Focus-first design</span>
          <span>v1.0 preview</span>
        </div>
      </div>
    </aside>
  )
}
