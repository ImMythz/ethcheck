import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800/50 border-t border-slate-700/50 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium text-slate-200 mb-4">EthCheck</h3>
            <p className="text-slate-400 text-sm">
              A comprehensive Ethereum blockchain explorer providing real-time data, wallet tracking, and market
              analytics.
            </p>
            <div className="mt-4 flex items-center">
              <a
                href="https://github.com/yourusername/ethcheck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-200 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/ethereum-basics" className="text-slate-400 hover:text-emerald-400">
                  Ethereum Basics
                </Link>
              </li>
              <li>
                <Link href="/learn/blockchain-guide" className="text-slate-400 hover:text-emerald-400">
                  Blockchain Guide
                </Link>
              </li>
              <li>
                <Link href="/learn/defi-explained" className="text-slate-400 hover:text-emerald-400">
                  DeFi Explained
                </Link>
              </li>
              <li>
                <Link href="/learn/nft-guide" className="text-slate-400 hover:text-emerald-400">
                  NFT Guide
                </Link>
              </li>
              <li>
                <Link href="/learn/crypto-glossary" className="text-slate-400 hover:text-emerald-400">
                  Crypto Glossary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-200 mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/gas-tracker" className="text-slate-400 hover:text-emerald-400">
                  Gas Tracker
                </Link>
              </li>
              <li>
                <Link href="/tools/eth-converter" className="text-slate-400 hover:text-emerald-400">
                  ETH Converter
                </Link>
              </li>
              <li>
                <Link href="/tools/token-explorer" className="text-slate-400 hover:text-emerald-400">
                  Token Explorer
                </Link>
              </li>
              <li>
                <Link href="/tools/transaction-decoder" className="text-slate-400 hover:text-emerald-400">
                  Transaction Decoder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-200 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-emerald-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-400 hover:text-emerald-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-slate-400 hover:text-emerald-400">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/50 text-center text-sm text-slate-500">
          <p>© {currentYear} EthCheck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
