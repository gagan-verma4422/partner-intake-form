# Veem Partner Intake Form Review

Use this document to collect feedback on the current intake experience. The goal is to review content, order, clarity, and anything that may be missing or unnecessary before finalizing the form.

## How To Review

- Focus on whether each page is clear, necessary, and in the right sequence.
- Comment on wording that may feel too internal, vague, or repetitive.
- Flag any required fields that should be optional, or optional fields that should be required.
- Note any questions that should be added, removed, or moved.

## Review Focus

- Overall flow and sequencing
- Clarity of page titles and helper text
- Field relevance and completeness
- Conditional logic and whether questions appear at the right time
- Readiness for internal and external review

## Current Experience

1. Contact Information
2. Use Case Category
3. Flow Selection
4. Collection Information (only shown if `Collections` is selected)
5. Disbursement Information (only shown if `Disbursements` is selected)
6. Product Scope
7. Financial Profile
8. Business Profile
9. Review
10. Thank You / Available Documents

## 1. Contact Information

Page title: `Provide contact information.`

Page description:
`Please provide the primary contact details for this inquiry together with basic company information.`

Page footer:
`Fields marked with * are required.`

### Primary contact

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

### Company details

Section description:
`Please provide basic company information.`

- Company name
- Entity type
- URL

## 2. Use Case Category

Page title: `Choose the dominant commercial framing.`

Page description:
`Select the primary business motion for this opportunity.`

Page footer:
`Fields marked with * are required.`

### Use case category

Section description:
`Choose the dominant commercial framing for this opportunity.`

- Use case category
  Options: B2B Payments, Marketplace / Platform, Personal Remittance, Disbursements / Payroll, Embedded Finance, Other
- Please specify use case category
  Note: only shown when `Other` is selected above
- Is this a new use case or corridor?
  Options: Yes, No
- How do you handle it today?
  Note: only shown when `No` is selected above

## 3. Flow Selection

Page title: `Choose the solution areas you would like to discuss.`

Page description:
`Select collections, disbursements, or both.`

### Solutions of interest

Section description:
`Select the solution areas you would like to discuss. The remaining steps will adjust to your selection.`

Reviewer note:
Descriptions should help users quickly understand the difference between Collections and Disbursements without needing additional explanation.

- Collections
  Description: Receive funds through Standard ACH, Same Day ACH, IBT, Swift Wire, Named Virtual Accounts, Pay Links, Card Acquiring, Foreign Exchange, Digital Wallet, and Stablecoin.
- Disbursements
  Description: Send or deliver funds through Standard ACH, Same Day ACH, Swift Wire, Foreign Exchange, Card Issuance, and Stablecoin.

## 4. Collection Information

Shown only when `Collections` is selected.

Page title: `Provide information about your collections flow.`

Page description:
`Please share details about the users sending funds and where funds move in your collections flow.`

Page footer:
`Fields marked with * are required.`

### Originating users

Section description:
`Please provide information about where funds are coming from and where they are going in your collections flow.`

- What type of users are sending funds?
  Options: Consumers, Businesses, Sole proprietors
- Number of users (payers)
- Are these users actual or estimated?
  Options: Actual, Estimated
- From which countries will funds be sent?
- In which currencies will funds be sent?
- To which countries will funds be delivered?
- In which currencies will funds be delivered?

## 5. Disbursement Information

Shown only when `Disbursements` is selected.

Page title: `Provide information about your disbursement flow.`

Page description:
`Please share details about the users receiving funds and where funds move in your disbursement flow.`

Page footer:
`Fields marked with * are required.`

### Receiving users

- What type of users are receiving funds?
  Options: Consumers, Businesses, Sole proprietors
- Do any of these businesses operate in high risk industries?
  Options: Yes, No
  Note: only shown when `Businesses` is selected above
- Number of users receiving funds
- Are these users actual or estimated?
  Options: Actual, Estimated
- From countries
- From currencies
- To countries
- To currencies

## 6. Product Scope

Page title: `Identify products and services.`

Page description:
`Select the products and additional services most relevant to your business.`

Page footer:
`Fields marked with * are required.`

### Products

Section description:
Prompt changes slightly based on selected flow.

Reviewer note:
Confirm that the product list is complete, clearly labeled, and grouped in a way that matches how the team wants to position Veem capabilities.

Collections only:
`Please indicate the products relevant to your incoming collection flows.`

Disbursements only:
`Please indicate the products relevant to your outgoing disbursement flows.`

Both flows selected:
`Please indicate the products relevant to your selected flows.`

- Standard ACH
  Description: Veem's standard domestic U.S. bank transfer option for lower-cost transactions where moderate settlement speed is acceptable.
