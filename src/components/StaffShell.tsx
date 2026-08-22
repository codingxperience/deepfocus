import { type ReactNode } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  Bell,
  BookOpenCheck,
  ClipboardCheck,
  CreditCard,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  ScrollText,
  Settings2,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

import { endPreviewSession, type PreviewAccount, type PreviewRole } from '../auth'
import { CircleMark } from './Brand'

type StaffShellProps = {
  account: PreviewAccount
  title: string
  children: ReactNode
}

const instructorLinks = [
  { to: '/instructor', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/instructor/courses', label: 'Course studio', icon: BookOpenCheck },
  { to: '/instructor/learners', label: 'Learners', icon: UsersRound },
  { to: '/instructor/notices', label: 'Notices', icon: MessageSquareText },
]

const adminLinks = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/access', label: 'Access review', icon: ClipboardCheck },
  { to: '/admin/payments', label: 'Payments', icon: CreditCard },
  { to: '/admin/courses', label: 'Course operations', icon: BookOpenCheck },
  { to: '/admin/team', label: 'Team', icon: UsersRound },
  { to: '/admin/audit', label: 'Audit trail', icon: ScrollText },
]

function roleName(role: PreviewRole) {
  return role === 'admin' ? 'Administrator' : 'Instructor'
}

export function StaffShell({ account, title, children }: StaffShellProps) {
  const navigate = useNavigate()
  const links = account.role === 'admin' ? adminLinks : instructorLinks
  const signOut = () => {
    endPreviewSession()
    navigate('/sign-in', { replace: true })
  }

  return (
    <div className="staff-shell">
      <aside className="staff-rail" aria-label={`${roleName(account.role)} navigation`}>
        <button className="staff-rail__brand" onClick={() => navigate(account.role === 'admin' ? '/admin' : '/instructor')} aria-label="DeepFocus staff home"><CircleMark /></button>
        <div className="staff-rail__identity"><span>{roleName(account.role)}</span><strong>DeepFocus</strong></div>
        <nav className="staff-rail__nav">
          {links.map((link) => {
            const Icon = link.icon
            return <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => `staff-rail__link${isActive ? ' is-active' : ''}`}><Icon size={18} /><span>{link.label}</span></NavLink>
          })}
        </nav>
        <div className="staff-rail__footer"><button onClick={signOut}><LogOut size={17} /><span>Sign out</span></button></div>
      </aside>

      <div className="staff-frame">
        <header className="staff-topbar"><div><span className="eyebrow eyebrow--accent"><ShieldCheck size={13} /> {roleName(account.role)} workspace</span><h1>{title}</h1></div><div className="staff-topbar__profile"><button aria-label="Staff notifications"><Bell size={18} /><i /></button><span className="staff-avatar">{account.initials}</span><span><strong>{account.name}</strong><small>{account.title}</small></span><Settings2 size={16} /></div></header>
        <main className="staff-main">{children}</main>
      </div>
    </div>
  )
}
