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
import type { Course } from '../data'

type CourseShellProps = {
  children: ReactNode
  sectionTitle: string
  course: Course
}

export function CourseShell({ children, sectionTitle, course }: CourseShellProps) {
  const navigate = useNavigate()
  const coursePath = `/courses/${course.id}`
  const links = [
    { to: coursePath, label: 'Overview', icon: Home, end: true },
    { to: `${coursePath}/modules`, label: 'Modules', icon: BookMarked },
    { to: `${coursePath}/outline`, label: 'Course outline', icon: FileText },
    { to: `${coursePath}/resources`, label: 'Study resources', icon: BookOpenText },
  ]
  return (
    <AppShell pageTitle={sectionTitle} pageEyebrow={`Year 2 • Semester 1 • ${course.title}`} courseContext>
      <div className="course-layout">
        <aside className="course-nav" aria-label="Pharmacology course navigation">
          <div className="course-nav__top">
            <button className="back-link" onClick={() => navigate('/dashboard')}><ArrowLeft size={16} /> Dashboard</button>
            <div className="course-nav__identity">
              <span className="course-nav__monogram">{course.title.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase()}</span>
              <div><span>{course.code}</span><strong>{course.title}</strong></div>
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
            <span>Examination syllabus</span>
            <p>Content follows the supplied Year 2 Semester 1 outline.</p>
            <button aria-label="Collapse course navigation"><PanelLeftClose size={18} /> Collapse</button>
          </div>
        </aside>
        <div className="course-content">{children}</div>
      </div>
    </AppShell>
  )
}
