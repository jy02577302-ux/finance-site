import { Metadata } from "next";
import Link from "next/link";
import { Home, TrendingUp, HardHat, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Loan Products | STRESS FREE FINANCE",
  description: "We offer home loans, investment loans, and construction loans in Australia. Competitive rates, fast approval, transparent fees. Free consultation.",
  keywords: "home loans, investment loans, construction loans, australian mortgage, melbourne mortgage, low interest rates"
};

export default function ProductsPageEN() {
  const products = [
    {
      title: "Home Loan",
      icon: Home,
      color: "primary",
      href: "/en/products/home-loan",
      description: "Competitive rates and flexible repayment options for owner-occupied homes.",
      features: [
        "Rates from 5.89% p.a.",
        "No monthly fees",
        "100% offset account",
        "Approval in 48 hours",
      ],
      cta: "Learn More",
    },
    {
      title: "Investment Loan",
      icon: TrendingUp,
      color: "emerald",
      href: "/en/products/investment",
      description: "Maximise property investment returns with tax optimisation and flexible credit.",
      features: [
        "Interest-only options",
        "Line of credit",
        "Tax optimisation advice",
        "Portfolio management",
      ],
      cta: "Learn More",
    },
    {
      title: "Construction Loan",
      icon: HardHat,
      color: "amber",
      href: "/en/products/construction",
      description: "Progressive drawdowns, seamless conversion, and expert construction support.",
      features: [
        "Progress drawdowns",
        "Auto conversion permanent",
        "Interest-only during build",
        "Dedicated specialist",
      ],
      cta: "Learn More",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Loan Products</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Whether you're buying your first home, investing in property, or building your dream, we have the right solution.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              const isPrimary = product.color === "primary";
              const bgColor = isPrimary ? "bg-primary-700" : product.color === "emerald" ? "bg-emerald-700" : "bg-amber-700";

              return (
                <div key={product.title} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                  <div className={`${bgColor} text-white p-6`}>
                    <Icon className="w-10 h-10 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-white/80">{product.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className={`${bgColor} hover:bg-opacity-90 text-white w-full justify-between inline-flex items-center px-6 py-3 rounded-lg font-semibold`}
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
