import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  FilePenLine,
  FileText,
  FolderOpen,
  Globe2,
  Laptop,
  Moon,
  Palette,
  Plus,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trash2,
  Type,
  UserRound,
  X,
} from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { courses } from '../data'
import { applyInterfacePreference, getInterfacePreference } from '../preferences'

const accountLinks = [
  { to: '/profile', label: 'Profile', icon: UserRound },
  { to: '/account/vault', label: 'Study vault', icon: FolderOpen },
  { to: '/account/preferences', label: 'Preferences', icon: Palette },
  { to: '/account/notices', label: 'Study notices', icon: Bell },
  { to: '/account/mobile', label: 'Mobile companion', icon: Smartphone },
  { to: '/account/updates', label: 'Workspace updates', icon: Globe2 },
]

type AccountPageProps = {
  title: string
  eyebrow: string
  description: string
  children: React.ReactNode
}

function AccountPage({ title, eyebrow, description, children }: AccountPageProps) {
  return (
    <AppShell pageTitle={title} pageEyebrow="Your personal study space">
      <div className="account-page">
        <aside className="account-page__nav" aria-label="Account navigation">
          <div className="account-page__identity"><span className="avatar">FO</span><div><strong>Fred Okorio</strong><small>DeepFocus learner</small></div></div>
          <nav>{accountLinks.map((link) => { const Icon = link.icon; return <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'is-active' : ''}><Icon size={16} /><span>{link.label}</span></NavLink> })}</nav>
          <div className="account-page__privacy"><ShieldCheck size={15} /><span><strong>Private by design</strong><small>Preferences and notes stay in this browser.</small></span></div>
        </aside>
        <section className="account-page__content">
          <header className="account-page__heading"><span className="eyebrow eyebrow--accent">{eyebrow}</span><h1>{title}</h1><p>{description}</p></header>
          {children}
        </section>
      </div>
    </AppShell>
  )
}

export function AccountProfilePage() {
  const [displayName, setDisplayName] = useState(() => window.localStorage.getItem('deepfocus-display-name') ?? 'Fred Okorio')
  const [studyGoal, setStudyGoal] = useState(() => window.localStorage.getItem('deepfocus-study-goal') ?? '')
  const [saved, setSaved] = useState(false)
  const saveProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.localStorage.setItem('deepfocus-display-name', displayName.trim() || 'DeepFocus learner')
    window.localStorage.setItem('deepfocus-study-goal', studyGoal)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1800)
  }
  return <AccountPage title="Profile" eyebrow="Your learning identity" description="Keep the few personal details that make your revision space feel like yours. Nothing here is connected to an institution or grading system.">
    <div className="account-profile-grid"><aside className="account-profile-card"><span className="avatar avatar--profile">FO</span><span className="eyebrow">DeepFocus learner</span><h2>{displayName.trim() || 'DeepFocus learner'}</h2><p>This is a browser-only profile for your personal revision workspace.</p><div><span><BookOpen size={15} /> {courses.length} course maps</span><span><CalendarDays size={15} /> Flexible planner</span></div></aside><form className="account-profile-form" onSubmit={saveProfile}><div className="preferences-section-heading"><div><span className="eyebrow">Profile details</span><h2>Keep the focus personal.</h2></div>{saved && <span className="saved-state"><Check size={14} /> Saved</span>}</div><label><span>Display name</span><input value={displayName} onChange={(event) => setDisplayName(event.target.value)} placeholder="Your preferred name" /></label><label><span>What are you working toward?</span><textarea value={studyGoal} onChange={(event) => setStudyGoal(event.target.value)} rows={5} placeholder="A short reminder of what matters in this revision season…" /></label><button className="button button--primary" type="submit">Save profile</button></form></div>
  </AccountPage>
}

type NoticePreference = {
  id: string
  title: string
  helper: string
  icon: typeof Bell
  active: boolean
}

const noticeDefaults: NoticePreference[] = [
  { id: 'weekly-routes', title: 'Weekly route ready', helper: 'Keep the next available weekly course path visible in your workspace.', icon: BookOpen, active: true },
  { id: 'focus-blocks', title: 'Focus-block reminders', helper: 'Show your personal study blocks in the calendar and agenda view.', icon: CalendarDays, active: true },
  { id: 'completion-review', title: 'Completion review', helper: 'Keep a calm reminder to revisit completed learning steps.', icon: Check, active: false },
  { id: 'workspace-updates', title: 'Workspace updates', helper: 'Show when a new DeepFocus area is available in this frontend.', icon: Sparkles, active: true },
]

