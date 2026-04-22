import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <Link href="/en/about" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to About Us
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="text-gray-600 mt-2">Effective Date: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              Welcome to STRESS FREE FINANCE. By using our website and consulting services, you agree to the following terms and conditions.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. Our Services</h2>
            <p>We provide mortgage broking and financial advisory services, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Loan assessment and pre-approval</li>
              <li>Comparison and recommendation of loan products</li>
              <li>Assistance with loan applications</li>
              <li>Communication and follow-up with lenders</li>
              <li>Financial advice (within our authorised scope)</li>
            </ul>
            <p>We are not a lender; we act as your agent and advisor. Final loan approval rests with the lending institution.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. Client Responsibilities</h2>
            <p>To ensure we can provide you with the best service, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide truthful, accurate, and complete personal and financial information</li>
              <li>Respond promptly to our information requests to avoid delays</li>
              <li>Independently verify any advice before making financial decisions</li>
              <li>Only accept loan products if you agree to the terms</li>
              <li>Pay applicable fees (if any)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. Fees & Commissions</h2>
            <p>
              <strong>Consultation Fees</strong>: Initial consultation is free. Fees for ongoing services will be confirmed in writing beforehand.
            </p>
            <p>
              <strong>Commissions</strong>: We typically receive commissions from lenders (residual commissions). This does not increase your loan cost, as lenders embed these costs in their pricing. We commit to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Selecting the most suitable product for you, not the highest commission</li>
              <li>Full transparency on commission ranges (typically 0.5% - 1% of loan amount)</li>
              <li>Providing our Commission Arrangement document upon request</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Intellectual Property</h2>
            <p>All content on this website (text, logos, design, software) is the property of STRESS FREE FINANCE or third-party licensors. You may access and use this content for personal, non-commercial purposes only. Reproduction, modification, distribution, or commercial use is prohibited without our written consent.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Disclaimer</h2>
            <p>
              <strong>General Advice</strong>: The information we provide is general in nature and not personal financial advice. You should consult an independent professional before making any financial decision.
            </p>
            <p>
              <strong>No Guarantees</strong>: We strive for accuracy but cannot guarantee all information is error-free. Loan products, interest rates, and terms can change at any time. We do not guarantee any particular rate or approval.
            </p>
            <p>
              <strong>Indirect Losses</strong>: We are not liable for any indirect or consequential losses (e.g., loss of profit, data loss).
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Privacy Protection</h2>
            <p>We comply with the Privacy Act 1988 and Australian Privacy Principles. For details on how we handle your personal information, see our <Link href="/en/legal/privacy" className="text-primary-700 hover:underline">Privacy Policy</Link>.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. Dispute Resolution</h2>
            <p>If you have a complaint about our services, please first contact our complaints department (complaints@stressfree.com.au). We will aim to resolve it within 30 days. If unsatisfied, you may take your complaint to AFCA (Australian Financial Complaints Authority) for free external dispute resolution.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. Changes to Terms</h2>
            <p>We may update these terms occasionally. Material changes will be announced on the website. Continued use of our services after such changes constitutes acceptance of the updated terms.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. Governing Law</h2>
            <p>These terms are governed by the law of the State of Victoria, Australia. Any disputes will be resolved in the courts of Victoria.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">10. Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-xl mt-4">
              <p><strong>STRESS FREE FINANCE</strong></p>
              <p>Email: info@stressfree.com.au</p>
              <p>Phone: 0412 892 782</p>
              <p>Address: 123 Collins St, Melbourne VIC 3000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
