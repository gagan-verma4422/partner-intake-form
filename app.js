const MODULES = [
  {
    key: "accounts",
    label: "Stored Value Accounts",
    description:
      "Launch stored-balance experiences with multi-currency wallets, virtual bank accounts, stablecoin wallets, and virtual card issuance.",
  },
];

const PAYMENT_METHODS = [
  {
    key: "swiftWire",
    label: "Local Bank Transfers",
    description:
      "Market-specific local bank transfer rails, including ACH debit (pull) or credit (push), SEPA, FPS, EFT, and similar local transfer methods.",
  },
  {
    key: "sameDayAch",
    label: "Same Day ACH (US only)",
    description: "U.S. ACH rail with same-day settlement for faster domestic bank movement.",
  },
  {
    key: "ibtInstantBankTransfer",
    label: "IBT (Instant Bank Transfer)",
    description:
      "U.S. instant bank-funded payments using ACH with Plaid bank validation and balance checks.",
  },
  {
    key: "rtp",
    label: "RTP (US only)",
    description: "Real-Time Payments rail for instant U.S. payment delivery and immediate settlement.",
  },
  {
    key: "fedwire",
    label: "Fedwire (US)",
    description: "Domestic U.S. wire transfer rail for higher-value bank movement and faster settlement.",
  },
  {
    key: "internationalSwift",
    label: "International Swift",
    description: "Cross-border wire transfers through the Swift network for international bank movement.",
  },
  {
    key: "cardAcquiring",
    label: "Card Acceptance (Debit & Credit)",
    description: "Accept debit and credit card-funded payments from payers.",
  },
  {
    key: "pushToCards",
    label: "Push to Cards",
    description: "Send payments to Visa and Mastercard debit cards globally.",
  },
  {
    key: "instantCardIssue",
    label: "Instant Card Issuance",
    description: "Issue USD virtual cards instantly for 30+ countries.",
  },
  {
    key: "fxMajors",
    label: "FX - Majors",
    shortLabel: "Majors",
    description: "Major FX currencies.",
    details:
      "AUD, CAD, CHF, CNY, DKK, EUR, GBP, HKD, JPY, NOK, NZD, PHP, SEK, SGD, USD.",
  },
  {
    key: "fxMinors",
    label: "FX - Minors",
    shortLabel: "Minors",
    description: "Minor FX currencies.",
    details:
      "AED, BBD, BDT, BGN, BHD, BMD, BND, BRL, BSD, BWP, BZD, CRC, CZK, DOP, DZD, EGP, ETB, FJD, GHS, GTQ, GYD, HTG, HUF, IDR, ILS, INR, ISK, JMD, JOD, KES, KWD, KYD, KZT, LBP, LKR, MAD, MOP, MUR, MWK, MXN, MZN, NGN, OMR, PEN, PGK, PKR, PLN, QAR, RON, RUB, RWF, SAR, SBD, THB, TND, TOP, TRY, TTD, TZS, UGX, UYU, VND, VUV, WST, XAF, XCD, XOF, ZAR, ZMW.",
  },
  {
    key: "fxTertiary",
    label: "FX - Tertiary",
    shortLabel: "Tertiary",
    description: "Tertiary FX currencies.",
    details:
      "ALL, AMD, ANG, AOA, ARS, AWG, AZN, BAM, BIF, BOB, BTN, BYN, CDF, CLP, COP, CVE, DJF, ERN, FKP, GEL, GIP, GMD, GNF, HNL, KGS, KHR, KMF, KRW, LAK, LRD, LSL, LYD, MDL, MGA, MKD, MMK, MNT, MRU, MVR, MYR, NAD, NIO, NPR, PAB, PYG, RSD, SCR, SHP, SLE, SRD, SSP, STN, SVC, SZL, TJS, TMT, TWD, UAH, UZS, VES, XPF, YER, ZWD.",
  },
  {
    key: "usdcToFiat",
    label: "USDC ↔ Fiat",
    description: "Convert between supported USDC balances and fiat currency for settlement, payment delivery, or wallet flows.",
  },
  {
    key: "usdtToFiat",
    label: "USDT ↔ Fiat",
    description: "Convert between supported USDT balances and fiat currency for settlement, payment delivery, or wallet flows.",
  },
];

const PAYMENT_METHOD_GROUPS = [
  {
    key: "bankTransfers",
    label: "Bank transfers",
    description: "Account-to-account payment rails for payer and payee flows.",
    itemKeys: ["swiftWire", "sameDayAch", "ibtInstantBankTransfer", "rtp"],
  },
  {
    key: "bankWires",
    label: "Bank wires",
    description: "Wire transfer rails for U.S. domestic and international bank movement.",
    itemKeys: ["fedwire", "internationalSwift"],
  },
  {
    key: "cards",
    label: "Cards",
    description: "Card-funded payer payments and card-based payee delivery methods.",
    itemKeys: ["cardAcquiring", "pushToCards", "instantCardIssue"],
  },
];

const FIAT_DIGITAL_CURRENCY_CONVERSIONS = {
  key: "fiatDigitalCurrencyConversions",
  label: "Fiat and Digital Currency Conversions",
  description: "Select relevant FX currency tiers and stablecoin conversion directions.",
  groups: [
    {
      key: "fx",
      label: "FX",
      description: "Currency conversions for Majors, Minors, and Tertiary currency tiers.",
      itemKeys: ["fxMajors", "fxMinors", "fxTertiary"],
    },
    {
      key: "stablecoins",
      label: "Stablecoins",
      description: "USDC and USDT fiat conversion options.",
      itemKeys: ["usdcToFiat", "usdtToFiat"],
    },
  ],
};

const ADDITIONAL_SERVICES = [
  {
    key: "payerPluginPaylinks",
    label: "Payer Plugin / Paylinks",
    category: "Plugins",
    description: "Pre-built payer experience for payment links or embedded checkout flows.",
  },
  {
    key: "payeePlugin",
    label: "Payee Plugin",
    category: "Plugins",
    description: "Pre-built payee experience for collecting recipient details and payment preferences.",
  },
  {
    key: "plaidBankAccountVerification",
    label: "Plaid Bank Account Verification",
    category: "Verification",
    description:
      "Verify bank accounts, account ownership, identity, and check balances before executing the payment.",
  },
  {
    key: "riskServices",
    label: "Risk Services",
    category: "Risk",
    description: "Additional risk signals for assessing and managing fraud risk.",
  },
];

const STORED_VALUE_ACCOUNTS = [
  {
    key: "multiCurrencyWallets",
    label: "Multi-Currency Wallet",
    description: "Stored balances across 16 supported fiat currencies for treasury, payment, or wallet experiences.",
  },
  {
    key: "stablecoinWallets",
    label: "Stablecoin Wallet (USDC / USDT)",
    description: "Receive, hold, send, and convert USDC/USDT balances to fiat.",
  },
  {
    key: "virtualCards",
    label: "Virtual Card (USD)",
    description: "Issue USD-denominated virtual cards in 30+ countries for online or card-not-present spend.",
  },
  {
    key: "virtualBankAccounts",
    label: "Virtual Bank Accounts",
    description: "Dedicated virtual bank account details for supported currencies: USD, EUR, GBP, MXN, BRL, and CAD.",
  },
];

const SOLUTION_LINKS = [
  {
    title: "Solutions Overview",
    description: "Drive revenue and expand globally",
    href: "https://www.veem.com/partnerships/",
  },
  {
    title: "Virtual Account Solution",
    description: "Dedicated virtual bank accounts",
    href: "https://www.veem.com/virtual-bank-account-solution/",
  },
  {
    title: "Wallet Solution",
    description: "Multi-currency balances",
    href: "https://www.veem.com/wallet-solution/",
  },
  {
    title: "Pay Solution",
    description: "Embed fast, secure payment delivery",
    href: "https://www.veem.com/pay-solution/",
  },
  {
    title: "Collect Solution",
    description: "Enable frictionless payer payment experiences",
    href: "https://www.veem.com/collect-solution/",
  },
];

const TRANSACTION_TYPES = [
  "Domestic",
  "FX",
  "Cross border USD",
  "Money storage accounts only",
];

const ENTITY_TYPES = [
  { value: "corporation", label: "Corporation" },
  { value: "llc", label: "LLC" },
  { value: "partnership", label: "Partnership" },
  { value: "sole-proprietorship", label: "Sole proprietorship" },
  { value: "nonprofit", label: "Nonprofit" },
  { value: "other", label: "Other" },
];

const USE_CASE_CATEGORIES = [
  {
    value: "b2b-payments",
    label: "B2B Payments",
    description: "Business-to-business payments such as invoices, vendor payments, supplier payments, or account-to-account transfers.",
  },
  {
    value: "marketplace-platform",
    label: "Marketplace / Platform",
    description: "Multi-party payment flows where a platform collects from buyers and pays sellers, merchants, or service providers.",
  },
  {
    value: "personal-remittance",
    label: "Personal Remittance",
    description: "Consumer money movement, including individuals sending funds to family, friends, or their own accounts.",
  },
  {
    value: "me-to-me-collections",
    label: "Wallet Funding / Me-to-Me",
    description: "Customer wallet funding where a customer moves money from their own bank account or card into their own wallet.",
  },
  {
    value: "disbursements-payroll",
    label: "Payables / Payroll",
    description: "Sending payments to employees, contractors, vendors, creators, payees, or other recipients.",
  },
  {
    value: "ecommerce",
    label: "Ecommerce",
    description: "Online commerce, checkout, cart, or merchant payment experiences.",
  },
  {
    value: "other",
    label: "Other",
    description: "Select this if you cannot find your use case above.",
  },
];

const IMPLEMENTATION_TIMELINE_OPTIONS = [
  { value: "immediate", label: "Immediately / 0-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-12-months", label: "6-12 months" },
  { value: "12-plus-months", label: "12+ months" },
  { value: "exploring", label: "Exploring / no fixed timeline" },
];

const RANGE_OPTIONS = {
  revenue: [
    "< $1M",
    "$1M - $5M",
    "$5M - $10M",
    "$10M - $25M",
    "$25M - $100M",
    "$100M+",
  ],
  volume: [
    "< $5M",
    "$5M - $25M",
    "$25M - $100M",
    "$100M - $250M",
    "$250M - $1B",
    "$1B+",
  ],
  payments: [
    "< 10K",
    "10K - 100K",
    "100K - 500K",
    "500K - 1M",
    "1M - 10M",
    "10M+",
  ],
};

const CURRENCY_OPTIONS = [
  "ALL",
  "USD",
  "DZD",
  "ARS",
  "AMD",
  "AUD",
  "EUR",
  "BSD",
  "BHD",
  "BDT",
  "BBD",
  "BMD",
  "BRL",
  "BND",
  "BGN",
  "CAD",
  "KYD",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "EGP",
  "SZL",
  "FJD",
  "GTQ",
  "HNL",
  "HKD",
  "ISK",
  "INR",
  "IDR",
  "ILS",
  "JMD",
  "JPY",
  "JOD",
  "KZT",
  "KES",
  "KRW",
  "KWD",
  "LBP",
  "MOP",
  "MWK",
  "MYR",
  "MUR",
  "MXN",
  "MAD",
  "MZN",
  "NPR",
  "NZD",
  "NGN",
  "NOK",
  "OMR",
  "PKR",
  "PEN",
  "PHP",
  "PLN",
  "QAR",
  "RON",
  "SAR",
  "SGD",
  "ZAR",
  "LKR",
  "SEK",
  "CHF",
  "TWD",
  "THB",
  "TTD",
  "TND",
  "UGX",
  "UYU",
  "VND",
  "ZMW",
  "USDC",
  "USDT",
];

const COUNTRY_OPTIONS = [
  { region: "North America", code: "CA", name: "Canada" },
  { region: "North America", code: "MX", name: "Mexico" },
  { region: "North America", code: "US", name: "United States" },
  { region: "Central America", code: "CR", name: "Costa Rica" },
  { region: "Central America", code: "GT", name: "Guatemala" },
  { region: "Central America", code: "HN", name: "Honduras" },
  { region: "Caribbean", code: "BS", name: "Bahamas" },
  { region: "Caribbean", code: "BB", name: "Barbados" },
  { region: "Caribbean", code: "BM", name: "Bermuda" },
  { region: "Caribbean", code: "KY", name: "Cayman Islands" },
  { region: "Caribbean", code: "DO", name: "Dominican Republic" },
  { region: "Caribbean", code: "JM", name: "Jamaica" },
  { region: "Caribbean", code: "TT", name: "Trinidad & Tobago" },
  { region: "South America", code: "AR", name: "Argentina" },
  { region: "South America", code: "BR", name: "Brazil" },
  { region: "South America", code: "CL", name: "Chile" },
  { region: "South America", code: "CO", name: "Colombia" },
  { region: "South America", code: "EC", name: "Ecuador" },
  { region: "South America", code: "PE", name: "Peru" },
  { region: "South America", code: "UY", name: "Uruguay" },
  { region: "Europe", code: "AL", name: "Albania" },
  { region: "Europe", code: "AT", name: "Austria" },
  { region: "Europe", code: "BE", name: "Belgium" },
  { region: "Europe", code: "BG", name: "Bulgaria" },
  { region: "Europe", code: "HR", name: "Croatia" },
  { region: "Europe", code: "CY", name: "Cyprus" },
  { region: "Europe", code: "CZ", name: "Czech Republic" },
  { region: "Europe", code: "DK", name: "Denmark" },
  { region: "Europe", code: "EE", name: "Estonia" },
  { region: "Europe", code: "FI", name: "Finland" },
  { region: "Europe", code: "FR", name: "France" },
  { region: "Europe", code: "GE", name: "Georgia" },
  { region: "Europe", code: "DE", name: "Germany" },
  { region: "Europe", code: "GR", name: "Greece" },
  { region: "Europe", code: "HU", name: "Hungary" },
  { region: "Europe", code: "IS", name: "Iceland" },
  { region: "Europe", code: "IE", name: "Ireland" },
  { region: "Europe", code: "IT", name: "Italy" },
  { region: "Europe", code: "LV", name: "Latvia" },
  { region: "Europe", code: "LI", name: "Liechtenstein" },
  { region: "Europe", code: "LT", name: "Lithuania" },
  { region: "Europe", code: "LU", name: "Luxembourg" },
  { region: "Europe", code: "MT", name: "Malta" },
  { region: "Europe", code: "MC", name: "Monaco" },
  { region: "Europe", code: "NL", name: "Netherlands" },
  { region: "Europe", code: "NO", name: "Norway" },
  { region: "Europe", code: "PL", name: "Poland" },
  { region: "Europe", code: "PT", name: "Portugal" },
  { region: "Europe", code: "RO", name: "Romania" },
  { region: "Europe", code: "RS", name: "Serbia" },
  { region: "Europe", code: "SK", name: "Slovakia" },
  { region: "Europe", code: "SI", name: "Slovenia" },
  { region: "Europe", code: "ES", name: "Spain" },
  { region: "Europe", code: "SE", name: "Sweden" },
  { region: "Europe", code: "CH", name: "Switzerland" },
  { region: "Europe", code: "UA", name: "Ukraine" },
  { region: "Europe", code: "GB", name: "United Kingdom" },
  { region: "Middle East", code: "BH", name: "Bahrain" },
  { region: "Middle East", code: "IL", name: "Israel" },
  { region: "Middle East", code: "JO", name: "Jordan" },
  { region: "Middle East", code: "KW", name: "Kuwait" },
  { region: "Middle East", code: "LB", name: "Lebanon" },
  { region: "Middle East", code: "OM", name: "Oman" },
  { region: "Middle East", code: "QA", name: "Qatar" },
  { region: "Middle East", code: "SA", name: "Saudi Arabia" },
  { region: "Middle East", code: "AE", name: "United Arab Emirates" },
  { region: "Africa", code: "DZ", name: "Algeria" },
  { region: "Africa", code: "EG", name: "Egypt" },
  { region: "Africa", code: "SZ", name: "Eswatini" },
  { region: "Africa", code: "KE", name: "Kenya" },
  { region: "Africa", code: "MW", name: "Malawi" },
  { region: "Africa", code: "MU", name: "Mauritius" },
  { region: "Africa", code: "MA", name: "Morocco" },
  { region: "Africa", code: "MZ", name: "Mozambique" },
  { region: "Africa", code: "NG", name: "Nigeria" },
  { region: "Africa", code: "ZA", name: "South Africa" },
  { region: "Africa", code: "TN", name: "Tunisia" },
  { region: "Africa", code: "UG", name: "Uganda" },
  { region: "Africa", code: "ZM", name: "Zambia" },
  { region: "APAC", code: "AM", name: "Armenia" },
  { region: "APAC", code: "AU", name: "Australia" },
  { region: "APAC", code: "BD", name: "Bangladesh" },
  { region: "APAC", code: "BN", name: "Brunei Darussalam" },
  { region: "APAC", code: "CN", name: "China" },
  { region: "APAC", code: "FJ", name: "Fiji" },
  { region: "APAC", code: "HK", name: "Hong Kong" },
  { region: "APAC", code: "IN", name: "India" },
  { region: "APAC", code: "ID", name: "Indonesia" },
  { region: "APAC", code: "JP", name: "Japan" },
  { region: "APAC", code: "KZ", name: "Kazakhstan" },
  { region: "APAC", code: "KR", name: "Korea (South)" },
  { region: "APAC", code: "MO", name: "Macao" },
  { region: "APAC", code: "MY", name: "Malaysia" },
  { region: "APAC", code: "NP", name: "Nepal" },
  { region: "APAC", code: "NZ", name: "New Zealand" },
  { region: "APAC", code: "PK", name: "Pakistan" },
  { region: "APAC", code: "PH", name: "Philippines" },
  { region: "APAC", code: "SG", name: "Singapore" },
  { region: "APAC", code: "LK", name: "Sri Lanka" },
  { region: "APAC", code: "TW", name: "Taiwan" },
  { region: "APAC", code: "TH", name: "Thailand" },
  { region: "APAC", code: "TR", name: "Turkey" },
  { region: "APAC", code: "VN", name: "Vietnam" },
];

