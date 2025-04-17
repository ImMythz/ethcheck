// This would typically use a real API like CoinGecko or CoinMarketCap
// For demo purposes, we'll use mock data with realistic values

// Time periods for historical data
export type TimePeriod = "1D" | "5D" | "1M" | "6M" | "YTD" | "1Y" | "5Y" | "Max"

interface PricePoint {
  timestamp: number
  price: number
}

interface MarketData {
  currentPrice: number
  priceChange24h: number
  priceChangePercentage24h: number
  marketCap: number
  marketCapChange24h: number
  volume24h: number
  volumeChange24h: number
  fdv: number
  volMarketCapRatio: number
  totalSupply: number
  circulatingSupply: number
  maxSupply: string // "∞" for infinite
  lastUpdated: number
}

// Generate realistic price data for the given time period
export async function getEthPriceHistory(period: TimePeriod): Promise<PricePoint[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const now = Date.now()
  const points: PricePoint[] = []

  // Base price around $1,580 with realistic fluctuations
  const basePrice = 1580

  // Determine time range and number of points based on period
  let timeRange: number
  let numPoints: number

  switch (period) {
    case "1D":
      timeRange = 24 * 60 * 60 * 1000 // 1 day in ms
      numPoints = 12 // Reduced from 24
      break
    case "5D":
      timeRange = 5 * 24 * 60 * 60 * 1000
      numPoints = 15 // Reduced from 5 * 24
      break
    case "1M":
      timeRange = 30 * 24 * 60 * 60 * 1000
      numPoints = 15 // Reduced from 30
      break
    case "6M":
      timeRange = 180 * 24 * 60 * 60 * 1000
      numPoints = 12 // Reduced from 180
      break
    case "YTD":
      // Approximate YTD as ~120 days for demo
      timeRange = 120 * 24 * 60 * 60 * 1000
      numPoints = 12 // Reduced from 120
      break
    case "1Y":
      timeRange = 365 * 24 * 60 * 60 * 1000
      numPoints = 12 // Reduced from 365
      break
    case "5Y":
      timeRange = 5 * 365 * 24 * 60 * 60 * 1000
      numPoints = 15 // Reduced from 5 * 12
      break
    case "Max":
      // Ethereum launched in 2015, so ~8 years of data
      timeRange = 8 * 365 * 24 * 60 * 60 * 1000
      numPoints = 16 // Reduced from 8 * 12
      break
    default:
      timeRange = 24 * 60 * 60 * 1000
      numPoints = 12
  }

  // Generate data points
  const pointInterval = timeRange / numPoints

  for (let i = 0; i < numPoints; i++) {
    const timestamp = now - (timeRange - i * pointInterval)

    // Create realistic price fluctuations
    // More volatile for shorter periods, more trending for longer periods
    let volatility: number
    let trend: number

    if (period === "1D" || period === "5D") {
      volatility = 10 // Higher volatility for short term
      trend = 0.1 // Small trend
    } else if (period === "1M" || period === "6M" || period === "YTD") {
      volatility = 50
      trend = 0.5
    } else {
      volatility = 200 // Higher range for long term
      trend = 5 // Stronger trend for long term
    }

    // Generate price with some randomness and trend
    const randomFactor = (Math.random() - 0.5) * 2 * volatility
    const trendFactor = (i / numPoints) * trend * (Math.random() > 0.5 ? 1 : -1)
    const price = basePrice + randomFactor + trendFactor

    points.push({
      timestamp,
      price: Math.max(10, Math.round(price * 100) / 100), // Ensure price is positive and rounded to 2 decimals
    })
  }

  return points
}

export async function getEthMarketData(): Promise<MarketData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Generate realistic market data
  const currentPrice = 1583.78
  const priceChange24h = -6.18
  const priceChangePercentage24h = -0.39

  return {
    currentPrice,
    priceChange24h,
    priceChangePercentage24h,
    marketCap: 191.16e9, // $191.16 billion
    marketCapChange24h: -0.39,
    volume24h: 14.51e9, // $14.51 billion
    volumeChange24h: 17.98,
    fdv: 191.15e9, // $191.15 billion
    volMarketCapRatio: 7.93,
    totalSupply: 120.69e6, // 120.69 million ETH
    circulatingSupply: 120.69e6,
    maxSupply: "∞", // Infinity symbol
    lastUpdated: Date.now(),
  }
}
