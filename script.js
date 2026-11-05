// https://github.com/IsThereAnyDeal/AugmentedSteam/blob/develop/src/js/Core/Currencies.ts
const steamCurrencies = [
  {
    id: 1,
    abbr: "USD",
    symbol: "$",
    hint: "United States Dollars",
    locale: "en-US",
  },
  { id: 2, abbr: "GBP", symbol: "£", hint: "British Pound", locale: "en-GB" },
  {
    id: 3,
    abbr: "EUR",
    symbol: "€",
    hint: "European Union Euro",
    locale: "de-DE",
  },
  { id: 4, abbr: "CHF", symbol: "CHF", hint: "Swiss Francs", locale: "de-CH" },
  {
    id: 5,
    abbr: "RUB",
    symbol: "pуб",
    hint: "Russian Rouble",
    locale: "ru-RU",
  },
  { id: 6, abbr: "PLN", symbol: "zł", hint: "Polish Złoty", locale: "pl-PL" },
  {
    id: 7,
    abbr: "BRL",
    symbol: "R$",
    hint: "Brazilian Reals",
    locale: "pt-BR",
  },
  { id: 8, abbr: "JPY", symbol: "¥", hint: "Japanese Yen", locale: "ja-JP" },
  {
    id: 9,
    abbr: "NOK",
    symbol: "kr",
    hint: "Norwegian Krone",
    locale: "nb-NO",
  },
  {
    id: 10,
    abbr: "IDR",
    symbol: "Rp",
    hint: "Indonesian Rupiah",
    locale: "id-ID",
  },
  {
    id: 11,
    abbr: "MYR",
    symbol: "RM",
    hint: "Malaysian Ringgit",
    locale: "ms-MY",
  },
  {
    id: 12,
    abbr: "PHP",
    symbol: ["P", "₱"],
    hint: "Philippine Peso",
    locale: "en-PH",
  },
  {
    id: 13,
    abbr: "SGD",
    symbol: "S$",
    hint: "Singapore Dollar",
    locale: "en-SG",
  },
  { id: 14, abbr: "THB", symbol: "฿", hint: "Thai Baht", locale: "th-TH" },
  {
    id: 15,
    abbr: "VND",
    symbol: "₫",
    hint: "Vietnamese Dong",
    locale: "vi-VN",
  },
  {
    id: 16,
    abbr: "KRW",
    symbol: "₩",
    hint: "South Korean Won",
    locale: "ko-KR",
  },
  { id: 17, abbr: "TRY", symbol: "TL", hint: "Turkish Lira", locale: "tr-TR" },
  {
    id: 18,
    abbr: "UAH",
    symbol: "₴",
    hint: "Ukrainian Hryvnia",
    locale: "uk-UA",
  },
  {
    id: 19,
    abbr: "MXN",
    symbol: "Mex$",
    hint: "Mexican Peso",
    locale: "es-MX",
  },
  {
    id: 20,
    abbr: "CAD",
    symbol: "CDN$",
    hint: "Canadian Dollars",
    locale: "en-CA",
  },
  {
    id: 21,
    abbr: "AUD",
    symbol: "A$",
    hint: "Australian Dollars",
    locale: "en-AU",
  },
  {
    id: 22,
    abbr: "NZD",
    symbol: "NZ$",
    hint: "New Zealand Dollar",
    locale: "en-NZ",
  },
  {
    id: 23,
    abbr: "CNY",
    symbol: "¥",
    hint: "Chinese Renminbi (yuan)",
    locale: "zh-CN",
  },
  { id: 24, abbr: "INR", symbol: "₹", hint: "Indian Rupee", locale: "en-IN" },
  {
    id: 25,
    abbr: "CLP",
    symbol: "CLP$",
    hint: "Chilean Peso",
    locale: "es-CL",
  },
  {
    id: 26,
    abbr: "PEN",
    symbol: "S/.",
    hint: "Peruvian Nuevo Sol",
    locale: "es-PE",
  },
  {
    id: 27,
    abbr: "COP",
    symbol: "COL$",
    hint: "Colombian Peso",
    locale: "es-CO",
  },
  {
    id: 28,
    abbr: "ZAR",
    symbol: "R ",
    hint: "South African Rand",
    locale: "en-ZA",
  },
  {
    id: 29,
    abbr: "HKD",
    symbol: "HK$",
    hint: "Hong Kong Dollar",
    locale: "zh-HK",
  },
  {
    id: 30,
    abbr: "TWD",
    symbol: "NT$",
    hint: "New Taiwan Dollar",
    locale: "zh-TW",
  },
  { id: 31, abbr: "SAR", symbol: "SR", hint: "Saudi Riyal", locale: "ar-SA" },
  {
    id: 32,
    abbr: "AED",
    symbol: "DH",
    hint: "United Arab Emirates Dirham",
    locale: "ar-AE",
  },
  {
    id: 34,
    abbr: "ARS",
    symbol: "ARS$",
    hint: "Argentine Peso",
    locale: "es-AR",
  },
  {
    id: 35,
    abbr: "ILS",
    symbol: "₪",
    hint: "Israeli New Shekel",
    locale: "he-IL",
  },
  {
    id: 37,
    abbr: "KZT",
    symbol: "₸",
    hint: "Kazakhstani Tenge",
    locale: "kk-KZ",
  },
  { id: 38, abbr: "KWD", symbol: "KD", hint: "Kuwaiti Dinar", locale: "ar-KW" },
  { id: 39, abbr: "QAR", symbol: "QR", hint: "Qatari Riyal", locale: "ar-QA" },
  {
    id: 40,
    abbr: "CRC",
    symbol: "₡",
    hint: "Costa Rican Colón",
    locale: "es-CR",
  },
  {
    id: 41,
    abbr: "UYU",
    symbol: "$U",
    hint: "Uruguayan Peso",
    locale: "es-UY",
  },
];

