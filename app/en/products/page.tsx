import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, TrendingUp, HardHat, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Loan Products | STRESS FREE FINANCE",
  description: "Home loans, business loans, development loans. Free service, access to 100+ lenders. Fast approval, transparent fees. Contact us today.",
  keywords: "home loans, business loans, development loans, australian mortgage, melbourne mortgage, free mortgage broker, 100 lenders"
};

export default function ProductsPageEN() {
  const products = [
    {
      title: "Home Loan",
      icon: Home,
      color: "primary",
      href: "/en/products/home-loan",
      description: "Competitive rates and flexible repayment options for buying or investing in residential property.",
      features: [
        "Rates from 5.89% p.a.",
        "No monthly fees",
        "100% offset account",
        "Approval in 48 hours",
      ],
      cta: "Learn More",
    },
    {
      title: "Business Loan",
      icon: TrendingUp,
      color: "emerald",
      href: "/en/products/business-loan",
      description: "Flexible financing solutions for businesses, from commercial property to working capital.",
      features: [
        "Commercial real estate loans",
        "Business funding & cash flow",
        "Equipment financing",
        "Custom repayment structures",
      ],
      cta: "Learn More",
    },
    {
      title: "Development Loan",
      icon: HardHat,
      color: "amber",
      href: "/en/products/development-loan",
      description: "Funding for property developers and land subdivision projects with progress payments.",
      features: [
        "Progress drawdowns based on milestones",
        "Convert to permanent loan upon completion",
        "Interest-only during construction",
        "Dedicated development specialist",
      ],
      cta: "Learn More",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/business-office.jpg"
            alt="STRESS FREE FINANCE Loan Products"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Loan Products</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Whether you're buying your first home, investing in property, or building your dream, we have the right solution.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              const isPrimary = product.color === "primary";
              return (
                <div key={product.title} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                  <div className="bg-primary-700 text-white p-6">
                    <Icon className="w-10 h-10 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-primary-100">{product.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className="bg-primary-700 hover:bg-primary-800 text-white w-full justify-between inline-flex items-center px-6 py-3 rounded-lg font-semibold"
                    >
                      {product.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">Licensed brokers with 10+ years of local Melbourne experience.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-bold mb-2">Fast Approval</h3>
                <p className="text-gray-600">Most applications approved within 48 hours.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold mb-2">No-Obligation Assessment</h3>
                <p className="text-gray-600">Your first consultation is completely free.</p>
              </div>
            </div>
          </div>

          {/* Interest Rates Overview */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
              <h3 className="text-xl font-bold mb-4 text-center">📊 Current Interest Rates (April 2026)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  { label: "Variable (Owner)", range: "5.89% - 6.49%", color: "text-primary-700" },
                  { label: "Fixed (1-3 yrs)", range: "5.69% - 6.29%", color: "text-primary-700" },
                  { label: "Investment", range: "6.09% - 6.79%", color: "text-emerald-700" },
                  { label: "Interest Only", range: "6.29% - 6.99%", color: "text-amber-700" },
                  { label: "Commercial", range: "6.29% - 7.19%", color: "text-emerald-700" },
                  { label: "Development", range: "6.79% - 8.29%", color: "text-amber-700" },
                  { label: "Construction", range: "6.29% - 7.49%", color: "text-amber-700" },
                  { label: "Equipment", range: "6.99% - 8.99%", color: "text-emerald-700" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-1 text-xs">{item.label}</p>
                    <p className={`text-xl font-bold ${item.color}`}>{item.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-gray-500 mt-3">* Rates are indicative. Actual rates depend on LVR, loan size, credit profile, and terms.</p>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Product is Right for You?</h2>
            <p className="text-gray-600 mb-6">
              Our experts will assess your situation and recommend the best solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-700 px-8 py-4 text-white font-semibold hover:bg-primary-600"
              >
                <Phone className="w-5 h-5" />
                Call 0412 892 782
              </a>
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-4 text-gray-900 font-semibold hover:bg-gray-50"
              >
                <Mail className="w-5 h-5" />
                Online Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
