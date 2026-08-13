import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  BookOpenText,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  FileText,
  FolderOpen,
  GraduationCap,
  RotateCcw,
  Sparkles,
} from 'lucide-react'

import { CourseShell } from '../components/CourseShell'
import { courseWeeks, type CourseWeek, type ModuleItem } from '../data'

const STORAGE_KEY = 'deepfocus-completed-items'

export function CourseModules() {
  const [searchParams] = useSearchParams()
  const selectedWeek = Number(searchParams.get('week')) || null
  const [openWeeks, setOpenWeeks] = useState<Set<number>>(() => new Set(selectedWeek ? [selectedWeek] : courseWeeks.map((week) => week.number)))
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as string[])
    } catch {
      return new Set()
    }
  })
  const [selectedItem, setSelectedItem] = useState<{ week: CourseWeek; item: ModuleItem } | null>(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
  }, [completed])

  useEffect(() => {
    if (selectedWeek) {
      setOpenWeeks((previous) => new Set(previous).add(selectedWeek))
      requestAnimationFrame(() => document.getElementById(`week-${selectedWeek}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [selectedWeek])

  const allOpen = openWeeks.size === courseWeeks.length
  const completedCount = completed.size
  const totalCount = courseWeeks.reduce((total, week) => total + week.items.length, 0)
  const progress = Math.round((completedCount / totalCount) * 100)
  const progressLabel = useMemo(() => completedCount ? `${completedCount} of ${totalCount} steps complete` : 'Ready when you are', [completedCount, totalCount])

  const toggleComplete = (id: string) => {
    setCompleted((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <CourseShell sectionTitle="Modules">
      <div className="modules-page">
        <header className="modules-header">
          <div>
            <span className="eyebrow eyebrow--accent"><Sparkles size={14} /> Course modules</span>
            <h1>Introduction to Pharmacology</h1>
            <p>Move through the five topics in order. Each week follows the same quiet rhythm: prepare, learn, then check your recall.</p>
          </div>
          <div className="modules-progress">
            <div className="modules-progress__top"><span>{progressLabel}</span><strong>{progress}%</strong></div>
            <div className="progress-bar"><span style={{ width: `${progress}%` }} /></div>
          </div>
        </header>

        <div className="module-controls">
          <span>{courseWeeks.length} weeks • {totalCount} learning steps</span>
          <div>
            {completedCount > 0 && <button className="text-button" onClick={() => setCompleted(new Set())}><RotateCcw size={15} /> Reset preview</button>}
            <button className="button button--quiet" onClick={() => setOpenWeeks(allOpen ? new Set() : new Set(courseWeeks.map((week) => week.number)))}>
              {allOpen ? 'Collapse all' : 'Expand all'} <ChevronDown className={allOpen ? 'rotate-180' : ''} size={16} />
            </button>
          </div>
        </div>

        <section className="resource-module">
          <button className="module-heading module-heading--resource">
            <span className="module-heading__chevron"><ChevronDown size={16} /></span>
            <span className="module-heading__index"><FolderOpen size={17} /></span>
            <span className="module-heading__copy"><small>Start here</small><strong>Course resources</strong></span>
            <span className="module-heading__count">3 essentials</span>
          </button>
          <div className="module-items">
            <ResourceItem icon={GraduationCap} label="How to use this revision course" helper="Course orientation" />
            <ResourceItem icon={FileText} label="Introduction to Pharmacology outline" helper="Supplied course outline" />
            <ResourceItem icon={BookOpenText} label="A focused study rhythm" helper="Prepare • Learn • Check" />
          </div>
        </section>

        <div className="weekly-modules">
          {courseWeeks.map((week) => {
            const isOpen = openWeeks.has(week.number)
            const weekComplete = week.items.filter((item) => completed.has(item.id)).length
            return (
              <section className={`week-module${selectedWeek === week.number ? ' week-module--selected' : ''}`} id={`week-${week.number}`} key={week.number}>
                <button className="module-heading" onClick={() => setOpenWeeks((previous) => {
                  const next = new Set(previous)
                  if (next.has(week.number)) next.delete(week.number)
                  else next.add(week.number)
                  return next
                })} aria-expanded={isOpen}>
                  <span className="module-heading__chevron"><ChevronDown className={isOpen ? '' : 'rotate-neg-90'} size={16} /></span>
                  <span className="module-heading__index">{String(week.number).padStart(2, '0')}</span>
                  <span className="module-heading__copy"><small>Week {week.number}</small><strong>{week.title}</strong></span>
                  <span className="module-heading__count">{weekComplete}/{week.items.length}</span>
                </button>
                {isOpen && (
                  <div className="week-module__body">
                    <div className="week-module__intro">
                      <p>{week.description}</p>
                      <span>{week.items.length} steps</span>
                    </div>
                    <div className="module-items">
                      {week.items.map((item) => {
                        const Icon = item.icon
                        const isComplete = completed.has(item.id)
                        return (
                          <div className={`module-item${isComplete ? ' module-item--complete' : ''}`} key={item.id}>
                            <button className="module-item__main" onClick={() => setSelectedItem({ week, item })}>
                              <span className={`module-item__icon module-item__icon--${item.type}`}><Icon size={17} /></span>
                              <span className="module-item__copy"><strong>{item.label}</strong><small>{item.helper}</small></span>
                              <span className={`module-item__type module-item__type--${item.type}`}>{item.type}</span>
                            </button>
                            <button className="module-item__complete" onClick={() => toggleComplete(item.id)} aria-label={`${isComplete ? 'Mark incomplete' : 'Mark complete'}: ${item.label}`}>
                              {isComplete ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </section>
            )
          })}
        </div>

        <div className="modules-end"><Check size={15} /><span>End of the supplied course outline</span></div>
      </div>

      <LearningStepDrawer selected={selectedItem} completed={completed} onClose={() => setSelectedItem(null)} onToggleComplete={toggleComplete} />
    </CourseShell>
  )
}

function ResourceItem({ icon: Icon, label, helper }: { icon: typeof FileText; label: string; helper: string }) {
  return (
    <button className="module-item__main resource-item">
      <span className="module-item__icon module-item__icon--resource"><Icon size={17} /></span>
      <span className="module-item__copy"><strong>{label}</strong><small>{helper}</small></span>
      <span className="module-item__type">Open</span>
    </button>
  )
}

function LearningStepDrawer({ selected, completed, onClose, onToggleComplete }: { selected: { week: CourseWeek; item: ModuleItem } | null; completed: Set<string>; onClose: () => void; onToggleComplete: (id: string) => void }) {
  if (!selected) return null
  const { week, item } = selected
  const Icon = item.icon
  const isComplete = completed.has(item.id)
  return (
    <div className="step-modal" role="dialog" aria-modal="true" aria-label={item.label}>
      <button className="drawer-scrim" onClick={onClose} aria-label="Dismiss learning step" />
      <article className="step-panel">
        <header>
          <span className={`module-item__icon module-item__icon--${item.type}`}><Icon size={19} /></span>
          <button onClick={onClose}>Close</button>
        </header>
        <span className="eyebrow">Week {String(week.number).padStart(2, '0')} • {item.helper}</span>
        <h2>{item.label}</h2>
        <p className="step-panel__lead">{week.description}</p>
        <div className="step-panel__outcomes">
          <span className="eyebrow">This week, focus on</span>
          {week.outcomes.map((outcome) => <div key={outcome}><Check size={15} /><span>{outcome}</span></div>)}
        </div>
        <div className="step-panel__note"><strong>Preview mode</strong><p>This frontend establishes the learning structure without pretending that lesson materials have already been supplied.</p></div>
        <button className={`button ${isComplete ? 'button--quiet' : 'button--primary'} step-panel__action`} onClick={() => onToggleComplete(item.id)}>
          {isComplete ? <><CheckCircle2 size={17} /> Completed — mark incomplete</> : <><Circle size={17} /> Mark this step complete</>}
        </button>
      </article>
    </div>
  )
}
