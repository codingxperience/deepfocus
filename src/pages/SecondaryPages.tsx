import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Inbox,
  Mail,
  Moon,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Type,
  UserRound,
} from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { courses, courseWeeks } from '../data'

export function CoursesPage() {
  const navigate = useNavigate()
  return (
    <AppShell pageTitle="Courses">
      <div className="standard-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><BookOpen size={14} /> Course library</span><h1>All courses</h1><p>Your six nursing course spaces, together in one clear view.</p></div></header>
        <div className="library-list">
          {courses.map((course) => (
            <article key={course.id} className={course.active ? 'is-active' : ''}>
              <img src={course.image} alt="" />
              <span className="library-list__code">{course.code}</span>
              <div><h2>{course.title}</h2><p>{course.active ? 'Full five-week course available' : 'Course card only'}</p></div>
              {course.active ? <button onClick={() => navigate('/courses/pharmacology')}>Open <ArrowRight size={15} /></button> : <span className="quiet-badge">Overview only</span>}
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  )
}

export function PlanPage() {
  const navigate = useNavigate()
  return (
    <AppShell pageTitle="Plan">
      <div className="standard-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><CalendarDays size={14} /> Learning plan</span><h1>Five weeks at a glance.</h1><p>The course outline defines the sequence. Choose your own start date and pace.</p></div><button className="button button--quiet">Set a start date</button></header>
        <div className="plan-timeline">
          {courseWeeks.map((week) => <button key={week.number} onClick={() => navigate(`/courses/pharmacology/modules?week=${week.number}`)}><span className="plan-timeline__number">{String(week.number).padStart(2, '0')}</span><span><small>Week {week.number}</small><strong>{week.title}</strong><p>{week.description}</p></span><ChevronRight size={18} /></button>)}
        </div>
      </div>
    </AppShell>
  )
}

export function InboxPage() {
  return (
    <AppShell pageTitle="Inbox">
      <div className="standard-page inbox-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><Inbox size={14} /> Messages</span><h1>Inbox</h1><p>A quiet place for course communication when it becomes available.</p></div><button className="button button--quiet"><Search size={16} /> Search</button></header>
        <div className="inbox-layout">
          <aside><button className="is-active"><Mail size={17} /> All messages <span>2</span></button><button><Bell size={17} /> Updates</button></aside>
          <section className="empty-state"><span className="empty-state__icon"><Mail size={27} /></span><h2>No course messages yet.</h2><p>When a course includes announcements or teacher communication, it will appear here.</p><span className="quiet-badge">Frontend state</span></section>
        </div>
      </div>
    </AppShell>
  )
}

export function ProfilePage() {
  const [saved, setSaved] = useState(false)
  return (
    <AppShell pageTitle="Profile">
      <div className="standard-page profile-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><UserRound size={14} /> Learning profile</span><h1>Your revision space.</h1><p>Keep personal details optional. Shape only what helps you study.</p></div></header>
        <div className="profile-layout">
          <aside className="profile-card"><span className="avatar avatar--profile">DF</span><h2>DeepFocus learner</h2><p>Your profile is private to this local preview.</p><span><ShieldCheck size={15} /> No account data connected</span></aside>
          <form className="profile-form" onSubmit={(event) => { event.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 1800) }}>
            <div className="form-heading"><div><h2>Study preferences</h2><p>Used only to shape your own interface.</p></div>{saved && <span className="saved-state"><Check size={14} /> Saved</span>}</div>
            <label><span>Display name</span><input placeholder="Add your name (optional)" /></label>
            <label><span>Primary study goal</span><textarea placeholder="What would make this revision time meaningful?" rows={4} /></label>
            <fieldset><legend>Preferred focus session</legend><div className="choice-row"><label><input type="radio" name="session" defaultChecked /> 20 minutes</label><label><input type="radio" name="session" /> 30 minutes</label><label><input type="radio" name="session" /> 45 minutes</label></div></fieldset>
            <button className="button button--primary" type="submit">Save preferences</button>
          </form>
        </div>
      </div>
    </AppShell>
  )
}

export function SettingsPage() {
  const [largeType, setLargeType] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  return (
    <AppShell pageTitle="Settings">
      <div className="standard-page settings-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><Settings size={14} /> Preferences</span><h1>Make DeepFocus yours.</h1><p>Simple controls for a calmer, more accessible study environment.</p></div></header>
        <section className="settings-card">
          <div className="settings-card__heading"><h2>Accessibility</h2><p>These preferences affect this browser preview.</p></div>
          <SettingRow icon={Type} title="Larger interface text" helper="Increase the base reading size." active={largeType} onToggle={() => { setLargeType(!largeType); document.documentElement.classList.toggle('large-type') }} />
          <SettingRow icon={Moon} title="Reduce motion" helper="Minimise interface movement and transitions." active={reducedMotion} onToggle={() => { setReducedMotion(!reducedMotion); document.documentElement.classList.toggle('reduce-motion') }} />
        </section>
      </div>
    </AppShell>
  )
}

function SettingRow({ icon: Icon, title, helper, active, onToggle }: { icon: typeof Type; title: string; helper: string; active: boolean; onToggle: () => void }) {
  return <div className="setting-row"><span className="setting-row__icon"><Icon size={19} /></span><span><strong>{title}</strong><small>{helper}</small></span><button className={`toggle${active ? ' is-active' : ''}`} onClick={onToggle} aria-pressed={active}><i /></button></div>
}

export function HistoryPage() {
  return (
    <AppShell pageTitle="History">
      <div className="standard-page"><header className="standard-header"><div><span className="eyebrow eyebrow--accent"><Clock3 size={14} /> Recent learning</span><h1>Learning history</h1><p>Your recently visited course areas will be easy to return to.</p></div></header><section className="empty-state empty-state--bordered"><span className="empty-state__icon"><Clock3 size={27} /></span><h2>Nothing to revisit yet.</h2><p>Open a pharmacology module and your path can begin here.</p></section></div>
    </AppShell>
  )
}

export function HelpPage() {
  return (
    <AppShell pageTitle="Help">
      <div className="standard-page"><header className="standard-header"><div><span className="eyebrow eyebrow--accent"><CircleHelp size={14} /> Help centre</span><h1>How can we help?</h1><p>Clear guidance for navigating this frontend preview.</p></div></header><div className="help-grid"><article><Sparkles size={22} /><h2>Start with Pharmacology</h2><p>Open the highlighted course from your dashboard, then select Week 01.</p></article><article><CalendarDays size={22} /><h2>Choose your pace</h2><p>The Plan view follows the five supplied topics without inventing fixed dates.</p></article><article><Settings size={22} /><h2>Adjust your space</h2><p>Use Settings to enlarge text or reduce interface motion.</p></article></div></div>
    </AppShell>
  )
}
