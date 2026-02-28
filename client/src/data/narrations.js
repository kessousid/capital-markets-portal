// Timed narration cues — one sentence per visual event.
// Structure: NARRATIONS[moduleId][sceneIndex] = array of cue strings
//   cue[0]  → spoken at t=0 (scene start, before any bullet)
//   cue[i]  → spoken when bullet i-1 appears (t = bulletInterval × i)
// Each cue is ≤15 words so it finishes before the next bullet fires.

export const NARRATIONS = {

  /* ── MODULE 1: Introduction to Capital Markets ─────────────────────────── */
  'module-1': [
    // Scene 1 — What Are Capital Markets? (52s, 4 bullets → interval ~10.4s)
    [
      "Capital markets exist to move money from savers to those who need it.",
      "Equity and bond markets together form the core of the system.",
      "Every market has both a primary layer for new issuance and a secondary trading layer.",
      "Without intermediaries like banks and brokers, this matching process would be impossibly slow.",
      "Price discovery — finding the fair value of assets — is the market's deepest contribution."
    ],
    // Scene 2 — Market Participants & Roles (48s, 5 bullets → interval ~8s)
    [
      "Each participant in capital markets plays a specific, irreplaceable role.",
      "Retail investors are the smallest individually, but collectively enormous in scale.",
      "Institutional investors like pension funds aggregate capital into pools large enough to fund nations.",
      "Investment banks earn their fees by taking on the risk of underwriting new issuances.",
      "Market makers earn the bid-ask spread in exchange for always being willing to trade.",
      "Regulators set the rules, but enforcement is what actually makes markets trustworthy."
    ],
    // Scene 3 — Primary vs Secondary Markets (50s, 4 bullets → interval ~10s)
    [
      "The distinction between primary and secondary markets explains how capital actually flows.",
      "In a primary market transaction, new money reaches the issuing company directly.",
      "An IPO is the most visible primary market event — a company's financial debut.",
      "Without a liquid secondary market, investors would never commit to primary offerings.",
      "Exchanges like the NYSE are the infrastructure that makes secondary trading possible."
    ],
    // Scene 4 — Economic Role (46s, 4 bullets → interval ~9.2s)
    [
      "Capital markets perform a function no central planner could replicate.",
      "They aggregate dispersed information into a single price that guides resource allocation.",
      "When Tesla's stock rises, it signals that capital should flow toward electric vehicles.",
      "Derivatives markets look enormous in notional terms, but actual risk is far smaller.",
      "The real economy and capital markets are deeply interconnected feedback loops."
    ]
  ],

  /* ── MODULE 2: Equity Markets & Stock Trading ───────────────────────────── */
  'module-2': [
    // Scene 1 — Stock Market Fundamentals (52s, 5 bullets → interval ~8.7s)
    [
      "Buying a share means buying a proportional claim on a company's future earnings.",
      "Common stock gives you voting rights and residual value after all debts are paid.",
      "Preferred shareholders trade voting rights for a fixed, priority dividend stream.",
      "The stock price is the market's continuously updated estimate of all future cash flows.",
      "When price diverges from intrinsic value, that gap is where investment opportunities live.",
      "Understanding the P/E ratio is the starting point for any equity valuation conversation."
    ],
    // Scene 2 — Order Types & Trading Mechanics (50s, 5 bullets → interval ~8.3s)
    [
      "The order book is a live, transparent record of every buyer's and seller's intentions.",
      "A market order guarantees execution but surrenders control over the exact price.",
      "A limit order gives you price control but introduces the risk of never being filled.",
      "The stop-loss order is an automatic exit — it turns a limit into a market order at your floor.",
      "Bid-ask spread is an invisible transaction tax paid on every trade you make.",
      "In fast-moving markets, even a small spread can represent a significant cost over time."
    ],
    // Scene 3 — Stock Valuation Methods (54s, 5 bullets → interval ~9s)
    [
      "Valuing a company is part rigorous analysis and part informed judgment.",
      "DCF is theoretically pure but entirely dependent on assumptions about an unknowable future.",
      "P/E multiples are fast and intuitive, but only meaningful when companies are truly comparable.",
      "EV/EBITDA removes capital structure differences, making cross-company comparisons cleaner.",
      "The Dividend Discount Model is elegant but only works for mature, consistently paying firms.",
      "Skilled analysts triangulate across methods, treating each as a reality check on the others."
    ],
    // Scene 4 — Market Indices & Benchmarks (44s, 5 bullets → interval ~7.3s)
    [
      "Indices compress thousands of companies into a single trackable number.",
      "The S&P 500 is market-cap weighted, so five stocks can move the entire index.",
      "NASDAQ's tech concentration makes it a proxy for growth sentiment globally.",
      "The Dow is price-weighted — a quirk that makes high-priced stocks disproportionately influential.",
      "The Russell 2000 captures small-cap America, often leading broader market turning points.",
      "Indices are not just benchmarks — they are themselves tradeable through ETFs and futures."
    ]
  ],

  /* ── MODULE 3: Fixed Income & Bond Markets ──────────────────────────────── */
  'module-3': [
    // Scene 1 — Bond Basics (52s, 5 bullets → interval ~8.7s)
    [
      "A bond is simply a formal loan cast in tradeable form.",
      "The coupon rate is fixed at issuance but the bond's market price changes daily.",
      "Face value is what you receive at maturity — typically one thousand dollars per bond.",
      "Yield to maturity captures total return, including price appreciation or discount.",
      "Duration is the risk dial — higher duration means higher sensitivity to rate moves.",
      "Understanding convexity explains why bond prices fall less than duration alone predicts."
    ],
    // Scene 2 — The Yield Curve (50s, 5 bullets → interval ~8.3s)
    [
      "The yield curve photographs the entire spectrum of interest rates at one moment.",
      "A normal upward slope reflects healthy growth expectations and term risk premiums.",
      "When the curve inverts, the market is betting on future rate cuts to fight a slowdown.",
      "Every US recession since 1950 was preceded by an inverted yield curve.",
      "The flat curve signals maximum uncertainty — investors see equal risk at all maturities.",
      "Central bank policy dominates the short end; long-term growth expectations drive the rest."
    ],
    // Scene 3 — Credit Ratings & Bond Types (48s, 5 bullets → interval ~8s)
    [
      "Credit ratings compress complex financial analysis into a two-letter grade.",
      "Investment grade begins at triple-B minus — below that is high yield territory.",
      "The credit spread is the extra yield investors demand above a risk-free Treasury.",
      "A single downgrade can trigger forced selling from pension and insurance fund mandates.",
      "The Big Three agencies — Moody's, S&P, and Fitch — rate ninety-five percent of debt globally.",
      "Rating agencies failed spectacularly in 2008, reminding investors to do their own analysis."
    ],
    // Scene 4 — Bond Pricing & Rate Risk (50s, 5 bullets → interval ~8.3s)
    [
      "Bond prices and interest rates move in opposite directions — always.",
      "When new bonds offer higher yields, existing lower-coupon bonds must fall in price to compete.",
      "A one percent rate rise causes roughly an eight to ten percent loss on a ten-year bond.",
      "Duration tells you the approximate price change per one percent yield movement.",
      "Convexity is the curvature that makes bonds fall less than duration predicts when rates rise.",
      "Short-duration bonds sacrifice yield but provide crucial protection in rising rate environments."
    ]
  ],

  /* ── MODULE 4: Money Markets & Short-Term Instruments ──────────────────── */
  'module-4': [
    // Scene 1 — Money Market Overview (48s, 5 bullets → interval ~8s)
    [
      "Money markets are the financial system's circulatory system for daily liquidity.",
      "These instruments are designed to be as close to cash as possible while still earning.",
      "High liquidity means you can convert to cash within hours at minimal cost.",
      "Low credit risk makes money markets the parking spot for institutional cash reserves.",
      "SOFR and the Fed Funds Rate are the benchmark anchors for this entire market.",
      "When money markets froze in 2008, corporations couldn't fund payroll within days."
    ],
    // Scene 2 — Treasury Bills (46s, 5 bullets → interval ~7.7s)
    [
      "A T-bill is the simplest financial instrument: lend to the government, receive more back.",
      "T-bills are issued at a discount — you buy below face value and redeem at full value.",
      "Maturities range from four weeks to fifty-two weeks, covering a range of funding needs.",
      "The weekly auction process lets the market set the rate through competitive bidding.",
      "The T-bill yield is the foundation rate upon which all other instruments are priced.",
      "No coupon payments, no complexity — T-bills are finance at its most fundamental."
    ],
    // Scene 3 — Repurchase Agreements (50s, 5 bullets → interval ~8.3s)
    [
      "A repo is essentially a collateralised overnight loan between financial institutions.",
      "The borrower sells bonds as collateral and agrees to repurchase them at a higher price.",
      "That price difference is the repo rate — the cost of short-term secured borrowing.",
      "Tri-party repos use a custodian bank to handle collateral, reducing operational risk.",
      "SOFR is calculated directly from over one trillion dollars of daily repo transactions.",
      "The repo market's size and interconnectedness make it systemically critical to global finance."
    ],
    // Scene 4 — Commercial Paper & SOFR (46s, 5 bullets → interval ~7.7s)
    [
      "Commercial paper lets investment-grade companies borrow short-term without a bank.",
      "It's an unsecured IOU — the issuer's credit quality is the only protection for buyers.",
      "Maturities up to two-hundred-seventy days keep CP outside SEC registration requirements.",
      "SOFR replaced LIBOR in 2023, ending a survey-based benchmark prone to manipulation.",
      "SOFR's grounding in real transactions makes it fundamentally more trustworthy than LIBOR.",
      "The CP market's near-collapse in 2008 forced the Fed to intervene as buyer of last resort."
    ]
  ],

  /* ── MODULE 5: Derivatives ──────────────────────────────────────────────── */
  'module-5': [
    // Scene 1 — Derivatives Overview (50s, 5 bullets → interval ~8.3s)
    [
      "Derivatives derive their value from an underlying asset, rate, or index.",
      "At their core, they redistribute risk from those who don't want it to those who do.",
      "The four main types are options, futures, forwards, and swaps.",
      "Exchange-traded derivatives are transparent and standardised; OTC contracts are customised.",
      "Notional value overstates true risk — only net cash flows actually change hands.",
      "Without derivatives, airlines, farmers, and banks could not manage their price exposures."
    ],
    // Scene 2 — Options: Calls & Puts (54s, 5 bullets → interval ~9s)
    [
      "An option grants the right but never the obligation to transact at a fixed price.",
      "Call options profit when the underlying rises above the strike price.",
      "Put options profit when the underlying falls below the strike price.",
      "The premium is the maximum loss for a buyer — a defined, limited downside.",
      "In-the-money means exercising immediately would generate a positive payoff.",
      "Black-Scholes showed that options pricing is fundamentally a problem of volatility, not direction."
    ],
    // Scene 3 — Futures & Forwards (52s, 4 bullets → interval ~10.4s)
    [
      "Both futures and forwards lock in a price for a future transaction.",
      "Futures are standardised exchange contracts with daily mark-to-market settlements.",
      "Forwards are bilateral and customisable, but carry counterparty credit risk.",
      "Initial margin is a good-faith deposit — typically two to ten percent of notional.",
      "Basis risk arises when the hedge instrument doesn't perfectly match the underlying exposure."
    ],
    // Scene 4 — Interest Rate Swaps (54s, 5 bullets → interval ~9s)
    [
      "A swap exchanges one cash flow stream for another between two counterparties.",
      "The plain vanilla swap trades fixed payments for floating rate payments.",
      "Crucially, the notional principal is never exchanged — only net interest differences.",
      "A company might issue floating debt and swap to fixed to lock in budget certainty.",
      "Swap spreads reveal how credit risk is priced relative to risk-free rates.",
      "Interest rate swaps are the most traded derivative globally, exceeding five-hundred trillion notional."
    ]
  ],

  /* ── MODULE 6: Portfolio Management & MPT ──────────────────────────────── */
  'module-6': [
    // Scene 1 — MPT Basics (52s, 5 bullets → interval ~8.7s)
    [
      "Markowitz's insight was that portfolio risk depends on how assets move together.",
      "Diversification reduces risk without necessarily reducing expected return.",
      "The efficient frontier shows the best achievable return for every level of risk.",
      "Correlation is the key variable — low correlation between assets drives diversification benefits.",
      "Adding an imperfectly correlated asset always improves the portfolio's risk-return trade-off.",
      "The Sharpe ratio measures how much excess return you earn per unit of volatility accepted."
    ],
    // Scene 2 — Asset Allocation (50s, 5 bullets → interval ~8.3s)
    [
      "Brinson's study showed ninety percent of long-run return variation comes from asset allocation.",
      "Strategic allocation sets the long-term target mix between asset classes.",
      "Tactical allocation allows short-term deviations based on current market views.",
      "The classic sixty-forty portfolio faced its worst test during the 2022 rate shock.",
      "The Yale Endowment Model substitutes illiquid alternatives for traditional stocks and bonds.",
      "Rebalancing is disciplined selling of winners and buying of laggards to restore targets."
    ],
    // Scene 3 — CAPM & SML (54s, 5 bullets → interval ~9s)
    [
      "CAPM answers the fundamental question: what return should any risky asset offer?",
      "Expected return equals the risk-free rate plus a premium for systematic risk.",
      "Beta measures how much an asset amplifies or dampens the market's movements.",
      "A beta of one point five means the stock moves fifty percent more than the market.",
      "The Security Market Line plots this relationship — every asset should lie on it in equilibrium.",
      "Alpha is the vertical distance above the line — evidence of genuine manager skill."
    ],
    // Scene 4 — Factor Investing (50s, 5 bullets → interval ~8.3s)
    [
      "Factor investing looks beyond market beta for systematic return premiums.",
      "The value factor exploits investor overvaluation of glamour stocks relative to cheap ones.",
      "Size premium reflects the extra return historically earned by small-cap stocks.",
      "Momentum captures the tendency of recent winners to continue outperforming short-term.",
      "Quality factor rewards profitable, stable companies with strong balance sheets.",
      "Smart beta packages these factors transparently at a fraction of active management fees."
    ]
  ],

  /* ── MODULE 7: Risk Management & Risk Metrics ───────────────────────────── */
  'module-7': [
    // Scene 1 — Types of Financial Risk (50s, 5 bullets → interval ~8.3s)
    [
      "Financial risk management requires thinking simultaneously across multiple dimensions.",
      "Market risk comes from adverse moves in prices, rates, or currency exchange rates.",
      "Credit risk is the danger that a counterparty defaults on what they owe you.",
      "Liquidity risk means you can't exit a position at fair value when you need to.",
      "Operational risk covers everything from trading errors to fraud to systems failures.",
      "Systemic risk is the contagion that can turn one institution's failure into a market crisis."
    ],
    // Scene 2 — Value at Risk (54s, 5 bullets → interval ~9s)
    [
      "VaR answers: how much can we lose, at a given confidence level, over a set horizon?",
      "A ninety-nine percent one-day VaR of two million means one percent chance of exceeding that.",
      "Historical simulation uses actual past returns without assuming a normal distribution.",
      "Parametric VaR assumes normality — dangerously underestimating tail events.",
      "Monte Carlo VaR generates thousands of simulated scenarios for richer tail estimation.",
      "VaR's fatal flaw: it says nothing about how large losses get when the threshold is breached."
    ],
    // Scene 3 — Stress Testing (48s, 5 bullets → interval ~8s)
    [
      "Stress testing asks what happens when markets stop behaving normally.",
      "Historical scenarios apply real past crisis moves to today's portfolio.",
      "Scenario analysis quantifies impact of specific events like a sovereign default.",
      "Reverse stress testing asks which scenario would push the firm to failure.",
      "Regulatory stress tests — DFAST and CCAR — require banks to prove resilience publicly.",
      "Tail risk hedging uses options to limit catastrophic losses before they occur."
    ],
    // Scene 4 — Greeks & Hedging (48s, 5 bullets → interval ~8s)
    [
      "The Greeks give options traders a complete risk dashboard across every market dimension.",
      "Delta tells you the profit or loss per one dollar move in the underlying asset.",
      "Gamma measures how quickly delta itself changes — critical near expiry.",
      "Vega quantifies sensitivity to implied volatility — often the dominant risk in practice.",
      "Theta is the daily cost of time decay — options lose value every single day they age.",
      "Delta hedging continuously adjusts the underlying position to keep the portfolio direction-neutral."
    ]
  ],

  /* ── MODULE 8: Market Regulations & Compliance ──────────────────────────── */
  'module-8': [
    // Scene 1 — Global Regulatory Landscape (50s, 5 bullets → interval ~8.3s)
    [
      "Financial regulation operates through overlapping layers from global to national level.",
      "The SEC enforces disclosure rules and prosecutes fraud in US securities markets.",
      "FINRA operates as a self-regulatory body specifically for broker-dealers.",
      "The FCA in the UK and ESMA in Europe set equivalent standards for their jurisdictions.",
      "The Basel Committee writes global banking capital rules that national regulators adopt.",
      "Regulatory arbitrage occurs when firms exploit gaps between jurisdictions — a permanent challenge."
    ],
    // Scene 2 — Post-Crisis Regulation (52s, 5 bullets → interval ~8.7s)
    [
      "The 2008 crisis exposed multiple simultaneous failures in the pre-crisis regulatory framework.",
      "Dodd-Frank was the US response — eight hundred pages of structural reform.",
      "The Volcker Rule prohibits banks from using depositor money for proprietary trading.",
      "Mandatory central clearing of derivatives brought OTC markets into the light.",
      "Basel Three forces banks to hold far more high-quality capital against risk-weighted assets.",
      "The countercyclical capital buffer requires banks to build reserves during good times."
    ],
    // Scene 3 — Market Abuse & Insider Trading (48s, 5 bullets → interval ~8s)
    [
      "Market integrity is the invisible foundation upon which investor trust rests.",
      "Insider trading means trading on material information not yet available to the public.",
      "Front-running executes trades ahead of known client orders — a clear breach of duty.",
      "Spoofing places and cancels orders purely to create a false impression of demand.",
      "Regulation FD requires companies to disclose material information to everyone simultaneously.",
      "Modern surveillance algorithms detect abnormal trading patterns before announcements in real time."
    ],
    // Scene 4 — ESG & Sustainable Finance (50s, 5 bullets → interval ~8.3s)
    [
      "ESG regulation is the fastest-growing area of financial compliance globally.",
      "Environmental factors include carbon emissions, climate risk, and resource consumption.",
      "Social factors cover labour standards, supply chain ethics, and community impact.",
      "Governance examines board composition, executive pay, and shareholder rights.",
      "Greenwashing — misleadingly labelling a fund as sustainable — is now actively prosecuted.",
      "The EU Taxonomy Regulation defines which economic activities genuinely qualify as sustainable."
    ]
  ]
}
