import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Calculator from "@/components/calculator";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Loan | STRESS FREE FINANCE",
  description: "Home loans - free service, access to 100+ lenders. Our brokers provide expert advice throughout the entire process.",
  keywords: "home loan, owner occupied mortgage, melbourne home loan, australian mortgage, free mortgage broker"
};

export default function HomeLoanPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/home-loan-hero-v2.jpg"
            alt="Family Home - Home Loan"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/en/products" className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loan</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Whether you're buying your first home, refinancing, or investing, our mortgage brokers will guide you with expert advice.
          </p>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Promise to You</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "No Cost to You",
                desc: "Our home loan service is completely free. We are paid by the lenders, not by you. No consultation fees, no hidden charges.",
                icon: "🆓"
              },
              {
                title: "Save Your Time",
                desc: "Researching hundreds of products and handling paperwork can take weeks. Let us do the heavy lifting while you focus on what matters.",
                icon: "⏰"
              },
              {
                title: "Your Best Interest First",
                desc: "We don't favour any lender. We choose products that best suit your individual needs and financial situation.",
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

      {/* Calculator CTA */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Wondering how much you can borrow?</h2>
                <p className="text-gray-600 mb-6">
                  Use our calculator to estimate your borrowing power and monthly repayments. Fast, free, no registration required.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Estimate your monthly repayments</li>
                  <li>• See total interest payable</li>
                  <li>• Compare different interest rates</li>
                </ul>
                {/* Current Rates Reference */}
                <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                  <h3 className="font-bold text-primary-900 mb-2">📊 Current Interest Rates (April 2026)</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600">Variable (Owner Occupier)</span>
                      <p className="font-semibold text-primary-800">5.89% - 6.49%</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Fixed (1-3 years)</span>
                      <p className="font-semibold text-primary-800">5.69% - 6.29%</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Investment Loans</span>
                      <p className="font-semibold text-primary-800">6.09% - 6.79%</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Interest Only</span>
                      <p className="font-semibold text-primary-800">6.29% - 6.99%</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">* Rates are indicative, actual rates subject to lender approval</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Calculator compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/products/home-loan-hero-v2.jpg"
            alt="Family Home - Home Loan"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                With hundreds of successful settlements, our team will walk you through the entire lending process from start to finish.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Service Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Most of our business comes from word-of-mouth referrals. We strive to deliver exceptional service and professionalism.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated loan processing team allows us to provide flexible, ongoing support even after your loan has settled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Initial Chat", desc: "Tell us about your goals and current situation" },
              { step: "2", title: "We Search", desc: "We scour 100+ lenders to find the best match" },
              { step: "3", title: "We Handle", desc: "We manage all paperwork and lender communication" },
              { step: "4", title: "Settlement", desc: "You get the keys, we continue to support you" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Free, no-obligation consultation. Let us help you find the right home loan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0412892782"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-primary-800 font-semibold hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              Call 0412 892 782
            </a>
            <a
              href="/en/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-primary-800"
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