// --Global variables--

// Currency symbols as ["€"] and "EUR"
let TARGET_SYMBOL;
let TARGET_CURRENCY;

// Selects from the popup: first - from which, second - to which
let selectCurrencyFirst;
let selectCurrencySecond;

const CONFIG_SELECTOR = "[data-config]"; // Steam page config
const STORAGE_KEY = "steam_ext_user_country"; // key in sessionStorage for getting the country
const CACHE = "steam_cache_parse"; // chrome.storage key for the selected conversion

// Regexes for finding the user's country code in scripts and HTML pages
const COUNTRY_REGEX_SCRIPTS =
  /\\?"(?:wallet_country|country_code|COUNTRY|strCountryCode)\\?"\s*:\s*\\?"([A-Z]{2})\\?"/;
const COUNTRY_REGEX_HTML =
  /(?:g_strCountryCode\s*=\s*"|&quot;COUNTRY&quot;\s*:\s*&quot;|"COUNTRY"\s*:\s*"|"wallet_country"\s*:\s*")([A-Z]{2})(?:"|&quot;)/;

// --Price parsing--

function parseSteamPrice(rawPrice) {
  // In case the currency is not defined or there are no digits in the string
  if (!TARGET_SYMBOL || !/\d/.test(rawPrice)) return;

  // search for the currency symbol inside the string
  const matchedSymbol = TARGET_SYMBOL.find((sym) => rawPrice.includes(sym));
  if (!matchedSymbol) return;

  // because of specific currencies like "R$", "$U", "S/." we escape the regex for template input
  const escapedSym = matchedSymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // digits, spaces, dots and commas, starts - ends with a digit
  const numPattern = "\\d(?:[\\d\\s.,]*\\d)?";
  // sign at the start and at the end
  const priceRegex = new RegExp(
    `(${escapedSym}\\s*${numPattern}|${numPattern}\\s*${escapedSym})`,
  );
  const fullMatch = rawPrice.match(priceRegex)?.[0];
  if (!fullMatch) return;

  // keep only the number
  const rawNumber = fullMatch.replace(matchedSymbol, "").trim();
  let normalizedNumber = rawNumber.replace(/\s+/g, "");

  // parseFloat only accepts a dot, so normalize the decimal separator
  if (normalizedNumber.includes(",") && normalizedNumber.includes(".")) {
    // if there is a comma and a dot - the last sign is the decimal separator
    if (normalizedNumber.lastIndexOf(",") < normalizedNumber.lastIndexOf(".")) {
      // format 1,000.50
      normalizedNumber = normalizedNumber.replace(/,/g, "");
    } else {
      // format 1.000,50
      normalizedNumber = normalizedNumber.replace(/\./g, "").replace(",", ".");
    }
  } else if (normalizedNumber.includes(",")) {
    // only a comma, if 3 digits after it = thousands/fraction
    const parts = normalizedNumber.split(",");
    if (parts[parts.length - 1].length === 3) {
      normalizedNumber = normalizedNumber.replace(/,/g, "");
    } else {
      normalizedNumber = normalizedNumber.replace(",", ".");
    }
  }

  const amount = parseFloat(normalizedNumber);
  if (isNaN(amount)) return;

  return {
    symbol: matchedSymbol,
    amount,
    fullMatch,
  };
}