const COUNTRY_CURRENCY_MAP = {
  AE: ["USD"],
  AL: ["ALL", "USD"],
  AM: ["AMD", "USD"],
  AR: ["ARS", "USD"],
  AT: ["EUR", "USD"],
  AU: ["AUD", "USD"],
  BB: ["BBD", "USD"],
  BD: ["BDT", "USD"],
  BE: ["EUR", "USD"],
  BG: ["EUR", "BGN", "USD"],
  BH: ["BHD", "USD"],
  BM: ["BMD", "USD"],
  BN: ["BND", "USD"],
  BR: ["BRL", "USD"],
  BS: ["BSD", "USD"],
  CA: ["CAD", "USD"],
  CH: ["EUR", "CHF", "USD"],
  CL: ["CLP", "USD"],
  CN: ["CNY", "USD"],
  CO: ["COP", "USD"],
  CR: ["CRC", "USD"],
  CY: ["EUR", "USD"],
  CZ: ["EUR", "USD"],
  DE: ["EUR", "USD"],
  DK: ["USD"],
  DO: ["USD"],
  DZ: ["DZD", "USD"],
  EC: ["USD"],
  EE: ["EUR", "USD"],
  EG: ["EGP", "USD"],
  ES: ["EUR", "USD"],
  FI: ["EUR", "USD"],
  FJ: ["FJD", "USD"],
  FR: ["EUR", "USD"],
  GB: ["USD"],
  GE: ["EUR", "USD"],
  GR: ["EUR", "USD"],
  GT: ["GTQ", "USD"],
  HK: ["HKD", "USD"],
  HN: ["HNL", "USD"],
  HR: ["EUR", "USD"],
  HU: ["EUR", "USD"],
  ID: ["IDR", "USD"],
  IE: ["EUR", "USD"],
  IL: ["ILS", "USD"],
  IN: ["INR", "USD"],
  IS: ["EUR", "ISK", "USD"],
  IT: ["EUR", "USD"],
  JM: ["JMD", "USD"],
  JO: ["JOD", "USD"],
  JP: ["JPY", "USD"],
  KE: ["KES", "USD"],
  KR: ["KRW", "USD"],
  KW: ["KWD", "USD"],
  KY: ["KYD", "USD"],
  KZ: ["KZT", "USD"],
  LB: ["LBP", "USD"],
  LI: ["EUR", "USD"],
  LK: ["LKR", "USD"],
  LT: ["EUR", "USD"],
  LU: ["EUR", "USD"],
  LV: ["EUR", "USD"],
  MA: ["MAD", "USD"],
  MC: ["EUR", "USD"],
  MO: ["MOP", "USD"],
  MT: ["EUR", "USD"],
  MU: ["MUR", "USD"],
  MW: ["MWK", "USD"],
  MX: ["MXN", "USD"],
  MY: ["MYR", "USD"],
  MZ: ["MZN", "USD"],
  NG: ["NGN", "USD"],
  NL: ["EUR", "USD"],
  NO: ["EUR", "NOK", "USD"],
  NP: ["NPR", "USD"],
  NZ: ["NZD", "USD"],
  OM: ["OMR", "USD"],
  PE: ["PEN", "USD"],
  PH: ["PHP", "USD"],
  PK: ["PKR", "USD"],
  PL: ["EUR", "PLN", "USD"],
  PT: ["EUR", "USD"],
  QA: ["QAR", "USD"],
  RO: ["EUR", "RON", "USD"],
  RS: ["USD"],
  SA: ["SAR", "USD"],
  SE: ["EUR", "SEK", "USD"],
  SG: ["SGD", "USD"],
  SI: ["EUR", "USD"],
  SK: ["EUR", "USD"],
  SZ: ["SZL", "USD"],
  TH: ["THB", "USD"],
  TN: ["TND", "USD"],
  TR: ["USD"],
  TT: ["TTD", "USD"],
  TW: ["TWD", "USD"],
  UA: ["USD"],
  UG: ["UGX", "USD"],
  US: ["USD"],
  UY: ["UYU", "USD"],
  VN: ["VND", "USD"],
  ZA: ["ZAR", "USD"],
  ZM: ["ZMW", "USD"],
};

const FLOW_MODULE_KEYS = ["accounts"];
const PRODUCT_AVAILABILITY_RULES = {
  ibtInstantBankTransfer: {
    availableForModules: ["collections"],
    status: "Available for payer-funded bank flows.",
  },
  rtp: {
    availableForModules: ["disbursements"],
    status: "Available for payee-side payment delivery.",
  },
  cardAcquiring: {
    availableForModules: ["collections"],
    status: "Available for payer card-funded flows.",
  },
  pushToCards: {
    availableForModules: ["disbursements"],
    status: "Available for payee-side card delivery.",
  },
  instantCardIssue: {
    availableForModules: ["disbursements"],
    status: "Available for payee-side card issuance.",
  },
  usdcToFiat: {
    availableForModules: ["collections", "disbursements"],
    status: "Available for payer and payee flows.",
  },
  usdtToFiat: {
    availableForModules: ["collections", "disbursements"],
    status: "Available for payer and payee flows.",
  },
};
const ADDITIONAL_SERVICE_AVAILABILITY_RULES = {
  payerPluginPaylinks: {
    availableForModules: ["collections"],
    status: "Available for payer-facing flows.",
  },
  payeePlugin: {
    availableForModules: ["disbursements"],
    status: "Available for payee-facing flows.",
  },
};

const STEP_CONTENT = {
  intro: {
    eyebrow: "Contact Information",
    title: "Provide contact information.",
    description:
      "Please provide the primary contact details for this inquiry together with basic company information.",
    footer:
      "Fields marked with * are required.",
  },
  useCase: {
    eyebrow: "Use Case Categories",
    title: "Choose the commercial framing.",
    description:
      "Your selections will shape the From and To flow details we collect.",
    footer:
      "Fields marked with * are required.",
  },
  financials: {
    eyebrow: "Business & Financial Profile",
    title: "Provide financial scale and commercial preferences.",
    description:
      "Please provide directional ranges for volume and the business preferences for this opportunity.",
    footer:
      "Fields marked with * are required.",
  },
  solutions: {
    eyebrow: "Stored Value",
    title: "Choose any stored value account interest.",
    description:
      "Select Stored Value Accounts if the opportunity includes wallets, virtual accounts, stablecoin wallets, or virtual cards.",
    footer: "",
  },
  markets: {
    eyebrow: "Payment Methods",
    title: "Select the payment methods.",
    description:
      "Mark each payment rail as current use, interested in Veem, or both.",
    footer:
      "Fields marked with * are required.",
  },
  additionalServices: {
    eyebrow: "Additional Services",
    title: "Select any add-on services.",
    description:
      "Choose verification, risk, or plugin services that should be included with the selected flow.",
    footer:
      "Fields marked with * are required.",
  },
  accounts: {
    eyebrow: "Stored Value Accounts",
    title: "Provide account holder coverage and stored value needs.",
    description:
      "Please share where account holders are located and which stored value account capabilities are relevant.",
    footer:
      "Fields marked with * are required.",
  },
  review: {
    eyebrow: "Review",
    title: "Review your responses and provide any additional context.",
    description:
      "You may use this section to provide implementation considerations, launch timing, priorities, or any other relevant context.",
    footer:
      "Fields marked with * are required.",
  },
  thankyou: {
    eyebrow: "Complete",
    title: "Thank you for your submission",
    description:
      "Our team will review your responses and get back to you shortly.",
  },
};

const APP_CONFIG = window.VEEM_ONBOARDING_CONFIG || {};
const TEST_MODE_QUERY_VALUES = new Set(["1", "true", "test", "yes"]);
const IS_TEST_MODE =
  APP_CONFIG.testMode === true ||
  window.location.pathname.endsWith("/test.html") ||
  TEST_MODE_QUERY_VALUES.has((new URLSearchParams(window.location.search).get("mode") || "").trim().toLowerCase());
const SUBMISSION_WEBHOOK_URL = String(APP_CONFIG.submissionWebhookUrl || "").trim();
const escapeSelectorValue = (value) => {
  const stringValue = String(value ?? "");
  if (globalThis.CSS && typeof globalThis.CSS.escape === "function") {
    return globalThis.CSS.escape(stringValue);
  }

  return stringValue.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
};

const countryLookup = new Map(COUNTRY_OPTIONS.map((country) => [country.code, country]));
const COUNTRY_REGION_OPTIONS = [...new Set(COUNTRY_OPTIONS.map((country) => country.region))]
  .map((region) => ({ value: region, label: region }));
