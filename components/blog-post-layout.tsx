import type React from "react"
import Link from "next/link"
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react"
import { NewsletterSignup } from "@/components/newsletter-signup"

interface BlogPostLayoutProps {
  title: string
  date: string
  category: string
  readTime: string
  children: React.ReactNode
}

export function BlogPostLayout({ title, date, category, readTime, children }: BlogPostLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/news" className="text-emerald-400 hover:text-emerald-300 flex items-center mb-6">
          <ArrowLeft size={16} className="mr-1" /> Back to News
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded flex items-center">
                <Tag size={12} className="mr-1" /> {category}
              </span>
              <span className="text-slate-400 text-xs flex items-center">
                <Calendar size={12} className="mr-1" /> {date}
              </span>
              <span className="text-slate-400 text-xs flex items-center">
                <Clock size={12} className="mr-1" /> {readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          </header>

          <div className="prose prose-invert max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-800/50 prose-blockquote:p-4 prose-blockquote:rounded-md prose-blockquote:border-l-4 prose-blockquote:not-italic prose-strong:text-slate-200 prose-code:text-emerald-300 prose-code:bg-slate-800 prose-code:rounded prose-code:px-1 prose-li:text-slate-300">
            {children}
          </div>
        </article>

        <div className="mt-12 border-t border-slate-700/50 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2">Share this article</h3>
              <div className="flex gap-2">
                <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full">
                  <Share2 size={16} />
                </button>
                <button className="bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-[#1DA1F2] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </button>
                <button className="bg-[#4267B2]/20 hover:bg-[#4267B2]/30 text-[#4267B2] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 text-[#0A66C2] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <Link
                href="/news"
                className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Subscribe for Updates</h3>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  )
}
