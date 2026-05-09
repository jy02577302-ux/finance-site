import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, TrendingUp, HardHat, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Loan Products | STRESS FREE FINANCE",
  description: "Home loans, business loans, development loans. Free service, access to 30+ lenders. Fast approval, transparent fees. Contact us today.",
  keywords: "home loans, business loans, development loans, australian mortgage, melbourne mortgage, free mortgage broker, 100 lenders"
};

export default function ProductsPageEN() {
  const products = [
    {
      title: "Home Loan",
      icon: Home,
      href: "/en/products/home-loan",
      description: "Competitive rates and flexible repayment options for buying or investing in residential property.",
      features: [
        "Rates from 5.89% p.a.",
        "No monthly fees",
        "100% offset account",
        "Approval in 48 hours",
      ],
    },
    {
      title: "Business Loan",
      icon: TrendingUp,
      href: "/en/products/business-loan",
      description: "Flexible financing solutions for businesses, from commercial property to working capital.",
      features: [
        "Commercial real estate loans",
        "Business funding & cash flow",
        "Equipment financing",
        "Custom repayment structures",
      ],
    },
    {
      title: "Development Loan",
      icon: HardHat,
      href: "/en/products/development-loan",
      description: "Funding for property developers and land subdivision projects with progress payments.",
      features: [
        "Progress drawdowns based on milestones",
        "Convert to permanent loan upon completion",
        "Interest-only during construction",
        "Dedicated development specialist",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/business-office.jpg"
            alt="STRESS FREE FINANCE Loan Products"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Our Loan Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Whether you're buying your first home, investing in property, or building your dream, we have the right solution.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8" style={{ background: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: '#f0f4f4' }}>
                <svg className="w-5 h-5" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>Free Service</h3>
              <p className="text-xs text-gray-500">Broker fee paid by bank</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: '#f0f4f4' }}>
                <svg className="w-5 h-5" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>30+ Lenders</h3>
              <p className="text-xs text-gray-500">Access to 30+ loan products</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: '#f0f4f4' }}>
                <svg className="w-5 h-5" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>Fast Approval</h3>
              <p className="text-xs text-gray-500">Most approved within 48 hours</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: '#f0f4f4' }}>
                <svg className="w-5 h-5" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>Licensed & Trusted</h3>
              <p className="text-xs text-gray-500">Est. 2015, 1000+ happy clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16" style={{ background: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div key={product.title} className="bg-white rounded-lg" style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(212, 168, 85, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(212, 168, 85, 0.15)'
                }}>
                  {/* Card Header */}
                  <div className="p-6 border-b" style={{
                    borderColor: 'rgba(212, 168, 85, 0.2)',
                    background: 'linear-gradient(135deg, #fdfbf7 0%, #ffffff 100%)'
                  }}>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                      boxShadow: '0 4px 12px rgba(212, 168, 85, 0.3)'
                    }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>{product.title}</h2>
                    <p className="text-center text-gray-600 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <div className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#b45309' }}>
                            <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className="block w-full text-center py-3 px-6 font-semibold transition-all rounded-sm"
                      style={{
                        background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(212, 168, 85, 0.2)'
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 p-8 rounded-lg" style={{
            background: '#fff',
            border: '1px solid rgba(212, 168, 85, 0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>Expert Team</h3>
                <p className="text-gray-600">Licensed brokers with 10+ years of local Melbourne experience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>Fast Approval</h3>
                <p className="text-gray-600">Most applications approved within 48 hours.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>No-Obligation</h3>
                <p className="text-gray-600">Your first consultation is completely free.</p>
              </div>
            </div>
          </div>

          {/* Interest Rates */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border" style={{ borderColor: 'rgba(212, 168, 85, 0.15)' }}>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>📊 Current Interest Rates (April 2026)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  { label: "Owner Occupier (Variable)", range: "5.89% - 6.49%", color: "text-[#b45309]" },
                  { label: "Owner Occupier (Fixed 1-3yr)", range: "5.69% - 6.29%", color: "text-[#b45309]" },
                  { label: "Investment Loan", range: "6.09% - 6.79%", color: "text-emerald-700" },
                  { label: "Interest Only", range: "6.29% - 6.99%", color: "text-amber-700" },
                  { label: "Commercial Property", range: "6.29% - 7.19%", color: "text-emerald-700" },
                  { label: "Development Loan", range: "6.79% - 8.29%", color: "text-amber-700" },
                  { label: "Construction Loan", range: "6.29% - 7.49%", color: "text-amber-700" },
                  { label: "Equipment Finance", range: "6.99% - 8.99%", color: "text-emerald-700" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-1 text-xs">{item.label}</p>
                    <p className={`text-xl font-bold ${item.color}`}>{item.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-gray-500 mt-3">* Rates are indicative only. Actual rates depend on LVR, loan size, credit history and terms.</p>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Not sure which product is right for you?</h2>
            <p className="text-gray-600 mb-6">
              Our experts will recommend the best solution based on your financial situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-all rounded-sm"
                style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}
              >
                <Phone className="w-5 h-5" />
                Call 0412 892 782
              </a>
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors rounded-sm"
                style={{
                  background: 'transparent',
                  color: '#1a1a1a',
                  border: '1px solid rgba(212, 168, 85, 0.4)'
                }}
              >
                <Mail className="w-5 h-5" />
                Contact Us Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
