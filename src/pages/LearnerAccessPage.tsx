import { useMemo, useState, type FormEvent } from 'react'
import { Check, ChevronRight, CircleAlert, Clock3, CreditCard, LockKeyhole, ShieldCheck, Smartphone, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { AppShell } from '../components/AppShell'
import { loadPreviewSession } from '../auth'
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

const semesterProducts: SemesterProduct[] = [
  { id: 'nursing-y1s1-2026', title: 'Certificate in Nursing · Year 1 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'nursing-y1s2-2026', title: 'Certificate in Nursing · Year 1 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'nursing-y2s1-2026', title: 'Certificate in Nursing · Year 2 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'nursing-y2s2-2026', title: 'Certificate in Nursing · Year 2 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'nursing-y3s1-2026', title: 'Certificate in Nursing · Year 3 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y1s1-2026', title: 'Certificate in Midwifery · Year 1 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y1s2-2026', title: 'Certificate in Midwifery · Year 1 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y2s1-2026', title: 'Certificate in Midwifery · Year 2 · Semester 1', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y2s2-2026', title: 'Certificate in Midwifery · Year 2 · Semester 2', courseCount: 6, amount: 58000 },
  { id: 'midwifery-y3s1-2026', title: 'Certificate in Midwifery · Year 3 · Semester 1', courseCount: 6, amount: 58000 },
]

function getProductTiming(product: SemesterProduct) {
  return product.id.includes('s1') ? 'February–June 2026' : 'July–December 2026'
}

function MobileMoneySheet({ product, onClose, onRequest }: { product: SemesterProduct; onClose: () => void; onRequest: (network: PaymentNetwork, phoneNumber: string) => void }) {
  const [network, setNetwork] = useState<PaymentNetwork>('mtn')
  const [phoneNumber, setPhoneNumber] = useState('077 123 4567')
  const [error, setError] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const digits = phoneNumber.replace(/\D/g, '')
    if (digits.length < 9 || digits.length > 12) {
      setError('Enter a valid mobile-money number to continue.')
      return
    }
    onRequest(network, phoneNumber)
  }

  return (
    <div className="payment-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="payment-sheet" role="dialog" aria-modal="true" aria-labelledby="checkout-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="sheet-close" type="button" aria-label="Close checkout" onClick={onClose}><X size={18} /></button>
        <div className="payment-sheet-kicker"><Smartphone size={16} /> Mobile Money checkout</div>
        <h2 id="checkout-title">Confirm study access</h2>
        <p className="payment-sheet-copy">Choose the wallet you use. This demonstration never contacts a payment provider or charges money.</p>
        <div className="payment-order-summary"><span>{product.title}</span><strong>{formatUgandaShillings(product.amount)}</strong></div>
        <form onSubmit={submit}>
          <fieldset className="network-fieldset">
            <legend>Choose your wallet</legend>
            <div className="network-options">
              <button className={`network-option ${network === 'mtn' ? 'is-selected' : ''}`} type="button" aria-pressed={network === 'mtn'} onClick={() => setNetwork('mtn')}>
                <span className="network-mark network-mark-mtn">M</span><span><strong>MTN MoMo</strong><small>Mobile Money</small></span>{network === 'mtn' && <Check size={17} />}
              </button>
              <button className={`network-option ${network === 'airtel' ? 'is-selected' : ''}`} type="button" aria-pressed={network === 'airtel'} onClick={() => setNetwork('airtel')}>
                <span className="network-mark network-mark-airtel">A</span><span><strong>Airtel Money</strong><small>Mobile Money</small></span>{network === 'airtel' && <Check size={17} />}
              </button>
            </div>
          </fieldset>
          <label className="payment-phone-label">Mobile-money number<input value={phoneNumber} inputMode="numeric" autoComplete="tel" onChange={(event) => setPhoneNumber(event.target.value)} placeholder="077 123 4567" /></label>
          {error && <p className="payment-form-error"><CircleAlert size={16} /> {error}</p>}
          <button className="payment-confirm-button" type="submit">Continue to confirmation <ChevronRight size={17} /></button>
        </form>
        <div className="payment-sheet-safety"><LockKeyhole size={15} /> Preview checkout · no payment credentials are collected</div>
      </section>
    </div>
  )
}

function PaymentJourney({ payment, onResolve }: { payment: PreviewPayment; onResolve: (status: 'verified' | 'failed' | 'expired') => void }) {
  const isWaiting = payment.status === 'awaiting-approval'
  const isVerified = payment.status === 'verified'

  return (
    <section className="access-journey" aria-live="polite">
      <div className={`journey-icon ${isVerified ? 'is-success' : ''}`}>{isVerified ? <Check size={22} /> : <Clock3 size={22} />}</div>
      <p className="eyebrow">{isVerified ? 'Access confirmed' : 'Confirmation requested'}</p>
      <h2>{isVerified ? 'This semester is ready for your revision.' : 'Check your phone to approve the request.'}</h2>
      <p>{isVerified ? 'Your selected course units are now available in this preview.' : `A ${payment.network === 'mtn' ? 'MTN MoMo' : 'Airtel Money'} prompt would be sent to ${payment.phoneNumber} in a live checkout.`}</p>
      <dl className="journey-details"><div><dt>Reference</dt><dd>{payment.reference}</dd></div><div><dt>Amount</dt><dd>{formatUgandaShillings(payment.product.amount)}</dd></div></dl>
      {isWaiting && <div className="preview-controls"><p><ShieldCheck size={16} /> Demonstration controls</p><div><button type="button" className="primary-action" onClick={() => onResolve('verified')}>Simulate approval</button><button type="button" className="quiet-action" onClick={() => onResolve('failed')}>Simulate decline</button></div></div>}
    </section>
  )
}

export function LearnerAccessPage() {
  const navigate = useNavigate()
  const account = loadPreviewSession()
  const { state, commit } = useStaffPreview()
  const [selectedProductId, setSelectedProductId] = useState(semesterProducts[0].id)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [activePaymentId, setActivePaymentId] = useState<string | null>(null)
  const selectedProduct = semesterProducts.find((product) => product.id === selectedProductId) ?? semesterProducts[0]
  const payments = useMemo(() => state.payments.filter((payment) => payment.accountId === account?.id), [account?.id, state.payments])
  const activePayment = payments.find((payment) => payment.id === activePaymentId) ?? payments[0]
  const entitlement = account ? state.entitlements.find((item) => item.accountId === account.id && item.status === 'active') : undefined

  function requestPayment(network: PaymentNetwork, phoneNumber: string) {
    if (!account) return
    let paymentId = ''
    commit((current) => {
      const next = createPaymentRequest(current, { accountId: account.id, product: selectedProduct, network, phoneNumber })
      paymentId = next.payments[0]?.id ?? ''
      return next
    })
    setActivePaymentId(paymentId)
    setIsSheetOpen(false)
  }

  function resolveCurrentPayment(status: 'verified' | 'failed' | 'expired') {
    if (!activePayment) return
    commit((current) => resolvePayment(current, activePayment.id, status, 'payment-gateway-preview'))
  }

  return (
    <AppShell pageTitle="Study access">
      <main className="access-page">
        <header className="access-header"><div><p className="eyebrow">DeepFocus revision</p><h1>One semester. One clear direction.</h1><p>Choose the course units for your current semester, then confirm access through a safe payment demonstration.</p></div><div className={`access-status ${entitlement ? 'is-active' : ''}`}><span>{entitlement ? <Check size={16} /> : <LockKeyhole size={16} />}</span><div><strong>{entitlement ? 'Access active' : 'No active access'}</strong><small>{entitlement ? 'A semester has been unlocked.' : 'Select a semester to begin.'}</small></div></div></header>
        <div className="access-layout">
          <section className="access-card access-selection-card"><div className="section-heading"><div><p className="eyebrow">Study selection</p><h2>Choose a semester</h2></div><span>UGX pricing</span></div><div className="semester-product-list">{semesterProducts.map((product) => <button key={product.id} type="button" className={`semester-product ${product.id === selectedProduct.id ? 'is-selected' : ''}`} onClick={() => setSelectedProductId(product.id)}><span className="selection-dot" aria-hidden="true" /><span className="semester-product-title"><strong>{product.title}</strong><small>{getProductTiming(product)} · {product.courseCount} individual course units</small></span><strong>{formatUgandaShillings(product.amount)}</strong></button>)}</div></section>
          <aside className="access-card access-summary-card"><p className="eyebrow">Selected semester</p><h2>{selectedProduct.title.replace('Certificate in ', '')}</h2><p>{getProductTiming(selectedProduct)} · {selectedProduct.courseCount} course units</p><div className="summary-price"><span>Semester access</span><strong>{formatUgandaShillings(selectedProduct.amount)}</strong></div><button type="button" className="primary-action access-checkout-button" onClick={() => setIsSheetOpen(true)}>Pay by Mobile Money <ChevronRight size={17} /></button><p className="access-preview-note"><ShieldCheck size={16} /> Demo only. This interface never initiates a real payment.</p></aside>
        </div>
        {activePayment && <PaymentJourney payment={activePayment} onResolve={resolveCurrentPayment} />}
        <section className="access-card payment-history-card"><div className="section-heading"><div><p className="eyebrow">Payment activity</p><h2>Recent requests</h2></div><CreditCard size={19} /></div>{payments.length === 0 ? <p className="empty-inline">No payment request has been created for this preview account.</p> : <div className="payment-history-list">{payments.map((payment) => <div key={payment.id} className="payment-history-item"><div><strong>{payment.product.title}</strong><small>{payment.reference} · {payment.network === 'mtn' ? 'MTN MoMo' : 'Airtel Money'}</small></div><span className={`payment-pill status-${payment.status}`}>{getPaymentLabel(payment.status)}</span><strong>{formatUgandaShillings(payment.product.amount)}</strong></div>)}</div>}</section>
        {activePayment?.status === 'verified' && <button type="button" className="dashboard-return-link" onClick={() => navigate('/dashboard')}>Continue to dashboard <ChevronRight size={16} /></button>}
      </main>
      {isSheetOpen && <MobileMoneySheet product={selectedProduct} onClose={() => setIsSheetOpen(false)} onRequest={requestPayment} />}
    </AppShell>
  )
}
