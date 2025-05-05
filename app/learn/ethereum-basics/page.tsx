import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Ethereum Basics | EthCheck",
  description: "Learn the fundamentals of Ethereum, including its history, how it works, and key concepts.",
}

export default function EthereumBasics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Ethereum Basics</h1>
        <p className="text-slate-400 text-center mb-8">A comprehensive guide to understanding Ethereum</p>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">What is Ethereum?</h2>
            <p className="text-slate-300 mb-4">
              Ethereum is a decentralized, open-source blockchain platform that enables the creation of smart contracts
              and decentralized applications (dApps). Unlike Bitcoin, which was designed primarily as a digital
              currency, Ethereum was built to be a more general platform for programmable blockchain applications.
            </p>
            <p className="text-slate-300 mb-4">
              At its core, Ethereum is a global, decentralized computer that executes programs called smart contracts.
              These contracts automatically execute when predetermined conditions are met, eliminating the need for
              intermediaries in many types of transactions.
            </p>
            <p className="text-slate-300">
              Ethereum has its own cryptocurrency called Ether (ETH), which serves as both a digital currency and fuel
              for operating the Ethereum network. When users want to execute operations on the network, they must pay a
              fee in ETH, known as "gas."
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">History of Ethereum</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">2013-2014: Conception and White Paper</h3>
                <p className="text-slate-300">
                  Ethereum was first described by Vitalik Buterin in late 2013. Buterin, a programmer and co-founder of
                  Bitcoin Magazine, proposed Ethereum as a platform that would allow developers to build decentralized
                  applications beyond what was possible with Bitcoin. The Ethereum white paper was published in 2014,
                  outlining the technical details and vision for the project.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">2014-2015: Development and Crowdfunding</h3>
                <p className="text-slate-300">
                  Development of Ethereum began in early 2014, led by Buterin along with co-founders including Gavin
                  Wood, Charles Hoskinson, and Joseph Lubin. In July and August 2014, Ethereum conducted a crowdsale,
                  raising over $18 million by selling ETH tokens.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">2015: Launch of Frontier</h3>
                <p className="text-slate-300">
                  The first public version of Ethereum, called Frontier, was launched on July 30, 2015. This bare-bones
                  version allowed developers to mine ETH and begin building and testing applications on the network.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">
                  2016: The DAO Hack and Ethereum Classic Split
                </h3>
                <p className="text-slate-300">
                  In 2016, a decentralized autonomous organization (DAO) built on Ethereum raised $150 million in a
                  token sale. However, a vulnerability in the DAO's code was exploited, resulting in the theft of $50
                  million worth of ETH. This led to a contentious hard fork of Ethereum to recover the stolen funds. The
                  main chain became what we now know as Ethereum, while those who opposed the fork continued on the
                  original chain, now called Ethereum Classic (ETC).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">2017-2019: Growth and Development</h3>
                <p className="text-slate-300">
                  Ethereum saw significant growth during this period, with the 2017 ICO boom bringing widespread
                  attention to the platform. Many projects launched tokens on Ethereum using the ERC-20 standard. The
                  network underwent several planned upgrades to improve functionality and security.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">2020-2022: Ethereum 2.0 and The Merge</h3>
                <p className="text-slate-300">
                  In December 2020, Ethereum began its transition to Ethereum 2.0 with the launch of the Beacon Chain,
                  introducing proof-of-stake consensus. The Merge, completed in September 2022, was a major milestone
                  that combined the original Ethereum mainnet with the Beacon Chain, officially transitioning Ethereum
                  from proof-of-work to proof-of-stake consensus, reducing energy consumption by approximately 99.95%.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">
                  2023-Present: Scaling Solutions and Beyond
                </h3>
                <p className="text-slate-300">
                  Following The Merge, Ethereum has focused on implementing scaling solutions like sharding and layer 2
                  networks to improve transaction throughput and reduce gas fees. The ecosystem continues to evolve with
                  ongoing upgrades aimed at making Ethereum more scalable, secure, and sustainable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Smart Contracts</h3>
                <p className="text-slate-300">
                  Smart contracts are self-executing contracts with the terms directly written into code. They
                  automatically enforce and execute agreements when predetermined conditions are met, without the need
                  for intermediaries. Smart contracts enable a wide range of applications, from financial services to
                  supply chain management.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Gas and Gas Fees</h3>
                <p className="text-slate-300">
                  Gas is the unit that measures the computational effort required to execute operations on the Ethereum
                  network. Every transaction and smart contract execution requires a certain amount of gas, and users
                  must pay for this gas using ETH. Gas fees help prevent spam and ensure the efficient use of network
                  resources.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Decentralized Applications (dApps)</h3>
                <p className="text-slate-300">
                  dApps are applications that run on a decentralized network rather than being hosted on centralized
                  servers. They use smart contracts for their backend logic and typically have user interfaces built
                  with web technologies. dApps can range from financial services and games to social networks and
                  marketplaces.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Tokens and Token Standards</h3>
                <p className="text-slate-300">
                  Ethereum enables the creation of various types of tokens through smart contracts. The most common
                  token standards include:
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">ERC-20:</span> The standard for fungible tokens, used for
                    cryptocurrencies and utility tokens
                  </li>
                  <li>
                    <span className="font-medium">ERC-721:</span> The standard for non-fungible tokens (NFTs), used for
                    unique digital assets
                  </li>
                  <li>
                    <span className="font-medium">ERC-1155:</span> A multi-token standard that combines features of both
                    ERC-20 and ERC-721
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Wallets</h3>
                <p className="text-slate-300">
                  Ethereum wallets are applications that allow users to interact with the Ethereum blockchain. They
                  store private keys, manage ETH and other tokens, and enable users to send transactions and interact
                  with dApps. Wallets can be software-based (web, desktop, or mobile) or hardware devices for enhanced
                  security.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started with Ethereum</h2>
            <p className="text-slate-300 mb-4">If you're new to Ethereum, here are some steps to get started:</p>

            <ol className="list-decimal list-inside text-slate-300 space-y-3">
              <li>
                <span className="font-medium">Create a wallet:</span> Set up an Ethereum wallet like MetaMask, Trust
                Wallet, or Coinbase Wallet to store and manage your ETH.
              </li>
              <li>
                <span className="font-medium">Acquire some ETH:</span> Purchase ETH from a cryptocurrency exchange or
                receive it from another user.
              </li>
              <li>
                <span className="font-medium">Explore dApps:</span> Try out some popular decentralized applications to
                get a feel for how they work.
              </li>
              <li>
                <span className="font-medium">Learn about security:</span> Understand best practices for keeping your
                funds and private keys secure.
              </li>
              <li>
                <span className="font-medium">Join the community:</span> Participate in Ethereum forums, Discord
                channels, or local meetups to connect with other enthusiasts.
              </li>
            </ol>

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
