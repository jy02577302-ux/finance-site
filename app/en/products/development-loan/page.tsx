import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Development Loan | STRESS FREE FINANCE",
  description: "Development loans - free service, 100+ lenders. Land subdivision, residential/commercial projects. Progress drawdowns, convert to permanent.",
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
          <div className="flex items-center gap-3 mb-4">
            <HardHat className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Development Loan</h1>
          </div>
          <p className="text-xl text-amber-100 max-w-2xl">
            Funding for land subdivision, residential and commercial development projects with progress drawdowns.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Development Loan?</h2>
              <ul className="space-y-4">
                {[
                  "Land subdivision and rezoning projects",
                  "Residential developments (townhouses, apartments)",
                  "Commercial developments (retail, industrial)",
                  "Progress drawdowns based on construction stages",
                  "Seamless conversion to permanent loan upon completion",
                  "Dedicated development specialist throughout",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">Typical Development Timeline</h3>
              <div className="space-y-4">
                {[
                  { phase: "Pre-approval", time: "1-2 weeks" },
                  { phase: "Site Selection", time: "2-4 weeks" },
                  { phase: "Formal Application", time: "2-3 weeks" },
                  { phase: "Settlement (First Draw)", time: "1 week" },
                  { phase: "Construction Phase", time: "6-18 months" },
                  { phase: "Completion & Permanent", time: "2-4 weeks" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="font-medium">{item.phase}</span>
                    <span className="text-amber-700 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawdown stages */}
          <h2 className="text-3xl font-bold mb-6">Progress Payment Stages</h2>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { num: "1", title: "Base Complete", desc: "1-2 months after settlement" },
              { num: "2", title: "Frame Complete", desc: "Structural framework done" },
              { num: "3", title: "Lock-up", desc: "Roof and external walls weatherproof" },
              { num: "4", title: "Fixing", desc: "Plumbing, electrical, plastering" },
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

          {/* Important notes */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-4">Important Notes</h3>
            <ul className="space-y-3">
              {[
                "Typically requires 20-30% down payment or equity",
                "Requires: development plan, building contract, budget, builder's license",
                "Interest-only payments during construction reduce cash flow pressure",
                "Progress inspections required before each drawdown",
                "Interest rate may reset upon conversion to permanent loan",
                "Developer must hold proper licenses and insurance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Development?</h2>
            <p className="text-gray-600 mb-6">
              Our development loan specialists will guide you through every stage for a successful project.
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