const noticeKey = 'deepfocus-study-notices'

function readNotices() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(noticeKey) ?? '[]') as NoticePreference[]
    return stored.length ? stored : noticeDefaults
  } catch {
    return noticeDefaults
  }
}

export function StudyNoticesPage() {
  const [notices, setNotices] = useState<NoticePreference[]>(readNotices)
  const activeCount = notices.filter((notice) => notice.active).length

  useEffect(() => { window.localStorage.setItem(noticeKey, JSON.stringify(notices)) }, [notices])

  const toggleNotice = (id: string) => setNotices((previous) => previous.map((notice) => notice.id === id ? { ...notice, active: !notice.active } : notice))

  return <AccountPage title="Study notices" eyebrow="Local reminder preferences" description="Choose the signals you want to see in DeepFocus. No emails, SMS messages, or push notifications are sent by this frontend.">
    <section className="notice-summary"><div><span className="notice-summary__icon"><Bell size={19} /></span><span><strong>{activeCount} of {notices.length} notice types active</strong><small>Your choices are stored privately in this browser.</small></span></div><span className="quiet-badge">Local only</span></section>
    <section className="notice-list" aria-label="Study notice settings">{notices.map((notice) => { const Icon = notice.icon; return <article key={notice.id}><span className="notice-list__icon"><Icon size={19} /></span><div><h2>{notice.title}</h2><p>{notice.helper}</p></div><button className={`toggle${notice.active ? ' is-active' : ''}`} onClick={() => toggleNotice(notice.id)} aria-pressed={notice.active} aria-label={`Toggle ${notice.title}`}><i /></button></article> })}</section>
    <p className="account-page__footnote"><ShieldCheck size={14} /> These are workspace preferences, not institution-level notification settings.</p>
  </AccountPage>
}

type StudyNote = { id: string; title: string; course: string; body: string }
const notesKey = 'deepfocus-study-vault-notes'

function readNotes(): StudyNote[] {
  try { return JSON.parse(window.localStorage.getItem(notesKey) ?? '[]') as StudyNote[] } catch { return [] }
}

export function StudyVaultPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [notes, setNotes] = useState<StudyNote[]>(readNotes)
  const [noteOpen, setNoteOpen] = useState(false)
  const materials = useMemo(() => courses.map((course) => ({
    id: course.id,
    title: course.title,
    helper: `${course.weeks.length} weekly module${course.weeks.length === 1 ? '' : 's'} from the supplied outline`,
    to: `/courses/${course.id}/modules`,
    image: course.image,
  })).filter((item) => `${item.title} ${item.helper}`.toLowerCase().includes(query.toLowerCase())), [query])

  useEffect(() => { window.localStorage.setItem(notesKey, JSON.stringify(notes)) }, [notes])

  const saveNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const title = String(values.get('title') ?? '').trim()
    const body = String(values.get('body') ?? '').trim()
    const course = String(values.get('course') ?? 'General study')
    if (!title || !body) return
    setNotes((previous) => [{ id: `note-${Date.now()}`, title, body, course }, ...previous])
    setNoteOpen(false)
  }

  return <AccountPage title="Study vault" eyebrow="Your structured material" description="A quick way to return to verified course maps and keep small personal study notes beside them.">
    <section className="vault-overview"><div><span className="eyebrow">Course maps</span><strong>{courses.length}</strong><small>supplied nursing courses</small></div><div><span className="eyebrow">Weekly paths</span><strong>{courses.reduce((total, course) => total + course.weeks.length, 0)}</strong><small>outline-led revision units</small></div><div><span className="eyebrow">Personal notes</span><strong>{notes.length}</strong><small>stored in this browser</small></div></section>
    <div className="vault-toolbar"><label><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a course map" aria-label="Find a course map" /></label><button className="button button--primary" onClick={() => setNoteOpen(true)}><Plus size={16} /> Add a note</button></div>
    <section className="vault-materials" aria-label="Course maps">{materials.map((material) => <button key={material.id} onClick={() => navigate(material.to)}><img src={material.image} alt="" /><span><small>Course map</small><strong>{material.title}</strong><p>{material.helper}</p></span><ChevronRight size={17} /></button>)}</section>
    <section className="vault-notes"><div className="vault-notes__heading"><div><span className="eyebrow">Personal notes</span><h2>Keep small reminders in reach.</h2></div>{notes.length > 0 && <span>{notes.length} saved</span>}</div>{notes.length ? <div className="vault-notes__list">{notes.map((note) => <article key={note.id}><span className="vault-notes__icon"><FilePenLine size={17} /></span><div><small>{note.course}</small><h3>{note.title}</h3><p>{note.body}</p></div><button onClick={() => setNotes((previous) => previous.filter((item) => item.id !== note.id))} aria-label={`Delete ${note.title}`}><Trash2 size={16} /></button></article>)}</div> : <div className="vault-notes__empty"><FileText size={22} /><div><strong>No personal notes yet</strong><p>Add a quick prompt, then keep it private and close to the course map it supports.</p></div></div>}</section>
    {noteOpen && <NoteComposer onClose={() => setNoteOpen(false)} onSubmit={saveNote} />}
  </AccountPage>
}

