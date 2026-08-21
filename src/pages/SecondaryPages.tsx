import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Archive,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  FilePenLine,
  Mail,
  MailOpen,
  MoreHorizontal,
  PenLine,
  Plus,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Type,
  UserRound,
  X,
} from 'lucide-react'

import { getRecentActivity, relativeActivityTime, type RecentActivity } from '../activity'
import { AppShell } from '../components/AppShell'
import { courses } from '../data'
import { applyInterfacePreference, getInterfacePreference } from '../preferences'

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
              <div><h2>{course.title}</h2><p>{course.weeks.length}-week syllabus available</p></div>
              <button onClick={() => navigate(`/courses/${course.id}`)}>Open <ArrowRight size={15} /></button>
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  )
}

type CalendarEvent = {
  id: string
  date: string
  title: string
  course: string
  kind: 'suggested' | 'personal'
}

const starterFocusBlocks: CalendarEvent[] = [
  { id: 'focus-1', date: '2026-08-02', title: 'Language of pharmacology', course: 'Pharmacology I · Suggested focus', kind: 'suggested' },
  { id: 'focus-2', date: '2026-08-04', title: 'Medical nursing foundations', course: 'Medical Nursing I · Suggested focus', kind: 'suggested' },
  { id: 'focus-3', date: '2026-08-06', title: 'Sources of medicines', course: 'Pharmacology I · Suggested focus', kind: 'suggested' },
  { id: 'focus-4', date: '2026-08-09', title: 'Aseptic technique', course: 'Surgical Nursing I · Suggested focus', kind: 'suggested' },
  { id: 'focus-5', date: '2026-08-13', title: 'Essential medicines', course: 'Pharmacology I · Suggested focus', kind: 'suggested' },
  { id: 'focus-6', date: '2026-08-16', title: 'Newborn care', course: 'Paediatric Nursing I · Suggested focus', kind: 'suggested' },
]

export function PlanPage() {
  const [currentMonth, setCurrentMonth] = useState(() => new Date(2026, 7, 1))
  const [view, setView] = useState<'month' | 'week' | 'agenda'>('month')
  const [events, setEvents] = useState<CalendarEvent[]>(starterFocusBlocks)
  const [showSuggested, setShowSuggested] = useState(true)
  const [showPersonal, setShowPersonal] = useState(true)
  const [composerOpen, setComposerOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const monthLabel = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentMonth)
  const monthDays = useMemo(() => makeMonthGrid(currentMonth), [currentMonth])
  const visibleEvents = events.filter((event) => (event.kind === 'suggested' ? showSuggested : showPersonal))

  const shiftMonth = (amount: number) => setCurrentMonth((previous) => new Date(previous.getFullYear(), previous.getMonth() + amount, 1))
  const today = () => setCurrentMonth(new Date(2026, 7, 1))
  const addFocusBlock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const title = String(values.get('title') ?? '').trim()
    const date = String(values.get('date') ?? '')
    const course = String(values.get('course') ?? 'Personal study plan')
    if (!title || !date) return
    setEvents((previous) => [...previous, { id: `personal-${Date.now()}`, title, date, course: `${course} · Personal focus`, kind: 'personal' }])
    setCurrentMonth(new Date(`${date}T12:00:00`))
    setComposerOpen(false)
  }

  return (
    <AppShell pageTitle="Calendar">
      <div className="calendar-page">
        <header className="calendar-toolbar">
          <div className="calendar-toolbar__month"><button className="button button--quiet" onClick={today}>Today</button><span className="calendar-toolbar__arrows"><button onClick={() => shiftMonth(-1)} aria-label="Previous month"><ChevronLeft size={17} /></button><button onClick={() => shiftMonth(1)} aria-label="Next month"><ChevronRight size={17} /></button></span><h1>{monthLabel}</h1></div>
          <div className="calendar-toolbar__actions"><div className="calendar-view-switch" aria-label="Calendar view">{(['week', 'month', 'agenda'] as const).map((option) => <button key={option} className={view === option ? 'is-active' : ''} onClick={() => setView(option)}>{option}</button>)}</div><button className="calendar-add-button" onClick={() => setComposerOpen(true)} aria-label="Add focus block"><Plus size={18} /></button></div>
        </header>
        <div className="calendar-layout">
          <section className="calendar-canvas" aria-label={`${monthLabel} calendar`}>
            {view === 'month' && <MonthView monthDays={monthDays} currentMonth={currentMonth} events={visibleEvents} onSelectEvent={setSelectedEvent} />}
            {view === 'week' && <WeekView events={visibleEvents} onSelectEvent={setSelectedEvent} />}
            {view === 'agenda' && <AgendaView events={visibleEvents} onSelectEvent={setSelectedEvent} />}
            <p className="calendar-caption"><Sparkles size={14} /> Suggested focus blocks are optional prompts based on the course outline; dates are yours to change.</p>
          </section>
          <aside className="calendar-sidebar">
            <MiniCalendar month={currentMonth} days={monthDays} />
            <section className="calendar-sources"><div className="calendar-sources__heading"><span className="eyebrow">Calendars</span><MoreHorizontal size={18} /></div><CalendarSource color="var(--violet)" label="Personal focus blocks" active={showPersonal} onToggle={() => setShowPersonal((current) => !current)} /><CalendarSource color="#2c936d" label="Suggested course focus" active={showSuggested} onToggle={() => setShowSuggested((current) => !current)} /></section>
            <section className="calendar-undated"><span><ChevronRight size={14} /> Undated</span><p>Nothing needs a date before you are ready.</p></section>
            <button className="calendar-feed"><CalendarDays size={16} /> Calendar feed <ChevronRight size={15} /></button>
          </aside>
        </div>
      </div>
      {selectedEvent && <EventDetail event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      {composerOpen && <FocusBlockComposer onClose={() => setComposerOpen(false)} onSubmit={addFocusBlock} />}
    </AppShell>
  )
}

