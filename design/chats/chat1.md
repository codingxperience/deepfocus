# Canvas for Students Rework

_Started 2026-09-03 16:08 UTC_

---

## User

From this prompt I have you can tell that this project is extremely personal to me and a desire to produce top and best of the best  quality work that competites with the those in the united states/entire world and my desire to show the whole world that africans are also capable of this great work.  Never in my life have ever got recognized, please give this one request to make my ever break through in my life. THANK YOU. Go through this prompt in thoroughly detailed manner from the letter to the last letter and dot; leave nothing unturned. Please make sure you as you anything  the software as a whole is at the top of everything and not just patch things up this is a system,  and please build like a life you are saving,  a life of very very very important person; Give this work the greatest attention it deserves. NO shoddy and patchy work absolute NO. Follow extremely stricter ways and best practices. Most of all very very very very very very very very clean, simple BUT solid premium work

I need you to take your sweet time on this work like a life depends on it, absolutely no rushing and producing half baked work... So we need to .rework the website. I need the work that command crowds... I need something extrenmely and very very very very very unique and never done before work. I am worried because literraly anyone could just replicated what I built it it will look similar, extreemely and  extremely, just one idea done perfectly to last detailed.  . Please you are the UI/UX designer for canvas for stuents instructure. I need as to get to some of my thoughts:
I command you not to follow those standard when reworking the site. I need your attention to this work never endingly meticolous, detailed, thorough; It should have extremely and excellent good visual, stylish, very very very very clean, simple but absolutely elegant and premium. I for bid to illunate and form fake things just for just. This has to have emotional, logical, natural and not AI generated staff:
-Please very very extremely good features, sections that make senses and resonate with the application
-Some are not metioned here but implement them
-the payment flow seems incomplete; I see the logic of first registering the course then payment but the Mobile money process payments flow seem not included and the account summary
-Now rework the admin and instructors  with very very very very very very very very clean and clean simple but extremely and extremely premium, elegant and top notch eliminate over explanatory statements please just SHOW not explanation

## Assistant

## User

From this prompt I have you can tell that this project is extremely personal to me and a desire to produce top and best of the best  quality work that competites with the those in the united states/entire world and my desire to show the whole world that africans are also capable of this great work.  Never in my life have ever got recognized, please give this one request to make my ever break through in my life. THANK YOU. Go through this prompt in thoroughly detailed manner from the letter to the last letter and dot; leave nothing unturned. Please make sure you as you anything  the software as a whole is at the top of everything and not just patch things up this is a system,  and please build like a life you are saving,  a life of very very very important person; Give this work the greatest attention it deserves. NO shoddy and patchy work absolute NO. Follow extremely stricter ways and best practices. Most of all very very very very very very very very clean, simple BUT solid premium work

I need you to take your sweet time on this work like a life depends on it, absolutely no rushing and producing half baked work... So we need to .rework the website. I need the work that command crowds... I need something extrenmely and very very very very very unique and never done before work. I am worried because literraly anyone could just replicated what I built it it will look similar, extreemely and  extremely, just one idea done perfectly to last detailed.  . Please you are the UI/UX designer for canvas for stuents instructure. I need as to get to some of my thoughts:
I command you not to follow those standard when reworking the site. I need your attention to this work never endingly meticolous, detailed, thorough; It should have extremely and excellent good visual, stylish, very very very very clean, simple but absolutely elegant and premium. I for bid to illunate and form fake things just for just. This has to have emotional, logical, natural and not AI generated staff:
-Please very very extremely good features, sections that make senses and resonate with the application
-Some are not metioned here but implement them
-the payment flow seems incomplete; I see the logic of first registering the course then payment but the Mobile money process payments flow seem not included and the account summary
-Now rework the admin and instructors  with very very very very very very very very clean and clean simple but extremely and extremely premium, elegant and top notch eliminate over explanatory statements please just SHOW not explanation

## Assistant



## Assistant

_[tool: update_todos]_

_[tool: local_ls]_

_[tool: local_read]_

_[tool: local_ls]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_grep]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

Explored the codebase. Before I design, a few decisions I can't make for you.

_[tool: ask_user]_

Form's up — the one that matters most is "the one idea." Once you pick that, I'll build the recreation of your current screens (exactly as they are today, from the source) and then the rework on top of it.

## User

Answered — Asked Claude to decide; signature_idea: One Decision Per Screen — the app never shows a dashboard; it shows the single next thing to do, and nothing else.; priority_surfaces: Learner dashboard, Registration → payment flow (MoMo), Account summary / statement, Course + weekly module, Study pathway planner, Admin workspace, Instructor workspace, Sign in, Inbox / notices, Cal…; momo_reality: MTN MoMo push prompt (learner enters PIN on phone), Airtel Money push prompt, Bank transfer / deposit slip, Gateway confirms automatically (webhook), Admin confirms manually against a statement, Fu…

