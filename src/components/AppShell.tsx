import { useEffect, useState, type ReactNode } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Accessibility,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Clock3,
  Command,
  FileText,
  FolderOpen,
  Globe2,
  GraduationCap,
  History,
  Inbox,
  LayoutDashboard,
  LogOut,
  Map,
  Menu,
  MessageCircleQuestion,
  Search,
  Settings,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'

import { CircleMark } from './Brand'
import { getRecentActivity, recordRecentActivity, relativeActivityTime, type RecentActivity } from '../activity'
import { courses } from '../data'
import { applyInterfacePreference, getInterfacePreference, preferenceEvent, type InterfacePreference } from '../preferences'

const railItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/courses', label: 'Courses', icon: BookOpen },
  { to: '/planner', label: 'Planner', icon: CalendarDays },
  { to: '/inbox', label: 'Inbox', icon: Inbox, badge: 2 },
]

type DrawerKind = 'account' | 'history' | 'help' | null

type AppShellProps = {
  children: ReactNode
  pageTitle: string
  pageEyebrow?: string
  courseContext?: boolean
}

export function AppShell({ children, pageTitle, pageEyebrow, courseContext = false }: AppShellProps) {
  const [drawer, setDrawer] = useState<DrawerKind>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(() => getInterfacePreference('highContrast'))
  const [dyslexiaFont, setDyslexiaFont] = useState(() => getInterfacePreference('dyslexiaFont'))
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMobileNavOpen(false)
    setSearchOpen(false)
    if (location.pathname === '/history') setDrawer('history')
    if (location.pathname === '/help') setDrawer('help')
    window.scrollTo({ top: 0, behavior: 'instant' })
    recordRecentActivity({ path: location.pathname, label: pageTitle, context: pageEyebrow })
  }, [location.pathname, pageEyebrow, pageTitle])

  useEffect(() => {
    applyInterfacePreference('highContrast', highContrast)
  }, [highContrast])

  useEffect(() => {
    applyInterfacePreference('dyslexiaFont', dyslexiaFont)
  }, [dyslexiaFont])

  useEffect(() => {
    const syncPreference = (event: Event) => {
      const detail = (event as CustomEvent<{ preference: InterfacePreference; active: boolean }>).detail
      if (detail?.preference === 'highContrast') setHighContrast(detail.active)
      if (detail?.preference === 'dyslexiaFont') setDyslexiaFont(detail.active)
    }
    window.addEventListener(preferenceEvent, syncPreference)
    return () => window.removeEventListener(preferenceEvent, syncPreference)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
      if (event.key === 'Escape') {
        setSearchOpen(false)
        setDrawer(null)
        setMobileNavOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="app-shell">
      <aside className={`global-rail${mobileNavOpen ? ' global-rail--open' : ''}`} aria-label="Primary navigation">
        <button className="global-rail__brand" onClick={() => navigate('/dashboard')} aria-label="DeepFocus home">
          <CircleMark />
        </button>

        <nav className="global-rail__nav">
          <button className="rail-link rail-link--account" onClick={() => setDrawer('account')} aria-label="Open account">
            <span className="avatar avatar--rail">FO</span>
            <span>Account</span>
          </button>
          {railItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `rail-link${isActive || (item.to === '/courses' && courseContext) ? ' rail-link--active' : ''}`}
              >
                <span className="rail-link__icon">
                  <Icon size={21} strokeWidth={1.8} />
                  {item.badge && <span className="rail-link__badge">{item.badge}</span>}
                </span>
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="global-rail__footer">
          <button className="rail-link" onClick={() => setDrawer('history')}>
            <History size={21} strokeWidth={1.8} />
            <span>History</span>
          </button>
          <button className="rail-link" onClick={() => setDrawer('help')}>
            <CircleHelp size={21} strokeWidth={1.8} />
            <span>Help</span>
          </button>
        </div>
      </aside>

      {mobileNavOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileNavOpen(false)} />}

      <div className="app-frame">
        <header className="topbar">
          <button className="icon-button topbar__menu" onClick={() => setMobileNavOpen(true)} aria-label="Open navigation">
            <Menu size={22} />
          </button>
          <div className="topbar__title">
            {pageEyebrow && <span>{pageEyebrow}</span>}
            <strong>{pageTitle}</strong>
          </div>
          <div className="topbar__actions">
            <button className="search-trigger" onClick={() => setSearchOpen(true)}>
              <Search size={17} />
              <span>Search</span>
              <kbd><Command size={11} />K</kbd>
            </button>
            <button className="icon-button" aria-label="Notifications">
              <Bell size={19} />
              <span className="notification-dot" />
            </button>
            <button className="topbar__account" onClick={() => setDrawer('account')} aria-label="Open your account">
              <span className="avatar">FO</span>
              <span className="topbar__account-text">
                <strong>Fred Okorio</strong>
                <small>Revision space</small>
              </span>
              <ChevronRight size={15} />
            </button>
          </div>
        </header>
        <main>{children}</main>
      </div>

      <UtilityDrawer
        kind={drawer}
        onClose={() => setDrawer(null)}
        onNavigate={(path) => { navigate(path); setDrawer(null) }}
        highContrast={highContrast}
        dyslexiaFont={dyslexiaFont}
        onToggleHighContrast={() => setHighContrast((current) => !current)}
        onToggleDyslexiaFont={() => setDyslexiaFont((current) => !current)}
      />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

type UtilityDrawerProps = {
  kind: DrawerKind
  onClose: () => void
  onNavigate: (path: string) => void
  highContrast: boolean
  dyslexiaFont: boolean
  onToggleHighContrast: () => void
  onToggleDyslexiaFont: () => void
}

function UtilityDrawer({ kind, onClose, onNavigate, highContrast, dyslexiaFont, onToggleHighContrast, onToggleDyslexiaFont }: UtilityDrawerProps) {
  if (!kind) return null
  const title = kind === 'account' ? 'Account' : kind === 'history' ? 'Recent history' : 'Help'
  return (
    <div className="utility-drawer-layer" role="dialog" aria-modal="true" aria-label={title}>
      <button className="drawer-scrim utility-drawer__scrim" onClick={onClose} aria-label={`Close ${title}`} />
      <aside className="utility-drawer">
        <header className="utility-drawer__header">
          <div>{kind !== 'account' && <span className="eyebrow">DeepFocus revision</span>}<h2>{title}</h2></div>
          <button className="utility-drawer__close" onClick={onClose} aria-label={`Close ${title}`}><X size={20} /></button>
        </header>
        {kind === 'account' && <AccountPanel onNavigate={onNavigate} highContrast={highContrast} dyslexiaFont={dyslexiaFont} onToggleHighContrast={onToggleHighContrast} onToggleDyslexiaFont={onToggleDyslexiaFont} />}
        {kind === 'history' && <HistoryPanel onNavigate={onNavigate} />}
        {kind === 'help' && <HelpPanel onNavigate={onNavigate} />}
      </aside>
    </div>
  )
}

function AccountPanel({ onNavigate, highContrast, dyslexiaFont, onToggleHighContrast, onToggleDyslexiaFont }: Omit<UtilityDrawerProps, 'kind' | 'onClose'>) {
  return (
    <div className="account-panel">
      <div className="account-panel__identity">
        <span className="avatar avatar--profile">FO</span>
        <h3>Fred Okorio</h3>
        <p>DeepFocus learner</p>
        <button className="account-panel__logout" type="button"><LogOut size={14} /> Log out</button>
      </div>
      <nav className="account-panel__links" aria-label="Account links">
        <AccountLink icon={Bell} label="Study notices" helper="Local reminder preferences" onClick={() => onNavigate('/account/notices')} />
        <AccountLink icon={UserRound} label="Profile" helper="Details and study preferences" onClick={() => onNavigate('/profile')} />
        <AccountLink icon={FolderOpen} label="Study vault" helper="Your course maps and personal notes" onClick={() => onNavigate('/account/vault')} />
        <AccountLink icon={Settings} label="Preferences" helper="Focus and accessibility" onClick={() => onNavigate('/account/preferences')} />
        <AccountLink icon={GraduationCap} label="Portfolio" helper="Your learning space" onClick={() => onNavigate('/profile')} />
        <AccountLink icon={MessageCircleQuestion} label="Mobile companion" helper="Open DeepFocus on another device" onClick={() => onNavigate('/account/mobile')} />
        <AccountLink icon={Globe2} label="Workspace updates" helper="What is currently available" onClick={() => onNavigate('/account/updates')} />
      </nav>
      <section className="account-panel__accessibility" aria-labelledby="accessibility-title">
        <div><Accessibility size={18} /><h3 id="accessibility-title">Accessibility</h3></div>
        <AccessibilityToggle label="High contrast interface" active={highContrast} onClick={onToggleHighContrast} />
        <AccessibilityToggle label="Dyslexia-friendly letter spacing" active={dyslexiaFont} onClick={onToggleDyslexiaFont} />
      </section>
    </div>
  )
}

function AccountLink({ icon: Icon, label, helper, onClick }: { icon: typeof Bell; label: string; helper: string; onClick: () => void }) {
  return <button onClick={onClick}><Icon size={18} /><span><strong>{label}</strong><small>{helper}</small></span><ChevronRight size={16} /></button>
}

function AccessibilityToggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return <button className="account-toggle" onClick={onClick} aria-pressed={active}><span>{label}</span><i className={active ? 'is-active' : ''}><b /></i></button>
}

function HistoryPanel({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activities, setActivities] = useState<RecentActivity[]>(() => getRecentActivity())
  useEffect(() => {
    const refresh = () => setActivities(getRecentActivity())
    window.addEventListener('deepfocus-activity-change', refresh)
    return () => window.removeEventListener('deepfocus-activity-change', refresh)
  }, [])
  return (
    <div className="history-panel">
      <p className="utility-drawer__lead">Return to exactly where you were studying. This list is saved only in this browser.</p>
      {activities.length ? <div className="history-panel__list">{activities.map((activity) => <ActivityButton key={activity.id} activity={activity} onClick={() => onNavigate(activity.path)} />)}</div> : <EmptyDrawerState icon={Clock3} title="Nothing to revisit yet" copy="Open a course or a weekly module and it will appear here." />}
    </div>
  )
}

function ActivityButton({ activity, onClick }: { activity: RecentActivity; onClick: () => void }) {
  const Icon = activity.path.includes('modules') ? BookOpen : (activity.path === '/calendar' || activity.path === '/planner') ? CalendarDays : activity.path === '/inbox' ? Inbox : activity.path === '/dashboard' ? LayoutDashboard : FileText
  return <button className="activity-button" onClick={onClick}><span className="activity-button__icon"><Icon size={16} /></span><span><strong>{activity.label}</strong><small>{activity.context || 'DeepFocus revision'} · {relativeActivityTime(activity.visitedAt)}</small></span><ChevronRight size={16} /></button>
}

function HelpPanel({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="help-panel">
      <div className="help-panel__illustration" aria-hidden="true"><Map size={58} /><span /><i /><b /></div>
      <div className="help-panel__intro"><span className="eyebrow eyebrow--accent"><Sparkles size={13} /> Start here</span><h3>Find your way, one focused step at a time.</h3><p>DeepFocus keeps the supplied nursing outline visible without adding invented lessons or dates.</p></div>
      <button className="help-panel__primary" onClick={() => onNavigate('/courses')}><BookOpen size={18} /><span><strong>Browse your courses</strong><small>Open a course and choose a weekly module</small></span><ChevronRight size={17} /></button>
      <section className="help-panel__resources"><span className="eyebrow">Useful paths</span><button onClick={() => onNavigate('/courses/pharmacology-1/modules?week=1')}>Start Pharmacology I <ChevronRight size={15} /></button><button onClick={() => onNavigate('/planner')}>Open your pathway <ChevronRight size={15} /></button><button onClick={() => onNavigate('/settings')}>Adjust accessibility <ChevronRight size={15} /></button></section>
      <p className="help-panel__note">Need course material that is not in the outline? Keep the study structure here, then add your own verified notes.</p>
    </div>
  )
}

function EmptyDrawerState({ icon: Icon, title, copy }: { icon: typeof Clock3; title: string; copy: string }) {
  return <div className="utility-empty"><span><Icon size={24} /></span><h3>{title}</h3><p>{copy}</p></div>
}

function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const suggestions = courses
    .flatMap((course) => [
      { label: course.title, helper: `${course.weeks.length}-week course overview`, to: `/courses/${course.id}` },
      ...course.weeks.map((week) => ({
        label: week.title,
        helper: `${course.title} · Week ${String(week.number).padStart(2, '0')}`,
        to: `/courses/${course.id}/modules?week=${week.number}`,
      })),
    ])
    .filter((item) => `${item.label} ${item.helper}`.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8)

  if (!open) return null
  return (
    <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search DeepFocus">
      <button className="drawer-scrim" onClick={onClose} aria-label="Dismiss search" />
      <div className="search-panel">
        <div className="search-panel__input">
          <Search size={21} />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search courses and topics" aria-label="Search courses and topics" />
          <button onClick={onClose}>Esc</button>
        </div>
        <div className="search-panel__body">
          <span className="eyebrow">{query ? 'Matching results' : 'Quick access'}</span>
          {suggestions.length ? suggestions.map((item) => (
            <button key={`${item.label}-${item.to}`} onClick={() => { navigate(item.to); onClose() }}>
              <span className="search-result__icon"><Search size={16} /></span>
              <span><strong>{item.label}</strong><small>{item.helper}</small></span>
              <ChevronRight size={17} />
            </button>
          )) : <p className="search-empty">No course or topic matches “{query}”.</p>}
        </div>
        <div className="search-panel__footer"><span>Searches the verified course titles and weekly topics.</span><span><kbd>Ctrl</kbd><kbd>K</kbd> to open</span></div>
      </div>
    </div>
  )
}