const COUNTRY_SEARCH_OPTIONS = COUNTRY_OPTIONS.map((country) => ({
  value: country.code,
  label: country.name,
  meta: country.code,
  keywords: `${country.name} ${country.code} ${country.region}`,
}));
const CURRENCY_SEARCH_OPTIONS = CURRENCY_OPTIONS.map((currency) => ({
  value: currency,
  label: currency,
  keywords: currency,
}));
const FLOW_USER_TYPE_OPTIONS = [
  { value: "consumers", label: "Consumers" },
  { value: "businesses", label: "Businesses" },
  { value: "soleProprietors", label: "Sole proprietors" },
];
const CUSTOMER_ROLE_OPTIONS = [
  {
    value: "payer",
    label: "Payer",
    description: "Your customer sends or funds the payment.",
  },
  {
    value: "payee",
    label: "Payee",
    description: "Your customer receives the funds.",
  },
];
const STORED_VALUE_ACCOUNT_TYPE_OPTIONS = STORED_VALUE_ACCOUNTS.map((item) => ({
  value: item.key,
  label: item.label,
}));
const SEARCH_SELECTOR_DEFINITIONS = {
  "collections.senderCountries": {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "collections.senderCurrencies": {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "collections.receiverCountries": {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "collections.receiverCurrencies": {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "disbursements.senderCountries": {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "disbursements.senderCurrencies": {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "disbursements.receiverCountries": {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "disbursements.receiverCurrencies": {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  "accounts.accountHolderCountries": {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
};
const COUNTRY_SELECTOR_REGION_PATHS = {
  "collections.senderCountries": "collections.senderRegion",
  "collections.receiverCountries": "collections.receiverRegion",
  "disbursements.senderCountries": "disbursements.senderRegion",
  "disbursements.receiverCountries": "disbursements.receiverRegion",
  "accounts.accountHolderCountries": "accounts.accountHolderRegion",
};
const REGION_SELECTOR_COUNTRY_PATHS = Object.fromEntries(
  Object.entries(COUNTRY_SELECTOR_REGION_PATHS).map(([countryPath, regionPath]) => [regionPath, countryPath])
);
const OTHER_COUNTRY_VALUE = "__other_country__";
const COUNTRY_OTHER_DETAIL_PATHS = {
  "collections.senderCountries": "collections.senderCountriesOther",
  "collections.receiverCountries": "collections.receiverCountriesOther",
  "disbursements.senderCountries": "disbursements.senderCountriesOther",
  "disbursements.receiverCountries": "disbursements.receiverCountriesOther",
  "accounts.accountHolderCountries": "accounts.accountHolderCountriesOther",
};
const COUNTRY_OTHER_LABELS = {
  "collections.senderCountries": "Specify other source countries *",
  "collections.receiverCountries": "Specify other destination countries *",
  "disbursements.senderCountries": "Specify other source countries *",
  "disbursements.receiverCountries": "Specify other destination countries *",
  "accounts.accountHolderCountries": "Specify other account holder countries *",
};

function parseUseCaseFlowPath(path) {
  const match = /^useCaseFlows\.([^.]+)\.([^.]+)$/.exec(path);
  if (!match) {
    return null;
  }

  return {
    useCaseKey: match[1],
    field: match[2],
    basePath: `useCaseFlows.${match[1]}`,
  };
}

function getUseCaseFlowPath(path, field) {
  const parsed = parseUseCaseFlowPath(path);
  return parsed ? `${parsed.basePath}.${field}` : "";
}

function getCountrySelectorRegionPath(path) {
  const staticPath = COUNTRY_SELECTOR_REGION_PATHS[path];
  if (staticPath) {
    return staticPath;
  }

  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field === "senderCountries") {
    return `${parsed.basePath}.senderRegion`;
  }
  if (parsed?.field === "receiverCountries") {
    return `${parsed.basePath}.receiverRegion`;
  }

  return "";
}

function getRegionSelectorCountryPath(path) {
  const staticPath = REGION_SELECTOR_COUNTRY_PATHS[path];
  if (staticPath) {
    return staticPath;
  }

  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field === "senderRegion") {
    return `${parsed.basePath}.senderCountries`;
  }
  if (parsed?.field === "receiverRegion") {
    return `${parsed.basePath}.receiverCountries`;
  }

  return "";
}

function getCountryOtherDetailPath(path) {
  const staticPath = COUNTRY_OTHER_DETAIL_PATHS[path];
  if (staticPath) {
    return staticPath;
  }

  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field === "senderCountries") {
    return `${parsed.basePath}.senderCountriesOther`;
  }
  if (parsed?.field === "receiverCountries") {
    return `${parsed.basePath}.receiverCountriesOther`;
  }

  return "";
}

function getCountryOtherLabel(path) {
  const staticLabel = COUNTRY_OTHER_LABELS[path];
  if (staticLabel) {
    return staticLabel;
  }

  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field === "senderCountries") {
    return "Specify other payer countries *";
  }
  if (parsed?.field === "receiverCountries") {
    return "Specify other payee countries *";
  }

  return "";
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

let currentStepIndex = 0;
let maxUnlockedStepIndex = 0;
let activeErrors = [];
let isLastPageTestingEnabled = false;
let testingReturnStepIndex = 0;
const selectorUiState = {};
const submissionState = {
  status: "idle",
  submittedAt: "",
  submissionId: "",
};

function createUseCaseFlowState() {
  return {
    customerRole: "",
    customerSides: [],
    senderTypes: [],
    receiverTypes: [],
    payerCount: "",
    payerCountBasis: "",
    payeeCount: "",
    payeeCountBasis: "",
    senderRegion: [],
    senderCountries: [],
    senderCountriesOther: "",
    senderCurrencies: [],
    receiverRegion: [],
    receiverCountries: [],
    receiverCountriesOther: "",
    receiverCurrencies: [],
    storedValueAccountTypes: [],
  };
}

const state = {
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    isDecisionMaker: false,
    decisionMakerName: "",
    decisionMakerEmail: "",
  },
  company: {
    companyName: "",
    entityType: "",
    entityTypeOther: "",
    url: "",
  },
  useCase: {
    categories: [],
    other: "",
    isNewUseCaseOrCorridor: "",
    currentHandling: "",
    highRiskIndustries: "",
    highRiskIndustryDetails: "",
  },
  useCaseFlows: {},
  role: {
    inFlowOfFundsBusiness: "",
    licensed: "",
    pricingModel: "",
    implementationTimeline: "",
  },
  financials: {
    revenueRange: "",
    companyGrowth: 30,
    annualVolumeRange: "",
    paymentCountRange: "",
    averageTicket: 2500,
  },
  modules: buildInterestMap(MODULES),
  paymentMethods: buildInterestMap(PAYMENT_METHODS),
  storedValueAccounts: buildInterestMap(STORED_VALUE_ACCOUNTS),
  additionalServices: buildInterestMap(ADDITIONAL_SERVICES),
  accounts: {
    accountHolderRegion: [],
    accountHolderCountries: [],
    accountHolderCountriesOther: "",
  },
  collections: {
    senderTypes: [],
    receiverTypes: [],
    highRiskIndustries: "",
    highRiskIndustryDetails: "",
    payerCount: "",
    payerCountBasis: "",
    senderRegion: [],
    senderCountries: [],
    senderCountriesOther: "",
    senderCurrencies: [],
    receiverRegion: [],
    receiverCountries: [],
    receiverCountriesOther: "",
    receiverCurrencies: [],
  },
  disbursements: {
    senderTypes: [],
    receiverTypes: [],
    highRiskIndustries: "",
    highRiskIndustryDetails: "",
    payeeCount: "",
    payeeCountBasis: "",
    senderRegion: [],
    senderCountries: [],
    senderCountriesOther: "",
    senderCurrencies: [],
    receiverRegion: [],
    receiverCountries: [],
    receiverCountriesOther: "",
    receiverCurrencies: [],
  },
  additionalInfo: "",
};

const app = document.getElementById("app");
const LAST_PAGE_TEST_SHORTCUT = {
  key: "t",
  altKey: true,
  shiftKey: true,
};
const LAST_PAGE_TEST_QUERY_VALUES = new Set(["thankyou", "thank-you", "last-page"]);

if (app instanceof HTMLElement) {
  app.addEventListener("click", handleClick);
  app.addEventListener("input", handleInput);
  app.addEventListener("change", handleInput);
  app.addEventListener("keydown", handleKeyDown);
  app.addEventListener("focusout", handleBlur);
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleGlobalKeyDown);
  applyInitialTestingMode();
  render();
} else {
  console.error('Partner onboarding app could not start because the "#app" container was not found.');
}

function buildInterestMap(items) {
  return Object.fromEntries(items.map((item) => [item.key, { current: false, interested: false }]));
}

function shouldBypassRequiredFields() {
  return IS_TEST_MODE || isLastPageTestingEnabled;
}

function buildSteps() {
  const selectedUseCaseLabels = getSelectedUseCaseLabels();
  const shouldShowFullTestPath = shouldBypassRequiredFields() && !selectedUseCaseLabels.length;
  const selectedUseCases = getSelectedUseCaseEntries();
  const hasPaymentFlow = selectedUseCases.length > 0;
  const steps = [
    { id: "intro", validate: validateIntro },
    { id: "useCase", validate: validateUseCase },
  ];

  if (hasPaymentFlow) {
    selectedUseCases.forEach((entry) => {
      steps.push({
        id: `paymentFlow:${entry.value}`,
        useCaseValue: entry.value,
        validate: () => validateUseCasePaymentFlow(entry.value),
      });
    });
  }

  if (hasPaymentFlow || shouldShowFullTestPath) {
    steps.push({ id: "markets", validate: validateMarkets });
    steps.push({ id: "additionalServices", validate: validateAdditionalServices });
  }
  steps.push({ id: "financials", validate: validateFinancials });
  steps.push({ id: "review", validate: () => [] });
  steps.push({ id: "thankyou", validate: () => [] });
  return steps;
}

function ensureLayout() {
  if (app.dataset.layoutReady === "true") {
    return;
  }

  app.innerHTML = `
    <div class="page-shell">
      <div class="shell-frame">
        <aside class="sidebar" role="navigation" aria-label="Form progress">
          <div class="brand-lockup">
            <div class="brand-chip">
              <span class="brand-chip__dot"></span>
              Veem Partner
            </div>
          </div>

          <div class="step-map" data-render="step-map"></div>
        </aside>

        <section class="question-panel" id="main-content" role="main" tabindex="-1">
          <form class="panel-inner panel-form" aria-label="Partner intake form">
            <header class="panel-header" data-render="panel-header"></header>
            <div class="step-body" data-render="step-body" role="region" aria-label="Current form step"></div>
            <footer class="step-footer" data-render="step-footer"></footer>
          </form>
        </section>
      </div>
    </div>
  `;

  app.dataset.layoutReady = "true";
}

function render() {
  ensureLayout();

  const steps = buildSteps();
  currentStepIndex = Math.min(currentStepIndex, steps.length - 1);
  maxUnlockedStepIndex = isLastPageTestingEnabled
    ? steps.length - 1
    : Math.max(currentStepIndex, Math.min(maxUnlockedStepIndex, steps.length - 1));
  const currentStep = steps[currentStepIndex];
  const currentContent = getStepContent(currentStep);
  const progressPercent = Math.round(((currentStepIndex + 1) / steps.length) * 100);
  const stepMap = app.querySelector('[data-render="step-map"]');
  const panelHeader = app.querySelector('[data-render="panel-header"]');
  const stepBody = app.querySelector('[data-render="step-body"]');
  const stepFooter = app.querySelector('[data-render="step-footer"]');

  stepMap.innerHTML = `
    <p class="step-map__title">Questionnaire map</p>
    <div class="step-list">
      ${steps
        .map((step, index) => {
          const content = getStepContent(step);
          const isPaymentFlowStep = step.id.startsWith("paymentFlow:");
          const primaryStepLabel = isPaymentFlowStep ? content.title : content.eyebrow;
          const secondaryStepLabel = isPaymentFlowStep ? content.eyebrow : content.title;
          const isUnlocked = index <= maxUnlockedStepIndex;
          const statusClass =
            index === currentStepIndex
              ? "is-active"
              : index < currentStepIndex
                ? "is-complete"
                : "";
          if (step.id === "thankyou" && submissionState.status !== "success" && !isLastPageTestingEnabled) return "";
          return `
            <button
              class="step-item ${statusClass} ${isUnlocked ? "is-clickable" : "is-locked"}"
              type="button"
              data-action="goto-step"
              data-step-index="${index}"
              aria-current="${index === currentStepIndex ? "step" : "false"}"
              aria-label="Step ${index + 1}: ${escapeHtml(primaryStepLabel)}. ${escapeHtml(secondaryStepLabel)}"
              aria-disabled="${isUnlocked ? "false" : "true"}"
              ${isUnlocked ? "" : "disabled"}
            >
              <div class="step-item__index">${index + 1}</div>
              <div class="step-item__copy">
                <strong>${escapeHtml(primaryStepLabel)}</strong>
                <span>${escapeHtml(secondaryStepLabel)}</span>
              </div>
            </button>
          `;
        })
        .join("")}
    </div>
  `;

  panelHeader.innerHTML = `
    <p class="panel-header__eyebrow">${escapeHtml(currentContent.eyebrow)}</p>
    <h2>${escapeHtml(currentContent.title)}</h2>
    <p>${escapeHtml(currentContent.description)}</p>
    <div
      class="progress-rail"
      role="progressbar"
      aria-label="Form progress"
      aria-valuenow="${progressPercent}"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuetext="Step ${currentStepIndex + 1} of ${steps.length}"
    >
      <span style="width: ${progressPercent}%"></span>
    </div>
  `;

  stepBody.innerHTML = `
    ${activeErrors.length ? renderErrorBox(activeErrors) : ""}
    ${renderStepContent(currentStep)}
  `;

  if (currentStep.id === "thankyou") {
    stepFooter.hidden = true;
    stepFooter.className = "step-footer";
    stepFooter.innerHTML = "";
    return;
  }

  stepFooter.hidden = false;
  stepFooter.className = `step-footer ${currentContent.footer ? "" : "is-actions-only"}`.trim();
  stepFooter.innerHTML = `
    ${currentContent.footer ? `<div class="footer-copy">${renderRichText(currentContent.footer)}</div>` : ""}
    <div class="footer-actions">
      ${
        currentStepIndex > 0
          ? `<button class="ghost-button" type="button" data-action="prev-step" ${submissionState.status === "submitting" ? "disabled" : ""}>Back</button>`
          : ""
      }
      <button class="button" type="button" data-action="next-step" ${submissionState.status === "submitting" ? "disabled" : ""}>
        ${
          submissionState.status === "submitting"
            ? "Submitting..."
            : currentStep.id === "review"
              ? "Submit and continue"
              : "Continue"
        }
      </button>
    </div>
  `;
}

function getStepContent(step) {
  const stepId = typeof step === "string" ? step : step.id;
  if (stepId.startsWith("paymentFlow:")) {
    const useCaseValue = typeof step === "string" ? stepId.split(":").slice(1).join(":") : step.useCaseValue;
    const label = getUseCaseLabel(useCaseValue);
    return {
      eyebrow: "Payment Flow",
      title: label,
      description:
        "Provide From/Payer details, To/Payee details, user/customer side, and stored value account capabilities for this use case.",
      footer:
        "Fields marked with * are required.",
    };
  }

  return STEP_CONTENT[stepId] || {
    eyebrow: "",
    title: "",
    description: "",
    footer: "",
  };
}

function renderStepContent(step) {
  const stepId = typeof step === "string" ? step : step.id;
  if (stepId.startsWith("paymentFlow:")) {
    const useCaseValue = typeof step === "string" ? stepId.split(":").slice(1).join(":") : step.useCaseValue;
    return renderUseCasePaymentFlowPage(useCaseValue);
  }

  switch (stepId) {
    case "intro":
      return renderIntroStep();
    case "useCase":
      return renderUseCaseStep();
    case "financials":
      return renderFinancialsStep();
    case "solutions":
      return renderSolutionsStep();
    case "markets":
      return renderMarketsStep();
    case "additionalServices":
      return renderAdditionalServicesStep();
    case "accounts":
      return renderAccountsStep();
    case "review":
      return renderReviewStep();
    case "thankyou":
      return renderThankYouStep();
    default:
      return "";
  }
}

function renderIntroStep() {
  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Primary contact</h3>
        <p class="section-card__intro">Please provide the primary contact for this inquiry.</p>
        <div class="field-grid">
          ${renderTextField("First name *", "contact.firstName", state.contact.firstName, "text", "Ada", "is-half")}
          ${renderTextField("Last name *", "contact.lastName", state.contact.lastName, "text", "Lovelace", "is-half")}
          ${renderTextField("Email *", "contact.email", state.contact.email, "email", "name@company.com", "is-half")}
          ${renderTextField("WhatsApp number", "contact.whatsapp", state.contact.whatsapp, "tel", "+1 555 000 0000", "is-half")}
          ${renderCheckboxField("Are you the decision maker?", "contact.isDecisionMaker", state.contact.isDecisionMaker)}
          ${
            !state.contact.isDecisionMaker
              ? `
                ${renderTextField(
                  "Decision maker name *",
                  "contact.decisionMakerName",
                  state.contact.decisionMakerName,
                  "text",
                  "Decision maker name",
                  "is-half"
                )}
                ${renderTextField(
                  "Decision maker email",
                  "contact.decisionMakerEmail",
                  state.contact.decisionMakerEmail,
                  "email",
                  "decision.maker@company.com",
                  "is-half"
                )}
              `
              : ""
          }
        </div>
      </section>

      <section class="section-card">
        <h3>Company details</h3>
        <p class="section-card__intro">Please provide basic company information.</p>
        <div class="field-grid">
          ${renderTextField("Company name *", "company.companyName", state.company.companyName, "text", "Acme Payments", "is-half")}
          ${renderSelectField("Entity type *", "company.entityType", state.company.entityType, ENTITY_TYPES, "Choose one", "is-half")}
          ${
            state.company.entityType === "other"
              ? renderTextField(
                  "Please specify entity type *",
                  "company.entityTypeOther",
                  state.company.entityTypeOther,
                  "text",
                  "Enter entity type",
                  "is-half"
                )
              : ""
          }
          ${renderTextField("URL", "company.url", state.company.url, "url", "https://www.company.com")}
        </div>
      </section>
    </div>
  `;
}

function renderUseCaseStep() {
  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Use case categories <span class="required-star">*</span></h3>
        <p class="section-card__intro">Choose all commercial framings that apply. The next step will collect the From and To flow for the selected use cases.</p>
        ${renderMultiChoiceCards("useCase.categories", state.useCase.categories, USE_CASE_CATEGORIES)}
        ${
          state.useCase.categories.includes("other")
            ? renderTextField(
                "Please specify other use case category *",
                "useCase.other",
                state.useCase.other,
                "text",
                "",
                "is-half use-case-category-followup"
              )
            : ""
        }
        <div class="use-case-detail-grid">
          <div class="use-case-toggle-row">
            <label>${renderLabelText("Is this a new use case or corridor? *")}</label>
            ${renderSegmentedButtons("useCase.isNewUseCaseOrCorridor", state.useCase.isNewUseCaseOrCorridor, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>

          ${
            state.useCase.isNewUseCaseOrCorridor === "no"
              ? renderTextareaField(
                  "How do you handle it today? *",
                  "useCase.currentHandling",
                  state.useCase.currentHandling,
                  "Describe the current process, provider, workaround, or corridor setup."
                )
              : ""
          }

          <div class="use-case-toggle-row">
            <label>${renderLabelText("Do any of the industries involved operate in high-risk industries? *")}</label>
            ${renderSegmentedButtons("useCase.highRiskIndustries", state.useCase.highRiskIndustries, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>

          ${
            state.useCase.highRiskIndustries === "yes"
              ? renderTextField(
                  "Please specify high-risk industries *",
                  "useCase.highRiskIndustryDetails",
                  state.useCase.highRiskIndustryDetails,
                  "text",
                  "",
                  "use-case-followup-field"
                )
              : ""
          }
        </div>
      </section>
    </div>
  `;
}

function renderFinancialsStep() {
  const selectedFlowPhrase = getSelectedFlowPhrase();

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Company financials</h3>
        <p class="section-card__intro">Please provide directional ranges for the business supporting ${escapeHtml(selectedFlowPhrase)}.</p>
        <div class="field-grid">
          ${renderSelectField(
            "Annual company revenue *",
            "financials.revenueRange",
            state.financials.revenueRange,
            RANGE_OPTIONS.revenue.map((option) => ({ value: option, label: option })),
            "Select a range",
            "is-half"
          )}
          ${renderSelectField(
            "Annual volume *",
            "financials.annualVolumeRange",
            state.financials.annualVolumeRange,
            RANGE_OPTIONS.volume.map((option) => ({ value: option, label: option })),
            "Select a range",
            "is-half"
          )}
          ${renderSelectField(
            "Payment count *",
            "financials.paymentCountRange",
            state.financials.paymentCountRange,
            RANGE_OPTIONS.payments.map((option) => ({ value: option, label: option })),
            "Select a range",
            "is-half"
          )}
          <div class="field is-half">
            ${renderRangeCard(
              "Average ticket size",
              "financials.averageTicket",
              state.financials.averageTicket,
              0,
              25000,
              250,
              "currency",
              "Please provide an approximate value."
            )}
          </div>
        </div>

        <div class="range-group">
          ${renderRangeCard(
            "Expected company growth (Next 12 months)",
            "financials.companyGrowth",
            state.financials.companyGrowth,
            0,
            200,
            5,
            "percent"
          )}
        </div>
      </section>

      <section class="section-card">
        <h3>Business profile</h3>
        <p class="section-card__intro">Please confirm your current operating status for this opportunity.</p>
        <div class="field-grid">
          <div class="field is-half">
            <label>${renderLabelText("Are you currently in the flow of funds business? *")}</label>
            ${renderSegmentedButtons("role.inFlowOfFundsBusiness", state.role.inFlowOfFundsBusiness, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>

          <div class="field is-half">
            <label>${renderLabelText("Are you licensed in the countries in which you operate? *")}</label>
            ${renderSegmentedButtons("role.licensed", state.role.licensed, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>
        </div>
      </section>

      <section class="section-card">
        <h3>Commercial preferences</h3>
        <p class="section-card__intro">Please share the business model and launch timing for this opportunity.</p>
        <div class="field-grid">
          <div class="field">
            <label>${renderLabelText("Which commercial model do you prefer? *")}</label>
            ${renderSegmentedButtons("role.pricingModel", state.role.pricingModel, [
              { value: "wholesale", label: "Wholesale pricing" },
              { value: "revshare", label: "Revenue share" },
            ])}
          </div>

          ${renderSelectField(
            "What is your timeline to implement the solution? *",
            "role.implementationTimeline",
            state.role.implementationTimeline,
            IMPLEMENTATION_TIMELINE_OPTIONS,
            "Select a timeline"
          )}
        </div>
      </section>
    </div>
  `;
}

function renderSolutionsStep() {
  const flowModules = MODULES.filter((module) => module.key === "accounts");

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Stored value account interest</h3>
        <p class="section-card__intro">Select this if the opportunity includes stored balances, wallets, virtual bank accounts, stablecoin wallets, or virtual card issuance.</p>
        <div class="flow-option-list">
          ${flowModules
            .map((module) => {
              const entry = state.modules[module.key];
              const titleId = `module-${module.key}-title`;
              const descriptionId = `module-${module.key}-description`;
              return `
                <button
                  class="flow-option-card ${entry.interested ? "is-selected" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="modules"
                  data-key="${module.key}"
                  data-field="interested"
                  aria-pressed="${entry.interested ? "true" : "false"}"
                  aria-labelledby="${titleId}"
                  aria-describedby="${descriptionId}"
                >
                  <span class="flow-option-card__check" aria-hidden="true"></span>
                  <span class="flow-option-card__copy">
                    <span class="flow-option-card__title" id="${titleId}">${escapeHtml(module.label)}</span>
                    <span class="flow-option-card__description" id="${descriptionId}">${escapeHtml(module.description)}</span>
                  </span>
                </button>
              `;
            })
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderUseCasePaymentFlowPage(useCaseValue) {
  ensureUseCaseFlowsState();
  const entry = getSelectedUseCaseEntries().find((candidate) => candidate.value === useCaseValue);
  if (!entry) {
    return `
      <div class="section-stack">
        <section class="section-card">
          <p class="section-card__intro">This use case is no longer selected. Return to Use Case Categories to update your selections.</p>
        </section>
      </div>
    `;
  }

  return `
    <div class="section-stack">
      ${renderUseCasePaymentFlow(entry, { showUseCaseTitle: false })}
    </div>
  `;
}

function renderUseCasePaymentFlow(entry, options = {}) {
  const flow = entry.flow;
  const basePath = `useCaseFlows.${entry.value}`;
  const showUseCaseTitle = options.showUseCaseTitle !== false;

  return `
    ${
      showUseCaseTitle
        ? `
          <section class="section-card payment-flow-intro-card">
            <h3>${escapeHtml(entry.label)}</h3>
            <p class="section-card__intro">Provide From/Payer details, To/Payee details, user/customer side, and stored value account capabilities for this use case.</p>
          </section>
        `
        : ""
    }

    <section class="section-card payment-flow-box">
      <div class="flow-sections-stack">
        <section class="flow-detail-section">
          <div class="flow-detail-section__header">
            <span class="flow-detail-section__eyebrow">From</span>
            <p>Share who is sending funds and the source countries and currencies.</p>
          </div>

          <div class="flow-detail-grid">
            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("User type *")}</label>
                ${renderMultiSelectBubbles(`${basePath}.senderTypes`, flow.senderTypes, FLOW_USER_TYPE_OPTIONS)}
              </div>
            </div>

            <div class="flow-field-box">
              ${renderRegionMultiSelect(
                `${basePath}.senderRegion`,
                flow.senderRegion,
                "Source regions *"
              )}
            </div>

            <div class="flow-field-box">
              ${renderCountryMultiSelect(
                `${basePath}.senderCountries`,
                flow.senderCountries,
                "What specific countries are funds coming from? *"
              )}
            </div>

            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                `${basePath}.senderCurrencies`,
                flow.senderCurrencies,
                "Which currencies are the funds sent in? *",
                "",
                "Search currencies"
              )}
            </div>

            <div class="flow-field-box">
              ${renderTextField(
                "Number of sending users *",
                `${basePath}.payerCount`,
                flow.payerCount,
                "number",
                "",
                ""
              )}
            </div>

            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("Are these users actual or estimated? *")}</label>
                ${renderSegmentedButtons(`${basePath}.payerCountBasis`, flow.payerCountBasis, [
                  { value: "actual", label: "Actual" },
                  { value: "estimated", label: "Estimated" },
                ])}
              </div>
            </div>
          </div>
        </section>

        <section class="flow-detail-section">
          <div class="flow-detail-section__header">
            <span class="flow-detail-section__eyebrow">To</span>
            <p>Share who is receiving funds and the destination countries and currencies.</p>
          </div>

          <div class="flow-detail-grid">
            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("User type *")}</label>
                ${renderMultiSelectBubbles(`${basePath}.receiverTypes`, flow.receiverTypes, FLOW_USER_TYPE_OPTIONS)}
              </div>
            </div>

            <div class="flow-field-box">
              ${renderRegionMultiSelect(
                `${basePath}.receiverRegion`,
                flow.receiverRegion,
                "Destination regions *"
              )}
            </div>

            <div class="flow-field-box">
              ${renderCountryMultiSelect(
                `${basePath}.receiverCountries`,
                flow.receiverCountries,
                "What specific countries are funds going to? *"
              )}
            </div>

            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                `${basePath}.receiverCurrencies`,
                flow.receiverCurrencies,
                "Which currencies are the funds received in? *",
                "",
                "Search currencies"
              )}
            </div>

            <div class="flow-field-box">
              ${renderTextField(
                "Number of receiving users *",
                `${basePath}.payeeCount`,
                flow.payeeCount,
                "number",
                "",
                ""
              )}
            </div>

            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("Are these users actual or estimated? *")}</label>
                ${renderSegmentedButtons(`${basePath}.payeeCountBasis`, flow.payeeCountBasis, [
                  { value: "actual", label: "Actual" },
                  { value: "estimated", label: "Estimated" },
                ])}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="section-card flow-preferences-section">
      <div class="flow-preferences-section__copy">
        <h3>Use case setup</h3>
        <p>Confirm the user role and account preferences for this use case.</p>
      </div>
      <div class="flow-preferences-fields">
        <div class="field flow-role-field">
          <label>${renderLabelText("Who is your user or customer in this use case? *")}</label>
          ${renderOptionMultiSelectDropdown(`${basePath}.customerSides`, flow.customerSides, CUSTOMER_ROLE_OPTIONS, {
            emptyLabel: "Select payer or payee",
            allLabel: "Payer and payee selected",
            countLabel: "sides",
          })}
        </div>
        <div class="field stored-value-flow-field">
          <label>${renderLabelText("Stored Value Account")}</label>
          <p class="flow-preferences-field-help">Select any stored value capabilities that may support this use case, such as wallets, virtual accounts, stablecoin wallets, or virtual cards.</p>
          ${renderOptionMultiSelectDropdown(`${basePath}.storedValueAccountTypes`, flow.storedValueAccountTypes, STORED_VALUE_ACCOUNT_TYPE_OPTIONS, {
            emptyLabel: "No stored value capabilities selected",
            allLabel: "All stored value capabilities selected",
            countLabel: "capabilities",
          })}
          ${renderStoredValueAccountDefinitions()}
        </div>
      </div>
    </section>
  `;
}

function renderStoredValueAccountDefinitions() {
  return `
    <dl class="stored-value-explainer" aria-label="Stored value account definitions">
      ${STORED_VALUE_ACCOUNTS.map(
        (account) => `
          <div class="stored-value-explainer__item">
            <dt>${escapeHtml(account.label)}</dt>
            <dd>${escapeHtml(account.description)}</dd>
          </div>
        `
      ).join("")}
    </dl>
  `;
}

function renderAccountsStep() {
  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Stored value accounts <span class="required-star">*</span></h3>
        <p class="section-card__intro">Select the stored value account capabilities relevant to this opportunity.</p>
        ${renderInterestGrid(STORED_VALUE_ACCOUNTS, "storedValueAccounts")}
      </section>

      <section class="section-card">
        <h3>Account holder coverage <span class="required-star">*</span></h3>
        <p class="section-card__intro">Select where account holders are legally established or reside.</p>
        <div class="flow-split-grid">
          <section class="flow-split-card">
            <span class="flow-split-card__eyebrow">Region</span>
            <p>Choose the regions where account holders are located.</p>
            ${renderRegionMultiSelect(
              "accounts.accountHolderRegion",
              state.accounts.accountHolderRegion,
              "Account holder regions *"
            )}
          </section>

          <section class="flow-split-card">
            <span class="flow-split-card__eyebrow">Country</span>
            <p>Choose the specific account holder countries for stored value account coverage.</p>
            ${renderCountryMultiSelect(
              "accounts.accountHolderCountries",
              state.accounts.accountHolderCountries,
              "Account holder countries *"
            )}
          </section>
        </div>
      </section>
    </div>
  `;
}

