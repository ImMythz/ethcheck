import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletChecker } from "@/components/wallet-checker"
import { ArrowRight, Wallet, Coins, FileCode, FuelIcon as GasPump, ArrowLeftRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Ethereum Tools | EthCheck",
  description: "Useful tools for Ethereum users, developers, and enthusiasts.",
}

export default function Tools() {
  // List of additional tools
  const additionalTools = [
    {
      title: "Gas Tracker",
      description: "Monitor real-time Ethereum gas prices and get alerts when gas fees are low.",
      icon: <GasPump className="h-8 w-8 text-emerald-400" />,
      href: "/tools/gas-tracker",
      status: "Coming Soon",
    },
    {
      title: "ETH Converter",
      description: "Convert between ETH, Wei, Gwei, and USD with real-time price data.",
      icon: <ArrowLeftRight className="h-8 w-8 text-emerald-400" />,
      href: "/tools/eth-converter",
      status: "", // Removed Coming Soon
    },
    {
      title: "Token Explorer",
      description: "Explore ERC-20 tokens on the Ethereum blockchain",
      icon: <Coins className="h-8 w-8 text-emerald-400" />,
      href: "/tools/token-explorer",
      status: "", // Removed Coming Soon
    },
    {
      title: "Transaction Decoder",
      description: "Decode Ethereum transaction data",
      icon: <FileCode className="h-8 w-8 text-emerald-400" />,
      href: "/tools/transaction-decoder",
      status: "", // Removed Coming Soon
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ethereum Tools</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Powerful tools to help you navigate the Ethereum blockchain, monitor wallets, and analyze transactions.
          </p>
        </div>

        {/* Main Tool: Wallet Checker */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-slate-800 to-slate-800/90 border-emerald-700 p-6">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-center mb-4">
                <Wallet className="h-12 w-12 text-emerald-400" />
              </div>
              <CardTitle className="text-2xl text-center">Ethereum Wallet Checker</CardTitle>
              <CardDescription className="text-center text-slate-300">
                Check any Ethereum wallet balance and transaction history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WalletChecker />
            </CardContent>
          </Card>
        </div>

        {/* Additional Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">More Ethereum Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalTools.map((tool, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-start">
                    <div className="mr-4">{tool.icon}</div>
                    <div>
                      <CardTitle className="text-lg flex items-center">
                        {tool.title}
                        {tool.status && (
                          <span className="ml-2 text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">
                            {tool.status}
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">{tool.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter>
                  {tool.status === "Coming Soon" ? (
                    <span className="text-slate-400 flex items-center cursor-not-allowed">
                      Coming Soon <ArrowRight size={16} className="ml-1" />
                    </span>
                  ) : (
                    <Link href={tool.href} className="text-emerald-400 hover:text-emerald-300 flex items-center">
                      Try it <ArrowRight size={16} className="ml-1" />
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Developer Resources */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold mb-4">Developer Resources</h2>
          <p className="text-slate-300 mb-6">
            Building on Ethereum? Check out these resources to help with your development workflow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://docs.ethers.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg flex items-center transition-colors"
            >
              <div>
                <h3 className="font-medium">Ethers.js Documentation</h3>
                <p className="text-sm text-slate-400">Complete library for Ethereum interactions</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-slate-400" />
            </a>
            <a
              href="https://web3js.readthedocs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg flex items-center transition-colors"
            >
              <div>
                <h3 className="font-medium">Web3.js Documentation</h3>
                <p className="text-sm text-slate-400">JavaScript library for Ethereum</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-slate-400" />
            </a>
            <a
              href="https://hardhat.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg flex items-center transition-colors"
            >
              <div>
                <h3 className="font-medium">Hardhat</h3>
                <p className="text-sm text-slate-400">Ethereum development environment</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-slate-400" />
            </a>
            <a
              href="https://docs.openzeppelin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg flex items-center transition-colors"
            >
              <div>
                <h3 className="font-medium">OpenZeppelin</h3>
                <p className="text-sm text-slate-400">Secure smart contract libraries</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
