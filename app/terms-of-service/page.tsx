import Link from "next/link"

export const metadata = {
  title: "Terms of Service | EthCheck",
  description: "Terms of Service for EthCheck - Ethereum Wallet Explorer",
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-xl p-6 shadow-xl border border-slate-700">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using EthCheck at ethcheck.io, you agree to be bound by these Terms of Service and all
            applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using
            or accessing this site.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on EthCheck's website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you
            may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on EthCheck's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by
            EthCheck at any time.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on EthCheck's website are provided "as is". EthCheck makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties, including without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further, EthCheck does not warrant or make any
            representations concerning the accuracy, likely results, or reliability of the use of the materials on its
            website or otherwise relating to such materials or on any sites linked to this site.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall EthCheck or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on EthCheck's website, even if EthCheck or a EthCheck authorized representative has been
            notified orally or in writing of the possibility of such damage.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on EthCheck's website could include technical, typographical, or photographic
            errors. EthCheck does not warrant that any of the materials on its website are accurate, complete, or
            current. EthCheck may make changes to the materials contained on its website at any time without notice.
            However, EthCheck does not make any commitment to update the materials.
          </p>

          <h2>6. Links</h2>
          <p>
            EthCheck has not reviewed all of the sites linked to its website and is not responsible for the contents of
            any such linked site. The inclusion of any link does not imply endorsement by EthCheck of the site. Use of
            any such linked website is at the user's own risk.
          </p>

          <h2>7. Modifications</h2>
          <p>
            EthCheck may revise these terms of service for its website at any time without notice. By using this
            website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
            submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p>Email: terms@ethcheck.io</p>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
