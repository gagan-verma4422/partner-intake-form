const MODULES = [
  {
    key: "collections",
    label: "Collections",
    description:
      "Receive funds through Standard ACH, Same Day ACH, RTP, Swift Wire, Named Virtual Accounts, Card Acquiring, Foreign Exchange, and Stablecoin.",
  },
  {
    key: "disbursements",
    label: "Disbursements",
    description:
      "Send or deliver funds through Standard ACH, Same Day ACH, RTP, Swift Wire, Foreign Exchange, Card Issuance, and Stablecoin.",
  },
  {
    key: "accounts",
    label: "Accounts",
    description:
      "Launch stored-balance experiences with multi-currency wallets, virtual bank accounts, stablecoin wallets, and virtual card issuance.",
  },
];

const PAYMENT_METHODS = [
  {
    key: "standardAch",
    label: "Standard ACH",
    description: "Veem's standard domestic U.S. bank transfer option for lower-cost transactions where moderate settlement speed is acceptable.",
  },
  {
    key: "sameDayAch",
    label: "Same Day ACH",
    description: "Domestic U.S. ACH with same-day settlement for faster bank movement when timing matters.",
  },
  {
    key: "rtp",
    label: "RTP",
    description: "Real-Time Payments for instant U.S. bank transfers and immediate settlement in time-sensitive use cases.",
  },
  {
    key: "swiftWire",
    label: "Swift Wire",
    description: "Domestic or cross-border USD wire transfers through the SWIFT network for direct bank-to-bank settlement.",
  },
  {
    key: "namedVirtualAccounts",
    label: "Named Virtual Accounts",
    description: "Unique U.S.-based account and routing numbers that support incoming payments, reconciliation, and account-level tracking.",
  },
  {
    key: "foreignExchange",
    label: "Foreign Exchange",
    description: "Currency conversion supported by institutional liquidity providers for cross-border payments and treasury movement.",
  },
  {
    key: "cardAcquiring",
    label: "Card Acquiring",
    description: "Card-funded payment acceptance for partners taking debit or credit card payments.",
  },
  {
    key: "cardIssuance",
    label: "Card Issuance",
    description: "Commercial prepaid card issuance, including virtual card experiences for wallets and ecommerce use cases.",
  },
  {
    key: "stablecoin",
    label: "Stablecoin",
    description: "USDC and USDT on-ramp and off-ramp support across multiple blockchain networks with routed settlement options.",
  },
];

