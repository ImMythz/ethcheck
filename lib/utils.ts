import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatEther(wei: string): string {
  try {
    // Convert wei to ether (1 ether = 10^18 wei)
    const weiBigInt = BigInt(wei)
    const etherValue = Number(weiBigInt) / 1e18

    // Format to 4 decimal places
    return etherValue.toFixed(4)
  } catch (error) {
    return "0.0000"
  }
}

export function formatAddress(address: string): string {
  if (!address) return ""
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