function makeMonthGrid(month: Date) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1)
  const start = new Date(month.getFullYear(), month.getMonth(), 1 - first.getDay())
  return Array.from({ length: 42 }, (_, index) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + index))
}

function dateKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

function MonthView({ monthDays, currentMonth, events, onSelectEvent }: { monthDays: Date[]; currentMonth: Date; events: CalendarEvent[]; onSelectEvent: (event: CalendarEvent) => void }) {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return <div className="month-view"><div className="month-view__weekdays">{weekdays.map((day) => <span key={day}>{day}</span>)}</div><div className="month-view__grid">{monthDays.map((day) => { const key = dateKey(day); const items = events.filter((event) => event.date === key); const inMonth = day.getMonth() === currentMonth.getMonth(); return <div className={`month-cell${inMonth ? '' : ' is-outside'}`} key={key}><time dateTime={key}>{day.getDate()}</time><div className="month-cell__events">{items.slice(0, 2).map((event) => <button key={event.id} className={`calendar-event calendar-event--${event.kind}`} onClick={() => onSelectEvent(event)} title={`${event.title} — ${event.course}`}><span>{event.kind === 'personal' ? <Check size={11} /> : <Sparkles size={11} />}</span>{event.title}</button>)}{items.length > 2 && <button className="calendar-event__more" onClick={() => onSelectEvent(items[2])}>+{items.length - 2} more</button>}</div></div>})}</div></div>
}

function WeekView({ events, onSelectEvent }: { events: CalendarEvent[]; onSelectEvent: (event: CalendarEvent) => void }) {
  const days = Array.from({ length: 7 }, (_, index) => new Date(2026, 7, 16 + index))
  return <div className="week-view"><div className="week-view__hours">{['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'].map((hour) => <span key={hour}>{hour}</span>)}</div><div className="week-view__days">{days.map((day) => { const key = dateKey(day); const eventsForDay = events.filter((event) => event.date === key); return <div key={key}><header><small>{new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(day)}</small><strong>{day.getDate()}</strong></header><div className="week-view__column">{eventsForDay.length ? eventsForDay.map((event) => <button key={event.id} className={`calendar-event calendar-event--${event.kind}`} onClick={() => onSelectEvent(event)}>{event.title}</button>) : <span />}</div></div>})}</div></div>
}