// --Detecting the user's country--

// get the country straight from the page (data-config / <script>)
/**
 * @returns {string|null}
 **/
function getCountryFromDOM() {
  const configEl = document.querySelector(CONFIG_SELECTOR);
  if (configEl?.dataset?.config) {
    try {
      const cfg = JSON.parse(configEl.dataset.config);
      if (cfg.COUNTRY) return cfg.COUNTRY;
    } catch (ignore) {}
  }

  // search in scripts
  for (const script of document.scripts) {
    if (!script.textContent) continue;
    const match = script.textContent.match(COUNTRY_REGEX_SCRIPTS);
    if (match?.[1]) return match[1];
  }

  return null;
}

// wrapper over fetch, to return null
/**
 * @param {string} url
 * @param {boolean} asJson
 * @returns {Promise<string|object|null>}
 */
async function safeFetch(url, asJson = false) {
  try {
    const res = await fetch(url, {
      credentials: "include", // use the user's cookies for the request
      headers: { Accept: asJson ? "application/json" : "text/html" },
    });
    if (!res.ok) return null;
    return asJson ? await res.json() : await res.text();
  } catch (error) {
    console.error(`[SteamCountry] Failed to fetch ${url}:`, error);
    return null;
  }
}

// country detection function - DOM | cache | requests to Steam
/**
 * @returns {Promise<string|null>}
 */
async function getSteamCountry() {
  // 1. take from the page
  const domCountry = getCountryFromDOM();
  if (domCountry) {
    sessionStorage.setItem(STORAGE_KEY, domCountry);
    return domCountry;
  }

  // 2. check for earlier detection in the session
  const cached = sessionStorage.getItem(STORAGE_KEY);
  if (cached) return cached;

  // 3. request directly to Steam
  const host = location.hostname;
  let resolvedCountry = null;

  if (host === "steamcommunity.com") {
    // in the community we take it from the marketplace data
    const marketData = await safeFetch("/market/account", true);
    resolvedCountry =
      marketData?.wallet_info?.wallet_country ||
      marketData?.country_code ||
      null;

    // fallback: extract it from the inventory page HTML
    if (!resolvedCountry) {
      const inventoryHtml = await safeFetch("/my/inventory/");
      resolvedCountry = inventoryHtml?.match(COUNTRY_REGEX_HTML)?.[1] || null;
    }
  } else if (host === "store.steampowered.com") {
    // in the store we look at the account page
    const accountHtml = await safeFetch("/account/");
    resolvedCountry = accountHtml?.match(COUNTRY_REGEX_HTML)?.[1] || null;
  }

  if (resolvedCountry) {
    sessionStorage.setItem(STORAGE_KEY, resolvedCountry);
  }

  return resolvedCountry;
}

// --Button with a menu on the page--

