import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftRight, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "ETH Converter | EthCheck",
  description: "Convert between ETH, Wei, Gwei, and USD with real-time price data.",
}

export default function EthConverter() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/tools" className="text-emerald-400 hover:text-emerald-300 flex items-center mb-4">
            <ArrowRight size={16} className="mr-1 rotate-180" /> Back to Tools
          </Link>
          <h1 className="text-3xl font-bold mb-2">ETH Converter</h1>
          <p className="text-slate-300">Convert between ETH, Wei, Gwei, and USD with real-time price data.</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowLeftRight className="mr-2 h-5 w-5 text-emerald-400" /> Unit Converter
            </CardTitle>
            <CardDescription>Convert between different Ethereum units and USD</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">From</label>
                <div className="flex mb-4">
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="flex-grow bg-slate-900/50 border border-slate-700 rounded-l-md p-2 text-white"
                  />
                  <select className="bg-slate-800 border border-slate-700 rounded-r-md p-2 text-white border-l-0">
                    <option value="eth">ETH</option>
                    <option value="gwei">Gwei</option>
                    <option value="wei">Wei</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">To</label>
                <div className="flex mb-4">
                  <input
                    type="number"
                    placeholder="Result"
                    className="flex-grow bg-slate-900/50 border border-slate-700 rounded-l-md p-2 text-white"
                    readOnly
                  />
                  <select
                    className="bg-slate-800 border border-slate-700 rounded-r-md p-2 text-white border-l-0"
                    defaultValue="usd"
                  >
                    <option value="eth">ETH</option>
                    <option value="gwei">Gwei</option>
                    <option value="wei">Wei</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition-colors mt-2">
              Convert
            </button>

            <div className="mt-6 bg-slate-900/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Current ETH Price</h3>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">1 ETH =</span>
                <span className="font-medium">$1,583.78 USD</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Price updated: {new Date().toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle>Ethereum Units Explained</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Wei</h3>
                <p className="text-slate-300">
                  Wei is the smallest denomination of Ether. It's named after Wei Dai, a computer scientist and
                  cryptographer. 1 ETH = 10^18 Wei.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Gwei</h3>
                <p className="text-slate-300">
                  Gwei (Gigawei) is commonly used to express gas prices on the Ethereum network. 1 ETH = 10^9 Gwei, and
                  1 Gwei = 10^9 Wei.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-emerald-400 mb-1">Ether (ETH)</h3>
                <p className="text-slate-300">
                  Ether is the main currency unit of Ethereum. When people refer to the price of Ethereum, they're
                  talking about the price of 1 Ether.
                </p>
              </div>

              <div className="bg-slate-900/30 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Conversion Table</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2">Unit</th>
                      <th className="text-left py-2">Wei Value</th>
                      <th className="text-left py-2">Wei</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Wei</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Kwei</td>
                      <td>1,000</td>
                      <td>10^3</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Mwei</td>
                      <td>1,000,000</td>
                      <td>10^6</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Gwei</td>
                      <td>1,000,000,000</td>
                      <td>10^9</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Ether</td>
                      <td>1,000,000,000,000,000,000</td>
                      <td>10^18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
