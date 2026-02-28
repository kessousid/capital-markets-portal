// Expanded spoken narrations for each scene — spoken aloud by TTS.
// These deliberately go beyond the slide content to provide lecture-style context.
// Indexed as: NARRATIONS[moduleId][sceneIndex]

export const NARRATIONS = {
  'module-1': [
    // Scene 1 — What Are Capital Markets?
    `Capital markets are the arteries of the global economy, moving money from those who have surplus savings to those who need capital for productive investments. Think of them as a giant matching engine: on one side are investors looking for returns; on the other are corporations and governments hungry for long-term funding. Without this mechanism, even the most promising business ideas would die on the drawing board for lack of financing.`,

    // Scene 2 — Market Participants & Roles
    `Every transaction in a capital market involves a chain of specialists, each adding a distinct type of value. Retail investors provide the raw material — capital — while institutional investors like pension funds aggregate it into pools large enough to fund massive infrastructure or corporate projects. Investment banks act as architects and deal-makers, connecting issuers with the right investors, while market makers ensure you can actually buy or sell at a fair price at any moment during the trading day.`,

    // Scene 3 — Primary vs Secondary Markets
    `The primary market is where new money is raised — a company's IPO, or a government auctioning fresh Treasury bonds. But it's the secondary market that makes the primary market possible in the first place. Knowing you can sell your shares next Tuesday makes you comfortable buying them today. That secondary-market liquidity is what allows companies to raise billions from investors who would never commit capital to an illiquid investment. One exists because of the other.`,

    // Scene 4 — Economic Role
    `Capital markets perform a function that no central planner could replicate: they aggregate information from millions of dispersed investors and compress it into a single price signal that tells society where capital can be most productively deployed. When Tesla's stock price rises, it signals that capital should flow toward electric vehicle manufacturing. When a struggling retailer's bonds trade at distressed prices, the market is flagging that resources should be redeployed elsewhere. Price discovery is not just a feature — it is the core economic service capital markets provide.`
  ],

  'module-2': [
    // Scene 1 — Stock Market Fundamentals
    `When you buy a share of stock, you're not just buying a piece of paper — you're buying a proportional claim on everything a company owns and everything it will ever earn. The stock price is the market's continuously-updated estimate of the present value of all those future cash flows, distilled into a single number by millions of competing investors. The tension between a stock's current price and what a careful analyst believes it is actually worth is what creates every investment opportunity in the equity market.`,

    // Scene 2 — Order Types & Trading Mechanics
    `The order book is a real-time ledger of every investor's intentions — a live queue of pending buy and sell orders that creates a transparent, fair market for price discovery. A market order is like walking into an auction and shouting 'sold' at whatever the room offers: execution is guaranteed but the price is not. A limit order is the opposite: you post your price and wait for the market to come to you. The bid-ask spread — that gap between where buyers and sellers meet — is the hidden tax you pay on every trade, and it reflects the risk market-makers take by standing ready to trade with anyone at any time.`,

    // Scene 3 — Stock Valuation Methods
    `Valuing a company is part rigorous science and part informed judgment. Discounted cash flow analysis is theoretically pure — it values a business based on all the cash it will ever generate — but it depends entirely on assumptions about a future that no one can predict with certainty. Relative multiples like the P/E ratio are faster and more intuitive, but they require finding companies that are truly comparable. Skilled analysts triangulate across multiple methods, using each one as a reality check on the others, knowing that the goal is not a single precise answer but a well-reasoned range of fair value.`,

    // Scene 4 — Market Indices & Benchmarks
    `Stock market indices are the economy's report card — they compress the performance of hundreds or thousands of companies into a single number we can track and compare over decades. The construction methodology matters enormously in practice. Because the S&P 500 is market-cap weighted, the five largest companies can collectively represent over twenty percent of the entire index, meaning their movements dominate what most people and media refer to simply as 'the market.' Understanding this concentration is essential for anyone trying to build a genuinely diversified portfolio.`
  ],

  'module-3': [
    // Scene 1 — Bond Basics
    `A bond is a formal loan agreement cast in tradeable form: you lend a fixed sum to a corporation or government, they promise to pay you regular interest — the coupon — and return your principal at a specified future date. What distinguishes a bond from a simple bank loan is that this agreement can be bought and sold between investors in the secondary market, giving the lender the ability to exit before maturity. Yield to maturity captures the total annualised return on that investment, accounting for both coupon income and any difference between your purchase price and the face value you receive at the end.`,

    // Scene 2 — The Yield Curve
    `The yield curve is a snapshot of the entire spectrum of interest rates at a single moment in time, from overnight rates all the way to thirty-year bonds. Its shape is one of the most powerful economic forecasting tools we have, because it encodes the market's collective expectation for growth, inflation, and central bank policy. When the curve inverts — short-term rates rising above long-term rates — investors are essentially betting that the central bank will be forced to slash rates in the future to combat a weakening economy. That signal has preceded every single US recession since nineteen-fifty, which is why bond traders watch the yield curve with such intense focus.`,

    // Scene 3 — Credit Ratings & Bond Types
    `Credit ratings translate complex financial analysis into a simple letter grade that signals default risk at a glance. But the seemingly small step between BBB-minus and BB-plus — the boundary between investment grade and high yield — has enormous practical consequences. Many pension funds, insurance companies, and money market funds are legally prohibited by their charters or regulations from holding anything below investment grade. A single credit downgrade can therefore trigger forced selling from billions of dollars of institutional portfolios, causing a bond's price to collapse even if the underlying business is fundamentally unchanged.`,

    // Scene 4 — Bond Pricing & Interest Rate Risk
    `The inverse relationship between bond prices and interest rates is the most fundamental law in fixed income investing, and it has an elegant logic: if new bonds are being issued at four percent and you hold a bond paying two percent, no rational investor will pay full price for your lower-yielding bond. Its price must fall until the effective yield matches what the market currently offers. Duration quantifies exactly how sensitive your portfolio is to this effect — a duration of eight means roughly an eight percent price decline for every one percentage point rise in rates, which is why managing duration is the central risk management challenge in bond investing.`
  ],

  'module-4': [
    // Scene 1 — Money Market Overview
    `Money markets are the financial system's circulatory system — the network of short-term borrowing and lending that keeps daily operations flowing for banks, corporations, and governments. These instruments are designed to be as close to cash as possible: maturities measured in days or months, minimal credit risk, and the ability to convert to actual cash quickly at minimal cost. The importance of this plumbing only becomes visible when it breaks down: in September 2008, when the money markets seized up after Lehman's collapse, companies across the real economy suddenly couldn't fund payroll or inventory, turning a financial crisis into an economic emergency.`,

    // Scene 2 — Treasury Bills
    `Treasury bills are the simplest and safest financial instrument that exists: you lend money to the United States government for a few weeks or months, and receive slightly more back when the bill matures. Because the US government can always print dollars to repay its dollar-denominated obligations, T-bills are treated as the world's only true risk-free asset. This status is not merely theoretical — every financial model from CAPM to Black-Scholes uses the T-bill yield as its anchor, making the T-bill rate the invisible foundation upon which the pricing of every other financial instrument in the world ultimately rests.`,

    // Scene 3 — Repurchase Agreements (Repos)
    `The repo market is a massive, largely invisible engine processing trillions of dollars of overnight collateralised lending every single day, keeping the financial system's liquidity needs met on a continuous basis. The mechanics are elegant: a dealer hands over bonds as collateral and receives cash overnight to fund trading operations, then buys the bonds back the next morning at a slightly higher price — that price difference is the repo interest rate. This market is now so important and so representative of actual secured borrowing costs that it forms the basis of SOFR, the rate that prices hundreds of trillions of dollars in financial contracts globally.`,

    // Scene 4 — Commercial Paper & LIBOR Transition
    `Commercial paper allows investment-grade corporations to bypass banks entirely when they need short-term funding — issuing IOUs directly to money market funds and other institutional investors at a rate slightly above Treasuries. The transition from LIBOR to SOFR, completed in 2023, was one of the most consequential structural changes in financial markets in decades. LIBOR was a survey-based rate, meaning banks reported what they thought they could borrow at — a methodology that proved vulnerable to manipulation. SOFR, anchored in over a trillion dollars of actual daily repo transactions, is far more robust because it reflects what markets are actually doing, not what banks claim they could do.`
  ],

  'module-5': [
    // Scene 1 — Derivatives Overview
    `Derivatives have a reputation problem, largely earned in the 2008 financial crisis, but at their core they serve a vital economic function: redistributing risk from those who don't want it to those willing to bear it for a price. An airline buying oil futures isn't gambling — it's protecting its business from a fuel price spike that could make flight pricing impossible to manage. The notional size of the global derivatives market, exceeding the entire world economy, sounds alarming but dramatically overstates actual risk: a one hundred million dollar interest rate swap might have a true economic value of only a few hundred thousand dollars because only net cash flows are ever exchanged.`,

    // Scene 2 — Options: Calls & Puts
    `Options give their buyers a uniquely asymmetric payoff structure: defined, capped downside with theoretically unlimited upside. When you pay a premium for a call option, you are buying the right — but never the obligation — to purchase the underlying asset at a fixed price. Your worst outcome is losing the premium you paid; your best outcome scales with how far the stock rises. This asymmetry is what makes options so powerful for both protection and speculation, and the insight that options are fundamentally about pricing uncertainty — volatility — rather than predicting direction is the dividing line between novice and sophisticated options trading.`,

    // Scene 3 — Futures & Forwards
    `Futures and forwards solve the same economic problem — locking in a price today for a transaction that happens in the future — but their structural differences have significant real-world implications. Exchange-traded futures with daily mark-to-market settlements mean that losses are collected in small increments each day rather than accumulating to a potentially catastrophic sum at maturity. This daily settlement is what prevented the derivatives market from collapsing during the volatility of 2020, where losses in futures positions were absorbed gradually by margin accounts rather than creating sudden, concentrated counterparty failures.`,

    // Scene 4 — Interest Rate Swaps
    `Interest rate swaps are the workhorses of corporate treasury management, enabling companies to completely separate the question of how to raise debt cheapest from the question of what type of interest rate exposure they actually want. A company might issue floating-rate bonds because investors currently demand a lower spread on them, then immediately enter a swap to convert those floating payments to fixed, achieving fixed-rate financing at a better all-in cost than issuing fixed bonds directly. The beauty is that only net interest payment differences change hands — never the full principal — making swaps extraordinarily capital-efficient instruments for transforming interest rate exposure at scale.`
  ],

  'module-6': [
    // Scene 1 — Modern Portfolio Theory Basics
    `Harry Markowitz's 1952 insight seems almost obvious in retrospect but was genuinely revolutionary at the time: what matters for portfolio risk is not how volatile each individual asset is in isolation, but how assets move relative to each other. By combining assets whose prices do not move in lockstep — assets with low or negative correlations — you can build a portfolio that has lower overall volatility than any of its individual components. The efficient frontier is the visual representation of this idea: a curved line showing the portfolios that extract the maximum possible expected return from every level of risk you are willing to accept.`,

    // Scene 2 — Asset Allocation Strategies
    `The landmark 1986 study by Brinson, Hood, and Beebower demonstrated that roughly ninety percent of the long-run variation in portfolio returns is explained by a single decision: the strategic allocation between asset classes like stocks, bonds, and real assets. This finding fundamentally reordered investment priorities — it suggested that the vast resources the industry devoted to stock picking and market timing were largely irrelevant compared to getting the asset mix right from the beginning. The contrast between the traditional sixty-forty portfolio and the Yale Endowment Model reflects profoundly different answers to the question of what truly drives long-term wealth creation.`,

    // Scene 3 — CAPM & Security Market Line
    `The Capital Asset Pricing Model provides the cleanest possible answer to the question of why different investments offer different expected returns: it is entirely determined by each asset's sensitivity to broad market movements — risk that cannot be diversified away. The Security Market Line shows that in equilibrium, every asset in the market should plot exactly on this line. Assets that plot above it are offering too much return for their systematic risk, meaning the market has underpriced them. Assets below it are overpriced. Alpha — the vertical distance above or below the Security Market Line — is the holy grail of active management: genuine evidence that a manager has added real skill-based value rather than simply holding leveraged market exposure.`,

    // Scene 4 — Factor Investing & Smart Beta
    `After decades of academic research, we now know that a handful of systematic factors — value, size, momentum, quality, and low volatility — have reliably generated excess returns over full market cycles. Each factor has an economic or behavioural rationale that explains its persistence: the value premium exists partly because investors systematically overpay for exciting growth companies and underpay for dull, cheap ones. Momentum works because investors initially underreact to new information, allowing trends to persist longer than they should. Smart beta strategies package these academic insights into transparent, rules-based products, offering systematic factor exposure at a small fraction of the cost of traditional active management that tries to do the same thing through analyst judgment.`
  ],

  'module-7': [
    // Scene 1 — Types of Financial Risk
    `Modern risk management requires thinking simultaneously across multiple dimensions, because risks that appear manageable in isolation can combine in devastating ways during a crisis. Credit risk destroyed balance sheets in 2008, but it was the liquidity risk that followed — as firms couldn't roll over short-term funding — that transformed a credit problem into a systemic catastrophe. Basel Three's framework for holding capital against different categories of risk reflects hard lessons learned during that crisis about which risks were systematically underestimated and which seemingly impossible correlations suddenly became one during the worst moments of market stress.`,

    // Scene 2 — Value at Risk (VaR)
    `JP Morgan's public release of RiskMetrics in 1994 democratised Value at Risk and turned it into the dominant risk measurement standard for the entire industry within a decade. VaR answered a crucial question that senior management and regulators needed answered: in normal market conditions, how much can we lose in a single day? The profound limitation — which became catastrophically clear in 2008 — is that VaR says absolutely nothing about what happens in the tail, the rare days when markets stop behaving normally. Knowing your ninety-nine percent one-day VaR is two million dollars tells you nothing about whether that remaining one percent of outcomes involves losing three million or thirty million, which turns out to be exactly the information you most need during a crisis.`,

    // Scene 3 — Stress Testing & Scenario Analysis
    `If Value at Risk describes what happens in normal markets, stress testing addresses the more important question: what happens when markets stop being normal? By replaying actual historical crisis episodes — the 2008 financial crisis, the dot-com crash, Black Monday — against a current portfolio, risk managers can quantify exposure to scenarios they know were possible because they literally happened before. Reverse stress testing inverts this logic entirely: instead of asking what happens in a bad scenario, it asks what scenario would push the firm to the brink of failure. This forces leadership to confront genuine vulnerabilities rather than focusing only on the comfortable scenarios they'd prefer to examine.`,

    // Scene 4 — Greeks & Hedging Strategies
    `The Greeks give options traders a comprehensive, real-time dashboard of their risk exposure across every market dimension simultaneously. Delta tells you how much money you make or lose for each dollar move in the underlying, but gamma — the rate at which delta itself changes — is what matters most near expiration, when small moves in the stock can cause delta to swing wildly, requiring constant rebalancing. Vega, sensitivity to implied volatility, is often the most economically significant Greek in practice: implied volatility can double during market stress even when underlying prices barely move, completely transforming the value of an options book that looked perfectly hedged the day before.`
  ],

  'module-8': [
    // Scene 1 — Global Regulatory Landscape
    `Financial regulation operates through multiple overlapping layers: global standard-setters like the Basel Committee and IOSCO set broad principles and minimum standards, which national regulators then translate into binding domestic rules tailored to local market conditions. This creates a complex web of jurisdictions that global financial firms must navigate simultaneously, often spending as much on compliance as on product development. The permanent tension between regulatory harmonisation — which prevents firms from shopping for the lightest-touch jurisdiction — and regulatory sovereignty — which allows countries to respond to their own economic conditions — is what makes international financial governance so perpetually contentious and difficult.`,

    // Scene 2 — Post-Crisis Regulation
    `The 2008 financial crisis exposed multiple simultaneous failures in the pre-crisis regulatory framework: banks carried enormous leverage against insufficient capital, trillions in complex derivatives traded in bilateral darkness with no central counterparty oversight, and systemically important institutions could fail in ways that dragged down the entire system with them. Dodd-Frank and Basel Three together represent the most comprehensive redesign of financial regulation since the New Deal, fundamentally rewriting the rules around capital adequacy, liquidity requirements, derivatives clearing, and the oversight of institutions whose failure could threaten the broader economy.`,

    // Scene 3 — Market Abuse & Insider Trading
    `Market integrity is the invisible foundation upon which all investor trust rests. When participants believe that prices reflect genuine supply and demand rather than manipulation or informational asymmetry, they willingly provide the liquidity that makes markets function efficiently for everyone. The sophistication of modern market surveillance has grown dramatically: algorithms now scan millions of transactions in real time, identifying patterns — unusual options volume before a merger announcement, coordinated spoofing in the futures market — that would have been completely invisible to human reviewers even fifteen years ago. Enforcement has consequently become far more rigorous, with successful prosecutions now relying on electronic trading records that are essentially impossible to fabricate or destroy.`,

    // Scene 4 — ESG & Sustainable Finance Regulation
    `ESG regulation represents a fundamental expansion of what society expects capital markets to accomplish — moving beyond pure financial returns to incorporate environmental sustainability, social impact, and governance quality as explicit investment considerations. The core regulatory challenge is defining what actually constitutes a sustainable investment in a rigorous, comparable, verifiable way that prevents greenwashing without being so prescriptive that it stifles innovation. The TCFD framework and the European Union's Sustainable Finance Taxonomy represent the leading edge of a global effort to make climate and sustainability risks as measurable, mandatory, and auditable as the traditional financial risks that have been reported in company accounts for over a century.`
  ]
}
