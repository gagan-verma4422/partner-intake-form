# Sample Partner Intake Summary

Last updated: June 24, 2026

This is example-only sample data showing how a completed partner intake form can summarize on the review screen and in the submitted/internal summary. The company, contact, website, counts, and volumes below are fictional.

## Sample Form Responses

| Field | Sample value |
| --- | --- |
| First name | Alex |
| Last name | Partner |
| Email | alex.partner@example.com |
| WhatsApp number | +1 415 555 0142 |
| Primary contact is decision maker | Yes |
| Company name | Northstar Wallets Inc. |
| Entity type | Corporation |
| URL | https://northstar.example |
| Use case category | Me-to-Me Collections |
| New use case or corridor | Yes |
| High-risk industries | No |
| Selected flows | Collections, Disbursements, Stored Value Accounts |
| Currently in flow of funds business | Yes |
| Licensed in operating countries | Yes |
| Pricing model | Revenue share |
| Implementation timeline | 3-6 months |
| Annual revenue range | $1M - $5M |
| Expected company growth, next 12 months | 35% |
| Annual volume range | $25M - $100M |
| Payment count range | 100K - 500K |
| Average ticket size | $250 |

## Sample Product Selections

| Area | Sample selected items |
| --- | --- |
| Payment methods | IBT (Instant Bank Transfer) - interested; Card Acceptance (Debit & Credit) - current + interested; Fedwire (US) - current; RTP (US only) - interested; FX - Majors - interested; USDC ↔ Fiat - interested |
| Stored value accounts | Multi-Currency Wallet - interested; Virtual Bank Accounts - current + interested; Stablecoin Wallet (USDC / USDT) - interested |
| Additional services | Payer Plugin / Paylinks - interested; Payee Plugin - interested; Plaid Bank Account Verification - current; Risk Services - interested |

## Sample Flow Details

| Flow section | Sample value |
| --- | --- |
| Collections sender types | Consumers |
| Collections from regions | North America |
| Collections from countries | United States |
| Collections from currencies | USD |
| Collections receiver types | Consumers |
| Collections to regions | North America |
| Collections to countries | United States |
| Collections to currencies | USDC |
| Collections payer count | 150000 actual |
| Disbursements sender types | Businesses |
| Disbursements from regions | North America |
| Disbursements from countries | United States |
| Disbursements from currencies | USD, USDC |
| Disbursements receiver types | Consumers, Sole proprietors |
| Disbursements to regions | Europe |
| Disbursements to countries | France, Germany |
| Disbursements to currencies | EUR |
| Disbursements payee count | 80000 estimated |
| Stored value account holder regions | North America, Europe |
| Stored value account holder countries | Canada, United States, France, Germany |

## On-Screen Review Summary Example

This is the compact summary a user would see on the review step before submitting.

```text
Summary

Selected flows
Collections, Disbursements, Stored Value Accounts

Use case category
Me-to-Me Collections | New use case/corridor: Yes | High-risk industries: No

Markets and Currencies
Collections: From regions: North America | From countries: United States | From currencies: USD | To regions: North America | To countries: United States | To currencies: USDC | Disbursements: From regions: North America | From countries: United States | From currencies: USD, USDC | To regions: Europe | To countries: France, Germany | To currencies: EUR | Stored Value Accounts: Account holder regions: North America, Europe | Account holder countries: Canada, United States, France, Germany

Payment scope
Payment methods: IBT (Instant Bank Transfer) (interested), Card Acceptance (Debit & Credit) (current + interested), Fedwire (US) (current), RTP (US only) (interested), FX - Majors (interested), USDC ↔ Fiat (interested) | Stored value: Multi-Currency Wallet (interested), Stablecoin Wallet (USDC / USDT) (interested), Virtual Bank Accounts (current + interested) | Additional services: Payer Plugin / Paylinks (interested), Payee Plugin (interested), Plaid Bank Account Verification (current), Risk Services (interested)

Commercial model
Flow of funds business: Yes | Licensed: Yes | Revenue share with $1M - $5M revenue range | Timeline: 3-6 months
```

## Submitted/Internal Summary Example

This is the fuller line-by-line summary used after submission.

