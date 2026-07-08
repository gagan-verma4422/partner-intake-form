# Veem Partner Intake Form Review

Last updated: July 8, 2026

Use this document to review the current partner intake experience. The goal is to confirm the page order, field wording, conditional logic, and summary output before the form is finalized.

## How To Review

- Confirm that each page is clear, necessary, and in the right sequence.
- Comment on wording that feels too internal, vague, repetitive, or difficult for a partner to answer.
- Flag required fields that should be optional, or optional fields that should be required.
- Note any questions that should be added, removed, moved, or grouped differently.
- Review whether the final summary gives the internal team enough context to qualify and route the opportunity.

## Current Experience

The form no longer asks partners to choose separate Collection or Disbursement flows. Partners select one or more use cases, then provide a From and To payment flow for each selected use case.

1. Contact Information
2. Use Case Categories
3. Payment Flow page for each selected use case
4. Payment Methods
5. Additional Services
6. Business & Financial Profile
7. Review
8. Thank You / Available Documents

## 1. Contact Information

Page title: `Provide contact information.`

Page description:
`Please provide the primary contact details for this inquiry together with basic company information.`

Page footer:
`Fields marked with * are required.`

### Primary Contact

Section description:
`Please provide the primary contact for this inquiry.`

- First name
- Last name
- Email
- WhatsApp number
- Are you the decision maker?
  Control: checkbox
- Decision maker name
  Note: required when `Are you the decision maker?` is unchecked
- Decision maker email
  Note: optional; only shown when `Are you the decision maker?` is unchecked

### Company Details

Section description:
`Please provide basic company information.`

- Company name
- Entity type
  Options: Corporation, LLC, Partnership, Sole proprietorship, Nonprofit, Other
- Please specify entity type
  Note: only shown when `Other` is selected
- URL

## 2. Use Case Categories

Page title: `Choose the commercial framing.`

Page description:
`Your selections will shape the From and To flow details we collect.`

Page footer:
`Fields marked with * are required.`

### Use Case Categories

Section description:
`Choose all commercial framings that apply. The next step will collect the From and To flow for the selected use cases.`

- Use case categories
  Control: multi-select cards
  Options: B2B Payments, Marketplace / Platform, Personal Remittance, Wallet Funding / Me-to-Me, Payables / Payroll, Ecommerce, Other
- Please specify other use case category
  Note: only shown when `Other` is selected
- Is this a new use case or corridor?
  Options: Yes, No
- How do you handle it today?
  Note: only shown when `No` is selected above
- Do any of the industries involved operate in high-risk industries?
  Options: Yes, No
- Please specify high-risk industries
  Note: only shown when `Yes` is selected above

Reviewer note:
Confirm that partners can select multiple use cases without confusion, and that the use case labels are broad enough for common partner scenarios.

## 3. Payment Flow Pages

One page is created for each selected use case. The page title is the selected use case name, for example `B2B Payments` or `Marketplace / Platform`.

Page eyebrow: `Payment Flow`

Page description:
`Provide payer, payee, market, currency, and stored value details for this use case.`

Page footer:
`Fields marked with * are required.`

### From

Section description:
`Share who is sending funds and the source countries and currencies.`

- User type
  Options: Consumers, Businesses, Sole proprietors
- Source regions
- What specific countries are funds coming from?
- Which currencies are the funds sent in?
- Number of sending users
- Are these users actual or estimated?
  Options: Actual, Estimated

### To

Section description:
`Share who is receiving funds and the destination countries and currencies.`

- User type
  Options: Consumers, Businesses, Sole proprietors
- Destination regions
- What specific countries are funds going to?
- Which currencies are the funds received in?
- Number of receiving users
- Are these users actual or estimated?
  Options: Actual, Estimated

### Use Case Setup

Section description:
`Confirm the user role and account preferences for this use case.`

- Who is your user or customer in this use case?
  Options: Payer, Payee
- Stored Value Account
  Helper text: `Select any stored value account capabilities needed for this use case. A stored value account lets you receive, hold, and use funds before they are sent or spent.`
  Options: Multi-Currency Wallet, Stablecoin Wallet (USDC / USDT), Virtual Card (USD), Virtual Bank Accounts
  Note: optional per use case

Reviewer note:
Check whether the From and To language is easy for external partners to understand without using collection/disbursement terminology.

## 4. Payment Methods

Page title: `Select the payment methods.`

Page description:
`Mark each payment rail as current use, interested in Veem, or both.`

Page footer:
`Fields marked with * are required.`

### Payment Methods

