import { useState, type FormEvent } from 'react'
import { ArrowRight, BookOpenCheck, Check, ChevronRight, FileText, MessageSquareText, Send, UsersRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { loadPreviewSession } from '../auth'
import { StaffShell } from '../components/StaffShell'
import { getInstructorCourseSpaces, sendStaffNotice, updateCourseMapStatus, type CourseMapStatus, type CourseSpace } from '../staffPreview'
import { useStaffPreview } from '../useStaffPreview'

function statusLabel(status: CourseMapStatus) {
  return status === 'in-review' ? 'In review' : status[0].toUpperCase() + status.slice(1)
}

function instructorAccount() {
  const account = loadPreviewSession()
  return account?.role === 'instructor' ? account : null
}

function StaffMetric({ label, value, detail }: { label: string; value: string | number; detail: string }) {
  return <article className="staff-metric"><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>
}

function CourseStatus({ course }: { course: CourseSpace }) {
  return <article className="course-status-card"><div className="course-status-card__top"><span className={`map-status map-status--${course.mapStatus}`}>{statusLabel(course.mapStatus)}</span><span>{course.code}</span></div><h3>{course.title}</h3><p>{course.semester} · Week {course.currentWeek}</p><div className="course-progress"><span><i style={{ width: `${course.completionRate}%` }} /></span><strong>{course.completionRate}%</strong></div><footer><span>{course.learnersActive} active learners</span><span>{course.lastEditedAt}</span></footer></article>
}

export function InstructorOverviewPage() {
  const account = instructorAccount()
  const { state } = useStaffPreview()
  const navigate = useNavigate()
  if (!account) return null
  const spaces = getInstructorCourseSpaces(state, account.id)
  const published = spaces.filter((course) => course.mapStatus === 'published').length
  const actionNeeded = spaces.filter((course) => course.mapStatus === 'draft' || course.mapStatus === 'in-review').length
  const averageCompletion = Math.round(spaces.reduce((total, course) => total + course.completionRate, 0) / spaces.length)

  return <StaffShell account={account} title="Course workspace">
    <section className="staff-intro"><div><p className="eyebrow">Assigned teaching space</p><h2>Make every revision map deliberate.</h2><p>Only your assigned course units are shown here. Publishing makes a map visible to eligible learners; it does not change their academic registration.</p></div><button type="button" className="primary-action" onClick={() => navigate('/instructor/courses')}>Open course studio <ArrowRight size={17} /></button></section>
    <section className="staff-metrics-grid"><StaffMetric label="Assigned course units" value={spaces.length} detail="Year 2 Nursing" /><StaffMetric label="Published maps" value={published} detail="Visible to eligible learners" /><StaffMetric label="Needs attention" value={actionNeeded} detail="Draft or review stage" /><StaffMetric label="Average completion" value={`${averageCompletion}%`} detail="A quiet engagement signal" /></section>
    <section className="staff-section"><div className="section-heading"><div><p className="eyebrow">Course readiness</p><h2>This week’s work</h2></div><button type="button" className="text-action" onClick={() => navigate('/instructor/courses')}>Manage all <ChevronRight size={16} /></button></div><div className="course-status-grid">{spaces.slice(0, 3).map((course) => <CourseStatus key={course.id} course={course} />)}</div></section>
    <section className="staff-split-callout"><div><BookOpenCheck size={20} /><div><h3>Publishing is a learner-facing promise.</h3><p>Keep the weekly structure clear before you publish. Learners will only encounter a map after their access is active.</p></div></div><button type="button" className="quiet-action" onClick={() => navigate('/instructor/notices')}>Write a notice</button></section>
  </StaffShell>
}

export function InstructorCourseStudioPage() {
  const account = instructorAccount()
  const { state, commit } = useStaffPreview()
  const [selectedId, setSelectedId] = useState('course-pharmacology')
  const [mapTitle, setMapTitle] = useState('Week 05 · Principles of safe pharmacotherapy')
  const [savedMessage, setSavedMessage] = useState('')
  if (!account) return null
  const instructorId = account.id
  const spaces = getInstructorCourseSpaces(state, account.id)
  const selected = spaces.find((course) => course.id === selectedId) ?? spaces[0]

  function chooseCourse(course: CourseSpace) {
    setSelectedId(course.id)
    setMapTitle(`Week ${String(course.currentWeek).padStart(2, '0')} · ${course.title} revision map`)
    setSavedMessage('')
  }

  function save(status: CourseMapStatus) {
    if (!selected) return
    commit((current) => updateCourseMapStatus(current, selected.id, status, instructorId))
    setSavedMessage(status === 'published' ? 'Published to eligible learners.' : 'Map status updated. Continue refining when ready.')
  }

  return <StaffShell account={account} title="Course studio"><div className="studio-layout"><aside className="studio-course-list"><div><p className="eyebrow">Your assignments</p><h2>{spaces.length} course units</h2></div>{spaces.map((course) => <button key={course.id} type="button" className={course.id === selected?.id ? 'is-selected' : ''} onClick={() => chooseCourse(course)}><span className={`map-status map-status--${course.mapStatus}`}>{statusLabel(course.mapStatus)}</span><strong>{course.title}</strong><small>Week {course.currentWeek} · {course.learnersActive} learners</small><ChevronRight size={16} /></button>)}</aside>{selected && <section className="studio-editor"><header><div><p className="eyebrow">{selected.code} · {selected.semester}</p><h2>{selected.title}</h2><p>Revision-map editor · current learner-facing stage: <span className={`map-status map-status--${selected.mapStatus}`}>{statusLabel(selected.mapStatus)}</span></p></div><span className="studio-week">Week {selected.currentWeek}</span></header><label className="studio-title-field">Map title<input value={mapTitle} onChange={(event) => setMapTitle(event.target.value)} /></label><div className="studio-checklist"><article><span><Check size={16} /></span><div><strong>Course boundaries</strong><p>Only content connected to this individual course unit belongs in this map.</p></div></article><article><span><Check size={16} /></span><div><strong>Weekly sequence</strong><p>Make the revision focus, study action, and check-in point easy to find.</p></div></article><article><span><Check size={16} /></span><div><strong>Access awareness</strong><p>Publishing makes the map available only to active, eligible learner accounts.</p></div></article></div><footer className="studio-editor__footer"><div>{savedMessage && <span className="save-message"><Check size={15} /> {savedMessage}</span>}</div><div><button type="button" className="quiet-action" onClick={() => save('draft')}>Save draft</button><button type="button" className="primary-action" onClick={() => save('published')}>Publish map <Send size={16} /></button></div></footer></section>}</div></StaffShell>
}

export function InstructorLearnersPage() {
  const account = instructorAccount()
  const { state } = useStaffPreview()
  const navigate = useNavigate()
  if (!account) return null
  const activeLearners = state.learners.filter((learner) => learner.access === 'active')
  return <StaffShell account={account} title="Learner signals"><section className="staff-intro"><div><p className="eyebrow">Engagement, not surveillance</p><h2>Notice patterns before they become pressure.</h2><p>These lightweight signals help you choose a kind, useful check-in. They are not grades, attendance records, or learner rankings.</p></div><button className="primary-action" type="button" onClick={() => navigate('/instructor/notices')}>Draft a check-in <MessageSquareText size={17} /></button></section><section className="staff-metrics-grid"><StaffMetric label="Active learners" value={activeLearners.length} detail="With a confirmed preview access" /><StaffMetric label="Consistent this week" value={activeLearners.filter((learner) => learner.focusStreak >= 5).length} detail="Five or more focus sessions" /><StaffMetric label="Invite a check-in" value={state.learners.filter((learner) => learner.focusStreak <= 2).length} detail="A gentle opportunity" /></section><section className="staff-section"><div className="section-heading"><div><p className="eyebrow">Learner rhythm</p><h2>Simple, useful context</h2></div><UsersRound size={19} /></div><div className="learner-signal-list">{state.learners.map((learner) => <article key={learner.id}><span className="learner-avatar">{learner.name.split(' ').map((part) => part[0]).join('')}</span><div><strong>{learner.name}</strong><small>{learner.programme} · {learner.semester}</small></div><div><span className="signal-label">Focus rhythm</span><strong>{learner.focusStreak} sessions</strong></div><div><span className={`access-state access-state--${learner.access}`}>{learner.access.replace('-', ' ')}</span><small>{learner.lastSeen}</small></div></article>)}</div></section></StaffShell>
}

export function InstructorNoticesPage() {
  const account = instructorAccount()
  const { state, commit } = useStaffPreview()
  const [courseSpaceId, setCourseSpaceId] = useState('course-pharmacology')
  const [title, setTitle] = useState('A clear focus for this week')
  const [body, setBody] = useState('Choose one small action from this week’s revision map and return when you are ready.')
  const [sent, setSent] = useState(false)
  if (!account) return null
  const instructorId = account.id
  const spaces = getInstructorCourseSpaces(state, account.id)
  const notices = state.notices.filter((notice) => notice.authorId === account.id)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!title.trim() || !body.trim()) return
    commit((current) => sendStaffNotice(current, { title: title.trim(), body: body.trim(), courseSpaceId, audience: 'course', authorId: instructorId }))
    setSent(true)
  }

  return <StaffShell account={account} title="Learner notices"><div className="notice-layout"><section className="notice-composer"><p className="eyebrow">Course communication</p><h2>Say only what helps.</h2><p>Notices are recorded in this preview. A live system would deliver them only to eligible learners in the selected course unit.</p><form onSubmit={submit}><label>Course unit<select value={courseSpaceId} onChange={(event) => setCourseSpaceId(event.target.value)}>{spaces.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}</select></label><label>Notice title<input value={title} onChange={(event) => setTitle(event.target.value)} /></label><label>Message<textarea rows={5} value={body} onChange={(event) => setBody(event.target.value)} /></label><footer>{sent && <span className="save-message"><Check size={15} /> Notice recorded.</span>}<button type="submit" className="primary-action">Send preview notice <Send size={16} /></button></footer></form></section><section className="notice-history"><div className="section-heading"><div><p className="eyebrow">Recorded notices</p><h2>Recent communication</h2></div><FileText size={19} /></div>{notices.map((notice) => <article key={notice.id}><span className="notice-icon"><MessageSquareText size={17} /></span><div><strong>{notice.title}</strong><p>{notice.body}</p><small>{notice.createdAt} · {notice.status}</small></div></article>)}</section></div></StaffShell>
}
