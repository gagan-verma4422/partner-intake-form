# Deployment Guide

This package is prepared to live at:

- `https://veem.com/partner-intake-form/`

## Static Site Deployment

Deploy the contents of:

- `site/partner-intake-form/`

so these files resolve:

- `/partner-intake-form/`
- `/partner-intake-form/app.js`
- `/partner-intake-form/styles.css`
- `/partner-intake-form/config.js`
- `/partner-intake-form/favicon.webp`

Redirect:

- `/partner-intake-form`

to:

- `/partner-intake-form/`

## Configuration

Set the production Zapier Catch Hook URL in:

- `site/partner-intake-form/config.js`

Example:

```js
window.VEEM_ONBOARDING_CONFIG = {
  testMode: false,
  submissionWebhookUrl: "https://hooks.zapier.com/hooks/catch/123456/abcdef/"
};
```

Keep `testMode: true` only for the GitHub Pages test version.

The webhook should accept a JSON `POST` request and return any `2xx` status on success. If it returns JSON, the frontend can read:

```json
{
  "ok": true,
  "submissionId": "same-or-new-id"
}
```

For failures, return a non-2xx response and optionally:

```json
{
  "ok": false,
  "error": "Human-readable error message"
}
```

## Payload Contract

The frontend sends:

```json
{
  "event": "veem.partner_onboarding.submitted",
  "submissionId": "generated-id",
  "submittedAt": "2026-07-08T14:30:00.000Z",
  "pageUrl": "https://www.veem.com/partner-intake-form/",
  "userAgent": "browser user agent string",
  "contact": {},
  "company": {},
  "summary": "Plain-text submission summary...",
  "rawData": {
    "First Name": "Maya",
    "Last name": "Patel",
    "Email": "maya.patel@example.com",
    "Company Name": "OrbitPay",
    "Entity Type": "Corporation",
    "Url": "https://orbitpay.example",
    "Use case categories": "B2B Payments, Marketplace / Platform",
    "New use case or corridor": "Yes",
    "High-risk industries": "No",
    "Currently in flow of funds business": "Yes",
    "Licensed in operating countries": "No",
    "Pricing model": "Revenue share",
    "Implementation timeline": "3-6 months",
    "Annual Revenue range": "$5M - $10M",
    "Annual volume range": "$100M - $250M",
    "Payment count range": "500K - 1M",
    "Product interest summary": "Payment methods: ... | Stored value accounts: ... | Additional services: ...",
    "Payment methods": "Local Bank Transfers (current + interested), Same Day ACH (interested)",
    "Stored value accounts": "B2B Payments: Virtual Bank Accounts, Multi-Currency Wallet",
    "Additional services": "Payer Plugin / Paylinks (interested), Risk Services (interested)",
    "Use case payment flows": "B2B Payments: User/customer side: Payer | Payers: Businesses | ...",
    "Use case 1 - B2B Payments - User/customer side": "Payer",
    "Use case 1 - B2B Payments - Payer types": "Businesses",
    "Use case 1 - B2B Payments - Payer countries": "United States, Canada",
    "Use case 1 - B2B Payments - Payee types": "Businesses, Sole proprietors",
    "Use case 1 - B2B Payments - Payee countries": "United States, Canada, United Kingdom",
    "Use case 1 - B2B Payments - Stored value account capabilities": "Virtual Bank Accounts, Multi-Currency Wallet",
    "Additional info": "Partner wants to launch a pilot first."
  },
  "responses": {
    "contact": {},
    "company": {},
    "useCase": {},
    "useCaseFlows": {},
    "role": {},
    "financials": {},
    "paymentMethods": {},
    "additionalServices": {},
    "additionalInfo": ""
  }
}
```

Use `rawData` for simple Zapier field mapping. Use `summary` for Slack, email, or CRM notes. Store `responses` if downstream systems need the structured form state.

## Optional Backend Example

`deployment/partner-intake-form-submission-handler.example.js` is an optional Express email-forwarding example. Production can use Zapier directly without this backend.

## Notes For The Web Team

- The frontend is plain HTML, CSS, and JavaScript.
- No build step is required.
- Do not deploy root `index.html` or `test.html`; those are local redirects only.
- Set `config.js` to the final production webhook URL before publishing.