Section description:
`Select the payment methods relevant to the From and To flow. Plugins and Paylinks are handled on the next page.`

Required: at least one payment method must be marked as `Current use`, `Interested in Veem`, or both.

#### Bank Transfers

- Local Bank Transfers
- Same Day ACH (US only)
- IBT (Instant Bank Transfer)
- RTP (US only)

#### Bank Wires

- Fedwire (US)
- International Swift

#### Cards

- Card Acceptance (Debit & Credit)
- Push to Cards
- Instant Card Issuance

### Fiat and Digital Currency Conversions

Section description:
`Select relevant FX currency tiers and stablecoin conversion directions.`

#### FX

- FX - Majors
- FX - Minors
- FX - Tertiary

#### Stablecoins

- USDC ↔ Fiat
- USDT ↔ Fiat

Reviewer note:
Confirm that payment methods and conversion options are grouped in a way that is easy to scan and does not imply unavailable functionality.

## 5. Additional Services

Page title: `Select any add-on services.`

Page description:
`Choose verification, risk, or plugin services that should be included with the selected flow.`

Page footer:
`Fields marked with * are required.`

### Additional Services

Section description:
`Select optional verification, risk, payer-facing, and payee-facing services for the selected use cases.`

- Payer Plugin / Paylinks
- Payee Plugin
- Plaid Bank Account Verification
- Risk Services

For each service:

- Current use
- Interested in Veem

Reviewer note:
This page is optional in the current test version. Confirm whether any service should be required or whether more add-on services should be included.

## 6. Business & Financial Profile

Page title: `Provide financial scale and commercial preferences.`

Page description:
`Please provide directional ranges for volume and the business preferences for this opportunity.`

Page footer:
`Fields marked with * are required.`

### Company Financials

Section description:
`Please provide directional ranges for the business supporting the selected flow or flows.`

- Annual company revenue
- Annual volume
- Payment count
- Average ticket size
- Expected company growth (Next 12 months)

### Business Profile

Section description:
`Please confirm your current operating status for this opportunity.`

- Are you currently in the flow of funds business?
  Options: Yes, No
- Are you licensed in the countries in which you operate?
  Options: Yes, No

### Commercial Preferences

Section description:
`Please share the business model and launch timing for this opportunity.`

- Which commercial model do you prefer?
  Options: Wholesale pricing, Revenue share
- What is your timeline to implement the solution?
  Options: Immediately / 0-3 months, 3-6 months, 6-12 months, 12+ months, Exploring / no fixed timeline

Reviewer note:
Confirm that the commercial preference questions are enough for routing without making the partner provide implementation detail too early.

## 7. Review

Page title: `Review your responses and provide any additional context.`

Page description:
`You may use this section to provide implementation considerations, launch timing, priorities, or any other relevant context.`

Page footer:
`Fields marked with * are required.`

### Summary

Section description:
`Please review the information provided below.`

The current summary is a grouped question-and-answer table. Groups include:

- Use case setup
- Payment scope
- Commercial profile
- One group for each selected use case

The table summarizes:

- Selected use cases
- New use case or corridor status
- Current handling, when applicable
- High-risk industry status and details, when applicable
- Payment method interest
- Additional service interest
- Stored Value Account selections
- Flow of funds and licensing status
- Commercial model, annual revenue, and implementation timeline
- From / payer details per use case
- To / payee details per use case

Long country, region, and currency lists are summarized with a selected count and a short preview.

### Additional Information

Section description:
`Please provide any additional information that would assist our review.`

- Additional context

Reviewer note:
Confirm that the grouped summary is concise enough for internal review and still includes the details needed for follow-up.

## Sample Submission Data For Zapier

The form submits a JSON payload to Zapier with three useful areas:

- `summary`: readable plain-text summary for Slack, email, CRM notes, or internal review.
- `rawData`: flat key/value fields that are easier to map in Zapier.
- `responses`: nested structured data for more detailed automation or storage.

### Example Summary

