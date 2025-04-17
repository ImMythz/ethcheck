import { WalletChecker } from "@/components/wallet-checker"
import { GoogleAd } from "@/components/google-ads"
import { Logo } from "@/components/logo"
import { EthPriceChart } from "@/components/eth-price-chart"
import { EthMarketData } from "@/components/eth-market-data"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex justify-center mb-4">
            <Logo size={120} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
            EthCheck
          </h1>
          <p className="text-slate-300">Check any Ethereum wallet balance and transaction history</p>
        </header>

        {/* Top ad banner */}
        <div className="mb-6 md:mb-8">
          <GoogleAd slot="5688063065" format="horizontal" className="mx-auto max-w-4xl" />
        </div>

        {/* Wallet Checker - Now above ETH data */}
        <div className="mb-8">
          <WalletChecker />
        </div>

        {/* ETH Price Chart */}
        <div className="mb-6">
          <EthPriceChart />
        </div>

        {/* ETH Market Data */}
        <div className="mb-8">
          <EthMarketData />
        </div>

        {/* Bottom ad banner */}
        <div className="mt-8 md:mt-12">
          <GoogleAd slot="5688063065" format="horizontal" className="mx-auto max-w-4xl" />
        </div>
      </div>
    </main>
  )
}
