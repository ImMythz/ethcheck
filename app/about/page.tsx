import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About EthCheck | Ethereum Wallet Explorer",
  description:
    "Learn about EthCheck - A comprehensive Ethereum blockchain explorer providing real-time data, wallet tracking, and market analytics.",
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About EthCheck</h1>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-slate-300 mb-4">
              At EthCheck, our mission is to make blockchain data accessible, understandable, and useful for everyone.
              We believe in the transformative power of blockchain technology and aim to provide tools that help users
              navigate the Ethereum ecosystem with confidence.
            </p>
            <p className="text-slate-300">
              Whether you're a seasoned crypto investor, a developer building on Ethereum, or someone just getting
              started with blockchain technology, EthCheck provides the insights and tools you need to make informed
              decisions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Wallet Tracking</h3>
                <p className="text-slate-300">
                  Monitor any Ethereum wallet's balance and transaction history with our intuitive interface. Track
                  incoming and outgoing transactions, and visualize balance changes over time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Market Analytics</h3>
                <p className="text-slate-300">
                  Stay informed with real-time Ethereum price data, historical charts, and key market metrics. Make
                  data-driven decisions with comprehensive market insights.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Educational Resources</h3>
                <p className="text-slate-300">
                  Access our growing library of guides, tutorials, and explanations to deepen your understanding of
                  Ethereum, blockchain technology, and the broader crypto ecosystem.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Developer Tools</h3>
                <p className="text-slate-300">
                  Utilize our specialized tools for developers, including gas trackers, transaction decoders, and more
                  to streamline your Ethereum development workflow.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-slate-300 mb-4">
              EthCheck was founded by a team of blockchain enthusiasts, developers, and financial analysts who
              recognized the need for better tools to navigate the increasingly complex Ethereum ecosystem.
            </p>
            <p className="text-slate-300">
              Our diverse team combines expertise in blockchain technology, data visualization, user experience design,
              and financial analysis to create a platform that's both powerful and accessible.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-slate-300 mb-4">
              We're always looking to improve our platform and welcome feedback from our users. If you have questions,
              suggestions, or just want to say hello, please don't hesitate to reach out.
            </p>
            <p className="text-slate-300 mb-2">Email: contact@ethcheck.io</p>
            <p className="text-slate-300">
              Follow us on Twitter:{" "}
              <a
                href="https://twitter.com/ethcheck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300"
              >
                @ethcheck
              </a>
            </p>

            <div className="mt-6">
              <Link href="/contact" className="text-emerald-400 hover:text-emerald-300">
                Contact Us →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