```text
New Partner Intake form submission

Contact: Maya Patel
Email: maya.patel@orbitpay.example
WhatsApp: +1 416 555 0198
Primary contact is decision maker: Yes
Decision maker name: N/A
Decision maker email: N/A
Company: OrbitPay
Entity type: Corporation
URL: https://orbitpay.example
Use case categories: B2B Payments, Marketplace / Platform
New use case or corridor: Yes
Current handling: N/A
High-risk industries: No
High-risk industry details: N/A

Currently in flow of funds business: Yes
Licensed in operating countries: No
Pricing model: Revenue share
Implementation timeline: 3-6 months

Revenue range: $5M - $10M
Expected company growth (next 12 months): 45%
Annual volume range: $100M - $250M
Payment count range: 500K - 1M
Average ticket size: $2,500

Product interest summary: Payment methods: Local Bank Transfers (current + interested), Same Day ACH (interested), International Swift (interested), Card Acceptance (Debit & Credit) (current) | Stored value accounts: B2B Payments: Virtual Bank Accounts, Multi-Currency Wallet | Marketplace / Platform: Stablecoin Wallet (USDC / USDT), Virtual Card (USD) | Additional services: Payer Plugin / Paylinks (interested), Plaid Bank Account Verification (interested), Risk Services (interested)
Payment methods: Local Bank Transfers (current + interested), Same Day ACH (interested), International Swift (interested), Card Acceptance (Debit & Credit) (current)
Stored value accounts: B2B Payments: Virtual Bank Accounts, Multi-Currency Wallet | Marketplace / Platform: Stablecoin Wallet (USDC / USDT), Virtual Card (USD)
Additional services: Payer Plugin / Paylinks (interested), Plaid Bank Account Verification (interested), Risk Services (interested)

Use case payment flows:
B2B Payments: User/customer side: Payer | Payers: Businesses | Number of payers: 1200 (actual) | Payer regions: North America | Payer countries: United States, Canada | Payer currencies: USD, CAD | Payees: Businesses, Sole proprietors | Number of payees: 3800 (estimated) | Payee regions: North America, Europe | Payee countries: United States, Canada, United Kingdom, Germany | Payee currencies: USD, CAD, GBP, EUR | Stored value: Virtual Bank Accounts, Multi-Currency Wallet
Marketplace / Platform: User/customer side: Payee | Payers: Consumers, Businesses | Number of payers: 25000 (estimated) | Payer regions: North America, Europe | Payer countries: United States, Canada, United Kingdom, Germany | Payer currencies: USD, CAD, GBP, EUR | Payees: Businesses | Number of payees: 9000 (actual) | Payee regions: North America, Europe | Payee countries: United States, Canada, United Kingdom, Germany | Payee currencies: USD, CAD, GBP, EUR | Stored value: Stablecoin Wallet (USDC / USDT), Virtual Card (USD)

Additional info: Partner wants to launch the B2B flow first, then add marketplace payouts after pilot approval.
```

### Example `rawData` Fields

| Zapier field | Sample value |
| --- | --- |
| Submission date | 2026-07-08T14:30:00.000Z |
| First Name | Maya |
| Last name | Patel |
| Email | maya.patel@orbitpay.example |
| Whatsapp Number | +1 416 555 0198 |
| Primary contact is decision maker | Yes |
| Company Name | OrbitPay |
| Entity Type | Corporation |
| Url | https://orbitpay.example |
| Use case categories | B2B Payments, Marketplace / Platform |
| New use case or corridor | Yes |
| High-risk industries | No |
| Currently in flow of funds business | Yes |
| Licensed in operating countries | No |
| Pricing model | Revenue share |
| Implementation timeline | 3-6 months |
| Annual Revenue range | $5M - $10M |
| Annual volume range | $100M - $250M |
| Payment count range | 500K - 1M |
| Expected company growth (next 12 months) | 45 |
| Average ticket size | 2500 |
| Payment methods | Local Bank Transfers (current + interested), Same Day ACH (interested), International Swift (interested), Card Acceptance (Debit & Credit) (current) |
| Stored value accounts | B2B Payments: Virtual Bank Accounts, Multi-Currency Wallet \| Marketplace / Platform: Stablecoin Wallet (USDC / USDT), Virtual Card (USD) |
| Additional services | Payer Plugin / Paylinks (interested), Plaid Bank Account Verification (interested), Risk Services (interested) |
| Use case payment flows | B2B Payments: User/customer side: Payer ... \|\| Marketplace / Platform: User/customer side: Payee ... |
| Use case 1 - B2B Payments - User/customer side | Payer |
| Use case 1 - B2B Payments - Payer types | Businesses |
| Use case 1 - B2B Payments - Payer count | 1200 |
| Use case 1 - B2B Payments - Payer count basis | actual |
| Use case 1 - B2B Payments - Payer regions | North America |
| Use case 1 - B2B Payments - Payer countries | United States, Canada |
| Use case 1 - B2B Payments - Payer currencies | USD, CAD |
| Use case 1 - B2B Payments - Payee types | Businesses, Sole proprietors |
| Use case 1 - B2B Payments - Payee count | 3800 |
| Use case 1 - B2B Payments - Payee count basis | estimated |
| Use case 1 - B2B Payments - Payee regions | North America, Europe |
| Use case 1 - B2B Payments - Payee countries | United States, Canada, United Kingdom, Germany |
| Use case 1 - B2B Payments - Payee currencies | USD, CAD, GBP, EUR |
| Use case 1 - B2B Payments - Stored value account capabilities | Virtual Bank Accounts, Multi-Currency Wallet |
| Use case 2 - Marketplace / Platform - User/customer side | Payee |
| Use case 2 - Marketplace / Platform - Payer types | Consumers, Businesses |
| Use case 2 - Marketplace / Platform - Payer count | 25000 |
| Use case 2 - Marketplace / Platform - Payer count basis | estimated |
| Use case 2 - Marketplace / Platform - Payer regions | North America, Europe |
| Use case 2 - Marketplace / Platform - Payer countries | United States, Canada, United Kingdom, Germany |
| Use case 2 - Marketplace / Platform - Payer currencies | USD, CAD, GBP, EUR |
| Use case 2 - Marketplace / Platform - Payee types | Businesses |
| Use case 2 - Marketplace / Platform - Payee count | 9000 |
| Use case 2 - Marketplace / Platform - Payee count basis | actual |
| Use case 2 - Marketplace / Platform - Payee regions | North America, Europe |
| Use case 2 - Marketplace / Platform - Payee countries | United States, Canada, United Kingdom, Germany |
| Use case 2 - Marketplace / Platform - Payee currencies | USD, CAD, GBP, EUR |
| Use case 2 - Marketplace / Platform - Stored value account capabilities | Stablecoin Wallet (USDC / USDT), Virtual Card (USD) |
| Additional info | Partner wants to launch the B2B flow first, then add marketplace payouts after pilot approval. |

