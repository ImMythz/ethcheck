"use client"

import { useState } from "react"
import { ethers } from "ethers"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import GoogleAds from "@/components/google-ads"

export default function TransactionDecoder() {
  const [txHash, setTxHash] = useState("")
  const [txData, setTxData] = useState("")
  const [abiInput, setAbiInput] = useState("")
  const [decodedData, setDecodedData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const fetchTransactionData = async () => {
    if (!txHash || !txHash.startsWith("0x") || txHash.length !== 66) {
      setError("Please enter a valid Ethereum transaction hash")
      return
    }

    setLoading(true)
    setError("")
    setDecodedData(null)
    setTxData("")
    setAbiInput("")

    try {
      // Connect to Ethereum network
      const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/demo")

      // Fetch transaction
      const tx = await provider.getTransaction(txHash)

      if (!tx) {
        throw new Error("Transaction not found")
      }

      setTxData(tx.data)

      toast({
        title: "Transaction data loaded",
        description: "Transaction data has been loaded. You can now decode it with an ABI.",
      })
    } catch (err) {
      console.error("Error fetching transaction:", err)
      setError("Failed to fetch transaction data. Please check the transaction hash.")
      toast({
        title: "Error",
        description: "Failed to fetch transaction data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const decodeTransactionData = () => {
    if (!txData || !txData.startsWith("0x")) {
      setError("Please fetch a valid transaction first")
      return
    }

    if (!abiInput.trim()) {
      setError("Please enter a contract ABI")
      return
    }

    setLoading(true)
    setError("")
    setDecodedData(null)

    try {
      // Parse ABI
      let abi
      try {
        abi = JSON.parse(abiInput)
      } catch (e) {
        throw new Error("Invalid ABI format. Please provide a valid JSON ABI.")
      }

      // Create interface from ABI
      const iface = new ethers.utils.Interface(abi)

      // Decode function data
      const decoded = iface.parseTransaction({ data: txData })

      if (!decoded) {
        throw new Error("Could not decode transaction with the provided ABI")
      }

      // Format decoded data
      const formattedArgs = {}
      decoded.args.forEach((arg, index) => {
        const paramName = decoded.functionFragment.inputs[index]?.name || `param${index}`
        formattedArgs[paramName] = arg.toString()
      })

      setDecodedData({
        name: decoded.name,
        signature: decoded.signature,
        sighash: decoded.sighash,
        args: formattedArgs,
      })

      toast({
        title: "Transaction decoded",
        description: `Successfully decoded function: ${decoded.name}`,
      })
    } catch (err) {
      console.error("Error decoding transaction:", err)
      setError(err.message || "Failed to decode transaction data")
      toast({
        title: "Error",
        description: "Failed to decode transaction",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleManualInput = (data: string) => {
    if (!data.startsWith("0x")) {
      data = "0x" + data
    }
    setTxData(data)
    setTxHash("")
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-800 min-h-screen text-slate-300">
      <h1 className="text-3xl font-bold mb-2 text-emerald-400">Ethereum Transaction Decoder</h1>
      <div className="h-1 w-24 bg-emerald-500 mb-6"></div>
      <p className="text-slate-300 mb-8">
        Decode Ethereum transaction data to understand the function calls and parameters. Enter a transaction hash or
        paste transaction data directly.
      </p>

      <GoogleAds />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="mb-8 bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle>Transaction Data</CardTitle>
              <CardDescription>Enter a transaction hash or paste transaction data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    placeholder="Transaction Hash (0x...)"
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={fetchTransactionData} disabled={loading} className="whitespace-nowrap">
                    {loading ? "Loading..." : "Fetch Transaction"}
                  </Button>
                </div>

                <div className="text-center text-slate-400 text-sm">OR</div>

                <div>
                  <Textarea
                    placeholder="Paste transaction data (0x...)"
                    value={txData}
                    onChange={(e) => handleManualInput(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle>Contract ABI</CardTitle>
              <CardDescription>Paste the contract ABI to decode the transaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Paste contract ABI (JSON format)"
                  value={abiInput}
                  onChange={(e) => setAbiInput(e.target.value)}
                  className="min-h-[200px]"
                />
                <Button onClick={decodeTransactionData} disabled={loading || !txData} className="w-full">
                  {loading ? "Decoding..." : "Decode Transaction"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle>Decoded Transaction</CardTitle>
              <CardDescription>View the decoded function call and parameters</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                </div>
              ) : decodedData ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-400">Function Name</h3>
                    <p className="text-lg font-semibold">{decodedData.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-400">Function Signature</h3>
                    <p className="text-lg font-mono break-all">{decodedData.signature}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-400">Function Selector</h3>
                    <p className="text-lg font-mono">{decodedData.sighash}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-400">Parameters</h3>
                    {Object.entries(decodedData.args).length > 0 ? (
                      <div className="mt-2 space-y-2">
                        {Object.entries(decodedData.args).map(([key, value], index) => (
                          <div key={index} className="border-b border-slate-700 pb-2">
                            <span className="font-medium">{key}: </span>
                            <span className="font-mono break-all">{value as string}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No parameters</p>
                    )}
                  </div>
                </div>
              ) : txData ? (
                <div className="text-center py-8">
                  <p className="text-slate-400">
                    Enter a contract ABI and click "Decode Transaction" to see the decoded data
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-slate-400">
                    No transaction data to decode. Enter a transaction hash or paste transaction data.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Common ABIs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "ERC-20 Token", description: "Standard token interface" },
                { name: "ERC-721 NFT", description: "Non-fungible token standard" },
                { name: "Uniswap V2 Router", description: "DEX router functions" },
                { name: "Uniswap V3 Router", description: "Advanced DEX router" },
              ].map((abiTemplate, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer bg-slate-900 border-slate-700"
                  onClick={() => {
                    // In a real app, you would load the actual ABI here
                    setAbiInput(
                      JSON.stringify([
                        "function transfer(address to, uint256 amount)",
                        "function approve(address spender, uint256 amount)",
                        "function transferFrom(address from, address to, uint256 amount)",
                        "function balanceOf(address account) view returns (uint256)",
                        "function allowance(address owner, address spender) view returns (uint256)",
                      ]),
                    )
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-base">{abiTemplate.name}</CardTitle>
                    <CardDescription>{abiTemplate.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
