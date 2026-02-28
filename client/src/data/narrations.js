// Timed narration cues — speech-estimated scheduling.
// Structure: NARRATIONS[moduleId][sceneIndex] = array of cue strings
//
//   cue[0]   → spoken immediately when the scene starts (rich intro, ~70-80 words)
//   cue[i>0] → spoken after cue[i-1] finishes → bullet[i-1] appears at that moment
//
// Timing is derived dynamically in VideoPlayer via getCueTimes(), which estimates
// each cue's speaking duration and schedules the next one after it finishes.
// Bullets therefore always appear *after* their preceding commentary — no fixed gaps.

export const NARRATIONS = {

  /* ── MODULE 1: Introduction to Capital Markets ─────────────────────────── */
  'module-1': [

    // Scene 1 — What Are Capital Markets?
    [
      "Capital markets are the financial infrastructure that powers long-term economic growth across the globe. They exist to channel capital from those who have saved it — individuals, pension funds, insurance companies — to governments and corporations that need it to build, grow, and innovate. Without functioning capital markets, the gap between those who possess capital and those who need it to fund factories, hospitals, and technology could never be bridged efficiently. This system underpins virtually every aspect of modern economic life, and understanding it is the foundation for everything else in finance.",

      "This fundamental role of connecting savers to productive borrowers is what makes capital markets irreplaceable in any modern economy — no central planner could replicate it at scale.",

      "The primary market creates new securities and channels fresh capital directly to the issuer, while the secondary market provides the ongoing liquidity that makes investors willing to commit in the first place.",

      "Each participant — from the individual investor to the investment bank to the regulator — plays a defined, interdependent role that keeps the system efficient and trustworthy.",

      "Price discovery is perhaps the market's most powerful contribution: it converts millions of competing judgements about value into a single price that guides the allocation of capital across the entire economy."
    ],

    // Scene 2 — Market Participants & Roles
    [
      "Capital markets are animated by a diverse ecosystem of participants, each with distinct objectives, capabilities, and constraints that shape how they interact and trade. Understanding who these actors are and what drives them is essential to understanding how prices form and capital flows through the system. From the individual investor saving for retirement to the sovereign wealth fund managing hundreds of billions, every participant contributes to the price formation process. Their competing interests, aggregated through trading, produce the prices that allocate capital and signal where resources should flow across the economy.",

      "Retail investors may be small individually, but collectively they represent enormous, sentiment-driven capital flows — a force that has grown dramatically as commission-free trading and passive funds broadened market access.",

      "Institutional investors such as pension funds and insurance companies hold the majority of global financial assets, giving them outsized influence over market prices and the governance of major corporations.",

      "Investment banks bridge issuers and capital markets by underwriting new securities — committing to purchase and distribute them, absorbing the risk that not all will be placed with investors at the expected price.",

      "Market makers provide the continuous liquidity that makes markets functional, simultaneously quoting buy and sell prices so that other participants can transact without waiting for a natural counterparty.",

      "Regulators like the SEC and FINRA establish and enforce the rules of market conduct — without credible enforcement, investor confidence would erode and the flow of capital through markets would seize."
    ],

    // Scene 3 — Primary vs Secondary Markets
    [
      "Capital markets operate through two distinct but deeply interconnected layers, and understanding the difference between them is fundamental to understanding how capital actually flows through the economy. In the primary market, new securities are created and sold for the first time, with proceeds flowing directly to the issuing corporation or government as fresh capital. In the secondary market, those same securities are subsequently traded between investors, with no money flowing back to the original issuer at all. Crucially, the existence of a deep and liquid secondary market is the very thing that makes investors willing to commit capital in the primary market — because they know they can exit.",

      "In every primary market transaction, the issuing entity receives the proceeds directly — this is the moment when financial markets most visibly inject capital into the real economy.",

      "An IPO transforms a private company into a public one, giving early investors and founders a liquid market for their equity while raising fresh capital to fund the company's next phase of growth.",

      "Without a liquid secondary market offering ongoing price discovery and exit opportunities, no rational investor would lock up capital by participating in an illiquid primary market offering.",

      "Stock exchanges like the NYSE and NASDAQ provide the regulated infrastructure for secondary market trading — the matching systems, surveillance, and settlement processes that make high-volume trading reliable."
    ],

    // Scene 4 — Economic Role of Capital Markets
    [
      "Capital markets perform an economic function that goes far beyond simply matching buyers and sellers of securities. By aggregating millions of individual judgements about risk and return into observable prices, they generate a continuous real-time signal about where the economy should direct its scarce investment capital. When investors bid up valuations in a sector, they are implicitly directing resources toward it. When bond yields rise, they raise the cost of borrowing and constrain investment. These price signals are the invisible mechanism through which market economies allocate capital in ways that no central authority could engineer, and their accuracy determines how productively a society deploys its savings.",

      "The price aggregation function of capital markets turns dispersed private information held by millions of investors into public signals — a feat of information processing no single institution could replicate.",

      "Rising equity valuations in a sector signal that capital should flow there — this is how stock prices guide resource allocation in ways no regulator could prescribe or plan.",

      "Derivatives markets appear enormous in gross notional terms but actual economic risk transferred is far smaller — netting agreements and collateral dramatically reduce true bilateral exposures.",

      "The real economy and capital markets form a continuous feedback loop: corporate earnings drive valuations, and valuations determine the cost of capital that drives corporate investment and hiring decisions."
    ]
  ],

  /* ── MODULE 2: Equity Markets & Stock Trading ───────────────────────────── */
  'module-2': [

    // Scene 1 — Stock Market Fundamentals
    [
      "When you buy a share of stock, you are acquiring a proportional ownership stake in a real business — its assets, earnings, and future prospects. Equity markets provide the venue where these ownership claims are continuously valued by the collective judgement of every buyer and seller participating in the market. Unlike bonds, which promise contractually specified cash flows, equity holders participate directly in the upside and downside of business performance, with no guaranteed return and theoretically unlimited gain. This combination of ownership rights, residual claim, and unlimited upside makes equity the most dynamic and widely studied asset class in all of finance.",

      "Common stock grants shareholders voting rights and a residual claim on assets after all creditors are satisfied — meaning equity holders benefit most in success but bear the greatest losses in failure.",

      "Preferred shareholders receive a fixed dividend payment with priority over common shareholders, trading away governance influence for greater income certainty and better protection in a liquidation scenario.",

      "The stock price at any moment reflects the market's collective estimate of all future cash flows discounted back to the present — it is fundamentally a forward-looking forecast, not a backward-looking measure.",

      "When market price diverges significantly from estimated intrinsic value — either above or below — that gap is precisely where investment opportunities and risks are created for active investors.",

      "The price-to-earnings ratio is the most widely used shorthand for equity valuation, expressing how much the market will pay today for each dollar of current annual earnings."
    ],

    // Scene 2 — Order Types & Trading Mechanics
    [
      "Every transaction in an equity market is executed through a specific type of order, and understanding how those order types work is essential for any serious investor or trader. The modern electronic order book maintains a live, transparent record of all buy and sell intentions, continuously matching orders and generating the prices that everyone sees on their screens in real time. The choice of order type is not merely administrative — it determines whether you prioritise certainty of execution or certainty of price, a trade-off with direct and measurable financial consequences. Getting this right is the difference between a disciplined market participant and one who gives away money on every trade.",

      "A market order guarantees immediate execution at the best available price, but in fast-moving or thin markets that price can be significantly worse than expected — a phenomenon called slippage.",

      "A limit order gives complete control over the price you pay or receive, but introduces execution risk — if the market never reaches your specified price, the order simply goes unfilled.",

      "A stop-loss order sits dormant until the price reaches a specified threshold, then converts to a market order — providing automated downside protection without requiring constant position monitoring.",

      "The bid-ask spread is an implicit transaction cost paid on every single trade — negligible in liquid large-cap stocks, but potentially significant in thinly traded securities or volatile market conditions.",

      "In volatile markets, spreads widen as market makers demand greater compensation for holding inventory risk — meaning execution costs spike highest exactly when you are most urgently trying to trade."
    ],

    // Scene 3 — Stock Valuation Methods
    [
      "Valuing an equity security is one of the most demanding analytical tasks in finance, requiring the analyst to form reasonable estimates of future business performance in an inherently uncertain world. No single method provides definitive answers — skilled analysts triangulate across multiple approaches, treating each as a cross-check and reality test on the others. The goal is not to calculate a precise number but to develop a well-reasoned range of intrinsic value and then assess whether the current market price falls within it, below it, or dangerously above it. This discipline of fundamental analysis underpins value investing and all serious active portfolio management.",

      "Discounted cash flow analysis is theoretically the purest valuation method, equating a company's value to the present value of all its future free cash flows — but its output is entirely dependent on the quality of long-range forecast assumptions.",

      "Price-to-earnings multiples enable rapid comparison across companies, but are only meaningful when the businesses being compared are genuinely similar in growth rates, profit margins, and capital structure.",

      "Enterprise value to EBITDA removes the distortions caused by different capital structures and tax positions, making cross-company comparisons cleaner — and it is the preferred metric in leveraged buyout analysis.",

      "The dividend discount model elegantly values a stock as the present value of all future dividends, but its application is restricted to mature, consistently profitable companies with stable and predictable payout histories.",

      "Professional analysts use multiple valuation methods simultaneously, cross-referencing their outputs and interpreting the spread of results as a measure of genuine uncertainty rather than seeking false precision."
    ],

    // Scene 4 — Market Indices & Benchmarks
    [
      "Market indices are the essential scoreboard of global equity markets, compressing thousands of individual securities into a single trackable number that communicates market performance at a glance. But indices are far more than scorecards — they are the benchmarks against which every professional fund manager's performance is measured, the basis for trillions of dollars in passive investment products, and themselves directly tradeable instruments through futures contracts and exchange-traded funds. Understanding how indices are constructed — their weighting methodology, constituent selection rules, and periodic rebalancing — is critical to understanding the exposures you actually take on when you invest in them.",

      "The S&P 500 uses market-capitalisation weighting, which means the five or six largest companies by market value can account for more than twenty percent of the entire index's daily movement.",

      "NASDAQ's heavy concentration in technology and growth companies makes it a global proxy for risk appetite and investor sentiment toward innovation, disruption, and high-multiple business models.",

      "The Dow Jones Industrial Average uses a price-weighting methodology — a stock with a higher share price has more influence on the index regardless of company size, a methodological quirk from the nineteenth century.",

      "The Russell 2000 tracks small-capitalisation US companies and often leads the broader market at turning points, as smaller firms are more sensitive to domestic economic conditions and credit availability.",

      "Index-tracking ETFs and futures have transformed abstract benchmarks into directly investable instruments, allowing any investor to gain broad market exposure instantly, transparently, and at minimal cost."
    ]
  ],

  /* ── MODULE 3: Fixed Income & Bond Markets ──────────────────────────────── */
  'module-3': [

    // Scene 1 — Bond Basics
    [
      "A bond is fundamentally a formalised loan cast in tradeable form — the issuer borrows money and commits to repaying it with interest over a defined period. Unlike equity, which represents uncertain ownership, bonds are debt instruments with contractually specified cash flows: regular coupon payments and the return of face value at maturity. This contractual certainty makes bonds the cornerstone of income-oriented investing, the primary tool for liability matching in pension funds and insurance companies, and the dominant financing instrument for governments worldwide. Understanding how bonds are structured, priced, and measured for risk is the entry point into the world's largest financial market.",

      "The coupon rate is fixed at issuance and determines the periodic interest payments, but the bond's market price changes daily as prevailing interest rates rise or fall — these two move in opposite directions.",

      "Face value — typically one thousand dollars per bond — is the principal amount the issuer repays at maturity and the reference amount upon which all coupon payments are calculated throughout the bond's life.",

      "Yield to maturity captures the bond's total annualised return if held to maturity, incorporating both ongoing coupon income and any capital gain or loss from purchasing at a discount or premium to face value.",

      "Duration is the primary measure of interest rate sensitivity — a bond with higher duration will experience greater price change for any given move in yields, making it the central risk metric in fixed income.",

      "Convexity refines the duration estimate by accounting for the curvature in the price-yield relationship, explaining why bonds lose less and gain more than pure duration analysis alone would predict."
    ],

    // Scene 2 — The Yield Curve
    [
      "The yield curve is one of the most closely watched indicators in all of finance — a simple graph plotting interest rates across all government bond maturities at a single point in time. Its shape encodes the collective market view on economic growth, inflation expectations, and future central bank policy in a way no other single indicator can match. Professional investors, central bankers, and economists scrutinise the curve daily for signals about the economic trajectory. The yield curve is not merely a technical chart — it is the bond market's forward-looking verdict on the macroeconomic outlook, and it has an extraordinary and well-documented predictive track record going back decades.",

      "A normal, upward-sloping yield curve reflects healthy growth expectations and compensates investors for the additional duration risk of lending money over longer time periods at higher rates.",

      "Yield curve inversion — when short-term rates exceed long-term rates — signals that markets expect the central bank to cut rates in response to a weakening economy, historically the most reliable recession warning sign.",

      "Every US recession since 1950 has been preceded by a yield curve inversion, making this one of the most empirically validated and widely monitored leading economic indicators in financial history.",

      "A flat yield curve signals maximum uncertainty — investors price short and long maturities at roughly equal yields, often a transitional pattern appearing at critical turning points in the economic cycle.",

      "Central bank policy dominates the short end of the curve through its policy rate target, while the long end is driven by long-term growth expectations, inflation forecasts, and global capital flows seeking safe haven assets."
    ],

    // Scene 3 — Credit Ratings & Bond Types
    [
      "Credit ratings are the bond market's essential shorthand for risk — a standardised assessment of an issuer's ability and willingness to meet its debt obligations on a timely basis. The major rating agencies analyse financial statements, business models, competitive positions, and macroeconomic conditions to assign a grade that investors use to price credit risk and determine eligibility for their portfolios. The distinction between investment grade and high yield is not merely a label — it determines whether major institutional investors such as pension funds and insurance companies can legally hold the security under their mandates. Understanding the rating system is fundamental to understanding credit spreads and the mechanics of the bond market.",

      "Investment grade bonds carry ratings of triple-B minus or higher, indicating sufficient financial strength to service debt — below this threshold, bonds are classified as high yield or speculative grade, requiring higher returns to attract buyers.",

      "The credit spread — the additional yield demanded above a comparable risk-free Treasury — is the market's real-time pricing of default probability, widening sharply in periods of stress and compressing during benign conditions.",

      "A ratings downgrade below investment grade can trigger automatic, forced selling by pension funds and insurance companies whose mandates prohibit holding sub-investment-grade debt, creating sharp price dislocations.",

      "Moody's, Standard and Poor's, and Fitch collectively rate approximately ninety-five percent of the global debt market, giving their assessments extraordinary influence over the cost of borrowing for issuers worldwide.",

      "The 2008 financial crisis exposed catastrophic failures in rating methodology for structured products — a permanent reminder that ratings reflect the agency's opinion and carry no guarantee of actual creditworthiness."
    ],

    // Scene 4 — Bond Pricing & Rate Risk
    [
      "The inverse relationship between bond prices and interest rates is the most fundamental mechanical principle in fixed income markets, and one of the most counterintuitive concepts for investors new to the asset class. When prevailing market interest rates rise, newly issued bonds offer higher coupons, making existing lower-coupon bonds less attractive — their prices must fall until they yield the same as the new issues. When rates fall, existing higher-coupon bonds become more valuable relative to new ones, driving their prices upward. This price-yield dynamic governs the daily profit and loss of every bond portfolio in the world, and quantifying it precisely is the central task of fixed income risk management.",

      "When new bonds offer higher yields, older bonds must fall in price to remain competitive — this is the direct mechanical consequence of the coupon rate being fixed at the time of original issuance.",

      "A one percent rise in interest rates causes approximately an eight to ten percent loss on a ten-year bond — meaning duration risk in long-maturity bonds is comparable in magnitude to short-term equity volatility.",

      "Modified duration expresses a bond's price sensitivity in percentage terms — a bond with eight years of modified duration loses approximately eight percent in value for each one percent rise in yields.",

      "Convexity is the non-linear adjustment to duration: it explains why bond price declines from rising rates are less severe than duration alone predicts, and price gains from falling rates are greater than expected.",

      "Short-duration bonds sacrifice yield in exchange for dramatically lower interest rate sensitivity, making them the natural defensive position when rates are expected to rise or when preserving capital is the priority."
    ]
  ],

  /* ── MODULE 4: Money Markets & Short-Term Instruments ──────────────────── */
  'module-4': [

    // Scene 1 — Money Market Overview
    [
      "Money markets are the circulatory system of the global financial system — the vast network of markets where governments, financial institutions, and corporations borrow and lend cash on a short-term basis every single day. While long-term capital markets fund infrastructure and corporate expansion over years and decades, money markets keep the financial system itself operational by ensuring that banks, treasuries, and businesses have access to the liquidity they need on a day-to-day basis. The instruments traded here are characterised by very short maturities — from overnight to one year — combined with high credit quality and exceptional liquidity. When these markets function, they are nearly invisible; when they freeze, as happened in 2008, the entire financial system can be pushed to the edge of collapse within days.",

      "Money market instruments are engineered to be as close to cash as possible — convertible within hours at minimal cost and virtually no price risk, making them ideal for managing short-term liquidity.",

      "Their combination of high liquidity and low credit risk makes money market instruments the preferred destination for corporate treasury cash, institutional reserves, and central bank foreign exchange buffers.",

      "The Federal Funds Rate and SOFR anchor the pricing of virtually every money market instrument, serving as the floor rate from which all short-term borrowing costs are calculated.",

      "When money markets froze in the autumn of 2008, corporations found themselves unable to roll their short-term funding, threatening payroll and daily operations within seventy-two hours — revealing the systemic criticality of this market.",

      "Money market mutual funds hold these instruments and offer investors immediate liquidity at a stable net asset value, acting as the bridge between bank deposit safety and capital market returns."
    ],

    // Scene 2 — Treasury Bills
    [
      "Treasury bills are the simplest, most trusted short-term financial instrument in existence — a direct obligation of the United States government, backed by the full faith and credit of the world's largest economy. They are issued at a discount to face value and redeemed at full par at maturity, with the difference representing the investor's entire return — no coupon payments, no complexity. Because they carry no meaningful default risk and trade in an extraordinarily liquid market, T-bill yields serve as the global risk-free rate — the baseline benchmark against which virtually every other financial instrument in the world is priced.",

      "T-bills are issued at a discount to face value — you purchase them below par and receive full face value at maturity, with the difference representing your complete return over the holding period.",

      "Maturities span from four weeks to fifty-two weeks, giving the Treasury flexibility in its financing programme and offering investors a short-term spectrum with slightly different yields reflecting duration and liquidity.",

      "The weekly competitive auction is the mechanism through which the market collectively sets the T-bill rate — large institutional investors submit bids, and the clearing yield becomes the benchmark for the week.",

      "T-bill yields define the global risk-free rate, the foundational reference point upon which every credit spread, equity risk premium, and derivative is priced — a conceptual anchor for all of finance.",

      "No coupon, no optionality, no default history — T-bills are finance at its most fundamental, uniquely suited to capital preservation and as collateral in the world's most liquid short-term lending markets."
    ],

    // Scene 3 — Repurchase Agreements
    [
      "Repurchase agreements — known universally as repos — are the primary mechanism through which financial institutions fund their securities inventories and manage short-term liquidity on a daily basis. Economically, a repo is a collateralised overnight loan: one party sells securities to another with a contractual obligation to repurchase them the next day at a slightly higher price, with that price difference representing the interest charge. The repo market processes over one trillion dollars of transactions daily in the United States alone and underpins the functioning of the entire fixed income market. SOFR — the global benchmark interest rate that replaced LIBOR in 2023 — is calculated directly from overnight Treasury repo transactions, anchoring trillions of dollars in financial contracts worldwide.",

      "In a repo transaction, the borrower temporarily sells government bonds as collateral and commits to buying them back at a higher price the next day — that price difference is the repo rate, the cost of secured overnight borrowing.",

      "Tri-party repos use a third-party custodian bank to manage collateral selection and transfer, reducing operational complexity and settlement risk for both the cash lender and the securities borrower.",

      "SOFR is derived directly from over one trillion dollars of actual overnight repo transactions, making it a transparently calculated and manipulation-resistant rate — unlike the survey-based LIBOR it replaced in 2023.",

      "The repo market's enormous size, short tenor, and deep interconnectedness make it systemically critical — stress in repo markets transmits to every other part of the fixed income market almost instantaneously.",

      "Dealers use the repo market to fund enormous securities inventories overnight, making it the engine that powers the liquidity and market-making capacity that keeps the government bond market functioning smoothly."
    ],

    // Scene 4 — Commercial Paper & SOFR
    [
      "Commercial paper represents the short-term funding market for the highest-quality corporate borrowers — investment-grade companies that can issue unsecured promissory notes directly to institutional investors without the need for a bank intermediary. This market allows large corporations to manage short-term cash needs efficiently, borrowing for days to months at rates that are typically lower than bank credit facilities, simply on the strength of their credit reputation. The CP market is a real-time barometer of corporate credit confidence: when it functions, companies roll funding seamlessly; when it seizes, as in 2008, the consequences propagate rapidly through the entire economy. The transition from LIBOR to SOFR fundamentally changed the benchmark for hundreds of trillions of dollars in financial contracts globally.",

      "Commercial paper is an unsecured, short-term corporate IOU — there is no collateral backing the obligation, meaning the issuer's own credit quality and reputation are the investor's sole protection.",

      "Maturities of up to two hundred and seventy days keep CP outside the SEC's full registration requirements, allowing issuers to access short-term funding quickly and at far lower administrative cost than registered debt.",

      "The 2023 transition from LIBOR to SOFR replaced a benchmark set by bank surveys — proven susceptible to manipulation — with a rate derived from actual, observable, and verifiable overnight repo transactions.",

      "SOFR's grounding in real transactions makes it fundamentally more robust than LIBOR, eliminating the incentive for banks to shade their submissions to favour their own trading positions.",

      "When Lehman Brothers failed in 2008, the commercial paper market froze within forty-eight hours as money market funds broke the buck, forcing an unprecedented Federal Reserve intervention as the buyer of last resort."
    ]
  ],

  /* ── MODULE 5: Derivatives ──────────────────────────────────────────────── */
  'module-5': [

    // Scene 1 — Derivatives Overview
    [
      "Derivatives are financial instruments whose value is derived from the price of an underlying asset — whether a stock, bond, commodity, currency, interest rate, or index. Far from being exotic or purely speculative instruments, derivatives perform essential economic functions that the modern global economy depends upon: they allow airlines to hedge jet fuel costs, corporations to lock in borrowing rates, and farmers to secure prices for harvests months before delivery. The derivatives market is the largest in the world by notional value, with hundreds of trillions of dollars outstanding, yet the actual economic risk transferred is a fraction of these headline figures because positions net against each other. Understanding derivatives is understanding how finance manages risk at a systemic scale.",

      "Derivatives redistribute risk from those who need to eliminate it — hedgers exposed to price volatility — to those willing and able to assume it in exchange for a return — speculators and arbitrageurs.",

      "The four fundamental types — options, futures, forwards, and swaps — cover an enormous spectrum of risk management strategies, from locking in commodity prices to converting fixed debt to floating.",

      "Exchange-traded derivatives offer transparency, standardisation, and central clearing that eliminates counterparty risk, while OTC contracts provide customisation at the cost of bilateral credit exposure.",

      "Notional value dramatically overstates actual economic risk in derivatives markets — what matters in practice is the net cash flow exposure after netting agreements, close-out arrangements, and posted collateral.",

      "Without derivatives, agricultural producers could not plan seasonal investment, airlines could not manage fuel costs with confidence, and multinational corporations could not manage their foreign currency exposures at scale."
    ],

    // Scene 2 — Options: Calls & Puts
    [
      "Options are among the most powerful and flexible instruments in all of finance, granting the holder a right — but crucially, never an obligation — to buy or sell an underlying asset at a predetermined price within a defined period. This fundamental asymmetry between right and obligation is what makes options unique: the buyer's downside is strictly limited to the premium paid, while the upside for call holders is theoretically unlimited. Options can hedge existing positions, generate premium income, express directional views with defined risk, or construct virtually any custom risk-return profile imaginable. The mathematics of option pricing, culminating in the Black-Scholes model, is one of the most significant achievements in quantitative finance.",

      "Call options give the holder the right to buy the underlying asset at the strike price — they increase in value as the underlying rises above the strike, with theoretical upside unlimited on the long side.",

      "Put options give the holder the right to sell at the strike price — they function as portfolio insurance, becoming more valuable as the underlying asset falls below the strike price.",

      "The premium paid for an option represents the buyer's maximum possible loss — regardless of how dramatically the market moves against them, they cannot lose more than the premium already paid.",

      "An option is in-the-money when immediate exercise generates a positive payoff — above strike for calls, below strike for puts — with this intrinsic value forming the absolute floor of the option's market price.",

      "Black and Scholes demonstrated that options pricing is fundamentally about volatility and time to expiry — not the direction of price movement — a revolutionary insight that created the entire modern derivatives industry."
    ],

    // Scene 3 — Futures & Forwards
    [
      "Futures and forward contracts are the workhorses of risk management across commodity, currency, and financial markets — both instruments commit buyer and seller today to a transaction at a specified price on a future date. They serve identical economic purposes but differ fundamentally in structure: futures are standardised, exchange-traded, and settled daily through a central clearinghouse, while forwards are bilateral customised agreements settled on a single future date. This structural difference has profound implications for credit risk, flexibility, and liquidity, making each better suited to different applications. Futures markets also provide continuous price discovery for everything from crude oil and wheat to government bonds and stock indices.",

      "Exchange-traded futures contracts are standardised in size, delivery specifications, and settlement dates, with a clearinghouse interposing itself between every buyer and seller to eliminate bilateral counterparty default risk.",

      "Forward contracts are negotiated bilaterally between counterparties, offering complete customisation of contract size, settlement date, and terms — at the cost of bearing direct credit exposure to the counterparty for the life of the contract.",

      "Initial margin — the good-faith deposit required to hold a futures position — typically represents two to ten percent of notional value, creating significant leverage that can amplify both gains and losses.",

      "Basis risk arises when the hedging derivative does not perfectly track the underlying exposure being hedged — a perpetual challenge in risk management, particularly for commodity and cross-currency hedging applications."
    ],

    // Scene 4 — Interest Rate Swaps
    [
      "Interest rate swaps are the single most widely traded derivative instrument in the world, with hundreds of trillions of dollars in notional outstanding — yet they rest on a beautifully simple concept. Two counterparties agree to exchange a series of interest payments calculated on an agreed notional amount: one pays a fixed rate while the other pays a floating rate linked to a benchmark like SOFR, with only the net difference actually changing hands in cash. This allows corporations to manage their interest rate exposure with surgical precision — a company with floating-rate debt can effectively convert it to fixed through a swap without refinancing. Central banks, hedge funds, pension funds, and corporations continuously use swaps to align their interest rate exposure with their strategic and operational needs.",

      "The plain vanilla interest rate swap exchanges fixed-rate payments for floating-rate payments on a notional principal that is never itself exchanged — only the net interest difference changes hands between the two parties.",

      "Because only net interest differences are exchanged rather than any principal, actual credit exposure in a swap is a small fraction of its notional value, making swaps highly capital-efficient instruments.",

      "A corporation with floating-rate bonds might enter a receive-floating, pay-fixed swap, converting its variable interest cost into a predictable fixed rate for budgeting and financial planning purposes.",

      "Swap spreads — the difference between swap rates and equivalent-maturity Treasury yields — measure the credit premium of the banking system relative to risk-free rates, and widen sharply in periods of financial stress.",

      "Interest rate swaps are the world's most actively traded derivative, with daily transaction volumes exceeding several trillion dollars globally — reflecting the universal need to actively manage interest rate exposure across all sectors."
    ]
  ],

  /* ── MODULE 6: Portfolio Management & MPT ──────────────────────────────── */
  'module-6': [

    // Scene 1 — MPT Basics
    [
      "Modern Portfolio Theory, developed by Harry Markowitz in 1952 and recognised with a Nobel Prize, transformed investing from an art of picking individual securities into a rigorous science of constructing portfolios that optimise the relationship between risk and return. Markowitz's fundamental and revolutionary insight was that portfolio risk is not simply the weighted average of individual security risks — it depends critically on how those securities move in relation to each other. By combining assets whose returns are not perfectly correlated, investors can reduce overall portfolio volatility without sacrificing expected return, achieving what Markowitz described as the only free lunch in finance. This framework remains the theoretical foundation of institutional asset management, risk budgeting, and the entire passive investment industry.",

      "Diversification is the core free lunch in investing — combining assets with less-than-perfect correlation reduces portfolio volatility without necessarily reducing expected return, the insight that earned Markowitz his Nobel Prize.",

      "The efficient frontier plots every portfolio that achieves the maximum possible expected return at each level of risk — any portfolio lying below this frontier is suboptimal and can be improved by better diversification.",

      "Correlation is the decisive input in portfolio construction — assets with low or negative correlation to each other deliver the greatest variance-reducing diversification benefit when combined.",

      "Adding even a moderately correlated asset to an existing portfolio almost always improves its risk-return characteristics, which is why broad diversification consistently and demonstrably outperforms concentrated bets.",

      "The Sharpe ratio — excess return divided by portfolio standard deviation — provides a standardised risk-adjusted performance metric, enabling fair comparison across strategies with very different volatility profiles."
    ],

    // Scene 2 — Asset Allocation
    [
      "Asset allocation is the single most consequential investment decision a portfolio manager or individual investor makes — the choice of how to divide capital between major asset classes. Research consistently shows it explains the overwhelming majority of long-run portfolio return variation, dwarfing the contribution of individual security selection or market timing. The seminal Brinson, Hood, and Beebower study found that over ninety percent of return variation across major pension funds was attributable to their asset class mix rather than the specific securities they held within each class. Getting the allocation between equities, bonds, real assets, and alternatives right matters vastly more than picking individual winners within each category.",

      "Strategic asset allocation defines the long-term target mix between asset classes, reflecting the investor's return objectives, risk tolerance, and investment horizon — a framework that changes infrequently and deliberately.",

      "Tactical asset allocation allows short-term deviations from the strategic target based on current market conditions and valuations — though the evidence that this adds consistent value over time remains contested.",

      "The classic sixty-forty equity-bond portfolio faced its most severe test in 2022 when both asset classes fell simultaneously as surging inflation forced rapid central bank rate rises, exposing its reliance on a negative correlation assumption.",

      "The Yale Endowment Model, pioneered by David Swensen, substitutes illiquid private equity, real assets, and absolute return strategies for traditional stocks and bonds, targeting higher long-run returns at the cost of liquidity.",

      "Rebalancing to strategic target weights is a disciplined form of contrarian investing — systematically selling assets that have outperformed and buying those that have underperformed, enforcing a buy-low, sell-high discipline over time."
    ],

    // Scene 3 — CAPM & SML
    [
      "The Capital Asset Pricing Model is the theoretical centrepiece of modern financial economics — a framework that derives the expected return any risky asset should offer in a market populated by rational, well-diversified investors. CAPM separates total risk into two distinct components: systematic risk, which is driven by economy-wide factors and cannot be diversified away, and idiosyncratic risk, which is company-specific and can be eliminated through diversification. Because only systematic risk cannot be avoided, only systematic risk is compensated with a return premium in a rational market. The model provides a clean, testable prediction: every asset should offer the risk-free rate plus a beta-scaled equity risk premium — and deviations from this line represent either mispricing or model failure.",

      "Expected return in CAPM equals the risk-free rate plus beta multiplied by the market risk premium — beta is the single scaling factor capturing how much systematic, non-diversifiable risk the asset carries.",

      "Beta measures an asset's sensitivity to market-wide movements — a beta above one amplifies market swings, below one dampens them, while zero implies no correlation with the overall market at all.",

      "A beta of one point five implies the asset historically moves fifty percent more than the market in both directions — higher systematic risk demands and receives a higher expected return as compensation.",

      "The Security Market Line plots expected return against beta for all assets in market equilibrium — any asset plotting above the line appears underpriced relative to its risk, any below it overpriced.",

      "Alpha — the vertical distance above the Security Market Line — represents return in excess of what beta compensation alone would predict, and is the purest available measure of genuine investment skill."
    ],

    // Scene 4 — Factor Investing
    [
      "Factor investing emerged from decades of rigorous academic research revealing that equity returns can be systematically explained not just by market beta, but by a set of persistent, rewarded risk factors. The seminal Fama-French three-factor model added value and size to the original CAPM, explaining far more cross-sectional return variation than market beta alone. Since then, momentum, quality, low volatility, and profitability factors have been documented and validated across markets, geographies, and time periods. Factor investing — sometimes called smart beta — allows investors to harvest these systematic return premiums in transparent, rules-based vehicles at a fraction of the cost of discretionary active management.",

      "The value factor exploits the persistent tendency of cheap stocks — measured by low price-to-book or price-to-earnings ratios — to outperform expensive glamour stocks over long investment horizons.",

      "The size premium captures the historical tendency of small-capitalisation stocks to outperform large caps over the long run, though this premium has been less consistent and more debated in recent decades.",

      "Momentum is the documented tendency of recent outperformers to continue outperforming over the following three to twelve months — one of the most robust patterns in financial market data globally.",

      "The quality factor rewards companies with high profitability, low earnings volatility, conservative use of leverage, and strong balance sheets — characteristics associated with sustainable competitive advantages.",

      "Smart beta exchange-traded funds package these factor exposures in transparent, low-cost, rules-based structures — democratising access to return premiums that once required expensive active management to pursue."
    ]
  ],

  /* ── MODULE 7: Risk Management & Risk Metrics ───────────────────────────── */
  'module-7': [

    // Scene 1 — Types of Financial Risk
    [
      "Risk management is the discipline of identifying, measuring, and mitigating the various dimensions along which financial losses can occur, and it requires thinking simultaneously across multiple distinct categories. A financial institution or portfolio manager who manages only one type of risk while ignoring others is dangerously exposed: the 2008 financial crisis showed how market risk, credit risk, and liquidity risk can compound catastrophically when they materialise simultaneously and reinforce each other. Professional risk managers classify risks into well-defined categories precisely to ensure that none are overlooked and each receives appropriate measurement, monitoring, and hedging. Understanding these categories and how they interact is the foundation of both risk management practice and the regulatory capital frameworks that govern financial institutions.",

      "Market risk encompasses losses from adverse movements in equity prices, interest rates, foreign exchange rates, and commodity prices — the most directly observable and measurable category of financial risk.",

      "Credit risk is the possibility that a counterparty, borrower, or issuer fails to meet its contractual financial obligations, resulting in direct default losses or costly credit deterioration affecting portfolio values.",

      "Liquidity risk is the danger of being unable to exit or fund a position at fair value when needed — an institution can appear solvent on a mark-to-market basis yet fail entirely if it cannot convert assets to cash.",

      "Operational risk covers the vast category of losses from failed processes, system outages, human error, fraud, and external events — harder to quantify than market risk, but capable of causing catastrophic and sudden losses.",

      "Systemic risk is the risk that one institution's failure triggers contagion across the broader financial system — regulators focus intensely on this category because individual firms do not internalise the systemic cost of their own failure."
    ],

    // Scene 2 — Value at Risk
    [
      "Value at Risk, universally known as VaR, became the dominant risk measurement framework for financial institutions during the 1990s, partly because it compresses the complexity of an entire portfolio's risk into a single, intuitive number that senior management and regulators can act upon. VaR answers a specific statistical question: over a given time horizon and at a given confidence level, what is the maximum loss we would expect our portfolio to sustain? A ninety-nine percent one-day VaR of ten million dollars means that on all but approximately two or three trading days per year, the portfolio should not lose more than that amount. Despite its elegant simplicity, VaR has deep and well-documented limitations that became acutely apparent during the 2008 crisis.",

      "A ninety-nine percent, one-day VaR of two million dollars implies a one percent probability of exceeding that loss on any given trading day — approximately two to three exceedances per year under normal market conditions.",

      "Historical simulation VaR replays actual past market returns through the current portfolio without assuming any specific return distribution, naturally capturing the correlation breakdowns observed in previous crises.",

      "Parametric VaR assumes returns follow a normal distribution, enabling rapid analytical calculation — but this assumption dramatically underestimates the frequency and severity of extreme tail events in real financial markets.",

      "Monte Carlo VaR generates thousands of simulated return paths using statistical models, capturing complex non-linear option exposures and providing richer and more realistic estimates of tail risk distributions.",

      "VaR's most critical limitation is that it says nothing about the magnitude of losses beyond its threshold — it confirms a large loss is unlikely but gives no information about how devastating the loss might be when it does occur."
    ],

    // Scene 3 — Stress Testing
    [
      "Stress testing is the risk management discipline that takes over precisely where VaR leaves off — deliberately asking what happens to a portfolio or institution when markets stop behaving within their historical statistical ranges. While VaR estimates losses under statistically normal conditions with high confidence, stress tests examine the impact of extreme but plausible events: financial crises, sovereign defaults, pandemic shocks, or sudden market dislocations that standard distributions cannot capture. After 2008 demonstrated that the industry had systematically underestimated tail risk, regulators mandated regular stress testing for systemically important institutions, integrating it permanently into the regulatory capital framework. Stress testing is now both a core internal risk management tool and a public regulatory requirement.",

      "Historical scenario stress tests apply the exact market moves observed during real past crises — the 2008 financial crisis, the 2020 pandemic selloff, the 1997 Asian crisis — to the current portfolio composition.",

      "Hypothetical scenario analysis constructs specific plausible but unprecedented events — a sudden sovereign debt crisis, a technology sector crash, or a geopolitical shock — and quantifies the resulting portfolio impact precisely.",

      "Reverse stress testing inverts the analytical question, asking which specific scenario would push the portfolio or institution to failure, rather than what a chosen scenario does to a given portfolio.",

      "Regulatory stress tests such as DFAST and CCAR require the largest banks to publicly demonstrate capital resilience under defined severe macroeconomic scenarios, with pass or fail determined by capital adequacy ratios.",

      "Tail risk hedging uses options and other asymmetric instruments to provide explicit, quantified protection against catastrophic losses, accepting a small ongoing premium cost in exchange for eliminating the dangerous left tail."
    ],

    // Scene 4 — Greeks & Hedging
    [
      "The option Greeks are a comprehensive risk measurement framework that expresses an options position's sensitivity to every relevant market variable — underlying price, implied volatility, time to expiry, and interest rates. They provide the options trader and risk manager with a complete, continuously updated dashboard of all risk exposures, enabling precise hedging and risk attribution that would be impossible to achieve through intuition alone. Each Greek captures a distinct and independent dimension of risk, and sophisticated practitioners monitor all of them simultaneously. A portfolio with tightly controlled delta can still suffer large unexpected losses from volatility moves — mastering the Greeks means understanding that risk exists across all dimensions at once.",

      "Delta measures the change in option value for each one-dollar movement in the underlying asset — a delta of positive fifty cents means the option gains fifty cents for every dollar the underlying rises.",

      "Gamma measures the rate of change of delta itself — high gamma near expiry means delta shifts rapidly with small price moves, making the position increasingly sensitive and difficult to hedge as expiration approaches.",

      "Vega quantifies the option's sensitivity to changes in implied volatility — in practice, vega is often the dominant risk factor for options positions, as volatility can move far more than expected and very suddenly.",

      "Theta represents the daily erosion of option value due to time decay — option sellers collect theta as premium income, while option buyers pay it as the cost of holding their right over time.",

      "Delta hedging involves continuously adjusting the position in the underlying asset to maintain near-zero directional exposure, allowing traders to isolate and profit from pure volatility risk independent of market direction."
    ]
  ],

  /* ── MODULE 8: Market Regulations & Compliance ──────────────────────────── */
  'module-8': [

    // Scene 1 — Global Regulatory Landscape
    [
      "Financial regulation operates through a complex, multi-layered architecture spanning global standard-setting bodies, national regulatory authorities, and self-regulatory organisations — each with distinct powers, mandates, and jurisdictions that must coordinate without full alignment. After the catastrophic failures of the pre-2008 regulatory framework became apparent, the G20 nations launched the most comprehensive reform of financial regulation since the Great Depression, creating new bodies, expanding mandates, and fundamentally rethinking the relationship between regulation and systemic risk. The resulting framework is imperfect and continuously evolving as new risks emerge in technology and shadow banking. Understanding who regulates what — and where the gaps and overlaps lie — is essential for anyone working in financial services today.",

      "The SEC enforces US securities laws, requiring full and fair disclosure from public companies and actively prosecuting fraud, insider trading, and market manipulation across all registered securities markets.",

      "FINRA operates as a self-regulatory organisation overseeing broker-dealers specifically — its member firms must adhere to its conduct rules as an absolute condition of participation in US capital markets.",

      "The FCA in the United Kingdom and ESMA across the European Union establish equivalent conduct and disclosure standards in their jurisdictions, creating a globally coherent but nationally enforced regulatory framework.",

      "The Basel Committee on Banking Supervision writes global capital adequacy standards that national bank regulators adopt, creating minimum capital floors for internationally active banks across all major jurisdictions.",

      "Regulatory arbitrage — migrating activity to the least restrictive jurisdiction — remains a persistent challenge that drives ongoing international regulatory coordination and information sharing between authorities."
    ],

    // Scene 2 — Post-Crisis Regulation
    [
      "The 2008 global financial crisis exposed fundamental and systemic weaknesses in the pre-existing regulatory architecture — excessive leverage throughout the system, opaque over-the-counter derivatives markets, regulatory blind spots for non-bank financial institutions, and a catastrophic collective failure to account for systemic interconnectedness. The legislative and regulatory response was unprecedented in scale: Dodd-Frank in the United States, the European Market Infrastructure Regulation across Europe, and the Basel III capital framework globally transformed every major dimension of financial regulation. More than fifteen years later, the financial system is demonstrably more resilient — better capitalised, more transparent, and with far fewer dangerous leverage concentrations — though new risks continue emerging in unregulated corners of finance.",

      "Dodd-Frank, signed into law in 2010, was the most sweeping overhaul of US financial regulation since the 1930s, addressing systemic risk, consumer protection, derivatives markets, and the too-big-to-fail problem.",

      "The Volcker Rule prohibits bank holding companies from engaging in proprietary trading for their own account, separating speculative risk-taking funded by deposit insurance from traditional client-serving banking activities.",

      "Mandatory central clearing of standardised derivatives moved an enormous segment of the OTC derivatives market into regulated clearinghouses, dramatically reducing bilateral counterparty credit risk across the system.",

      "Basel III substantially raised both the quantity and quality of capital that banks must hold against risk-weighted assets, ensuring they can absorb significant losses in a crisis without requiring government bailouts.",

      "The countercyclical capital buffer is a macroprudential tool requiring banks to build additional capital reserves during periods of rapid credit growth, creating a buffer that can be released to support lending in a downturn."
    ],

    // Scene 3 — Market Abuse & Insider Trading
    [
      "Market integrity — the assurance that all participants compete on a level playing field with equal access to publicly available information — is the invisible foundation upon which investor confidence and the capital allocation function of financial markets rest. When insiders trade on information unavailable to the public, or when large participants manipulate prices through deceptive practices, the price discovery mechanism is corrupted and ordinary investors are exploited. Regulators devote enormous analytical and enforcement resources to detecting and prosecuting market abuse precisely because the damage extends far beyond individual victims: it erodes the trust that makes capital markets function at all. The sophistication of surveillance technology has transformed enforcement capabilities, but so has the sophistication of those attempting to evade detection.",

      "Insider trading means buying or selling securities based on material, non-public information obtained through a position of trust — it is both a civil and criminal offence in virtually every major financial jurisdiction.",

      "Front-running occurs when a broker or dealer trades ahead of known client orders to profit from the anticipated price impact, constituting a clear breach of fiduciary duty and best execution obligations.",

      "Spoofing involves placing large orders with no intention of execution, purely to create a false impression of demand or supply that influences other participants' behaviour — now explicitly criminalised and vigorously prosecuted.",

      "Regulation Fair Disclosure requires US public companies to release all material information simultaneously to the entire market, prohibiting the selective disclosure of price-sensitive information to favoured institutional investors.",

      "Modern market surveillance systems analyse millions of transactions in real time using pattern-recognition algorithms capable of detecting statistically anomalous trading activity around corporate announcements before investigators even begin their review."
    ],

    // Scene 4 — ESG & Sustainable Finance
    [
      "Environmental, social, and governance factors have moved from the periphery of investment analysis to the centre of regulatory attention and institutional practice in less than a decade, driven by recognition that climate risk and social risk are financial risks. The understanding that physical and transition risks from climate change represent material threats to asset values has fundamentally changed how large institutional investors construct portfolios and engage with companies they own. Regulators across the EU, UK, and increasingly the United States are developing mandatory disclosure frameworks requiring companies and fund managers to report and quantify their ESG exposures with the same rigour applied to financial disclosures. The direction of travel is unambiguous: ESG integration will become a mandatory component of investment analysis and risk management globally.",

      "Environmental factors encompass a company's carbon footprint, climate transition risk exposure, physical climate vulnerability, water usage intensity, pollution profile, and overall impact on natural ecosystems.",

      "Social factors evaluate labour standards, supply chain ethics, community relations, product safety records, and human rights practices — dimensions with growing regulatory scrutiny and consumer and employee relevance.",

      "Governance examines board composition and independence, executive compensation alignment with shareholder interests, audit quality, anti-corruption controls, and the effectiveness of shareholder rights mechanisms.",

      "Greenwashing — marketing a financial product or company as more environmentally sustainable than it truly is — is now actively prosecuted by regulators, with significant financial penalties for misleading sustainability claims.",

      "The EU Taxonomy Regulation provides a legally binding classification system defining precisely which economic activities can be labelled as environmentally sustainable, creating a common language and combating greenwashing at the product level."
    ]
  ]
}
