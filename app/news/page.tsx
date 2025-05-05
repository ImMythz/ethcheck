import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata = {
  title: "Ethereum News & Blog | EthCheck",
  description: "Stay updated with the latest news, insights, and developments in the Ethereum ecosystem.",
}

export default function News() {
  // Blog posts data
  const blogPosts = [
    {
      title: "Understanding Ethereum Gas Fees",
      description:
        "Gas fees are a fundamental aspect of the Ethereum network. Learn how they work, why they fluctuate, and strategies to minimize your transaction costs.",
      date: "May 15, 2023",
      category: "Education",
      slug: "understanding-ethereum-gas-fees",
      readTime: "8 min read",
    },
    {
      title: "The Impact of The Merge on Ethereum",
      description:
        "Ethereum's transition from proof-of-work to proof-of-stake has been one of the most significant upgrades in blockchain history. We explore the environmental and economic impacts of this change.",
      date: "April 22, 2023",
      category: "Analysis",
      slug: "ethereum-merge-impact",
      readTime: "12 min read",
    },
    {
      title: "Top 5 Ethereum Wallets Compared",
      description:
        "With so many Ethereum wallet options available, choosing the right one can be challenging. We compare the top 5 wallets based on security, features, and user experience.",
      date: "March 10, 2023",
      category: "Reviews",
      slug: "ethereum-wallets-comparison",
      readTime: "10 min read",
    },
    {
      title: "Ethereum Layer 2 Solutions Explained",
      description:
        "As Ethereum scales, Layer 2 solutions have become increasingly important. Discover how Optimistic Rollups, ZK-Rollups, and other scaling solutions work.",
      date: "February 28, 2023",
      category: "Technology",
      slug: "ethereum-layer-2-solutions",
      readTime: "15 min read",
    },
    {
      title: "DeFi Yield Farming Strategies for 2023",
      description:
        "Yield farming remains one of the most popular ways to earn passive income in DeFi. We break down effective strategies for the current market conditions.",
      date: "January 15, 2023",
      category: "DeFi",
      slug: "defi-yield-farming-strategies",
      readTime: "14 min read",
    },
    {
      title: "NFT Market Trends: What's Next After the Boom",
      description:
        "The NFT market has evolved significantly since the 2021 boom. We analyze current trends and predict where the market is heading in the coming years.",
      date: "December 5, 2022",
      category: "NFTs",
      slug: "nft-market-trends",
      readTime: "9 min read",
    },
    {
      title: "Ethereum's Roadmap: What's Coming After The Merge",
      description:
        "The Merge was just one step in Ethereum's ambitious roadmap. Learn about upcoming upgrades like sharding, the Surge, the Verge, and more.",
      date: "November 18, 2022",
      category: "Development",
      slug: "ethereum-roadmap-after-merge",
      readTime: "11 min read",
    },
    {
      title: "How to Secure Your Ethereum Assets",
      description:
        "Security is paramount in the crypto space. We provide a comprehensive guide to protecting your Ethereum assets from common threats.",
      date: "October 7, 2022",
      category: "Security",
      slug: "secure-ethereum-assets",
      readTime: "13 min read",
    },
  ]

  // Featured post is the first one
  const featuredPost = blogPosts[0]
  // Regular posts are the rest
  const regularPosts = blogPosts.slice(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ethereum News & Insights</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay updated with the latest developments, tutorials, and analysis from the Ethereum ecosystem.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-slate-800 to-slate-800/90 border-emerald-700 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-400 text-xs ml-3 flex items-center">
                    <Calendar size={12} className="mr-1" /> {featuredPost.date}
                  </span>
                  <span className="text-slate-400 text-xs ml-3">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-slate-300 mb-6">{featuredPost.description}</p>
                <Link
                  href={`/news/${featuredPost.slug}`}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md inline-flex items-center transition-colors"
                >
                  Read Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="md:w-1/3 bg-slate-800 flex items-center justify-center p-6">
                <div className="text-center">
                  <span className="text-emerald-400 block mb-2">Featured Article</span>
                  <span className="text-slate-300 text-sm">Editor's Pick</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">{post.category}</span>
                  <span className="text-slate-400 text-xs">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar size={12} className="mr-1" /> {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm line-clamp-3">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/news/${post.slug}`} className="text-emerald-400 hover:text-emerald-300 flex items-center">
                  Read more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </div>
  )
}
