# DeepFocus revision

A responsive nursing revision frontend built from the supplied brand references, course imagery, and Introduction to Pharmacology outline.

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

- Six supplied nursing courses appear on the dashboard.
- Every supplied nursing course has a weekly module path drawn from its supplied outline.
- Module completion, recent history, accessibility choices, and personal calendar blocks are local browser-only preview state.
- Inbox and calendar views are fully interactive interface previews; they do not send messages or create institutional deadlines.
- No unsupported lesson material, external teacher identity, deadlines, or academic progress is fabricated.
