"use client"

import { useState, useEffect } from "react"
import { getEthMarketData } from "@/lib/ethereum-market"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function EthMarketData() {
  const [marketData, setMarketData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMarketData = async () => {
      setIsLoading(true)
      try {
        const data = await getEthMarketData()
        setMarketData(data)
      } catch (error) {
        console.error("Failed to fetch ETH market data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMarketData()
  }, [])

  if (isLoading) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="animate-pulse text-slate-400 text-center">Loading market data...</div>
        </CardContent>
      </Card>
    )
  }

  if (!marketData) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="text-slate-400 text-center">Failed to load market data</div>
        </CardContent>
      </Card>
    )
  }

  // Format numbers for display
  const formatCurrency = (value: number) => {
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)}B`
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)}M`
    } else {
      return `$${value.toLocaleString()}`
    }
  }

  const formatNumber = (value: number) => {
    if (value >= 1e6) {
      return `${(value / 1e6).toFixed(2)}M`
    } else if (value >= 1e3) {
      return `${(value / 1e3).toFixed(2)}K`
    } else {
      return value.toLocaleString()
    }
  }

  const formatPercent = (value: number) => {
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Ethereum Market Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">Market cap</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} className="text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Total market value of circulating supply</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg font-medium">{formatCurrency(marketData.marketCap)}</div>
            <div className={`text-xs ${marketData.marketCapChange24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {formatPercent(marketData.marketCapChange24h)}
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">Volume (24h)</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} className="text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Trading volume in the last 24 hours</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg font-medium">{formatCurrency(marketData.volume24h)}</div>
            <div className={`text-xs ${marketData.volumeChange24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {formatPercent(marketData.volumeChange24h)}
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">FDV</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} className="text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Fully Diluted Valuation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg font-medium">{formatCurrency(marketData.fdv)}</div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">Vol/Mkt Cap (24h)</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} className="text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Volume to Market Cap ratio</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg font-medium">{marketData.volMarketCapRatio.toFixed(2)}%</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">Total supply</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} className="text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Total amount of coins in existence</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg font-medium">{formatNumber(marketData.totalSupply)} ETH</div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">Circulating supply</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} className="text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Amount of coins in circulation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg font-medium">{formatNumber(marketData.circulatingSupply)} ETH</div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">Max supply</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={14} className="text-slate-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Maximum amount of coins that will ever exist</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-lg font-medium">{marketData.maxSupply}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
