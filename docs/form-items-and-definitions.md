# Partner Intake Form Items and Definitions

Last updated: June 22, 2026

This document summarizes the selectable items currently used in the partner intake form. It is intended as a shared reference for product, sales, partnerships, operations, and implementation teams.

## Solution Areas

| Item | Definition |
| --- | --- |
| Collections | Receive funds through supported payment methods such as local bank transfers, FX, card acceptance, wire transfers, and stablecoin-to-fiat conversion. |
| Disbursements | Send or deliver funds through supported payout rails such as local bank transfers, FX, Same Day ACH, RTP, Fedwire, Swift, and fiat-to-stablecoin conversion. |
| Stored Value Accounts | Launch stored-balance experiences with multi-currency wallets, virtual bank accounts, stablecoin wallets, and virtual card issuance. |

## Payment Method Categories

| Category | Definition | Included items |
| --- | --- | --- |
| Bank transfers | Account-to-account payment rails for local collection and disbursement flows. | Local Bank Transfers, Same Day ACH, IBT, RTP |
| Bank wires | Wire transfer rails for U.S. domestic and international bank movement. | Fedwire, International Swift |
| Cards | Card-funded collection and card payout methods. | Card Acceptance, Push to Cards, Instant Card Issuance |

## Payment Methods

| Item | Definition | Form availability note |
| --- | --- | --- |
| Local Bank Transfers | Market-specific local bank transfer rails, including ACH debit or credit, SEPA, FPS, EFT, and similar account-to-account methods. | Not restricted by form flow selection. |
| Same Day ACH (US only) | U.S. ACH rail with same-day settlement for faster domestic bank movement. | Not restricted by form flow selection. |
| IBT (Instant Bank Transfer) | Instant bank transfer for U.S. ACH collection flows using Plaid bank connection and balance checks. | Collections only. |
| RTP (US only) | Real-Time Payments rail for instant U.S. disbursements and immediate settlement. | Disbursements only. |
| Fedwire (US) | Domestic U.S. wire transfer rail for higher-value bank movement and faster settlement. | Not restricted by form flow selection. |
| International Swift | Cross-border wire transfers through the Swift network for international bank movement. | Not restricted by form flow selection. |
| Card Acceptance (Debit & Credit) | Accept debit and credit card payments for collection flows where card-funded payments are required. | Collections only. |
| Push to Cards | Send funds to eligible debit or credit cards across supported card payout programs. | Disbursements only. |
| Instant Card Issuance | Issue cards instantly for supported card programs. | Disbursements only. |

## Fiat and Digital Currency Conversions

| Group | Definition | Included items |
| --- | --- | --- |
| FX | Majors, Minors, and Tertiary currency buckets. | FX - Majors, FX - Minors, FX - Tertiary |
| Stablecoins | USDC and USDT fiat conversion options. | USDC <-> Fiat, USDT <-> Fiat |

### FX Buckets

| Item | Definition | Included currencies |
| --- | --- | --- |
| FX - Majors | Major FX currency bucket. | AUD, CAD, CHF, CNY, DKK, EUR, GBP, HKD, JPY, NOK, NZD, PHP, SEK, SGD, USD |
| FX - Minors | Minor FX currency bucket. | AED, BBD, BDT, BGN, BHD, BMD, BND, BRL, BSD, BWP, BZD, CRC, CZK, DOP, DZD, EGP, ETB, FJD, GHS, GTQ, GYD, HTG, HUF, IDR, ILS, INR, ISK, JMD, JOD, KES, KWD, KYD, KZT, LBP, LKR, MAD, MOP, MUR, MWK, MXN, MZN, NGN, OMR, PEN, PGK, PKR, PLN, QAR, RON, RUB, RWF, SAR, SBD, THB, TND, TOP, TRY, TTD, TZS, UGX, UYU, VND, VUV, WST, XAF, XCD, XOF, ZAR, ZMW |
| FX - Tertiary | Tertiary FX currency bucket. | ALL, AMD, ANG, AOA, ARS, AWG, AZN, BAM, BIF, BOB, BTN, BYN, CDF, CLP, COP, CVE, DJF, ERN, FKP, GEL, GIP, GMD, GNF, HNL, KGS, KHR, KMF, KRW, LAK, LRD, LSL, LYD, MDL, MGA, MKD, MMK, MNT, MRU, MVR, MYR, NAD, NIO, NPR, PAB, PYG, RSD, SCR, SHP, SLE, SRD, SSP, STN, SVC, SZL, TJS, TMT, TWD, UAH, UZS, VES, XPF, YER, ZWD |

