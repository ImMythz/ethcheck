import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EthCheck - Ethereum Wallet Explorer",
  description:
    "Check any Ethereum wallet balance and transaction history, track ETH prices, and access blockchain educational resources.",
  keywords: "ethereum, blockchain, crypto, wallet tracker, eth price, blockchain explorer, cryptocurrency",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9484338643096775" />
      </head>
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen flex flex-col`}>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9484338643096775"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* Simple Analytics - Using the recommended implementation */}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
          data-collect-dnt="true"
        />

        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />

        <Toaster />
      </body>
    </html>
  )
}
