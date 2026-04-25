import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Investment Loan | STRESS FREE FINANCE",
  description: "Maximise property investment returns with our investment loans. Interest-only options, tax optimisation advice, line of credit. Expert consultants.",
  keywords: "investment loan, property investment, negative gearing, tax deductibility, line of credit, melbourne investment loan"
};

export default function InvestmentLoanPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/investment-growth.jpg"
            alt="Investment Growth Chart"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/70 to-emerald-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/en/products" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Investment Loan</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Maximise your property investment returns with tax optimisation and flexible credit facilities.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/products/investment-growth.jpg"
            alt="Investment Growth Chart"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Investment Loan?</h2>
              <ul className="space-y-4">
                {[
                  "Interest-only options to optimise cash flow",
                  "Line of credit ( HELOC ) for flexible access",
                  "Tax optimisation advice to maximise returns",
                  "Package deals to reduce overall costs",
                  "Manage multiple properties in one portfolio",
                  "Free loan health checks - regular reviews",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">Investment Loan Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-medium">Capital Growth</p>
                    <p className="text-sm text-gray-500">Long-term property appreciation potential</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">Rental Income</p>
                    <p className="text-sm text-gray-500">Positive cash flow or negative gearing strategy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">Professional Advice</p>
                    <p className="text-sm text-gray-500">Experienced investment consultants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tax benefits */}
          <h2 className="text-3xl font-bold mb-6">Tax Optimisation</h2>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Investing in property offers various tax advantages. Our experts will help you:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Deduct loan interest expenses",
                "Claim property-related costs (maintenance, management fees)",
                "Utilise negative gearing strategies",
                "Plan for Capital Gains Tax (CGT)",
                "Claim depreciation (building and plant & equipment)",
                "Structure for tax efficiency",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interest Rates Reference */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-bold mb-4 text-center">📊 Investment Loan Rates Reference (April 2026)</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <p className="text-gray-600 mb-1">Interest Only</p>
                    <p className="text-2xl font-bold text-emerald-700">6.29% - 6.99%</p>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <p className="text-gray-600 mb-1">Principal & Interest</p>
                    <p className="text-2xl font-bold text-emerald-700">5.99% - 6.69%</p>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <p className="text-gray-600 mb-1">Investment (LVR 80%+)</p>
                    <p className="text-2xl font-bold text-emerald-700">6.09% - 6.89%</p>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-3">* Investment rates are typically higher than owner-occupier rates; depends on LVR, loan type, and financial profile</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Portfolio?</h2>
            <p className="text-gray-600 mb-6">
              Let us help you create a personalised investment strategy that maximises returns while managing risk.
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
