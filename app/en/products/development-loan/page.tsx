import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone, Mail, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Development Loan | STRESS FREE FINANCE",
  description: "Development loans - free service, 100+ lenders. Land subdivision, residential/commercial projects. Progress drawdowns, expert guidance.",
  keywords: "development loan, land development, project financing, progress payment, australian development finance, free mortgage broker"
};

export default function DevelopmentLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/en/products" className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Development Loan</h1>
          <p className="text-xl text-amber-100 max-w-2xl">
            Funding for land subdivision and residential/commercial development projects. Expert guidance throughout.
          </p>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Promise to You</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "No Cost to You",
                desc: "Our development finance service is completely free. We are paid by the lenders, not by you.",
                icon: "🆓"
              },
              {
                title: "Specialist Access",
                desc: "We access 100+ lenders, including those that specialize in development lending, to find the right fit.",
                icon: "🏦"
              },
              {
                title: "Your Interest First",
                desc: "We don't favour any lender. We recommend the best solution for your specific project and risk profile.",
                icon: "⚖️"
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/products/development-site.jpg"
            alt="Development Site - Development Loan"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Development Finance Experts</h3>
              <p className="text-gray-600 leading-relaxed">
                10+ years in development lending. We understand subdivision, townhouse, apartment, and commercial projects.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Pre-Approval</h3>
              <p className="text-gray-600 leading-relaxed">
                We know timing matters in development. Fast-tracked pre-approval process to get your project moving.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed">
                A dedicated development specialist will manage your file from application through to final settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-bold mb-4">Progress Drawdowns</h3>
              <ul className="space-y-3">
                {[
                  "Funds released based on construction milestones",
                  "Typically 5-6 stages (base, frame, lock-up, fixing, completion)",
                  "Each drawdown requires progress inspection",
                  "Interest-only during construction reduces cash flow pressure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-bold mb-4">Conversion to Permanent</h3>
              <ul className="space-y-3">
                {[
                  "Automatically converts to standard mortgage upon completion",
                  "Interest rate resets to market rates at conversion",
                  "Choose P&I or interest-only going forward",
                  "If selling, can pay out at settlement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-900">Important Notes</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Typically requires 20-30% equity or deposit</li>
              <li>• Required documents: development plans, building contract, budget, builder's license</li>
              <li>• Developer must hold proper licenses and insurance</li>
              <li>• Progress inspections are mandatory before each drawdown</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interest Rates Reference */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
            <h3 className="text-xl font-bold mb-4 text-center">📊 Development Loan Rates Reference (April 2026)</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-gray-600 mb-1">Land Subdivision</p>
                <p className="text-2xl font-bold text-amber-700">6.99% - 8.29%</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-gray-600 mb-1">Residential Construction</p>
                <p className="text-2xl font-bold text-amber-700">6.79% - 7.99%</p>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">* Development rates are higher; depends on project size, location, builder's license, and LVR</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Development?</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8">
            Free, no-obligation consultation. Our development specialists will guide you through every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0412892782"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-amber-800 font-semibold hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              Call 0412 892 782
            </a>
            <a
              href="/en/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-amber-800"
            >
              <Mail className="w-5 h-5" />
              Book Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
