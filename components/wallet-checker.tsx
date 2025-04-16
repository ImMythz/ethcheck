"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WalletDetails } from "@/components/wallet-details"
import { checkWalletBalance, getWalletHistory } from "@/lib/ethereum"

export function WalletChecker() {
  const [address, setAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [walletData, setWalletData] = useState<{
    address: string
    balance: string
    transactions: any[]
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!address) return

    try {
      setIsLoading(true)
      setError(null)

      // Validate Ethereum address format
      if (!address.match(/^0x[a-fA-F0-9]{40}$/)) {
        throw new Error("Invalid Ethereum address format")
      }

      const balance = await checkWalletBalance(address)
      const transactions = await getWalletHistory(address)

      setWalletData({
        address,
        balance,
        transactions,
      })
    } catch (err: any) {
      setError(err.message || "Failed to fetch wallet data")
      setWalletData(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-slate-700">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <Input
              type="text"
              placeholder="Enter Ethereum wallet address (0x...)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="pl-10 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-400 h-12"
            />
          </div>
          <Button type="submit" disabled={isLoading || !address} className="bg-emerald-600 hover:bg-emerald-700 h-12">
            {isLoading ? "Checking..." : "Check Wallet"}
          </Button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">{error}</div>
        )}

        {walletData && <WalletDetails data={walletData} />}
      </div>
    </div>
  )
}
