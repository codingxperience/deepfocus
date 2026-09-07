repo: codingxperience/deepfocus
branch: main
path: src

## Last sync

date: 2026-09-04T00:00:00Z

### Updated in this project

- Reworked the product around one idea: **the Week Sheet** — every week of every course is one printable page (situation, objective, textbook, sources, work, teaching, grade arithmetic).
- Replaced the sidebar role switcher with email-domain sign-in: `@student.*` → learner desk, `@staff.*` → instructor desk, `@admin.*` → registry desk.
- Authored Pharmacology I (CN 211) as 14 sheets on real free sources: Open RN *Nursing Pharmacology 2e* (CC BY 4.0), OpenStax, Uganda Clinical Guidelines 2023, WHO eEML, DailyMed.
- Built real grades logic: four weighted groups, instructor-editable weights that must total 100, and a graded-only / worst-case toggle with the working shown.

## Screen map

| Project screen | Built from |
| --- | --- |
| DeepFocus v3 · Sign in (email → desk) | src/auth.ts, src/pages/AuthPage.tsx |
| DeepFocus v3 · Week sheet (the spine) | src/data.ts (pharmacologyWeeks, ModuleItem prepare/learn/check), src/pages/Dashboard.tsx |
| DeepFocus v3 · Binder (one course as a bound set) | src/data.ts, src/planner.ts |
| DeepFocus v3 · Shelf (semester courses + covers) | src/curriculum.ts (nursing/midwifery units, standardTerms), assets/*.jpg |
| DeepFocus v3 · Grades (weighted arithmetic) | new — weights, group tallies, what-if toggle |
| DeepFocus v3 · Library (textbooks + 6 English strands) | new — verified free sources |
| DeepFocus v3 · Access (fee, mobile money, statement) | src/pages/LearnerAccessPage.tsx, src/staffPreview.ts (createPaymentRequest, resolvePayment, 5-minute expiry), src/paymentCatalog.ts |
| DeepFocus v3 · Instructor sheet studio + release checks | src/pages/InstructorPages.tsx, src/staffPreview.ts (updateCourseMapStatus) |
| DeepFocus v3 · Instructor weighting | new — per-course editable group weights |
| DeepFocus v3 · Teach rota (3 graded types) | new — rostered teach, teach-back, group unit |
| DeepFocus v3 · Instructor signals | src/staffPreview.ts (learners, sendStaffNotice) |
| DeepFocus v3 · Registry decisions / money / people / log | src/pages/AdminPages.tsx, src/staffPreview.ts (clearanceRequests, payments, reviewClearanceRequest, reverseVerifiedPayment, auditEvents) |

## Sync history

- 2026-09-03 — Recreated the current build and reworked it around one-decision-per-screen; completed the Mobile Money, bank-deposit and failure paths; rebuilt statement, admin queue, money ledger and instructor publishing.
