"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      // Reset form after submission
      setEmail("")
    }, 1000)
  }

  return (
    <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 text-center">
      <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
      <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
        Subscribe to our newsletter to receive the latest Ethereum news, tutorials, and insights directly in your inbox.
      </p>

      {isSubmitted ? (
        <div className="max-w-md mx-auto bg-emerald-900/20 border border-emerald-800/30 rounded-md p-4 flex items-center justify-center">
          <CheckCircle className="text-emerald-400 mr-2" size={20} />
          <p className="text-emerald-300">Thank you for subscribing to our newsletter!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md transition-colors disabled:opacity-70"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      )}

      <p className="text-xs text-slate-400 mt-3">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  )
}
