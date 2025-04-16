// This is a mock implementation. In a real app, you would use a library like ethers.js
// or web3.js to interact with the Ethereum blockchain, or use an API service like Etherscan.

export async function checkWalletBalance(address: string): Promise<string> {
  // In a real implementation, this would call an Ethereum node or API
  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

  // Return a random balance between 0 and 10 ETH (in wei)
  const randomBalance = Math.random() * 10
  const balanceInWei = BigInt(Math.floor(randomBalance * 1e18))

  return balanceInWei.toString()
}

export async function getWalletHistory(address: string): Promise<any[]> {
  // In a real implementation, this would call an Ethereum node or API
  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate API delay

  const mockTransactions = []
  const now = Date.now()

  // Generate 10 mock transactions
  for (let i = 0; i < 10; i++) {
    const isOutgoing = Math.random() > 0.5
    const timestamp = now - i * 86400000 * Math.random() * 5 // Random time in the past 5 days
    const value = BigInt(Math.floor(Math.random() * 1e18)) // Random value up to 1 ETH

    mockTransactions.push({
      hash: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`,
      timestamp,
      from: isOutgoing
        ? address
        : `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`,
      to: isOutgoing
        ? `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`
        : address,
      value: value.toString(),
      gas: "21000",
      gasPrice: "20000000000",
    })
  }

  return mockTransactions
}
