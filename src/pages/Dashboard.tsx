import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, ChevronRight, CreditCard } from 'lucide-react'

import { AppShell } from '../components/AppShell'
import { getStudyPathway, getTermUnits } from '../curriculum'
import { loadPreviewSession } from '../auth'
import { getSemesterProduct } from '../paymentCatalog'
import { getPathwayPlan, getRegisteredUnits, loadPlannerState, plannerChangeEvent, type PlannerState } from '../planner'
import { formatUgandaShillings } from '../staffPreview'
import { useStaffPreview } from '../useStaffPreview'

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
  const account = loadPreviewSession()
  const { state: paymentState } = useStaffPreview()
  const pathway = getStudyPathway(plannerRecord.activePathwayId)
  const plan = getPathwayPlan(plannerRecord, pathway.id)
  const registeredUnits = getRegisteredUnits(plannerRecord)
  const requestedTerm = pathway.terms.find((term) => term.id === plan.activeTermId) ?? pathway.terms[0]
  const termWithSelections = pathway.terms.find((term) => getTermUnits(pathway, term.id).some((unit) => plan.registeredUnitIds.includes(unit.id)))
  const activeTerm = getTermUnits(pathway, requestedTerm.id).some((unit) => plan.registeredUnitIds.includes(unit.id)) ? requestedTerm : termWithSelections ?? requestedTerm
  const activeUnits = getTermUnits(pathway, activeTerm.id).filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const hasRegistration = registeredUnits.length > 0
  const selectedSemester = hasRegistration ? getSemesterProduct(pathway.id, activeTerm.year, activeTerm.semester) : undefined
  const relevantPayments = selectedSemester && account
    ? paymentState.payments.filter((payment) => payment.accountId === account.id && payment.product.id === selectedSemester.id)
    : []
  const latestPayment = relevantPayments[0]
  const balance = selectedSemester && latestPayment?.status !== 'verified' ? selectedSemester.amount : 0

  return (
    <AppShell pageTitle="Dashboard">
      <main className="minimal-dashboard minimal-dashboard--simple">
        <section className="minimal-dashboard__notice minimal-dashboard__notice--static" role="status">
          <span className="minimal-dashboard__notice-mark"><BookOpen size={18} /></span>
          {hasRegistration
            ? <div><strong>Your semester registration is saved.</strong><p>{activeTerm.label} · {activeTerm.period} · {pathway.credential}. {activeUnits.length} individual revision course{activeUnits.length === 1 ? '' : 's'} saved for this semester.</p></div>
            : <div><strong>Welcome to DeepFocus.</strong><p>Choose a pathway, semester, and individual revision courses in the planner. This dashboard will only reflect what you save.</p></div>}
        </section>

        <header className="minimal-dashboard__header">
          <h1>Dashboard</h1>
          <button onClick={() => navigate('/planner')}>{hasRegistration ? 'Manage plan' : 'Open planner'} <ChevronRight size={16} /></button>
        </header>

        {hasRegistration && selectedSemester && <section className="dashboard-payment-summary" aria-label="Current payment balance">
          <div className="dashboard-payment-summary__intro">
            <span><CreditCard size={17} /></span>
            <div><p className="eyebrow">Payments</p><strong>{balance > 0 ? 'Semester payment due' : 'Semester payment complete'}</strong><small>{activeTerm.label} · {activeTerm.period}</small></div>
          </div>
          <div className="dashboard-payment-summary__amount"><small>Current balance</small><strong>{formatUgandaShillings(balance)}</strong></div>
          <button type="button" onClick={() => navigate('/learner/payment')}>{balance > 0 ? 'Pay now' : 'View payments'} <ChevronRight size={15} /></button>
        </section>}

        <footer className="minimal-dashboard__footer"><span>DeepFocus revision</span><p>Private study planning</p></footer>
      </main>
    </AppShell>
  )
}
