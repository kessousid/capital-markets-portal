// Capital Markets Learning Portal — Module Data
// 8 modules × 4 scenes each

export const MODULES = [
  {
    id: 'module-1',
    number: 1,
    title: 'Introduction to Capital Markets',
    icon: '🏦',
    color: '#4F8EF7',
    description: 'Understand the structure, participants, and role of capital markets in the global economy.',
    duration: '14 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'What Are Capital Markets?',
        duration: 52,
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 100%)',
        svgType: 'capital-stack',
        svgData: {
          title: 'Capital Market Structure',
          segments: [
            { label: 'Equity Markets', value: 35, color: '#4F8EF7' },
            { label: 'Bond Markets', value: 40, color: '#FFD700' },
            { label: 'Derivatives', value: 15, color: '#FF9F43' },
            { label: 'Money Markets', value: 10, color: '#C084FC' }
          ]
        },
        bullets: [
          'Capital markets connect investors with entities needing long-term capital',
          'They include both primary markets (new issuances) and secondary markets (trading)',
          'Key participants: investors, issuers, intermediaries, and regulators',
          'Essential for price discovery and efficient resource allocation'
        ],
        narration: 'Capital markets are the financial backbone of the modern economy, facilitating the flow of capital from savers to productive investments.'
      },
      {
        id: 'scene-2',
        title: 'Market Participants & Roles',
        duration: 48,
        background: 'linear-gradient(135deg, #0a1628 0%, #1e3560 100%)',
        svgType: 'flow-diagram',
        svgData: {
          title: 'Capital Flow in Markets',
          nodes: [
            { id: 'investors', label: 'Investors', x: 60, y: 100, color: '#4F8EF7' },
            { id: 'intermediaries', label: 'Banks &\nBrokers', x: 220, y: 100, color: '#FFD700' },
            { id: 'issuers', label: 'Issuers\n(Corps & Govts)', x: 380, y: 100, color: '#50C878' }
          ],
          arrows: [
            { from: 'investors', to: 'intermediaries', label: 'Capital' },
            { from: 'intermediaries', to: 'issuers', label: 'Funding' },
            { from: 'issuers', to: 'intermediaries', label: 'Securities' },
            { from: 'intermediaries', to: 'investors', label: 'Returns' }
          ]
        },
        bullets: [
          'Retail investors: individuals buying stocks, bonds, and funds',
          'Institutional investors: pension funds, mutual funds, hedge funds',
          'Investment banks: underwrite and distribute new securities',
          'Market makers: provide liquidity by quoting bid/ask prices',
          'Regulators: SEC, FINRA ensure fair and transparent markets'
        ],
        narration: 'Each participant plays a distinct role in ensuring capital markets function efficiently and fairly.'
      },
      {
        id: 'scene-3',
        title: 'Primary vs Secondary Markets',
        duration: 50,
        background: 'linear-gradient(135deg, #0a1f3d 0%, #0d2b52 100%)',
        svgType: 'two-column',
        svgData: {
          title: 'Primary vs Secondary Markets',
          leftTitle: 'Primary Market',
          leftColor: '#4F8EF7',
          rightTitle: 'Secondary Market',
          rightColor: '#50C878',
          leftItems: ['IPOs & new issuances', 'Capital goes to issuer', 'Underwriters involved', 'Book-building process', 'Lock-up periods apply'],
          rightItems: ['Trading existing securities', 'Capital flows between investors', 'Exchanges & OTC markets', 'Continuous price discovery', 'High liquidity available']
        },
        bullets: [
          'Primary market: where new securities are issued and sold for the first time',
          'IPO (Initial Public Offering): company\'s first sale of stock to the public',
          'Secondary market: where previously issued securities are traded',
          'NYSE, NASDAQ, LSE are major secondary market exchanges'
        ],
        narration: 'The primary market enables capital formation, while the secondary market provides the liquidity that makes investors willing to invest in the first place.'
      },
      {
        id: 'scene-4',
        title: 'Economic Role of Capital Markets',
        duration: 46,
        background: 'linear-gradient(135deg, #0d1a35 0%, #152a55 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Global Capital Markets Size (Trillions USD)',
          bars: [
            { label: 'Equities', value: 109, color: '#4F8EF7' },
            { label: 'Bonds', value: 133, color: '#FFD700' },
            { label: 'Derivatives', value: 610, color: '#FF9F43' },
            { label: 'Real Assets', value: 45, color: '#50C878' }
          ],
          maxValue: 700
        },
        bullets: [
          'Capital markets facilitate price discovery for assets worldwide',
          'Enable risk sharing across millions of investors',
          'Drive economic growth by channeling savings into investment',
          'Global capital markets exceed $750 trillion in notional value'
        ],
        narration: 'Capital markets are the engine of economic growth, enabling governments and corporations to fund infrastructure, innovation, and expansion.'
      }
    ]
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Equity Markets & Stock Trading',
    icon: '📈',
    color: '#50C878',
    description: 'Master stock markets, trading mechanisms, valuation, and equity investment strategies.',
    duration: '16 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'Stock Market Fundamentals',
        duration: 52,
        background: 'linear-gradient(135deg, #0a1e0a 0%, #0d2b0d 100%)',
        svgType: 'line-chart',
        svgData: {
          title: 'Stock Price vs Intrinsic Value Over Time',
          lines: [
            {
              label: 'Market Price',
              color: '#50C878',
              points: [45, 52, 48, 58, 55, 72, 68, 80, 75, 88, 92, 85]
            },
            {
              label: 'Intrinsic Value',
              color: '#FFD700',
              points: [50, 52, 54, 56, 58, 62, 65, 68, 72, 76, 80, 84]
            }
          ],
          xLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        bullets: [
          'Stocks represent ownership (equity) in a corporation',
          'Common stock: voting rights + residual claim on assets',
          'Preferred stock: fixed dividends, priority in liquidation',
          'Stock price reflects market consensus of company value',
          'P/E ratio: price relative to earnings per share'
        ],
        narration: 'Equity markets provide a mechanism for ownership, capital raising, and price discovery — the core engine of modern capitalism.'
      },
      {
        id: 'scene-2',
        title: 'Order Types & Trading Mechanics',
        duration: 50,
        background: 'linear-gradient(135deg, #0a1a0a 0%, #112a11 100%)',
        svgType: 'order-book',
        svgData: {
          title: 'Live Order Book — AAPL',
          asks: [
            { price: '182.50', size: '200', total: '200' },
            { price: '182.45', size: '450', total: '650' },
            { price: '182.40', size: '300', total: '950' },
            { price: '182.35', size: '600', total: '1550' }
          ],
          bids: [
            { price: '182.25', size: '500', total: '500' },
            { price: '182.20', size: '350', total: '850' },
            { price: '182.15', size: '750', total: '1600' },
            { price: '182.10', size: '400', total: '2000' }
          ],
          spread: '0.10'
        },
        bullets: [
          'Market order: execute immediately at best available price',
          'Limit order: execute only at specified price or better',
          'Stop-loss order: sell when price falls below threshold',
          'Bid-ask spread: difference between buy and sell prices',
          'Order book: queue of all pending buy and sell orders'
        ],
        narration: 'Understanding order types is essential — the wrong order in a fast-moving market can result in significant price slippage.'
      },
      {
        id: 'scene-3',
        title: 'Stock Valuation Methods',
        duration: 54,
        background: 'linear-gradient(135deg, #0a1a12 0%, #0e2b1a 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Relative Valuation Multiples (Industry Comparison)',
          bars: [
            { label: 'Tech P/E', value: 28, color: '#4F8EF7' },
            { label: 'Finance P/E', value: 12, color: '#FFD700' },
            { label: 'Utility P/E', value: 16, color: '#50C878' },
            { label: 'Healthcare P/E', value: 22, color: '#C084FC' },
            { label: 'S&P 500 Avg', value: 19, color: '#FF9F43' }
          ],
          maxValue: 35
        },
        bullets: [
          'DCF (Discounted Cash Flow): value = PV of future free cash flows',
          'P/E Multiple: compare price-to-earnings across similar firms',
          'EV/EBITDA: enterprise value relative to operating earnings',
          'Dividend Discount Model: stock value = PV of future dividends',
          'Book value: net assets per share as floor valuation'
        ],
        narration: 'No single valuation method is perfect — skilled analysts triangulate using multiple approaches and sensitivity analysis.'
      },
      {
        id: 'scene-4',
        title: 'Market Indices & Benchmarks',
        duration: 44,
        background: 'linear-gradient(135deg, #0c1e0c 0%, #142a14 100%)',
        svgType: 'line-chart',
        svgData: {
          title: 'Major Index Performance (Rebased to 100)',
          lines: [
            { label: 'S&P 500', color: '#4F8EF7', points: [100, 105, 102, 110, 108, 115, 112, 120, 118, 125, 122, 130] },
            { label: 'NASDAQ', color: '#50C878', points: [100, 108, 104, 115, 110, 120, 116, 128, 124, 135, 130, 142] },
            { label: 'DJIA', color: '#FFD700', points: [100, 103, 101, 107, 105, 110, 108, 114, 112, 118, 116, 121] }
          ],
          xLabels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12']
        },
        bullets: [
          'S&P 500: 500 largest US companies, market-cap weighted',
          'NASDAQ Composite: tech-heavy, ~3,000 stocks',
          'DJIA: 30 blue-chip stocks, price-weighted (oldest index)',
          'Russell 2000: small-cap benchmark, 2,000 small US firms',
          'Indices serve as performance benchmarks and tradable products'
        ],
        narration: 'Market indices are the scorecards of the economy, providing instant insight into market sentiment and sector performance.'
      }
    ]
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Fixed Income & Bond Markets',
    icon: '💰',
    color: '#FFD700',
    description: 'Explore bond pricing, yield curves, credit ratings, and fixed income investment strategies.',
    duration: '15 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'Bond Basics & Terminology',
        duration: 52,
        background: 'linear-gradient(135deg, #1a1400 0%, #2a2000 100%)',
        svgType: 'cash-flow-timeline',
        svgData: {
          title: 'Corporate Bond Cash Flows ($1,000 Face Value, 5% Coupon)',
          periods: ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5'],
          coupon: 50,
          principal: 1000,
          color: '#FFD700'
        },
        bullets: [
          'Bond = debt instrument: borrower pays periodic coupons + principal at maturity',
          'Face value (par): typically $1,000, repaid at maturity',
          'Coupon rate: annual interest rate on face value',
          'Yield to Maturity (YTM): total return if held to maturity',
          'Duration: sensitivity of bond price to interest rate changes'
        ],
        narration: 'Bonds are the workhorses of institutional portfolios, providing predictable income streams and capital preservation in diversified strategies.'
      },
      {
        id: 'scene-2',
        title: 'The Yield Curve',
        duration: 50,
        background: 'linear-gradient(135deg, #1a1200 0%, #2b1e00 100%)',
        svgType: 'yield-curve',
        svgData: {
          title: 'US Treasury Yield Curve',
          curves: [
            {
              label: 'Normal (Jun 2021)',
              color: '#50C878',
              points: [
                { maturity: '3M', yield: 0.05 },
                { maturity: '1Y', yield: 0.07 },
                { maturity: '2Y', yield: 0.22 },
                { maturity: '5Y', yield: 0.88 },
                { maturity: '10Y', yield: 1.52 },
                { maturity: '30Y', yield: 2.15 }
              ]
            },
            {
              label: 'Inverted (Oct 2022)',
              color: '#FF6B6B',
              points: [
                { maturity: '3M', yield: 3.92 },
                { maturity: '1Y', yield: 4.51 },
                { maturity: '2Y', yield: 4.61 },
                { maturity: '5Y', yield: 4.22 },
                { maturity: '10Y', yield: 3.99 },
                { maturity: '30Y', yield: 3.94 }
              ]
            }
          ]
        },
        bullets: [
          'Normal curve: short rates < long rates (healthy growth expectations)',
          'Inverted curve: short rates > long rates (recession predictor)',
          'Flat curve: similar rates across maturities (uncertainty)',
          'Central bank policy shifts the short end of the curve',
          'Inverted curves have preceded every US recession since 1950'
        ],
        narration: 'The yield curve is one of the most powerful economic indicators — its shape reveals market expectations for growth, inflation, and Fed policy.'
      },
      {
        id: 'scene-3',
        title: 'Credit Ratings & Bond Types',
        duration: 48,
        background: 'linear-gradient(135deg, #1a1500 0%, #292000 100%)',
        svgType: 'rating-ladder',
        svgData: {
          title: 'Credit Rating Scale & Yield Spread',
          ratings: [
            { rating: 'AAA', agency: 'S&P', category: 'Investment Grade', spread: 0.3, color: '#22c55e' },
            { rating: 'AA', agency: 'S&P', category: 'Investment Grade', spread: 0.6, color: '#50C878' },
            { rating: 'A', agency: 'S&P', category: 'Investment Grade', spread: 1.0, color: '#86efac' },
            { rating: 'BBB', agency: 'S&P', category: 'Investment Grade', spread: 1.8, color: '#FFD700' },
            { rating: 'BB', agency: 'S&P', category: 'High Yield', spread: 3.5, color: '#FF9F43' },
            { rating: 'B', agency: 'S&P', category: 'High Yield', spread: 5.5, color: '#fb923c' },
            { rating: 'CCC', agency: 'S&P', category: 'Distressed', spread: 10.0, color: '#ef4444' }
          ]
        },
        bullets: [
          'Investment grade: BBB- and above (low default risk)',
          'High yield ("junk"): BB+ and below, higher returns for more risk',
          'Credit spread: additional yield vs risk-free Treasuries',
          'Moody\'s, S&P, and Fitch are the "Big Three" rating agencies',
          'Rating downgrades can trigger forced selling by institutional investors'
        ],
        narration: 'Credit ratings are the shorthand investors use to assess default risk — but as 2008 demonstrated, they are not infallible.'
      },
      {
        id: 'scene-4',
        title: 'Bond Pricing & Interest Rate Risk',
        duration: 50,
        background: 'linear-gradient(135deg, #1a1300 0%, #271e00 100%)',
        svgType: 'line-chart',
        svgData: {
          title: 'Bond Price vs Yield (Inverse Relationship)',
          lines: [
            {
              label: '10-Yr Bond Price ($)',
              color: '#FFD700',
              points: [135, 128, 122, 116, 111, 105, 100, 95, 91, 87, 83, 79]
            }
          ],
          xLabels: ['1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%'],
          xTitle: 'Yield to Maturity'
        },
        bullets: [
          'Bond prices and yields move in opposite directions',
          'When rates rise 1%, a 10-year bond loses ~8-10% in value',
          'Duration measures this price sensitivity to rate changes',
          'Convexity: bond prices fall less than duration predicts (asymmetry)',
          'Shorter duration = lower interest rate risk'
        ],
        narration: 'The inverse price-yield relationship is the most fundamental concept in fixed income — misunderstanding it is costly in rising rate environments.'
      }
    ]
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Money Markets & Short-Term Instruments',
    icon: '🏧',
    color: '#C084FC',
    description: 'Learn about T-bills, commercial paper, repos, and the short-term funding markets.',
    duration: '13 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'Money Market Overview',
        duration: 48,
        background: 'linear-gradient(135deg, #1a0a2e 0%, #2a1050 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Money Market Instruments by Outstanding Volume ($T)',
          bars: [
            { label: 'T-Bills', value: 5.2, color: '#C084FC' },
            { label: 'Repo', value: 4.8, color: '#a855f7' },
            { label: 'Commercial Paper', value: 1.1, color: '#9333ea' },
            { label: 'Fed Funds', value: 0.8, color: '#7c3aed' },
            { label: 'Eurodollar', value: 1.4, color: '#6d28d9' }
          ],
          maxValue: 6
        },
        bullets: [
          'Money markets: short-term debt instruments (maturity < 1 year)',
          'Extremely liquid — can be converted to cash quickly at minimal cost',
          'Low credit risk: backed by government or high-quality issuers',
          'Benchmark rates: SOFR (secured overnight), Fed Funds Rate',
          'Critical for corporate cash management and bank liquidity'
        ],
        narration: 'Money markets are the plumbing of the financial system — when they seize up, as in 2008, the entire economy feels the effects immediately.'
      },
      {
        id: 'scene-2',
        title: 'Treasury Bills & Government Securities',
        duration: 46,
        background: 'linear-gradient(135deg, #1a082a 0%, #250d3f 100%)',
        svgType: 'cash-flow-timeline',
        svgData: {
          title: '13-Week T-Bill (Discount Instrument)',
          periods: ['Issue Date', 'Week 4', 'Week 8', 'Week 13'],
          coupon: 0,
          principal: 1000,
          discount: 975,
          color: '#C084FC',
          isDiscount: true
        },
        bullets: [
          'T-Bills issued at discount, redeemed at face value ($1,000)',
          'Maturities: 4-week, 8-week, 13-week, 26-week, 52-week',
          'Sold via weekly auction — investors bid yield they require',
          'Risk-free rate benchmark used in all financial models',
          'T-Bill yield = the floor rate for all other instruments'
        ],
        narration: 'Treasury bills are the safest instrument in global finance — they are the benchmark against which all other risk is measured.'
      },
      {
        id: 'scene-3',
        title: 'Repurchase Agreements (Repos)',
        duration: 50,
        background: 'linear-gradient(135deg, #180a2e 0%, #221040 100%)',
        svgType: 'flow-diagram',
        svgData: {
          title: 'Repo Transaction Flow',
          nodes: [
            { id: 'dealer', label: 'Dealer\n(Borrower)', x: 60, y: 110, color: '#C084FC' },
            { id: 'investor', label: 'Investor\n(Lender)', x: 380, y: 110, color: '#FFD700' }
          ],
          arrows: [
            { from: 'dealer', to: 'investor', label: 'Securities (collateral)', dir: 'top' },
            { from: 'investor', to: 'dealer', label: 'Cash', dir: 'bottom' },
            { from: 'dealer', to: 'investor', label: '+ Repo Rate Interest', dir: 'bottom2', style: 'dashed' }
          ]
        },
        bullets: [
          'Repo = short-term collateralized borrowing, often overnight',
          'Dealer sells securities and agrees to repurchase at higher price',
          'The difference = repo rate (cost of short-term funding)',
          'Tri-party repo: third-party custodian handles settlement',
          'SOFR (Secured Overnight Financing Rate) is based on repo data'
        ],
        narration: 'Repos are the primary tool banks use for overnight funding — the repo market processes trillions of dollars daily.'
      },
      {
        id: 'scene-4',
        title: 'Commercial Paper & LIBOR Transition',
        duration: 46,
        background: 'linear-gradient(135deg, #1a0a2a 0%, #220f36 100%)',
        svgType: 'two-column',
        svgData: {
          title: 'Commercial Paper vs SOFR-Based Instruments',
          leftTitle: 'Commercial Paper',
          leftColor: '#C084FC',
          rightTitle: 'SOFR Instruments',
          rightColor: '#FFD700',
          leftItems: ['Unsecured corporate IOU', '1-270 day maturity', 'Investment-grade issuers only', 'Sold directly to investors', 'Crisis: dried up in 2008'],
          rightItems: ['Secured overnight rate', 'Replaced LIBOR in 2023', 'Based on $1T+ daily repo', 'CME group publishes daily', 'Benchmark for new FRNs']
        },
        bullets: [
          'Commercial paper: unsecured IOUs from blue-chip corporations',
          'Typical face value $100K+ (wholesale institutional market)',
          'LIBOR: replaced by SOFR in June 2023 after manipulation scandal',
          'SOFR: more robust benchmark based on actual secured transactions',
          'CP market size: ~$1.1 trillion outstanding in the US'
        ],
        narration: 'The transition from LIBOR to SOFR was one of the biggest structural changes in financial markets in decades, affecting $400 trillion in contracts.'
      }
    ]
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Derivatives: Options, Futures & Swaps',
    icon: '🔄',
    color: '#FF9F43',
    description: 'Master derivative instruments for hedging, speculation, and sophisticated risk management.',
    duration: '17 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'Derivatives Overview',
        duration: 50,
        background: 'linear-gradient(135deg, #1a0e00 0%, #2a1800 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Global Derivatives Market (Notional, $T)',
          bars: [
            { label: 'Interest Rate', value: 520, color: '#FF9F43' },
            { label: 'FX Derivatives', value: 95, color: '#FFD700' },
            { label: 'Equity', value: 8, color: '#4F8EF7' },
            { label: 'Credit (CDS)', value: 9, color: '#FF6B6B' },
            { label: 'Commodity', value: 4, color: '#50C878' }
          ],
          maxValue: 580
        },
        bullets: [
          'Derivatives: value derived from an underlying asset or rate',
          'Key types: options, futures, forwards, and swaps',
          'Uses: hedging (risk reduction) and speculation (risk-taking)',
          'Exchange-traded: standardized, cleared, transparent',
          'OTC: customized, bilateral, counterparty credit risk'
        ],
        narration: 'The notional value of global derivatives exceeds $700 trillion — larger than the entire world economy — reflecting their critical role in risk management.'
      },
      {
        id: 'scene-2',
        title: 'Options: Calls & Puts',
        duration: 54,
        background: 'linear-gradient(135deg, #1a0d00 0%, #281600 100%)',
        svgType: 'payoff-diagram',
        svgData: {
          title: 'Option Payoff Profiles at Expiry',
          strike: 100,
          premium: 8,
          diagrams: [
            { type: 'long-call', color: '#50C878', label: 'Long Call' },
            { type: 'long-put', color: '#FF6B6B', label: 'Long Put' }
          ]
        },
        bullets: [
          'Call option: right (not obligation) to BUY at strike price',
          'Put option: right (not obligation) to SELL at strike price',
          'Premium: price paid to acquire the option right',
          'In-the-money (ITM): exercising generates immediate profit',
          'Black-Scholes model: prices options using 5 key variables'
        ],
        narration: 'Options are asymmetric instruments — buyers have limited downside (the premium) but unlimited upside, while sellers pocket the premium but bear unlimited risk.'
      },
      {
        id: 'scene-3',
        title: 'Futures & Forwards',
        duration: 52,
        background: 'linear-gradient(135deg, #1a1000 0%, #261800 100%)',
        svgType: 'two-column',
        svgData: {
          title: 'Futures vs Forward Contracts',
          leftTitle: 'Futures',
          leftColor: '#FF9F43',
          rightTitle: 'Forwards',
          rightColor: '#4F8EF7',
          leftItems: ['Exchange-traded', 'Standardized contracts', 'Daily mark-to-market', 'Clearinghouse guarantee', 'Most closed before expiry'],
          rightItems: ['OTC / bilateral', 'Fully customizable', 'Settled at maturity', 'Counterparty credit risk', 'Often physically settled']
        },
        bullets: [
          'Futures: obligation to buy/sell at future price (standardized)',
          'Forward: customized bilateral contract, same economic effect',
          'Initial margin: good-faith deposit to open futures position',
          'Daily mark-to-market: gains/losses settled daily',
          'Basis risk: mismatch between hedge and underlying instrument'
        ],
        narration: 'Futures markets were originally created for agricultural commodities — today they span oil, currencies, interest rates, and stock indices.'
      },
      {
        id: 'scene-4',
        title: 'Interest Rate Swaps',
        duration: 54,
        background: 'linear-gradient(135deg, #1a1100 0%, #231700 100%)',
        svgType: 'swap-flow',
        svgData: {
          title: 'Plain Vanilla Interest Rate Swap',
          partyA: 'Bank A\n(Pays Fixed)',
          partyB: 'Bank B\n(Pays Floating)',
          fixedRate: '3.5% Fixed',
          floatingRate: 'SOFR + 0.5%',
          notional: '$100M Notional',
          tenor: '5-Year Tenor'
        },
        bullets: [
          'Swap: exchange one cash flow stream for another',
          'Most common: fixed-for-floating interest rate swap',
          'No exchange of principal — only net cash flow differences',
          'Notional amount: basis for calculating payments (not exchanged)',
          'Used by corporations to convert floating-rate debt to fixed'
        ],
        narration: 'Interest rate swaps are the most traded derivative in the world, enabling corporations and banks to manage their interest rate exposure with precision.'
      }
    ]
  },
  {
    id: 'module-6',
    number: 6,
    title: 'Portfolio Management & MPT',
    icon: '📊',
    color: '#4ECDC4',
    description: 'Apply Modern Portfolio Theory to construct optimally diversified investment portfolios.',
    duration: '16 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'Modern Portfolio Theory Basics',
        duration: 52,
        background: 'linear-gradient(135deg, #001a1a 0%, #002a2a 100%)',
        svgType: 'efficient-frontier',
        svgData: {
          title: 'Efficient Frontier — Risk vs Return',
          frontier: [
            { risk: 5, return: 4 }, { risk: 7, return: 6 }, { risk: 9, return: 8 },
            { risk: 11, return: 10 }, { risk: 13, return: 11.5 }, { risk: 15, return: 12.5 },
            { risk: 18, return: 13 }, { risk: 22, return: 13.2 }
          ],
          portfolios: [
            { risk: 8, return: 7, label: 'Conservative', color: '#4ECDC4' },
            { risk: 13, return: 11.5, label: 'Balanced', color: '#FFD700' },
            { risk: 20, return: 12, label: 'Aggressive', color: '#FF9F43' }
          ],
          cml: { rf: 2, tangency: { risk: 13, return: 11.5 } }
        },
        bullets: [
          'Harry Markowitz (1952): optimize portfolio for risk-adjusted return',
          'Diversification: combining assets reduces total portfolio risk',
          'Efficient frontier: maximum return for each risk level',
          'Correlation: diversification works best with low correlations',
          'Sharpe ratio: (return - risk-free rate) / standard deviation'
        ],
        narration: 'Markowitz\'s insight — that portfolio risk can be reduced through diversification without sacrificing expected return — transformed investing permanently.'
      },
      {
        id: 'scene-2',
        title: 'Asset Allocation Strategies',
        duration: 50,
        background: 'linear-gradient(135deg, #001818 0%, #002424 100%)',
        svgType: 'pie-chart',
        svgData: {
          title: 'Classic 60/40 Portfolio vs Endowment Model',
          charts: [
            {
              label: 'Traditional 60/40',
              slices: [
                { label: 'Equities', value: 60, color: '#4ECDC4' },
                { label: 'Fixed Income', value: 40, color: '#FFD700' }
              ]
            },
            {
              label: 'Yale Endowment Model',
              slices: [
                { label: 'Private Equity', value: 33, color: '#4ECDC4' },
                { label: 'Hedge Funds', value: 22, color: '#FFD700' },
                { label: 'Real Assets', value: 17, color: '#FF9F43' },
                { label: 'Fixed Income', value: 7, color: '#4F8EF7' },
                { label: 'Equities', value: 14, color: '#50C878' },
                { label: 'Other', value: 7, color: '#C084FC' }
              ]
            }
          ]
        },
        bullets: [
          'Strategic asset allocation: long-term target weights by asset class',
          'Tactical allocation: short-term deviations based on market views',
          '60/40 portfolio: classic balanced approach (questioned post-2022)',
          'Endowment model (Yale): heavy alternatives, long time horizon',
          'Rebalancing: restore target weights periodically or on threshold'
        ],
        narration: 'Asset allocation is the most important decision in portfolio construction — it determines 90% of long-term return variability according to Brinson et al.'
      },
      {
        id: 'scene-3',
        title: 'CAPM & Security Market Line',
        duration: 54,
        background: 'linear-gradient(135deg, #001a18 0%, #00282a 100%)',
        svgType: 'security-market-line',
        svgData: {
          title: 'Security Market Line (CAPM)',
          riskFreeRate: 3,
          marketReturn: 10,
          securities: [
            { label: 'Bond', beta: 0.3, return: 5.1, color: '#FFD700' },
            { label: 'Utility', beta: 0.6, return: 7.2, color: '#4ECDC4' },
            { label: 'S&P ETF', beta: 1.0, return: 10, color: '#50C878' },
            { label: 'Tech Stock', beta: 1.4, return: 12.8, color: '#4F8EF7' },
            { label: 'Small Cap', beta: 1.8, return: 15.6, color: '#FF9F43' }
          ]
        },
        bullets: [
          'CAPM: Expected Return = Rf + β × (Rm - Rf)',
          'Beta (β): sensitivity of asset to market movements',
          'β = 1: moves in line with market; β > 1: amplified moves',
          'Security Market Line: plots expected return vs beta for all assets',
          'Alpha: return above/below what CAPM predicts (manager skill)'
        ],
        narration: 'CAPM, despite its simplifying assumptions, remains the most widely taught and used framework for understanding the relationship between risk and expected return.'
      },
      {
        id: 'scene-4',
        title: 'Factor Investing & Smart Beta',
        duration: 50,
        background: 'linear-gradient(135deg, #001a1a 0%, #002828 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Factor Premium Annualized Returns (1963–2023)',
          bars: [
            { label: 'Market', value: 8.1, color: '#4ECDC4' },
            { label: 'Value', value: 3.5, color: '#FFD700' },
            { label: 'Size', value: 2.8, color: '#4F8EF7' },
            { label: 'Momentum', value: 4.2, color: '#FF9F43' },
            { label: 'Quality', value: 3.1, color: '#50C878' },
            { label: 'Low Vol', value: 2.4, color: '#C084FC' }
          ],
          maxValue: 12
        },
        bullets: [
          'Fama-French: market, size, and value factors explain returns',
          'Value factor: cheap stocks outperform expensive ones long-term',
          'Momentum: recent outperformers continue to outperform short-term',
          'Quality factor: profitable, stable companies earn premium returns',
          'Smart beta: systematic factor exposure at lower cost than active management'
        ],
        narration: 'Factor investing bridges the gap between passive indexing and active management, offering systematic premium capture with transparent, rule-based strategies.'
      }
    ]
  },
  {
    id: 'module-7',
    number: 7,
    title: 'Risk Management & Risk Metrics',
    icon: '🛡️',
    color: '#FF6B6B',
    description: 'Quantify and manage financial risk using VaR, stress testing, and risk frameworks.',
    duration: '15 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'Types of Financial Risk',
        duration: 50,
        background: 'linear-gradient(135deg, #1a0505 0%, #2a0808 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Basel III Risk Capital Allocation',
          bars: [
            { label: 'Market Risk', value: 15, color: '#FF6B6B' },
            { label: 'Credit Risk', value: 55, color: '#FF9F43' },
            { label: 'Operational Risk', value: 20, color: '#FFD700' },
            { label: 'Liquidity Risk', value: 10, color: '#4F8EF7' }
          ],
          maxValue: 70
        },
        bullets: [
          'Market risk: loss from adverse price movements (equity, FX, rates)',
          'Credit risk: loss from counterparty default or downgrade',
          'Liquidity risk: inability to sell assets at fair value quickly',
          'Operational risk: losses from process failures, fraud, systems',
          'Systemic risk: contagion across the entire financial system'
        ],
        narration: 'Modern risk management requires quantifying diverse risk types — a portfolio that looks safe from one angle may harbor hidden dangers in another dimension.'
      },
      {
        id: 'scene-2',
        title: 'Value at Risk (VaR)',
        duration: 54,
        background: 'linear-gradient(135deg, #1a0606 0%, #270a0a 100%)',
        svgType: 'var-distribution',
        svgData: {
          title: 'VaR: 99% 1-Day VaR = $2.3M',
          mean: 0.05,
          std: 1.2,
          confidence: 99,
          portfolioValue: 100,
          varAmount: 2.3,
          color: '#FF6B6B'
        },
        bullets: [
          'VaR: maximum expected loss at a given confidence level and time horizon',
          '99% 1-day VaR of $2.3M: only 1% chance of losing more than $2.3M in a day',
          'Historical simulation: uses actual past returns distribution',
          'Parametric VaR: assumes normal distribution (underestimates tail risk)',
          'Monte Carlo VaR: simulates thousands of random scenarios'
        ],
        narration: 'VaR became the industry standard after JP Morgan published RiskMetrics in 1994 — but its failure to capture extreme tail risk led to massive losses in 2008.'
      },
      {
        id: 'scene-3',
        title: 'Stress Testing & Scenario Analysis',
        duration: 48,
        background: 'linear-gradient(135deg, #1a0505 0%, #260808 100%)',
        svgType: 'two-column',
        svgData: {
          title: 'Historical Stress Scenarios Impact on $100M Portfolio',
          leftTitle: 'Crisis Event',
          leftColor: '#FF6B6B',
          rightTitle: 'Portfolio Loss',
          rightColor: '#FFD700',
          leftItems: ['2008 GFC (Sep-Oct)', '2020 COVID Crash', '2000 Dot-com Bust', '1998 LTCM Crisis', '1987 Black Monday'],
          rightItems: ['-38% ($38M)', '-34% ($34M)', '-45% ($45M)', '-18% ($18M)', '-23% ($23M)']
        },
        bullets: [
          'Stress testing: apply extreme but plausible market shocks',
          'Scenario analysis: portfolio impact of specific crisis events',
          'Reverse stress test: find scenarios that would cause firm failure',
          'Regulatory stress tests (DFAST/CCAR): banks must prove resilience',
          'Tail risk hedging: options strategies to limit catastrophic losses'
        ],
        narration: 'Stress tests force institutions to confront their most vulnerable scenarios — the question is not if a crisis will occur, but whether you are prepared for it.'
      },
      {
        id: 'scene-4',
        title: 'Greeks & Hedging Strategies',
        duration: 48,
        background: 'linear-gradient(135deg, #1a0606 0%, #250909 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Option Greeks — Sensitivity Measures',
          bars: [
            { label: 'Delta (Δ)', value: 0.65, color: '#FF6B6B', normalized: 65 },
            { label: 'Gamma (Γ)', value: 0.04, color: '#FF9F43', normalized: 40 },
            { label: 'Vega (ν)', value: 0.25, color: '#FFD700', normalized: 25 },
            { label: 'Theta (Θ)', value: -0.08, color: '#4F8EF7', normalized: 35 },
            { label: 'Rho (ρ)', value: 0.15, color: '#50C878', normalized: 15 }
          ],
          maxValue: 75
        },
        bullets: [
          'Delta (Δ): sensitivity to $1 change in underlying asset price',
          'Gamma (Γ): rate of change of delta (second-order price sensitivity)',
          'Vega (ν): sensitivity to 1% change in implied volatility',
          'Theta (Θ): daily time decay — options lose value as expiry approaches',
          'Delta-hedging: continuously adjust portfolio to maintain delta = 0'
        ],
        narration: 'The Greeks are the dashboard of options risk management — traders monitor them constantly to understand and hedge their exposure to every market variable.'
      }
    ]
  },
  {
    id: 'module-8',
    number: 8,
    title: 'Market Regulations & Compliance',
    icon: '⚖️',
    color: '#A8E6CF',
    description: 'Navigate the regulatory landscape: SEC rules, MiFID II, Basel III, and ESG compliance.',
    duration: '14 min',
    scenes: [
      {
        id: 'scene-1',
        title: 'Global Regulatory Landscape',
        duration: 50,
        background: 'linear-gradient(135deg, #0a1a0d 0%, #122415 100%)',
        svgType: 'flow-diagram',
        svgData: {
          title: 'Global Regulatory Framework',
          nodes: [
            { id: 'fsb', label: 'Financial\nStability Board', x: 220, y: 40, color: '#A8E6CF' },
            { id: 'iosco', label: 'IOSCO\n(Securities)', x: 60, y: 130, color: '#4ECDC4' },
            { id: 'bcbs', label: 'BCBS\n(Banking)', x: 220, y: 130, color: '#4F8EF7' },
            { id: 'iais', label: 'IAIS\n(Insurance)', x: 380, y: 130, color: '#FFD700' },
            { id: 'sec', label: 'SEC / FINRA\n(US)', x: 60, y: 220, color: '#50C878' },
            { id: 'fca', label: 'FCA\n(UK)', x: 220, y: 220, color: '#FF9F43' },
            { id: 'esma', label: 'ESMA\n(EU)', x: 380, y: 220, color: '#C084FC' }
          ],
          arrows: []
        },
        bullets: [
          'SEC: primary US securities regulator — enforces disclosure and fraud rules',
          'FINRA: self-regulatory organization for broker-dealers',
          'FCA: UK financial regulator post-Brexit',
          'ESMA: European Securities and Markets Authority',
          'Basel Committee: sets global banking capital standards'
        ],
        narration: 'The regulatory landscape is multi-layered and jurisdictional — global firms must navigate a complex web of overlapping and sometimes conflicting rules.'
      },
      {
        id: 'scene-2',
        title: 'Post-Crisis Regulation: Dodd-Frank & Basel III',
        duration: 52,
        background: 'linear-gradient(135deg, #0a1a10 0%, #102215 100%)',
        svgType: 'two-column',
        svgData: {
          title: 'Key Post-2008 Regulatory Changes',
          leftTitle: 'Dodd-Frank (US, 2010)',
          leftColor: '#A8E6CF',
          rightTitle: 'Basel III (Global, 2010)',
          rightColor: '#4F8EF7',
          leftItems: ['Volcker Rule (no prop trading)', 'OTC derivatives clearing', 'Systemic risk oversight (FSOC)', 'Consumer protection (CFPB)', 'Stress testing (DFAST/CCAR)'],
          rightItems: ['Higher capital ratios (CET1 ≥7%)', 'Liquidity coverage ratio (LCR)', 'Net stable funding ratio (NSFR)', 'Leverage ratio limit', 'Countercyclical capital buffer']
        },
        bullets: [
          'Dodd-Frank: 848-page law overhauling US financial regulation after 2008',
          'Volcker Rule: banks cannot trade for their own account (proprietary trading)',
          'Basel III: requires banks to hold more high-quality capital and liquidity',
          'CET1 ratio: common equity tier 1 capital ≥ 7% of risk-weighted assets',
          'Too-Big-To-Fail: systemically important banks face higher requirements'
        ],
        narration: 'The post-2008 regulatory overhaul was the most comprehensive since the 1930s — designed to prevent the type of systemic failure that cost the global economy $22 trillion.'
      },
      {
        id: 'scene-3',
        title: 'Market Abuse & Insider Trading',
        duration: 48,
        background: 'linear-gradient(135deg, #0c1a0e 0%, #142016 100%)',
        svgType: 'two-column',
        svgData: {
          title: 'Prohibited vs. Permitted Activities',
          leftTitle: 'Prohibited Conduct',
          leftColor: '#FF6B6B',
          rightTitle: 'Permitted Activity',
          rightColor: '#50C878',
          leftItems: ['Trading on MNPI', 'Front-running client orders', 'Spoofing/layering orders', 'Wash trading (fake volume)', 'Coordinated pump-and-dump'],
          rightItems: ['Mosaic theory research', 'Pre-planned 10b5-1 plans', 'Market making operations', 'Index rebalancing trades', 'Bona fide hedging']
        },
        bullets: [
          'Insider trading: trading on material non-public information (MNPI)',
          'Market manipulation: artificial price distortion (spoofing, painting the tape)',
          'Regulation FD: companies must disclose material info publicly, not selectively',
          'Surveillance systems monitor patterns: volume spikes before announcements',
          'Chinese walls: information barriers between divisions in investment banks'
        ],
        narration: 'Market integrity is the foundation of investor trust — without it, the price discovery function that makes markets valuable would collapse entirely.'
      },
      {
        id: 'scene-4',
        title: 'ESG & Sustainable Finance Regulation',
        duration: 50,
        background: 'linear-gradient(135deg, #0a1c0c 0%, #112618 100%)',
        svgType: 'bar-chart',
        svgData: {
          title: 'Global Sustainable Finance AUM ($T)',
          bars: [
            { label: '2016', value: 22.8, color: '#A8E6CF' },
            { label: '2018', value: 30.7, color: '#4ECDC4' },
            { label: '2020', value: 35.3, color: '#50C878' },
            { label: '2022', value: 30.3, color: '#22c55e' },
            { label: '2024E', value: 40.5, color: '#16a34a' }
          ],
          maxValue: 50
        },
        bullets: [
          'ESG: Environmental, Social, Governance factors in investment analysis',
          'EU SFDR: mandatory ESG disclosure framework for fund managers',
          'TCFD: climate-related financial disclosure recommendations',
          'Greenwashing: misleadingly labeling funds as ESG (regulatory crackdown)',
          'Taxonomy Regulation: EU classification of sustainable economic activities'
        ],
        narration: 'ESG regulation is the fastest-growing area of financial compliance — regulators worldwide are establishing mandatory disclosure standards to address greenwashing and climate risk.'
      }
    ]
  }
]

export function getModuleById(id) {
  return MODULES.find(m => m.id === id) || null
}

export function isModuleUnlocked(moduleId, userProgress) {
  const mod = MODULES.find(m => m.id === moduleId)
  if (!mod) return false
  if (mod.number === 1) return true
  const prevModuleId = MODULES.find(m => m.number === mod.number - 1)?.id
  return prevModuleId ? userProgress[prevModuleId]?.completed === true : false
}

export function getModuleProgress(moduleId, userProgress) {
  const p = userProgress?.[moduleId]
  if (!p) return { status: 'not-started', percentage: 0 }
  if (p.completed) return { status: 'completed', percentage: 100 }
  if (p.videoWatched) return { status: 'video-watched', percentage: 60 }
  return { status: 'not-started', percentage: 0 }
}
