# Veem Partner Intake Form Handoff

Last updated: July 8, 2026

## What This Project Is

This is a static, deployable partner intake form for collecting structured information from prospective Veem partners.

It captures:

- contact and company information
- one or more use case categories
- From and To payment flow details for each selected use case
- payment method and conversion interest
- additional service interest
- financial scale and commercial preferences
- review-ready and Zapier-ready submission data

## Simplified Project Structure

- `site/partner-intake-form/`
  Canonical app copy. Edit this folder for UI, logic, config, and deployment changes.
- `index.html`
  Local convenience redirect to `site/partner-intake-form/`.
- `test.html`
  Local convenience redirect to `site/partner-intake-form/test.html?mode=test`.
- `docs/`
  Documentation only.
- `deployment/`
  Deployment notes and optional backend example.

Important:

- The old `docs/` app mirror has been removed.
- GitHub Pages now deploys `site/partner-intake-form/` directly.
- Root app asset duplicates have been removed.

## Current Form Flow

1. Contact Information
2. Use Case Categories
3. One Payment Flow page for each selected use case
4. Payment Methods
5. Additional Services
6. Business & Financial Profile
7. Review
8. Thank You / Available Documents

The form no longer asks partners to choose separate Collection or Disbursement flows. Instead, each selected use case collects:

- From / sending users
- To / receiving users
- payer and payee regions, countries, currencies, and counts
- whether the partner's user/customer is on the payer or payee side
- optional Stored Value Account capabilities for that use case

## Submission Behavior

The app submits a JSON payload configured by:

- `site/partner-intake-form/config.js`

The payload includes:

- `summary`: readable plain-text summary
- `rawData`: flat key/value fields for Zapier mapping
- `responses`: nested structured response data

See:

- `docs/team-feedback-questionnaire-outline.md`

for a sample Zapier payload and summary.

## Local Testing

From the repo root:

```bash
python3 -m http.server 4175
```

Open:

- `http://127.0.0.1:4175/test.html`

or directly:

- `http://127.0.0.1:4175/site/partner-intake-form/test.html?mode=test`

## Safe Change Checklist

When changing the form:

- Edit the canonical files in `site/partner-intake-form/`.
- Update `docs/team-feedback-questionnaire-outline.md` when flow, wording, or summary output changes.
- Update `docs/form-items-and-definitions.md` when selectable items or definitions change.
- Run `node --check site/partner-intake-form/app.js`.
- Smoke-test `site/partner-intake-form/test.html?mode=test` locally.

Generated exports under `outputs/` should stay untracked.
