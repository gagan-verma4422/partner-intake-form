# Partner Intake Form Items and Definitions

Last updated: July 8, 2026

This document summarizes the selectable items currently used in the partner intake form. It is intended as a shared reference for product, sales, partnerships, operations, and implementation teams.

## Stored Value Account Capability Area

| Item | Definition |
| --- | --- |
| Stored Value Accounts | Launch stored-balance experiences with multi-currency wallets, virtual bank accounts, stablecoin wallets, and virtual card issuance. |

Collections and disbursements are no longer selected as separate solution areas. The form now captures payer and payee movement through a payment flow for each selected use case. Stored value account capabilities are offered inside each use-case payment flow.

## Payment Method Categories

| Category | Definition | Included items |
| --- | --- | --- |
| Bank transfers | Account-to-account payment rails for payer and payee flows. | Local Bank Transfers, Same Day ACH (US only), IBT (Instant Bank Transfer), RTP (US only) |
| Bank wires | Wire transfer rails for U.S. domestic and international bank movement. | Fedwire, International Swift |
| Cards | Card-funded payer payments and card-based payee delivery methods. | Card Acceptance (Debit & Credit), Push to Cards, Instant Card Issuance |

## Payment Methods

| Item | Definition | Form availability note |
| --- | --- | --- |
| Local Bank Transfers | Market-specific local bank transfer rails, including ACH debit (pull) or credit (push), SEPA, FPS, EFT, and similar local transfer methods. | Shown when one or more use cases are selected. |
| Same Day ACH (US only) | U.S. ACH rail with same-day settlement for faster domestic bank movement. | Shown when one or more use cases are selected. |
| IBT (Instant Bank Transfer) | U.S. instant bank-funded payments using ACH with Plaid bank validation and balance checks. | Shown when one or more use cases are selected. |
| RTP (US only) | Real-Time Payments rail for instant U.S. payment delivery and immediate settlement. | Shown when one or more use cases are selected. |
| Fedwire (US) | Domestic U.S. wire transfer rail for higher-value bank movement and faster settlement. | Shown when one or more use cases are selected. |
| International Swift | Cross-border wire transfers through the Swift network for international bank movement. | Shown when one or more use cases are selected. |
| Card Acceptance (Debit & Credit) | Accept debit and credit card-funded payments from payers. | Shown when one or more use cases are selected. |
| Push to Cards | Send payments to Visa and Mastercard debit cards globally. | Shown when one or more use cases are selected. |
| Instant Card Issuance | Issue USD virtual cards instantly for 30+ countries. | Shown when one or more use cases are selected. |

## Fiat and Digital Currency Conversions

| Group | Definition | Included items |
| --- | --- | --- |
| FX | Currency conversions for Majors, Minors, and Tertiary currency tiers. | FX - Majors, FX - Minors, FX - Tertiary |
| Stablecoins | USDC and USDT fiat conversion options. | USDC ↔ Fiat, USDT ↔ Fiat |

### FX Buckets

| Item | Definition | Included currencies |
| --- | --- | --- |
| FX - Majors | Major FX currencies. | AUD, CAD, CHF, CNY, DKK, EUR, GBP, HKD, JPY, NOK, NZD, PHP, SEK, SGD, USD |
| FX - Minors | Minor FX currencies. | AED, BBD, BDT, BGN, BHD, BMD, BND, BRL, BSD, BWP, BZD, CRC, CZK, DOP, DZD, EGP, ETB, FJD, GHS, GTQ, GYD, HTG, HUF, IDR, ILS, INR, ISK, JMD, JOD, KES, KWD, KYD, KZT, LBP, LKR, MAD, MOP, MUR, MWK, MXN, MZN, NGN, OMR, PEN, PGK, PKR, PLN, QAR, RON, RUB, RWF, SAR, SBD, THB, TND, TOP, TRY, TTD, TZS, UGX, UYU, VND, VUV, WST, XAF, XCD, XOF, ZAR, ZMW |
| FX - Tertiary | Tertiary FX currencies. | ALL, AMD, ANG, AOA, ARS, AWG, AZN, BAM, BIF, BOB, BTN, BYN, CDF, CLP, COP, CVE, DJF, ERN, FKP, GEL, GIP, GMD, GNF, HNL, KGS, KHR, KMF, KRW, LAK, LRD, LSL, LYD, MDL, MGA, MKD, MMK, MNT, MRU, MVR, MYR, NAD, NIO, NPR, PAB, PYG, RSD, SCR, SHP, SLE, SRD, SSP, STN, SVC, SZL, TJS, TMT, TWD, UAH, UZS, VES, XPF, YER, ZWD |

### Stablecoin Conversion Options

