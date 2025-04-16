"use client"

import { useState } from "react"
import { Copy, ExternalLink, Clock, ArrowDownUp, BarChart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { formatEther, formatAddress, formatDate } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface WalletDetailsProps {
  data: {
    address: string
    balance: string
    transactions: any[]
  }
}

export function WalletDetails({ data }: WalletDetailsProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const copyToClipboard = (text: string, label = "Address") => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
      duration: 2000,
    })
  }

  // Process transaction data for the chart
  const processChartData = () => {
    if (!data.transactions.length) return []

    // Sort transactions by timestamp (oldest first)
    const sortedTransactions = [...data.transactions].sort((a, b) => a.timestamp - b.timestamp)

    // Create running balance data points
    let runningBalance = 0
    const chartData = sortedTransactions.map((tx) => {
      const value = Number(formatEther(tx.value))
      // If the transaction is outgoing (from this wallet), subtract the value
      // If it's incoming (to this wallet), add the value
      if (tx.from === data.address) {
        runningBalance -= value
      } else {
        runningBalance += value
      }

      return {
        date: new Date(tx.timestamp).toLocaleDateString(),
        timestamp: tx.timestamp,
        value: tx.from === data.address ? -value : value,
        balance: Number.parseFloat(runningBalance.toFixed(4)),
      }
    })

    return chartData
  }

  const chartData = processChartData()

  return (
    <div className="mt-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl font-medium text-slate-200">Wallet Details</h2>
          <div className="flex items-center mt-1">
            <span className="text-slate-400 text-sm">{formatAddress(data.address)}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-slate-400 hover:text-white"
              onClick={() => copyToClipboard(data.address)}
            >
              {copied ? "Copied!" : <Copy size={14} />}
            </Button>
            <a
              href={`https://etherscan.io/address/${data.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center ml-2"
            >
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700/50">
          <div className="text-sm text-slate-400">Balance</div>
          <div className="text-xl font-semibold">{formatEther(data.balance)} ETH</div>
        </div>
      </div>

      <Tabs defaultValue="transactions">
        <TabsList className="bg-slate-900/50 border-slate-700 w-full">
          <TabsTrigger value="transactions" className="flex-1 data-[state=active]:bg-slate-800">
            <ArrowDownUp size={16} className="mr-2 hidden sm:inline" />
            Transactions
          </TabsTrigger>
          <TabsTrigger value="history" className="flex-1 data-[state=active]:bg-slate-800">
            <Clock size={16} className="mr-2 hidden sm:inline" />
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="mt-4">
          {data.transactions.length > 0 ? (
            <div className="bg-slate-900/30 rounded-lg border border-slate-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/50 bg-slate-800/50">
                      <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-slate-300">
                        Hash
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-slate-300">
                        Date
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-slate-300">
                        From/To
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-right text-xs sm:text-sm font-medium text-slate-300">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.transactions.map((tx) => (
                      <tr key={tx.hash} className="border-b border-slate-700/30 hover:bg-slate-800/30">
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">
                          <a
                            href={`https://etherscan.io/tx/${tx.hash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 flex items-center"
                          >
                            {formatAddress(tx.hash)}
                            <ExternalLink size={12} className="ml-1" />
                          </a>
                        </td>
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-slate-300">
                          {formatDate(tx.timestamp)}
                        </td>
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">
                          <div
                            className={`flex items-center ${tx.from === data.address ? "text-red-400" : "text-green-400"}`}
                          >
                            {tx.from === data.address ? "To: " : "From: "}
                            <span className="text-slate-300 ml-1">
                              {formatAddress(tx.from === data.address ? tx.to : tx.from)}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 ml-1 text-slate-400 hover:text-white"
                              onClick={() => copyToClipboard(tx.from === data.address ? tx.to : tx.from)}
                            >
                              <Copy size={12} />
                            </Button>
                          </div>
                        </td>
                        <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-right font-medium">
                          <span className={tx.from === data.address ? "text-red-400" : "text-green-400"}>
                            {tx.from === data.address ? "-" : "+"}
                            {formatEther(tx.value)} ETH
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 bg-slate-900/30 rounded-lg border border-slate-700/50">
              No transactions found for this wallet
            </div>
          )}
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <div className="bg-slate-900/30 rounded-lg border border-slate-700/50 p-4 sm:p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-slate-200 mb-2">Balance History</h3>
              <p className="text-slate-400 text-sm">
                This chart shows how your ETH balance has changed over time with deposits and withdrawals.
              </p>
            </div>

            {chartData.length > 0 ? (
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="date" stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fill: "#94a3b8" }}
                      label={{
                        value: "ETH Balance",
                        angle: -90,
                        position: "insideLeft",
                        fill: "#94a3b8",
                        style: { textAnchor: "middle" },
                        offset: -5,
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        borderColor: "#475569",
                        color: "#f8fafc",
                      }}
                      itemStyle={{ color: "#f8fafc" }}
                      labelStyle={{ color: "#94a3b8" }}
                      formatter={(value: number) => [`${value.toFixed(4)} ETH`, "Balance"]}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#colorBalance)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center">
                <BarChart size={48} className="text-slate-600 mb-4" />
                <div className="text-slate-400 text-center">
                  <p className="mb-2">No transaction history available</p>
                  <p className="text-xs text-slate-500">For wallet: {formatAddress(data.address)}</p>
                </div>
              </div>
            )}

            {chartData.length > 0 && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                  <div className="text-xs text-slate-400">Total Incoming</div>
                  <div className="text-lg font-medium text-green-400">
                    +{chartData.reduce((sum, tx) => sum + (tx.value > 0 ? tx.value : 0), 0).toFixed(4)} ETH
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                  <div className="text-xs text-slate-400">Total Outgoing</div>
                  <div className="text-lg font-medium text-red-400">
                    -{Math.abs(chartData.reduce((sum, tx) => sum + (tx.value < 0 ? tx.value : 0), 0)).toFixed(4)} ETH
                  </div>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
