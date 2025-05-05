import { WalletChecker } from "@/components/wallet-checker"
import { GoogleAd } from "@/components/google-ads"
import { Logo } from "@/components/logo"
import { EthPriceChart } from "@/components/eth-price-chart"
import { EthMarketData } from "@/components/eth-market-data"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  // Featured articles for the home page
  const featuredArticles = [
    {
      title: "Understanding Ethereum Gas Fees",
      description: "Learn how gas fees work and strategies to minimize transaction costs on the Ethereum network.",
      href: "/learn/ethereum-gas-fees",
      date: "May 15, 2023",
    },
    {
      title: "The Impact of The Merge on Ethereum",
      description:
        "Explore how Ethereum's transition to proof-of-stake has changed the network's efficiency and environmental impact.",
      href: "/learn/ethereum-merge-impact",
      date: "April 22, 2023",
    },
    {
      title: "Top 5 Ethereum Wallets Compared",
      description: "A comprehensive comparison of the most popular Ethereum wallets for different user needs.",
      href: "/learn/ethereum-wallets-comparison",
      date: "March 10, 2023",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex justify-center mb-4">
            <Logo size={120} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
            EthCheck
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your comprehensive Ethereum blockchain explorer. Check wallet balances, track transaction history, monitor
            ETH prices, and access educational resources about blockchain technology.
          </p>
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
        <div className="mb-12">
          <EthMarketData />
        </div>

        {/* Featured Articles Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">{article.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={article.href}
                    className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center"
                  >
                    Read more <ArrowRight size={14} className="ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Resources Promo */}
        <div className="mb-12 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-6 border border-emerald-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">New to Ethereum?</h2>
              <p className="text-slate-300 mb-4 max-w-2xl">
                Explore our comprehensive learning resources to understand blockchain technology, Ethereum, smart
                contracts, DeFi, NFTs, and more. From beginner guides to advanced concepts, we've got you covered.
              </p>
              <Link
                href="/learn"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md inline-flex items-center transition-colors"
              >
                Start Learning <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="w-full md:w-1/3 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
              <h3 className="font-medium mb-2">Popular Topics:</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/learn/ethereum-basics"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" /> Ethereum Basics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/blockchain-guide"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" /> Blockchain Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn/defi-explained"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" /> DeFi Explained
                  </Link>
                </li>
                <li>
                  <Link href="/learn/nft-guide" className="text-emerald-400 hover:text-emerald-300 flex items-center">
                    <ArrowRight size={14} className="mr-2" /> NFT Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <NewsletterSignup />
        </div>

        {/* Bottom ad banner */}
        <div className="mt-8 md:mt-12">
          <GoogleAd slot="5688063065" format="horizontal" className="mx-auto max-w-4xl" />
        </div>
      </div>
    </div>
  )
}
