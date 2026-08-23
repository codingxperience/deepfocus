import { useEffect, useState, type FormEvent } from 'react'
import { Check, ChevronRight, CircleAlert, Clock3, CreditCard, LockKeyhole, Smartphone, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { AppShell } from '../components/AppShell'
import { loadPreviewSession } from '../auth'
import { getStudyPathway, getTermUnits } from '../curriculum'
import { getProductTiming, getSemesterProduct } from '../paymentCatalog'
import { getPathwayPlan, loadPlannerState, plannerChangeEvent, type PlannerState } from '../planner'
import {
  createPaymentRequest,
  formatUgandaShillings,
  getPaymentLabel,
  resolvePayment,
  type PaymentNetwork,
  type PreviewPayment,
  type SemesterProduct,
} from '../staffPreview'
import { useStaffPreview } from '../useStaffPreview'

const walletLogos: Record<PaymentNetwork, { alt: string; src: string }> = {
  mtn: {
    alt: 'MTN Mobile Money',
    src: 'https://group.mtn.com/wp-content/uploads/2022/02/MTN_2022_Logo_Black_RGB.jpg?fit=300%2C200&resize=300%2C200',
  },
  airtel: {
    alt: 'Airtel Money',
    src: 'https://www.airtel.africa/sites/default/files/airtel-logo_0.png',
  },
}

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

function WalletLogo({ network }: { network: PaymentNetwork }) {
  const logo = walletLogos[network]
  return <span className={`network-logo network-logo--${network}`}><img src={logo.src} alt={logo.alt} /></span>
}

function PaymentJourney({ payment, onResolve, onClose, onContinue }: {
  payment: PreviewPayment
  onResolve: (status: 'verified' | 'failed' | 'expired') => void
  onClose: () => void
  onContinue: () => void
}) {
  const isWaiting = payment.status === 'awaiting-approval'
  const isVerified = payment.status === 'verified'
  const isRetryable = payment.status === 'failed' || payment.status === 'expired'

  return (
    <div className="payment-journey" aria-live="polite">
      <div className={`journey-icon ${isVerified ? 'is-success' : ''}`}>{isVerified ? <Check size={24} /> : isRetryable ? <CircleAlert size={24} /> : <Clock3 size={24} />}</div>
      <p className="eyebrow">{isVerified ? 'Payment confirmed' : isRetryable ? 'Payment not completed' : 'Approval required'}</p>
      <h2>{isVerified ? 'Your semester is ready.' : isRetryable ? 'The request was not approved.' : 'Check your phone to approve.'}</h2>
      <p>{isVerified ? 'The registered course units for this semester are now available in DeepFocus.' : isRetryable ? 'You can begin a new request whenever you are ready.' : `Approve the ${payment.network === 'mtn' ? 'MTN MoMo' : 'Airtel Money'} request sent to ${payment.phoneNumber}.`}</p>
      <dl className="journey-details"><div><dt>Reference</dt><dd>{payment.reference}</dd></div><div><dt>Amount</dt><dd>{formatUgandaShillings(payment.product.amount)}</dd></div></dl>
      {isWaiting && <div className="payment-journey__actions"><button type="button" className="primary-action" onClick={() => onResolve('verified')}>I have approved it <Check size={16} /></button><button type="button" className="quiet-action" onClick={() => onResolve('failed')}>I did not approve</button></div>}
      {isVerified && <div className="payment-journey__actions"><button type="button" className="primary-action" onClick={onContinue}>Open dashboard <ChevronRight size={16} /></button></div>}
      {isRetryable && <div className="payment-journey__actions"><button type="button" className="primary-action" onClick={onClose}>Try again <ChevronRight size={16} /></button></div>}
    </div>
  )
}

function MobileMoneySheet({ product, payment, onClose, onRequest, onResolve, onContinue }: {
  product: SemesterProduct
  payment?: PreviewPayment
  onClose: () => void
  onRequest: (network: PaymentNetwork, phoneNumber: string) => void
  onResolve: (status: 'verified' | 'failed' | 'expired') => void
  onContinue: () => void
}) {
  const [network, setNetwork] = useState<PaymentNetwork>('mtn')
  const [phoneNumber, setPhoneNumber] = useState('077 123 4567')
  const [error, setError] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const digits = phoneNumber.replace(/\D/g, '')
    if (digits.length < 9 || digits.length > 12) {
      setError('Enter a valid Mobile Money number to continue.')
      return
    }
    onRequest(network, phoneNumber)
  }

  return (
    <div className="payment-backdrop" role="presentation" onMouseDown={onClose}>
      <section className={`payment-sheet${payment ? ' payment-sheet--response' : ''}`} role="dialog" aria-modal="true" aria-labelledby="checkout-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="sheet-close" type="button" aria-label="Close payment" onClick={onClose}><X size={18} /></button>
        {payment
          ? <PaymentJourney payment={payment} onResolve={onResolve} onClose={onClose} onContinue={onContinue} />
          : <>
            <div className="payment-sheet-kicker"><Smartphone size={16} /> Mobile Money</div>
            <h2 id="checkout-title">Confirm payment</h2>
            <p className="payment-sheet-copy">Choose the wallet linked to your phone, then approve the request there.</p>
            <div className="payment-order-summary"><span>{product.title}</span><strong>{formatUgandaShillings(product.amount)}</strong></div>
            <form onSubmit={submit}>
              <fieldset className="network-fieldset">
                <legend>Choose your wallet</legend>
                <div className="network-options">
                  <button className={`network-option ${network === 'mtn' ? 'is-selected' : ''}`} type="button" aria-pressed={network === 'mtn'} onClick={() => setNetwork('mtn')}>
                    <WalletLogo network="mtn" /><span><strong>MTN MoMo</strong><small>Mobile Money</small></span>{network === 'mtn' && <Check size={17} />}
                  </button>
                  <button className={`network-option ${network === 'airtel' ? 'is-selected' : ''}`} type="button" aria-pressed={network === 'airtel'} onClick={() => setNetwork('airtel')}>
                    <WalletLogo network="airtel" /><span><strong>Airtel Money</strong><small>Mobile Money</small></span>{network === 'airtel' && <Check size={17} />}
                  </button>
                </div>
              </fieldset>
              <label className="payment-phone-label">Mobile-money number<input value={phoneNumber} inputMode="numeric" autoComplete="tel" onChange={(event) => setPhoneNumber(event.target.value)} placeholder="077 123 4567" /></label>
              {error && <p className="payment-form-error"><CircleAlert size={16} /> {error}</p>}
              <button className="payment-confirm-button" type="submit">Send payment request <ChevronRight size={17} /></button>
            </form>
            <div className="payment-sheet-safety"><LockKeyhole size={15} /> Your wallet PIN is never requested here.</div>
          </>}
      </section>
    </div>
  )
}

