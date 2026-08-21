# DeepFocus production access and enrolment

## Current boundary

This repository is a static GitHub Pages prototype. Its planner state lives in browser storage, which a learner can edit or erase. It therefore cannot safely:

- confirm a payment;
- prevent a second or fake account;
- keep paid course material private; or
- make a formal prerequisite or clearance decision.

The current planner must be understood as a private study-planning experience, not an institutional registration or payment system.

## Academic structure

DeepFocus should model every purchasable study semester as a distinct academic product:

| Semester | Teaching period | Example product |
| --- | --- | --- |
| Semester 1 | February–June | Certificate in Nursing · Year 2 · Semester 1 · 2027 |
| Semester 2 | July–December | Certificate in Midwifery · Year 1 · Semester 2 · 2027 |

The academic year belongs in the product. `Year 2 · Semester 1` alone is not enough to decide whether a learner has current access.

Each product should grant access to a known set of individual courses and their revision maps. A learner can buy only one semester, then later buy the next semester; the application should never infer paid access from a planner choice.

## Minimum trusted architecture

```text
Learner app
    │ authenticated request
    ▼
DeepFocus API ──► entitlement database ◄── verified payment webhook
    │                         │
    │                         └── study plan, verified clearances, audit log
    ▼
protected course API / signed content URLs
```

1. Use a real identity service with verified email and verified phone number. The account identifier—not an email typed into the browser—owns the learner record.
2. Create the payment order on the server. Send the learner to the payment provider from that order.
3. Only a server-to-server, signature-verified payment webhook may create an entitlement. A client-side “payment successful” page must never grant access.
4. Store an entitlement with: account ID, programme, academic year, semester ID, purchased course IDs, payment transaction ID, status, start date, end date, and refund/revocation history.
5. Put revision material behind an authenticated API or signed, short-lived asset URLs. If the images, notes, and module data stay public in a GitHub Pages bundle, no screen can prevent copying them.
6. The dashboard calls `GET /me/entitlements`; it renders only courses in an active entitlement. The planner may propose a future semester, but only the API can mark it accessible.

## Account abuse and sharing

No consumer product can guarantee that nobody creates a second account. The objective is that a new account has no paid value until the same verified, server-side payment process succeeds.

- Require verified email and phone before checkout and before content access.
- Link each payment to one account and retain the provider transaction reference.
- Limit active devices and concurrent sessions to a modest, clearly published number; show the learner their signed-in devices and allow them to revoke one.
- Rate-limit sign-up, login, password reset, and checkout creation; log suspicious retries and entitlement changes.
- Handle refunds, chargebacks, and manual support corrections by changing the entitlement status server-side.
- Do not rely on browser fingerprinting as a primary control. It is unreliable, privacy-sensitive, and easy to evade.

## Learners joining after Year 1 Semester 1

The planner should still let a learner choose any entry semester. In production, distinguish the learner's own study preference from verified academic clearance:

1. The learner selects their pathway and the semester they want to join.
2. Earlier semesters show **clearance pending** rather than an editable “cleared” switch.
3. The learner supplies the evidence your academic policy accepts, or support staff confirm it from an institutional record.
4. An authorised administrator records an immutable clearance/exemption decision with a reason and timestamp.
5. The API then permits purchase or activation of the later-semester product. If school rules require an individual course prerequisite, store that rule against that course rather than assuming that every earlier semester is equivalent.

This protects the learner from being given a misleading route while keeping DeepFocus honest about what it can and cannot certify.

## Product experience

- **No active entitlement:** DeepFocus shows the branded first-plan screen and one clear action: choose a pathway and semester.
- **Active entitlement:** the dashboard shows only the learner's current semester, its paid courses, one study rhythm control, and the focus calendar.
- **Future or expired semester:** show the semester in the planner with a clear status and renewal/purchase action; do not show its protected maps.
- **Multi-semester learner:** let the learner change the current dashboard semester from the planner, while preserving a clean single-semester dashboard.

## Delivery order

1. Freeze the course catalogue and semester-product definitions with the academic owner.
2. Build authentication, the database, and the entitlement API.
3. Integrate the chosen payment provider and test signed webhooks, refunds, and failed payments.
4. Move course material behind the protected content service.
5. Replace browser-only registration and clearance controls with API-backed status.
6. Add staff review for later-entry clearances and an audit log before treating the planner as a registration system.
