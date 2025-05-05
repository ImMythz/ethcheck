import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | EthCheck",
  description: "Privacy Policy for EthCheck - Ethereum Wallet Explorer",
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-xl p-6 shadow-xl border border-slate-700">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to EthCheck ("we," "our," or "us"). We are committed to protecting your privacy and personal data.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
            our website ethcheck.io, including any other media form, media channel, mobile website, or mobile
            application related or connected thereto (collectively, the "Site").
          </p>

          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please
            do not access the site.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Personal Data</h3>
          <p>
            When you use our Site, we may collect certain personally identifiable information, including but not limited
            to:
          </p>
          <ul>
            <li>Ethereum wallet addresses you enter for checking</li>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Time zone setting and location</li>
            <li>Browser plug-in types and versions</li>
            <li>Operating system and platform</li>
            <li>Other technology on the devices you use to access our Site</li>
          </ul>

          <h3>2.2 Usage Data</h3>
          <p>
            We may also collect information on how the Site is accessed and used ("Usage Data"). This Usage Data may
            include information such as your computer's Internet Protocol address (e.g., IP address), browser type,
            browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on
            those pages, unique device identifiers, and other diagnostic data.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our Site</li>
            <li>Improve, personalize, and expand our Site</li>
            <li>Understand and analyze how you use our Site</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you for customer service, to provide you with updates and other information relating to
              the Site
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
            <li>Display relevant advertising</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Site and hold certain
            information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            Cookies are sent to your browser from a website and stored on your device.
          </p>

          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our Site.
          </p>

          <h2>5. Google AdSense</h2>
          <p>
            We use Google AdSense to serve ads on our Site. Google AdSense uses cookies to serve ads based on a user's
            prior visits to our website or other websites. Google's use of advertising cookies enables it and its
            partners to serve ads to our users based on their visit to our Site and/or other websites on the Internet.
          </p>

          <p>
            Users may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" className="text-emerald-400 hover:text-emerald-300">
              Google Ads Settings
            </a>
            .
          </p>

          <h2>6. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, please also remember that we cannot guarantee that
            the internet itself is 100% secure.
          </p>

          <h2>7. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
          <ul>
            <li>The right to access, update or delete the information we have on you</li>
            <li>The right of rectification</li>
            <li>The right to object</li>
            <li>The right of restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: privacy@ethcheck.io</p>
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