| Item | Definition | Form availability note |
| --- | --- | --- |
| USDC ↔ Fiat | Convert between supported USDC balances and fiat currency for settlement, payment delivery, or wallet flows. | Shown when one or more use cases are selected. |
| USDT ↔ Fiat | Convert between supported USDT balances and fiat currency for settlement, payment delivery, or wallet flows. | Shown when one or more use cases are selected. |

## Additional Services

| Item | Category | Definition | Form availability note |
| --- | --- | --- | --- |
| Payer Plugin / Paylinks | Plugins | Pre-built payer experience for payment links or embedded checkout flows. | Shown when one or more use cases are selected. |
| Payee Plugin | Plugins | Pre-built payee experience for collecting recipient details and payment preferences. | Shown when one or more use cases are selected. |
| Plaid Bank Account Verification | Verification | Verify bank accounts, account ownership, identity, and check balances before executing the payment. | Shown when one or more use cases are selected. |
| Risk Services | Risk | Additional risk signals for assessing and managing fraud risk. | Shown when one or more use cases are selected. |

## Stored Value Accounts

Stored value account capabilities are optional and selected per use case. A stored value account lets a partner receive, hold, and use funds before they are sent or spent.

| Item | Definition |
| --- | --- |
| Multi-Currency Wallet | Stored balances across 16 supported fiat currencies for treasury, payment, or wallet experiences. |
| Stablecoin Wallet (USDC / USDT) | Receive, hold, send, and convert USDC/USDT balances to fiat. |
| Virtual Card (USD) | Issue USD-denominated virtual cards in 30+ countries for online or card-not-present spend. |
| Virtual Bank Accounts | Dedicated virtual bank account details for supported currencies: USD, EUR, GBP, MXN, BRL, and CAD. |

## Use Case Categories

Use case categories are multi-select. Each selected use case receives its own payment flow page.

| Item | Definition |
| --- | --- |
| B2B Payments | Business-to-business payments such as invoices, vendor payments, supplier payments, or account-to-account transfers. |
| Marketplace / Platform | Multi-party payment flows where a platform collects from buyers and pays sellers, merchants, or service providers. |
| Personal Remittance | Consumer money movement, including individuals sending funds to family, friends, or their own accounts. |
| Wallet Funding / Me-to-Me | Customer wallet funding where a customer moves money from their own bank account or card into their own wallet. |
| Payables / Payroll | Sending payments to employees, contractors, vendors, creators, payees, or other recipients. |
| Ecommerce | Online commerce, checkout, cart, or merchant payment experiences. |
| Other | Select this if you cannot find your use case above. |

## Company Entity Types

| Item | Definition |
| --- | --- |
| Corporation | Incorporated legal entity. |
| LLC | Limited liability company or equivalent limited-liability entity. |
| Partnership | Business owned and operated by two or more parties. |
| Sole proprietorship | Business owned by one individual without a separate corporate entity. |
| Nonprofit | Organization formed for nonprofit, charitable, educational, social, or similar purposes. |
| Other | Entity type not represented by the listed options. |

## Commercial and Operational Options

| Item | Definition |
| --- | --- |
| Wholesale pricing | Commercial model where the partner receives pricing from Veem and controls downstream customer pricing. |
| Revenue share | Commercial model where Veem and the partner share revenue from the payment or service flow. |
| Immediately / 0-3 months | Target implementation timeline is immediate or within three months. |
| 3-6 months | Target implementation timeline is within three to six months. |
| 6-12 months | Target implementation timeline is within six to twelve months. |
| 12+ months | Target implementation timeline is more than twelve months away. |
| Exploring / no fixed timeline | Partner is evaluating options and does not yet have a committed implementation timeline. |
| Actual | User or volume count is based on real current data. |
| Estimated | User or volume count is projected or directional. |

## Flow User Types

These user types are used in the payer and payee payment-flow selections.

| Item | Definition |
| --- | --- |
| Payer / From | The party that sends or funds the payment. |
| Payee / To | The party that receives the funds. |
| User/customer side | Identifies whether the partner's user or customer is on the payer side or payee side of the payment flow. |

| Item | Definition |
| --- | --- |
| Consumers | Individual end users acting in a personal capacity. |
| Businesses | Companies or organizations acting in a commercial capacity. |
| Sole proprietors | Individual business operators who may act as both a person and a business. |

## Payment Flow Page Per Use Case

Each selected use case has a separate page that asks for:

| Field | Definition |
| --- | --- |
| Who is your user or customer in this use case? | Indicate whether your users are payers or payees. |
| From user type | Select the sending user types: consumers, businesses, and/or sole proprietors. |
| Payer regions, countries, and currencies | Identify where payers are located and which currencies they send. |
| Number of payers | Approximate number of payer users for the selected use case. |
| Payer count basis | Indicates whether the payer count is actual or estimated. |
| To user type | Select the receiving user types: consumers, businesses, and/or sole proprietors. |
| Payee regions, countries, and currencies | Identify where payees are located and which currencies they receive. |
| Number of payees | Approximate number of payee users for the selected use case. |
| Payee count basis | Indicates whether the payee count is actual or estimated. |
| Stored Value Account | Optional stored value account capabilities needed for the selected use case, such as wallets, virtual accounts, stablecoin wallets, or virtual cards. A stored value account lets the partner receive, hold, and use funds before they are sent or spent. |