function AgendaView({ events, onSelectEvent }: { events: CalendarEvent[]; onSelectEvent: (event: CalendarEvent) => void }) {
  const ordered = [...events].sort((first, second) => first.date.localeCompare(second.date))
  return <div className="agenda-view"><header><span className="eyebrow eyebrow--accent"><CalendarDays size={14} /> Focus agenda</span><h2>Upcoming focus blocks</h2><p>These are flexible prompts, not course deadlines.</p></header>{ordered.length ? <div>{ordered.map((event) => <button key={event.id} onClick={() => onSelectEvent(event)}><time dateTime={event.date}>{new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date(`${event.date}T12:00:00`))}</time><span className={`agenda-event-dot agenda-event-dot--${event.kind}`} /><span><strong>{event.title}</strong><small>{event.course}</small></span><ChevronRight size={17} /></button>)}</div> : <p className="agenda-view__empty">Choose a calendar source or add a focus block to begin planning.</p>}</div>
}

function MiniCalendar({ month, days }: { month: Date; days: Date[] }) {
  return <section className="mini-calendar"><header><ChevronLeft size={16} /><strong>{new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(month)}</strong><ChevronRight size={16} /></header><div className="mini-calendar__days">{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <span className="mini-calendar__weekday" key={`${day}-${index}`}>{day}</span>)}{days.map((day) => <span key={dateKey(day)} className={day.getMonth() === month.getMonth() ? '' : 'is-outside'}>{day.getDate()}</span>)}</div></section>
}

function CalendarSource({ color, label, active, onToggle }: { color: string; label: string; active: boolean; onToggle: () => void }) {
  return <button className={`calendar-source${active ? ' is-active' : ''}`} onClick={onToggle}><i style={{ background: color }} /><span>{label}</span><Check size={15} /></button>
}

function FocusBlockComposer({ onClose, onSubmit }: { onClose: () => void; onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) {
  return <div className="focus-modal" role="dialog" aria-modal="true" aria-label="Add a focus block"><button className="drawer-scrim" onClick={onClose} aria-label="Close focus block form" /><form className="focus-modal__panel" onSubmit={onSubmit}><header><div><span className="eyebrow eyebrow--accent"><Plus size={14} /> Personal planner</span><h2>Add a focus block</h2></div><button type="button" onClick={onClose} aria-label="Close"><X size={19} /></button></header><p>Use the calendar for your own revision rhythm. This stays in this browser and does not create a course deadline.</p><label><span>What will you focus on?</span><input name="title" autoFocus placeholder="e.g. Review pharmacology terms" required /></label><div className="focus-modal__grid"><label><span>Date</span><input name="date" type="date" defaultValue="2026-08-20" required /></label><label><span>Course</span><select name="course"><option>Personal study plan</option>{courses.map((course) => <option key={course.id}>{course.title}</option>)}</select></label></div><footer><button className="button button--quiet" type="button" onClick={onClose}>Cancel</button><button className="button button--primary" type="submit"><CalendarDays size={16} /> Add to calendar</button></footer></form></div>
}

function EventDetail({ event, onClose }: { event: CalendarEvent; onClose: () => void }) {
  return <div className="event-popover" role="dialog" aria-modal="true" aria-label={event.title}><button className="drawer-scrim" onClick={onClose} aria-label="Close focus block details" /><article><button className="event-popover__close" onClick={onClose} aria-label="Close"><X size={18} /></button><span className={`agenda-event-dot agenda-event-dot--${event.kind}`} /><span className="eyebrow">{event.kind === 'personal' ? 'Personal focus block' : 'Suggested focus block'}</span><h2>{event.title}</h2><p>{event.course}</p><time dateTime={event.date}>{new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(`${event.date}T12:00:00`))}</time></article></div>
}

type InboxMessage = {
  id: string
  date: string
  sender: string
  subject: string
  preview: string
  body: string
  course: string
  unread: boolean
}

