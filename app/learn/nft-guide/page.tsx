import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "NFT Guide | EthCheck",
  description: "Discover non-fungible tokens and their impact on digital ownership in this comprehensive guide.",
}

export default function NftGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">NFT Guide</h1>
        <p className="text-slate-400 text-center mb-8">Understanding Non-Fungible Tokens and Digital Ownership</p>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">What are NFTs?</h2>
            <p className="text-slate-300 mb-4">
              Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of specific items or content
              on a blockchain. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible (meaning each
              unit is identical to every other unit), NFTs are unique and cannot be exchanged on a one-to-one basis.
            </p>
            <p className="text-slate-300 mb-4">
              The term "non-fungible" simply means that each token has unique properties and is not interchangeable with
              other tokens. Think of it like comparing a dollar bill (fungible) to a unique piece of art (non-fungible)
              – while you can exchange one dollar bill for another without losing value, each piece of art is distinct
              and has its own value.
            </p>
            <p className="text-slate-300">
              NFTs use blockchain technology to provide verifiable proof of ownership, authenticity, and provenance for
              digital assets. This has created new possibilities for digital ownership, particularly in art,
              collectibles, gaming, and entertainment.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How NFTs Work</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Technical Foundation</h3>
                <p className="text-slate-300">
                  Most NFTs are part of the Ethereum blockchain, though other blockchains like Solana, Flow, and Tezos
                  have also developed their own NFT standards. On Ethereum, NFTs are primarily created using the ERC-721
                  or ERC-1155 token standards, which define how these unique tokens function.
                </p>
                <p className="text-slate-300 mt-2">
                  Each NFT contains a unique identifier directly linked to one Ethereum address. This creates an
                  immutable record of ownership that can be verified by anyone with access to the blockchain.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Metadata and Storage</h3>
                <p className="text-slate-300">An NFT typically consists of two parts:</p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Token:</span> The actual NFT on the blockchain that establishes
                    ownership
                  </li>
                  <li>
                    <span className="font-medium">Metadata:</span> Information about what the NFT represents, including
                    links to the digital asset
                  </li>
                </ul>
                <p className="text-slate-300 mt-2">
                  The digital assets themselves (images, videos, audio files, etc.) are typically too large to store
                  directly on the blockchain. Instead, they're usually stored using decentralized storage solutions like
                  IPFS (InterPlanetary File System) or Arweave, with the NFT containing a link to this content.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Minting Process</h3>
                <p className="text-slate-300">
                  "Minting" an NFT refers to the process of creating a new NFT on the blockchain. This typically
                  involves:
                </p>
                <ol className="list-decimal list-inside text-slate-300 mt-2 space-y-1">
                  <li>Creating the digital asset you want to tokenize</li>
                  <li>Choosing an NFT marketplace or platform</li>
                  <li>Uploading the file and metadata</li>
                  <li>Paying a transaction fee (gas fee on Ethereum) to create the token</li>
                </ol>
                <p className="text-slate-300 mt-2">
                  Once minted, the NFT exists on the blockchain permanently unless deliberately destroyed (a process
                  called "burning").
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Smart Contracts and Royalties</h3>
                <p className="text-slate-300">
                  NFTs are powered by smart contracts that define their properties and functionalities. These contracts
                  can include features like royalty payments, where creators automatically receive a percentage of all
                  secondary sales of their NFTs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Types of NFTs and Use Cases</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Digital Art</h3>
                <p className="text-slate-300">
                  Digital art was one of the first and remains one of the most prominent use cases for NFTs. Artists can
                  tokenize their digital creations, providing proof of authenticity and ownership in a medium that was
                  previously easy to copy without attribution.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Notable examples:</strong> Beeple's "Everydays: The First 5000 Days" (sold for $69 million),
                  Art Blocks generative art platform, CryptoPunks
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Collectibles</h3>
                <p className="text-slate-300">
                  Digital collectibles function similarly to physical collectibles like trading cards or figurines, but
                  with the added benefits of provable scarcity and ownership history.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Notable examples:</strong> NBA Top Shot (basketball highlight moments), CryptoKitties, Bored
                  Ape Yacht Club
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Gaming Assets</h3>
                <p className="text-slate-300">
                  NFTs enable true ownership of in-game items, allowing players to buy, sell, and trade assets across
                  games or even outside of the gaming ecosystem entirely.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Notable examples:</strong> Axie Infinity creatures, Decentraland land parcels, The Sandbox
                  voxel assets
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Virtual Real Estate</h3>
                <p className="text-slate-300">
                  In virtual worlds and metaverse platforms, NFTs represent ownership of digital land and properties
                  that users can develop, monetize, or sell.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Notable examples:</strong> Decentraland parcels, The Sandbox LAND, Otherside plots
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Music and Entertainment</h3>
                <p className="text-slate-300">
                  Musicians and content creators are using NFTs to tokenize music, videos, and other creative works,
                  creating new revenue streams and fan engagement opportunities.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Notable examples:</strong> Kings of Leon's NFT album, 3LAU's tokenized music, Grimes' digital
                  art collection
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Domain Names</h3>
                <p className="text-slate-300">
                  Blockchain-based domain names like .eth addresses serve both as human-readable cryptocurrency
                  addresses and as digital identity markers.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Notable examples:</strong> Ethereum Name Service (ENS), Unstoppable Domains
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Membership and Access Tokens</h3>
                <p className="text-slate-300">
                  NFTs can function as membership passes, granting holders access to exclusive communities, events,
                  content, or services.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Notable examples:</strong> Bored Ape Yacht Club membership, Proof Collective, Moonbirds
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">The NFT Ecosystem</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">NFT Marketplaces</h3>
                <p className="text-slate-300">
                  NFT marketplaces are platforms where users can mint, buy, sell, and trade NFTs. Different marketplaces
                  cater to different types of NFTs and communities.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Popular marketplaces:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-1 space-y-1">
                  <li>
                    <span className="font-medium">OpenSea:</span> The largest general NFT marketplace
                  </li>
                  <li>
                    <span className="font-medium">Blur:</span> Trading-focused marketplace with advanced features
                  </li>
                  <li>
                    <span className="font-medium">Foundation:</span> Curated art platform with an invitation system
                  </li>
                  <li>
                    <span className="font-medium">Magic Eden:</span> Leading marketplace on Solana
                  </li>
                  <li>
                    <span className="font-medium">Nifty Gateway:</span> Known for curated drops from high-profile
                    artists
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">NFT Communities</h3>
                <p className="text-slate-300">
                  Many successful NFT projects have built strong communities around their tokens, with membership often
                  providing access to exclusive Discord servers, events, and other benefits.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Creator Tools</h3>
                <p className="text-slate-300">
                  A growing ecosystem of tools helps creators mint, manage, and monetize their NFTs, including:
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-1 space-y-1">
                  <li>No-code minting platforms</li>
                  <li>Generative art engines</li>
                  <li>Royalty management tools</li>
                  <li>Analytics platforms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Challenges and Considerations</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Environmental Concerns</h3>
                <p className="text-slate-300">
                  Early criticism of NFTs focused on the energy consumption of proof-of-work blockchains like Ethereum.
                  However, Ethereum's transition to proof-of-stake in 2022 (The Merge) reduced its energy consumption by
                  approximately 99.95%, largely addressing these concerns.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Intellectual Property Issues</h3>
                <p className="text-slate-300">
                  The NFT space has faced challenges with unauthorized minting of others' work. Buyers should verify
                  that NFT creators have the rights to the content they're tokenizing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Market Volatility</h3>
                <p className="text-slate-300">
                  NFT prices can be highly volatile, with significant price swings based on trends, sentiment, and
                  speculation. Collectors should be cautious about investing more than they can afford to lose.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Technical Barriers</h3>
                <p className="text-slate-300">
                  Despite improvements, there are still technical barriers to entry for many users, including wallet
                  setup, gas fees, and understanding blockchain concepts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Long-term Preservation</h3>
                <p className="text-slate-300">
                  Since most NFTs store the actual content off-chain, there are concerns about long-term access if
                  hosting services fail. Solutions like IPFS help mitigate this risk but don't eliminate it entirely.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started with NFTs</h2>

            <p className="text-slate-300 mb-4">
              If you're interested in exploring the world of NFTs, here are some steps to get started:
            </p>

            <ol className="list-decimal list-inside text-slate-300 space-y-3">
              <li>
                <span className="font-medium">Set up a crypto wallet:</span> MetaMask is the most popular option for
                Ethereum-based NFTs, while Phantom is commonly used for Solana NFTs.
              </li>
              <li>
                <span className="font-medium">Purchase cryptocurrency:</span> You'll need ETH for Ethereum-based NFTs or
                SOL for Solana NFTs to make purchases and pay transaction fees.
              </li>
              <li>
                <span className="font-medium">Explore NFT marketplaces:</span> Browse platforms like OpenSea, Blur, or
                Magic Eden to get familiar with available collections and price ranges.
              </li>
              <li>
                <span className="font-medium">Research before buying:</span> Look into the project's community, team,
                roadmap, and trading history before making purchases.
              </li>
              <li>
                <span className="font-medium">Start small:</span> Consider beginning with lower-priced NFTs until you're
                comfortable with the process.
              </li>
              <li>
                <span className="font-medium">For creators:</span> Explore platforms that allow you to mint your own
                NFTs, such as OpenSea, Foundation, or Manifold.
              </li>
            </ol>

            <div className="mt-6 bg-slate-900/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Safety Tips</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Never share your wallet's seed phrase or private keys</li>
                <li>Be cautious of phishing attempts and fake marketplace links</li>
                <li>Verify collection authenticity through official channels</li>
                <li>Be wary of too-good-to-be-true offers or unsolicited messages</li>
                <li>Consider using a hardware wallet for valuable NFTs</li>
                <li>Research gas fees and optimal times for transactions</li>
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
