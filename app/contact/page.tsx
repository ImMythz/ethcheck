import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | EthCheck",
  description: "Contact the EthCheck team for support, feedback, or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Contact Us</h1>
        <div className="h-1 w-20 bg-emerald-500 mt-2"></div>
      </div>

      <div className="bg-slate-800 rounded-lg shadow-md p-8 mb-8 border border-slate-700">
        <p className="text-lg mb-6 text-slate-300">
          For any questions, feedback, or support inquiries, please reach out to us at:
        </p>

        <div className="bg-slate-700 p-6 rounded-md text-center mb-6">
          <a
            href="mailto:support@ethcheck.io"
            className="text-xl font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            support@ethcheck.io
          </a>
        </div>

        <p className="mt-6 text-slate-400">We aim to respond to all inquiries within 48 hours during business days.</p>
      </div>

      <div className="border-t border-slate-700 pt-6 mt-8">
        <a href="/" className="text-emerald-400 hover:text-emerald-300 inline-flex items-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  )
}