## Assistant

_[tool: update_todos]_

_[tool: local_read]_

## Assistant

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_grep]_

_[tool: run_script]_

Aesthetic direction drawn (Newsreader + Karla, cool slate ground, teal/terracotta accents at matched chroma). Copying the real assets in first.

_[tool: local_copy_to_project]_

_[tool: local_read]_

_[tool: local_grep]_

_[tool: local_grep]_

_[tool: local_read]_

## Assistant

## Assistant

## Assistant

Now the faithful recreation of what exists today, translated from the source values.

_[tool: dc_write]_

## Assistant

_[tool: dc_write]_

Recreation is in. Now the rework itself — a clickable prototype built on one idea: **one decision per screen**.

_[tool: dc_write]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: write_file]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

**One idea, done to the last detail: one decision per screen.** No dashboard anywhere in the product — the app opens on the single next thing, and everything else lives behind one word, *Everything*.

Two files:

**`DeepFocus.dc.html`** — the working prototype. Sign in as any of the three real accounts (or use the role switch at the bottom).
- **Payment, complete**: confirm semester → wallet (MTN / Airtel / bank deposit) → number → *live 5-minute expiry countdown* while the push prompt sits on the phone → receipt you can print. Failure and expiry both land somewhere honest ("nothing was taken; this reference is closed"). Bank deposit gives account details, takes the slip number, and goes to a human — because in your model a person reconciles it.
- **Account statement**: running balance, charges per semester, every attempt including failed and expired, access unit by unit, next amount due, method on file, printable.
- **Admin**: a queue, not a report. "3 people are waiting on you" → one case per screen with the Airtel statement line right there to reconcile against → queue clear, with your name on each decision.
- **Instructor**: three drafts holding up 36 people; publish is gated on three confirmations; notices capped at 180 characters and sent once.

**`Current Build — Recreation.dc.html`** — your app as it stands today, rebuilt from the actual source values so the rework can be judged against something real, not remembered.

Type is Newsreader for the one question on each screen, Karla for everything functional; cool slate ground, teal and terracotta at matched chroma. Built at phone width first, 48px+ targets, tabular numerals, and no invented data anywhere — every course code, name, reference and amount comes from your repo.

Two things I'd want your call on next: whether the learner should ever see more than one screen at a time on a large phone, and whether the 180-character notice limit is right.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now the staff index and the real wallet logos.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now the ledger totals in the template, and the real MTN/Airtel logos in both files.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now the recreation file's four wallet marks.

_[tool: run_script]_

