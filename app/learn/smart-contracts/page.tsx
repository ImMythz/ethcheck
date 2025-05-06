import Link from "next/link"

export default function SmartContractsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Understanding Smart Contracts</h1>
        <div className="h-1 w-20 bg-emerald-500 mt-2"></div>
      </div>

      <div className="bg-slate-800 rounded-lg shadow-md p-8 mb-8 border border-slate-700">
        <div className="space-y-6 text-slate-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mt-4">What Are Smart Contracts?</h2>
          <p className="mb-4">
            Smart contracts are self-executing programs that run on a blockchain when predetermined conditions are met.
            First conceptualized by computer scientist Nick Szabo in the 1990s, smart contracts have become one of the
            most revolutionary applications of blockchain technology, particularly on the Ethereum network.
          </p>
          <p className="mb-4">
            Unlike traditional contracts that require third-party enforcement, smart contracts automatically execute and
            enforce themselves through code. They operate on the principle of &quot;if this, then that&quot; - when
            specific conditions are satisfied, predetermined actions are automatically triggered.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">How Smart Contracts Work</h2>
          <p className="mb-4">
            Smart contracts function as programs stored on a blockchain that execute when predetermined conditions are
            met. Here&apos;s a simplified explanation of how they work:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-slate-100">Creation:</strong> A developer writes the smart contract code defining
              the rules and operations of the agreement.
            </li>
            <li>
              <strong className="text-slate-100">Deployment:</strong> The code is compiled and deployed to the
              blockchain (most commonly Ethereum).
            </li>
            <li>
              <strong className="text-slate-100">Execution:</strong> The contract self-executes when triggered by
              transactions or interactions that meet its conditions.
            </li>
            <li>
              <strong className="text-slate-100">Verification:</strong> The network of nodes validates the execution,
              ensuring the contract runs as programmed.
            </li>
            <li>
              <strong className="text-slate-100">Immutability:</strong> Once deployed, the contract cannot be altered,
              ensuring trust and security.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">Key Features of Smart Contracts</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Autonomy and Self-Execution</h3>
            <p className="mb-4">
              Smart contracts operate independently without intermediaries. Once deployed, they execute automatically
              when conditions are met, removing the need for third-party oversight.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Transparency</h3>
            <p className="mb-4">
              All parties can view the contract&apos;s code and conditions. This transparency builds trust as everyone
              can verify exactly how the contract will execute.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Security</h3>
            <p className="mb-4">
              Smart contracts use cryptographic techniques to secure transactions. The decentralized nature of
              blockchain makes them resistant to tampering and fraud.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Efficiency and Speed</h3>
            <p className="mb-4">
              By automating processes and removing intermediaries, smart contracts can significantly reduce transaction
              times and costs compared to traditional methods.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Immutability</h3>
            <p className="mb-4">
              Once deployed, smart contracts cannot be altered. This ensures that the terms cannot be changed
              unilaterally, providing security and predictability.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">Common Applications of Smart Contracts</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Decentralized Finance (DeFi)</h3>
            <p className="mb-4">
              Smart contracts power lending platforms, decentralized exchanges, and yield farming protocols, enabling
              financial services without traditional intermediaries like banks.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Non-Fungible Tokens (NFTs)</h3>
            <p className="mb-4">
              Smart contracts manage the creation, ownership, and transfer of unique digital assets, revolutionizing
              digital art, collectibles, and virtual real estate.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Supply Chain Management</h3>
            <p className="mb-4">
              Smart contracts can track products from manufacturer to consumer, ensuring authenticity and compliance
              with standards throughout the supply chain.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Insurance</h3>
            <p className="mb-4">
              Parametric insurance policies use smart contracts to automatically process claims when predefined
              conditions (like flight delays or natural disasters) are met.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Voting Systems</h3>
            <p className="mb-4">
              Smart contracts can create transparent, tamper-proof voting systems for organizations, communities, or
              even national elections.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">Smart Contract Languages</h2>
          <p className="mb-4">
            Several programming languages are used to write smart contracts, with Solidity being the most popular for
            Ethereum-based contracts. Other languages include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-slate-100">Solidity:</strong> The primary language for Ethereum, designed
              specifically for writing smart contracts.
            </li>
            <li>
              <strong className="text-slate-100">Vyper:</strong> A Python-like language focused on security and
              simplicity.
            </li>
            <li>
              <strong className="text-slate-100">Rust:</strong> Used for smart contracts on platforms like Solana and
              Near Protocol.
            </li>
            <li>
              <strong className="text-slate-100">Move:</strong> Developed for the Diem blockchain with a focus on safety
              and flexibility.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">Challenges and Limitations</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Code Vulnerabilities</h3>
            <p className="mb-4">
              Smart contracts are only as secure as their code. Vulnerabilities can lead to exploits and significant
              financial losses, as seen in incidents like the DAO hack.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Immutability Drawbacks</h3>
            <p className="mb-4">
              While immutability provides security, it also means that bugs cannot be easily fixed once the contract is
              deployed.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Scalability Issues</h3>
            <p className="mb-4">
              As blockchain networks grow, executing complex smart contracts can become expensive and slow, leading to
              scalability challenges.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-100 mt-6">Legal Recognition</h3>
            <p className="mb-4">
              The legal status of smart contracts varies by jurisdiction, creating uncertainty about their
              enforceability in traditional legal systems.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">
            Best Practices for Smart Contract Development
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-slate-100">Thorough Testing:</strong> Use comprehensive testing frameworks to
              identify vulnerabilities before deployment.
            </li>
            <li>
              <strong className="text-slate-100">Code Audits:</strong> Have your smart contract code reviewed by
              security experts.
            </li>
            <li>
              <strong className="text-slate-100">Formal Verification:</strong> Use mathematical methods to prove the
              correctness of your contract.
            </li>
            <li>
              <strong className="text-slate-100">Upgradability Patterns:</strong> Implement design patterns that allow
              for upgrades while maintaining security.
            </li>
            <li>
              <strong className="text-slate-100">Gas Optimization:</strong> Write efficient code to minimize transaction
              costs on the blockchain.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">The Future of Smart Contracts</h2>
          <p className="mb-4">
            Smart contracts continue to evolve with advancements in blockchain technology. Future developments may
            include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-slate-100">Cross-Chain Functionality:</strong> Smart contracts that can operate
              across multiple blockchain networks.
            </li>
            <li>
              <strong className="text-slate-100">Enhanced Privacy:</strong> Zero-knowledge proofs and other privacy
              technologies integrated into smart contracts.
            </li>
            <li>
              <strong className="text-slate-100">AI Integration:</strong> Combining artificial intelligence with smart
              contracts for more adaptive and intelligent execution.
            </li>
            <li>
              <strong className="text-slate-100">Legal Framework Development:</strong> Greater clarity and
              standardization of smart contracts in legal systems worldwide.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">Conclusion</h2>
          <p className="mb-4">
            Smart contracts represent one of the most transformative applications of blockchain technology. By
            automating agreements and removing intermediaries, they have the potential to revolutionize countless
            industries and processes. While challenges remain, ongoing development and innovation continue to expand
            their capabilities and address their limitations.
          </p>
          <p className="mb-4">
            As blockchain adoption grows, understanding smart contracts becomes increasingly important for developers,
            businesses, and users alike. Whether you&apos;re interested in developing your own smart contracts or simply
            interacting with existing ones, a solid grasp of their principles and potential will serve you well in the
            evolving digital landscape.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-700 pt-6">
        <h3 className="text-xl font-semibold text-slate-100 mb-4">Continue Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/learn/ethereum-basics"
            className="p-4 border border-slate-700 rounded hover:bg-slate-700 transition-colors"
          >
            <h4 className="font-medium text-emerald-400">Ethereum Basics</h4>
            <p className="text-sm text-slate-400">Understand the fundamentals of Ethereum blockchain</p>
          </Link>
          <Link
            href="/learn/ethereum-gas-fees"
            className="p-4 border border-slate-700 rounded hover:bg-slate-700 transition-colors"
          >
            <h4 className="font-medium text-emerald-400">Ethereum Gas Fees</h4>
            <p className="text-sm text-slate-400">Learn how transaction fees work on Ethereum</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
