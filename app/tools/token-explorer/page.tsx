"use client"

import { useState } from "react"
import { ethers } from "ethers"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import GoogleAds from "@/components/google-ads"

// ERC-20 ABI for token interaction
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
]

export default function TokenExplorer() {
  const [tokenAddress, setTokenAddress] = useState("")
  const [tokenData, setTokenData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const fetchTokenData = async () => {
    if (!tokenAddress || !ethers.utils.isAddress(tokenAddress)) {
      setError("Please enter a valid Ethereum token address")
      return
    }

    setLoading(true)
    setError("")
    setTokenData(null)

    try {
      // Connect to Ethereum network
      const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/demo")

      // Create contract instance
      const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider)

      // Fetch token data
      const [name, symbol, decimals, totalSupply] = await Promise.all([
        tokenContract.name().catch(() => "Unknown"),
        tokenContract.symbol().catch(() => "Unknown"),
        tokenContract.decimals().catch(() => 18),
        tokenContract.totalSupply().catch(() => "0"),
      ])

      // Format total supply with decimals
      const formattedSupply = ethers.utils.formatUnits(totalSupply, decimals)

      setTokenData({
        name,
        symbol,
        decimals,
        totalSupply: formattedSupply,
        address: tokenAddress,
      })

      toast({
        title: "Token data loaded",
        description: `Successfully loaded data for ${name} (${symbol})`,
      })
    } catch (err) {
      console.error("Error fetching token data:", err)
      setError("Failed to fetch token data. Make sure this is a valid ERC-20 token.")
      toast({
        title: "Error",
        description: "Failed to fetch token data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-800 min-h-screen text-slate-300">
      <h1 className="text-3xl font-bold mb-2 text-emerald-400">Ethereum Token Explorer</h1>
      <div className="h-1 w-24 bg-emerald-500 mb-6"></div>
      <p className="text-slate-300 mb-8">
        Explore ERC-20 tokens on the Ethereum blockchain. Enter a token contract address to view its details.
      </p>

      <GoogleAds />

      <Card className="mb-8 bg-slate-900 border-slate-700">
        <CardHeader>
          <CardTitle>Token Explorer</CardTitle>
          <CardDescription>Enter an ERC-20 token address to view its details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Token Address (0x...)"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              className="flex-1"
            />
            <Button onClick={fetchTokenData} disabled={loading} className="whitespace-nowrap">
              {loading ? "Loading..." : "Explore Token"}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {loading ? (
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          </CardContent>
        </Card>
      ) : tokenData ? (
        <Card>
          <CardHeader>
            <CardTitle>
              {tokenData.name} ({tokenData.symbol})
            </CardTitle>
            <CardDescription>Token Details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-slate-400">Token Name</h3>
                <p className="text-lg font-semibold">{tokenData.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400">Symbol</h3>
                <p className="text-lg font-semibold">{tokenData.symbol}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400">Decimals</h3>
                <p className="text-lg font-semibold">{tokenData.decimals}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400">Total Supply</h3>
                <p className="text-lg font-semibold">{tokenData.totalSupply}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-sm font-medium text-slate-400">Contract Address</h3>
                <p className="text-lg font-semibold break-all">{tokenData.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Popular ERC-20 Tokens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Tether USD", symbol: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
            { name: "USD Coin", symbol: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
            { name: "BNB", symbol: "BNB", address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52" },
            { name: "Chainlink", symbol: "LINK", address: "0x514910771AF9Ca656af840dff83E8264EcF986CA" },
            { name: "Uniswap", symbol: "UNI", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" },
            { name: "Shiba Inu", symbol: "SHIB", address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE" },
          ].map((token, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow cursor-pointer bg-slate-900 border-slate-700"
              onClick={() => {
                setTokenAddress(token.address)
                fetchTokenData()
              }}
            >
              <CardHeader>
                <CardTitle>{token.name}</CardTitle>
                <CardDescription>{token.symbol}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400 truncate">{token.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