const initialMessages: InboxMessage[] = [
  { id: 'm1', date: 'Today', sender: 'DeepFocus course space', subject: 'Your Pharmacology I route is ready', preview: 'Week 01 begins with the language used in pharmacology.', body: 'The supplied Pharmacology I outline is now arranged into five weekly revision units. Begin with Week 01 when you are ready, then mark each study step as complete in your own browser.', course: 'Pharmacology I', unread: true },
  { id: 'm2', date: 'Today', sender: 'DeepFocus course space', subject: 'Medical Nursing I has four weekly units', preview: 'The circulatory, hematologic, and respiratory topics are easy to revisit.', body: 'Medical Nursing I is structured around the four supplied syllabus weeks. Each unit preserves the topic names from the outline so you can return to them quickly.', course: 'Medical Nursing I', unread: true },
  { id: 'm3', date: 'Recently', sender: 'Study planner', subject: 'Make the suggested plan your own', preview: 'Focus blocks are prompts, not fixed deadlines.', body: 'The calendar starts with a small set of optional focus prompts. Add, change, or ignore them according to your own study schedule.', course: 'Personal study plan', unread: false },
  { id: 'm4', date: 'Recently', sender: 'DeepFocus course space', subject: 'Surgical Nursing I is mapped across seven weeks', preview: 'Asepsis, peri-operative care, emergencies, and tissue care are kept distinct.', body: 'Surgical Nursing I now has its own weekly route, including the supplied subjects on infection, shock, burns, fluids, tumours, fractures, and wounds.', course: 'Surgical Nursing I', unread: false },
  { id: 'm5', date: 'Earlier', sender: 'DeepFocus course space', subject: 'Gynaecologic Nursing course outline added', preview: 'Six syllabus units are ready to explore.', body: 'The weekly groups follow the attached course outline from menstruation disorders through cancers of reproductive health organs.', course: 'Gynaecologic Nursing', unread: false },
  { id: 'm6', date: 'Earlier', sender: 'DeepFocus course space', subject: 'Palliative Care and Paediatric Nursing are ready', preview: 'Open either course card to begin a focused weekly path.', body: 'Both course spaces keep their supplied weekly areas visible without inventing unavailable materials or assessment deadlines.', course: 'Palliative Care', unread: false },
]

export function InboxPage() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState(initialMessages)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [courseFilter, setCourseFilter] = useState('All courses')
  const [boxFilter, setBoxFilter] = useState('Inbox')
  const [query, setQuery] = useState('')
  const [composerOpen, setComposerOpen] = useState(false)
  const selected = messages.find((message) => message.id === selectedId)
  const filtered = messages.filter((message) => {
    const courseMatches = courseFilter === 'All courses' || message.course === courseFilter
    const boxMatches = boxFilter !== 'Unread' || message.unread
    const queryMatches = `${message.sender} ${message.subject} ${message.preview}`.toLowerCase().includes(query.toLowerCase())
    return courseMatches && boxMatches && queryMatches
  })
  const openMessage = (id: string) => {
    setSelectedId(id)
    setMessages((previous) => previous.map((message) => message.id === id ? { ...message, unread: false } : message))
  }

  return (
    <AppShell pageTitle="Inbox">
      <div className="inbox-screen">
        <header className="inbox-screen__header"><div><span className="eyebrow eyebrow--accent"><Mail size={14} /> Course communication</span><h1>Inbox</h1><p>Course-space updates and planning notes kept in this local frontend preview.</p></div><div><button className="button button--quiet" onClick={() => navigate('/settings')}><Settings size={16} /> Settings</button><button className="button button--primary" onClick={() => setComposerOpen(true)}><PenLine size={16} /> Compose</button></div></header>
        <section className="inbox-workspace">
          <div className="inbox-toolbar"><select value={courseFilter} onChange={(event) => setCourseFilter(event.target.value)} aria-label="Filter courses"><option>All courses</option>{courses.map((course) => <option key={course.id}>{course.title}</option>)}<option>Personal study plan</option></select><select value={boxFilter} onChange={(event) => setBoxFilter(event.target.value)} aria-label="Filter inbox"><option>Inbox</option><option>Unread</option></select><label className="inbox-toolbar__search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search messages" /></label><button className="inbox-toolbar__icon" aria-label="Message options"><MoreHorizontal size={18} /></button></div>
          <div className="inbox-workspace__body"><aside className="message-list" aria-label="Messages">{filtered.length ? filtered.map((message) => <button key={message.id} className={`message-row${selectedId === message.id ? ' is-selected' : ''}${message.unread ? ' is-unread' : ''}`} onClick={() => openMessage(message.id)}><header><span className="message-row__date">{message.date}</span>{message.unread && <span className="message-row__badge">New</span>}</header><div><span className="message-row__unread" /><strong>{message.sender}</strong></div><b>{message.subject}</b><p>{message.preview}</p><span className="message-row__course">{message.course}</span></button>) : <div className="message-list__empty"><Search size={20} /><p>No messages match these filters.</p></div>}</aside><MessageReader message={selected} /></div>
        </section>
      </div>
      {composerOpen && <ComposeModal onClose={() => setComposerOpen(false)} />}
    </AppShell>
  )
}