function renderMarketsStep() {
  const methodsIntro = "Select the payment methods relevant to the From and To flow. Plugins and Paylinks are handled on the next page.";

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Payment methods <span class="required-star">*</span></h3>
        <p class="section-card__intro">${escapeHtml(methodsIntro)}</p>
        ${renderPaymentMethodGroups()}
      </section>

      <section class="section-card">
        <h3>${escapeHtml(FIAT_DIGITAL_CURRENCY_CONVERSIONS.label)}</h3>
        <p class="section-card__intro">${escapeHtml(FIAT_DIGITAL_CURRENCY_CONVERSIONS.description)}</p>
        ${renderFiatDigitalCurrencyConversionGroups()}
      </section>
    </div>
  `;
}

function renderPaymentMethodGroups() {
  return `
    <div class="method-group-stack">
      ${PAYMENT_METHOD_GROUPS
        .map((group) => {
          const items = getPaymentMethodItems(group.itemKeys);
          return `
            <section class="method-group" aria-labelledby="method-group-${group.key}">
              <div class="method-group__header">
                <h4 id="method-group-${group.key}">${escapeHtml(group.label)}</h4>
                <p>${escapeHtml(group.description)}</p>
              </div>
              ${renderInterestGrid(items, "paymentMethods", { compact: true, showCategory: false })}
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderFiatDigitalCurrencyConversionGroups() {
  return `
    <div class="method-group-stack">
      ${FIAT_DIGITAL_CURRENCY_CONVERSIONS.groups
        .map((group) => {
          const items = getPaymentMethodItems(group.itemKeys);
          return `
            <section class="method-group" aria-labelledby="conversion-group-${group.key}">
              <div class="method-group__header">
                <h4 id="conversion-group-${group.key}">${escapeHtml(group.label)}</h4>
                <p>${escapeHtml(group.description)}</p>
              </div>
              ${renderConversionGroupDetails(group, items)}
              ${renderInterestGrid(items, "paymentMethods", { compact: true, showCategory: false })}
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderConversionGroupDetails(group, items) {
  const detailItems = items.filter((item) => item.details);
  if (group.key !== "fx" || !detailItems.length) {
    return "";
  }

  return `
    <details class="method-group__details method-group__details--top">
      <summary>
        <span class="method-group__info-dot" aria-hidden="true">i</span>
        <span>Currency bucket details</span>
      </summary>
      <div class="method-group__details-grid">
        ${detailItems
          .map(
            (item) => `
              <section class="method-group__detail-item">
                <h5>${escapeHtml(item.label)}</h5>
                <p>${escapeHtml(item.details)}</p>
              </section>
            `
          )
          .join("")}
      </div>
    </details>
  `;
}

function getPaymentMethodItems(itemKeys) {
  return itemKeys
    .map((key) => PAYMENT_METHODS.find((item) => item.key === key))
    .filter(Boolean);
}

function renderAdditionalServicesStep() {
  const servicesIntro = "Select optional verification, risk, payer-facing, and payee-facing services for the selected use cases.";

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Additional services</h3>
        <p class="section-card__intro">${escapeHtml(servicesIntro)}</p>
        ${renderInterestGrid(ADDITIONAL_SERVICES, "additionalServices")}
      </section>
    </div>
  `;
}

function renderReviewStep() {
  const selectedUseCases = getSelectedUseCaseLabels();
  const useCaseCategoryLabel = getUseCaseCategoryLabel();
  const useCaseSummary = [
    useCaseCategoryLabel || "Not selected",
    state.useCase.isNewUseCaseOrCorridor
      ? `New use case/corridor: ${formatYesNo(state.useCase.isNewUseCaseOrCorridor)}`
      : "",
    state.useCase.isNewUseCaseOrCorridor === "no" && state.useCase.currentHandling.trim()
      ? `Today: ${state.useCase.currentHandling.trim()}`
      : "",
    state.useCase.highRiskIndustries
      ? `High-risk industries: ${formatYesNo(state.useCase.highRiskIndustries)}`
      : "",
    state.useCase.highRiskIndustries === "yes" && state.useCase.highRiskIndustryDetails.trim()
      ? `High-risk details: ${state.useCase.highRiskIndustryDetails.trim()}`
      : "",
  ].filter(Boolean).join(" | ");
  const pricingModelLabel =
    state.role.pricingModel === "revshare"
      ? "Revenue share"
      : state.role.pricingModel === "wholesale"
        ? "Wholesale pricing"
        : "Pricing model not selected";
  const implementationTimelineLabel = getImplementationTimelineLabel();
  const businessProfileSummary = [
    state.role.inFlowOfFundsBusiness ? `Flow of funds business: ${formatYesNo(state.role.inFlowOfFundsBusiness)}` : "",
    state.role.licensed ? `Licensed: ${formatYesNo(state.role.licensed)}` : "",
  ].filter(Boolean).join(" | ");
  const paymentMethodSummary = summarizeInterestGroup(PAYMENT_METHODS, state.paymentMethods, "paymentMethods");
  const servicesSummary = summarizeInterestGroup(ADDITIONAL_SERVICES, state.additionalServices, "additionalServices");
  const paymentFlowLocationSummary = hasPaymentFlowInterest()
    ? getSelectedUseCaseEntries().map((entry) => formatUseCaseFlowSummary(entry)).join(" | ")
    : "";

  return `
    <div class="section-stack">
      <section class="section-card review-summary-card">
        <h3>Summary</h3>
        <p class="section-card__intro">Please review the information provided below.</p>

        <div class="summary-grid">
          <div class="summary-card">
            <strong>Use cases</strong>
            <span>${escapeHtml(selectedUseCases.length ? formatList(selectedUseCases) : "None indicated")}</span>
          </div>
          <div class="summary-card">
            <strong>Use case details</strong>
            <span>${escapeHtml(useCaseSummary || "Not selected")}</span>
          </div>
          <div class="summary-card">
            <strong>Markets and Currencies</strong>
            <span>${escapeHtml(
              paymentFlowLocationSummary || "No countries or currencies indicated"
            )}</span>
          </div>
          <div class="summary-card">
            <strong>Payment scope</strong>
            <span>${escapeHtml(
              [
                paymentMethodSummary ? `Payment methods: ${paymentMethodSummary}` : "",
                getUseCaseStoredValueSummary() ? `Stored value by use case: ${getUseCaseStoredValueSummary()}` : "",
                servicesSummary ? `Additional services: ${servicesSummary}` : "",
              ].filter(Boolean).join(" | ") || "No payment scope selections indicated"
            )}</span>
          </div>
          <div class="summary-card">
            <strong>Commercial model</strong>
            <span>${escapeHtml(
              [
                businessProfileSummary,
                `${pricingModelLabel} with ${state.financials.revenueRange || "revenue range not provided"} revenue range`,
                `Timeline: ${implementationTimelineLabel || "not selected"}`,
              ].filter(Boolean).join(" | ")
            )}</span>
          </div>
        </div>
      </section>

      <section class="section-card">
        <h3>Additional information</h3>
        <p class="section-card__intro">Please provide any additional information that would assist our review.</p>
        ${renderTextareaField(
          "Additional context",
          "additionalInfo",
          state.additionalInfo,
          "Please provide any relevant context, implementation considerations, launch timing, priorities, or other information."
        )}
      </section>
    </div>
  `;
}

function renderThankYouStep() {
  return `
    <div class="thank-you">
      <section class="thank-you__hero">
        <h3>Thank you for completing the questionnaire.</h3>
        <p>We are excited to review your responses. If you have any questions, please reach out to Halima Sadia at <a href="mailto:halima.sadia@veem.com">halima.sadia@veem.com</a>.</p>
        ${
          submissionState.submittedAt
            ? `<p class="completion-note">Submission received on ${escapeHtml(formatSubmittedAt(submissionState.submittedAt))}.</p>`
            : ""
        }
      </section>

      <section class="section-card">
        <h3>Learn more about Veem solutions and partnership resources below.</h3>
        <div class="solution-list">
          ${SOLUTION_LINKS
            .map(
              (link) => `
                <a class="solution-link-card" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
                  <span class="solution-link-card__icon" aria-hidden="true">↗</span>
                  <div class="solution-link-card__copy">
                    <strong>${escapeHtml(link.title)}</strong>
                    <span>${escapeHtml(link.description)}</span>
                  </div>
                </a>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderErrorBox(errors) {
  const alertErrors = errors.filter((error) => shouldRenderErrorInAlert(error));
  if (!alertErrors.length) {
    return "";
  }

  const isSubmissionIssue =
    alertErrors.length === 1 &&
    (submissionState.status === "error" || alertErrors[0].toLowerCase().includes("server"));
  const preview = alertErrors.slice(0, 4).join(", ");
  const remaining = alertErrors.length > 4 ? ` and ${alertErrors.length - 4} more` : "";
  return `
    <div class="alert">
      <strong>${isSubmissionIssue ? "We could not save this submission." : "Please complete the following required fields."}</strong>
      <span>${escapeHtml(preview + remaining)}</span>
    </div>
  `;
}

function renderTextField(label, name, value, type = "text", placeholder = "", className = "") {
  const inlineError = getInlineFieldError(name);
  const inputClassName = `text-input ${inlineError ? "is-invalid" : ""}`.trim();
  return `
    <div class="field ${className}">
      <label for="${toId(name)}">${renderLabelText(label)}</label>
      <input
        class="${inputClassName}"
        id="${toId(name)}"
        name="${name}"
        type="${type}"
        value="${escapeHtml(String(value || ""))}"
        placeholder="${escapeHtml(placeholder)}"
        aria-invalid="${inlineError ? "true" : "false"}"
      />
      ${inlineError ? `<span class="field-inline-error">${escapeHtml(inlineError)}</span>` : ""}
    </div>
  `;
}

function renderCheckboxField(label, name, checked, className = "") {
  return `
    <div class="field ${className}">
      <label class="checkbox-field" for="${toId(name)}">
        <input
          id="${toId(name)}"
          name="${name}"
          type="checkbox"
          ${checked ? "checked" : ""}
        />
        <span>${renderLabelText(label)}</span>
      </label>
    </div>
  `;
}

function renderChoiceCards(path, selected, options) {
  return `
    <div class="option-grid grid auto-rows-fr md:grid-cols-2">
      ${options
        .map((option) => {
          const titleId = `${toId(path)}-${toId(option.value)}-title`;
          const descriptionId = `${toId(path)}-${toId(option.value)}-description`;
          const hasDescription = Boolean(option.description);
          return `
            <button
              class="option-card option-card--button option-card--choice ${selected === option.value ? "is-selected" : ""}"
              type="button"
              data-action="set-value"
              data-path="${path}"
              data-value="${option.value}"
              aria-pressed="${selected === option.value ? "true" : "false"}"
              aria-labelledby="${titleId}"
              ${hasDescription ? `aria-describedby="${descriptionId}"` : ""}
            >
              <span class="option-card__choice-row">
                <span class="option-card__selector" aria-hidden="true"></span>
                <span class="option-card__choice-copy">
                  <span class="option-card__title" id="${titleId}">${escapeHtml(option.label)}</span>
                  ${hasDescription ? `<span class="option-card__description" id="${descriptionId}">${escapeHtml(option.description)}</span>` : ""}
                </span>
              </span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMultiChoiceCards(path, selectedValues, options) {
  return `
    <div class="option-grid grid auto-rows-fr md:grid-cols-2">
      ${options
        .map((option) => {
          const titleId = `${toId(path)}-${toId(option.value)}-title`;
          const descriptionId = `${toId(path)}-${toId(option.value)}-description`;
          const hasDescription = Boolean(option.description);
          const selected = selectedValues.includes(option.value);
          return `
            <button
              class="option-card option-card--button option-card--choice ${selected ? "is-selected" : ""}"
              type="button"
              data-action="toggle-array"
              data-path="${path}"
              data-value="${option.value}"
              aria-pressed="${selected ? "true" : "false"}"
              aria-labelledby="${titleId}"
              ${hasDescription ? `aria-describedby="${descriptionId}"` : ""}
            >
              <span class="option-card__choice-row">
                <span class="option-card__selector" aria-hidden="true"></span>
                <span class="option-card__choice-copy">
                  <span class="option-card__title" id="${titleId}">${escapeHtml(option.label)}</span>
                  ${hasDescription ? `<span class="option-card__description" id="${descriptionId}">${escapeHtml(option.description)}</span>` : ""}
                </span>
              </span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function shouldRenderErrorInAlert(error) {
  return !error.startsWith("URL — ");
}

function getInlineFieldError(name) {
  if (name === "company.url") {
    const urlError = activeErrors.find((error) => error.startsWith("URL — "));
    return urlError ? urlError.replace(/^URL —\s*/, "") : "";
  }

  return "";
}

function renderTextareaField(label, name, value, placeholder = "") {
  return `
    <div class="field">
      <label for="${toId(name)}">${renderLabelText(label)}</label>
      <textarea
        class="textarea-input"
        id="${toId(name)}"
        name="${name}"
        placeholder="${escapeHtml(placeholder)}"
      >${escapeHtml(String(value || ""))}</textarea>
    </div>
  `;
}

function renderFileField(label, name, value, accept = "", help = "") {
  const fileName =
    value && typeof value === "object" && value.name
      ? value.name
      : "";

  return `
    <div class="field">
      <label for="${toId(name)}">${renderLabelText(label)}</label>
      <input
        class="text-input"
        id="${toId(name)}"
        name="${name}"
        type="file"
        ${accept ? `accept="${escapeHtml(accept)}"` : ""}
      />
      ${help ? `<small>${escapeHtml(help)}</small>` : ""}
      ${fileName ? `<small>Selected file: ${escapeHtml(fileName)}</small>` : ""}
    </div>
  `;
}

function renderSelectField(label, name, value, options, placeholder, className = "") {
  return `
    <div class="field ${className}">
      <label for="${toId(name)}">${renderLabelText(label)}</label>
      <select class="select-input" id="${toId(name)}" name="${name}">
        <option value="">${escapeHtml(placeholder)}</option>
        ${options
          .map(
            (option) => `
              <option value="${escapeHtml(option.value)}" ${value === option.value ? "selected" : ""}>
                ${escapeHtml(option.label)}
              </option>
            `
          )
          .join("")}
      </select>
    </div>
  `;
}

function renderSegmentedButtons(path, selected, options) {
  return `
    <div class="segmented" role="group" aria-label="${escapeHtml(path)}">
      ${options
        .map(
          (option) => `
            <button
              class="segment ${selected === option.value ? "is-active" : ""}"
              type="button"
              data-action="set-value"
              data-path="${path}"
              data-value="${option.value}"
              aria-pressed="${selected === option.value ? "true" : "false"}"
            >
              ${escapeHtml(option.label)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderMultiSelectBubbles(path, selectedValues, options) {
  return `
    <div class="segmented segmented--multi" role="group" aria-label="${escapeHtml(path)}">
      ${options
        .map((option) => {
          const isSelected = selectedValues.includes(option.value);
          return `
            <button
              class="segment ${isSelected ? "is-active" : ""}"
              type="button"
              data-action="toggle-array"
              data-path="${path}"
              data-value="${option.value}"
              aria-pressed="${isSelected ? "true" : "false"}"
            >
              ${escapeHtml(option.label)}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderDescriptiveSegmentedButtons(path, selected, options) {
  return `
    <div class="option-grid option-grid--compact">
      ${options
        .map((option) => {
          const titleId = `${toId(path)}-${toId(option.value)}-title`;
          const descriptionId = `${toId(path)}-${toId(option.value)}-description`;
          return `
            <button
              class="option-card option-card--button option-card--compact option-card--choice ${selected === option.value ? "is-selected" : ""}"
              type="button"
              data-action="set-value"
              data-path="${path}"
              data-value="${option.value}"
              aria-pressed="${selected === option.value ? "true" : "false"}"
              aria-labelledby="${titleId}"
              aria-describedby="${descriptionId}"
            >
              <span class="option-card__choice-row">
                <span class="option-card__selector" aria-hidden="true"></span>
                <span class="option-card__choice-copy">
                  <span class="option-card__title" id="${titleId}">${escapeHtml(option.label)}</span>
                  <span class="option-card__description" id="${descriptionId}">${escapeHtml(option.description)}</span>
                </span>
              </span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderChipSelector(path, selectedValues, options) {
  return renderOptionMultiSelectDropdown(path, selectedValues, options, {
    emptyLabel: "Select user types",
    allLabel: "All user types selected",
    countLabel: "types",
  });
}

function renderRegionMultiSelect(path, selectedValues, title = "") {
  const regionOptions = getRegionOptionsForPath(path);
  const allSelected = regionOptions.every((option) => selectedValues.includes(option.value));

  return `
    <div class="country-select country-select--regions">
      <div class="country-select__header">
        <label class="country-select__label">${renderLabelText(title)}</label>
      </div>
      ${renderOptionMultiSelectDropdown(path, selectedValues, regionOptions, {
        emptyLabel: "Select regions",
        allLabel: "All regions selected",
        countLabel: "regions",
        leadingAction: {
          label: "All regions",
          action: "set-region-selection",
          mode: allSelected ? "clear" : "all",
          selected: allSelected,
        },
      })}
    </div>
  `;
}

function renderOptionMultiSelectDropdown(path, selectedValues, options, config = {}) {
  const summaryLabel = getOptionMultiSelectSummary(
    options,
    selectedValues,
    config.emptyLabel || "Select options",
    config.allLabel || "All selected"
  );

  return `
    <details class="country-dropdown country-dropdown--simple" data-selection-dropdown="${escapeHtml(path)}">
      <summary class="country-dropdown__summary">
        <span class="country-dropdown__summary-text">${escapeHtml(summaryLabel)}</span>
        <span class="country-dropdown__caret" aria-hidden="true"></span>
      </summary>
      <div class="country-dropdown__panel">
        <div class="country-dropdown__options" aria-label="${escapeHtml(config.emptyLabel || "Options")}">
          ${
            config.leadingAction
              ? `
                <button
                  class="country-dropdown__option ${config.leadingAction.selected ? "is-active" : ""}"
                  type="button"
                  data-action="${escapeHtml(config.leadingAction.action)}"
                  data-path="${escapeHtml(path)}"
                  data-mode="${escapeHtml(config.leadingAction.mode)}"
                  aria-pressed="${config.leadingAction.selected ? "true" : "false"}"
                >
                  <span class="country-option__box" aria-hidden="true"></span>
                  <span>${escapeHtml(config.leadingAction.label)}</span>
                </button>
              `
              : ""
          }
          ${options
            .map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return `
                <button
                  class="country-dropdown__option ${isSelected ? "is-active" : ""}"
                  type="button"
                  data-action="toggle-array"
                  data-path="${escapeHtml(path)}"
                  data-value="${escapeHtml(option.value)}"
                  aria-pressed="${isSelected ? "true" : "false"}"
                >
                  <span class="country-option__box" aria-hidden="true"></span>
                  <span>${escapeHtml(option.label)}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
    </details>
  `;
}

function getOptionMultiSelectSummary(options, selectedValues, emptyLabel, allLabel) {
  if (!selectedValues.length) {
    return emptyLabel;
  }

  if (options.length && options.every((option) => selectedValues.includes(option.value))) {
    return allLabel;
  }

  const labels = selectedValues
    .map((value) => options.find((option) => option.value === value)?.label || value)
    .filter(Boolean);
  const visibleLabels = labels.slice(0, 2);
  const extraCount = labels.length - visibleLabels.length;

  return extraCount > 0 ? `${visibleLabels.join(", ")} + ${extraCount} more` : visibleLabels.join(", ");
}

function renderCountryMultiSelect(path, selectedValues, title = "") {
  const definition = getSearchSelectorDefinition(path);
  const options = definition.options;
  const selectedCountryValues = selectedValues.filter((value) => value !== OTHER_COUNTRY_VALUE);
  const selectedTotal = selectedCountryValues.length;
  const summaryLabel = getCountrySelectionSummary(path, selectedCountryValues, options.length);
  const countLabel = selectedTotal
    ? `${selectedTotal} selected`
    : options.length
      ? `${options.length} available`
      : "No countries";

  return `
    <div class="country-select country-select--countries">
      <div class="country-select__header">
        <label class="country-select__label">${renderLabelText(title)}</label>
      </div>

      ${
        definition.disabled
          ? `<p class="country-select__placeholder">${escapeHtml(definition.emptySelectionLabel)}</p>`
          : `
            <details class="country-dropdown" data-country-dropdown="${escapeHtml(path)}">
              <summary class="country-dropdown__summary">
                <span class="country-dropdown__summary-text">${escapeHtml(summaryLabel)}</span>
                <span class="country-dropdown__summary-count">${escapeHtml(countLabel)}</span>
                <span class="country-dropdown__caret" aria-hidden="true"></span>
              </summary>
              <div class="country-dropdown__panel">
                <input
                  class="text-input country-dropdown__search"
                  id="${selectorInputId(path)}"
                  type="text"
                  name="selector-search:${path}"
                  data-selector-search="${path}"
                  value="${escapeHtml(getSelectorQuery(path))}"
                  placeholder="Search countries"
                  autocomplete="off"
                  spellcheck="false"
                />
                ${renderCountryDropdownOptions(path, options, selectedCountryValues)}
              </div>
            </details>
          `
      }
    </div>
  `;
}

function getCountrySelectionSummary(path, selectedValues, availableCount) {
  if (!selectedValues.length) {
    return "No countries selected";
  }

  if (availableCount && selectedValues.length === availableCount) {
    return `All ${availableCount} countries selected`;
  }

  const selectedLabels = selectedValues.slice(0, 2).map((value) => labelForSearchValue(path, value));
  const extraCount = selectedValues.length - selectedLabels.length;
  const label = selectedLabels.join(", ");

  return extraCount > 0 ? `${label} + ${extraCount} more` : label;
}

function renderCountryDropdownOptions(path, options, selectedValues) {
  const query = getSelectorQuery(path).trim().toLowerCase();
  const visibleOptions = getVisibleCountryOptions(options, query);
  const groups = COUNTRY_REGION_OPTIONS.map((region) => ({
    ...region,
    options: visibleOptions.filter((option) => countryLookup.get(option.value)?.region === region.value),
  })).filter((group) => group.options.length);
  const allAvailableSelected = Boolean(options.length) && options.every((option) => selectedValues.includes(option.value));

  return `
    <div class="country-dropdown__options" data-country-scroll="${escapeHtml(path)}" aria-label="Country options">
      ${
        groups.length
          ? `
              <button
                class="country-dropdown__option country-dropdown__option--all ${allAvailableSelected ? "is-active" : ""}"
                type="button"
                data-action="set-country-selection"
                data-path="${escapeHtml(path)}"
                data-mode="${allAvailableSelected ? "clear" : "all"}"
                aria-pressed="${allAvailableSelected ? "true" : "false"}"
              >
                <span class="country-option__box" aria-hidden="true"></span>
                <span>All countries</span>
                <span class="country-dropdown__meta">${options.length}</span>
              </button>
              ${groups
              .map(
                (group) => `
                  <div class="country-dropdown__group">
                    <div class="country-dropdown__group-title">
                      <span>${escapeHtml(group.label)}</span>
                      <span>${group.options.length}</span>
                    </div>
                    ${group.options
                      .map((option) => {
                        const isSelected = selectedValues.includes(option.value);
                        return `
                          <button
                            class="country-dropdown__option ${isSelected ? "is-active" : ""}"
                            type="button"
                            data-action="toggle-array"
                            data-path="${path}"
                            data-value="${option.value}"
                            aria-pressed="${isSelected ? "true" : "false"}"
                          >
                            <span class="country-option__box" aria-hidden="true"></span>
                            <span>${escapeHtml(option.label)}</span>
                            ${option.meta ? `<span class="country-dropdown__meta">${escapeHtml(option.meta)}</span>` : ""}
                          </button>
                        `;
                      })
                      .join("")}
                  </div>
                `
              )
              .join("")}
            `
          : `<div class="country-dropdown__empty">No matches found.</div>`
      }
    </div>
  `;
}

function getVisibleCountryOptions(options, query) {
  return options.filter((option) => {
    if (!query) {
      return true;
    }

    const haystack = String(option.keywords || option.label || option.value).toLowerCase();
    return haystack.includes(query);
  });
}

function renderCountryOtherInput(label, name, value, placeholder = "") {
  return `
    <div class="country-select__other">
      <label for="${toId(name)}">${renderLabelText(label)}</label>
      <input
        class="text-input country-select__other-input"
        id="${toId(name)}"
        name="${name}"
        type="text"
        value="${escapeHtml(String(value || ""))}"
        placeholder="${escapeHtml(placeholder)}"
      />
    </div>
  `;
}

function renderSearchMultiSelect(path, selectedValues, title = "", intro = "", placeholder = "") {
  const definition = getSearchSelectorDefinition(path);
  const query = getSelectorQuery(path);
  const suggestions = getSearchSuggestions(path, query, selectedValues);
  const inputId = selectorInputId(path);
  const descriptionId = intro ? `${inputId}-description` : "";
  const isDisabled = Boolean(definition.disabled);

  return `
    <div class="search-select">
      ${
        title || intro
          ? `
            <div class="search-select__header">
              <div>
                ${title ? `<label class="search-select__label" for="${inputId}">${renderLabelText(title)}</label>` : ""}
                ${intro ? `<p id="${descriptionId}">${escapeHtml(intro)}</p>` : ""}
              </div>
            </div>
          `
          : ""
      }

      <div class="search-select__input-wrap">
        <input
          class="text-input search-select__input"
          id="${inputId}"
          type="text"
          name="selector-search:${path}"
          data-selector-search="${path}"
          value="${escapeHtml(query)}"
          placeholder="${escapeHtml(placeholder || definition.placeholder)}"
          autocomplete="off"
          spellcheck="false"
          ${descriptionId ? `aria-describedby="${descriptionId}"` : ""}
          ${isDisabled ? "disabled" : ""}
        />

        ${
          query.trim()
            ? `
              <div class="search-select__suggestions">
                ${
                  suggestions.length
                    ? suggestions
                        .map(
                          (option) => `
                            <button
                              class="search-select__suggestion"
                              type="button"
                              data-action="add-selector-option"
                              data-path="${path}"
                              data-value="${option.value}"
                            >
                              <span>${escapeHtml(option.label)}</span>
                              ${option.meta ? `<span class="search-select__suggestion-meta">${escapeHtml(option.meta)}</span>` : ""}
                            </button>
                          `
                        )
                        .join("")
                    : `<div class="search-select__empty">No matches found.</div>`
                }
              </div>
            `
            : ""
        }
      </div>

      ${renderSearchSelectedValues(path, selectedValues, definition)}
    </div>
  `;
}

function renderSearchSelectedValues(path, selectedValues, definition) {
  if (!selectedValues.length) {
    return definition.emptySelectionLabel
      ? `<div class="search-select__tags"><span class="search-select__placeholder">${escapeHtml(definition.emptySelectionLabel)}</span></div>`
      : "";
  }

  const tagsMarkup = selectedValues
    .map((value) => {
      const label = labelForSearchValue(path, value);
      return `
        <button
          class="search-tag"
          type="button"
          data-action="remove-selector-option"
          data-path="${path}"
          data-value="${value}"
          aria-label="Remove ${escapeHtml(label)}"
        >
          <span>${escapeHtml(label)}</span>
          <span class="search-tag__remove" aria-hidden="true">x</span>
        </button>
      `;
    })
    .join("");

  return `<div class="search-select__tags">${tagsMarkup}</div>`;
}

function renderLabelText(label) {
  return renderRichText(label);
}

function renderRichText(text) {
  return escapeHtml(text)
    .replace(/ \*/g, '&nbsp;<span class="required-star">*</span>')
    .replace(/\*/g, '<span class="required-star">*</span>');
}

function renderRangeCard(label, name, value, min, max, step, format, help = "") {
  const inputId = toId(name);
  return `
    <div class="range-card">
      <div class="range-card__header">
        <label class="range-card__label" for="${inputId}">${escapeHtml(label)}</label>
        <span class="range-card__value" data-output="${name}" data-format="${format}">
          ${escapeHtml(formatOutput(value, format))}
        </span>
      </div>
      <input
        class="range-input"
        id="${inputId}"
        type="range"
        name="${name}"
        min="${min}"
        max="${max}"
        step="${step}"
        value="${value}"
        data-format="${format}"
      />
      ${help ? `<small>${escapeHtml(help)}</small>` : ""}
    </div>
  `;
}

function renderInterestGrid(items, storeKey, options = {}) {
  const gridClassName = options.compact
    ? "option-grid option-grid--compact"
    : "option-grid grid auto-rows-fr md:grid-cols-2";
  const showCategory = options.showCategory !== false;

  return `
    <div class="${gridClassName}">
      ${items
        .map((item) => {
          const entry = state[storeKey][item.key];
          const disabled = isInterestItemDisabled(storeKey, item.key);
          const current = !disabled && entry.current;
          const interested = !disabled && entry.interested;
          const selected = current || interested;
          const titleId = `${storeKey}-${item.key}-title`;
          const descriptionId = `${storeKey}-${item.key}-description`;

          return `
            <article class="option-card ${options.compact ? "option-card--compact" : ""} ${selected ? "is-selected" : ""} ${disabled ? "is-disabled" : ""}" role="group" aria-labelledby="${titleId}" aria-describedby="${descriptionId}" ${disabled ? 'aria-disabled="true"' : ""}>
              ${showCategory && item.category ? `<span class="option-card__category">${escapeHtml(item.category)}</span>` : ""}
              <h4 id="${titleId}">${escapeHtml(item.shortLabel || item.label)}</h4>
              <p id="${descriptionId}">${escapeHtml(item.description)}</p>
              ${disabled ? `<p class="option-card__status">${escapeHtml(getInterestItemDisabledStatus(storeKey, item.key))}</p>` : ""}
              <div class="toggle-pair">
                <button
                  class="pill-button ${current ? "is-active" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="${storeKey}"
                  data-key="${item.key}"
                  data-field="current"
                  aria-pressed="${current ? "true" : "false"}"
                  ${disabled ? "disabled" : ""}
                >
                  Current use
                </button>
                <button
                  class="pill-button ${interested ? "is-active" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="${storeKey}"
                  data-key="${item.key}"
                  data-field="interested"
                  aria-pressed="${interested ? "true" : "false"}"
                  ${disabled ? "disabled" : ""}
                >
                  Interested in Veem
                </button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

async function handleClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.action;

  if (action === "goto-step") {
    const targetStepIndex = Number(button.dataset.stepIndex);
    if (targetStepIndex > maxUnlockedStepIndex) {
      return;
    }
    activeErrors = [];
    currentStepIndex = targetStepIndex;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "prev-step") {
    activeErrors = [];
    currentStepIndex = Math.max(0, currentStepIndex - 1);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "next-step") {
    const steps = buildSteps();
    const currentStep = steps[currentStepIndex];
    const errors = shouldBypassRequiredFields() ? [] : currentStep.validate();

    if (errors.length) {
      activeErrors = errors;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentStep.id === "review") {
      const submissionError = await submitCurrentResponse();
      if (submissionError) {
        activeErrors = [submissionError];
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    activeErrors = [];
    currentStepIndex = Math.min(currentStepIndex + 1, steps.length - 1);
    maxUnlockedStepIndex = Math.max(maxUnlockedStepIndex, currentStepIndex);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "set-value") {
    setValueByPath(state, button.dataset.path, button.dataset.value);
    syncUseCaseState(button.dataset.path);
    syncHighRiskIndustryState(button.dataset.path);
    syncRegionCountryState(button.dataset.path);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "toggle-array") {
    toggleArrayValue(button.dataset.path, button.dataset.value);
    syncCustomerSidesState(button.dataset.path);
    syncUseCaseState(button.dataset.path);
    syncRegionCountryState(button.dataset.path);
    syncHighRiskIndustryState(button.dataset.path);
    syncProductAvailabilityState();
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "set-region-selection") {
    setRegionSelection(button.dataset.path, button.dataset.mode === "all");
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "set-country-selection") {
    setCountrySelection(button.dataset.path, button.dataset.mode === "all");
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "add-selector-option") {
    addArrayValue(button.dataset.path, button.dataset.value);
    clearSelectorQuery(button.dataset.path);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    focusSelectorInput(button.dataset.path);
    return;
  }

  if (action === "remove-selector-option") {
    removeArrayValue(button.dataset.path, button.dataset.value);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    focusSelectorInput(button.dataset.path);
    return;
  }

  if (action === "toggle-interest") {
    const { store, key, field } = button.dataset;
    if (isInterestItemDisabled(store, key)) {
      return;
    }
    state[store][key][field] = !state[store][key][field];
    syncProductAvailabilityState();
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "restart") {
    window.location.reload();
  }
}

function handleBlur(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;

  const existing = target.parentElement.querySelector(".field-inline-error");
  if (existing) existing.remove();
  target.classList.remove("is-invalid");

  let errorMsg = "";

  if (target.name === "contact.email" || target.name === "contact.decisionMakerEmail") {
    const val = target.value.trim();
    if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      errorMsg = "Please enter a valid email address.";
    }
  }

  if (target.name === "contact.whatsapp") {
    const val = target.value.trim();
    if (val && !/^\+?[\d\s\-().]{7,20}$/.test(val)) {
      errorMsg = "Please enter a valid phone number (e.g. +1 555 000 0000).";
    }
  }

  if (target.name === "company.url") {
    const val = target.value.trim();
    errorMsg = getWebsiteUrlError(val);
  }

  if (errorMsg) {
    const span = document.createElement("span");
    span.className = "field-inline-error";
    span.textContent = errorMsg;
    target.classList.add("is-invalid");
    target.insertAdjacentElement("afterend", span);
  }
}

function handleInput(event) {
  const target = event.target;

  if (!target.name) {
    return;
  }

  if (target.dataset.selectorSearch) {
    selectorUiState[target.dataset.selectorSearch] = target.value;
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (target instanceof HTMLInputElement && target.type === "file") {
    const file = target.files && target.files[0]
      ? {
          name: target.files[0].name,
          size: target.files[0].size,
          type: target.files[0].type,
          lastModified: target.files[0].lastModified,
        }
      : null;
    setValueByPath(state, target.name, file);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (target instanceof HTMLInputElement && target.type === "checkbox") {
    setValueByPath(state, target.name, target.checked);
    syncContactState(target.name);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  let value = target.value;
  if (target.type === "range" || target.type === "number") {
    value = target.value === "" ? "" : Number(target.value);
  }
  if (target.name === "contact.whatsapp") {
    value = target.value.replace(/[^\d+\s\-().]/g, "");
    target.value = value;
  }

  setValueByPath(state, target.name, value);
  syncRegionCountryState(target.name);
  if (target.name === "company.entityType" && value !== "other") {
    state.company.entityTypeOther = "";
  }
  markSubmissionDirty();

  if (
    target.name === "company.entityType" ||
    getRegionSelectorCountryPath(target.name)
  ) {
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (target.type === "range") {
    updateRangeOutput(target.name, value, target.dataset.format);
  }

  // Clear inline validation for fields while the user is correcting them.
  if (target.name === "contact.email" || target.name === "contact.decisionMakerEmail" || target.name === "contact.whatsapp" || target.name === "company.url") {
    const existing = target.parentElement && target.parentElement.querySelector(".field-inline-error");
    if (existing) existing.remove();
    target.classList.remove("is-invalid");
  }

  activeErrors = [];
}

function handleKeyDown(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || !target.dataset.selectorSearch) {
    return;
  }

  const path = target.dataset.selectorSearch;
  const query = target.value.trim();

  if (event.key === "Enter") {
    const suggestions = getSearchSuggestions(path, query, getValueByPath(state, path));
    if (suggestions.length) {
      event.preventDefault();
      addArrayValue(path, suggestions[0].value);
      clearSelectorQuery(path);
      markSubmissionDirty();
      activeErrors = [];
      rerenderPreservingPosition();
      focusSelectorInput(path);
    }
    return;
  }

  if (event.key === "Backspace" && !query) {
    const selectedValues = getValueByPath(state, path);
    if (selectedValues.length) {
      event.preventDefault();
      removeArrayValue(path, selectedValues[selectedValues.length - 1]);
      markSubmissionDirty();
      activeErrors = [];
      rerenderPreservingPosition();
      focusSelectorInput(path);
    }
  }
}

function handleGlobalKeyDown(event) {
  if (
    event.key.toLowerCase() !== LAST_PAGE_TEST_SHORTCUT.key ||
    event.altKey !== LAST_PAGE_TEST_SHORTCUT.altKey ||
    event.shiftKey !== LAST_PAGE_TEST_SHORTCUT.shiftKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.repeat
  ) {
    return;
  }

  event.preventDefault();
  toggleLastPageTesting();
}

function handleDocumentClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const activeDropdown = target.closest("[data-country-dropdown]");
  const activeDropdownPath = activeDropdown?.getAttribute("data-country-dropdown") || "";
  const activeSelectionDropdown = target.closest("[data-selection-dropdown]");
  const activeSelectionDropdownPath = activeSelectionDropdown?.getAttribute("data-selection-dropdown") || "";
  document.querySelectorAll("[data-country-dropdown][open]").forEach((dropdown) => {
    if (
      dropdown instanceof HTMLDetailsElement &&
      dropdown.dataset.countryDropdown !== activeDropdownPath
    ) {
      dropdown.open = false;
    }
  });
  document.querySelectorAll("[data-selection-dropdown][open]").forEach((dropdown) => {
    if (
      dropdown instanceof HTMLDetailsElement &&
      dropdown.dataset.selectionDropdown !== activeSelectionDropdownPath
    ) {
      dropdown.open = false;
    }
  });
}

function applyInitialTestingMode() {
  if (!isLastPageTestingRequested()) {
    return;
  }

  isLastPageTestingEnabled = true;
  const testingSteps = buildSteps();
  currentStepIndex = testingSteps.findIndex((step) => step.id === "thankyou");
  maxUnlockedStepIndex = testingSteps.length - 1;
}

function isLastPageTestingRequested() {
  const params = new URLSearchParams(window.location.search);
  const testMode = (params.get("test") || "").trim().toLowerCase();
  return LAST_PAGE_TEST_QUERY_VALUES.has(testMode);
}

function getWebsiteUrlError(value) {
  if (!value || !value.trim()) {
    return "";
  }

  return isValidWebsiteUrl(value) ? "" : "Please enter a valid website URL or domain.";
}

function isValidWebsiteUrl(value) {
  const trimmedValue = value.trim();
  if (!trimmedValue || /\s/.test(trimmedValue)) {
    return false;
  }

  const normalizedValue = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;

  try {
    const parsed = new URL(normalizedValue);
    return (
      (parsed.protocol === "http:" || parsed.protocol === "https:") &&
      isValidWebsiteHostname(parsed.hostname)
    );
  } catch {
    return false;
  }
}

function isValidWebsiteHostname(hostname) {
  if (!hostname || hostname.length > 253) {
    return false;
  }

  const labels = hostname.split(".");
  if (labels.length < 2) {
    return false;
  }

  return labels.every((label) => /^[a-zA-Z0-9-]{1,63}$/.test(label) && !label.startsWith("-") && !label.endsWith("-"));
}

function toggleLastPageTesting() {
  const nextTestingState = !isLastPageTestingEnabled;
  const steps = buildSteps();

  if (nextTestingState) {
    testingReturnStepIndex = Math.min(currentStepIndex, Math.max(0, steps.length - 1));
    isLastPageTestingEnabled = true;
    const testingSteps = buildSteps();
    currentStepIndex = testingSteps.findIndex((step) => step.id === "thankyou");
    maxUnlockedStepIndex = testingSteps.length - 1;
    activeErrors = [];
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.info("Last-page testing enabled. Press Alt+Shift+T again to return to the form.");
    return;
  }

  isLastPageTestingEnabled = false;
  const normalSteps = buildSteps();
  const lastRegularStepIndex = Math.max(
    0,
    normalSteps.findIndex((step) => step.id === "thankyou") - 1
  );
  currentStepIndex = Math.min(testingReturnStepIndex, lastRegularStepIndex);
  maxUnlockedStepIndex = Math.min(maxUnlockedStepIndex, lastRegularStepIndex);
  activeErrors = [];
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.info("Last-page testing disabled.");
}

function validateIntro() {
  const errors = [];

  if (!state.contact.firstName.trim()) {
    errors.push("First name");
  }
  if (!state.contact.lastName.trim()) {
    errors.push("Last name");
  }
  if (!state.contact.email.trim()) {
    errors.push("Email");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.contact.email.trim())) {
    errors.push("Email — please enter a valid email address");
  }
  if (state.contact.whatsapp.trim() && !/^\+?[\d\s\-().]{7,20}$/.test(state.contact.whatsapp.trim())) {
    errors.push("WhatsApp number — please enter a valid phone number (e.g. +1 555 000 0000)");
  }
  if (!state.contact.isDecisionMaker && !state.contact.decisionMakerName.trim()) {
    errors.push("Decision maker name");
  }
  if (
    !state.contact.isDecisionMaker &&
    state.contact.decisionMakerEmail.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.contact.decisionMakerEmail.trim())
  ) {
    errors.push("Decision maker email — please enter a valid email address");
  }
  if (!state.company.companyName.trim()) {
    errors.push("Company name");
  }
  if (!state.company.entityType) {
    errors.push("Entity type");
  }
  if (state.company.entityType === "other" && !state.company.entityTypeOther.trim()) {
    errors.push("Please specify entity type");
  }
  const websiteUrlError = getWebsiteUrlError(state.company.url);
  if (websiteUrlError) {
    errors.push(`URL — ${websiteUrlError}`);
  }

  return errors;
}

function validateUseCase() {
  const errors = [];

  if (!state.useCase.categories.length) {
    errors.push("Use case categories");
  }
  if (state.useCase.categories.includes("other") && !state.useCase.other.trim()) {
    errors.push("Please specify other use case category");
  }
  if (!state.useCase.isNewUseCaseOrCorridor) {
    errors.push("New use case or corridor status");
  }
  if (state.useCase.isNewUseCaseOrCorridor === "no" && !state.useCase.currentHandling.trim()) {
    errors.push("How do you handle it today?");
  }
  if (!state.useCase.highRiskIndustries) {
    errors.push("High-risk industry status");
  }
  if (state.useCase.highRiskIndustries === "yes" && !state.useCase.highRiskIndustryDetails.trim()) {
    errors.push("High-risk industry details");
  }

  return errors;
}

function validateFinancials() {
  const errors = [];

  if (!state.financials.revenueRange) {
    errors.push("Annual company revenue");
  }
  if (!state.financials.annualVolumeRange) {
    errors.push("Annual volume");
  }
  if (!state.financials.paymentCountRange) {
    errors.push("Payment count");
  }
  if (!state.role.inFlowOfFundsBusiness) {
    errors.push("Flow of funds business status");
  }
  if (!state.role.licensed) {
    errors.push("Licensing status");
  }
  if (!state.role.pricingModel) {
    errors.push("Preferred pricing model");
  }
  if (!state.role.implementationTimeline) {
    errors.push("Implementation timeline");
  }

  return errors;
}

function validateSolutions() {
  return [];
}

function validateMarkets() {
  const errors = [];

  if (!hasInterestSelection(PAYMENT_METHODS, state.paymentMethods)) {
    errors.push("Payment method interest");
  }

  return errors;
}

function validateAdditionalServices() {
  return [];
}

function validateAccounts() {
  const errors = [];

  if (!state.accounts.accountHolderRegion.length) {
    errors.push("Account holder regions");
  }
  if (!state.accounts.accountHolderCountries.length) {
    errors.push("Account holder countries");
  }
  if (isOtherCountrySelected("accounts.accountHolderCountries") && !state.accounts.accountHolderCountriesOther.trim()) {
    errors.push("Specify other account holder countries");
  }
  if (!hasInterestSelection(STORED_VALUE_ACCOUNTS, state.storedValueAccounts)) {
    errors.push("Stored value account option");
  }

  return errors;
}

function validatePaymentFlow() {
  const errors = getSelectedUseCaseEntries().flatMap((entry) => validateUseCaseFlowEntry(entry));

  return errors;
}

function validateUseCasePaymentFlow(useCaseValue) {
  const entry = getSelectedUseCaseEntries().find((candidate) => candidate.value === useCaseValue);
  return entry ? validateUseCaseFlowEntry(entry) : [];
}

function validateUseCaseFlowEntry({ label, flow }) {
  const errors = [];

  if (!flow.customerSides.length) {
    errors.push(`${label} — user/customer side`);
  }
  if (!flow.senderTypes.length) {
    errors.push(`${label} — payer type`);
  }
  if (!flow.receiverTypes.length) {
    errors.push(`${label} — payee type`);
  }
  if (!flow.payerCount) {
    errors.push(`${label} — number of payers`);
  }
  if (!flow.payerCountBasis) {
    errors.push(`${label} — payer count basis`);
  }
  if (!flow.payeeCount) {
    errors.push(`${label} — number of payees`);
  }
  if (!flow.payeeCountBasis) {
    errors.push(`${label} — payee count basis`);
  }
  if (!flow.senderRegion.length) {
    errors.push(`${label} — payer regions`);
  }
  if (!flow.senderCountries.length) {
    errors.push(`${label} — payer countries`);
  }
  if (flow.senderCountries.includes(OTHER_COUNTRY_VALUE) && !flow.senderCountriesOther.trim()) {
    errors.push(`${label} — specify other payer countries`);
  }
  if (!flow.senderCurrencies.length) {
    errors.push(`${label} — payer currencies`);
  }
  if (!flow.receiverRegion.length) {
    errors.push(`${label} — payee regions`);
  }
  if (!flow.receiverCountries.length) {
    errors.push(`${label} — payee countries`);
  }
  if (flow.receiverCountries.includes(OTHER_COUNTRY_VALUE) && !flow.receiverCountriesOther.trim()) {
    errors.push(`${label} — specify other payee countries`);
  }
  if (!flow.receiverCurrencies.length) {
    errors.push(`${label} — payee currencies`);
  }

  return errors;
}

function hasInterestSelection(items, groupState) {
  return items.some((item) => groupState[item.key]?.current || groupState[item.key]?.interested);
}

function isModuleSelected(moduleKey) {
  const module = state.modules[moduleKey];
  return module.current || module.interested;
}

function hasPaymentFlowInterest() {
  return state.useCase.categories.length > 0;
}

function getSelectedModuleLabels() {
  return MODULES.filter((module) => isModuleSelected(module.key)).map((module) => module.label);
}

function getSelectedFlowLabels() {
  return MODULES.filter(
    (module) => FLOW_MODULE_KEYS.includes(module.key) && isModuleSelected(module.key)
  ).map((module) => module.label);
}

function getSelectedUseCaseLabels() {
  return state.useCase.categories
    .map((value) => getUseCaseLabel(value))
    .filter(Boolean);
}

function getUseCaseLabel(value) {
  const label = labelForOption(USE_CASE_CATEGORIES, value) || value;
  if (value === "other") {
    return state.useCase.other.trim() || "Custom Use Case";
  }

  return label;
}

function getSelectedUseCaseEntries() {
  ensureUseCaseFlowsState();
  return state.useCase.categories.map((value) => ({
    value,
    label: getUseCaseLabel(value),
    flow: state.useCaseFlows[value],
  }));
}

function ensureUseCaseFlowsState() {
  state.useCase.categories.forEach((value) => {
    if (!state.useCaseFlows[value]) {
      state.useCaseFlows[value] = createUseCaseFlowState();
    }

    normalizeUseCaseFlowState(state.useCaseFlows[value]);
  });

  Object.keys(state.useCaseFlows).forEach((value) => {
    if (!state.useCase.categories.includes(value)) {
      delete state.useCaseFlows[value];
    }
  });
}

function normalizeUseCaseFlowState(flow) {
  const defaults = createUseCaseFlowState();

  Object.entries(defaults).forEach(([key, defaultValue]) => {
    if (flow[key] === undefined) {
      flow[key] = Array.isArray(defaultValue) ? [...defaultValue] : defaultValue;
    }
  });

  if (!Array.isArray(flow.customerSides)) {
    flow.customerSides = [];
  }

  if (flow.customerRole && !flow.customerSides.length) {
    if (flow.customerRole === "both") {
      flow.customerSides = ["payer", "payee"];
    } else if (CUSTOMER_ROLE_OPTIONS.some((option) => option.value === flow.customerRole)) {
      flow.customerSides = [flow.customerRole];
    }
  }

  flow.customerSides = [...new Set(flow.customerSides)].filter((value) =>
    CUSTOMER_ROLE_OPTIONS.some((option) => option.value === value)
  );
  flow.customerRole = flow.customerSides.length === 2 ? "both" : flow.customerSides[0] || "";
}

function syncCustomerSidesState(path) {
  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field !== "customerSides") {
    return;
  }

  normalizeUseCaseFlowState(state.useCaseFlows[parsed.useCaseKey]);
}

function getSelectedFlowPhrase() {
  const useCaseLabels = getSelectedUseCaseLabels().map((label) => label.toLowerCase());
  const solutionLabels = getSelectedFlowLabels().map((label) => label.toLowerCase());
  return formatList([...useCaseLabels, ...solutionLabels]) || "your selected use cases";
}

function formatList(values) {
  if (!values.length) {
    return "";
  }

  if (values.length === 1) {
    return values[0];
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  return `${values.slice(0, -1).join(", ")}, and ${values[values.length - 1]}`;
}

function countSelectedItems(group) {
  return Object.values(group).filter((item) => item.current || item.interested).length;
}

function isOtherCountrySelected(path) {
  return getValueByPath(state, path).includes(OTHER_COUNTRY_VALUE);
}

function setValueByPath(object, path, value) {
  const segments = path.split(".");
  const last = segments.pop();
  const target = segments.reduce((accumulator, segment) => accumulator[segment], object);
  target[last] = value;
}

function getValueByPath(object, path) {
  return path.split(".").reduce((accumulator, segment) => accumulator[segment], object);
}

function toggleArrayValue(path, value) {
  const list = getValueByPath(state, path);
  const index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(value);
  }
  syncOtherCountryState(path);
  syncCurrenciesForCountrySelection(path);
}

function addArrayValue(path, value) {
  const list = getValueByPath(state, path);
  if (!list.includes(value)) {
    list.push(value);
  }
  syncCurrenciesForCountrySelection(path);
}

function removeArrayValue(path, value) {
  const list = getValueByPath(state, path);
  const index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  }
  syncOtherCountryState(path);
  syncCurrenciesForCountrySelection(path);
}

function setRegionSelection(path, shouldSelectAll) {
  const list = getValueByPath(state, path);
  list.length = 0;

  if (shouldSelectAll) {
    getRegionOptionsForPath(path).forEach((option) => {
      list.push(option.value);
    });
  }

  syncRegionCountryState(path);
}

function setCountrySelection(path, shouldSelectAll) {
  const list = getValueByPath(state, path);
  const availableCountryValues = getSearchSelectorDefinition(path).options.map((option) => option.value);

  for (let index = list.length - 1; index >= 0; index -= 1) {
    if (availableCountryValues.includes(list[index])) {
      list.splice(index, 1);
    }
  }

  if (shouldSelectAll) {
    availableCountryValues.forEach((value) => {
      if (!list.includes(value)) {
        list.push(value);
      }
    });
  }

  syncOtherCountryState(path);
  syncCurrenciesForCountrySelection(path);
}

function syncRegionCountryState(path) {
  const countryPath = getRegionSelectorCountryPath(path);
  if (!countryPath) {
    return;
  }

  const selectedRegions = getValueByPath(state, path);
  const selectedCountries = getValueByPath(state, countryPath);

  for (let index = selectedCountries.length - 1; index >= 0; index -= 1) {
    if (selectedCountries[index] === OTHER_COUNTRY_VALUE) {
      if (!selectedRegions.length) {
        selectedCountries.splice(index, 1);
      }
      continue;
    }

    const country = countryLookup.get(selectedCountries[index]);
    if (!selectedRegions.length || !selectedRegions.includes(country?.region)) {
      selectedCountries.splice(index, 1);
    }
  }

  clearSelectorQuery(countryPath);
  syncOtherCountryState(countryPath);
  syncCurrenciesForCountrySelection(countryPath);
}

function syncOtherCountryState(path) {
  const detailPath = getCountryOtherDetailPath(path);
  if (!detailPath || getValueByPath(state, path).includes(OTHER_COUNTRY_VALUE)) {
    return;
  }

  setValueByPath(state, detailPath, "");
}

function getCurrencyPathForCountryPath(path) {
  if (path === "collections.senderCountries") return "collections.senderCurrencies";
  if (path === "collections.receiverCountries") return "collections.receiverCurrencies";
  if (path === "disbursements.senderCountries") return "disbursements.senderCurrencies";
  if (path === "disbursements.receiverCountries") return "disbursements.receiverCurrencies";

  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field === "senderCountries") {
    return `${parsed.basePath}.senderCurrencies`;
  }
  if (parsed?.field === "receiverCountries") {
    return `${parsed.basePath}.receiverCurrencies`;
  }

  return "";
}

function getCountryPathForCurrencyPath(path) {
  if (path === "collections.senderCurrencies") return "collections.senderCountries";
  if (path === "collections.receiverCurrencies") return "collections.receiverCountries";
  if (path === "disbursements.senderCurrencies") return "disbursements.senderCountries";
  if (path === "disbursements.receiverCurrencies") return "disbursements.receiverCountries";

  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field === "senderCurrencies") {
    return `${parsed.basePath}.senderCountries`;
  }
  if (parsed?.field === "receiverCurrencies") {
    return `${parsed.basePath}.receiverCountries`;
  }

  return "";
}

function syncCurrenciesForCountrySelection(path) {
  const currencyPath = getCurrencyPathForCountryPath(path);

  if (!currencyPath) {
    return;
  }

  const selectedCountries = getValueByPath(state, path);
  const currencyList = getValueByPath(state, currencyPath);
  const suggestedCurrencies = getCurrenciesForCountries(selectedCountries);

  if (!selectedCountries.length) {
    currencyList.length = 0;
    return;
  }

  suggestedCurrencies.forEach((currency) => {
    if (!currencyList.includes(currency)) {
      currencyList.push(currency);
    }
  });

  const allowedCurrencies = new Set([
    ...suggestedCurrencies,
    ...getManualCurrenciesForPath(currencyPath),
  ]);

  for (let index = currencyList.length - 1; index >= 0; index -= 1) {
    if (!allowedCurrencies.has(currencyList[index])) {
      currencyList.splice(index, 1);
    }
  }
}

function getCurrenciesForCountries(countryCodes) {
  return [...new Set(
    countryCodes
      .flatMap((code) => COUNTRY_CURRENCY_MAP[code] || [])
      .filter((currency) => CURRENCY_OPTIONS.includes(currency))
      .filter((currency) => currency !== "USD" || countryCodes.includes("US"))
  )];
}

function getManualCurrenciesForPath(path) {
  const currentCurrencies = getValueByPath(state, path);
  const pairedCountryPath = getCountryPathForCurrencyPath(path);

  if (!pairedCountryPath) {
    return [];
  }

  const suggestedCurrencies = new Set(
    getCurrenciesForCountries(getValueByPath(state, pairedCountryPath))
  );

  return currentCurrencies.filter((currency) => !suggestedCurrencies.has(currency));
}

function getSearchSelectorDefinition(path) {
  const definition = SEARCH_SELECTOR_DEFINITIONS[path];

  if (definition) {
    return getRegionFilteredSearchSelectorDefinition(path, definition);
  }

  const parsed = parseUseCaseFlowPath(path);
  if (parsed?.field === "senderCountries" || parsed?.field === "receiverCountries") {
    return getRegionFilteredSearchSelectorDefinition(path, {
      options: COUNTRY_SEARCH_OPTIONS,
      placeholder: "Search countries",
      selectionLabel: "selected",
      emptySelectionLabel: "",
    });
  }

  if (parsed?.field === "senderCurrencies" || parsed?.field === "receiverCurrencies") {
    return {
      options: CURRENCY_SEARCH_OPTIONS,
      placeholder: "Search currencies",
      selectionLabel: "selected",
      emptySelectionLabel: "",
    };
  }

  return {
    options: [],
    placeholder: "Search",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected items will appear here.",
  };
}

function getRegionOptionsForPath(path) {
  return COUNTRY_REGION_OPTIONS;
}

function getRegionFilteredSearchSelectorDefinition(path, definition) {
  const regionPath = getCountrySelectorRegionPath(path);
  if (!regionPath) {
    return definition;
  }

  const selectedRegions = getValueByPath(state, regionPath);
  return {
    ...definition,
    options: selectedRegions.length
      ? definition.options.filter((option) => selectedRegions.includes(countryLookup.get(option.value)?.region))
      : [],
    placeholder: selectedRegions.length ? "Search selected regions" : "Select at least one region first",
    emptySelectionLabel: selectedRegions.length ? definition.emptySelectionLabel : "Select at least one region before adding countries.",
    disabled: !selectedRegions.length,
  };
}

function getSelectorQuery(path) {
  return selectorUiState[path] || "";
}

function clearSelectorQuery(path) {
  delete selectorUiState[path];
}

function getSearchSuggestions(path, query, selectedValues) {
  const trimmedQuery = query.trim().toLowerCase();
  if (!trimmedQuery) {
    return [];
  }

  return getSearchSelectorDefinition(path).options
    .filter((option) => {
      if (selectedValues.includes(option.value)) {
        return false;
      }

      const haystack = String(option.keywords || option.label || option.value).toLowerCase();
      return haystack.includes(trimmedQuery);
    })
    .slice(0, 8);
}

function labelForSearchValue(path, value) {
  return (
    getSearchSelectorDefinition(path).options.find((option) => option.value === value)?.label || value
  );
}

function focusSelectorInput(path) {
  window.requestAnimationFrame(() => {
    const selector = `[data-selector-search="${escapeSelectorValue(path)}"]`;
    const input = document.querySelector(selector);
    if (input) {
      input.focus({ preventScroll: true });
    }
  });
}

function updateRangeOutput(name, value, format) {
  const output = document.querySelector(`[data-output="${escapeSelectorValue(name)}"]`);
  if (output) {
    output.textContent = formatOutput(value, format);
  }
}

function formatOutput(value, format) {
  if (format === "currency") {
    return currencyFormatter.format(Number(value || 0));
  }
  if (format === "percent") {
    return `${Number(value || 0)}%`;
  }
  return String(value ?? "");
}

async function submitCurrentResponse() {
  const payload = buildSubmissionPayload();

  if (IS_TEST_MODE) {
    submissionState.status = "success";
    submissionState.submittedAt = payload.submittedAt;
    submissionState.submissionId = payload.submissionId;
    console.info("Partner intake test mode submission:", payload);
    return "";
  }

  if (!SUBMISSION_WEBHOOK_URL) {
    return "Submission service is not configured. Paste your Zapier webhook URL into `submissionWebhookUrl` in config.js before deploying this form.";
  }

  submissionState.status = "submitting";
  render();

  try {
    const response = await fetch(SUBMISSION_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    let result = null;
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      result = await response.json();
    }

    if (!response.ok || (result && result.ok === false)) {
      if (response.status === 501) {
        throw new Error(
          "The configured webhook does not accept POST requests. Confirm that the Zapier Catch Hook URL is correct."
        );
      }
      if (response.status === 404) {
        throw new Error(
          "The configured webhook was not found. Confirm that the Zapier Catch Hook URL is correct."
        );
      }
      throw new Error(result?.error || `Request failed with status ${response.status}`);
    }

    submissionState.status = "success";
    submissionState.submittedAt = payload.submittedAt;
    submissionState.submissionId = result?.submissionId || payload.submissionId;

    const _hsq = window._hsq = window._hsq || [];
    const identifyPayload = {
      firstname: state.contact.firstName,
      lastname: state.contact.lastName,
      company: state.company.companyName,
    };
    if (state.contact.email.trim()) {
      identifyPayload.email = state.contact.email.trim();
      _hsq.push(["identify", identifyPayload]);
    }
    _hsq.push(["trackPageView"]);

    return "";
  } catch (error) {
    submissionState.status = "error";
    const message = error instanceof Error ? error.message : String(error || "");
    if (
      message.includes("Failed to fetch") ||
      message.includes("NetworkError") ||
      message.includes("Load failed")
    ) {
      return "The webhook is not reachable. Confirm that the Zapier Catch Hook URL is correct and that the browser is allowed to send requests to it.";
    }

    return `The questionnaire could not be saved: ${message || "Please try again."}`;
  }
}

function buildSubmissionPayload() {
  const responses = buildSubmissionResponses();
  const submittedAt = new Date().toISOString();
  const rawData = buildZapierRawData(submittedAt);

  return {
    event: "veem.partner_onboarding.submitted",
    submissionId: generateSubmissionId(),
    submittedAt,
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
    contact: responses.contact,
    company: responses.company,
    summary: buildSummary(),
    rawData,
    responses,
  };
}

function buildSubmissionResponses() {
  const responses = {
    contact: state.contact,
    company: state.company,
    useCase: state.useCase,
    role: {
      inFlowOfFundsBusiness: state.role.inFlowOfFundsBusiness,
      licensed: state.role.licensed,
      pricingModel: state.role.pricingModel,
      implementationTimeline: state.role.implementationTimeline,
    },
    financials: state.financials,
    modules: state.modules,
    paymentMethods: state.paymentMethods,
    storedValueAccounts: state.storedValueAccounts,
    additionalServices: state.additionalServices,
    additionalInfo: state.additionalInfo,
  };

  if (hasPaymentFlowInterest()) {
    responses.useCaseFlows = Object.fromEntries(
      getSelectedUseCaseEntries().map(({ value, label, flow }) => [
        value,
        {
          label,
          ...flow,
          highRiskIndustries: state.useCase.highRiskIndustries,
          highRiskIndustryDetails:
            state.useCase.highRiskIndustries === "yes" ? state.useCase.highRiskIndustryDetails : "",
        },
      ])
    );
  }

  if (isModuleSelected("accounts")) {
    responses.accounts = {
      ...state.accounts,
      storedValueAccounts: state.storedValueAccounts,
    };
  }

  return cloneSubmissionState(responses);
}

function buildZapierRawData(submittedAt) {
  const entityTypeLabel = getCompanyEntityTypeLabel();
  const useCaseCategoryLabel = getUseCaseCategoryLabel();
  const pricingModelLabel =
    state.role.pricingModel === "revshare"
      ? "Revenue share"
      : state.role.pricingModel === "wholesale"
        ? "Wholesale pricing"
        : state.role.pricingModel;
  const paymentMethodSummary = summarizeInterestGroup(PAYMENT_METHODS, state.paymentMethods, "paymentMethods");
  const servicesSummary = summarizeInterestGroup(ADDITIONAL_SERVICES, state.additionalServices, "additionalServices");
  const storedValueAccountSummary = getUseCaseStoredValueSummary();
  const paymentFlowByUseCaseSummary = getSelectedUseCaseEntries().map((entry) => formatUseCaseFlowSummary(entry)).join(" || ");
  const productInterestSummary = summarizeProductInterest(
    paymentMethodSummary,
    storedValueAccountSummary,
    servicesSummary
  );
  const highRiskIndustries = formatYesNo(state.useCase.highRiskIndustries);
  const highRiskIndustryDetails =
    state.useCase.highRiskIndustries === "yes" ? state.useCase.highRiskIndustryDetails || "" : "";
  const productSummary = [
    paymentMethodSummary,
    storedValueAccountSummary,
  ].filter(Boolean).join(", ");

  return {
    "Submission date": submittedAt || "",
    "First Name": state.contact.firstName || "",
    "Last name": state.contact.lastName || "",
    "Email": state.contact.email || "",
    "Whatsapp Number": state.contact.whatsapp || "",
    "Primary contact is decision maker": state.contact.isDecisionMaker ? "Yes" : "No",
    "Decision maker name": state.contact.isDecisionMaker ? "" : state.contact.decisionMakerName || "",
    "Decision maker email": state.contact.isDecisionMaker ? "" : state.contact.decisionMakerEmail || "",
    "Company Name": state.company.companyName || "",
    "Entity Type": entityTypeLabel || "",
    "Entity Type detail": state.company.entityTypeOther || "",
    "Url": state.company.url || "",
    "Use case categories": useCaseCategoryLabel || "",
    "Use case category detail": state.useCase.other || "",
    "New use case or corridor": formatYesNo(state.useCase.isNewUseCaseOrCorridor),
    "Current handling": state.useCase.currentHandling || "",
    "High-risk industries": highRiskIndustries,
    "High-risk industry details": highRiskIndustryDetails,
    "Currently in flow of funds business": formatYesNo(state.role.inFlowOfFundsBusiness),
    "Licensed in operating countries": formatYesNo(state.role.licensed),
    "Pricing model": pricingModelLabel || "",
    "Implementation timeline": getImplementationTimelineLabel() || "",
    "Annual Revenue range": state.financials.revenueRange || "",
    "Annual volume range": state.financials.annualVolumeRange || "",
    "Payment count range": state.financials.paymentCountRange || "",
    "Expected company growth (next 12 months)": String(state.financials.companyGrowth ?? ""),
    "Average ticket size": String(state.financials.averageTicket ?? ""),
    "Product interest summary": productInterestSummary || "",
    "Products": productSummary || "",
    "Payment methods": paymentMethodSummary || "",
    "Methods": paymentMethodSummary || "",
    "Stored value accounts": storedValueAccountSummary || "",
    "Stored value account options": storedValueAccountSummary || "",
    "Additional services": servicesSummary || "",
    "Use case payment flows": paymentFlowByUseCaseSummary || "",
    "Stored value by use case": storedValueAccountSummary || "",
    ...buildUseCaseFlowRawData(),
    "Payment flow High-risk industries": hasPaymentFlowInterest() ? highRiskIndustries : "",
    "Payment flow High-risk industry details": hasPaymentFlowInterest() ? highRiskIndustryDetails : "",
    "Additional info": state.additionalInfo || "",
  };
}

function buildUseCaseFlowRawData() {
  return getSelectedUseCaseEntries().reduce((rawData, { label, flow }, index) => {
    const prefix = `Use case ${index + 1} - ${label}`;

    rawData[`${prefix} - User/customer side`] = formatCustomerSides(flow.customerSides);
    rawData[`${prefix} - Payer types`] = flow.senderTypes.map((value) => labelForOption(FLOW_USER_TYPE_OPTIONS, value)).join(", ");
    rawData[`${prefix} - Payer count`] = flow.payerCount || "";
    rawData[`${prefix} - Payer count basis`] = flow.payerCountBasis || "";
    rawData[`${prefix} - Payer regions`] = formatRegionList(flow.senderRegion);
    rawData[`${prefix} - Payer countries`] = formatCountryList(flow.senderCountries, flow.senderCountriesOther);
    rawData[`${prefix} - Payer other countries`] = flow.senderCountriesOther || "";
    rawData[`${prefix} - Payer currencies`] = flow.senderCurrencies.join(", ");
    rawData[`${prefix} - Payee types`] = flow.receiverTypes.map((value) => labelForOption(FLOW_USER_TYPE_OPTIONS, value)).join(", ");
    rawData[`${prefix} - Payee count`] = flow.payeeCount || "";
    rawData[`${prefix} - Payee count basis`] = flow.payeeCountBasis || "";
    rawData[`${prefix} - Payee regions`] = formatRegionList(flow.receiverRegion);
    rawData[`${prefix} - Payee countries`] = formatCountryList(flow.receiverCountries, flow.receiverCountriesOther);
    rawData[`${prefix} - Payee other countries`] = flow.receiverCountriesOther || "";
    rawData[`${prefix} - Payee currencies`] = flow.receiverCurrencies.join(", ");
    rawData[`${prefix} - Stored value account capabilities`] = formatStoredValueAccountTypes(flow.storedValueAccountTypes);

    return rawData;
  }, {});
}

function buildSummary() {
  const entityTypeLabel = getCompanyEntityTypeLabel();
  const useCaseCategoryLabel = getUseCaseCategoryLabel();
  const pricingModelLabel = state.role.pricingModel === "revshare" ? "Revenue share" : state.role.pricingModel === "wholesale" ? "Wholesale pricing" : "N/A";
  const paymentMethodSummary = summarizeInterestGroup(PAYMENT_METHODS, state.paymentMethods, "paymentMethods");
  const servicesSummary = summarizeInterestGroup(ADDITIONAL_SERVICES, state.additionalServices, "additionalServices");
  const storedValueAccountSummary = getUseCaseStoredValueSummary();
  const productInterestSummary = summarizeProductInterest(
    paymentMethodSummary,
    storedValueAccountSummary,
    servicesSummary
  );
  const lines = [
    "New Partner Intake form submission",
    "",
    `Contact: ${state.contact.firstName} ${state.contact.lastName}`.trim(),
    `Email: ${state.contact.email || "N/A"}`,
    `WhatsApp: ${state.contact.whatsapp || "N/A"}`,
    `Primary contact is decision maker: ${state.contact.isDecisionMaker ? "Yes" : "No"}`,
    `Decision maker name: ${state.contact.isDecisionMaker ? "N/A" : state.contact.decisionMakerName || "N/A"}`,
    `Decision maker email: ${state.contact.isDecisionMaker ? "N/A" : state.contact.decisionMakerEmail || "N/A"}`,
    `Company: ${state.company.companyName || "N/A"}`,
    `Entity type: ${entityTypeLabel || "N/A"}`,
    `URL: ${state.company.url || "N/A"}`,
    `Use case categories: ${useCaseCategoryLabel || "N/A"}`,
    `New use case or corridor: ${formatYesNo(state.useCase.isNewUseCaseOrCorridor) || "N/A"}`,
    `Current handling: ${state.useCase.currentHandling || "N/A"}`,
    `High-risk industries: ${formatYesNo(state.useCase.highRiskIndustries) || "N/A"}`,
    `High-risk industry details: ${state.useCase.highRiskIndustries === "yes" ? state.useCase.highRiskIndustryDetails || "N/A" : "N/A"}`,
    "",
    `Currently in flow of funds business: ${formatYesNo(state.role.inFlowOfFundsBusiness) || "N/A"}`,
    `Licensed in operating countries: ${formatYesNo(state.role.licensed) || "N/A"}`,
    `Pricing model: ${pricingModelLabel}`,
    `Implementation timeline: ${getImplementationTimelineLabel() || "N/A"}`,
    "",
    `Revenue range: ${state.financials.revenueRange || "N/A"}`,
    `Expected company growth (next 12 months): ${state.financials.companyGrowth}%`,
    `Annual volume range: ${state.financials.annualVolumeRange || "N/A"}`,
    `Payment count range: ${state.financials.paymentCountRange || "N/A"}`,
    `Average ticket size: ${currencyFormatter.format(Number(state.financials.averageTicket || 0))}`,
    "",
    `Product interest summary: ${productInterestSummary || "N/A"}`,
    `Payment methods: ${paymentMethodSummary || "N/A"}`,
    `Stored value accounts: ${storedValueAccountSummary || "N/A"}`,
    `Additional services: ${servicesSummary || "N/A"}`,
  ];

  if (hasPaymentFlowInterest()) {
    lines.push(
      "",
      "Use case payment flows:",
      ...getSelectedUseCaseEntries().map((entry) => formatUseCaseFlowSummary(entry))
    );
  }

  lines.push(
    "",
    `Additional info: ${state.additionalInfo || "N/A"}`
  );

  return lines.join("\n");
}

function summarizeInterestGroup(items, groupState, storeKey = "") {
  return items
    .filter((item) => !isInterestItemDisabled(storeKey, item.key) && (groupState[item.key].current || groupState[item.key].interested))
    .map((item) => {
      const entry = groupState[item.key];
      const states = [
        entry.current ? "current" : "",
        entry.interested ? "interested" : "",
      ].filter(Boolean);

      return `${item.label} (${states.join(" + ")})`;
    })
    .join(", ");
}

function summarizeProductInterest(paymentMethodSummary, storedValueSummary, servicesSummary) {
  return [
    paymentMethodSummary ? `Payment methods: ${paymentMethodSummary}` : "",
    storedValueSummary ? `Stored value accounts: ${storedValueSummary}` : "",
    servicesSummary ? `Additional services: ${servicesSummary}` : "",
  ].filter(Boolean).join(" | ");
}

function getCompanyEntityTypeLabel() {
  const entityTypeLabel = labelForOption(ENTITY_TYPES, state.company.entityType) || state.company.entityType;
  if (state.company.entityType === "other" && state.company.entityTypeOther.trim()) {
    return `${entityTypeLabel} — ${state.company.entityTypeOther.trim()}`;
  }

  return entityTypeLabel;
}

function getUseCaseCategoryLabel() {
  return formatList(getSelectedUseCaseLabels());
}

function isInterestItemDisabled(storeKey, itemKey) {
  const rule = getInterestAvailabilityRule(storeKey, itemKey);
  if (!rule) {
    return false;
  }

  const selectedModules = getProductAvailabilityContextModules();
  if (!selectedModules.length) {
    return false;
  }

  return !rule.availableForModules.some((moduleKey) => selectedModules.includes(moduleKey));
}

function getProductAvailabilityContextModules() {
  const selectedModules = FLOW_MODULE_KEYS.filter((moduleKey) => isModuleSelected(moduleKey));
  if (hasPaymentFlowInterest()) {
    selectedModules.push("collections", "disbursements");
  }

  return [...new Set(selectedModules)];
}

function getInterestItemDisabledStatus(storeKey, itemKey) {
  return getInterestAvailabilityRule(storeKey, itemKey)?.status || "";
}

function getInterestAvailabilityRule(storeKey, itemKey) {
  if (storeKey === "paymentMethods") {
    return PRODUCT_AVAILABILITY_RULES[itemKey];
  }

  if (storeKey === "additionalServices") {
    return ADDITIONAL_SERVICE_AVAILABILITY_RULES[itemKey];
  }

  return null;
}

function syncProductAvailabilityState() {
  [
    ["paymentMethods", PRODUCT_AVAILABILITY_RULES],
    ["additionalServices", ADDITIONAL_SERVICE_AVAILABILITY_RULES],
  ].forEach(([storeKey, rules]) => {
    Object.keys(rules).forEach((key) => {
      if (!isInterestItemDisabled(storeKey, key)) {
        return;
      }

      const entry = state[storeKey][key];
      if (!entry) {
        return;
      }

      entry.current = false;
      entry.interested = false;
    });
  });
}

function getImplementationTimelineLabel() {
  return labelForOption(IMPLEMENTATION_TIMELINE_OPTIONS, state.role.implementationTimeline) || state.role.implementationTimeline;
}

function formatYesNo(value) {
  if (value === "yes") {
    return "Yes";
  }
  if (value === "no") {
    return "No";
  }

  return "";
}

function syncContactState(path) {
  if (path === "contact.isDecisionMaker" && state.contact.isDecisionMaker) {
    state.contact.decisionMakerName = "";
    state.contact.decisionMakerEmail = "";
  }
}

function syncUseCaseState(path) {
  if (path === "useCase.categories" && !state.useCase.categories.includes("other")) {
    state.useCase.other = "";
  }
  if (path === "useCase.categories") {
    ensureUseCaseFlowsState();
  }
  if (path === "useCase.isNewUseCaseOrCorridor" && state.useCase.isNewUseCaseOrCorridor !== "no") {
    state.useCase.currentHandling = "";
  }
  if (path === "useCase.highRiskIndustries" && state.useCase.highRiskIndustries !== "yes") {
    state.useCase.highRiskIndustryDetails = "";
  }
}

function syncHighRiskIndustryState(path) {
  if (
    path === "collections.senderTypes" ||
    path === "collections.receiverTypes" ||
    path === "collections.highRiskIndustries"
  ) {
    syncHighRiskIndustryStateForFlow("collections");
  }

  if (
    path === "disbursements.senderTypes" ||
    path === "disbursements.receiverTypes" ||
    path === "disbursements.highRiskIndustries"
  ) {
    syncHighRiskIndustryStateForFlow("disbursements");
  }
}

function syncHighRiskIndustryStateForFlow(flowKey) {
  const flowState = state[flowKey];
  const hasBusinessUsers =
    flowState.senderTypes.includes("businesses") || flowState.receiverTypes.includes("businesses");

  if (!hasBusinessUsers) {
    flowState.highRiskIndustries = "";
    flowState.highRiskIndustryDetails = "";
    return;
  }

  if (flowState.highRiskIndustries !== "yes") {
    flowState.highRiskIndustryDetails = "";
  }
}

function labelForOption(options, value) {
  return options.find((option) => option.value === value)?.label || value;
}

function formatCountryList(codes, otherDetail = "") {
  return codes
    .map((code) => {
      if (code === OTHER_COUNTRY_VALUE) {
        return otherDetail.trim() ? `Other: ${otherDetail.trim()}` : "Other";
      }

      return countryLookup.get(code)?.name || code;
    })
    .join(", ");
}

function formatRegionList(regions) {
  return regions.join(", ");
}

function getCustomerRoleLabel(value) {
  if (value === "both") {
    return "Payer and payee";
  }

  return labelForOption(CUSTOMER_ROLE_OPTIONS, value) || value;
}

function formatCustomerSides(values) {
  return values
    .map((value) => getCustomerRoleLabel(value))
    .filter(Boolean)
    .join(", ");
}

function formatStoredValueAccountTypes(keys) {
  return keys
    .map((key) => STORED_VALUE_ACCOUNTS.find((item) => item.key === key)?.label || key)
    .filter(Boolean)
    .join(", ");
}

function formatUseCaseFlowSummary({ label, flow }) {
  const parts = [
    flow.customerSides.length ? `User/customer side: ${formatCustomerSides(flow.customerSides)}` : "",
    flow.senderTypes.length ? `Payers: ${formatList(flow.senderTypes.map((value) => labelForOption(FLOW_USER_TYPE_OPTIONS, value)))}` : "",
    flow.payerCount ? `Number of payers: ${flow.payerCount} (${flow.payerCountBasis || "basis not selected"})` : "",
    flow.senderRegion.length ? `Payer regions: ${formatRegionList(flow.senderRegion)}` : "",
    flow.senderCountries.length ? `Payer countries: ${formatCountryList(flow.senderCountries, flow.senderCountriesOther)}` : "",
    flow.senderCurrencies.length ? `Payer currencies: ${flow.senderCurrencies.join(", ")}` : "",
    flow.receiverTypes.length ? `Payees: ${formatList(flow.receiverTypes.map((value) => labelForOption(FLOW_USER_TYPE_OPTIONS, value)))}` : "",
    flow.payeeCount ? `Number of payees: ${flow.payeeCount} (${flow.payeeCountBasis || "basis not selected"})` : "",
    flow.receiverRegion.length ? `Payee regions: ${formatRegionList(flow.receiverRegion)}` : "",
    flow.receiverCountries.length ? `Payee countries: ${formatCountryList(flow.receiverCountries, flow.receiverCountriesOther)}` : "",
    flow.receiverCurrencies.length ? `Payee currencies: ${flow.receiverCurrencies.join(", ")}` : "",
    flow.storedValueAccountTypes.length ? `Stored value: ${formatStoredValueAccountTypes(flow.storedValueAccountTypes)}` : "",
  ].filter(Boolean);

  return `${label}: ${parts.join(" | ") || "No flow details indicated"}`;
}

function getUseCaseStoredValueSummary() {
  return getSelectedUseCaseEntries()
    .map(({ label, flow }) => {
      const storedValueSummary = formatStoredValueAccountTypes(flow.storedValueAccountTypes);
      return storedValueSummary ? `${label}: ${storedValueSummary}` : "";
    })
    .filter(Boolean)
    .join(" | ");
}

function markSubmissionDirty() {
  if (submissionState.status === "idle") {
    return;
  }

  submissionState.status = "idle";
  submissionState.submittedAt = "";
  submissionState.submissionId = "";
}

function generateSubmissionId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `submission-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

function cloneSubmissionState(value) {
  if (typeof globalThis.structuredClone === "function") {
    return globalThis.structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function formatSubmittedAt(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function rerenderPreservingPosition() {
  const snapshot = captureUiState();
  render();
  restoreUiState(snapshot);
}

function captureUiState() {
  const activeElement = document.activeElement;
  return {
    windowScrollY: window.scrollY,
    countryScrolls: Array.from(document.querySelectorAll("[data-country-scroll]")).map((element) => ({
      key: element.dataset.countryScroll,
      top: element.scrollTop,
    })),
    openCountryDropdowns: Array.from(document.querySelectorAll("[data-country-dropdown][open]")).map(
      (element) => element.dataset.countryDropdown
    ),
    openSelectionDropdowns: Array.from(document.querySelectorAll("[data-selection-dropdown][open]")).map(
      (element) => element.dataset.selectionDropdown
    ),
    activeSelector:
      activeElement instanceof HTMLInputElement && activeElement.dataset.selectorSearch
        ? {
            path: activeElement.dataset.selectorSearch,
            start: activeElement.selectionStart ?? activeElement.value.length,
            end: activeElement.selectionEnd ?? activeElement.value.length,
          }
        : null,
  };
}

function restoreUiState(snapshot) {
  if (!snapshot) {
    return;
  }

  (snapshot.openCountryDropdowns || []).forEach((path) => {
    const selector = `[data-country-dropdown="${escapeSelectorValue(path)}"]`;
    const element = document.querySelector(selector);
    if (element instanceof HTMLDetailsElement) {
      element.open = true;
    }
  });

  (snapshot.openSelectionDropdowns || []).forEach((path) => {
    const selector = `[data-selection-dropdown="${escapeSelectorValue(path)}"]`;
    const element = document.querySelector(selector);
    if (element instanceof HTMLDetailsElement) {
      element.open = true;
    }
  });

  snapshot.countryScrolls.forEach(({ key, top }) => {
    const selector = `[data-country-scroll="${escapeSelectorValue(key)}"]`;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollTop = top;
    }
  });

  if (snapshot.activeSelector) {
    const selector = `[data-selector-search="${escapeSelectorValue(snapshot.activeSelector.path)}"]`;
    const input = document.querySelector(selector);
    if (input instanceof HTMLInputElement) {
      input.focus({ preventScroll: true });
      input.setSelectionRange(snapshot.activeSelector.start, snapshot.activeSelector.end);
    }
  }

  restoreWindowScroll(snapshot.windowScrollY);
}

function restoreWindowScroll(top) {
  window.scrollTo({ top, left: 0 });
  window.requestAnimationFrame(() => {
    window.scrollTo({ top, left: 0 });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top, left: 0 });
    });
  });
  window.setTimeout(() => {
    window.scrollTo({ top, left: 0 });
  }, 80);
  window.setTimeout(() => {
    window.scrollTo({ top, left: 0 });
  }, 180);
}

function toId(value) {
  return value.replace(/[^a-zA-Z0-9]+/g, "-");
}

function selectorInputId(path) {
  return `selector-${toId(path)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
