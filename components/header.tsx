"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-slate-800/50 border-b border-slate-700/50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo size={32} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
              EthCheck
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-slate-300 hover:text-white">
              Home
            </Link>
            <Link href="/learn" className="text-slate-300 hover:text-white">
              Learn
            </Link>
            <Link href="/tools" className="text-slate-300 hover:text-white">
              Tools
            </Link>
            <Link href="/news" className="text-slate-300 hover:text-white">
              News
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-slate-700/50">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="block text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="block text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="block text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-slate-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