function MessageReader({ message }: { message?: InboxMessage }) {
  if (!message) return <section className="message-reader message-reader--empty"><span><Mail size={62} /></span><h2>No conversation selected</h2><p>Select a course-space message to read it here.</p></section>
  return <section className="message-reader"><header><div><span className="eyebrow">{message.course}</span><h2>{message.subject}</h2><p><strong>{message.sender}</strong><span> · {message.date}</span></p></div><button className="inbox-toolbar__icon" aria-label="Message actions"><MoreHorizontal size={18} /></button></header><article><p>{message.body}</p><div className="message-reader__notice"><ShieldCheck size={17} /><span><strong>Frontend preview</strong><small>This message is local sample content that describes the course structure already present in DeepFocus.</small></span></div></article><footer><button><Archive size={16} /> Archive</button><button><FilePenLine size={16} /> Add a personal note</button></footer></section>
}

function ComposeModal({ onClose }: { onClose: () => void }) {
  const [saved, setSaved] = useState(false)
  return <div className="compose-modal" role="dialog" aria-modal="true" aria-label="Compose a note"><button className="drawer-scrim" onClick={onClose} aria-label="Close compose window" /><form className="compose-modal__panel" onSubmit={(event) => { event.preventDefault(); setSaved(true) }}><header><div><span className="eyebrow eyebrow--accent"><PenLine size={14} /> Personal note</span><h2>Compose</h2></div><button type="button" onClick={onClose} aria-label="Close"><X size={19} /></button></header><p>Use this space to draft a personal learning note. It is not sent to a teacher or external service.</p><label><span>Related course</span><select><option>Personal study plan</option>{courses.map((course) => <option key={course.id}>{course.title}</option>)}</select></label><label><span>Subject</span><input placeholder="What do you want to remember?" required /></label><label><span>Note</span><textarea rows={6} placeholder="Write a private study reminder…" required /></label>{saved && <span className="compose-modal__saved"><Check size={15} /> Draft saved for this preview session.</span>}<footer><button className="button button--quiet" type="button" onClick={onClose}>Cancel</button><button className="button button--primary" type="submit"><Send size={16} /> Save draft</button></footer></form></div>
}

export function ProfilePage() {
  const [saved, setSaved] = useState(false)
  return (
    <AppShell pageTitle="Profile">
      <div className="standard-page profile-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><UserRound size={14} /> Learning profile</span><h1>Your revision space.</h1><p>Keep personal details optional. Shape only what helps you study.</p></div></header>
        <div className="profile-layout">
          <aside className="profile-card"><span className="avatar avatar--profile">FO</span><h2>Fred Okorio</h2><p>Your profile is private to this local preview.</p><span><ShieldCheck size={15} /> No account data connected</span></aside>
          <form className="profile-form" onSubmit={(event) => { event.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 1800) }}>
            <div className="form-heading"><div><h2>Study preferences</h2><p>Used only to shape your own interface.</p></div>{saved && <span className="saved-state"><Check size={14} /> Saved</span>}</div>
            <label><span>Display name</span><input defaultValue="Fred Okorio" placeholder="Add your name (optional)" /></label>
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
  const [largeType, setLargeType] = useState(() => getInterfacePreference('largeType'))
  const [reducedMotion, setReducedMotion] = useState(() => getInterfacePreference('reducedMotion'))
  return (
    <AppShell pageTitle="Settings">
      <div className="standard-page settings-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><Settings size={14} /> Preferences</span><h1>Make DeepFocus yours.</h1><p>Simple controls for a calmer, more accessible study environment.</p></div></header>
        <section className="settings-card">
          <div className="settings-card__heading"><h2>Accessibility</h2><p>These preferences affect this browser preview.</p></div>
          <SettingRow icon={Type} title="Larger interface text" helper="Increase the base reading size." active={largeType} onToggle={() => { const next = !largeType; setLargeType(next); applyInterfacePreference('largeType', next) }} />
          <SettingRow icon={Clock3} title="Reduce motion" helper="Minimise interface movement and transitions." active={reducedMotion} onToggle={() => { const next = !reducedMotion; setReducedMotion(next); applyInterfacePreference('reducedMotion', next) }} />
        </section>
      </div>
    </AppShell>
  )
}

