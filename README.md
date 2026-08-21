# DeepFocus revision

A responsive revision frontend for Certificate in Nursing and Certificate in Midwifery learners, built from supplied course outlines, visual references, and clearly attributed public curriculum references.

## Live site

[Open DeepFocus revision](https://codingxperience.github.io/deepfocus/)

## Run locally

```bash
npm install
npm run dev
```

The local app is available at `http://127.0.0.1:4173/`.

## Quality checks

```bash
npm run lint
npm run build
```

GitHub Pages serves the production output from the `gh-pages` branch. This
branch-based deployment avoids requiring a GitHub Actions runner.

## Product scope

- Six supplied, detailed Nursing revision maps appear on the dashboard.
- Every supplied nursing course has a weekly module path drawn from its supplied outline.
- The standalone Study Pathway Planner provides a five-term view of the 14 Nursing and 15 Midwifery course units. It uses course-unit codes—not generic “paper” labels—and visibly links to the source used for each pathway.
- Learners can start at Year 1 Semester 1 or set a later entry point, record already-cleared earlier terms, choose a personal revision rhythm, and register individual course units in their private DeepFocus study space. Confirmed local registrations immediately shape the dashboard.
- The calendar remains a separate personal focus-block tool. It is not replaced by the pathway planner.
- Progression clearance and registration are browser-only DeepFocus planning records. They are deliberately labelled as such: they do not award credit, enrol a learner with a school, or claim an official institutional prerequisite decision.
- Module completion, recent history, accessibility choices, and personal calendar blocks are local browser-only preview state.
- The account space includes a study vault, private notes, local notice preferences, accessible display controls, safe device-link sharing, and capability updates.
- Inbox and calendar views are fully interactive interface previews; they do not send messages or create institutional deadlines.
- No unsupported lesson material, external teacher identity, deadlines, academic progress, or official registration action is fabricated. Course listings, formal prerequisites, and official progression decisions should always be confirmed with the learner's school or assessment body.
