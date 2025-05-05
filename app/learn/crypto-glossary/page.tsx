import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Crypto Glossary | EthCheck",
  description: "A comprehensive dictionary of blockchain and cryptocurrency terms.",
}

export default function CryptoGlossary() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Crypto Glossary</h1>
        <p className="text-slate-400 text-center mb-8">
          A comprehensive dictionary of blockchain and cryptocurrency terms
        </p>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search terms..."
              className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder:text-slate-400"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>

        {/* A */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">A</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Address</h3>
                <p className="text-slate-300">
                  A unique identifier that serves as a virtual location where cryptocurrency can be sent to and from.
                  Similar to a bank account number but for cryptocurrencies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Airdrop</h3>
                <p className="text-slate-300">
                  A distribution of cryptocurrency tokens to numerous wallet addresses, usually for free. Airdrops are
                  often used for marketing purposes, to bootstrap a new cryptocurrency, or to reward users of a
                  platform.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Altcoin</h3>
                <p className="text-slate-300">
                  Any cryptocurrency other than Bitcoin. The term is an abbreviation of "alternative coin."
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">AMM (Automated Market Maker)</h3>
                <p className="text-slate-300">
                  A type of decentralized exchange protocol that uses a mathematical formula to price assets. Instead of
                  using an order book like a traditional exchange, assets are priced according to a pricing algorithm.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">APR (Annual Percentage Rate)</h3>
                <p className="text-slate-300">
                  The annual rate of return on an investment, without accounting for the effect of compounding.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">APY (Annual Percentage Yield)</h3>
                <p className="text-slate-300">
                  The annual rate of return on an investment, accounting for the effect of compounding interest.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* B */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">B</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Bear Market</h3>
                <p className="text-slate-300">
                  A market condition in which prices are falling and widespread pessimism causes the negative sentiment
                  to be self-sustaining.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Block</h3>
                <p className="text-slate-300">
                  A collection of transactions that are bundled together and added to the blockchain. Each block
                  contains a reference to the previous block, creating a chain of blocks (hence, "blockchain").
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Block Explorer</h3>
                <p className="text-slate-300">
                  An online tool that allows you to search and navigate through a blockchain, viewing transaction
                  histories and balances of addresses.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Block Height</h3>
                <p className="text-slate-300">
                  The number of blocks in the chain between a given block and the first block in the blockchain (the
                  genesis block).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Block Reward</h3>
                <p className="text-slate-300">
                  The cryptocurrency awarded to a miner when they successfully add a block to the blockchain.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Bull Market</h3>
                <p className="text-slate-300">
                  A market condition in which prices are rising or expected to rise, encouraging buying.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* C */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">C</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Centralized Exchange (CEX)</h3>
                <p className="text-slate-300">
                  A cryptocurrency exchange that is operated by a company that maintains custody of users' funds and
                  facilitates trading through a centralized order book.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Cold Wallet</h3>
                <p className="text-slate-300">
                  A cryptocurrency wallet that is not connected to the internet, making it less vulnerable to hacking.
                  Examples include hardware wallets and paper wallets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Consensus Mechanism</h3>
                <p className="text-slate-300">
                  The method by which a blockchain network agrees on the current state of the blockchain and validates
                  transactions. Common consensus mechanisms include Proof of Work (PoW) and Proof of Stake (PoS).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Cryptocurrency</h3>
                <p className="text-slate-300">
                  A digital or virtual currency that uses cryptography for security and operates on a decentralized
                  network based on blockchain technology.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* D */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">D</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">DAO (Decentralized Autonomous Organization)</h3>
                <p className="text-slate-300">
                  An organization represented by rules encoded as a computer program that is transparent, controlled by
                  the organization members, and not influenced by a central government.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">dApp (Decentralized Application)</h3>
                <p className="text-slate-300">
                  An application that runs on a decentralized network, combining a smart contract and a frontend user
                  interface.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">DeFi (Decentralized Finance)</h3>
                <p className="text-slate-300">
                  A movement that aims to create an open-source, permissionless, and transparent financial service
                  ecosystem that is available to everyone and operates without any central authority.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">DEX (Decentralized Exchange)</h3>
                <p className="text-slate-300">
                  A cryptocurrency exchange that operates in a decentralized way, without a central authority, allowing
                  for direct peer-to-peer cryptocurrency transactions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Double Spending</h3>
                <p className="text-slate-300">
                  A potential flaw in a digital cash scheme in which the same single digital token can be spent more
                  than once. Blockchain technology solves this problem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* E */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">E</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">EIP (Ethereum Improvement Proposal)</h3>
                <p className="text-slate-300">
                  A design document providing information to the Ethereum community, describing a proposed new feature
                  or process for Ethereum.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">ERC (Ethereum Request for Comment)</h3>
                <p className="text-slate-300">
                  A standard for Ethereum tokens. The most well-known is ERC-20, which is used for fungible tokens, and
                  ERC-721, which is used for non-fungible tokens (NFTs).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Ethereum</h3>
                <p className="text-slate-300">
                  A decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native
                  cryptocurrency of the platform.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">EVM (Ethereum Virtual Machine)</h3>
                <p className="text-slate-300">
                  The runtime environment for smart contracts in Ethereum. It is completely isolated from the network,
                  which means that code running inside the EVM has no access to the network, file system, or other
                  processes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* F */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">F</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Fiat Currency</h3>
                <p className="text-slate-300">
                  Government-issued currency that is not backed by a physical commodity, such as gold or silver, but
                  rather by the government that issued it.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Flippening</h3>
                <p className="text-slate-300">
                  A hypothetical scenario where Ethereum (ETH) overtakes Bitcoin (BTC) as the largest cryptocurrency by
                  market capitalization.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">FOMO (Fear Of Missing Out)</h3>
                <p className="text-slate-300">
                  The apprehension that one might miss an opportunity for profit, especially when acting on impulse due
                  to anxiety rather than logic.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Fork</h3>
                <p className="text-slate-300">
                  A change to the software of a cryptocurrency that creates two separate versions of the blockchain with
                  a shared history. Forks can be either hard (non-backward compatible) or soft (backward compatible).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* G */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">G</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Gas</h3>
                <p className="text-slate-300">
                  A unit that measures the amount of computational effort required to execute operations on the Ethereum
                  network. Each operation requires a specific amount of gas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Gas Fee</h3>
                <p className="text-slate-300">
                  The fee paid to miners or validators for processing transactions on the Ethereum network. It is
                  calculated as gas used × gas price.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Genesis Block</h3>
                <p className="text-slate-300">
                  The first block of a blockchain. It is the only block that does not reference a previous block.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Governance Token</h3>
                <p className="text-slate-300">
                  A token that gives holders voting rights in a decentralized protocol or organization.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* H */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">H</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Halving</h3>
                <p className="text-slate-300">
                  A feature in some cryptocurrencies where the block reward is cut in half after a certain number of
                  blocks have been mined. Bitcoin undergoes halving approximately every four years.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Hardware Wallet</h3>
                <p className="text-slate-300">
                  A physical device that securely stores private keys offline, protecting them from online threats.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Hash</h3>
                <p className="text-slate-300">
                  The output of a hash function, which converts an input of arbitrary length into a fixed-length string
                  of bytes. Hashing is a one-way function, meaning it is infeasible to reverse the process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">HODL</h3>
                <p className="text-slate-300">
                  A term derived from a misspelling of "hold" in a Bitcoin forum. It refers to the strategy of buying
                  and holding cryptocurrency for the long term, regardless of market fluctuations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Hot Wallet</h3>
                <p className="text-slate-300">
                  A cryptocurrency wallet that is connected to the internet, making it more convenient for transactions
                  but potentially more vulnerable to hacking.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* I-J */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">I-J</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">ICO (Initial Coin Offering)</h3>
                <p className="text-slate-300">
                  A fundraising method where a new cryptocurrency project sells a portion of its tokens to early
                  investors, similar to an IPO in the stock market.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Immutability</h3>
                <p className="text-slate-300">
                  The property of blockchain data that prevents it from being altered or deleted once it has been
                  recorded.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Interoperability</h3>
                <p className="text-slate-300">
                  The ability of different blockchain systems to exchange and make use of information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* K-L */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">K-L</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">KYC (Know Your Customer)</h3>
                <p className="text-slate-300">
                  A process by which businesses verify the identity of their clients, often required by cryptocurrency
                  exchanges to comply with anti-money laundering regulations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Layer 1</h3>
                <p className="text-slate-300">
                  The base blockchain architecture, such as Bitcoin or Ethereum. It refers to the main blockchain
                  network and its underlying protocol.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Layer 2</h3>
                <p className="text-slate-300">
                  A secondary framework or protocol built on top of an existing blockchain system to improve its
                  scalability and efficiency. Examples include Lightning Network for Bitcoin and Optimism for Ethereum.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Liquidity Pool</h3>
                <p className="text-slate-300">
                  A collection of funds locked in a smart contract, used to facilitate decentralized trading, lending,
                  and other financial activities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* M */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">M</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Market Cap</h3>
                <p className="text-slate-300">
                  The total value of a cryptocurrency, calculated by multiplying the current price by the total supply
                  of coins or tokens.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Mempool</h3>
                <p className="text-slate-300">
                  A waiting area for unconfirmed transactions before they are added to the blockchain.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Merkle Tree</h3>
                <p className="text-slate-300">
                  A data structure used in blockchain to efficiently verify the integrity of large datasets. It allows
                  for quick verification of whether a specific transaction is included in a block.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Mining</h3>
                <p className="text-slate-300">
                  The process of validating transactions and adding them to the blockchain by solving complex
                  mathematical problems. Miners are rewarded with cryptocurrency for their efforts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Multisig (Multi-signature)</h3>
                <p className="text-slate-300">
                  A security feature that requires multiple signatures (private keys) to authorize a transaction,
                  enhancing security by distributing control among multiple parties.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* N */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">N</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Node</h3>
                <p className="text-slate-300">
                  A computer that connects to a blockchain network and maintains a copy of the blockchain. Nodes
                  validate and relay transactions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">NFT (Non-Fungible Token)</h3>
                <p className="text-slate-300">
                  A unique digital asset that represents ownership of a specific item or piece of content. Unlike
                  cryptocurrencies, NFTs are not interchangeable with each other.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Nonce</h3>
                <p className="text-slate-300">
                  A number used once in cryptographic communication, often used in proof-of-work systems to find a valid
                  hash for a block.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* O-P */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">O-P</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Oracle</h3>
                <p className="text-slate-300">
                  A service that provides external data to a blockchain, allowing smart contracts to interact with
                  information outside the blockchain.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">P2P (Peer-to-Peer)</h3>
                <p className="text-slate-300">
                  A decentralized network where participants can interact directly with each other without the need for
                  intermediaries.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Private Key</h3>
                <p className="text-slate-300">
                  A secret code that allows access to cryptocurrency holdings. It is used to sign transactions and
                  should be kept secure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Proof of Stake (PoS)</h3>
                <p className="text-slate-300">
                  A consensus mechanism where validators are chosen to create new blocks based on the number of coins
                  they hold and are willing to "stake" as collateral.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Proof of Work (PoW)</h3>
                <p className="text-slate-300">
                  A consensus mechanism where miners compete to solve complex mathematical problems to validate
                  transactions and create new blocks.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Public Key</h3>
                <p className="text-slate-300">
                  A cryptographic code that is derived from a private key but does not need to be kept secret. It is
                  used to receive cryptocurrency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Q-R */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Q-R</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Rollup</h3>
                <p className="text-slate-300">
                  A layer 2 scaling solution that performs transaction execution outside the main blockchain but posts
                  transaction data on layer 1.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* S */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">S</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Satoshi Nakamoto</h3>
                <p className="text-slate-300">
                  The pseudonymous person or group of people who created Bitcoin and authored the Bitcoin whitepaper.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Scalability</h3>
                <p className="text-slate-300">
                  The ability of a blockchain network to handle an increasing amount of transactions efficiently.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Smart Contract</h3>
                <p className="text-slate-300">
                  Self-executing contracts with the terms of the agreement directly written into code. They
                  automatically execute when predetermined conditions are met.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Stablecoin</h3>
                <p className="text-slate-300">
                  A type of cryptocurrency designed to maintain a stable value by pegging it to a reserve asset like the
                  US dollar or gold.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Staking</h3>
                <p className="text-slate-300">
                  The process of actively participating in transaction validation on a proof-of-stake blockchain by
                  locking up a certain amount of cryptocurrency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* T */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">T</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Token</h3>
                <p className="text-slate-300">
                  A digital asset that is created on an existing blockchain, representing a particular asset or utility.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Transaction Fee</h3>
                <p className="text-slate-300">
                  A fee paid to miners or validators for processing a transaction on a blockchain network.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">TVL (Total Value Locked)</h3>
                <p className="text-slate-300">
                  The total value of cryptocurrency assets deposited in a DeFi protocol, often used as a metric to
                  measure the growth and adoption of DeFi platforms.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* U-V */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">U-V</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Validator</h3>
                <p className="text-slate-300">
                  A participant in a proof-of-stake blockchain who is responsible for verifying transactions and
                  maintaining the blockchain.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Volatility</h3>
                <p className="text-slate-300">
                  The degree of variation in trading price over time. Cryptocurrencies are known for their high
                  volatility compared to traditional assets.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* W-Z */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">W-Z</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Wallet</h3>
                <p className="text-slate-300">
                  A digital tool that allows users to store, send, and receive cryptocurrencies. It contains private
                  keys that give access to the funds.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Whale</h3>
                <p className="text-slate-300">
                  An individual or entity that holds a large amount of a particular cryptocurrency, enough to
                  potentially influence the market price.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Whitepaper</h3>
                <p className="text-slate-300">
                  A document released by a cryptocurrency project that explains its technology, goals, and roadmap.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">Zero-Knowledge Proof</h3>
                <p className="text-slate-300">
                  A cryptographic method that allows one party to prove to another that a statement is true without
                  revealing any additional information beyond the validity of the statement itself.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