## Review Summary Format

The Review page uses a grouped question-and-answer table. Groups include use case setup, payment scope, commercial profile, and one group for each selected use case. Long country, region, and currency lists are summarized with a selected count and a short preview.

## Financial Range Options

| Field | Options |
| --- | --- |
| Annual revenue range | < $1M; $1M - $5M; $5M - $10M; $10M - $25M; $25M - $100M; $100M+ |
| Annual volume range | < $5M; $5M - $25M; $25M - $100M; $100M - $250M; $250M - $1B; $1B+ |
| Payment count range | < 10K; 10K - 100K; 100K - 500K; 500K - 1M; 1M - 10M; 10M+ |

## Currency Selector Options

The currency selector uses currency or asset codes. Available options:

ALL, USD, DZD, ARS, AMD, AUD, EUR, BSD, BHD, BDT, BBD, BMD, BRL, BND, BGN, CAD, KYD, CLP, CNY, COP, CRC, EGP, SZL, FJD, GTQ, HNL, HKD, ISK, INR, IDR, ILS, JMD, JPY, JOD, KZT, KES, KRW, KWD, LBP, MOP, MWK, MYR, MUR, MXN, MAD, MZN, NPR, NZD, NGN, NOK, OMR, PKR, PEN, PHP, PLN, QAR, RON, SAR, SGD, ZAR, LKR, SEK, CHF, TWD, THB, TTD, TND, UGX, UYU, VND, ZMW, USDC, USDT.

## Region and Country Options

| Region | Countries |
| --- | --- |
| North America | Canada (CA), Mexico (MX), United States (US) |
| Central America | Costa Rica (CR), Guatemala (GT), Honduras (HN) |
| Caribbean | Bahamas (BS), Barbados (BB), Bermuda (BM), Cayman Islands (KY), Dominican Republic (DO), Jamaica (JM), Trinidad & Tobago (TT) |
| South America | Argentina (AR), Brazil (BR), Chile (CL), Colombia (CO), Ecuador (EC), Peru (PE), Uruguay (UY) |
| Europe | Albania (AL), Austria (AT), Belgium (BE), Bulgaria (BG), Croatia (HR), Cyprus (CY), Czech Republic (CZ), Denmark (DK), Estonia (EE), Finland (FI), France (FR), Georgia (GE), Germany (DE), Greece (GR), Hungary (HU), Iceland (IS), Ireland (IE), Italy (IT), Latvia (LV), Liechtenstein (LI), Lithuania (LT), Luxembourg (LU), Malta (MT), Monaco (MC), Netherlands (NL), Norway (NO), Poland (PL), Portugal (PT), Romania (RO), Serbia (RS), Slovakia (SK), Slovenia (SI), Spain (ES), Sweden (SE), Switzerland (CH), Ukraine (UA), United Kingdom (GB) |
| Middle East | Bahrain (BH), Israel (IL), Jordan (JO), Kuwait (KW), Lebanon (LB), Oman (OM), Qatar (QA), Saudi Arabia (SA), United Arab Emirates (AE) |
| Africa | Algeria (DZ), Egypt (EG), Eswatini (SZ), Kenya (KE), Malawi (MW), Mauritius (MU), Morocco (MA), Mozambique (MZ), Nigeria (NG), South Africa (ZA), Tunisia (TN), Uganda (UG), Zambia (ZM) |
| APAC | Armenia (AM), Australia (AU), Bangladesh (BD), Brunei Darussalam (BN), China (CN), Fiji (FJ), Hong Kong (HK), India (IN), Indonesia (ID), Japan (JP), Kazakhstan (KZ), Korea (South) (KR), Macao (MO), Malaysia (MY), Nepal (NP), New Zealand (NZ), Pakistan (PK), Philippines (PH), Singapore (SG), Sri Lanka (LK), Taiwan (TW), Thailand (TH), Turkey (TR), Vietnam (VN) |

## Reference Solution Links

| Item | Definition | Link |
| --- | --- | --- |
| Solutions Overview | Drive revenue and expand globally. | https://www.veem.com/partnerships/ |
| Virtual Account Solution | Dedicated virtual bank accounts. | https://www.veem.com/virtual-bank-account-solution/ |
| Wallet Solution | Multi-currency balances. | https://www.veem.com/wallet-solution/ |
| Pay Solution | Embed fast, secure payment delivery. | https://www.veem.com/pay-solution/ |
| Collect Solution | Enable frictionless payer payment experiences. | https://www.veem.com/collect-solution/ |