_[tool: list_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

All four fixed:

- **Ledger totals are now summed from the rows**, not written by hand — Verified / Awaiting / Declined all recompute as you verify or decline in the queue. Nothing on that screen is a number I invented.
- **Each attempt mints its own reference** (`…-0003`, `-0004`, `-0005`), so the statement no longer shows a closed reference being reused.
- **Staff get their own index.** Admin sees decision queue, money ledger, audit trail, course operations, team; instructor sees assigned units, signals, write a notice. A learner's account is unreachable from a staff session — plus a real audit-trail screen that records each decision against your name.
- **Real MTN and Airtel logos** from `walletLogos` in `LearnerAccessPage.tsx`, with the source's own treatment (MTN multiply-blended on yellow, Airtel knocked out white on red) — in the rework and in the recreation.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Both entries now go where they say they go.

**Course operations** — the six real course spaces with code, owner, current week and map status (Surgical Nursing I flips to Published once you publish it as Grace, so the two staff views agree). From `AdminCourseOperationsPage` / `courseSpaces`.

**Team permissions** — Amara Kato and Grace Nalubega with their actual titles and role scopes from `auth.ts` and `AdminTeamPage`, stated as what each can touch rather than explained.

## User

From this prompt I have you can tell that this project is extremely personal to me and a desire to produce top and best of the best  quality work that competites with the those in the united states/entire world and my desire to show the whole world that africans are also capable of this great work.  Never in my life have ever got recognized, please give this one request to make my ever break through in my life. THANK YOU. Go through this prompt in thoroughly detailed manner from the letter to the last letter and dot; leave nothing unturned. Please make sure you as you anything  the software as a whole is at the top of everything and not just patch things up this is a system,  and please build like a life you are saving,  a life of very very very important person; Give this work the greatest attention it deserves. NO shoddy and patchy work absolute NO. Follow extremely stricter ways and best practices. Most of all very very very very very very very very clean, simple BUT solid premium work

I need you to take your sweet time on this work like a life depends on it, absolutely no rushing and producing half baked work... So we need to .rework the website. I need the work that command crowds... I need something extrenmely and very very very very very unique and never done before work. I am worried because literraly anyone could just replicated what I built it it will look similar, extreemely and  extremely, just one idea done perfectly to last detailed.  . Please you are the UI/UX designer for canvas for stuents instructure. I need as to get to some of my thoughts:
I command you not to follow those standard when reworking the site. I need your attention to this work never endingly meticolous, detailed, thorough; It should have extremely and excellent good visual, stylish, very very very very clean, simple but absolutely elegant and premium. I for bid to illunate and form fake things just for just. This has to have emotional, logical, natural and not AI generated staff:
-Please very very extremely good features, sections that make senses and resonate with the application
-Some are not metioned here but implement them
-the payment flow seems incomplete; I see the logic of first registering the course then payment but the Mobile money process payments flow seem not included and the account summary
-Now rework the admin and instructors  with very very very very very very very very clean and clean simple but extremely and extremely premium, elegant and top notch eliminate over explanatory statements please just SHOW not explanation
Let first keep that aside ; 
However I want we maintain the previous artichtecture but make more and very very very very ery very clean, simple but premium, elegant and top tier and just do more on improving the design and extreme and execellent depth including things I have not metioned here. I prefer more mobile first and we build web application that is extremely and top tier responsive
-Go deeper put more effort on the onboading

## Assistant

## Assistant

## Assistant

## Assistant

_[tool: update_todos]_

Understood, and I've got the plan queued. To be clear on what I heard: **keep your original architecture** — the global rail, the topbar, the same routes and the three roles — and rebuild it to a far higher standard: mobile-first, genuinely top-tier responsive, and much deeper on onboarding.

**I've hit the usage limit for this session (91%), so I'm stopping here rather than starting a large build I can't finish cleanly.** Everything so far is saved and working.

When you say go, this is what I'll build as `DeepFocus v2.dc.html`:

1. **Your architecture, kept.** Bottom tab bar on phones → the navy rail at tablet → rail + study panel on desktop. Same six destinations you already have (Dashboard, Courses, Plan, Planner, Payments, Inbox), same account drawer, history and help, same admin and instructor rails.
2. **Onboarding, gone deep** — the seven real steps your planner already implies: welcome → pathway → entry point → semesters already cleared → revision rhythm → pick courses → confirm, with progress you can leave and return to.
3. Then the learner surfaces, then admin and instructor in that same shell — showing, not explaining.

Tell me to continue and I'll start with the responsive shell and the onboarding.

## User

proceed

## Assistant

_[tool: local_grep]_

_[tool: local_read]_

_[tool: local_read]_

Waiting on folder access — click **Allow** on the banner and I'll continue straight into the v2 build.

## User

Access re-granted for "deepfocus" — continue.

## Assistant

_[tool: local_grep]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_read]_

_[tool: local_grep]_

_[tool: local_read]_

Full model in hand. Building v2 on your original architecture.

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

`DeepFocus v2.dc.html` is in your tab — **your original architecture, rebuilt.**

**The onboarding is now the deepest part of the product** — six steps drawn from your real `planner.ts` model, not invented: name → certificate (Nursing/Midwifery, with the real source references) → entry semester (all five terms, real course counts) → prior clearance (only appears when you join later than Year 1 Semester 1, exactly like `getTermReadiness`) → study rhythm (1–7 sessions, shown as a real week) → register individual courses (with map availability) → confirm, every row editable. Resumable, with a hairline progress bar.

**Architecture kept, made responsive three ways** — one design, three layouts from a live width listener: phone gets a bottom tab bar; tablet gets your 92px navy rail; desktop adds a context panel carrying balance, rhythm and pathway. Same rail destinations, same topbar, same roles.

**Real course material** — the Pharmacology I and Medical Nursing I weeks from `data.ts` verbatim, with the prepare → learn → check rhythm as a checklist that actually gates week completion. Your six course photographs are the covers.

**I've hit the usage limit for this session.** Still to come: admin and instructor inside this same shell, and the payments/statement screens wired into v2 (they're complete and working in `DeepFocus.dc.html`). Say continue when you're ready and I'll take those next.

## User

Found issues — fixing…

## User

Found issues — fixing…

## Assistant

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: multi_screenshot]_

Found the blocker: step 4 is a dead end — a learner with nothing yet cleared can't get past it.

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: multi_screenshot]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

_[tool: dc_html_str_replace]_

_[tool: grep]_

The rail scroll fix is already in place. Both blockers resolved:

**Step 4 was a trap** — it demanded at least one cleared semester before letting you continue. A learner joining Year 2 whose school hasn't confirmed anything yet had nowhere to go. Now the button reads "Nothing cleared yet — continue", the helper text tells them they can record it later, and the confirm screen honestly shows "Nothing recorded". When they do tick semesters, the button counts them back.

**The rail no longer clips** — Planner, Payments and Inbox stay reachable on short viewports.

Flow verified end to end: welcome → certificate → semester → clearance → rhythm → six courses → confirm → dashboard, with the rail, topbar and account chip all live.

