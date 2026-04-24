import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Loan | STRESS FREE FINANCE",
  description: "Building your dream home? Our construction loans offer progressive drawdowns, interest-only during construction, and seamless conversion to permanent mortgage.",
  keywords: "construction loan, progressive drawdown, building loan, new home construction, melbourne construction finance"
};

export default function ConstructionLoanPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/en/products" className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <HardHat className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Construction Loan</h1>
          </div>
          <p className="text-xl text-amber-100 max-w-2xl">
            Building your dream home? We offer progressive drawdowns, seamless conversion to permanent mortgage, and expert guidance.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Construction Loan?</h2>
              <ul className="space-y-4">
                {[
                  "Progressive drawdowns based on construction milestones",
                  "Automatic conversion to permanent mortgage upon completion",
                  "Support for fixed-price and cost-plus contracts",
                  "Interest-only payments during construction",
                  "Dedicated construction specialist throughout",
                  "Rate lock option to protect against settlement date fluctuations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">Typical Construction Timeline</h3>
              <div className="space-y-4">
                {[
                  { phase: "Pre-approval", time: "1-2 weeks" },
                  { phase: "Builder/Contract Selection", time: "2-4 weeks" },
                  { phase: "Formal Application & Valuation", time: "2-3 weeks" },
                  { phase: "Settlement (First Drawdown)", time: "1 week" },
                  { phase: "Construction Phase (Progress Payments)", time: "6-12 months" },
                  { phase: "Completion & Permanent Mortgage", time: "2-4 weeks" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="font-medium">{item.phase}</span>
                    <span className="text-amber-700 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawdown process */}
          <h2 className="text-3xl font-bold mb-6">Progressive Drawdown Stages</h2>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { num: "1", title: "Base Stage", desc: "Usually 1-2 months after settlement" },
              { num: "2", title: "Frame Stage", desc: "Structural framework completed" },
              { num: "3", title: "Lock-up Stage", desc: "Roof and external walls, weatherproof" },
              { num: "4", title: "Fixing Stage", desc: "Plumbing, electrical, plastering, flooring" },
              { num: "5", title: "Completion", desc: "Final inspection, occupancy permit" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.num}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Featured Image */}
          <div className="container mx-auto px-4 -mt-8 relative z-10">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  <p className="text-amber-800 font-medium">Add construction site or building image</p>
                  <p className="text-sm text-amber-600">Path: /public/images/products/construction-site.jpg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important notes */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-4">Important Notes</h3>
            <ul className="space-y-3">
              {[
                "Construction loans typically require higher down payment (20%+)",
                "Required documents: building contract, specifications, builder's license",
                "Interest-only payments during construction reduce cash flow pressure",
                "Progress inspections recommended before each drawdown",
                "Interest rate may be reset upon conversion to permanent mortgage",
                "Builder must be licensed and insured",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interest Rates Reference */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-bold mb-4 text-center">📊 Construction Loan Rates Reference (April 2026)</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-gray-600 mb-1">New Construction</p>
                    <p className="text-2xl font-bold text-amber-700">6.79% - 7.99%</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-gray-600 mb-1">Renovation / Extension</p>
                    <p className="text-2xl font-bold text-amber-700">7.29% - 8.49%</p>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-3">* Construction rates are higher; depends on project type, LVR, builder's license, and completion timeline</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-gray-600 mb-6">
              Our construction loan specialists will guide you through every stage, ensuring a smooth process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-700 px-8 py-4 text-white font-semibold hover:bg-amber-600"
              >
                <Phone className="w-5 h-5" />
                Call 0412 892 782
              </a>
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-4 text-gray-900 font-semibold hover:bg-gray-50"
              >
                <Mail className="w-5 h-5" />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
