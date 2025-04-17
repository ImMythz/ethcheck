"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { getEthPriceHistory, type TimePeriod } from "@/lib/ethereum-market"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, ArrowDown } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function EthPriceChart() {
  const [period, setPeriod] = useState<TimePeriod>("1D")
  const [priceData, setPriceData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const fetchPriceData = async () => {
      setIsLoading(true)
      try {
        const data = await getEthPriceHistory(period)

        // Format data for the chart
        let formattedData = data.map((point) => ({
          timestamp: point.timestamp,
          date: new Date(point.timestamp).toLocaleString(),
          price: point.price,
        }))

        // Reduce data points for mobile view
        if (isMobile && formattedData.length > 20) {
          const step = Math.ceil(formattedData.length / 20)
          formattedData = formattedData.filter((_, index) => index % step === 0)
        }

        setPriceData(formattedData)
      } catch (error) {
        console.error("Failed to fetch ETH price data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPriceData()
  }, [period, isMobile])

  // Calculate price change
  const firstPrice = priceData[0]?.price || 0
  const lastPrice = priceData[priceData.length - 1]?.price || 0
  const priceChange = lastPrice - firstPrice
  const priceChangePercent = firstPrice ? (priceChange / firstPrice) * 100 : 0
  const isPriceUp = priceChange >= 0

  // Format for display
  const formattedPrice = lastPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const formattedChange = priceChange.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "always",
  })

  const formattedPercent = priceChangePercent.toFixed(2)

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <div className="text-sm text-slate-400">Ethereum Price</div>
            <CardTitle className="text-2xl sm:text-3xl font-bold mt-1">{formattedPrice}</CardTitle>
          </div>

          <div className={`flex items-center mt-2 sm:mt-0 ${isPriceUp ? "text-green-500" : "text-red-500"}`}>
            {isPriceUp ? <ArrowUp size={16} className="mr-1" /> : <ArrowDown size={16} className="mr-1" />}
            <span className="font-medium">{formattedChange}</span>
            <span className="ml-1">
              ({isPriceUp ? "+" : ""}
              {formattedPercent}%)
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue={period} onValueChange={(value) => setPeriod(value as TimePeriod)} className="mb-4">
          <TabsList className="bg-slate-900/50 border-slate-700 grid grid-cols-4 sm:grid-cols-8">
            <TabsTrigger value="1D">1D</TabsTrigger>
            <TabsTrigger value="5D">5D</TabsTrigger>
            <TabsTrigger value="1M">1M</TabsTrigger>
            <TabsTrigger value="6M">6M</TabsTrigger>
            <TabsTrigger value="YTD">YTD</TabsTrigger>
            <TabsTrigger value="1Y">1Y</TabsTrigger>
            <TabsTrigger value="5Y">5Y</TabsTrigger>
            <TabsTrigger value="Max">Max</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="h-64 w-full">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <div className="animate-pulse text-slate-400">Loading price data...</div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(timestamp) => {
                    const date = new Date(timestamp)
                    // Different format based on period
                    if (period === "1D") {
                      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    } else if (period === "5D" || period === "1M") {
                      return date.toLocaleDateString([], { month: "short", day: "numeric" })
                    } else {
                      return date.toLocaleDateString([], { month: "short", year: "2-digit" })
                    }
                  }}
                  stroke="#94a3b8"
                  tick={{ fill: "#94a3b8" }}
                />
                <YAxis
                  domain={["auto", "auto"]}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                  stroke="#94a3b8"
                  tick={{ fill: "#94a3b8" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    borderColor: "#475569",
                    color: "#f8fafc",
                  }}
                  labelFormatter={(value) => new Date(value).toLocaleString()}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "Price"]}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke={isPriceUp ? "#10b981" : "#ef4444"}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
