import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Learn About Ethereum and Blockchain | EthCheck",
  description: "Educational resources to help you understand Ethereum, blockchain technology, DeFi, NFTs, and more.",
}

export default function Learn() {
  const resources = [
    {
      title: "Ethereum Basics",
      description: "Learn the fundamentals of Ethereum, including its history, how it works, and key concepts.",
      href: "/learn/ethereum-basics",
      level: "Beginner",
      readTime: "10 min",
    },
    {
      title: "Blockchain Guide",
      description: "Understand the technology behind Ethereum and other cryptocurrencies.",
      href: "/learn/blockchain-guide",
      level: "Beginner",
      readTime: "12 min",
    },
    {
      title: "DeFi Explained",
      description: "Explore the world of decentralized finance and its applications.",
      href: "/learn/defi-explained",
      level: "Intermediate",
      readTime: "15 min",
    },
    {
      title: "NFT Guide",
      description: "Discover non-fungible tokens and their impact on digital ownership.",
      href: "/learn/nft-guide",
      level: "Beginner",
      readTime: "8 min",
    },
    {
      title: "Smart Contracts Deep Dive",
      description: "An in-depth look at how smart contracts work and their applications.",
      href: "/learn/smart-contracts",
      level: "Advanced",
      readTime: "20 min",
    },
    {
      title: "Crypto Glossary",
      description: "A comprehensive dictionary of blockchain and cryptocurrency terms.",
      href: "/learn/crypto-glossary",
      level: "All Levels",
      readTime: "Reference",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Expand your knowledge of Ethereum, blockchain technology, and the crypto ecosystem with our educational
            resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-colors"
            >
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 text-slate-400 mt-1">
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">{resource.level}</span>
                    <span className="text-xs">{resource.readTime}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={resource.href} className="text-emerald-400 hover:text-emerald-300 flex items-center">
                  Read more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-slate-300 mb-6">
            Check out these additional resources to deepen your understanding of blockchain technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://ethereum.org/learn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Ethereum.org
            </a>
            <a
              href="https://www.coindesk.com/learn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              CoinDesk Learn
            </a>
            <a
              href="https://academy.binance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Binance Academy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
