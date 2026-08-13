import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CirclePlay,
  Clock3,
  FileText,
  Layers3,
  Sparkles,
} from 'lucide-react'

import pharmacologyImage from '../../pharmacology.jpeg'
import { CourseShell } from '../components/CourseShell'
import { ProgressRing } from '../components/ProgressRing'
import { courseWeeks } from '../data'

export function CourseOverview() {
  const navigate = useNavigate()

  return (
    <CourseShell sectionTitle="Course overview">
      <div className="course-overview">
        <section className="course-hero">
          <img src={pharmacologyImage} alt="Pharmacology learners in a laboratory" />
          <span className="course-hero__overlay" />
          <div className="course-hero__content">
            <span className="course-hero__eyebrow"><Sparkles size={14} /> Introduction to Pharmacology</span>
            <h1>Understand medicines.<br />Strengthen every decision.</h1>
            <p>A five-week foundation in how medicines are named, prepared, organised, used, and understood in the body.</p>
            <div className="course-hero__actions">
              <button className="button button--primary" onClick={() => navigate('/courses/pharmacology/modules?week=1')}><CirclePlay size={18} fill="currentColor" /> Start Week 01</button>
              <button className="button button--glass" onClick={() => navigate('/courses/pharmacology/outline')}><FileText size={17} /> View outline</button>
            </div>
          </div>
          <div className="course-hero__meta">
            <span><Clock3 size={15} /> 5 weeks</span>
            <span><Layers3 size={15} /> 15 learning steps</span>
            <span><BookOpen size={15} /> Foundation course</span>
          </div>
        </section>

        <div className="course-overview__grid">
          <div className="course-overview__main">
            <section className="welcome-block">
              <span className="eyebrow eyebrow--accent">Course introduction</span>
              <h2>Welcome to Pharmacology I.</h2>
              <p className="welcome-block__lead">This course begins with the language of medicines, then builds one careful layer at a time—from where medicines come from to how they move through and act within the body.</p>
              <div className="principle-grid">
                <div><span>01</span><strong>Learn the language</strong><p>Build the vocabulary that makes later concepts easier to understand.</p></div>
                <div><span>02</span><strong>Connect the system</strong><p>See how sources, use, classification, movement, and effect fit together.</p></div>
                <div><span>03</span><strong>Check your recall</strong><p>End every week by retrieving the ideas that matter most.</p></div>
              </div>
            </section>

            <section className="week-section">
              <div className="section-heading section-heading--large">
                <div><span className="eyebrow">Course path</span><h2>Five weeks. One connected story.</h2></div>
                <button className="text-button" onClick={() => navigate('/courses/pharmacology/modules')}>View modules <ArrowRight size={16} /></button>
              </div>
              <div className="week-grid">
                {courseWeeks.map((week) => (
                  <button key={week.number} onClick={() => navigate(`/courses/pharmacology/modules?week=${week.number}`)}>
                    <span className="week-grid__number">{String(week.number).padStart(2, '0')}</span>
                    <span className="week-grid__copy"><small>Week {week.number}</small><strong>{week.shortTitle}</strong></span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </section>
          </div>

          <aside className="course-progress-card">
            <span className="eyebrow">Your progress</span>
            <div className="course-progress-card__value">
              <ProgressRing value={0} size={84} />
              <div><strong>Ready to begin</strong><p>Your first topic is waiting.</p></div>
            </div>
            <div className="course-progress-card__rule" />
            <span className="course-progress-card__next">Up next</span>
            <h3>Terms used in Pharmacology</h3>
            <p>Build the vocabulary needed to describe medicines and their actions.</p>
            <button onClick={() => navigate('/courses/pharmacology/modules?week=1')}>Begin Week 01 <ArrowRight size={16} /></button>
            <div className="course-progress-card__detail"><Check size={14} /><span>Progress begins when you complete a learning step.</span></div>
          </aside>
        </div>
      </div>
    </CourseShell>
  )
}
