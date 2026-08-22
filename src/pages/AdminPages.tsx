import { useMemo, useState } from 'react'
import { ArrowRight, Check, ChevronRight, CircleAlert, ClipboardCheck, CreditCard, FileText, LockKeyhole, RefreshCcw, ShieldCheck, UserRoundCheck, UsersRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { getPreviewAccounts, loadPreviewSession } from '../auth'
import { StaffShell } from '../components/StaffShell'
import {
  assignCourseInstructor,
  formatUgandaShillings,
  getPaymentLabel,
  getPendingClearanceRequests,
  reverseVerifiedPayment,
  reviewClearanceRequest,
  resolvePayment,
  type ClearanceRequest,
  type PaymentStatus,
  type PreviewPayment,
} from '../staffPreview'
import { useStaffPreview } from '../useStaffPreview'

function adminAccount() {
  const account = loadPreviewSession()
  return account?.role === 'admin' ? account : null
}

function statusText(status: string) {
  return status.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function AdminMetric({ label, value, detail }: { label: string; value: string | number; detail: string }) {
  return <article className="staff-metric"><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>
}

function PaymentStatusPill({ status }: { status: PaymentStatus }) {
  return <span className={`payment-pill status-${status}`}>{getPaymentLabel(status)}</span>
}

export function AdminOverviewPage() {
  const account = adminAccount()
  const { state } = useStaffPreview()
  const navigate = useNavigate()
  if (!account) return null
  const pendingClearance = getPendingClearanceRequests(state).length
  const pendingPayments = state.payments.filter((payment) => payment.status === 'awaiting-approval').length
  const activeAccess = state.entitlements.filter((entitlement) => entitlement.status === 'active').length
  const unpublishedMaps = state.courseSpaces.filter((course) => course.mapStatus !== 'published').length
  return <StaffShell account={account} title="Operations overview"><section className="staff-intro"><div><p className="eyebrow">DeepFocus access operations</p><h2>Keep the learner journey clear and accountable.</h2><p>Review the small number of decisions that affect access, while course authors keep responsibility for their own revision maps.</p></div><button type="button" className="primary-action" onClick={() => navigate('/admin/access')}>Review access <ArrowRight size={17} /></button></section><section className="staff-metrics-grid"><AdminMetric label="Clearance review" value={pendingClearance} detail="Awaiting a human decision" /><AdminMetric label="Payment requests" value={pendingPayments} detail="Awaiting simulated confirmation" /><AdminMetric label="Active access" value={activeAccess} detail="Verified preview entitlements" /><AdminMetric label="Course maps" value={unpublishedMaps} detail="Draft or in review" /></section><section className="admin-action-grid"><button type="button" onClick={() => navigate('/admin/access')}><ClipboardCheck size={20} /><span><strong>Clearance review</strong><small>Prerequisite and entry-point decisions</small></span><ChevronRight size={18} /></button><button type="button" onClick={() => navigate('/admin/payments')}><CreditCard size={20} /><span><strong>Payment simulation</strong><small>Verify, decline, or reverse access</small></span><ChevronRight size={18} /></button><button type="button" onClick={() => navigate('/admin/courses')}><FileText size={20} /><span><strong>Course operations</strong><small>Assignments and map readiness</small></span><ChevronRight size={18} /></button></section><section className="staff-section"><div className="section-heading"><div><p className="eyebrow">Recent accountability</p><h2>Latest recorded actions</h2></div><button type="button" className="text-action" onClick={() => navigate('/admin/audit')}>View audit trail <ChevronRight size={16} /></button></div><div className="audit-list audit-list--compact">{state.auditEvents.slice(0, 4).map((event) => <article key={event.id}><span className={`audit-icon audit-icon--${event.action}`}><ShieldCheck size={15} /></span><div><strong>{event.summary}</strong><small>{event.createdAt} · {event.actorId.replace(/^(admin|instructor|learner)-/, '').replace('-', ' ')}</small></div></article>)}</div></section></StaffShell>
}

export function AdminAccessReviewPage() {
  const account = adminAccount()
  const { state, commit } = useStaffPreview()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [note, setNote] = useState('Evidence reviewed in this demonstration.')
  if (!account) return null
  const adminId = account.id
  const requests = getPendingClearanceRequests(state)
  const selected = requests.find((request) => request.id === selectedId) ?? requests[0]
  function decide(status: 'approved' | 'returned') {
    if (!selected) return
    commit((current) => reviewClearanceRequest(current, selected.id, status, adminId, note.trim() || 'No further note recorded.'))
    setSelectedId(null)
  }
  return <StaffShell account={account} title="Access review"><section className="staff-intro staff-intro--narrow"><div><p className="eyebrow">Entry and prerequisite review</p><h2>Handle joining points with care.</h2><p>Approval here permits a learner to continue to payment. It does not fabricate prior study, replace an academic record, or grant course access by itself.</p></div></section><div className="review-layout"><section className="review-queue"><div className="section-heading"><div><p className="eyebrow">Pending cases</p><h2>{requests.length} to review</h2></div><ClipboardCheck size={19} /></div>{requests.length === 0 ? <p className="empty-inline">Nothing is waiting for review.</p> : requests.map((request) => <button key={request.id} type="button" className={request.id === selected?.id ? 'is-selected' : ''} onClick={() => setSelectedId(request.id)}><span className="learner-avatar">{request.learnerName.split(' ').map((part) => part[0]).join('')}</span><span><strong>{request.learnerName}</strong><small>{request.programme} · {request.requestedSemester}</small></span><ChevronRight size={16} /></button>)}</section>{selected && <ClearanceDecision request={selected} note={note} setNote={setNote} onApprove={() => decide('approved')} onReturn={() => decide('returned')} />}</div><section className="staff-split-callout"><div><LockKeyhole size={20} /><div><h3>Prerequisites remain a real decision.</h3><p>The preview records a clear review trail. Production would need verified evidence, staff permission controls, and a protected academic record.</p></div></div></section></StaffShell>
}

function ClearanceDecision({ request, note, setNote, onApprove, onReturn }: { request: ClearanceRequest; note: string; setNote: (value: string) => void; onApprove: () => void; onReturn: () => void }) {
  return <section className="decision-panel"><p className="eyebrow">Reviewing request</p><h2>{request.learnerName}</h2><dl className="decision-details"><div><dt>Programme</dt><dd>{request.programme}</dd></div><div><dt>Requested starting point</dt><dd>{request.requestedSemester}</dd></div><div><dt>Evidence</dt><dd>{request.evidence}</dd></div><div><dt>Submitted</dt><dd>{request.submittedAt}</dd></div></dl><label>Review note<textarea rows={4} value={note} onChange={(event) => setNote(event.target.value)} /></label><footer><button type="button" className="quiet-action" onClick={onReturn}>Return for evidence</button><button type="button" className="primary-action" onClick={onApprove}>Approve to payment <Check size={16} /></button></footer></section>
}

export function AdminPaymentsPage() {
  const account = adminAccount()
  const { state, commit } = useStaffPreview()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  if (!account) return null
  const adminId = account.id
  const selected = state.payments.find((payment) => payment.id === selectedId) ?? state.payments[0]
  function resolve(payment: PreviewPayment, status: 'verified' | 'failed' | 'expired') { commit((current) => resolvePayment(current, payment.id, status, adminId)) }
  function reverse(payment: PreviewPayment) { commit((current) => reverseVerifiedPayment(current, payment.id, adminId)) }
  return <StaffShell account={account} title="Payment simulation"><section className="payment-admin-notice"><CircleAlert size={19} /><div><strong>Simulation only</strong><p>These are local preview records. There is no real Mobile Money request, provider call, wallet deduction, refund, or payment verification.</p></div></section><div className="payments-admin-layout"><section className="payment-admin-list"><div className="section-heading"><div><p className="eyebrow">Payment records</p><h2>{state.payments.length} requests</h2></div><CreditCard size={19} /></div>{state.payments.map((payment) => <button key={payment.id} type="button" className={payment.id === selected?.id ? 'is-selected' : ''} onClick={() => setSelectedId(payment.id)}><div><strong>{payment.product.title}</strong><small>{payment.reference} · {payment.network === 'mtn' ? 'MTN MoMo' : 'Airtel Money'}</small></div><PaymentStatusPill status={payment.status} /><strong>{formatUgandaShillings(payment.product.amount)}</strong></button>)}</section>{selected && <section className="payment-admin-detail"><p className="eyebrow">Payment record</p><h2>{selected.product.title}</h2><dl className="decision-details"><div><dt>Reference</dt><dd>{selected.reference}</dd></div><div><dt>Requested from</dt><dd>{selected.phoneNumber}</dd></div><div><dt>Wallet</dt><dd>{selected.network === 'mtn' ? 'MTN MoMo' : 'Airtel Money'}</dd></div><div><dt>Amount</dt><dd>{formatUgandaShillings(selected.product.amount)}</dd></div></dl><PaymentStatusPill status={selected.status} />{selected.status === 'awaiting-approval' && <footer><button className="quiet-action" type="button" onClick={() => resolve(selected, 'failed')}>Mark declined</button><button className="primary-action" type="button" onClick={() => resolve(selected, 'verified')}>Verify access <Check size={16} /></button></footer>}{selected.status === 'verified' && <footer><button className="quiet-action danger-action" type="button" onClick={() => reverse(selected)}><RefreshCcw size={16} /> Reverse access</button></footer>}</section>}</div></StaffShell>
}

export function AdminCourseOperationsPage() {
  const account = adminAccount()
  const { state, commit } = useStaffPreview()
  if (!account) return null
  const adminId = account.id
  const instructor = getPreviewAccounts().find((staff) => staff.role === 'instructor')
  function assign(courseId: string) { if (instructor) commit((current) => assignCourseInstructor(current, courseId, instructor.id, adminId)) }
  return <StaffShell account={account} title="Course operations"><section className="staff-intro staff-intro--narrow"><div><p className="eyebrow">Course ownership</p><h2>One course unit, one clear owner.</h2><p>Each course remains separately visible. Administration can assign the workspace; the assigned instructor controls its learner-facing revision map.</p></div></section><section className="staff-section course-operations-list"><div className="section-heading"><div><p className="eyebrow">Course catalogue</p><h2>{state.courseSpaces.length} active course spaces</h2></div><FileText size={19} /></div>{state.courseSpaces.map((course) => <article key={course.id}><div><span className={`map-status map-status--${course.mapStatus}`}>{statusText(course.mapStatus)}</span><strong>{course.title}</strong><small>{course.pathway} · {course.semester} · {course.code}</small></div><div><span className="signal-label">Assigned instructor</span><strong>{course.ownerId === 'instructor-grace' ? 'Grace Nalubega' : 'Unassigned'}</strong></div><button type="button" className="quiet-action" disabled={course.ownerId === instructor?.id} onClick={() => assign(course.id)}>{course.ownerId === instructor?.id ? 'Assigned' : 'Assign Grace'}</button></article>)}</section></StaffShell>
}

export function AdminTeamPage() {
  const account = adminAccount()
  if (!account) return null
  const people = getPreviewAccounts().filter((person) => person.role !== 'learner')
  return <StaffShell account={account} title="Team permissions"><section className="staff-intro staff-intro--narrow"><div><p className="eyebrow">Staff access</p><h2>Roles should be narrow by design.</h2><p>This preview illustrates the boundaries: instructors shape assigned maps; administrators review access, payments, and operational records.</p></div></section><section className="team-list">{people.map((person) => <article key={person.id}><span className="staff-avatar staff-avatar--large">{person.initials}</span><div><strong>{person.name}</strong><small>{person.title}</small></div><span className={`role-pill role-pill--${person.role}`}>{person.role}</span><p>{person.role === 'admin' ? 'Access review, payment decisions, instructor assignments, and audit visibility.' : 'Assigned course map authorship, learner signals, and course notices.'}</p><UserRoundCheck size={19} /></article>)}</section><section className="staff-split-callout"><div><UsersRound size={20} /><div><h3>Preview accounts are deliberately fake.</h3><p>They are a demo device only. Production requires secure authentication, staff identity verification, permission enforcement, and server-side audit records.</p></div></div></section></StaffShell>
}

export function AdminAuditPage() {
  const account = adminAccount()
  const { state } = useStaffPreview()
  const [filter, setFilter] = useState('all')
  const events = useMemo(() => filter === 'all' ? state.auditEvents : state.auditEvents.filter((event) => event.action === filter), [filter, state.auditEvents])
  if (!account) return null
  return <StaffShell account={account} title="Audit trail"><section className="staff-intro staff-intro--narrow"><div><p className="eyebrow">Preview accountability</p><h2>A clear record of consequential actions.</h2><p>Payment, entitlement, prerequisite, course-map, notice, and assignment actions are recorded locally in this browser preview.</p></div></section><section className="staff-section"><div className="section-heading"><div><p className="eyebrow">Activity</p><h2>Recorded actions</h2></div><select className="audit-filter" value={filter} onChange={(event) => setFilter(event.target.value)}><option value="all">All activity</option><option value="payment">Payments</option><option value="entitlement">Access</option><option value="clearance">Clearance</option><option value="course-map">Course maps</option><option value="notice">Notices</option><option value="assignment">Assignments</option></select></div><div className="audit-list">{events.map((event) => <article key={event.id}><span className={`audit-icon audit-icon--${event.action}`}><ShieldCheck size={15} /></span><div><strong>{event.summary}</strong><small>{event.createdAt} · {event.actorId.replace(/^(admin|instructor|learner)-/, '').replace('-', ' ')}</small></div></article>)}</div></section></StaffShell>
}
