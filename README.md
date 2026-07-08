# Veem Partner Intake Form

Static multi-step partner intake form for collecting partner use cases, payment flows, payment method interest, commercial context, and Zapier-ready submission data.

## Canonical App Files

The only real app copy lives in:

- `site/partner-intake-form/`

That folder contains:

- `index.html`
- `test.html`
- `app.js`
- `styles.css`
- `config.js`
- `config.test.js`
- `favicon.webp`

The root `index.html` and `test.html` files are lightweight redirects for local convenience.

## Local Testing

From the repo root:

```bash
python3 -m http.server 4175
```

Then open:

- `http://127.0.0.1:4175/test.html`

That redirects to:

- `http://127.0.0.1:4175/site/partner-intake-form/test.html?mode=test`

## GitHub Pages

GitHub Pages deploys the canonical app folder:

- `site/partner-intake-form/`

The workflow is:

- `.github/workflows/pages.yml`

## Production Deployment

For `veem.com`, deploy the contents of:

- `site/partner-intake-form/`

to:

- `/partner-intake-form/`

Before publishing, set the production webhook in:

- `site/partner-intake-form/config.js`

Example:

```js
window.VEEM_ONBOARDING_CONFIG = {
  testMode: false,
  submissionWebhookUrl: "https://your-production-endpoint"
};
```

Keep `testMode: true` for the GitHub Pages test version.

## Project Notes

- No build step is required.
- The frontend is plain HTML, CSS, and JavaScript.
- `docs/` now contains project documentation only.
- Generated exports should stay out of git; `outputs/` is ignored.

Helpful references:

- `docs/team-feedback-questionnaire-outline.md`
- `docs/form-items-and-definitions.md`
- `docs/project-handoff.md`
- `deployment/DEPLOYMENT.md`