export function LearnerAccessPage() {
  const navigate = useNavigate()
  const account = loadPreviewSession()
  const plannerRecord = usePlannerRecord()
  const { state, commit } = useStaffPreview()
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [activePaymentId, setActivePaymentId] = useState<string | null>(null)

  const pathway = getStudyPathway(plannerRecord.activePathwayId)
  const plan = getPathwayPlan(plannerRecord, pathway.id)
  const requestedTerm = pathway.terms.find((term) => term.id === plan.activeTermId) ?? pathway.terms[0]
  const registeredTerm = pathway.terms.find((term) => getTermUnits(pathway, term.id).some((unit) => plan.registeredUnitIds.includes(unit.id)))
  const activeTerm = getTermUnits(pathway, requestedTerm.id).some((unit) => plan.registeredUnitIds.includes(unit.id)) ? requestedTerm : registeredTerm ?? requestedTerm
  const activeUnits = getTermUnits(pathway, activeTerm.id).filter((unit) => plan.registeredUnitIds.includes(unit.id))
  const product = activeUnits.length > 0 ? getSemesterProduct(pathway.id, activeTerm.year, activeTerm.semester) : undefined
  const payments = product && account ? state.payments.filter((payment) => payment.accountId === account.id && payment.product.id === product.id) : []
  const activePayment = payments.find((payment) => payment.id === activePaymentId) ?? payments[0]
  const entitlement = account && product ? state.entitlements.find((item) => item.accountId === account.id && item.productId === product.id && item.status === 'active') : undefined
  const balance = product && !entitlement ? product.amount : 0

  function openCheckout() {
    if (!product) {
      navigate('/planner')
      return
    }
    setActivePaymentId(activePayment?.status === 'awaiting-approval' ? activePayment.id : null)
    setIsSheetOpen(true)
  }

  function requestPayment(network: PaymentNetwork, phoneNumber: string) {
    if (!account || !product) return
    let paymentId = ''
    commit((current) => {
      const next = createPaymentRequest(current, { accountId: account.id, product, network, phoneNumber })
      paymentId = next.payments[0]?.id ?? ''
      return next
    })
    setActivePaymentId(paymentId)
  }

  function resolveCurrentPayment(status: 'verified' | 'failed' | 'expired') {
    if (!activePayment) return
    commit((current) => resolvePayment(current, activePayment.id, status, 'payment-service'))
  }

  return (
    <AppShell pageTitle="Payments">
      <main className="access-page payment-page">
        <header className="payment-page__header"><div><p className="eyebrow">DeepFocus revision</p><h1>Payments</h1><p>One clear payment for the semester and individual course units you have saved.</p></div></header>

        <section className="payment-account-card" aria-label="Current payment balance">
          <div className="payment-account-card__summary"><span><CreditCard size={20} /></span><div><p className="eyebrow">Current balance</p><strong>{formatUgandaShillings(balance)}</strong><small>{product ? `${activeTerm.label} · ${activeUnits.length} course unit${activeUnits.length === 1 ? '' : 's'} selected` : 'No course units have been registered yet.'}</small></div>{entitlement && <em><Check size={14} /> Paid</em>}</div>
          <div className="payment-account-card__detail">
            {product
              ? <><span>Semester access</span><strong>{formatUgandaShillings(product.amount)}</strong><small>{getProductTiming(product)}</small></>
              : <><span>Nothing is due</span><strong>Register a course first</strong><small>Your balance remains at zero until you save an individual course unit.</small></>}
          </div>
          <footer>{product && !entitlement ? <button type="button" className="primary-action" onClick={openCheckout}>{activePayment?.status === 'awaiting-approval' ? 'Continue payment' : 'Pay by Mobile Money'} <ChevronRight size={17} /></button> : <button type="button" className="quiet-action" onClick={() => navigate('/planner')}>{product ? 'Manage registration' : 'Open planner'} <ChevronRight size={16} /></button>}<button type="button" className="payment-account-card__link" onClick={() => navigate('/planner')}>Review course registration</button></footer>
        </section>

        {payments.length > 0 && <section className="payment-history-card payment-history-card--compact"><div className="section-heading"><div><p className="eyebrow">Payment activity</p><h2>Latest request</h2></div><CreditCard size={19} /></div><div className="payment-history-list">{payments.slice(0, 1).map((payment) => <div key={payment.id} className="payment-history-item"><div><strong>{payment.reference}</strong><small>{payment.network === 'mtn' ? 'MTN MoMo' : 'Airtel Money'} · {payment.phoneNumber}</small></div><span className={`payment-pill status-${payment.status}`}>{getPaymentLabel(payment.status)}</span><strong>{formatUgandaShillings(payment.product.amount)}</strong></div>)}</div></section>}
      </main>
      {isSheetOpen && product && <MobileMoneySheet product={product} payment={activePayment?.status === 'awaiting-approval' || activePayment?.status === 'verified' || activePayment?.status === 'failed' || activePayment?.status === 'expired' ? activePayment : undefined} onClose={() => setIsSheetOpen(false)} onRequest={requestPayment} onResolve={resolveCurrentPayment} onContinue={() => { setIsSheetOpen(false); navigate('/dashboard') }} />}
    </AppShell>
  )
}
