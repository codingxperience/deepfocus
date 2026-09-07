# Deep Focus · Nurse's and Midwives Revision

A revision workspace for Ugandan nursing and midwifery certificate students, their
instructors, and the registry that clears them. The address you sign in with decides
the desk you land on — there is no role menu.

| Domain | Desk |
| --- | --- |
| `@student.deepfocus.ug` | Learner — courses, week sheets, grades, payment, inbox |
| `@staff.deepfocus.ug` | Instructor — marking, course maps, publishing, learners, the gathering |
| `@admin.deepfocus.ug` | Registry — decisions queue, money, people, structure, audit log |

## Live site

[Open Deep Focus](https://codingxperience.github.io/deepfocus/)

GitHub Pages serves the production output from the `gh-pages` branch, so `vite.config.ts`
keeps `base: './'` and every built asset path stays relative to `/deepfocus/`.

## Run locally

```bash
npm install
npm run dev        # http://127.0.0.1:4173/
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## How this repository is laid out

```
index.html            document shell + the two web fonts
src/main.tsx          mounts <AppRoot>
src/App.tsx           AppRoot — all state, all behaviour, and renderVals()
src/data.ts           the fixed content: pathways, course outlines, week sheets,
                      sources, people, payments, icons
src/Screens.tsx       sign-in, onboarding, and the app shell (rail, tabs, panel)
src/pages/*.tsx       one component per route, rendered by the shell
src/view.ts           the View type: what every screen renders against
src/styles/           the global stylesheet and the hover/focus states
public/assets/        photographs and course covers
design/               the Claude Design source this was built from, and the
                      conversations behind it
docs/                 production access and enrolment notes
```

`AppRoot.renderVals()` builds one flat object — the **view** — holding every string,
colour, column template and handler a screen needs. Screens read that object and
nothing else, so all logic lives in one place and the pages stay declarative. `View` is
the inferred return type of `renderVals()`, so a screen that reads a field the model
does not produce fails the typecheck.

## Where this came from

`src/` is a port of `design/DeepFocus v9.dc.html`, the design published from Claude
Design, and is meant to match it screen for screen. It replaced the earlier planner
build (`auth.ts`, `curriculum.ts`, `planner.ts`, `staffPreview.ts`, `components/`, and
the twelve pages beside them), which is still in the git history.

The port was checked by driving the design file and this build through the same
journeys and diffing every screenshot: the screens match to the pixel, apart from the
live payment clock and one button where the design tool wrapped an interpolated value
in a span, giving it the flex container's 9px gap.

Rules the design settles, which the code keeps:

- Nothing is invented. Course codes, outlines, references and amounts come from the
  published sources; totals are computed from rows rather than written down.
- Sources are real and free: Open RN *Nursing Pharmacology 2e* (CC BY 4.0), OpenStax,
  Uganda Clinical Guidelines 2023, the WHO essential medicines list, DailyMed.
- Only courses with an authored map show weeks. The rest read "Not published".
- Grades never estimate. Until something is marked, the page says so.
- The semester charge is UGX 58,000, payable by MTN or Airtel wallet prompt, or by
  bank deposit that a person in the registry matches against a statement.

## Preview data

Sign-in accepts any password. The four seeded addresses are listed on the sign-in page:
Fred Okorio (set up and paid), Moses Ssekandi (first sign-in, walks the onboarding),
Grace Nalubega (instructor), Amara Kato (registry). State lives in memory only — no
registration, credit or result is created here. `docs/production-access.md` sets out
what has to change before any of it can carry a real payment or a real result.