async function creationMenu() {
  const storage = await chrome.storage.local.get(CACHE);
  const parseCache = storage[CACHE];
  const isActive = Boolean(parseCache); // true = conversion is enabled
  const badgeText = isActive
    ? `${parseCache.currentCurrency} → ${parseCache.toCurrency}`
    : "Currency";

  const menu = document.createElement("div");
  menu.className = "menu-convert-currency scc-widget";
  menu.innerHTML = `
    <button class="btn-open-convert scc-trigger" title="Steam Currency Converter">
      <span class="scc-dot ${isActive ? "active" : ""}"></span>
      <span>${badgeText}</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 10l5-5 5 5"/><path d="M17 14l-5 5-5-5"/>
      </svg>
    </button>
  `;

  document.body.appendChild(menu);
}

// --Determining the store currency--

// find the user's currency by country and put it into TARGET_*
async function loadTarget() {
  const userCurrency = await getSteamCountry().then((c) => c);
  steamCurrencies.forEach((abbr) => {
    if (abbr.abbr.startsWith(userCurrency)) {
      TARGET_SYMBOL = [].concat(abbr.symbol); // symbol = string : array
      TARGET_CURRENCY = abbr.abbr;
    }
  });

  // if the currency was not found, parse the prices on the page
  if (!TARGET_CURRENCY) {
    const firstPrice = document.querySelectorAll(
      ".discount_prices, .discount_final_price",
    );
    for (const el of firstPrice) {
      if (el.textContent.includes("€")) {
        TARGET_CURRENCY = "EUR";
        TARGET_SYMBOL = ["€"];
        return;
      }
    }
  }
}

// by the currency code we find the locale for formatting
function searchCodeLocale(code) {
  for (const locale of steamCurrencies) {
    if (locale.abbr === code) return locale.locale;
  }
}

// --Replacing prices on the page--

async function cachedPage() {
  const storage = await chrome.storage.local.get(CACHE);
  const parseCache = storage[CACHE];
  if (parseCache) {
    // if the variables are empty - wait
    if (!TARGET_CURRENCY && !TARGET_SYMBOL) {
      await loadTarget();
    }

    if (!TARGET_SYMBOL) return;

    // walk the page through text nodes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
    );

    // accumulate all nodes that contain a currency symbol
    let node;
    const nodes = [];
    while ((node = walker.nextNode())) {
      if (TARGET_SYMBOL.some((sym) => node.textContent.includes(sym))) {
        nodes.push(node);
      }
    }

    const rate = parseCache.rate;
    nodes.forEach((el) => {
      const parse = parseSteamPrice(el.textContent);
      if (!parse) return;

      const rawSum = parse.amount * rate;
      // small sums are left with kopecks, large ones are rounded
      const sum = rawSum < 10 ? Number(rawSum.toFixed(2)) : Math.round(rawSum);

      // formatting the price for the locale of the target currency
      const formattedPrice = sum.toLocaleString(
        `${searchCodeLocale(parseCache.toCurrency)}`,
        {
          style: "currency",
          currency: `${parseCache.toCurrency}`,
          currencyDisplay: "symbol",
        },
      );
      // replacing the old price with the new one right in the text
      el.textContent = el.textContent.replace(parse.fullMatch, formattedPrice);
    });
  }
}
// --Getting the rate and caching--

// pull the rate from open.er-api and save it to chrome.storage
async function render(fromCurrency, toCurrency) {
  const get = (url) =>
    fetch(url)
      .then((r) => r.json())
      .catch(() => ({})); // if the request failed - return an empty object
  const d1 = await get(`https://open.er-api.com/v6/latest/${fromCurrency}`);
  const rate = d1?.rates?.[toCurrency];
  await chrome.storage.local.set({
    [CACHE]: {
      currentCurrency: fromCurrency,
      toCurrency: toCurrency,
      rate: rate,
    },
  });
}

// --Settings popup--

