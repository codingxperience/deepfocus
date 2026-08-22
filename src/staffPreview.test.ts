import { describe, expect, it } from 'vitest'

import { authenticatePreview, getPreviewAccount, getRoleStartPath } from './auth'
import {
  createPaymentRequest,
  createStaffPreviewState,
  getActiveEntitlement,
  getInstructorCourseSpaces,
  resolvePayment,
  reviewClearanceRequest,
  reverseVerifiedPayment,
  sendStaffNotice,
  updateCourseMapStatus,
} from './staffPreview'

describe('preview authentication', () => {
  it('routes an authenticated instructor to the instructor workspace', () => {
    const account = authenticatePreview('grace.nalubega@deepfocus.preview', 'deepfocus-preview')

    expect(account?.role).toBe('instructor')
    expect(getRoleStartPath(account!)).toBe('/instructor')
  })

  it('exposes the learner account without exposing a password', () => {
    const learner = getPreviewAccount('learner-fred')

    expect(learner).toMatchObject({ id: 'learner-fred', role: 'learner' })
    expect(learner).not.toHaveProperty('password')
  })
})

describe('mobile money payment simulation', () => {
  it('creates access only after a payment has been verified', () => {
    const requested = createPaymentRequest(createStaffPreviewState(), {
      accountId: 'learner-fred',
      product: {
        id: 'nursing-y1s1-2026',
        title: 'Certificate in Nursing · Year 1 · Semester 1 · 2026',
        courseCount: 6,
        amount: 58000,
      },
      network: 'mtn',
      phoneNumber: '0771234567',
    })

    expect(getActiveEntitlement(requested, 'learner-fred', 'nursing-y1s1-2026')).toBeUndefined()

    const verified = resolvePayment(requested, requested.payments[0].id, 'verified', 'admin-amara')

    expect(getActiveEntitlement(verified, 'learner-fred', 'nursing-y1s1-2026')?.status).toBe('active')
  })

  it('revokes the local entitlement when an administrator reverses a verified payment', () => {
    const requested = createPaymentRequest(createStaffPreviewState(), {
      accountId: 'learner-fred',
      product: { id: 'nursing-y1s1-2026', title: 'Certificate in Nursing · Year 1 · Semester 1 · 2026', courseCount: 6, amount: 58000 },
      network: 'airtel',
      phoneNumber: '0751234567',
    })
    const verified = resolvePayment(requested, requested.payments[0].id, 'verified', 'admin-amara')
    const reversed = reverseVerifiedPayment(verified, verified.payments[0].id, 'admin-amara')

    expect(getActiveEntitlement(reversed, 'learner-fred', 'nursing-y1s1-2026')).toBeUndefined()
    expect(reversed.entitlements[0].status).toBe('revoked')
  })
})

describe('staff workflows', () => {
  it('shows an instructor only the courses assigned to them', () => {
    const state = createStaffPreviewState()

    expect(getInstructorCourseSpaces(state, 'instructor-grace')).toHaveLength(6)
    expect(getInstructorCourseSpaces(state, 'admin-amara')).toHaveLength(0)
  })

  it('records an administrator clearance approval in the audit trail', () => {
    const state = createStaffPreviewState()
    const request = state.clearanceRequests[0]
    const reviewed = reviewClearanceRequest(state, request.id, 'approved', 'admin-amara', 'Prior study evidence reviewed.')

    expect(reviewed.clearanceRequests[0].status).toBe('approved')
    expect(reviewed.auditEvents[0].summary).toContain('approved')
  })

  it('does not allow an instructor to publish a course they do not own', () => {
    const state = createStaffPreviewState()
    const course = state.courseSpaces[0]
    const result = updateCourseMapStatus(state, course.id, 'published', 'instructor-not-assigned')

    expect(result).toBe(state)
  })

  it('records a sent course notice in the local audit trail', () => {
    const state = createStaffPreviewState()
    const result = sendStaffNotice(state, {
      title: 'Week 05 is ready',
      body: 'Begin with the revised map when you are ready.',
      courseSpaceId: 'course-pharmacology',
      audience: 'course',
      authorId: 'instructor-grace',
    })

    expect(result.notices[0]).toMatchObject({ title: 'Week 05 is ready', status: 'sent' })
    expect(result.auditEvents[0].action).toBe('notice')
  })
})