### Example Payload Shape

```json
{
  "event": "veem.partner_onboarding.submitted",
  "submissionId": "submission-20260708-143000",
  "submittedAt": "2026-07-08T14:30:00.000Z",
  "pageUrl": "https://example.com/test.html?mode=test",
  "contact": {
    "firstName": "Maya",
    "lastName": "Patel",
    "email": "maya.patel@orbitpay.example",
    "whatsapp": "+1 416 555 0198",
    "isDecisionMaker": true
  },
  "company": {
    "companyName": "OrbitPay",
    "entityType": "corporation",
    "url": "https://orbitpay.example"
  },
  "summary": "New Partner Intake form submission...",
  "rawData": {
    "Company Name": "OrbitPay",
    "Use case categories": "B2B Payments, Marketplace / Platform",
    "Stored value accounts": "B2B Payments: Virtual Bank Accounts, Multi-Currency Wallet | Marketplace / Platform: Stablecoin Wallet (USDC / USDT), Virtual Card (USD)"
  },
  "responses": {
    "useCase": {
      "categories": ["b2b-payments", "marketplace-platform"],
      "isNewUseCaseOrCorridor": "yes",
      "highRiskIndustries": "no"
    },
    "useCaseFlows": {
      "b2b-payments": {
        "label": "B2B Payments",
        "customerSides": ["payer"],
        "senderTypes": ["businesses"],
        "receiverTypes": ["businesses", "soleProprietors"],
        "storedValueAccountTypes": ["virtualBankAccounts", "multiCurrencyWallets"]
      }
    }
  }
}
```

## 8. Thank You / Available Documents

Page title: `Thank you for your submission`

Page description:
`Our team will review your responses and get back to you shortly.`

### Completion Screen

- Submission confirmation
- Submission received timestamp, when available
- Links to Veem solution pages and partnership resources

## Not Currently In The Main Flow

The app still contains some legacy or future-ready components that are not currently inserted into the active step order:

- Standalone Stored Value Accounts coverage page
- Standalone Stored Value Account interest page
- Transaction type selection
- Collection and disbursement selection pages

Reviewer note:
Do not review these as active partner-facing pages unless they are intentionally reintroduced into the step order.

## Feedback Prompts For The Team

- Does the form feel easy to understand from start to finish?
- Are the section names clear?
- Is the order of sections correct?
- Are any questions missing?
- Are any questions unnecessary?
- Are any labels confusing or too internal?
- Are the conditional sections showing in the right places?
- Does the From and To flow remove the need for collection/disbursement wording?
- Are there fields that should be optional instead of required?
- Are there any places where the user may hesitate or need extra explanation?
- Does the Review page summarize the right information for internal follow-up?
- Are the final-page resources aligned to what we want to share after submission?