function NoteComposer({ onClose, onSubmit }: { onClose: () => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return <div className="vault-note-modal" role="dialog" aria-modal="true" aria-label="Add a personal study note"><button className="drawer-scrim" onClick={onClose} aria-label="Close note form" /><form onSubmit={onSubmit}><header><div><span className="eyebrow eyebrow--accent"><FilePenLine size={14} /> Personal note</span><h2>Add a study note</h2></div><button type="button" onClick={onClose} aria-label="Close"><X size={19} /></button></header><p>This note is stored only in this browser. It is not coursework and is never sent to anyone.</p><label><span>Course</span><select name="course"><option>General study</option>{courses.map((course) => <option key={course.id}>{course.title}</option>)}</select></label><label><span>Title</span><input name="title" autoFocus placeholder="e.g. Recall prompt for Week 02" required /></label><label><span>Note</span><textarea name="body" rows={5} placeholder="Write the important idea in your own words…" required /></label><footer><button className="button button--quiet" type="button" onClick={onClose}>Cancel</button><button className="button button--primary" type="submit"><Check size={16} /> Save privately</button></footer></form></div>
}

export function AccountPreferencesPage() {
  const [displayName, setDisplayName] = useState(() => window.localStorage.getItem('deepfocus-display-name') ?? 'Fred Okorio')
  const [focusLength, setFocusLength] = useState(() => window.localStorage.getItem('deepfocus-focus-length') ?? '30')
  const [saved, setSaved] = useState(false)
  const [preferences, setPreferences] = useState({
    highContrast: getInterfacePreference('highContrast'),
    dyslexiaFont: getInterfacePreference('dyslexiaFont'),
    largeType: getInterfacePreference('largeType'),
    reducedMotion: getInterfacePreference('reducedMotion'),
  })

  const updatePreference = (key: keyof typeof preferences) => {
    const next = !preferences[key]
    setPreferences((previous) => ({ ...previous, [key]: next }))
    applyInterfacePreference(key, next)
  }

  const saveBasics = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.localStorage.setItem('deepfocus-display-name', displayName.trim() || 'DeepFocus learner')
    window.localStorage.setItem('deepfocus-focus-length', focusLength)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1800)
  }

  const controls = [
    { key: 'largeType' as const, icon: Type, title: 'Larger reading type', helper: 'Increase text size throughout DeepFocus.' },
    { key: 'highContrast' as const, icon: Palette, title: 'High-contrast palette', helper: 'Increase the distinction between surfaces, borders, and text.' },
    { key: 'dyslexiaFont' as const, icon: BookOpen, title: 'Spaced reading', helper: 'Add gentler character spacing to support reading focus.' },
    { key: 'reducedMotion' as const, icon: Moon, title: 'Reduce motion', helper: 'Remove non-essential interface movement.' },
  ]

  return <AccountPage title="Preferences" eyebrow="Focus and accessibility" description="Shape the interface around the way you revise. Each setting is saved only to this browser.">
    <div className="preferences-layout"><form className="preferences-basics" onSubmit={saveBasics}><div className="preferences-section-heading"><div><span className="eyebrow">Your study rhythm</span><h2>Keep the defaults personal.</h2></div>{saved && <span className="saved-state"><Check size={14} /> Saved</span>}</div><label><span>Display name</span><input value={displayName} onChange={(event) => setDisplayName(event.target.value)} /></label><fieldset><legend>Preferred focus session</legend><div>{['20', '30', '45'].map((length) => <label key={length} className={focusLength === length ? 'is-selected' : ''}><input type="radio" value={length} checked={focusLength === length} onChange={(event) => setFocusLength(event.target.value)} /> {length} minutes</label>)}</div></fieldset><button className="button button--primary" type="submit">Save preferences</button></form><section className="preferences-controls"><div className="preferences-section-heading"><div><span className="eyebrow">Interface comfort</span><h2>Choose what helps you stay present.</h2></div></div>{controls.map((control) => { const Icon = control.icon; return <article key={control.key}><span><Icon size={18} /></span><div><h3>{control.title}</h3><p>{control.helper}</p></div><button className={`toggle${preferences[control.key] ? ' is-active' : ''}`} onClick={() => updatePreference(control.key)} aria-pressed={preferences[control.key]} aria-label={`Toggle ${control.title}`}><i /></button></article> })}</section></div>
  </AccountPage>
}