- Same Day ACH
  Description: Domestic U.S. ACH with same-day settlement for faster bank movement when timing matters.
- IBT (Instant Bank Transfer)
  Description: Instant bank transfer collection option for account-to-account payments where users connect a bank account and move funds quickly.
  Note: greyed out and unavailable when `Disbursements` is selected.
- RTP
  Description: Real-Time Payments for instant U.S. bank transfers and immediate settlement in time-sensitive use cases.
  Note: greyed out and unavailable when `Collections` is selected.
- Swift Wire
  Description: Domestic or cross-border USD wire transfers through the SWIFT network for direct bank-to-bank settlement.
- Named Virtual Accounts
  Description: Unique U.S.-based account and routing numbers that support incoming payments, reconciliation, and account-level tracking.
- Foreign Exchange
  Description: Currency conversion supported by institutional liquidity providers for cross-border payments and treasury movement.
- Pay Links
  Description: Invoice, checkout, or link-based collection experience.
- Card Acquiring
  Description: Card-funded payment acceptance for partners taking debit or credit card payments.
- Card Issuance
  Description: Commercial prepaid card issuance, including virtual card experiences for wallets and ecommerce use cases.
- Stablecoin
  Description: USDC and USDT on-ramp and off-ramp support across multiple blockchain networks with routed settlement options.
- Digital Wallet
  Description: Balance-supported collection flow that lets users receive funds into a stored balance, hold funds for later use, and route balances to payouts, cards, or external accounts.

For each product:

- Current
- Interested
- Estimated share of volume
- Share basis: current or expected

### Additional services

Section description:
`Please select any additional services relevant to this opportunity.`

Reviewer note:
Confirm whether this list should stay narrow or whether other services should be brought back into scope.

- Plaid Bank Account Verification
- Risk Services

For each additional service:

- Current
- Interested

## 7. Financial Profile

Page title: `Provide current scale and expected growth.`

Page description:
`Please provide directional ranges for revenue, payment volume, payment count, and expected growth over the next 12 months.`

Page footer:
`Fields marked with * are required.`

### Company financials

Section description:
`Please provide directional ranges for the business supporting the selected flow or flows.`

- Annual company revenue
- Annual volume
- Payment count
- Average ticket size
- Expected company growth (next 12 months)

## 8. Business Profile

Page title: `Provide business profile and licensing information.`

Page footer:
`Fields marked with * are required.`

### Business profile

Section description:
`Please provide information on your role in the flow of funds and your licensing status for the selected flow or flows.`

Reviewer note:
This page is intended to capture operating model and licensing context without asking for overly detailed implementation information too early.

- Are you licensed in the countries in which you operate?
  Options: Yes, No
- Do you hold any additional licenses?
  Options: Yes, No
- Where do you hold additional licenses?
  Note: only shown when `Yes` is selected above
- Which commercial model do you prefer?
  Options: Wholesale pricing, Revenue share
- What is your timeline to implement the solution?
  Options: Immediately / 0-3 months, 3-6 months, 6-12 months, 12+ months, Exploring / no fixed timeline

## 9. Review

Page title: `Review your responses and provide any additional context.`

Page description:
`You may use this section to provide implementation considerations, launch timing, priorities, or any other relevant context.`

Page footer:
`Fields marked with * are required.`

### Summary

Section description:
`Please review the information provided below.`

Reviewer note:
This summary should help the team quickly understand the submission at a glance. Flag anything that feels repetitive, unclear, or missing.

- Selected flows
- Use case category and new use case / corridor status
- Markets and Currencies
  Example summary:
  `Collections: Countries: Canada | Currencies: USD`
  `Disbursements: Countries: Mexico | Currencies: USD`
- Commercial model summary

### Additional information

Section description:
`Please provide any additional information that would assist our review.`

- Additional context

## 9. Thank You / Available Documents

Page title: `Thank you for your submission.`

Page description:
`Explore Veem solutions and partnership resources using the links below.`

### Completion screen

- Submission confirmation
- Links to Veem solution pages and partnership resources

## Feedback prompts for the team

- Does the form feel easy to understand from start to finish?
- Are the section names clear?
- Is the order of sections correct?
- Are any questions missing?
- Are any questions unnecessary?
- Are any labels confusing or too internal?
- Are the conditional sections showing in the right places?
- Do we need different wording for collections vs disbursements?
- Are there fields that should be optional instead of required?
- Are there any places where the user may hesitate or need extra explanation?
- Does the Review page summarize the right information for internal follow-up?
- Are the final-page resources aligned to what we want to share after submission?