```text
New Partner Intake form submission

Contact: Alex Partner
Email: alex.partner@example.com
WhatsApp: +1 415 555 0142
Primary contact is decision maker: Yes
Decision maker name: N/A
Decision maker email: N/A
Company: Northstar Wallets Inc.
Entity type: Corporation
URL: https://northstar.example
Use case category: Me-to-Me Collections
New use case or corridor: Yes
Current handling: N/A
High-risk industries: No
High-risk industry details: N/A

Selected flows: Collections, Disbursements, Stored Value Accounts
Currently in flow of funds business: Yes
Licensed in operating countries: Yes
Pricing model: Revenue share
Implementation timeline: 3-6 months

Revenue range: $1M - $5M
Expected company growth (next 12 months): 35%
Annual volume range: $25M - $100M
Payment count range: 100K - 500K
Average ticket size: $250.00

Product interest summary: Payment methods: IBT (Instant Bank Transfer) (interested), Card Acceptance (Debit & Credit) (current + interested), Fedwire (US) (current), RTP (US only) (interested), FX - Majors (interested), USDC ↔ Fiat (interested) | Stored value accounts: Multi-Currency Wallet (interested), Stablecoin Wallet (USDC / USDT) (interested), Virtual Bank Accounts (current + interested) | Additional services: Payer Plugin / Paylinks (interested), Payee Plugin (interested), Plaid Bank Account Verification (current), Risk Services (interested)
Payment methods: IBT (Instant Bank Transfer) (interested), Card Acceptance (Debit & Credit) (current + interested), Fedwire (US) (current), RTP (US only) (interested), FX - Majors (interested), USDC ↔ Fiat (interested)
Stored value accounts: Multi-Currency Wallet (interested), Stablecoin Wallet (USDC / USDT) (interested), Virtual Bank Accounts (current + interested)
Additional services: Payer Plugin / Paylinks (interested), Payee Plugin (interested), Plaid Bank Account Verification (current), Risk Services (interested)

Stored value account holder regions: North America, Europe
Stored value account holder countries: Canada, United States, France, Germany
Stored value account options: Multi-Currency Wallet (interested), Stablecoin Wallet (USDC / USDT) (interested), Virtual Bank Accounts (current + interested)

Collections sender types: consumers
Collections receiver types: consumers
Collections payer count: 150000 (actual)
Collections from regions: North America
Collections from countries: United States
Collections from currencies: USD
Collections to regions: North America
Collections to countries: United States
Collections to currencies: USDC

Disbursements sender types: businesses
Disbursements receiver types: consumers, soleProprietors
Disbursements payee count: 80000 (estimated)
Disbursements from regions: North America
Disbursements from countries: United States
Disbursements from currencies: USD, USDC
Disbursements to regions: Europe
Disbursements to countries: France, Germany
Disbursements to currencies: EUR

Additional info: Launching a customer wallet funding flow for U.S. users first, followed by EU account holder coverage. Initial priority is card and instant bank transfer collections, with stored balances and outbound wallet withdrawals in phase two.
```

## Zapier Raw Data Example

This is a simplified key-value version of the payload style sent downstream.

| Key | Sample value |
| --- | --- |
| Submission date | 2026-06-23T17:30:00.000Z |
| First Name | Alex |
| Last name | Partner |
| Email | alex.partner@example.com |
| Whatsapp Number | +1 415 555 0142 |
| Primary contact is decision maker | Yes |
| Company Name | Northstar Wallets Inc. |
| Entity Type | Corporation |
| Url | https://northstar.example |
| Use case category | Me-to-Me Collections |
| New use case or corridor | Yes |
| High-risk industries | No |
| Selected flows | Collections, Disbursements, Stored Value Accounts |
| Currently in flow of funds business | Yes |
| Licensed in operating countries | Yes |
| Pricing model | Revenue share |
| Implementation timeline | 3-6 months |
| Annual Revenue range | $1M - $5M |
| Annual volume range | $25M - $100M |
| Payment count range | 100K - 500K |
| Expected company growth (next 12 months) | 35 |
| Average ticket size | 250 |
| Payment methods | IBT (Instant Bank Transfer) (interested), Card Acceptance (Debit & Credit) (current + interested), Fedwire (US) (current), RTP (US only) (interested), FX - Majors (interested), USDC ↔ Fiat (interested) |
| Stored value accounts | Multi-Currency Wallet (interested), Stablecoin Wallet (USDC / USDT) (interested), Virtual Bank Accounts (current + interested) |
| Additional services | Payer Plugin / Paylinks (interested), Payee Plugin (interested), Plaid Bank Account Verification (current), Risk Services (interested) |
| Collections sender types | consumers |
| Collections from countries | United States |
| Collections from currencies | USD |
| Collections receiver types | consumers |
| Collections to countries | United States |
| Collections to currencies | USDC |
| Collections payer count | 150000 |
| Disbursements sender types | businesses |
| Disbursements from countries | United States |
| Disbursements from currencies | USD, USDC |
| Disbursements receiver types | consumers, soleProprietors |
| Disbursements to countries | France, Germany |
| Disbursements to currencies | EUR |
| Disbursements payee count | 80000 |
| Stored value account holder countries | Canada, United States, France, Germany |
| Additional info | Launching a customer wallet funding flow for U.S. users first, followed by EU account holder coverage. |