function SettingRow({ icon: Icon, title, helper, active, onToggle }: { icon: typeof Type; title: string; helper: string; active: boolean; onToggle: () => void }) {
  return <div className="setting-row"><span className="setting-row__icon"><Icon size={19} /></span><span><strong>{title}</strong><small>{helper}</small></span><button className={`toggle${active ? ' is-active' : ''}`} onClick={onToggle} aria-pressed={active}><i /></button></div>
}

export function HistoryPage() {
  const navigate = useNavigate()
  const [activities, setActivities] = useState<RecentActivity[]>(() => getRecentActivity())
  useEffect(() => {
    const refresh = () => setActivities(getRecentActivity())
    window.addEventListener('deepfocus-activity-change', refresh)
    return () => window.removeEventListener('deepfocus-activity-change', refresh)
  }, [])
  return (
    <AppShell pageTitle="History">
      <div className="standard-page history-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><Clock3 size={14} /> Recent learning</span><h1>Learning history</h1><p>A private, browser-only trail of the course spaces and pages you have opened.</p></div></header>
        <section className="history-page__list">{activities.length ? activities.map((activity) => <button key={activity.id} onClick={() => navigate(activity.path)}><span><Clock3 size={17} /></span><div><strong>{activity.label}</strong><small>{activity.context || 'DeepFocus revision'} · {relativeActivityTime(activity.visitedAt)}</small></div><ChevronRight size={17} /></button>) : <div className="empty-state empty-state--bordered"><span className="empty-state__icon"><Clock3 size={27} /></span><h2>Nothing to revisit yet.</h2><p>Open a course or a weekly module and your learning path will appear here.</p></div>}</section>
      </div>
    </AppShell>
  )
}

export function HelpPage() {
  const navigate = useNavigate()
  return (
    <AppShell pageTitle="Help">
      <div className="standard-page help-page">
        <header className="standard-header"><div><span className="eyebrow eyebrow--accent"><CircleHelp size={14} /> Help centre</span><h1>Find your next clear step.</h1><p>DeepFocus protects the supplied course structure while giving you the tools to make it your own.</p></div></header>
        <div className="help-page__hero"><div className="help-page__map"><Sparkles size={36} /><span /><i /><b /></div><div><span className="eyebrow eyebrow--accent">Start with the course outline</span><h2>One course. One week. One focused next move.</h2><p>Open a course card, choose the current week, then use the short steps to prepare, learn, and check your recall.</p><button className="button button--primary" onClick={() => navigate('/courses')}><BookOpen size={16} /> Browse all courses</button></div></div>
        <div className="help-grid"><article><CalendarDays size={22} /><h2>Choose your pathway</h2><p>Use the clinical planner to see Nursing or Midwifery courses by semester, then set your own revision rhythm.</p><button onClick={() => navigate('/planner')}>Open the planner <ChevronRight size={15} /></button></article><article><MailOpen size={22} /><h2>Use your local inbox</h2><p>Read course-space updates and draft private notes without connecting to an external account.</p><button onClick={() => navigate('/inbox')}>Open Inbox <ChevronRight size={15} /></button></article><article><Settings size={22} /><h2>Adjust your space</h2><p>Choose reading and motion preferences that support a calmer revision session.</p><button onClick={() => navigate('/settings')}>Open settings <ChevronRight size={15} /></button></article></div>
      </div>
    </AppShell>
  )
}
