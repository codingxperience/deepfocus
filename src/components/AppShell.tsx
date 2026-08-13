import { useEffect, useState, type ReactNode } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Clock3,
  Command,
  GraduationCap,
  History,
  Inbox,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  UserRound,
  X,
} from 'lucide-react'

import { Brand, CircleMark } from './Brand'

const railItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/courses', label: 'Courses', icon: BookOpen },
  { to: '/calendar', label: 'Plan', icon: CalendarDays },
  { to: '/inbox', label: 'Inbox', icon: Inbox, badge: 2 },
]

type AppShellProps = {
  children: ReactNode
  pageTitle: string
  pageEyebrow?: string
  courseContext?: boolean
}

export function AppShell({ children, pageTitle, pageEyebrow, courseContext = false }: AppShellProps) {
  const [accountOpen, setAccountOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMobileNavOpen(false)
    setSearchOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
      if (event.key === 'Escape') {
        setSearchOpen(false)
        setAccountOpen(false)
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
          <button className="rail-link rail-link--account" onClick={() => setAccountOpen(true)} aria-label="Open account">
            <span className="avatar avatar--rail">DF</span>
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
          <NavLink to="/history" className="rail-link">
            <History size={21} strokeWidth={1.8} />
            <span>History</span>
          </NavLink>
          <button className="rail-link" onClick={() => navigate('/help')}>
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
            <button className="topbar__account" onClick={() => setAccountOpen(true)} aria-label="Open your account">
              <span className="avatar">DF</span>
              <span className="topbar__account-text">
                <strong>Learner</strong>
                <small>Revision space</small>
              </span>
              <ChevronRight size={15} />
            </button>
          </div>
        </header>
        <main>{children}</main>
      </div>

      <AccountDrawer open={accountOpen} onClose={() => setAccountOpen(false)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

function AccountDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate()
  return (
    <>
      {open && <button className="drawer-scrim" onClick={onClose} aria-label="Dismiss account panel" />}
      <aside className={`account-drawer${open ? ' account-drawer--open' : ''}`} aria-hidden={!open} aria-label="Account panel">
        <div className="account-drawer__header">
          <Brand />
          <button className="icon-button" onClick={onClose} aria-label="Close account panel"><X size={19} /></button>
        </div>
        <div className="account-card">
          <span className="avatar avatar--large">DF</span>
          <div>
            <span className="eyebrow">Learning profile</span>
            <h2>Your revision space</h2>
            <p>Add your name and study preferences when you are ready.</p>
          </div>
        </div>
        <nav className="account-links">
          <button onClick={() => { navigate('/profile'); onClose() }}><UserRound size={19} /><span><strong>Profile</strong><small>Personal details and study preferences</small></span><ChevronRight size={17} /></button>
          <button onClick={() => { navigate('/courses'); onClose() }}><GraduationCap size={19} /><span><strong>My courses</strong><small>Your six nursing revision spaces</small></span><ChevronRight size={17} /></button>
          <button onClick={() => { navigate('/history'); onClose() }}><Clock3 size={19} /><span><strong>Learning history</strong><small>Return to recently opened topics</small></span><ChevronRight size={17} /></button>
          <button onClick={() => { navigate('/settings'); onClose() }}><Settings size={19} /><span><strong>Settings</strong><small>Accessibility and focus preferences</small></span><ChevronRight size={17} /></button>
        </nav>
        <div className="account-drawer__note">
          <span className="status-dot" />
          <div><strong>Local preview</strong><p>Your progress is kept in this browser for this prototype.</p></div>
        </div>
      </aside>
    </>
  )
}

function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const suggestions = [
    { label: 'Pharmacology I', helper: 'Course overview', to: '/courses/pharmacology' },
    { label: 'Pharmacokinetics & Pharmacodynamics', helper: 'Week 05', to: '/courses/pharmacology/modules?week=5' },
    { label: 'Essential Drugs and Rational Medicine Use', helper: 'Week 03', to: '/courses/pharmacology/modules?week=3' },
  ].filter((item) => `${item.label} ${item.helper}`.toLowerCase().includes(query.toLowerCase()))

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
            <button key={item.label} onClick={() => { navigate(item.to); onClose() }}>
              <span className="search-result__icon"><Search size={16} /></span>
              <span><strong>{item.label}</strong><small>{item.helper}</small></span>
              <ChevronRight size={17} />
            </button>
          )) : <p className="search-empty">No course or topic matches “{query}”.</p>}
        </div>
        <div className="search-panel__footer"><span>Searches course titles and the supplied pharmacology outline.</span><span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span></div>
      </div>
    </div>
  )
}
