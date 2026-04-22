import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <Link href="/en/about" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to About Us
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Effective Date: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              STRESS FREE FINANCE (hereinafter "we", "us", or "our") values your privacy. This policy explains how we collect, use, store, and protect your personal information.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Identity Information</strong>: Name, address, date of birth, passport/driver's licence details</li>
              <li><strong>Contact Information</strong>: Phone numbers, email addresses, mailing address</li>
              <li><strong>Financial Information</strong>: Income, employment details, assets, liabilities, bank statements</li>
              <li><strong>Credit Information</strong>: Credit reports, credit scores</li>
              <li><strong>Technical Data</strong>: IP address, browser type, access logs (via website analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. How We Use Your Information</h2>
            <p>Your personal information will be used to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Process and assess your loan application</li>
              <li>Communicate with lenders and credit reporting agencies</li>
              <li>Provide personalised financial advice</li>
              <li>Comply with legal obligations (e.g., AML/CTF verification)</li>
              <li>Improve our services (anonymised data only for analysis)</li>
              <li>Communicate loan progress and product updates (you can opt-out anytime)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. How We Protect Your Information</h2>
            <p>We implement strict measures to safeguard your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>All employees sign confidentiality agreements</li>
              <li>Encrypted transmission (SSL/TLS)</li>
              <li>Physical and electronic security measures</li>
              <li>Access restricted to authorised personnel only</li>
              <li>Regular security audits</li>
              <li>Compliance with Privacy Act 1988 and Australian Privacy Principles (APPs)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Who We Share Your Information With</h2>
            <p>We only disclose your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Lenders</strong>: Banks, credit unions, non-bank lenders for loan assessment</li>
              <li><strong>Credit Reporting Bodies</strong>: Equifax, Experian, illion for credit reports</li>
              <li><strong>Third-party Service Providers</strong>: Document management, payment processing (all under confidentiality agreements)</li>
              <li><strong>Legal Requirements</strong>: AML/CTF checks, court orders, regulatory requirements</li>
            </ul>
            <p>We do NOT sell your personal information to third parties for marketing purposes.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Data Retention</h2>
            <p>We retain your personal information no longer than necessary:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Active clients: Full file retained until relationship ends + 7 years (legal requirement)</li>
              <li>Unsuccessful clients: Data anonymised or securely destroyed after 3 years</li>
              <li>Website logs: Retained for 12 months</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Your Rights</h2>
            <p>Under the Privacy Act, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Request access to your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Opt out of certain marketing communications</li>
              <li>Lodge a complaint about our privacy practices (we will investigate promptly)</li>
            </ul>
            <p>To exercise these rights, please contact us using the details below.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. Cookies & Website Analytics</h2>
            <p>Our website uses Google Analytics to understand traffic patterns, collecting only anonymised data. We use necessary cookies to ensure the website functions properly. You may disable cookies via your browser settings, though this may affect website functionality.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites (e.g., banks, government sites). We are not responsible for the privacy practices of these external sites. Please review their own privacy policies.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. Policy Updates</h2>
            <p>We may occasionally update this policy. Material changes will be announced on the website homepage and the "Effective Date" will be updated. Continued use of our services constitutes acceptance of the updated policy.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">10. Contact Us</h2>
            <p>For privacy-related questions or requests, please contact:</p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4 mb-8">
              <p><strong>STRESS FREE FINANCE</strong></p>
              <p>Email: privacy@stressfree.com.au</p>
              <p>Phone: 1300 123 456</p>
              <p>Address: 123 Collins St, Melbourne VIC 3000</p>
            </div>

            <p className="text-sm text-gray-500 mt-12">
              This policy is prepared in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
