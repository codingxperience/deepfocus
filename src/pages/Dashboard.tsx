import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { getStudyPathway, getTermUnits } from '../curriculum'
import { getPathwayPlan, getRegisteredUnits, loadPlannerState, plannerChangeEvent, type PlannerState } from '../planner'

function usePlannerRecord() {
  const [record, setRecord] = useState<PlannerState>(loadPlannerState)

  useEffect(() => {
    const refresh = () => setRecord(loadPlannerState())
    window.addEventListener(plannerChangeEvent, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(plannerChangeEvent, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  return record
}

export function Dashboard() {
  const navigate = useNavigate()
  const plannerRecord = usePlannerRecord()
  const pathway = getStudyPathway(plannerRecord.activePathwayId)
  const plan = getPathwayPlan(plannerRecord, pathway.id)
  const registeredUnits = getRegisteredUnits(plannerRecord)
  const requestedTerm = pathway.terms.find((term) => term.id === plan.activeTermId) ?? pathway.terms[0]
  const termWithSelections = pathway.terms.find((term) => getTermUnits(pathway, term.id).some((unit) => plan.registeredUnitIds.includes(unit.id)))
  const activeTerm = getTermUnits(pathway, requestedTerm.id).some((unit) => plan.registeredUnitIds.includes(unit.id)) ? requestedTerm : termWithSelections ?? requestedTerm
  const activeUnits = getTermUnits(pathway, activeTerm.id).filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const hasRegistration = registeredUnits.length > 0

  return (
    <AppShell pageTitle="Dashboard">
      <main className="minimal-dashboard minimal-dashboard--simple">
        <header className="minimal-dashboard__header">
          <h1>Dashboard</h1>
          <button onClick={() => navigate('/planner')}>{hasRegistration ? 'Manage plan' : 'Open planner'} <ChevronRight size={16} /></button>
        </header>

        <section className="minimal-dashboard__notice minimal-dashboard__notice--static" role="status">
          <BookOpen size={18} />
          {hasRegistration
            ? <div><strong>Your course registration is saved.</strong><p>{activeTerm.label} · {activeTerm.period} · {pathway.credential}. {activeUnits.length} individual revision course{activeUnits.length === 1 ? '' : 's'} saved for this semester.</p></div>
            : <div><strong>Your study space is ready when you are.</strong><p>Choose a pathway, semester, and individual revision courses in the planner. This dashboard will only reflect what you save.</p></div>}
        </section>

        <footer className="minimal-dashboard__footer"><span>DeepFocus revision</span><p>Private study planning</p></footer>
      </main>
    </AppShell>
  )
}
