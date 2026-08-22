export type PaymentNetwork = 'mtn' | 'airtel'
export type PaymentStatus = 'awaiting-approval' | 'verified' | 'failed' | 'expired' | 'reversed'
export type CourseMapStatus = 'draft' | 'in-review' | 'published' | 'archived'
export type ClearanceStatus = 'pending' | 'approved' | 'returned'

export type SemesterProduct = {
  id: string
  title: string
  courseCount: number
  amount: number
}

export type PreviewPayment = {
  id: string
  accountId: string
  product: SemesterProduct
  network: PaymentNetwork
  phoneNumber: string
  status: PaymentStatus
  reference: string
  createdAt: string
  expiresAt: string
  resolvedAt?: string
  resolvedBy?: string
}

export type PreviewEntitlement = {
  id: string
  accountId: string
  productId: string
  status: 'active' | 'revoked'
  paymentId: string
  grantedAt: string
  revokedAt?: string
}

export type CourseSpace = {
  id: string
  courseId: string
  code: string
  title: string
  pathway: string
  semester: string
  ownerId: string
  mapStatus: CourseMapStatus
  learnersActive: number
  completionRate: number
  currentWeek: number
  lastEditedAt: string
}

export type ClearanceRequest = {
  id: string
  learnerName: string
  learnerId: string
  programme: string
  requestedSemester: string
  evidence: string
  submittedAt: string
  status: ClearanceStatus
  note?: string
  reviewedBy?: string
  reviewedAt?: string
}

export type StaffNotice = {
  id: string
  title: string
  body: string
  courseSpaceId?: string
  audience: 'course' | 'all-learners'
  status: 'draft' | 'sent'
  createdAt: string
  authorId: string
}

export type AuditEvent = {
  id: string
  actorId: string
  action: 'payment' | 'entitlement' | 'clearance' | 'course-map' | 'notice' | 'assignment'
  summary: string
  createdAt: string
}

export type LearnerSnapshot = {
  id: string
  name: string
  programme: string
  semester: string
  access: 'active' | 'pending-payment' | 'clearance-review'
  lastSeen: string
  focusStreak: number
}

export type StaffPreviewState = {
  payments: PreviewPayment[]
  entitlements: PreviewEntitlement[]
  courseSpaces: CourseSpace[]
  clearanceRequests: ClearanceRequest[]
  notices: StaffNotice[]
  auditEvents: AuditEvent[]
  learners: LearnerSnapshot[]
}

const storageKey = 'deepfocus-staff-preview-v1'
export const staffPreviewChangeEvent = 'deepfocus-staff-preview-change'

const staffClock = '2026-08-22T08:30:00.000Z'

function audit(actorId: string, action: AuditEvent['action'], summary: string, offset = 0): AuditEvent {
  return { id: `audit-${Math.random().toString(36).slice(2, 8)}`, actorId, action, summary, createdAt: new Date(new Date(staffClock).getTime() + offset).toISOString() }
}

