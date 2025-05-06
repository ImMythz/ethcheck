import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | EthCheck",
  description: "Learn about how EthCheck uses cookies and how you can manage your cookie preferences.",
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Cookie Policy</h1>
        <div className="h-1 w-20 bg-emerald-500 mt-2"></div>
      </div>

      <div className="bg-slate-800 rounded-lg shadow-md p-8 mb-8 border border-slate-700">
        <p className="text-sm text-slate-400 mb-6">Last updated: May 6, 2023</p>

        <div className="space-y-6 text-slate-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mt-4">Introduction</h2>
          <p>
            This Cookie Policy explains how EthCheck ("we", "us", or "our") uses cookies and similar technologies to
            recognize you when you visit our website at ethcheck.io ("Website"). It explains what these technologies are
            and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
            as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, EthCheck) are called "first-party cookies". Cookies set by
            parties other than the website owner are called "third-party cookies". Third-party cookies enable
            third-party features or functionality to be provided on or through the website (e.g., advertising,
            interactive content, and analytics). The parties that set these third-party cookies can recognize your
            computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical
            reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary"
            cookies. Other cookies also enable us to track and target the interests of our users to enhance the
            experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and
            other purposes.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">
            The specific types of cookies served through our Website
          </h2>
          <p>
            The specific types of first and third-party cookies served through our Website and the purposes they perform
            are described below:
          </p>

          <h3 className="text-xl font-semibold text-slate-100 mt-6">Essential website cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Website and to use
            some of its features, such as access to secure areas. Because these cookies are strictly necessary to
            deliver the Website, you cannot refuse them without impacting how our Website functions.
          </p>

          <h3 className="text-xl font-semibold text-slate-100 mt-6">Performance and functionality cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our Website but are non-essential to
            their use. However, without these cookies, certain functionality may become unavailable.
          </p>

          <h3 className="text-xl font-semibold text-slate-100 mt-6">Analytics and customization cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our
            Website is being used or how effective our marketing campaigns are, or to help us customize our Website for
            you.
          </p>

          <h3 className="text-xl font-semibold text-slate-100 mt-6">Advertising cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like
            preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for
            advertisers, and in some cases selecting advertisements that are based on your interests.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
            by clicking on the appropriate opt-out links provided below.
          </p>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
            you may still use our Website though your access to some functionality and areas of our Website may be
            restricted. As the means by which you can refuse cookies through your web browser controls vary from browser
            to browser, you should visit your browser's help menu for more information.
          </p>
          <p>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like
            to find out more information, please visit{" "}
            <a
              href="http://www.aboutads.info/choices/"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              http://www.aboutads.info/choices/
            </a>{" "}
            or
            <a
              href="http://www.youronlinechoices.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {" "}
              http://www.youronlinechoices.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">How often will we update this Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-8">Where can you get further information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at
            <a href="mailto:privacy@ethcheck.io" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              {" "}
              privacy@ethcheck.io
            </a>
            .
          </p>
        </div>
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