export function MobileCompanionPage() {
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)
  const link = typeof window === 'undefined' ? '' : `${window.location.origin}${window.location.pathname}#/dashboard`
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }
  const shareLink = async () => {
    if (!navigator.share) return copyLink()
    try {
      await navigator.share({ title: 'DeepFocus revision', text: 'Open my DeepFocus revision workspace.', url: link })
      setShared(true)
      window.setTimeout(() => setShared(false), 1800)
    } catch { /* A dismissed native share sheet requires no error state. */ }
  }

  return <AccountPage title="Mobile companion" eyebrow="Continue on another device" description="DeepFocus is a responsive website, so your study space travels with its normal web address—no account token or sensitive QR code required.">
    <section className="mobile-companion"><div className="mobile-companion__visual" aria-hidden="true"><Smartphone size={44} /><span /><i /><b /></div><div><span className="eyebrow eyebrow--accent"><Laptop size={14} /> Device-friendly by default</span><h2>Pick up the same focused workspace on your phone.</h2><p>Open the link below on another device. Your course content is public to the site, while browser-only notes, progress, and preferences stay on the device where you made them.</p><div className="mobile-companion__link"><span>{link}</span><button onClick={copyLink}>{copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy link</>}</button></div><button className="button button--quiet" onClick={shareLink}>{shared ? <><Check size={16} /> Shared</> : <><Smartphone size={16} /> Share link</>}</button></div></section><section className="mobile-boundary"><ShieldCheck size={20} /><div><h2>Why there is no QR sign-in code</h2><p>A QR code that grants account access would be misleading and unsafe in a frontend-only project. This companion area gives you the real, safe action: open or share the public DeepFocus link.</p></div></section>
  </AccountPage>
}

export function WorkspaceUpdatesPage() {
  const [tab, setTab] = useState<'now' | 'later'>('now')
  const weeklyUnits = courses.reduce((total, course) => total + course.weeks.length, 0)
  const updates = [
    { icon: BookOpen, title: `${courses.length} course spaces are organised`, copy: `${weeklyUnits} outline-led revision units are ready to open from the dashboard or Study vault.`, action: 'Browse courses', to: '/courses' },
    { icon: FolderOpen, title: 'Study vault is available', copy: 'Course maps sit beside browser-only personal notes, so the source structure stays visible.', action: 'Open vault', to: '/account/vault' },
    { icon: CalendarDays, title: 'The clinical pathway planner is ready', copy: 'Choose Nursing or Midwifery, inspect each individual course by semester, and keep your revision rhythm private.', action: 'Open planner', to: '/planner' },
  ]
  const navigate = useNavigate()
  return <AccountPage title="Workspace updates" eyebrow="What is available" description="A concise record of DeepFocus capabilities. It is not an institutional announcement feed and never impersonates a school or instructor.">
    <div className="updates-tabs"><button className={tab === 'now' ? 'is-active' : ''} onClick={() => setTab('now')}>Available now</button><button className={tab === 'later' ? 'is-active' : ''} onClick={() => setTab('later')}>Archived</button></div>{tab === 'now' ? <section className="update-list">{updates.map((update) => { const Icon = update.icon; return <article key={update.title}><span><Icon size={19} /></span><div><small>Workspace capability</small><h2>{update.title}</h2><p>{update.copy}</p><button onClick={() => navigate(update.to)}>{update.action} <ChevronRight size={15} /></button></div></article> })}</section> : <section className="updates-empty"><span><Clock3 size={25} /></span><h2>No archived updates</h2><p>This workspace keeps only the current capabilities visible, so there is no artificial announcement history.</p></section>}
  </AccountPage>
}
