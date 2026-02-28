// Capital Markets Learning Portal — Assessment Data
// 8 modules × 10 questions = 80 total questions

export const ASSESSMENTS = {
  'module-1': {
    title: 'Introduction to Capital Markets',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'What is the primary function of capital markets?',
        options: [
          'To provide short-term loans for daily business operations',
          'To connect investors with entities needing long-term capital',
          'To facilitate currency exchange between countries',
          'To manage government monetary policy'
        ],
        correct: 1,
        explanation: 'Capital markets connect those with surplus capital (investors) to those who need long-term capital (corporations, governments), enabling investment and growth.'
      },
      {
        id: 2,
        question: 'Which of the following best describes the PRIMARY market?',
        options: [
          'Where existing securities are traded between investors',
          'The most important stock exchange in a country',
          'Where new securities are issued and sold for the first time',
          'The market for government bonds only'
        ],
        correct: 2,
        explanation: 'The primary market is where new securities are created and sold for the first time (e.g., IPOs). The secondary market is where previously issued securities are subsequently traded.'
      },
      {
        id: 3,
        question: 'An Initial Public Offering (IPO) takes place in which type of market?',
        options: [
          'Secondary market',
          'Derivatives market',
          'Money market',
          'Primary market'
        ],
        correct: 3,
        explanation: 'An IPO occurs in the primary market — it\'s the first time a company sells its shares to the public, raising capital directly for the issuing company.'
      },
      {
        id: 4,
        question: 'Which participant in capital markets is responsible for underwriting new securities issuances?',
        options: [
          'Retail investors',
          'Investment banks',
          'Insurance companies',
          'Central banks'
        ],
        correct: 1,
        explanation: 'Investment banks underwrite new securities, meaning they buy them from the issuer and resell them to investors, guaranteeing the issuer a set price for the offering.'
      },
      {
        id: 5,
        question: 'What does "price discovery" mean in the context of capital markets?',
        options: [
          'Setting fixed prices for all securities annually',
          'The process by which markets determine the fair value of assets through supply and demand',
          'Discovering hidden costs in financial transactions',
          'The process of finding the lowest-cost broker'
        ],
        correct: 1,
        explanation: 'Price discovery is the process through which buyers and sellers interact in markets to determine the fair market price of assets, incorporating all available information.'
      },
      {
        id: 6,
        question: 'Which of the following is classified as an INSTITUTIONAL investor?',
        options: [
          'A retiree investing her savings in a 401(k)',
          'A college student buying stocks in a brokerage account',
          'A pension fund managing $50 billion in assets',
          'A small business owner investing business profits in bonds'
        ],
        correct: 2,
        explanation: 'Institutional investors are large entities that pool funds to invest — including pension funds, mutual funds, insurance companies, and endowments. They typically have preferential access and lower transaction costs.'
      },
      {
        id: 7,
        question: 'What is the role of market makers in secondary markets?',
        options: [
          'They create new financial regulations',
          'They manufacture financial products',
          'They provide liquidity by continuously quoting bid and ask prices',
          'They manage the settlement and clearing of all trades'
        ],
        correct: 2,
        explanation: 'Market makers provide liquidity by standing ready to buy (at bid price) and sell (at ask price) securities at all times, earning the bid-ask spread as compensation for this service.'
      },
      {
        id: 8,
        question: 'The NYSE and NASDAQ are examples of which type of market?',
        options: [
          'Primary markets',
          'Money markets',
          'Over-the-counter (OTC) markets',
          'Secondary markets'
        ],
        correct: 3,
        explanation: 'NYSE and NASDAQ are secondary markets — organized exchanges where previously issued securities are traded between investors. New securities are issued in the primary market but subsequently trade on secondary markets.'
      },
      {
        id: 9,
        question: 'Which best explains why secondary markets are essential even though companies don\'t directly benefit from secondary market trading?',
        options: [
          'Companies collect a fee on every secondary market transaction',
          'Secondary markets have no economic value',
          'Secondary market liquidity makes investors willing to invest in primary offerings',
          'Secondary markets are where bond coupons get paid'
        ],
        correct: 2,
        explanation: 'Without secondary market liquidity, investors would be reluctant to buy primary offerings because they couldn\'t easily exit. The secondary market\'s liquidity enables primary market capital formation.'
      },
      {
        id: 10,
        question: 'Which regulatory body primarily oversees U.S. capital markets?',
        options: [
          'Federal Reserve (Fed)',
          'Securities and Exchange Commission (SEC)',
          'Department of Treasury',
          'Federal Deposit Insurance Corporation (FDIC)'
        ],
        correct: 1,
        explanation: 'The SEC (Securities and Exchange Commission) is the primary regulator of U.S. capital markets, enforcing securities laws, requiring disclosure, and protecting investors from fraud.'
      }
    ]
  },
  'module-2': {
    title: 'Equity Markets & Stock Trading',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'What does buying a share of common stock represent?',
        options: [
          'Lending money to a corporation',
          'An ownership stake in the corporation',
          'A fixed income payment from the corporation',
          'A guaranteed return on investment'
        ],
        correct: 1,
        explanation: 'Common stock represents equity ownership in a corporation. Shareholders are part-owners with voting rights and residual claims on assets after all debts are paid.'
      },
      {
        id: 2,
        question: 'Which order type guarantees execution but NOT price?',
        options: [
          'Limit order',
          'Stop-limit order',
          'Market order',
          'Good-till-cancelled order'
        ],
        correct: 2,
        explanation: 'A market order executes immediately at the best available price — execution is guaranteed, but the price may differ from the last quoted price, especially in volatile markets.'
      },
      {
        id: 3,
        question: 'The P/E (Price-to-Earnings) ratio is calculated as:',
        options: [
          'Earnings Per Share ÷ Stock Price',
          'Stock Price ÷ Earnings Per Share',
          'Net Income ÷ Revenue',
          'Total Equity ÷ Total Shares'
        ],
        correct: 1,
        explanation: 'P/E = Stock Price ÷ Earnings Per Share. It tells you how many dollars investors are paying for each dollar of earnings. A P/E of 20 means investors pay $20 for every $1 of annual earnings.'
      },
      {
        id: 4,
        question: 'What is the "bid-ask spread" in stock trading?',
        options: [
          'The difference between a stock\'s 52-week high and low',
          'The commission charged by the broker',
          'The difference between the highest buy price and lowest sell price',
          'The distance between the stock price and its book value'
        ],
        correct: 2,
        explanation: 'The bid-ask spread is the difference between the highest price a buyer will pay (bid) and the lowest price a seller will accept (ask). It represents the cost of immediate execution and the market maker\'s compensation.'
      },
      {
        id: 5,
        question: 'The S&P 500 index is:',
        options: [
          'A price-weighted average of 500 stocks',
          'An equal-weighted index of 500 large US companies',
          'A market-cap-weighted index of 500 large US companies',
          'An index of the 500 highest-dividend-paying US stocks'
        ],
        correct: 2,
        explanation: 'The S&P 500 is a market-capitalization-weighted index, meaning larger companies have proportionally more influence. A stock\'s weight = its market cap ÷ total index market cap.'
      },
      {
        id: 6,
        question: 'Which valuation method estimates a stock\'s value by discounting projected future free cash flows?',
        options: [
          'Price-to-Book ratio',
          'Discounted Cash Flow (DCF) analysis',
          'Price-to-Sales ratio',
          'Comparable company analysis'
        ],
        correct: 1,
        explanation: 'DCF analysis values a company by estimating future free cash flows and discounting them back to present value using a discount rate (typically WACC). It\'s considered the most theoretically sound valuation method.'
      },
      {
        id: 7,
        question: 'Preferred stock differs from common stock primarily because:',
        options: [
          'Preferred shareholders always receive higher capital gains',
          'Preferred stock cannot be listed on public exchanges',
          'Preferred shareholders receive fixed dividends and have priority in liquidation',
          'Preferred shareholders have more voting rights than common shareholders'
        ],
        correct: 2,
        explanation: 'Preferred stock receives fixed dividend payments and has priority over common stock in bankruptcy liquidation. However, preferred shareholders typically have no (or limited) voting rights.'
      },
      {
        id: 8,
        question: 'What is "price slippage" in trading?',
        options: [
          'A broker\'s error in executing an order',
          'The difference between the expected price and the actual execution price',
          'When a stock price falls more than 10% in one day',
          'The fee charged for trading in after-hours markets'
        ],
        correct: 1,
        explanation: 'Slippage occurs when there\'s a difference between the expected price of a trade and the price at which it actually executes. It\'s common with large market orders in illiquid markets.'
      },
      {
        id: 9,
        question: 'The Dow Jones Industrial Average (DJIA) is unique among major indices because it is:',
        options: [
          'Market-cap-weighted',
          'Equal-weighted',
          'Price-weighted',
          'Earnings-weighted'
        ],
        correct: 2,
        explanation: 'The DJIA is price-weighted — stocks with higher share prices have greater influence. This means a $400 stock affects the index 4x more than a $100 stock, regardless of each company\'s market cap.'
      },
      {
        id: 10,
        question: 'A stock trading at P/E of 35 when its industry average P/E is 18 most likely indicates:',
        options: [
          'The stock is undervalued and should be bought',
          'The stock has a high debt level',
          'The market expects significantly higher future growth for this company',
          'The company recently cut its dividend'
        ],
        correct: 2,
        explanation: 'A premium P/E (relative to peers) usually reflects higher expected growth. Investors pay more per dollar of current earnings because they expect future earnings to be much higher. Tech companies often trade at premium P/Es for this reason.'
      }
    ]
  },
  'module-3': {
    title: 'Fixed Income & Bond Markets',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'When interest rates RISE, what happens to existing bond prices?',
        options: [
          'Bond prices rise proportionally',
          'Bond prices remain unchanged',
          'Bond prices fall',
          'Bond prices become more volatile but don\'t change in direction'
        ],
        correct: 2,
        explanation: 'Bond prices and yields (interest rates) move in OPPOSITE directions. When rates rise, existing bonds with lower coupon rates become less attractive, so their prices fall to offer a competitive yield.'
      },
      {
        id: 2,
        question: 'What does "Yield to Maturity" (YTM) represent?',
        options: [
          'The annual coupon payment divided by face value',
          'The total return if the bond is held to maturity and coupons are reinvested at the same rate',
          'The current market price of the bond',
          'The credit rating of the bond issuer'
        ],
        correct: 1,
        explanation: 'YTM is the total annualized return an investor would earn if they buy the bond at the current price, hold it to maturity, and reinvest all coupons at the same YTM rate.'
      },
      {
        id: 3,
        question: 'An INVERTED yield curve (short rates > long rates) historically signals:',
        options: [
          'A healthy, expanding economy',
          'High inflation expectations',
          'An impending recession',
          'Strong corporate earnings growth'
        ],
        correct: 2,
        explanation: 'An inverted yield curve has preceded every US recession since 1950. It suggests investors expect economic weakness ahead, leading central banks to cut short-term rates, which pulls long-term rates below current short-term rates.'
      },
      {
        id: 4,
        question: 'A bond rated "BB+" is classified as:',
        options: [
          'Investment grade — suitable for all institutional investors',
          'AAA quality — the highest possible rating',
          'High yield (junk) — below investment grade',
          'Distressed — near default status'
        ],
        correct: 2,
        explanation: 'Investment grade is BBB- and above (S&P scale). BB+ and below is high yield ("junk"). BB+ is the highest high-yield rating — one notch below investment grade, sometimes called "crossover" credit.'
      },
      {
        id: 5,
        question: 'What is "duration" in fixed income analysis?',
        options: [
          'The time remaining until a bond matures',
          'The measure of a bond\'s sensitivity to interest rate changes',
          'The total number of coupon payments remaining',
          'The length of time a bond has been outstanding'
        ],
        correct: 1,
        explanation: 'Duration measures how sensitive a bond\'s price is to changes in interest rates. A duration of 7 means the bond\'s price will change approximately 7% for a 1% change in interest rates.'
      },
      {
        id: 6,
        question: 'A bond with a $1,000 face value and 5% annual coupon pays how much per year?',
        options: [
          '$5',
          '$50',
          '$500',
          '$1,050'
        ],
        correct: 1,
        explanation: 'Annual coupon = coupon rate × face value = 5% × $1,000 = $50. This $50 is typically paid semi-annually ($25 every 6 months) for corporate and government bonds in the US.'
      },
      {
        id: 7,
        question: 'What does "credit spread" measure?',
        options: [
          'The width of the bid-ask spread for bond trading',
          'The additional yield a corporate bond offers over a comparable risk-free Treasury bond',
          'The difference between a bond\'s coupon and its YTM',
          'The gap between investment grade and high yield returns'
        ],
        correct: 1,
        explanation: 'Credit spread is the yield premium investors demand for taking on credit risk compared to risk-free Treasuries. Wider spreads = higher perceived default risk. Spreads widen during recessions and market stress.'
      },
      {
        id: 8,
        question: 'Which bond type is backed by government tax revenue and considered the safest?',
        options: [
          'Corporate bonds',
          'High yield bonds',
          'Convertible bonds',
          'Government (sovereign) bonds / Treasury bonds'
        ],
        correct: 3,
        explanation: 'Government bonds (like US Treasuries) are backed by the full faith and credit of the government and its taxing authority. They are considered risk-free for credit purposes and serve as the benchmark for all other bonds.'
      },
      {
        id: 9,
        question: 'The "Big Three" credit rating agencies are:',
        options: [
          'Bloomberg, Reuters, and Refinitiv',
          'JP Morgan, Goldman Sachs, and Morgan Stanley',
          'Moody\'s, S&P Global, and Fitch Ratings',
          'BIS, IMF, and World Bank'
        ],
        correct: 2,
        explanation: 'Moody\'s, S&P Global Ratings, and Fitch are the three dominant credit rating agencies worldwide, rating approximately 95% of all rated debt securities. Their ratings significantly affect borrowing costs.'
      },
      {
        id: 10,
        question: 'What is "convexity" in bond analysis?',
        options: [
          'The circular shape of yield curve graphs',
          'A measure of how curved the price-yield relationship is, showing bonds lose less than duration predicts when yields rise',
          'The tendency of bond prices to cluster around par value',
          'The relationship between bond maturity and credit quality'
        ],
        correct: 1,
        explanation: 'Convexity measures the curvature of the price-yield relationship. Positive convexity means bond prices fall less than duration predicts when yields rise, and rise more when yields fall — a desirable property for investors.'
      }
    ]
  },
  'module-4': {
    title: 'Money Markets & Short-Term Instruments',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'What is the defining characteristic of money market instruments?',
        options: [
          'They provide the highest returns in the market',
          'They are exclusively issued by central banks',
          'They have short maturities (less than one year), high liquidity, and low credit risk',
          'They are traded only in physical form, not electronically'
        ],
        correct: 2,
        explanation: 'Money market instruments are characterized by maturities under one year (often days to months), high liquidity, and minimal credit risk. They are used for short-term cash management.'
      },
      {
        id: 2,
        question: 'Treasury Bills (T-Bills) are sold at:',
        options: [
          'Face value with periodic coupon payments',
          'A premium above face value',
          'A discount below face value, redeemed at face value at maturity',
          'Variable rates tied to the federal funds rate'
        ],
        correct: 2,
        explanation: 'T-Bills are discount instruments — bought at a price below face value and redeemed at face value at maturity. The difference is the investor\'s return. No periodic coupon payments are made.'
      },
      {
        id: 3,
        question: 'What is a repurchase agreement (repo)?',
        options: [
          'A stock buyback program by a corporation',
          'Short-term collateralized borrowing: selling securities with an agreement to repurchase them at a higher price',
          'A long-term agreement to refinance corporate debt',
          'A contract to repurchase foreign currency at a future date'
        ],
        correct: 1,
        explanation: 'A repo is a short-term borrowing mechanism: the borrower sells securities (collateral) and simultaneously agrees to repurchase them at a slightly higher price. The price difference represents the repo rate (interest).'
      },
      {
        id: 4,
        question: 'SOFR (Secured Overnight Financing Rate) was created to replace:',
        options: [
          'The Federal Funds Rate',
          'LIBOR (London Interbank Offered Rate)',
          'The Prime Rate',
          'The Discount Rate'
        ],
        correct: 1,
        explanation: 'SOFR replaced LIBOR, which was phased out in June 2023 after the LIBOR manipulation scandal. SOFR is based on actual overnight repo transactions, making it more robust than LIBOR\'s survey-based methodology.'
      },
      {
        id: 5,
        question: 'Commercial paper is typically issued by:',
        options: [
          'Small businesses seeking startup capital',
          'Investment-grade corporations to fund short-term needs',
          'The Federal Reserve to control money supply',
          'Municipalities to fund infrastructure projects'
        ],
        correct: 1,
        explanation: 'Commercial paper is unsecured short-term debt (typically 1-270 days) issued by investment-grade corporations to fund inventory, payables, or other short-term needs. It\'s a cheaper alternative to bank lines of credit.'
      },
      {
        id: 6,
        question: 'Which rate serves as the risk-free rate benchmark used in virtually all financial models?',
        options: [
          'The Prime Lending Rate',
          'The Federal Funds Rate',
          'The Treasury Bill (T-Bill) yield',
          'The SOFR rate'
        ],
        correct: 2,
        explanation: 'T-Bill yields are used as the risk-free rate in financial models like CAPM, Black-Scholes, and DCF analysis. Because the US government is considered default-risk-free, T-Bills represent the minimum return investors require.'
      },
      {
        id: 7,
        question: 'In a repo transaction, the "haircut" refers to:',
        options: [
          'The broker\'s commission on the repo',
          'The difference between collateral market value and the loan amount (overcollateralization)',
          'The penalty for early termination of the repo',
          'The spread between bid and ask prices in the repo market'
        ],
        correct: 1,
        explanation: 'A haircut is the percentage by which collateral\'s market value exceeds the cash loan. If a dealer pledges $100M of bonds for $98M cash, the haircut is 2%. It protects lenders against collateral price declines.'
      },
      {
        id: 8,
        question: 'What happened to commercial paper markets during the 2008 financial crisis?',
        options: [
          'Commercial paper rates fell to zero due to government support',
          'Commercial paper volumes grew as banks increased lending',
          'The CP market froze as investors refused to roll over maturing paper',
          'Commercial paper was eliminated by the Dodd-Frank Act'
        ],
        correct: 2,
        explanation: 'In September 2008 after Lehman\'s collapse, money market funds "broke the buck" and stopped buying CP. Companies that relied on rolling over CP for funding suddenly faced a liquidity crisis, threatening the broader economy.'
      },
      {
        id: 9,
        question: 'The Federal Funds Rate is the rate at which:',
        options: [
          'The Fed lends money to the US Treasury',
          'Banks lend their excess reserves to each other overnight',
          'Consumers borrow from commercial banks',
          'The government issues Treasury securities'
        ],
        correct: 1,
        explanation: 'The Fed Funds Rate is the interest rate at which commercial banks borrow and lend their excess reserves to each other overnight. The Federal Reserve uses this as its primary monetary policy tool to influence economic conditions.'
      },
      {
        id: 10,
        question: 'Money market funds differ from bank savings accounts primarily because:',
        options: [
          'Money market funds offer higher FDIC insurance coverage',
          'Money market fund shares are NOT FDIC-insured, though historically very safe',
          'Money market funds can only be held by institutional investors',
          'Money market funds cannot be withdrawn on demand'
        ],
        correct: 1,
        explanation: 'Money market funds are mutual funds, not bank deposits. They are not FDIC-insured. While they aim to maintain $1.00 net asset value (NAV), they can theoretically "break the buck" as seen in 2008.'
      }
    ]
  },
  'module-5': {
    title: 'Derivatives: Options, Futures & Swaps',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'A CALL option gives the buyer the right to:',
        options: [
          'Sell the underlying asset at the strike price',
          'Buy the underlying asset at the strike price',
          'Demand a fixed payment from the seller',
          'Set the price of the underlying asset'
        ],
        correct: 1,
        explanation: 'A call option gives the holder the RIGHT (not obligation) to BUY the underlying asset at the strike price before or at expiration. Buyers profit when the underlying price rises above the strike.'
      },
      {
        id: 2,
        question: 'A put option is "in the money" (ITM) when:',
        options: [
          'The underlying asset price is above the strike price',
          'The underlying asset price equals the strike price',
          'The underlying asset price is below the strike price',
          'The option has been held for more than 6 months'
        ],
        correct: 2,
        explanation: 'A put option is in the money when the underlying price < strike price — because you can put (sell) the asset at the higher strike price and buy it back in the market at the lower current price.'
      },
      {
        id: 3,
        question: 'What is the maximum loss for a call option BUYER?',
        options: [
          'Unlimited — no ceiling on losses',
          'The strike price of the option',
          'The premium paid for the option',
          '50% of the option\'s notional value'
        ],
        correct: 2,
        explanation: 'The maximum loss for an option buyer is limited to the premium paid. If the option expires worthless, the buyer loses 100% of the premium — but no more. This asymmetric risk profile is a key advantage of options.'
      },
      {
        id: 4,
        question: 'What distinguishes futures contracts from forward contracts?',
        options: [
          'Futures are only available for commodity assets',
          'Futures are exchange-traded, standardized, and marked to market daily; forwards are OTC and customized',
          'Forwards require daily margin payments while futures do not',
          'Futures always involve physical delivery while forwards are cash-settled'
        ],
        correct: 1,
        explanation: 'Futures are exchange-traded with standardized contract terms and require daily mark-to-market (gains/losses settled daily). Forwards are OTC bilateral agreements with customizable terms, settled at maturity.'
      },
      {
        id: 5,
        question: 'In an interest rate swap, what does the "fixed payer" do?',
        options: [
          'Receives fixed rate payments and pays floating rate payments',
          'Pays fixed rate payments and receives floating rate payments',
          'Sets the reference rate for the entire swap',
          'Acts as the clearinghouse for the swap transaction'
        ],
        correct: 1,
        explanation: 'The fixed payer pays a predetermined fixed rate and receives floating rate payments (e.g., SOFR + spread). They benefit if interest rates rise above the fixed rate they locked in.'
      },
      {
        id: 6,
        question: 'Delta (Δ) in options trading represents:',
        options: [
          'The daily time decay of the option\'s value',
          'The sensitivity of the option\'s price to a $1 change in the underlying asset',
          'The volatility implied by the option\'s market price',
          'The probability the option will be exercised'
        ],
        correct: 1,
        explanation: 'Delta measures how much an option\'s price changes for a $1 move in the underlying. A delta of 0.65 means the option price moves $0.65 for every $1 move in the underlying. Delta is also approximately the probability of expiring ITM.'
      },
      {
        id: 7,
        question: 'What is the PRIMARY purpose of using derivatives for hedging?',
        options: [
          'To maximize speculative gains from market movements',
          'To reduce or offset existing risk exposures',
          'To avoid paying taxes on investment income',
          'To leverage positions beyond available capital'
        ],
        correct: 1,
        explanation: 'Hedging uses derivatives to reduce or offset risk in an existing position. For example, an airline might use oil futures to lock in fuel costs, reducing uncertainty about future expenses.'
      },
      {
        id: 8,
        question: 'The notional value of a swap is:',
        options: [
          'The amount of money actually exchanged at inception',
          'The principal used to calculate payments, but not itself exchanged',
          'The market value of the swap at any point in time',
          'The profit or loss from the swap at maturity'
        ],
        correct: 1,
        explanation: 'Notional value is the reference principal used to calculate periodic payment amounts. In a $100M interest rate swap, the $100M is never exchanged — only the net interest payment differences are exchanged.'
      },
      {
        id: 9,
        question: 'Theta (Θ) in options is known as "time decay" because:',
        options: [
          'Options increase in value as they approach expiration',
          'The time value of an option decreases as expiration approaches, all else equal',
          'Theta measures how long the option has until expiration',
          'It represents the tax treatment of options held over time'
        ],
        correct: 1,
        explanation: 'Theta is typically negative for option buyers — every day, the option loses some time value. Options are "wasting assets." At expiration, time value = $0, and the option is worth only its intrinsic value (if any).'
      },
      {
        id: 10,
        question: 'What is a Credit Default Swap (CDS)?',
        options: [
          'A swap that exchanges fixed for floating credit card rates',
          'Insurance-like protection against a company or country defaulting on its debt',
          'A futures contract on a credit index',
          'A derivative used to swap currency credit risk between central banks'
        ],
        correct: 1,
        explanation: 'A CDS is a bilateral contract where the protection buyer pays periodic premiums to the seller. If a specified entity defaults, the seller pays the face value of the defaulted debt. CDSs played a central role in the 2008 financial crisis.'
      }
    ]
  },
  'module-6': {
    title: 'Portfolio Management & MPT',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'Harry Markowitz\'s key insight in Modern Portfolio Theory was:',
        options: [
          'Investors should always hold only the single best-performing stock',
          'Portfolio risk can be reduced through diversification by combining assets with low correlations',
          'Government bonds always outperform equities over the long term',
          'Market timing is the most effective way to generate superior returns'
        ],
        correct: 1,
        explanation: 'Markowitz showed that combining assets with low correlations reduces total portfolio risk without necessarily reducing expected return. The portfolio\'s risk depends not just on individual asset risks, but on their correlations.'
      },
      {
        id: 2,
        question: 'The CAPM formula for expected return is:',
        options: [
          'E(R) = Rf + α × (Rm - Rf)',
          'E(R) = Rf + β × (Rm - Rf)',
          'E(R) = (Rm - Rf) / β',
          'E(R) = Rf × β + Rm'
        ],
        correct: 1,
        explanation: 'CAPM: E(R) = Rf + β(Rm - Rf), where Rf is risk-free rate, β is systematic risk, and (Rm - Rf) is the equity risk premium. The formula says expected return increases linearly with beta.'
      },
      {
        id: 3,
        question: 'A stock with beta (β) = 1.5 would be expected to:',
        options: [
          'Move 1.5% when the market moves 1%',
          'Earn 1.5× the risk-free rate',
          'Lose 50% of its value when the market falls',
          'Outperform the market by 50% annually'
        ],
        correct: 0,
        explanation: 'Beta of 1.5 means the stock moves approximately 1.5% for every 1% market move. If the market rises 10%, the stock is expected to rise ~15%. If the market falls 10%, the stock falls ~15%.'
      },
      {
        id: 4,
        question: 'The Sharpe Ratio measures:',
        options: [
          'Absolute returns relative to total assets',
          'Risk-adjusted return: excess return per unit of total volatility',
          'Beta-adjusted return relative to the market',
          'The ratio of winning trades to losing trades'
        ],
        correct: 1,
        explanation: 'Sharpe Ratio = (Portfolio Return - Risk-Free Rate) / Portfolio Standard Deviation. A higher Sharpe means more return earned per unit of risk. It\'s the most widely used risk-adjusted performance measure.'
      },
      {
        id: 5,
        question: 'The "efficient frontier" in Modern Portfolio Theory represents:',
        options: [
          'The national boundary between capital market jurisdictions',
          'The set of portfolios offering maximum return for each level of risk',
          'The minimum risk portfolio regardless of return',
          'The optimal bond duration for a given interest rate environment'
        ],
        correct: 1,
        explanation: 'The efficient frontier is the set of optimal portfolios that offer the highest expected return for a defined level of risk. Portfolios below the frontier are sub-optimal — you could get more return or less risk.'
      },
      {
        id: 6,
        question: 'The "Value" factor in factor investing refers to:',
        options: [
          'Investing in companies with high book value regardless of earnings',
          'Buying stocks with low prices relative to fundamentals (low P/E, P/B, etc.)',
          'Identifying stocks with high momentum and strong price trends',
          'Focusing only on dividend-paying stocks'
        ],
        correct: 1,
        explanation: 'The value factor captures the tendency of "cheap" stocks (low P/E, P/B, P/CF ratios) to outperform "expensive" growth stocks over long time periods, as documented by Fama and French.'
      },
      {
        id: 7,
        question: 'What is "alpha" (α) in portfolio management?',
        options: [
          'The total return of a portfolio',
          'Return in excess of what CAPM predicts given the portfolio\'s beta',
          'The standard deviation of portfolio returns',
          'The first letter in a portfolio\'s performance ranking'
        ],
        correct: 1,
        explanation: 'Alpha is the excess return generated beyond what CAPM would predict based on the portfolio\'s systematic risk (beta). Positive alpha indicates the manager added value through skill; negative alpha means underperformance.'
      },
      {
        id: 8,
        question: 'Portfolio rebalancing means:',
        options: [
          'Switching entirely to a new asset allocation strategy',
          'Adding new money to the portfolio quarterly',
          'Periodically adjusting holdings back to target weights when they drift due to market moves',
          'Selling all positions and reinvesting in the same assets'
        ],
        correct: 2,
        explanation: 'Rebalancing restores a portfolio to its target allocation after market movements cause drift. For example, if equities rally significantly, you\'d trim equities and add to bonds to restore the target 60/40 split.'
      },
      {
        id: 9,
        question: 'The correlation coefficient ranges from:',
        options: [
          '0 to 100',
          '0 to 1',
          '-1 to +1',
          '-∞ to +∞'
        ],
        correct: 2,
        explanation: 'Correlation ranges from -1 (perfect negative correlation — assets move in opposite directions) to +1 (perfect positive correlation — assets move together). A correlation of 0 means no linear relationship. Diversification benefits are highest with low or negative correlations.'
      },
      {
        id: 10,
        question: 'The "Capital Market Line" (CML) differs from the "Efficient Frontier" because the CML:',
        options: [
          'Shows performance for bonds only',
          'Incorporates the risk-free asset, allowing investors to combine it with the market portfolio',
          'Represents only the top-10 performing portfolios',
          'Shows expected returns based on credit ratings'
        ],
        correct: 1,
        explanation: 'The CML adds the risk-free asset to the analysis. By combining the risk-free asset with the tangency portfolio (optimal risky portfolio), investors can achieve any point on the CML, dominating points on the efficient frontier.'
      }
    ]
  },
  'module-7': {
    title: 'Risk Management & Risk Metrics',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'Value at Risk (VaR) at 99% confidence, 1-day horizon of $5 million means:',
        options: [
          'The portfolio will definitely lose $5M tomorrow',
          'There is a 99% chance the portfolio will lose exactly $5M',
          'There is only a 1% chance the portfolio will lose MORE than $5M in a single day',
          'The portfolio has a 99% chance of making a profit'
        ],
        correct: 2,
        explanation: 'VaR at 99% 1-day means: with 99% confidence, losses will NOT exceed $5M on any given day. Equivalently, there\'s a 1% chance (approximately once every 100 trading days) of losing more than $5M.'
      },
      {
        id: 2,
        question: 'Which type of financial risk involves losses due to a counterparty failing to meet its contractual obligations?',
        options: [
          'Market risk',
          'Liquidity risk',
          'Credit risk',
          'Operational risk'
        ],
        correct: 2,
        explanation: 'Credit risk is the risk of loss due to a borrower or counterparty defaulting on their obligation. It\'s the primary risk for banks\' loan portfolios and also relevant in derivative trading when counterparties may fail to pay.'
      },
      {
        id: 3,
        question: 'The main limitation of standard VaR is:',
        options: [
          'It is too complex to calculate in practice',
          'It assumes positions are held for 10 years',
          'It fails to measure the magnitude of losses beyond the VaR threshold (tail risk)',
          'VaR cannot be applied to equity portfolios'
        ],
        correct: 2,
        explanation: 'VaR tells you the loss threshold but says nothing about HOW MUCH you lose if that threshold is breached. "Expected Shortfall" (ES or CVaR) addresses this by averaging losses in the tail beyond the VaR threshold.'
      },
      {
        id: 4,
        question: 'Stress testing in financial risk management involves:',
        options: [
          'Testing the psychological resilience of portfolio managers',
          'Applying extreme but plausible scenarios to assess portfolio vulnerability',
          'Stress-testing trading algorithms for maximum speed',
          'Testing systems for operational efficiency'
        ],
        correct: 1,
        explanation: 'Stress testing applies specific extreme scenarios (e.g., 2008 financial crisis, COVID crash) to a portfolio to quantify potential losses and ensure firms can survive tail events beyond normal VaR scenarios.'
      },
      {
        id: 5,
        question: 'Delta hedging an options position means:',
        options: [
          'Hedging all options positions with futures contracts',
          'Holding options until they expire worthless',
          'Continuously adjusting the position to maintain a delta of zero, neutralizing directional risk',
          'Hedging only when the underlying asset price changes by more than 5%'
        ],
        correct: 2,
        explanation: 'Delta hedging involves continuously buying or selling the underlying asset to offset the option\'s delta, creating a delta-neutral position. This eliminates directional price risk but leaves exposure to gamma, vega, and theta.'
      },
      {
        id: 6,
        question: 'Operational risk as defined by Basel II/III includes losses from:',
        options: [
          'Adverse market price movements',
          'Counterparty defaults in loan portfolios',
          'Failed internal processes, people, systems, or external events',
          'Currency mismatches in the balance sheet'
        ],
        correct: 2,
        explanation: 'Basel II defines operational risk as "risk of loss resulting from inadequate or failed internal processes, people, systems, or from external events." This includes fraud, trading errors, system failures, and natural disasters.'
      },
      {
        id: 7,
        question: 'What is "liquidity risk" in the context of financial markets?',
        options: [
          'The risk that a company runs out of cash to pay salaries',
          'The risk of being unable to sell an asset at or near its fair value in a timely manner',
          'The risk that central banks will increase money supply',
          'The risk of currency exchange rate fluctuations'
        ],
        correct: 1,
        explanation: 'Market liquidity risk is the risk that you cannot sell an asset quickly without accepting a large price discount. During crises, even normally liquid markets can become illiquid, forcing fire sales at depressed prices.'
      },
      {
        id: 8,
        question: 'Gamma (Γ) in options represents:',
        options: [
          'The option\'s daily time decay',
          'The sensitivity of delta to changes in the underlying price (rate of change of delta)',
          'The option\'s sensitivity to volatility changes',
          'The option\'s return relative to beta'
        ],
        correct: 1,
        explanation: 'Gamma is the rate at which an option\'s delta changes as the underlying price moves. High gamma (typical near expiry, at-the-money) means delta changes rapidly, requiring frequent rebalancing for delta hedgers.'
      },
      {
        id: 9,
        question: 'Expected Shortfall (ES), also called CVaR, improves on VaR by:',
        options: [
          'Calculating VaR at a higher confidence level',
          'Averaging the losses beyond the VaR threshold, measuring the severity of tail losses',
          'Using historical data instead of statistical models',
          'Incorporating credit risk into market risk calculations'
        ],
        correct: 1,
        explanation: 'Expected Shortfall (ES) answers: "If losses exceed VaR, what is the expected loss?" It averages all losses in the tail beyond VaR. ES is more coherent than VaR and better captures tail risk — now preferred by regulators under FRTB.'
      },
      {
        id: 10,
        question: 'The "Volcker Rule" under Dodd-Frank specifically addresses:',
        options: [
          'Rules for calculating VaR at large financial institutions',
          'Prohibition on commercial banks engaging in proprietary trading',
          'Limitations on executive compensation at TARP recipients',
          'Requirements for stress testing of systemic financial institutions'
        ],
        correct: 1,
        explanation: 'The Volcker Rule (Section 619 of Dodd-Frank) prohibits banking entities from proprietary trading — trading for their own account to profit from short-term market movements. It was designed to prevent banks from taking excessive risks with depositor funds.'
      }
    ]
  },
  'module-8': {
    title: 'Market Regulations & Compliance',
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: 'Which government agency is the primary regulator of U.S. securities markets and enforces securities laws?',
        options: [
          'Federal Reserve System',
          'Securities and Exchange Commission (SEC)',
          'Commodity Futures Trading Commission (CFTC)',
          'Office of the Comptroller of the Currency (OCC)'
        ],
        correct: 1,
        explanation: 'The SEC is the primary federal securities regulator. It enforces securities laws, requires disclosure, oversees exchanges and broker-dealers, and prosecutes securities fraud. The CFTC regulates futures and options markets.'
      },
      {
        id: 2,
        question: 'Insider trading is illegal primarily because:',
        options: [
          'It generates too large a profit for the trader',
          'It violates the principle of fair markets by giving unfair advantage using non-public information',
          'It is always conducted by corporate executives',
          'It causes immediate market crashes'
        ],
        correct: 1,
        explanation: 'Insider trading is illegal because it violates market fairness — traders with access to material non-public information (MNPI) have an unfair advantage over public investors who trade at a disadvantage based on less information.'
      },
      {
        id: 3,
        question: 'What was the PRIMARY purpose of the Dodd-Frank Wall Street Reform Act (2010)?',
        options: [
          'To reduce corporate tax rates to stimulate economic growth',
          'To reform financial regulation to prevent another financial crisis like 2008',
          'To establish new accounting standards for derivatives',
          'To create the Federal Reserve System'
        ],
        correct: 1,
        explanation: 'Dodd-Frank was enacted in response to the 2008 financial crisis. Its major provisions include: the Volcker Rule, mandatory central clearing of derivatives, creation of FSOC to monitor systemic risk, and stress testing for large banks.'
      },
      {
        id: 4,
        question: 'Basel III capital requirements require banks to hold at minimum how much Common Equity Tier 1 (CET1) capital relative to risk-weighted assets?',
        options: [
          '2.0%',
          '4.5% (plus 2.5% capital conservation buffer = 7% effectively)',
          '10.0%',
          '15.0%'
        ],
        correct: 1,
        explanation: 'Basel III sets minimum CET1 at 4.5% of risk-weighted assets, plus a 2.5% capital conservation buffer, effectively requiring 7% minimum CET1. Globally systemically important banks (G-SIBs) face additional surcharges.'
      },
      {
        id: 5,
        question: 'Regulation FD (Fair Disclosure) prohibits:',
        options: [
          'Companies from filing financial reports electronically',
          'Companies from selectively disclosing material information to certain investors before making it public',
          'Portfolio managers from managing funds for foreign clients',
          'Short selling of financial stocks during market downturns'
        ],
        correct: 1,
        explanation: 'Reg FD prevents companies from giving "tipped" information to analysts or major investors before public release. When material information is shared privately, it must be simultaneously (or promptly) disclosed to the public.'
      },
      {
        id: 6,
        question: 'A "Chinese wall" in investment banking refers to:',
        options: [
          'Regulations governing cross-border Chinese capital flows',
          'Information barriers separating departments to prevent insider information flows',
          'A firewall protecting trading systems from cyberattacks',
          'A regulatory requirement to report trades to Chinese regulators'
        ],
        correct: 1,
        explanation: 'Chinese walls (information barriers) are internal policies separating departments with access to sensitive, non-public information (e.g., M&A advisory) from trading desks that might exploit that information.'
      },
      {
        id: 7,
        question: 'The EU\'s MiFID II regulation primarily addresses:',
        options: [
          'Cryptocurrency regulation and digital asset trading',
          'Transparency, investor protection, and market structure in European financial markets',
          'Banking capital requirements in the Eurozone',
          'Environmental standards for financial institution operations'
        ],
        correct: 1,
        explanation: 'MiFID II (Markets in Financial Instruments Directive II) enhanced transparency in EU financial markets, required unbundling of research from execution fees, imposed stricter reporting, and improved investor protection.'
      },
      {
        id: 8,
        question: '"Greenwashing" in the context of ESG finance refers to:',
        options: [
          'Using environmentally-friendly office practices',
          'Misleadingly marketing financial products as environmentally sustainable when they are not',
          'Laundering money through green energy companies',
          'Investing in companies that produce environmentally-friendly paint'
        ],
        correct: 1,
        explanation: 'Greenwashing is misrepresenting or exaggerating the sustainability credentials of financial products or investments. Regulators globally are cracking down, with the EU\'s SFDR and SEC\'s naming rules designed to prevent misleading ESG labeling.'
      },
      {
        id: 9,
        question: 'The Financial Stability Oversight Council (FSOC) was created by Dodd-Frank to:',
        options: [
          'Replace the Federal Reserve as the primary monetary policy authority',
          'Monitor systemic risk and designate "too big to fail" institutions for enhanced oversight',
          'Audit all US financial institutions annually',
          'Set interest rates for consumer loans'
        ],
        correct: 1,
        explanation: 'FSOC monitors systemic risks to US financial stability. It can designate non-bank financial companies as "systemically important financial institutions" (SIFIs) subject to enhanced oversight by the Fed.'
      },
      {
        id: 10,
        question: 'The TCFD (Task Force on Climate-related Financial Disclosures) recommends that companies disclose:',
        options: [
          'Their corporate carbon offset purchase history',
          'Climate-related risks and opportunities across governance, strategy, risk management, and metrics',
          'Their employee diversity statistics in annual reports',
          'The geographic breakdown of all carbon emissions globally'
        ],
        correct: 1,
        explanation: 'TCFD, created in 2015, recommends climate-related financial disclosures across four pillars: governance (board oversight), strategy (climate scenarios), risk management (integration processes), and metrics/targets. Many jurisdictions are making TCFD reporting mandatory.'
      }
    ]
  }
}

export function getAssessmentByModuleId(moduleId) {
  return ASSESSMENTS[moduleId] || null
}
