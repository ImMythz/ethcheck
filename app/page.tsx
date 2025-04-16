import { WalletChecker } from "@/components/wallet-checker"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
            EthCheck
          </h1>
          <p className="text-slate-300">Check any Ethereum wallet balance and transaction history</p>
        </header>

        <WalletChecker />
      </div>
    </main>
  )
}