async function setupMenu() {
  const menu = document.querySelector(".menu-convert-currency");
  const btn = menu.querySelector(".btn-open-convert");
  let popupDiv = null; // lazy popup on the first click

  btn.addEventListener("click", async () => {
    // if the popup exists - show/hide it
    if (popupDiv) {
      popupDiv.classList.toggle("scc-hidden");
      return;
    }

    if (!TARGET_CURRENCY) {
      await loadTarget();
    }
    // re-read the cache
    const storage = await chrome.storage.local.get(CACHE);
    const parseCache = storage[CACHE];

    popupDiv = document.createElement("div");
    popupDiv.className = "scc-popup";

    selectCurrencyFirst = document.createElement("select");
    selectCurrencyFirst.className = "scc-select";
    selectCurrencySecond = document.createElement("select");
    selectCurrencySecond.className = "scc-select";

    // block with the current rate when conversion is enabled
    const rateBlock = parseCache
      ? `<div class="scc-rate-info">1 ${parseCache.currentCurrency} ≈ <b>${parseCache.rate} ${parseCache.toCurrency}</b></div>`
      : "";

    popupDiv.innerHTML = `
      <div class="scc-header">
        <span class="scc-title">Steam Converter</span>
        <span class="scc-badge">${parseCache ? "ACTIVE" : "OFF"}</span>
      </div>
      <div class="scc-field" id="scc-slot-first">
        <label class="scc-label">Store Currency (From)</label>
      </div>
      <div class="scc-field" id="scc-slot-second">
        <label class="scc-label">Target Currency (To)</label>
      </div>
      ${rateBlock}
      <button id="btn-save" class="scc-btn-primary" ${parseCache ? "disabled" : ""}>${parseCache ? "Already Converted" : "Convert Prices"}</button>
      <button id="btn-restart" class="scc-btn-secondary">Reset to Default</button>
    `;

    // insert the selects
    popupDiv.querySelector("#scc-slot-first").appendChild(selectCurrencyFirst);
    popupDiv
      .querySelector("#scc-slot-second")
      .appendChild(selectCurrencySecond);
    menu.appendChild(popupDiv);

    // fill both lists with currencies
    if (steamCurrencies) {
      selectCurrencyFirst.innerHTML = "";
      selectCurrencySecond.innerHTML = "";
      for (const x of steamCurrencies) {
        const label = `${x.abbr} (${x.symbol || x.abbr}) — ${x.hint}`;

        const optionFirst = document.createElement("option");
        optionFirst.textContent = label;
        optionFirst.value = x.abbr;
        selectCurrencyFirst.appendChild(optionFirst);

        const optionSecond = document.createElement("option");
        optionSecond.textContent = label;
        optionSecond.value = x.abbr;
        selectCurrencySecond.appendChild(optionSecond);
      }

      // "from" by default - the currency of the user's account
      if (TARGET_CURRENCY) {
        selectCurrencyFirst.value = TARGET_CURRENCY;
      }

      // "to" - the last currency choice
      if (parseCache?.toCurrency) {
        selectCurrencySecond.value = parseCache.toCurrency;
      }
    }

    // reset button - clear the cache and reload the page
    const btnRestart = document.getElementById("btn-restart");
    btnRestart.addEventListener("click", async () => {
      await chrome.storage.local.remove(CACHE);
      location.reload();
    });

    // convert button - take the rate -> cache -> reload
    const btnConvert = document.getElementById("btn-save");
    btnConvert.addEventListener("click", async () => {
      const fromCurrency = selectCurrencyFirst.value;
      const toCurrency = selectCurrencySecond.value;
      if (fromCurrency === toCurrency) return;

      btnConvert.disabled = true;
      btnConvert.textContent = "Converting...";
      await render(fromCurrency, toCurrency);
      location.reload();
    });
  });
}

(async () => {
  await creationMenu();
  await setupMenu();
  await loadTarget();
  await cachedPage();
})();

// --DOM Mutation Observer--

// Steam loads prices dynamically (scroll / filter) - re-run the replacement on DOM changes
let debounce = false;
const observer = new MutationObserver(() => {
  if (debounce) return; // throttle execution to avoid excessive calls
  debounce = true;
  setTimeout(() => {
    cachedPage();
    debounce = false;
  }, 30);
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});