export function createStaffPreviewState(): StaffPreviewState {
  return {
    payments: [
      { id: 'pay-0002', accountId: 'learner-moses', product: { id: 'midwifery-y2s2-2026', title: 'Certificate in Midwifery · Year 2 · Semester 2 · 2026', courseCount: 6, amount: 58000 }, network: 'airtel', phoneNumber: '075•••318', status: 'awaiting-approval', reference: 'DF-MIDWIFERY-Y2S2-2026-0002', createdAt: '2026-08-22T07:12:00.000Z', expiresAt: '2026-08-22T07:17:00.000Z' },
      { id: 'pay-0001', accountId: 'learner-sandra', product: { id: 'nursing-y3s1-2026', title: 'Certificate in Nursing · Year 3 · Semester 1 · 2026', courseCount: 6, amount: 58000 }, network: 'mtn', phoneNumber: '077•••904', status: 'verified', reference: 'DF-NURSING-Y3S1-2026-0001', createdAt: '2026-08-21T10:05:00.000Z', expiresAt: '2026-08-21T10:10:00.000Z', resolvedAt: '2026-08-21T10:07:00.000Z', resolvedBy: 'payment-gateway-preview' },
    ],
    entitlements: [{ id: 'entitlement-pay-0001', accountId: 'learner-sandra', productId: 'nursing-y3s1-2026', status: 'active', paymentId: 'pay-0001', grantedAt: '2026-08-21T10:07:00.000Z' }],
    courseSpaces: [
      { id: 'course-pharmacology', courseId: 'pharmacology-1', code: 'CN 211', title: 'Pharmacology I', pathway: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', ownerId: 'instructor-grace', mapStatus: 'published', learnersActive: 42, completionRate: 71, currentWeek: 5, lastEditedAt: 'Today · 08:10' },
      { id: 'course-medical', courseId: 'medical-nursing-1', code: 'CN 211', title: 'Medical Nursing I', pathway: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', ownerId: 'instructor-grace', mapStatus: 'published', learnersActive: 38, completionRate: 64, currentWeek: 4, lastEditedAt: 'Yesterday · 15:20' },
      { id: 'course-surgical', courseId: 'surgical-nursing-1', code: 'CN 212', title: 'Surgical Nursing I', pathway: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', ownerId: 'instructor-grace', mapStatus: 'in-review', learnersActive: 36, completionRate: 49, currentWeek: 6, lastEditedAt: 'Yesterday · 11:05' },
      { id: 'course-gynaecologic', courseId: 'gynaecologic-nursing', code: 'CN 212', title: 'Gynaecologic Nursing', pathway: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', ownerId: 'instructor-grace', mapStatus: 'draft', learnersActive: 31, completionRate: 38, currentWeek: 3, lastEditedAt: 'Aug 19 · 09:40' },
      { id: 'course-paediatric', courseId: 'paediatric-nursing-1', code: 'CN 213', title: 'Paediatric Nursing I', pathway: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', ownerId: 'instructor-grace', mapStatus: 'published', learnersActive: 40, completionRate: 62, currentWeek: 5, lastEditedAt: 'Aug 18 · 16:15' },
      { id: 'course-palliative', courseId: 'palliative-care', code: 'CN 213', title: 'Palliative Care', pathway: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', ownerId: 'instructor-grace', mapStatus: 'draft', learnersActive: 28, completionRate: 45, currentWeek: 4, lastEditedAt: 'Aug 18 · 13:30' },
    ],
    clearanceRequests: [
      { id: 'clearance-1', learnerName: 'Nancy Atwine', learnerId: 'learner-nancy', programme: 'Certificate in Nursing', requestedSemester: 'Year 2 · Semester 1', evidence: 'Prior study record · 2 files', submittedAt: 'Today · 07:42', status: 'pending' },
      { id: 'clearance-2', learnerName: 'Moses Kato', learnerId: 'learner-moses', programme: 'Certificate in Midwifery', requestedSemester: 'Year 2 · Semester 2', evidence: 'Institutional letter · 1 file', submittedAt: 'Yesterday · 14:16', status: 'pending' },
      { id: 'clearance-3', learnerName: 'Sandra Auma', learnerId: 'learner-sandra', programme: 'Certificate in Nursing', requestedSemester: 'Year 3 · Semester 1', evidence: 'Prior course record · 3 files', submittedAt: 'Aug 19 · 10:30', status: 'returned', note: 'Please include the missing Semester 2 result.' },
    ],
    notices: [
      { id: 'notice-1', title: 'Week 05 map is ready', body: 'The pharmacology revision map is available to eligible learners.', courseSpaceId: 'course-pharmacology', audience: 'course', status: 'sent', createdAt: 'Today · 08:12', authorId: 'instructor-grace' },
      { id: 'notice-2', title: 'Planning keeps access clear', body: 'Choose only the semester you are currently preparing for.', audience: 'all-learners', status: 'sent', createdAt: 'Yesterday · 12:05', authorId: 'admin-amara' },
    ],
    auditEvents: [
      audit('admin-amara', 'assignment', 'Grace Nalubega remains assigned to six Year 2 Nursing course spaces.', -1800000),
      audit('instructor-grace', 'course-map', 'Published the Pharmacology I Week 05 revision map.', -900000),
    ],
    learners: [
      { id: 'learner-fred', name: 'Fred Okorio', programme: 'Certificate in Nursing', semester: 'Year 1 · Semester 1', access: 'pending-payment', lastSeen: 'Just now', focusStreak: 3 },
      { id: 'learner-nancy', name: 'Nancy Atwine', programme: 'Certificate in Nursing', semester: 'Year 2 · Semester 1', access: 'clearance-review', lastSeen: 'Today · 07:12', focusStreak: 5 },
      { id: 'learner-moses', name: 'Moses Kato', programme: 'Certificate in Midwifery', semester: 'Year 2 · Semester 2', access: 'clearance-review', lastSeen: 'Yesterday · 17:26', focusStreak: 2 },
      { id: 'learner-sandra', name: 'Sandra Auma', programme: 'Certificate in Nursing', semester: 'Year 3 · Semester 1', access: 'active', lastSeen: 'Yesterday · 13:40', focusStreak: 8 },
    ],
  }
}

function withAudit(state: StaffPreviewState, event: AuditEvent): StaffPreviewState {
  return { ...state, auditEvents: [event, ...state.auditEvents] }
}

function nextPaymentId(state: StaffPreviewState) {
  return `pay-${String(state.payments.length + 1).padStart(4, '0')}`
}

export function createPaymentRequest(state: StaffPreviewState, input: {
  accountId: string
  product: SemesterProduct
  network: PaymentNetwork
  phoneNumber: string
}): StaffPreviewState {
  const createdAt = new Date().toISOString()
  const id = nextPaymentId(state)
  const payment: PreviewPayment = {
    id,
    accountId: input.accountId,
    product: input.product,
    network: input.network,
    phoneNumber: input.phoneNumber,
    status: 'awaiting-approval',
    reference: `DF-${input.product.id.toUpperCase()}-${id.slice(-4)}`,
    createdAt,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
  }
  return withAudit({ ...state, payments: [payment, ...state.payments] }, audit(input.accountId, 'payment', `Started a ${input.network.toUpperCase()} Mobile Money request for ${input.product.title}.`))
}

export function resolvePayment(state: StaffPreviewState, paymentId: string, status: Extract<PaymentStatus, 'verified' | 'failed' | 'expired'>, resolvedBy: string): StaffPreviewState {
  const payment = state.payments.find((item) => item.id === paymentId)
  if (!payment || payment.status !== 'awaiting-approval') return state
  const resolvedAt = new Date().toISOString()
  const payments = state.payments.map((item) => item.id === paymentId ? { ...item, status, resolvedAt, resolvedBy } : item)
  const entitlements = status === 'verified'
    ? [{ id: `entitlement-${payment.id}`, accountId: payment.accountId, productId: payment.product.id, status: 'active' as const, paymentId: payment.id, grantedAt: resolvedAt }, ...state.entitlements]
    : state.entitlements
  const next = { ...state, payments, entitlements }
  return withAudit(next, audit(resolvedBy, status === 'verified' ? 'entitlement' : 'payment', status === 'verified' ? `Verified ${payment.reference}; access is active for ${payment.product.title}.` : `${payment.reference} was marked ${status}.`))
}

export function reverseVerifiedPayment(state: StaffPreviewState, paymentId: string, actorId: string): StaffPreviewState {
  const payment = state.payments.find((item) => item.id === paymentId)
  if (!payment || payment.status !== 'verified') return state
  const resolvedAt = new Date().toISOString()
  const payments = state.payments.map((item) => item.id === paymentId ? { ...item, status: 'reversed' as const, resolvedAt, resolvedBy: actorId } : item)
  const entitlements = state.entitlements.map((item) => item.paymentId === paymentId ? { ...item, status: 'revoked' as const, revokedAt: resolvedAt } : item)
  return withAudit({ ...state, payments, entitlements }, audit(actorId, 'entitlement', `Reversed ${payment.reference}; the related preview access is revoked.`))
}

export function getActiveEntitlement(state: StaffPreviewState, accountId: string, productId: string): PreviewEntitlement | undefined {
  return state.entitlements.find((item) => item.accountId === accountId && item.productId === productId && item.status === 'active')
}

export function getInstructorCourseSpaces(state: StaffPreviewState, instructorId: string): CourseSpace[] {
  return state.courseSpaces.filter((course) => course.ownerId === instructorId)
}

export function updateCourseMapStatus(state: StaffPreviewState, courseSpaceId: string, status: CourseMapStatus, actorId: string): StaffPreviewState {
  const course = state.courseSpaces.find((item) => item.id === courseSpaceId)
  if (!course || course.ownerId !== actorId) return state
  const courseSpaces = state.courseSpaces.map((item) => item.id === courseSpaceId ? { ...item, mapStatus: status, lastEditedAt: 'Just now' } : item)
  return withAudit({ ...state, courseSpaces }, audit(actorId, 'course-map', `${status === 'published' ? 'Published' : 'Updated'} the ${course.title} revision map to ${status.replace('-', ' ')}.`))
}

export function reviewClearanceRequest(state: StaffPreviewState, requestId: string, status: Extract<ClearanceStatus, 'approved' | 'returned'>, actorId: string, note: string): StaffPreviewState {
  const request = state.clearanceRequests.find((item) => item.id === requestId)
  if (!request || request.status !== 'pending') return state
  const reviewedAt = new Date().toISOString()
  const clearanceRequests = state.clearanceRequests.map((item) => item.id === requestId ? { ...item, status, note, reviewedBy: actorId, reviewedAt } : item)
  const learners = state.learners.map((learner) => learner.id === request.learnerId ? { ...learner, access: status === 'approved' ? 'pending-payment' as const : 'clearance-review' as const } : learner)
  return withAudit({ ...state, clearanceRequests, learners }, audit(actorId, 'clearance', `${status === 'approved' ? 'approved' : 'returned'} ${request.learnerName}'s ${request.requestedSemester} clearance review.`))
}

export function sendStaffNotice(state: StaffPreviewState, input: Omit<StaffNotice, 'id' | 'status' | 'createdAt'>): StaffPreviewState {
  const notice: StaffNotice = { ...input, id: `notice-${state.notices.length + 1}`, status: 'sent', createdAt: 'Just now' }
  return withAudit({ ...state, notices: [notice, ...state.notices] }, audit(input.authorId, 'notice', `Sent “${input.title}” to ${input.audience === 'all-learners' ? 'all learners' : 'the selected course'}.`))
}

export function assignCourseInstructor(state: StaffPreviewState, courseSpaceId: string, instructorId: string, actorId: string): StaffPreviewState {
  const course = state.courseSpaces.find((item) => item.id === courseSpaceId)
  if (!course) return state
  const courseSpaces = state.courseSpaces.map((item) => item.id === courseSpaceId ? { ...item, ownerId: instructorId, lastEditedAt: 'Just now' } : item)
  return withAudit({ ...state, courseSpaces }, audit(actorId, 'assignment', `Assigned ${course.title} to the selected instructor.`))
}

export function getPendingClearanceRequests(state: StaffPreviewState) {
  return state.clearanceRequests.filter((request) => request.status === 'pending')
}

export function getPaymentLabel(status: PaymentStatus): string {
  return {
    'awaiting-approval': 'Awaiting approval',
    verified: 'Verified',
    failed: 'Failed',
    expired: 'Expired',
    reversed: 'Reversed',
  }[status]
}

export function formatUgandaShillings(amount: number): string {
  return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(amount)
}

export function loadStaffPreviewState(): StaffPreviewState {
  try {
    const stored = localStorage.getItem(storageKey)
    if (!stored) return createStaffPreviewState()
    const state = JSON.parse(stored) as StaffPreviewState
    if (!Array.isArray(state.payments) || !Array.isArray(state.entitlements) || !Array.isArray(state.courseSpaces) || !Array.isArray(state.clearanceRequests) || !Array.isArray(state.notices) || !Array.isArray(state.auditEvents) || !Array.isArray(state.learners)) return createStaffPreviewState()
    return state
  } catch {
    return createStaffPreviewState()
  }
}

export function saveStaffPreviewState(state: StaffPreviewState): StaffPreviewState {
  localStorage.setItem(storageKey, JSON.stringify(state))
  window.dispatchEvent(new CustomEvent(staffPreviewChangeEvent))
  return state
}

export function resetStaffPreviewState(): StaffPreviewState {
  return saveStaffPreviewState(createStaffPreviewState())
}
