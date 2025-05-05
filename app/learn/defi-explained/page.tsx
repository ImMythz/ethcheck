import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "DeFi Explained | EthCheck",
  description: "Explore the world of decentralized finance and its applications in the Ethereum ecosystem.",
}

export default function DefiExplained() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">DeFi Explained</h1>
        <p className="text-slate-400 text-center mb-8">Understanding Decentralized Finance and its applications</p>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">What is DeFi?</h2>
            <p className="text-slate-300 mb-4">
              Decentralized Finance, or DeFi, refers to an ecosystem of financial applications built on blockchain
              networks. DeFi aims to create an open, permissionless, and transparent financial system that operates
              without central authorities like banks or financial institutions.
            </p>
            <p className="text-slate-300 mb-4">
              Unlike traditional finance, which relies on intermediaries to manage and facilitate transactions, DeFi
              uses smart contracts—self-executing contracts with the terms directly written into code—to enable
              peer-to-peer financial services.
            </p>
            <p className="text-slate-300">
              While DeFi exists on multiple blockchains, Ethereum has emerged as the primary platform for DeFi
              applications due to its robust smart contract capabilities and large developer community.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Core Components of DeFi</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Stablecoins</h3>
                <p className="text-slate-300">
                  Stablecoins are cryptocurrencies designed to maintain a stable value by pegging to an external asset,
                  typically the US dollar. They serve as a bridge between traditional finance and DeFi, providing a
                  stable medium of exchange and store of value within the volatile crypto ecosystem.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> USDC, DAI, USDT, LUSD
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Decentralized Exchanges (DEXs)</h3>
                <p className="text-slate-300">
                  DEXs allow users to trade cryptocurrencies directly from their wallets without intermediaries. They
                  use automated market makers (AMMs) or order books to facilitate trades, and liquidity is typically
                  provided by users who earn fees in return.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Uniswap, Curve, dYdX, Balancer
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Lending and Borrowing Protocols</h3>
                <p className="text-slate-300">
                  These platforms enable users to lend their crypto assets to earn interest or borrow assets by
                  providing collateral. Smart contracts automatically manage the loans, interest rates, and liquidations
                  without requiring trust between parties.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Aave, Compound, MakerDAO
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Yield Aggregators</h3>
                <p className="text-slate-300">
                  Yield aggregators automate the process of finding and switching between the highest-yielding DeFi
                  strategies. They help users maximize returns on their crypto assets by automatically moving funds
                  between different protocols.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Yearn Finance, Convex Finance, Beefy Finance
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Derivatives and Synthetic Assets</h3>
                <p className="text-slate-300">
                  These protocols allow users to create and trade synthetic versions of real-world assets (like stocks
                  or commodities) or complex financial instruments like options and futures.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Synthetix, dYdX, Opyn
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Insurance Protocols</h3>
                <p className="text-slate-300">
                  DeFi insurance protocols provide coverage against smart contract failures, hacks, or other risks
                  associated with using DeFi applications.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Nexus Mutual, InsurAce, Unslashed Finance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How DeFi Works</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Smart Contracts as the Foundation</h3>
                <p className="text-slate-300">
                  At the core of DeFi are smart contracts—self-executing code that automatically enforces and executes
                  the terms of an agreement when predetermined conditions are met. These contracts eliminate the need
                  for intermediaries and create trustless systems where users don't need to rely on a central authority.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Composability: The "Money Legos" Concept</h3>
                <p className="text-slate-300">
                  One of DeFi's most powerful features is composability—the ability for different protocols to interact
                  and build upon each other. This has led to the concept of "money legos," where developers can combine
                  various DeFi components to create increasingly complex and innovative financial products.
                </p>
                <p className="text-slate-300 mt-2">For example, a user might:</p>
                <ol className="list-decimal list-inside text-slate-300 mt-1 space-y-1">
                  <li>Deposit ETH as collateral in Maker to generate DAI stablecoin</li>
                  <li>Use that DAI to provide liquidity on Curve and earn trading fees</li>
                  <li>Stake the resulting LP tokens in Convex to earn additional yield</li>
                  <li>Use the staked position as collateral for a loan on another platform</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Governance and DAOs</h3>
                <p className="text-slate-300">
                  Many DeFi protocols are governed by Decentralized Autonomous Organizations (DAOs), where token holders
                  vote on protocol changes, parameter adjustments, and treasury allocations. This governance model aims
                  to distribute decision-making power among users rather than concentrating it in a central team.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">
                  Liquidity Pools and Automated Market Makers
                </h3>
                <p className="text-slate-300">
                  Instead of traditional order books, many DeFi exchanges use liquidity pools and automated market
                  makers (AMMs). Users provide liquidity to these pools and earn a portion of the trading fees. The AMM
                  algorithm automatically adjusts prices based on the ratio of assets in the pool, enabling trades
                  without requiring a counterparty.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Key DeFi Use Cases</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Earning Passive Income</h3>
                <p className="text-slate-300">DeFi offers various ways to earn passive income on crypto assets:</p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>Lending assets on platforms like Aave or Compound</li>
                  <li>Providing liquidity to DEXs and earning trading fees</li>
                  <li>Staking tokens in proof-of-stake networks or governance systems</li>
                  <li>Yield farming across multiple protocols</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">
                  Accessing Financial Services Without Intermediaries
                </h3>
                <p className="text-slate-300">
                  DeFi provides financial services to anyone with an internet connection and a crypto wallet, regardless
                  of location, credit history, or social status. This is particularly valuable for the unbanked or
                  underbanked populations globally.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Trading and Speculation</h3>
                <p className="text-slate-300">
                  DeFi enables permissionless trading of a wide range of assets, from cryptocurrencies to synthetic
                  versions of traditional assets. Users can also access leverage, options, and other advanced trading
                  strategies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Borrowing and Lending</h3>
                <p className="text-slate-300">
                  Users can borrow assets by providing collateral, often for purposes like:
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>Leveraging existing positions</li>
                  <li>Accessing liquidity without selling assets (and potentially triggering tax events)</li>
                  <li>Short-selling assets</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Insurance and Risk Management</h3>
                <p className="text-slate-300">
                  DeFi insurance protocols allow users to protect their assets against smart contract failures, hacks,
                  or other risks specific to the crypto ecosystem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Risks and Challenges in DeFi</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Smart Contract Risks</h3>
                <p className="text-slate-300">
                  Smart contracts may contain bugs or vulnerabilities that can be exploited, potentially leading to loss
                  of funds. Even audited contracts can have undiscovered issues.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Impermanent Loss</h3>
                <p className="text-slate-300">
                  Liquidity providers on AMMs can experience "impermanent loss" when the price ratio of their deposited
                  assets changes compared to simply holding those assets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Oracle Failures</h3>
                <p className="text-slate-300">
                  Many DeFi protocols rely on oracles to provide external data (like price feeds). If these oracles
                  provide incorrect or manipulated data, it can lead to system failures or exploits.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Regulatory Uncertainty</h3>
                <p className="text-slate-300">
                  The regulatory landscape for DeFi is still evolving, with potential implications for protocol
                  development, user access, and compliance requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Scalability and Gas Fees</h3>
                <p className="text-slate-300">
                  High transaction fees during periods of network congestion can make smaller transactions economically
                  unfeasible, limiting accessibility.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Centralization Risks</h3>
                <p className="text-slate-300">
                  Despite the "decentralized" label, some DeFi protocols have centralized elements, such as admin keys,
                  governance token concentration, or reliance on centralized infrastructure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started with DeFi</h2>

            <p className="text-slate-300 mb-4">
              If you're interested in exploring DeFi, here are some steps to get started:
            </p>

            <ol className="list-decimal list-inside text-slate-300 space-y-3">
              <li>
                <span className="font-medium">Set up a non-custodial wallet:</span> MetaMask, Coinbase Wallet, or Trust
                Wallet are popular options that allow you to interact with DeFi applications.
              </li>
              <li>
                <span className="font-medium">Acquire some ETH and stablecoins:</span> You'll need ETH for gas fees and
                potentially stablecoins like USDC or DAI for many DeFi activities.
              </li>
              <li>
                <span className="font-medium">Start with simple applications:</span> Begin with straightforward
                platforms like lending on Aave or Compound, or providing liquidity on Uniswap.
              </li>
              <li>
                <span className="font-medium">Educate yourself:</span> Understand the risks and mechanics of each
                protocol before committing significant funds.
              </li>
              <li>
                <span className="font-medium">Consider Layer 2 solutions:</span> Explore Ethereum Layer 2 networks like
                Arbitrum or Optimism for lower transaction fees.
              </li>
              <li>
                <span className="font-medium">Start small:</span> Begin with small amounts until you're comfortable with
                how everything works.
              </li>
            </ol>

            <div className="mt-6 bg-slate-900/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Safety Tips</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Never share your private keys or seed phrase</li>
                <li>Research protocols thoroughly before using them</li>
                <li>Check if smart contracts have been audited</li>
                <li>Be wary of extremely high yields that seem too good to be true</li>
                <li>Regularly review and revoke token approvals using tools like Etherscan or Revoke.cash</li>
                <li>Consider using a hardware wallet for additional security</li>
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/learn" className="text-emerald-400 hover:text-emerald-300">
                ← Back to Learning Resources
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