### Stablecoin Conversion Options

| Item | Definition | Form availability note |
| --- | --- | --- |
| USDC <-> Fiat | Convert between supported USDC balances and fiat currency for collection, settlement, payout, or wallet flows. | Collections and disbursements. |
| USDT <-> Fiat | Convert between supported USDT balances and fiat currency for collection, settlement, payout, or wallet flows. | Collections and disbursements. |

## Additional Services

| Item | Category | Definition | Form availability note |
| --- | --- | --- | --- |
| Payer Plugin / Paylinks | Plugins | Collection-only payer experience for payment links or embedded payer checkout flows. | Collections only. |
| Payee Plugin | Plugins | Disbursement-only payee experience for collecting recipient details and supporting payout onboarding. | Disbursements only. |
| Plaid Bank Account Verification | Verification | Verify bank accounts and support account ownership, identity, and connected-bank validation before payment movement. | Not restricted by form flow selection. |
| Risk Services | Risk | Additional risk controls and support services for managing payment, fraud, compliance, and operational exposure. | Not restricted by form flow selection. |

## Stored Value Accounts

| Item | Definition |
| --- | --- |
| Multi-Currency Wallet | Stored balances across supported fiat currencies for treasury, payment, or wallet experiences. |
| Stablecoin Wallet (USDC / USDT) | Wallet experiences for holding, receiving, or sending supported USDC and USDT balances. |
| Virtual Card (USD) | USD-denominated virtual cards with instant card issuance for online or card-not-present spend. |
| Virtual Bank Accounts | Dedicated virtual bank account details for supported currencies: USD, EUR, GBP, MXN, BRL, and CAD. |

## Use Case Categories

| Item | Definition |
| --- | --- |
| B2B Payments | Business-to-business payments such as invoices, vendor payments, supplier payments, or account-to-account transfers. |
| Marketplace / Platform | Multi-party payment flows where a platform collects from buyers and pays sellers, merchants, or service providers. |
| Personal Remittance | Consumer money movement, including people sending funds to family, friends, or their own accounts. |
| Me-to-Me Collections | Customer wallet funding where a customer moves money from their own bank account or card into their own wallet. |
| Disbursements / Payroll | Outgoing payments to employees, contractors, vendors, creators, payees, or other recipients. |
| Ecommerce | Online commerce, checkout, cart, or merchant payment experiences. |
| Other | Select this if the use case is not listed above. |

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

These user types are used in both collections and disbursements for sender and receiver selections.

| Item | Definition |
| --- | --- |
| Consumers | Individual end users acting in a personal capacity. |
| Businesses | Companies or organizations acting in a commercial capacity. |
| Sole proprietors | Individual business operators who may act as both a person and a business. |

## Transaction Types

| Item | Definition |
| --- | --- |
| Domestic | Funds move within the same domestic market or country context. |
| FX | Funds require foreign exchange or currency conversion. |
| Cross border USD | Funds move across borders while using USD as the transaction or settlement currency. |
| Money storage accounts only | The opportunity is focused on stored balances or wallet accounts without a payment movement flow. |

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
| Pay Solution | Embed fast, secure disbursements. | https://www.veem.com/pay-solution/ |
| Collect Solution | Enable frictionless payment collection. | https://www.veem.com/collect-solution/ |
