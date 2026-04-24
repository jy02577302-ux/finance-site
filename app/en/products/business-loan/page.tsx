import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Loan | STRESS FREE FINANCE",
  description: "Business loans - free service, access to 100+ lenders. Commercial property, working capital, equipment financing. Expert brokers.",
  keywords: "business loan, commercial loan, business financing, australian business loan, free mortgage broker"
};

export default function BusinessLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/en/products" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Loan</h1>
          <p className="text-xl text-emerald-100 max-w-2xl">
            Flexible financing solutions for businesses. Our expert brokers will guide you to the right solution.
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
                desc: "Our business loan service is completely free. We are paid by the lenders, so you can focus on your business.",
                icon: "🆓"
              },
              {
                title: "Broad Lender Access",
                desc: "We access 100+ lenders, from major banks to specialist finance providers, to find the best terms and rates.",
                icon: "🏦"
              },
              {
                title: "Tailored to Your Needs",
                desc: "Every business is unique. We don't push products—we recommend solutions that fit your cash flow and growth plans.",
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
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 h-64 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-emerald-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <p className="text-emerald-800 font-medium">Add commercial property or office image</p>
              <p className="text-sm text-emerald-600">Path: /public/images/products/business-office.jpg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Commercial Loan Specialists</h3>
              <p className="text-gray-600 leading-relaxed">
                10+ years of experience in commercial property, working capital, and equipment finance. We understand business needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Approval</h3>
              <p className="text-gray-600 leading-relaxed">
                Strong relationships with lenders mean faster processing. Most applications get in-principle approval within days.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">End-to-End Support</h3>
              <p className="text-gray-600 leading-relaxed">
                From application to settlement and beyond, we provide ongoing support to ensure your financing stays on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Cover</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Commercial Real Estate",
                desc: "Purchase or refinance office, retail, and industrial properties with competitive rates.",
                icon: "🏢"
              },
              {
                title: "Working Capital",
                desc: "Short to medium-term funding for day-to-day operations and business expansion.",
                icon: "💰"
              },
              {
                title: "Equipment Finance",
                desc: "Leasing and financing for business vehicles, machinery, and equipment upgrades.",
                icon: "🔧"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border text-center">
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rates Reference */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
            <h3 className="text-xl font-bold mb-4 text-center">📊 Business Loan Rates Reference (April 2026)</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-1">Commercial Property</p>
                <p className="text-2xl font-bold text-emerald-700">6.29% - 7.19%</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-1">Working Capital</p>
                <p className="text-2xl font-bold text-emerald-700">7.50% - 9.50%</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-1">Equipment Finance</p>
                <p className="text-2xl font-bold text-emerald-700">6.99% - 8.99%</p>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">* Rates vary based on loan size, term, security, and business financials</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Business Financing?</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Free consultation, no obligation. Let our experts tailor a solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0412892782"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-emerald-800 font-semibold hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              Call 0412 892 782
            </a>
            <a
              href="/en/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-emerald-800"
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
