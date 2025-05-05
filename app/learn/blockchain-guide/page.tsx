import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Blockchain Guide | EthCheck",
  description:
    "Understand the technology behind Ethereum and other cryptocurrencies with this comprehensive blockchain guide.",
}

export default function BlockchainGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Blockchain Guide</h1>
        <p className="text-slate-400 text-center mb-8">
          Understanding the technology behind Ethereum and cryptocurrencies
        </p>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">What is Blockchain Technology?</h2>
            <p className="text-slate-300 mb-4">
              A blockchain is a distributed, decentralized, and typically public digital ledger consisting of records
              called blocks that are used to record transactions across many computers. This ensures that any involved
              block cannot be altered retroactively, without the alteration of all subsequent blocks.
            </p>
            <p className="text-slate-300 mb-4">
              Think of a blockchain as a shared database that is maintained by a network of computers rather than a
              central authority. Each "block" contains a number of transactions, and once a block is added to the chain,
              the data it contains becomes extremely difficult to modify.
            </p>
            <p className="text-slate-300">
              This technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, but it wasn't until
              2008 when Satoshi Nakamoto conceptualized the first blockchain as the public transaction ledger for
              Bitcoin.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Components of a Blockchain</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Blocks</h3>
                <p className="text-slate-300">
                  Blocks are data structures within the blockchain database where transaction data is permanently
                  recorded. A block typically contains:
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>A block header with metadata</li>
                  <li>A reference to the previous block (creating the "chain")</li>
                  <li>A timestamp</li>
                  <li>Transaction data</li>
                  <li>A nonce (in proof-of-work systems)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Nodes</h3>
                <p className="text-slate-300">
                  Nodes are computers that participate in the blockchain network. They maintain a copy of the
                  blockchain, validate transactions, and relay information to other nodes. There are several types of
                  nodes:
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>Full nodes: Store the entire blockchain and validate transactions</li>
                  <li>Light nodes: Store block headers and use simplified payment verification</li>
                  <li>Mining nodes: Process transactions and create new blocks (in proof-of-work systems)</li>
                  <li>Validator nodes: Stake cryptocurrency to validate transactions (in proof-of-stake systems)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Consensus Mechanisms</h3>
                <p className="text-slate-300">
                  Consensus mechanisms are protocols that ensure all nodes in the network agree on the validity of
                  transactions and the order in which they are added to the blockchain. The most common consensus
                  mechanisms include:
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Proof of Work (PoW):</span> Miners compete to solve complex
                    mathematical puzzles, with the winner getting to add the next block
                  </li>
                  <li>
                    <span className="font-medium">Proof of Stake (PoS):</span> Validators are selected to create new
                    blocks based on the amount of cryptocurrency they "stake" as collateral
                  </li>
                  <li>
                    <span className="font-medium">Delegated Proof of Stake (DPoS):</span> Token holders vote for
                    "delegates" who validate transactions
                  </li>
                  <li>
                    <span className="font-medium">Proof of Authority (PoA):</span> Transactions are validated by
                    approved accounts known as validators
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Cryptography</h3>
                <p className="text-slate-300">
                  Cryptography is essential to blockchain security. Key cryptographic elements include:
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Hash Functions:</span> One-way functions that convert data of any size
                    into a fixed-size output
                  </li>
                  <li>
                    <span className="font-medium">Public-Private Key Pairs:</span> Allow users to digitally sign
                    transactions and prove ownership
                  </li>
                  <li>
                    <span className="font-medium">Merkle Trees:</span> Data structures that efficiently verify the
                    integrity of large datasets
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How Blockchain Works</h2>
            <p className="text-slate-300 mb-4">
              Understanding the step-by-step process of how transactions are processed and added to a blockchain:
            </p>

            <ol className="list-decimal list-inside text-slate-300 space-y-3">
              <li>
                <span className="font-medium">Transaction Initiation:</span> A user initiates a transaction (e.g.,
                sending cryptocurrency to another user).
              </li>
              <li>
                <span className="font-medium">Transaction Authentication:</span> The transaction is digitally signed
                using the sender's private key, creating a signature that proves the sender's authorization.
              </li>
              <li>
                <span className="font-medium">Transaction Broadcast:</span> The signed transaction is broadcast to the
                network and collected by nodes into a pool of unconfirmed transactions.
              </li>
              <li>
                <span className="font-medium">Transaction Verification:</span> Nodes verify the transaction by checking
                the digital signature and ensuring the sender has sufficient funds.
              </li>
              <li>
                <span className="font-medium">Block Creation:</span> Miners or validators select transactions from the
                pool and package them into a candidate block.
              </li>
              <li>
                <span className="font-medium">Consensus Process:</span> The network reaches consensus on the validity of
                the block through the consensus mechanism (e.g., proof-of-work mining or proof-of-stake validation).
              </li>
              <li>
                <span className="font-medium">Block Addition:</span> Once consensus is reached, the new block is added
                to the blockchain and broadcast to the network.
              </li>
              <li>
                <span className="font-medium">Confirmation:</span> As more blocks are added on top of the block
                containing a transaction, that transaction gains more "confirmations," making it increasingly secure and
                irreversible.
              </li>
            </ol>

            <div className="mt-6 bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
              <h3 className="text-lg font-medium mb-2">The Double-Spending Problem</h3>
              <p className="text-slate-300">
                One of blockchain's most significant innovations is solving the "double-spending problem" for digital
                assets. Double-spending occurs when the same digital currency is spent more than once. Blockchain
                prevents this through:
              </p>
              <ul className="list-disc list-inside text-slate-300 mt-2">
                <li>Chronological ordering of transactions</li>
                <li>Consensus mechanisms that ensure agreement on transaction history</li>
                <li>Cryptographic verification of transactions</li>
                <li>The requirement for multiple confirmations before considering transactions final</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Types of Blockchains</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Public Blockchains</h3>
                <p className="text-slate-300">
                  Public blockchains are open networks where anyone can participate as a node, validator, or user. They
                  are fully decentralized and transparent.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Bitcoin, Ethereum, Litecoin
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Characteristics:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-1">
                  <li>Open participation</li>
                  <li>Transparent transaction history</li>
                  <li>No central authority</li>
                  <li>Typically slower but more secure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Private Blockchains</h3>
                <p className="text-slate-300">
                  Private blockchains restrict participation to invited participants, typically within a single
                  organization or a group of known entities.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Hyperledger Fabric, Corda
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Characteristics:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-1">
                  <li>Restricted participation</li>
                  <li>Greater privacy and control</li>
                  <li>Faster transaction processing</li>
                  <li>More centralized governance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Consortium Blockchains</h3>
                <p className="text-slate-300">
                  Consortium blockchains are partially decentralized, where a group of organizations jointly operate the
                  network.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Energy Web Chain, Quorum
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Characteristics:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-1">
                  <li>Controlled by a pre-selected group of participants</li>
                  <li>Balance between public and private blockchains</li>
                  <li>Suitable for business applications across organizations</li>
                  <li>More efficient than public blockchains but less centralized than private ones</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Hybrid Blockchains</h3>
                <p className="text-slate-300">
                  Hybrid blockchains combine elements of both public and private blockchains, allowing for customizable
                  transparency and access.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> XDC Network, Dragonchain
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Characteristics:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-300 mt-1">
                  <li>Flexible privacy settings</li>
                  <li>Customizable access controls</li>
                  <li>Can connect private operations to public networks</li>
                  <li>Balance between transparency and privacy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Blockchain Applications</h2>
            <p className="text-slate-300 mb-4">
              While blockchain technology first gained prominence through cryptocurrencies, its applications extend far
              beyond digital money:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Cryptocurrencies</h3>
                <p className="text-slate-300">
                  Digital currencies that use cryptography for security and operate on blockchain networks.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Bitcoin (BTC), Ethereum (ETH), Ripple (XRP)
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Smart Contracts</h3>
                <p className="text-slate-300">
                  Self-executing contracts with the terms directly written into code, automatically enforcing
                  agreements.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Ethereum smart contracts, Solana programs
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Decentralized Finance (DeFi)</h3>
                <p className="text-slate-300">
                  Financial services built on blockchain that operate without traditional intermediaries like banks.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Lending platforms, decentralized exchanges, yield farming
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Non-Fungible Tokens (NFTs)</h3>
                <p className="text-slate-300">
                  Unique digital assets that represent ownership of specific items or content.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Digital art, collectibles, virtual real estate
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Supply Chain Management</h3>
                <p className="text-slate-300">Tracking products from manufacture to delivery with immutable records.</p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> IBM Food Trust, VeChain, TradeLens
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Identity Management</h3>
                <p className="text-slate-300">
                  Secure, self-sovereign identity systems that give users control over their personal data.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Civic, uPort, Sovrin
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Voting Systems</h3>
                <p className="text-slate-300">
                  Transparent and tamper-proof voting platforms that enhance electoral integrity.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> Voatz, Follow My Vote
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">Healthcare</h3>
                <p className="text-slate-300">
                  Secure sharing of medical records and management of pharmaceutical supply chains.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Examples:</strong> MedRec, Patientory, Mediledger
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Blockchain Challenges and Limitations</h2>
            <p className="text-slate-300 mb-4">
              Despite its revolutionary potential, blockchain technology faces several challenges:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Scalability</h3>
                <p className="text-slate-300">
                  Many public blockchains struggle with transaction throughput. Bitcoin can process around 7
                  transactions per second, while Ethereum can handle about 15-30. This is far below traditional payment
                  systems like Visa, which can process thousands per second.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Solutions being explored:</strong> Layer 2 scaling solutions, sharding, alternative consensus
                  mechanisms
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Energy Consumption</h3>
                <p className="text-slate-300">
                  Proof-of-Work blockchains like Bitcoin consume significant amounts of electricity, raising
                  environmental concerns.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Solutions being explored:</strong> Proof-of-Stake and other energy-efficient consensus
                  mechanisms, renewable energy mining
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Interoperability</h3>
                <p className="text-slate-300">
                  Different blockchain networks often cannot communicate with each other, creating isolated ecosystems.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Solutions being explored:</strong> Cross-chain technologies, blockchain bridges,
                  interoperability protocols
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Regulatory Uncertainty</h3>
                <p className="text-slate-300">
                  The legal and regulatory framework for blockchain and cryptocurrencies is still evolving in many
                  jurisdictions.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Solutions being explored:</strong> Industry self-regulation, collaboration with regulators,
                  regulatory sandboxes
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Security Vulnerabilities</h3>
                <p className="text-slate-300">
                  While the blockchain itself is secure, applications built on top of it can have vulnerabilities, as
                  seen in smart contract exploits and exchange hacks.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Solutions being explored:</strong> Formal verification of smart contracts, security audits,
                  insurance protocols
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">The Future of Blockchain</h2>
            <p className="text-slate-300 mb-4">
              Blockchain technology continues to evolve rapidly. Here are some trends and developments to watch:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Increased Enterprise Adoption</h3>
                <p className="text-slate-300">
                  Major corporations and institutions are increasingly implementing blockchain solutions for various use
                  cases, from supply chain management to cross-border payments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Central Bank Digital Currencies (CBDCs)</h3>
                <p className="text-slate-300">
                  Many central banks are exploring or developing their own digital currencies, potentially built on
                  blockchain or distributed ledger technology.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Web3 and Decentralized Internet</h3>
                <p className="text-slate-300">
                  The vision of a more decentralized internet (Web3) built on blockchain technology continues to gain
                  momentum, promising greater user control over data and digital assets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Integration with Other Technologies</h3>
                <p className="text-slate-300">
                  Blockchain is increasingly being combined with other emerging technologies like AI, IoT, and AR/VR to
                  create new applications and solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Regulatory Clarity</h3>
                <p className="text-slate-300">
                  As the technology matures, we can expect more comprehensive and clear regulatory frameworks to emerge,
                  potentially accelerating adoption.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-700/30 rounded-lg">
              <p className="text-slate-300">
                <strong className="text-emerald-400">Conclusion:</strong> Blockchain technology represents a fundamental
                shift in how we record, verify, and exchange value. While still evolving, its potential to transform
                industries, enhance transparency, and empower individuals makes it one of the most significant
                technological innovations of our time. As the technology matures and overcomes its current limitations,
                we can expect to see even more widespread adoption and innovative applications.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
