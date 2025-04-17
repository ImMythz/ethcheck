import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EthCheck - Ethereum Wallet Explorer",
  description: "Check any Ethereum wallet balance and transaction history",
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
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen`}>
        {/* Google AdSense Script - Fixed to remove data-nscript attribute issues */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9484338643096775"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {children}
        <Toaster />
      </body>
    </html>
  )
}


import './globals.css'