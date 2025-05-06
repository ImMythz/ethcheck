import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Ethereum Wallets Comparison | EthCheck",
  description: "Compare different Ethereum wallets to find the right one for your needs.",
}

export default function EthereumWalletsComparisonPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/learn" className="text-emerald-400 hover:text-emerald-300 flex items-center mb-4">
            <ArrowRight size={16} className="mr-1 rotate-180" /> Back to Learn
          </Link>
          <h1 className="text-3xl font-bold mb-2">Ethereum Wallets Comparison</h1>
          <p className="text-slate-300">Finding the right wallet for your Ethereum needs</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Understanding Ethereum Wallets</CardTitle>
            <CardDescription>What they are and why they matter</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              Ethereum wallets are applications or devices that allow users to interact with the Ethereum blockchain.
              They don&apos;t actually store your cryptocurrency—instead, they store the private keys that give you
              access to your assets on the blockchain. Choosing the right wallet is crucial for security, convenience,
              and functionality.
            </p>
            <p className="mb-4">
              This guide compares different types of Ethereum wallets, their features, security considerations, and use
              cases to help you make an informed decision based on your specific needs.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Types of Ethereum Wallets</CardTitle>
            <CardDescription>Different wallet categories and their characteristics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-medium text-emerald-400 mb-2">Hardware Wallets</h3>
              <p className="mb-2">
                Hardware wallets are physical devices designed specifically for storing cryptocurrency private keys
                offline.
              </p>
              <p className="mb-2 font-medium">Key Features:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Highest level of security as private keys never leave the device</li>
                <li>Immune to computer viruses and online hacking attempts</li>
                <li>Support for multiple cryptocurrencies beyond Ethereum</li>
                <li>Physical confirmation of transactions required</li>
              </ul>
              <p className="mb-2">
                <span className="font-medium">Popular Examples:</span> Ledger Nano X/S, Trezor Model T/One, KeepKey
              </p>
              <p>
                <span className="font-medium">Best For:</span> Long-term investors, those holding significant amounts of
                cryptocurrency, users prioritizing security over convenience
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-emerald-400 mb-2">Software Wallets</h3>
              <p className="mb-2">Software wallets are applications installed on computers or smartphones.</p>
              <p className="mb-2 font-medium">Desktop Wallets</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Applications installed on your computer</li>
                <li>More secure than web wallets but vulnerable to malware</li>
                <li>Often offer more features than mobile wallets</li>
              </ul>
              <p className="mb-2">
                <span className="font-medium">Examples:</span> MetaMask (browser extension), Exodus, Atomic Wallet
              </p>
              <p className="mb-2 font-medium">Mobile Wallets</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Apps installed on smartphones</li>
                <li>Convenient for everyday use and payments</li>
                <li>Often include QR code scanning for easy transactions</li>
              </ul>
              <p className="mb-2">
                <span className="font-medium">Examples:</span> MetaMask Mobile, Trust Wallet, Coinbase Wallet, Rainbow
              </p>
              <p>
                <span className="font-medium">Best For:</span> Active traders, DeFi users, those who need regular access
                to their funds
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-emerald-400 mb-2">Web Wallets</h3>
              <p className="mb-2">Web wallets are accessed through a browser and hosted by a third party.</p>
              <p className="mb-2 font-medium">Key Features:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Accessible from any device with an internet connection</li>
                <li>No software installation required</li>
                <li>Often integrated with exchanges</li>
                <li>Generally less secure than other options</li>
              </ul>
              <p className="mb-2">
                <span className="font-medium">Examples:</span> MyEtherWallet (MEW), Coinbase, Binance
              </p>
              <p>
                <span className="font-medium">Best For:</span> Beginners, occasional users, small amounts
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-emerald-400 mb-2">Smart Contract Wallets</h3>
              <p className="mb-2">
                Smart contract wallets use smart contracts to add features beyond what traditional EOA (Externally Owned
                Account) wallets can offer.
              </p>
              <p className="mb-2 font-medium">Key Features:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Advanced features like social recovery</li>
                <li>Multi-signature capabilities</li>
                <li>Account abstraction (gas fee sponsorship, batched transactions)</li>
                <li>Programmable security rules</li>
              </ul>
              <p className="mb-2">
                <span className="font-medium">Examples:</span> Argent, Safe (formerly Gnosis Safe), Loopring Wallet
              </p>
              <p>
                <span className="font-medium">Best For:</span> Advanced users, teams managing shared funds, users
                wanting enhanced security features
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Detailed Comparison of Popular Ethereum Wallets</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-slate-700/50 border border-slate-600 rounded-lg">
                <thead>
                  <tr className="bg-slate-600">
                    <th className="py-2 px-4 border-b border-slate-500 text-left text-slate-100">Wallet</th>
                    <th className="py-2 px-4 border-b border-slate-500 text-left text-slate-100">Type</th>
                    <th className="py-2 px-4 border-b border-slate-500 text-left text-slate-100">Security Level</th>
                    <th className="py-2 px-4 border-b border-slate-500 text-left text-slate-100">User-Friendliness</th>
                    <th className="py-2 px-4 border-b border-slate-500 text-left text-slate-100">DApp Support</th>
                    <th className="py-2 px-4 border-b border-slate-500 text-left text-slate-100">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-slate-600">Ledger Nano X</td>
                    <td className="py-2 px-4 border-b border-slate-600">Hardware</td>
                    <td className="py-2 px-4 border-b border-slate-600">Very High</td>
                    <td className="py-2 px-4 border-b border-slate-600">Medium</td>
                    <td className="py-2 px-4 border-b border-slate-600">Yes (via companion apps)</td>
                    <td className="py-2 px-4 border-b border-slate-600">$119-149</td>
                  </tr>
                  <tr className="bg-slate-750/30">
                    <td className="py-2 px-4 border-b border-slate-600">Trezor Model T</td>
                    <td className="py-2 px-4 border-b border-slate-600">Hardware</td>
                    <td className="py-2 px-4 border-b border-slate-600">Very High</td>
                    <td className="py-2 px-4 border-b border-slate-600">Medium</td>
                    <td className="py-2 px-4 border-b border-slate-600">Yes (via companion apps)</td>
                    <td className="py-2 px-4 border-b border-slate-600">$195-249</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-slate-600">MetaMask</td>
                    <td className="py-2 px-4 border-b border-slate-600">Software (Browser/Mobile)</td>
                    <td className="py-2 px-4 border-b border-slate-600">Medium</td>
                    <td className="py-2 px-4 border-b border-slate-600">High</td>
                    <td className="py-2 px-4 border-b border-slate-600">Excellent</td>
                    <td className="py-2 px-4 border-b border-slate-600">Free</td>
                  </tr>
                  <tr className="bg-slate-750/30">
                    <td className="py-2 px-4 border-b border-slate-600">Trust Wallet</td>
                    <td className="py-2 px-4 border-b border-slate-600">Mobile</td>
                    <td className="py-2 px-4 border-b border-slate-600">Medium</td>
                    <td className="py-2 px-4 border-b border-slate-600">Very High</td>
                    <td className="py-2 px-4 border-b border-slate-600">Good</td>
                    <td className="py-2 px-4 border-b border-slate-600">Free</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-slate-600">Argent</td>
                    <td className="py-2 px-4 border-b border-slate-600">Smart Contract (Mobile)</td>
                    <td className="py-2 px-4 border-b border-slate-600">High</td>
                    <td className="py-2 px-4 border-b border-slate-600">High</td>
                    <td className="py-2 px-4 border-b border-slate-600">Good</td>
                    <td className="py-2 px-4 border-b border-slate-600">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Key Features to Consider</CardTitle>
            <CardDescription>Important aspects to evaluate when choosing a wallet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-medium text-emerald-400 mb-2">Security Features</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <span className="font-medium">Private Key Management:</span> How are private keys stored and
                  protected?
                </li>
                <li>
                  <span className="font-medium">Backup and Recovery:</span> What methods are available for recovering
                  access if your device is lost or damaged?
                </li>
                <li>
                  <span className="font-medium">Two-Factor Authentication (2FA):</span> Does the wallet support
                  additional security layers?
                </li>
                <li>
                  <span className="font-medium">Open Source:</span> Can the code be audited by the community for
                  security vulnerabilities?
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-emerald-400 mb-2">Functionality</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <span className="font-medium">DApp Browser/Integration:</span> Can the wallet interact with
                  decentralized applications?
                </li>
                <li>
                  <span className="font-medium">Token Support:</span> Does it support ERC-20 tokens, NFTs (ERC-721), and
                  other token standards?
                </li>
                <li>
                  <span className="font-medium">Swap Features:</span> Can you exchange tokens directly within the
                  wallet?
                </li>
                <li>
                  <span className="font-medium">Staking Support:</span> Does it allow for ETH staking or other
                  yield-generating activities?
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-emerald-400 mb-2">User Experience</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <span className="font-medium">Interface Design:</span> Is the wallet intuitive and easy to navigate?
                </li>
                <li>
                  <span className="font-medium">Transaction Management:</span> How easy is it to send, receive, and
                  track transactions?
                </li>
                <li>
                  <span className="font-medium">Gas Fee Controls:</span> Does it offer options for managing transaction
                  fees?
                </li>
                <li>
                  <span className="font-medium">Multi-Chain Support:</span> Can it handle assets on multiple
                  blockchains?
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Security Best Practices</CardTitle>
            <CardDescription>Essential security measures for all wallet users</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">Regardless of which wallet you choose, follow these security best practices:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <span className="font-medium">Never share your private keys or seed phrase</span> with anyone, under any
                circumstances.
              </li>
              <li>
                <span className="font-medium">Write down your recovery phrase</span> on paper (not digitally) and store
                it in a secure location.
              </li>
              <li>
                <span className="font-medium">Consider using multiple wallets</span> for different purposes (e.g., one
                for daily transactions, another for long-term storage).
              </li>
              <li>
                <span className="font-medium">Verify all transaction details</span> before confirming, including
                recipient address and amount.
              </li>
              <li>
                <span className="font-medium">Keep your devices and software updated</span> to protect against security
                vulnerabilities.
              </li>
              <li>
                <span className="font-medium">Be wary of phishing attempts</span> and always double-check URLs before
                entering wallet information.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-4">
              Choosing the right Ethereum wallet depends on your specific needs, technical comfort level, and use case.
              There is no one-size-fits-all solution—the best wallet for you balances security, convenience, and
              functionality according to your priorities.
            </p>
            <p className="mb-4">
              For maximum security, consider using a combination of wallets: a hardware wallet for long-term storage and
              larger amounts, and a mobile or browser wallet for everyday transactions and DApp interactions.
            </p>
            <p>
              As Ethereum and its ecosystem continue to evolve, wallet technology will advance alongside it, offering
              increasingly user-friendly, secure, and powerful ways to manage your digital assets and interact with
              decentralized applications.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 border-t border-slate-700 pt-6">
          <h3 className="text-xl font-semibold mb-4">Continue Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/learn/ethereum-basics"
              className="p-4 border border-slate-700 rounded hover:bg-slate-700 transition-colors"
            >
              <h4 className="font-medium text-emerald-400">Ethereum Basics</h4>
              <p className="text-sm text-slate-400">Understand the fundamentals of Ethereum blockchain</p>
            </Link>
            <Link
              href="/learn/smart-contracts"
              className="p-4 border border-slate-700 rounded hover:bg-slate-700 transition-colors"
            >
              <h4 className="font-medium text-emerald-400">Smart Contracts</h4>
              <p className="text-sm text-slate-400">Learn how smart contracts power the Ethereum ecosystem</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