const ADDITIONAL_SERVICES = [
  {
    key: "plaidBankAccountVerification",
    label: "Plaid Bank Account Verification",
    description: "Secure bank account verification services that support account ownership, identity, and bank connection validation.",
  },
  {
    key: "riskServices",
    label: "Risk Services",
    description: "Additional risk controls and related support services for managing payment and compliance exposure.",
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
    description: "Embed fast, secure disbursements",
    href: "https://www.veem.com/pay-solution/",
  },
  {
    title: "Collect Solution",
    description: "Enable frictionless payment collection",
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

const FLOW_MODULE_KEYS = ["collections", "disbursements"];

const STEP_CONTENT = {
  intro: {
    eyebrow: "Contact Information",
    title: "Provide contact information.",
    description:
      "Please provide the primary contact details for this inquiry together with basic company information.",
    footer:
      "Fields marked with * are required.",
  },
  role: {
    eyebrow: "Business Profile",
    title: "Provide business profile and licensing information.",
    description:
      "",
    footer:
      "Fields marked with * are required.",
  },
  financials: {
    eyebrow: "Financial Profile",
    title: "Provide current scale and expected growth.",
    description:
      "Please provide directional ranges for revenue, payment volume, payment count, and expected growth over the next 12 months.",
    footer:
      "Fields marked with * are required.",
  },
  solutions: {
    eyebrow: "Flow Selection",
    title: "Choose the solution areas you would like to discuss.",
    description:
      "Select collections, disbursements, or both.",
    footer:
      "Fields marked with * are required.",
  },
  markets: {
    eyebrow: "Product Scope",
    title: "Identify products and services.",
    description:
      "Select the products and additional services most relevant to your business.",
    footer:
      "Fields marked with * are required.",
  },
  collections: {
    eyebrow: "Collections Information",
    title: "Provide information about your collections flow.",
    description:
      "Please share details about the users sending funds and where funds move in your collections flow.",
    footer:
      "Fields marked with * are required.",
  },
  disbursements: {
    eyebrow: "Disbursement Information",
    title: "Provide information about your disbursement flow.",
    description:
      "Please share details about the users receiving funds and where funds move in your disbursement flow.",
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
const SUBMISSION_WEBHOOK_URL = String(APP_CONFIG.submissionWebhookUrl || "").trim();
const escapeSelectorValue = (value) => {
  const stringValue = String(value ?? "");
  if (globalThis.CSS && typeof globalThis.CSS.escape === "function") {
    return globalThis.CSS.escape(stringValue);
  }

  return stringValue.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
};

const countryLookup = new Map(COUNTRY_OPTIONS.map((country) => [country.code, country]));
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
const SEARCH_SELECTOR_DEFINITIONS = {
  operatingCountries: {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
  currencies: {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "",
  },
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
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

let currentStepIndex = 0;
let maxUnlockedStepIndex = 0;
let activeErrors = [];
const selectorUiState = {};
const submissionState = {
  status: "idle",
  submittedAt: "",
  submissionId: "",
};

const state = {
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
  },
  company: {
    companyName: "",
    entityType: "",
    url: "",
  },
  role: {
    inFlow: "",
    flowOfFundsChart: null,
    licensed: "",
    additionalLicenses: "",
    additionalLicenseLocations: "",
    pricingModel: "",
  },
  financials: {
    revenueRange: "",
    companyGrowth: 30,
    annualVolumeRange: "",
    paymentCountRange: "",
    averageTicket: 2500,
  },
  modules: buildInterestMap(MODULES),
  transactionTypes: [],
  operatingCountries: [],
  currencies: ["USD"],
  paymentMethods: buildVolumeInterestMap(PAYMENT_METHODS),
  additionalServices: buildInterestMap(ADDITIONAL_SERVICES),
  collections: {
    senderTypes: [],
    receiverTypes: [],
    highRiskIndustries: "",
    payerCount: "",
    payerCountBasis: "",
    senderCountries: [],
    senderCurrencies: [],
    receiverCountries: [],
    receiverCurrencies: [],
  },
  disbursements: {
    senderTypes: [],
    receiverTypes: [],
    highRiskIndustries: "",
    payeeCount: "",
    payeeCountBasis: "",
    senderCountries: [],
    senderCurrencies: [],
    receiverCountries: [],
    receiverCurrencies: [],
  },
  additionalInfo: "",
};

const app = document.getElementById("app");
const ENABLE_LAST_PAGE_TESTING = false;

if (app instanceof HTMLElement) {
  app.addEventListener("click", handleClick);
  app.addEventListener("input", handleInput);
  app.addEventListener("change", handleInput);
  app.addEventListener("keydown", handleKeyDown);
  app.addEventListener("focusout", handleBlur);
  render();
} else {
  console.error('Partner onboarding app could not start because the "#app" container was not found.');
}

function buildInterestMap(items) {
  return Object.fromEntries(items.map((item) => [item.key, { current: false, interested: false }]));
}

function buildVolumeInterestMap(items) {
  return Object.fromEntries(
    items.map((item) => [
      item.key,
      {
        current: false,
        interested: false,
        share: 20,
        shareBasis: "current",
      },
    ])
  );
}

function buildSteps() {
  const steps = [
    { id: "intro", validate: validateIntro },
    { id: "solutions", validate: validateSolutions },
  ];

  if (!getSelectedFlowLabels().length) {
    return steps;
  }

  if (isModuleSelected("collections")) {
    steps.push({ id: "collections", validate: validateCollections });
  }

  if (isModuleSelected("disbursements")) {
    steps.push({ id: "disbursements", validate: validateDisbursements });
  }

  steps.push({ id: "markets", validate: validateMarkets });
  steps.push({ id: "financials", validate: validateFinancials });
  steps.push({ id: "role", validate: validateRole });
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
              Veem Partner Intake Form
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
  maxUnlockedStepIndex = ENABLE_LAST_PAGE_TESTING
    ? steps.length - 1
    : Math.max(currentStepIndex, Math.min(maxUnlockedStepIndex, steps.length - 1));
  const currentStep = steps[currentStepIndex];
  const currentContent = STEP_CONTENT[currentStep.id];
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
          const content = STEP_CONTENT[step.id];
          const isUnlocked = index <= maxUnlockedStepIndex;
          const statusClass =
            index === currentStepIndex
              ? "is-active"
              : index < currentStepIndex
                ? "is-complete"
                : "";
          if (step.id === "thankyou" && submissionState.status !== "success" && !ENABLE_LAST_PAGE_TESTING) return "";
          return `
            <button
              class="step-item ${statusClass} ${isUnlocked ? "is-clickable" : "is-locked"}"
              type="button"
              data-action="goto-step"
              data-step-index="${index}"
              aria-current="${index === currentStepIndex ? "step" : "false"}"
              aria-label="Step ${index + 1}: ${escapeHtml(content.eyebrow)}. ${escapeHtml(content.title)}"
              aria-disabled="${isUnlocked ? "false" : "true"}"
              ${isUnlocked ? "" : "disabled"}
            >
              <div class="step-item__index">${index + 1}</div>
              <div class="step-item__copy">
                <strong>${escapeHtml(content.eyebrow)}</strong>
                <span>${escapeHtml(content.title)}</span>
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
    ${renderStepContent(currentStep.id)}
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
          ? `<button class="ghost-button" type="button" data-action="prev-step" ${submissionState.status === "submitting" ? "disabled" : ""}>Previous</button>`
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

function renderStepContent(stepId) {
  switch (stepId) {
    case "intro":
      return renderIntroStep();
    case "role":
      return renderRoleStep();
    case "financials":
      return renderFinancialsStep();
    case "solutions":
      return renderSolutionsStep();
    case "markets":
      return renderMarketsStep();
    case "collections":
      return renderCollectionsStep();
    case "disbursements":
      return renderDisbursementsStep();
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
        </div>
      </section>

      <section class="section-card">
        <h3>Company details</h3>
        <p class="section-card__intro">Please provide basic company information.</p>
        <div class="field-grid">
          ${renderTextField("Company name *", "company.companyName", state.company.companyName, "text", "Acme Payments", "is-half")}
          ${renderSelectField("Entity type *", "company.entityType", state.company.entityType, ENTITY_TYPES, "Choose one", "is-half")}
          ${renderTextField("URL", "company.url", state.company.url, "url", "https://www.company.com")}
        </div>
      </section>
    </div>
  `;
}

function renderRoleStep() {
  const selectedFlowPhrase = getSelectedFlowPhrase();

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Business profile</h3>
        <p class="section-card__intro">Please provide information on your role in the flow of funds and your licensing status for ${escapeHtml(selectedFlowPhrase)}.</p>
        <div class="field-grid">
          <div class="field">
            <label>${renderLabelText("Are you currently in the flow of funds business? *")}</label>
            ${renderSegmentedButtons("role.inFlow", state.role.inFlow, [
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

          <div class="field is-half">
            <label>${renderLabelText("Do you hold any additional licenses? *")}</label>
            ${renderSegmentedButtons("role.additionalLicenses", state.role.additionalLicenses, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>

          ${
            state.role.additionalLicenses === "yes"
              ? renderTextareaField(
                  "Where do you hold additional licenses? *",
                  "role.additionalLicenseLocations",
                  state.role.additionalLicenseLocations,
                  "List jurisdictions and, if useful, the license type."
                )
              : ""
          }

          <div class="field">
            <label>${renderLabelText("Which commercial model do you prefer? *")}</label>
            ${renderSegmentedButtons("role.pricingModel", state.role.pricingModel, [
              { value: "wholesale", label: "Wholesale pricing" },
              { value: "revshare", label: "Revenue share" },
            ])}
          </div>
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
    </div>
  `;
}

function renderSolutionsStep() {
  const flowModules = MODULES.filter((module) => FLOW_MODULE_KEYS.includes(module.key));
  const selectedCount = getSelectedFlowLabels().length;

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Solutions of interest <span class="required-star">*</span></h3>
        <p class="section-card__intro">Select the solution areas you would like to discuss. The remaining steps will adjust to your selection.</p>
        <div class="option-grid grid auto-rows-fr md:grid-cols-2">
          ${flowModules
            .map((module) => {
              const entry = state.modules[module.key];
              const titleId = `module-${module.key}-title`;
              const descriptionId = `module-${module.key}-description`;
              return `
                <button
                  class="option-card option-card--button ${entry.interested ? "is-selected" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="modules"
                  data-key="${module.key}"
                  data-field="interested"
                  aria-pressed="${entry.interested ? "true" : "false"}"
                  aria-labelledby="${titleId}"
                  aria-describedby="${descriptionId}"
                >
                  <span class="option-card__title" id="${titleId}">${escapeHtml(module.label)}</span>
                  <span class="option-card__description" id="${descriptionId}">${escapeHtml(module.description)}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderMarketsStep() {
  const productsIntro = isModuleSelected("collections") && !isModuleSelected("disbursements")
    ? "Please indicate the products relevant to your incoming collection flows."
    : isModuleSelected("disbursements") && !isModuleSelected("collections")
      ? "Please indicate the products relevant to your outgoing disbursement flows."
      : "Please indicate the products relevant to your selected flows.";

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Products <span class="required-star">*</span></h3>
        <p class="section-card__intro">${escapeHtml(productsIntro)}</p>
        ${renderInterestGrid(PAYMENT_METHODS, "paymentMethods", true)}
      </section>

      <section class="section-card">
        <h3>Additional services</h3>
        <p class="section-card__intro">Please select any additional services relevant to this opportunity.</p>
        ${renderInterestGrid(ADDITIONAL_SERVICES, "additionalServices", false)}
      </section>
    </div>
  `;
}

function renderCollectionsStep() {
  const showHighRiskQuestion =
    state.collections.senderTypes.includes("businesses") ||
    state.collections.receiverTypes.includes("businesses");

  return `
    <div class="section-stack">
      <div class="flow-split-grid">
        <section class="flow-split-card">
          <span class="flow-split-card__eyebrow">From</span>
          <p>Share who is sending funds and the source countries and currencies.</p>
          <div class="flow-split-card__grid">
            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("Type of users *")}</label>
                ${renderChipSelector("collections.senderTypes", state.collections.senderTypes, [
                  { value: "consumers", label: "Consumers" },
                  { value: "businesses", label: "Businesses" },
                  { value: "soleProprietors", label: "Sole proprietors" },
                ])}
              </div>
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "collections.senderCountries",
                state.collections.senderCountries,
                "What countries are funds coming from? *"
              )}
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "collections.senderCurrencies",
                state.collections.senderCurrencies,
                "Which currencies are the funds sent in? *",
                "",
                "Search currencies"
              )}
            </div>
          </div>
        </section>

        <section class="flow-split-card">
          <span class="flow-split-card__eyebrow">To</span>
          <p>Share who is receiving funds and the destination countries and currencies.</p>
          <div class="flow-split-card__grid">
            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("Type of users *")}</label>
                ${renderChipSelector("collections.receiverTypes", state.collections.receiverTypes, [
                  { value: "consumers", label: "Consumers" },
                  { value: "businesses", label: "Businesses" },
                  { value: "soleProprietors", label: "Sole proprietors" },
                ])}
              </div>
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "collections.receiverCountries",
                state.collections.receiverCountries,
                "What countries are funds going to? *"
              )}
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "collections.receiverCurrencies",
                state.collections.receiverCurrencies,
                "Which currencies are the funds received in? *",
                "",
                "Search currencies"
              )}
            </div>
          </div>
        </section>
      </div>

      <section class="section-card">
        <div class="field-grid">
          ${
            showHighRiskQuestion
              ? `
                <div class="field">
                  <label>${renderLabelText("Do any of these businesses operate in high risk industries? *")}</label>
                  ${renderSegmentedButtons("collections.highRiskIndustries", state.collections.highRiskIndustries, [
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ])}
                </div>
              `
              : ""
          }

          ${renderTextField(
            "Number of users (payers) *",
            "collections.payerCount",
            state.collections.payerCount,
            "number",
            "",
            "is-half"
          )}

          <div class="field is-half">
            <label>${renderLabelText("Are these users actual or estimated? *")}</label>
            ${renderSegmentedButtons("collections.payerCountBasis", state.collections.payerCountBasis, [
              { value: "actual", label: "Actual" },
              { value: "estimated", label: "Estimated" },
            ])}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderDisbursementsStep() {
  const showHighRiskQuestion =
    state.disbursements.senderTypes.includes("businesses") ||
    state.disbursements.receiverTypes.includes("businesses");

  return `
    <div class="section-stack">
      <div class="flow-split-grid">
        <section class="flow-split-card">
          <span class="flow-split-card__eyebrow">From</span>
          <p>Share who is sending funds and the source countries and currencies.</p>
          <div class="flow-split-card__grid">
            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("Type of users *")}</label>
                ${renderChipSelector("disbursements.senderTypes", state.disbursements.senderTypes, [
                  { value: "consumers", label: "Consumers" },
                  { value: "businesses", label: "Businesses" },
                  { value: "soleProprietors", label: "Sole proprietors" },
                ])}
              </div>
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "disbursements.senderCountries",
                state.disbursements.senderCountries,
                "What countries are funds coming from? *"
              )}
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "disbursements.senderCurrencies",
                state.disbursements.senderCurrencies,
                "Which currencies are the funds sent in? *",
                "",
                "Search currencies"
              )}
            </div>
          </div>
        </section>

        <section class="flow-split-card">
          <span class="flow-split-card__eyebrow">To</span>
          <p>Share who is receiving funds and the destination countries and currencies.</p>
          <div class="flow-split-card__grid">
            <div class="flow-field-box">
              <div class="field">
                <label>${renderLabelText("Type of users *")}</label>
                ${renderChipSelector("disbursements.receiverTypes", state.disbursements.receiverTypes, [
                  { value: "consumers", label: "Consumers" },
                  { value: "businesses", label: "Businesses" },
                  { value: "soleProprietors", label: "Sole proprietors" },
                ])}
              </div>
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "disbursements.receiverCountries",
                state.disbursements.receiverCountries,
                "What countries are funds going to? *"
              )}
            </div>
            <div class="flow-field-box">
              ${renderSearchMultiSelect(
                "disbursements.receiverCurrencies",
                state.disbursements.receiverCurrencies,
                "Which currencies are the funds received in? *",
                "",
                "Search currencies"
              )}
            </div>
          </div>
        </section>
      </div>

      <section class="section-card">
        <div class="field-grid">
          ${
            showHighRiskQuestion
              ? `
                <div class="field">
                  <label>${renderLabelText("Do any of these businesses operate in high risk industries? *")}</label>
                  ${renderSegmentedButtons("disbursements.highRiskIndustries", state.disbursements.highRiskIndustries, [
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ])}
                </div>
              `
              : ""
          }

          ${renderTextField(
            "Number of users receiving funds *",
            "disbursements.payeeCount",
            state.disbursements.payeeCount,
            "number",
            "",
            "is-half"
          )}

          <div class="field is-half">
            <label>${renderLabelText("Are these users actual or estimated? *")}</label>
            ${renderSegmentedButtons("disbursements.payeeCountBasis", state.disbursements.payeeCountBasis, [
              { value: "actual", label: "Actual" },
              { value: "estimated", label: "Estimated" },
            ])}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderReviewStep() {
  const selectedFlows = getSelectedFlowLabels();
  const pricingModelLabel =
    state.role.pricingModel === "revshare"
      ? "Revenue share"
      : state.role.pricingModel === "wholesale"
        ? "Wholesale pricing"
        : "Pricing model not selected";
  const collectionsLocationSummary = isModuleSelected("collections")
    ? `Collections: ${[
        state.collections.senderCountries.length
          ? `From countries: ${state.collections.senderCountries
              .map((code) => countryLookup.get(code)?.name || code)
              .join(", ")}`
          : "",
        state.collections.senderCurrencies.length
          ? `From currencies: ${state.collections.senderCurrencies.join(", ")}`
          : "",
        state.collections.receiverCountries.length
          ? `To countries: ${state.collections.receiverCountries
              .map((code) => countryLookup.get(code)?.name || code)
              .join(", ")}`
          : "",
        state.collections.receiverCurrencies.length
          ? `To currencies: ${state.collections.receiverCurrencies.join(", ")}`
          : "",
      ].filter(Boolean).join(" | ")}`
    : "";
  const disbursementsLocationSummary = isModuleSelected("disbursements")
    ? `Disbursements: ${[
        state.disbursements.senderCountries.length
          ? `From countries: ${state.disbursements.senderCountries
              .map((code) => countryLookup.get(code)?.name || code)
              .join(", ")}`
          : "",
        state.disbursements.senderCurrencies.length
          ? `From currencies: ${state.disbursements.senderCurrencies.join(", ")}`
          : "",
        state.disbursements.receiverCountries.length
          ? `To countries: ${state.disbursements.receiverCountries
              .map((code) => countryLookup.get(code)?.name || code)
              .join(", ")}`
          : "",
        state.disbursements.receiverCurrencies.length
          ? `To currencies: ${state.disbursements.receiverCurrencies.join(", ")}`
          : "",
      ].filter(Boolean).join(" | ")}`
    : "";

  return `
    <div class="section-stack">
      <section class="section-card review-summary-card">
        <h3>Summary</h3>
        <p class="section-card__intro">Please review the information provided below.</p>

        <div class="summary-grid">
          <div class="summary-card">
            <strong>Selected flows</strong>
            <span>${escapeHtml(selectedFlows.length ? formatList(selectedFlows) : "None indicated")}</span>
          </div>
          <div class="summary-card">
            <strong>Markets and Currencies</strong>
            <span>${escapeHtml(
              [
                collectionsLocationSummary,
                disbursementsLocationSummary,
              ].filter(Boolean).join(" | ") || "No countries or currencies indicated"
            )}</span>
          </div>
          <div class="summary-card">
            <strong>Commercial model</strong>
            <span>${escapeHtml(pricingModelLabel)} with ${escapeHtml(state.financials.revenueRange || "revenue range not provided")} revenue range.</span>
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
  const isSubmissionIssue =
    errors.length === 1 &&
    (submissionState.status === "error" || errors[0].toLowerCase().includes("server"));
  const preview = errors.slice(0, 4).join(", ");
  const remaining = errors.length > 4 ? ` and ${errors.length - 4} more` : "";
  return `
    <div class="alert">
      <strong>${isSubmissionIssue ? "We could not save this submission." : "Please complete the following required fields."}</strong>
      <span>${escapeHtml(preview + remaining)}</span>
    </div>
  `;
}

function renderTextField(label, name, value, type = "text", placeholder = "", className = "") {
  return `
    <div class="field ${className}">
      <label for="${toId(name)}">${renderLabelText(label)}</label>
      <input
        class="text-input"
        id="${toId(name)}"
        name="${name}"
        type="${type}"
        value="${escapeHtml(String(value || ""))}"
        placeholder="${escapeHtml(placeholder)}"
      />
    </div>
  `;
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

function renderChipSelector(path, selectedValues, options) {
  return `
    <div class="chip-cloud">
      ${options
        .map(
          (option) => `
            <button
              class="selection-chip ${selectedValues.includes(option.value) ? "is-active" : ""}"
              type="button"
              data-action="toggle-array"
              data-path="${path}"
              data-value="${option.value}"
              aria-pressed="${selectedValues.includes(option.value) ? "true" : "false"}"
            >
              ${escapeHtml(option.label)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSearchMultiSelect(path, selectedValues, title = "", intro = "", placeholder = "") {
  const definition = getSearchSelectorDefinition(path);
  const query = getSelectorQuery(path);
  const suggestions = getSearchSuggestions(path, query, selectedValues);
  const inputId = selectorInputId(path);
  const descriptionId = intro ? `${inputId}-description` : "";

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
              ${
                selectedValues.length
                  ? `<div class="selection-chip is-soft">${selectedValues.length} ${escapeHtml(definition.selectionLabel)}</div>`
                  : ""
              }
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

      <div class="search-select__tags">
        ${
          selectedValues.length
            ? selectedValues
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
                .join("")
            : definition.emptySelectionLabel
              ? `<span class="search-select__placeholder">${escapeHtml(definition.emptySelectionLabel)}</span>`
              : ""
        }
      </div>
    </div>
  `;
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

function renderInterestGrid(items, storeKey, withShare) {
  return `
    <div class="option-grid grid auto-rows-fr md:grid-cols-2">
      ${items
        .map((item) => {
          const entry = state[storeKey][item.key];
          const selected = entry.current || entry.interested;
          const titleId = `${storeKey}-${item.key}-title`;
          const descriptionId = `${storeKey}-${item.key}-description`;

          return `
            <article class="option-card ${selected ? "is-selected" : ""}" role="group" aria-labelledby="${titleId}" aria-describedby="${descriptionId}">
              <h4 id="${titleId}">${escapeHtml(item.label)}</h4>
              <p id="${descriptionId}">${escapeHtml(item.description)}</p>
              <div class="toggle-pair">
                <button
                  class="pill-button ${entry.current ? "is-active" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="${storeKey}"
                  data-key="${item.key}"
                  data-field="current"
                  aria-pressed="${entry.current ? "true" : "false"}"
                >
                  Current use
                </button>
                <button
                  class="pill-button ${entry.interested ? "is-active" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="${storeKey}"
                  data-key="${item.key}"
                  data-field="interested"
                  aria-pressed="${entry.interested ? "true" : "false"}"
                >
                  Interested in Veem
                </button>
              </div>
              ${
                withShare && selected
                  ? `
                    <div class="subcard">
                      <div class="field">
                        <label>Estimated share of volume</label>
                        ${renderSegmentedButtons(`${storeKey}.${item.key}.shareBasis`, entry.shareBasis, [
                          { value: "current", label: "Last 12 months" },
                          { value: "expected", label: "Expected share" },
                        ])}
                      </div>
                      ${renderRangeCard(
                        "Estimated share of volume",
                        `${storeKey}.${item.key}.share`,
                        entry.share,
                        0,
                        100,
                        5,
                        "percent"
                      )}
                    </div>
                  `
                  : ""
              }
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
    const errors = currentStep.validate();

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
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "toggle-array") {
    toggleArrayValue(button.dataset.path, button.dataset.value);
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
    state[store][key][field] = !state[store][key][field];
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

  if (target.name === "contact.email") {
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

  let value = target.value;
  if (target.type === "range" || target.type === "number") {
    value = target.value === "" ? "" : Number(target.value);
  }
  if (target.name === "contact.whatsapp") {
    value = target.value.replace(/[^\d+\s\-().]/g, "");
    target.value = value;
  }

  setValueByPath(state, target.name, value);
  markSubmissionDirty();

  if (target.type === "range") {
    updateRangeOutput(target.name, value, target.dataset.format);
  }

  // clear inline error for this field while user is correcting it
  if (target.name === "contact.email" || target.name === "contact.whatsapp") {
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
  if (!state.company.companyName.trim()) {
    errors.push("Company name");
  }
  if (!state.company.entityType) {
    errors.push("Entity type");
  }

  return errors;
}

function validateRole() {
  const errors = [];

  if (!state.role.inFlow) {
    errors.push("Flow of funds business status");
  }
  if (!state.role.licensed) {
    errors.push("Licensing status");
  }
  if (!state.role.additionalLicenses) {
    errors.push("Additional licenses");
  }
  if (state.role.additionalLicenses === "yes" && !state.role.additionalLicenseLocations.trim()) {
    errors.push("Additional license locations");
  }
  if (!state.role.pricingModel) {
    errors.push("Preferred pricing model");
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

  return errors;
}

function validateSolutions() {
  const errors = [];

  if (!getSelectedFlowLabels().length) {
    errors.push("Collections or disbursements interest");
  }

  return errors;
}

function validateMarkets() {
  return [];
}

function validateCollections() {
  const errors = [];

  if (!state.collections.senderTypes.length) {
    errors.push("Originating user type");
  }
  if (!state.collections.receiverTypes.length) {
    errors.push("Receiving user type");
  }
  if (
    (state.collections.senderTypes.includes("businesses") ||
      state.collections.receiverTypes.includes("businesses")) &&
    !state.collections.highRiskIndustries
  ) {
    errors.push("High risk industry status");
  }
  if (!state.collections.payerCount) {
    errors.push("Number of payer users");
  }
  if (!state.collections.payerCountBasis) {
    errors.push("Whether payer users are actual or estimated");
  }
  if (!state.collections.senderCountries.length) {
    errors.push("From countries");
  }
  if (!state.collections.senderCurrencies.length) {
    errors.push("From currencies");
  }
  if (!state.collections.receiverCountries.length) {
    errors.push("To countries");
  }
  if (!state.collections.receiverCurrencies.length) {
    errors.push("To currencies");
  }

  return errors;
}

function validateDisbursements() {
  const errors = [];

  if (!state.disbursements.senderTypes.length) {
    errors.push("Sending user type");
  }
  if (!state.disbursements.receiverTypes.length) {
    errors.push("Receiving user type");
  }
  if (
    (state.disbursements.senderTypes.includes("businesses") ||
      state.disbursements.receiverTypes.includes("businesses")) &&
    !state.disbursements.highRiskIndustries
  ) {
    errors.push("High risk industry status");
  }
  if (!state.disbursements.payeeCount) {
    errors.push("Number of payee users");
  }
  if (!state.disbursements.payeeCountBasis) {
    errors.push("Whether payee users are actual or estimated");
  }
  if (!state.disbursements.senderCountries.length) {
    errors.push("From countries");
  }
  if (!state.disbursements.senderCurrencies.length) {
    errors.push("From currencies");
  }
  if (!state.disbursements.receiverCountries.length) {
    errors.push("To countries");
  }
  if (!state.disbursements.receiverCurrencies.length) {
    errors.push("To currencies");
  }

  return errors;
}

function isModuleSelected(moduleKey) {
  const module = state.modules[moduleKey];
  return module.current || module.interested;
}

function getSelectedModuleLabels() {
  return MODULES.filter((module) => isModuleSelected(module.key)).map((module) => module.label);
}

function getSelectedFlowLabels() {
  return MODULES.filter(
    (module) => FLOW_MODULE_KEYS.includes(module.key) && isModuleSelected(module.key)
  ).map((module) => module.label);
}

function getSelectedFlowPhrase() {
  const labels = getSelectedFlowLabels().map((label) => label.toLowerCase());
  return formatList(labels) || "your selected payment flows";
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
  syncCurrenciesForCountrySelection(path);
}

function syncCurrenciesForCountrySelection(path) {
  const currencyPath =
    path === "collections.senderCountries"
      ? "collections.senderCurrencies"
      : path === "collections.receiverCountries"
        ? "collections.receiverCurrencies"
        : path === "disbursements.senderCountries"
          ? "disbursements.senderCurrencies"
        : path === "disbursements.receiverCountries"
          ? "disbursements.receiverCurrencies"
          : "";

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
  const pairedCountryPath =
    path === "collections.senderCurrencies"
      ? "collections.senderCountries"
      : path === "collections.receiverCurrencies"
        ? "collections.receiverCountries"
        : path === "disbursements.senderCurrencies"
          ? "disbursements.senderCountries"
        : path === "disbursements.receiverCurrencies"
          ? "disbursements.receiverCountries"
          : "";

  if (!pairedCountryPath) {
    return [];
  }

  const suggestedCurrencies = new Set(
    getCurrenciesForCountries(getValueByPath(state, pairedCountryPath))
  );

  return currentCurrencies.filter((currency) => !suggestedCurrencies.has(currency));
}

function getSearchSelectorDefinition(path) {
  return SEARCH_SELECTOR_DEFINITIONS[path] || {
    options: [],
    placeholder: "Search",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected items will appear here.",
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
      input.focus();
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
  if (!SUBMISSION_WEBHOOK_URL) {
    return "Submission service is not configured. Paste your Zapier webhook URL into `submissionWebhookUrl` in config.js before deploying this form.";
  }

  submissionState.status = "submitting";
  render();

  const payload = buildSubmissionPayload();

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
    _hsq.push(["identify", {
      email: state.contact.email,
      firstname: state.contact.firstName,
      lastname: state.contact.lastName,
      company: state.company.companyName,
    }]);
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
  const rawData = cloneSubmissionState(state);

  return {
    event: "veem.partner_onboarding.submitted",
    submissionId: generateSubmissionId(),
    submittedAt: new Date().toISOString(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
    contact: rawData.contact,
    company: rawData.company,
    summary: buildSummary(),
    rawData,
    responses: rawData,
  };
}

function buildSummary() {
  const entityTypeLabel = labelForOption(ENTITY_TYPES, state.company.entityType);
  const pricingModelLabel = state.role.pricingModel === "revshare" ? "Revenue share" : state.role.pricingModel === "wholesale" ? "Wholesale pricing" : "N/A";
  const selectedFlows = getSelectedFlowLabels();
  const selectedCountries = state.operatingCountries
    .map((code) => countryLookup.get(code)?.name || code)
    .join(", ");
  const paymentMethodSummary = summarizeInterestGroup(PAYMENT_METHODS, state.paymentMethods);
  const servicesSummary = summarizeInterestGroup(ADDITIONAL_SERVICES, state.additionalServices);
  const lines = [
    "Veem partner onboarding response",
    "",
    `Contact: ${state.contact.firstName} ${state.contact.lastName}`.trim(),
    `Email: ${state.contact.email || "N/A"}`,
    `WhatsApp: ${state.contact.whatsapp || "N/A"}`,
    `Company: ${state.company.companyName || "N/A"}`,
    `Entity type: ${entityTypeLabel || "N/A"}`,
    `URL: ${state.company.url || "N/A"}`,
    "",
    `Selected flows: ${selectedFlows.length ? formatList(selectedFlows) : "N/A"}`,
    `Flow of funds business: ${state.role.inFlow || "N/A"}`,
    `Licensed in operating countries: ${state.role.licensed || "N/A"}`,
    `Additional licenses: ${state.role.additionalLicenses || "N/A"}`,
    `Additional license locations: ${state.role.additionalLicenseLocations || "N/A"}`,
    `Pricing model: ${pricingModelLabel}`,
    "",
    `Revenue range: ${state.financials.revenueRange || "N/A"}`,
    `Expected company growth (next 12 months): ${state.financials.companyGrowth}%`,
    `Annual volume range: ${state.financials.annualVolumeRange || "N/A"}`,
    `Payment count range: ${state.financials.paymentCountRange || "N/A"}`,
    `Average ticket size: ${currencyFormatter.format(Number(state.financials.averageTicket || 0))}`,
    "",
    `Operating countries: ${selectedCountries || "N/A"}`,
    `Currencies: ${state.currencies.join(", ") || "N/A"}`,
    `Products: ${paymentMethodSummary || "N/A"}`,
    `Additional services: ${servicesSummary || "N/A"}`,
  ];

  if (isModuleSelected("collections")) {
    lines.push(
      "",
      `Collections sender types: ${state.collections.senderTypes.join(", ") || "N/A"}`,
      `Collections receiver types: ${state.collections.receiverTypes.join(", ") || "N/A"}`,
      `High risk industries: ${state.collections.highRiskIndustries || "N/A"}`,
      `Collections payer count: ${state.collections.payerCount || "N/A"} (${state.collections.payerCountBasis})`,
      `Collections from countries: ${state.collections.senderCountries
        .map((code) => countryLookup.get(code)?.name || code)
        .join(", ") || "N/A"}`,
      `Collections from currencies: ${state.collections.senderCurrencies.join(", ") || "N/A"}`,
      `Collections to countries: ${state.collections.receiverCountries
        .map((code) => countryLookup.get(code)?.name || code)
        .join(", ") || "N/A"}`,
      `Collections to currencies: ${state.collections.receiverCurrencies.join(", ") || "N/A"}`
    );
  }

  if (isModuleSelected("disbursements")) {
    lines.push(
      "",
      `Disbursements sender types: ${state.disbursements.senderTypes.join(", ") || "N/A"}`,
      `Disbursements receiver types: ${state.disbursements.receiverTypes.join(", ") || "N/A"}`,
      `High risk industries: ${state.disbursements.highRiskIndustries || "N/A"}`,
      `Disbursements payee count: ${state.disbursements.payeeCount || "N/A"} (${state.disbursements.payeeCountBasis})`,
      `Disbursements from countries: ${state.disbursements.senderCountries
        .map((code) => countryLookup.get(code)?.name || code)
        .join(", ") || "N/A"}`,
      `Disbursements from currencies: ${state.disbursements.senderCurrencies.join(", ") || "N/A"}`,
      `Disbursements to countries: ${state.disbursements.receiverCountries
        .map((code) => countryLookup.get(code)?.name || code)
        .join(", ") || "N/A"}`,
      `Disbursements to currencies: ${state.disbursements.receiverCurrencies.join(", ") || "N/A"}`
    );
  }

  lines.push(
    "",
    `Additional info: ${state.additionalInfo || "N/A"}`
  );

  return lines.join("\n");
}

function summarizeInterestGroup(items, groupState) {
  return items
    .filter((item) => groupState[item.key].current || groupState[item.key].interested)
    .map((item) => {
      const entry = groupState[item.key];
      const states = [
        entry.current ? "current" : "",
        entry.interested ? "interested" : "",
      ].filter(Boolean);

      if (Object.prototype.hasOwnProperty.call(entry, "share")) {
        return `${item.label} (${states.join(" + ")}, ${entry.share}% ${entry.shareBasis})`;
      }

      return `${item.label} (${states.join(" + ")})`;
    })
    .join(", ");
}

function labelForOption(options, value) {
  return options.find((option) => option.value === value)?.label || value;
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

  snapshot.countryScrolls.forEach(({ key, top }) => {
    const selector = `[data-country-scroll="${escapeSelectorValue(key)}"]`;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollTop = top;
    }
  });

  window.scrollTo({ top: snapshot.windowScrollY });

  if (snapshot.activeSelector) {
    const selector = `[data-selector-search="${escapeSelectorValue(snapshot.activeSelector.path)}"]`;
    const input = document.querySelector(selector);
    if (input instanceof HTMLInputElement) {
      input.focus();
      input.setSelectionRange(snapshot.activeSelector.start, snapshot.activeSelector.end);
    }
  }
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
