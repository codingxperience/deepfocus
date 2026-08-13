import type { ReactNode } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  BookMarked,
  BookOpenText,
  ChevronDown,
  FileText,
  Home,
  PanelLeftClose,
} from 'lucide-react'

import { AppShell } from './AppShell'

type CourseShellProps = {
  children: ReactNode
  sectionTitle: string
}

const links = [
  { to: '/courses/pharmacology', label: 'Overview', icon: Home, end: true },
  { to: '/courses/pharmacology/modules', label: 'Modules', icon: BookMarked },
  { to: '/courses/pharmacology/outline', label: 'Course outline', icon: FileText },
  { to: '/courses/pharmacology/resources', label: 'Study resources', icon: BookOpenText },
]

export function CourseShell({ children, sectionTitle }: CourseShellProps) {
  const navigate = useNavigate()
  return (
    <AppShell pageTitle={sectionTitle} pageEyebrow="PHA 301 • Pharmacology I" courseContext>
      <div className="course-layout">
        <aside className="course-nav" aria-label="Pharmacology course navigation">
          <div className="course-nav__top">
            <button className="back-link" onClick={() => navigate('/dashboard')}><ArrowLeft size={16} /> Dashboard</button>
            <div className="course-nav__identity">
              <span className="course-nav__monogram">PH</span>
              <div><span>Course</span><strong>Pharmacology I</strong></div>
              <ChevronDown size={16} />
            </div>
          </div>
          <nav>
            {links.map((link) => {
              const Icon = link.icon
              return (
                <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => isActive ? 'is-active' : ''}>
                  <Icon size={18} />
                  <span>{link.label}</span>
                </NavLink>
              )
            })}
          </nav>
          <div className="course-nav__footer">
            <span>Course preview</span>
            <p>Content follows the supplied course outline.</p>
            <button aria-label="Collapse course navigation"><PanelLeftClose size={18} /> Collapse</button>
          </div>
        </aside>
        <div className="course-content">{children}</div>
      </div>
    </AppShell>
  )
}
