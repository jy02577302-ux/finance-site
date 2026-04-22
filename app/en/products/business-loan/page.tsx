import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Loan | STRESS FREE FINANCE",
  description: "Business loans for commercial property, working capital, and equipment financing. Flexible solutions for Australian businesses.",
  keywords: "business loan, commercial loan, business financing, commercial property loan, equipment finance, australian business loan"
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
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Business Loan</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-2xl">
            Flexible financing solutions for businesses, from commercial property to working capital.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Business Loan?</h2>
              <ul className="space-y-4">
                {[
                  "Commercial real estate purchase and refinance",
                  "Business operating capital support",
                  "Equipment and vehicle financing",
                  "Flexible repayment structures and rate options",
                  "Fast approval process",
                  "Dedicated business consultant",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">Ideal For</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">Business Owners</p>
                    <p className="text-sm text-gray-500">Expand operations, purchase property, upgrade equipment</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">Investors</p>
                    <p className="text-sm text-gray-500">Invest in commercial real estate, retail, industrial</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">Developers</p>
                    <p className="text-sm text-gray-500">Land development, project financing, construction loans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Types */}
          <h2 className="text-3xl font-bold mb-6">Our Business Loan Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Commercial Real Estate",
                desc: "Purchase or refinance commercial properties including office, retail, and industrial."
              },
              {
                title: "Working Capital",
                desc: "Short to medium-term funding for daily operations and expansion needs."
              },
              {
                title: "Equipment Financing",
                desc: "Leasing and financing solutions for business equipment, vehicles, and machinery."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Business Financing?</h2>
            <p className="text-gray-600 mb-6">
              Our business loan specialists will tailor a financing solution to meet your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-8 py-4 text-white font-semibold hover:bg-emerald-600"
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
