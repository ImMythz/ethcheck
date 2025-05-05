import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FuelIcon as GasPump, Clock, ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Ethereum Gas Tracker | EthCheck",
  description: "Monitor real-time Ethereum gas prices and get alerts when gas fees are low.",
}

export default function GasTracker() {
  // Mock gas data
  const gasData = {
    current: {
      low: 25,
      average: 32,
      high: 45,
      rapid: 60,
    },
    baseFee: 28.5,
    trend: "decreasing", // "increasing", "decreasing", or "stable"
    updated: new Date().toLocaleTimeString(),
  }

  // Gas price in Gwei to USD conversion (assuming 1 ETH = $1800)
  const gweiToUsd = (gwei: number, gasLimit = 21000) => {
    const ethPrice = 1800 // USD
    const ethCost = (gwei * gasLimit) / 1e9
    return (ethCost * ethPrice).toFixed(2)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/tools" className="text-emerald-400 hover:text-emerald-300 flex items-center mb-4">
            <ArrowRight size={16} className="mr-1 rotate-180" /> Back to Tools
          </Link>
          <h1 className="text-3xl font-bold mb-2">Ethereum Gas Tracker</h1>
          <p className="text-slate-300">Monitor real-time Ethereum gas prices and optimize your transaction timing.</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Current Gas Prices</CardTitle>
              <div className="flex items-center text-sm text-slate-400">
                <Clock size={14} className="mr-1" /> Updated: {gasData.updated}
              </div>
            </div>
            <CardDescription>
              Base Fee: {gasData.baseFee} Gwei{" "}
              {gasData.trend === "decreasing" ? (
                <span className="text-green-500 inline-flex items-center">
                  <ArrowDown size={14} className="ml-1" /> Decreasing
                </span>
              ) : gasData.trend === "increasing" ? (
                <span className="text-red-500 inline-flex items-center">
                  <ArrowDown size={14} className="ml-1 rotate-180" /> Increasing
                </span>
              ) : (
                <span className="text-slate-400">Stable</span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-400">Low</div>
                  <GasPump size={16} className="text-emerald-500" />
                </div>
                <div className="text-2xl font-medium">{gasData.current.low} Gwei</div>
                <div className="text-xs text-slate-400">≈ ${gweiToUsd(gasData.current.low)}</div>
                <div className="mt-2 text-xs">
                  <span className="text-slate-300">~5 min</span>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-400">Average</div>
                  <GasPump size={16} className="text-blue-500" />
                </div>
                <div className="text-2xl font-medium">{gasData.current.average} Gwei</div>
                <div className="text-xs text-slate-400">≈ ${gweiToUsd(gasData.current.average)}</div>
                <div className="mt-2 text-xs">
                  <span className="text-slate-300">~2 min</span>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-400">High</div>
                  <GasPump size={16} className="text-yellow-500" />
                </div>
                <div className="text-2xl font-medium">{gasData.current.high} Gwei</div>
                <div className="text-xs text-slate-400">≈ ${gweiToUsd(gasData.current.high)}</div>
                <div className="mt-2 text-xs">
                  <span className="text-slate-300">~30 sec</span>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-400">Rapid</div>
                  <GasPump size={16} className="text-red-500" />
                </div>
                <div className="text-2xl font-medium">{gasData.current.rapid} Gwei</div>
                <div className="text-xs text-slate-400">≈ ${gweiToUsd(gasData.current.rapid)}</div>
                <div className="mt-2 text-xs">
                  <span className="text-slate-300">~15 sec</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-slate-900/30 p-4 rounded-lg border border-slate-700/30">
              <h3 className="text-lg font-medium mb-2">Gas Price Estimator</h3>
              <p className="text-sm text-slate-400 mb-4">
                Calculate the cost of your transaction based on current gas prices and estimated gas limit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Gas Limit</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-white">
                    <option value="21000">21,000 - ETH Transfer</option>
                    <option value="65000">65,000 - ERC-20 Transfer</option>
                    <option value="100000">100,000 - Simple Contract</option>
                    <option value="200000">200,000 - Complex Contract</option>
                    <option value="custom">Custom Value</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Gas Price (Gwei)</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-white">
                    <option value={gasData.current.low}>Low - {gasData.current.low} Gwei</option>
                    <option value={gasData.current.average} selected>
                      Average - {gasData.current.average} Gwei
                    </option>
                    <option value={gasData.current.high}>High - {gasData.current.high} Gwei</option>
                    <option value={gasData.current.rapid}>Rapid - {gasData.current.rapid} Gwei</option>
                    <option value="custom">Custom Value</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-800 rounded-md">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Estimated Cost:</span>
                  <span className="font-medium">${gweiToUsd(gasData.current.average, 65000)}</span>
                </div>
                <div className="flex justify-between items-center mt-1 text-sm text-slate-400">
                  <span>Gas Fee:</span>
                  <span>0.00208 ETH</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Gas Price History</CardTitle>
            <CardDescription>Gas prices over the last 24 hours. Data updates every 15 minutes.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-slate-900/30 rounded-lg border border-slate-700/30">
              <p className="text-slate-400">Gas price chart coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle>Gas Price Alerts</CardTitle>
            <CardDescription>Get notified when gas prices drop below your target.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/30">
              <p className="text-slate-300 mb-4">
                Set up alerts to be notified when Ethereum gas prices drop below your specified threshold.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Alert Threshold (Gwei)</label>
                  <input
                    type="number"
                    placeholder="e.g., 20"
                    className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Notification Method</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-white">
                    <option value="email">Email</option>
                    <option value="browser">Browser</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-white"
                />
              </div>

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
                Set Alert
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
