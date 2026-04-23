import Link from "next/link";
import Calculator from "@/components/calculator";
import TestimonialCard from "@/components/testimonial-card";

export default function HomePageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Dark + Real Melbourne Night Skyline */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-melbourne.jpg"
            alt="Melbourne skyline at night"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        {/* Dark-gold overlay - 60% opacity for more photo visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-800/60 to-primary-900/60"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Stress-Free Finance Solutions
            <span className="block mt-2 text-accent-500 bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-500">
              Melbourne
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-200 font-light">
            Expert mortgage brokers · Free assessment · Fast approval · Transparent fees
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-accent-500 bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-900 hover:bg-accent-400 hover:border-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-400/30"
            >
              Get Free Assessment
            </a>
            <a
              href="/en/calculators"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 transition-all duration-300"
            >
              Use Calculator
            </a>
          </div>
        </div>
      </section>

      {/* Calculator Preview - Platinum BG */}
      <section className="py-20 bg-platinum-50 relative">
        {/* Hero → Calculator gold divider */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Estimate Your Mortgage Repayments
              </h2>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                Use our easy mortgage calculator to estimate monthly payments, total interest, and understand how rates and terms affect your loan. Transparent calculations, no hidden fees.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-primary-700">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Home loans, investment loans, construction loans</span>
                </li>
                <li className="flex items-center gap-3 text-primary-700">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Stamp duty & fees included</span>
                </li>
                <li className="flex items-center gap-3 text-primary-700">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Instant results, no registration required</span>
                </li>
              </ul>
              <a
                href="/en/calculators"
                className="inline-flex items-center justify-center rounded-lg bg-primary-900 px-6 py-3 text-base font-medium text-white hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all shadow-md hover:shadow-lg"
              >
                Open Calculator
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-platinum-200">
              <Calculator compact />
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products - Premium Cards */}
      <section className="py-20 bg-white relative">
        {/* Calculator → Products gold divider */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-primary-900">Our Loan Products</h2>
          <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto text-lg">Whatever your property goals, we have the right loan solution</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1: Home Loan */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-platinum-200 hover:shadow-2xl hover:border-accent-300 transition-all duration-300 overflow-hidden">
              {/* Gold Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

              <h3 className="text-2xl font-bold mb-4 text-primary-900 group-hover:text-accent-600 transition-colors">Home Loan</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Whether you're buying your first home, refinancing, or investing, we help you find the right loan. Our service is completely free - paid by lenders, not you.
              </p>
              <ul className="space-y-3 mb-8 text-primary-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Free service - lenders pay, not you</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Access to 100+ lenders and products</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>We handle all paperwork - save your time</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Unbiased advice - your best interest first</span>
                </li>
              </ul>
              <a
                href="/en/products/home-loan"
                className="block w-full text-center rounded-lg border-2 border-primary-200 bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-500 hover:border-accent-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Product 2: Business Loan */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-platinum-200 hover:shadow-2xl hover:border-accent-300 transition-all duration-300 overflow-hidden">
              {/* Gold Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

              <h3 className="text-2xl font-bold mb-4 text-primary-900 group-hover:text-accent-600 transition-colors">Business Loan</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Commercial financing for businesses of all sizes. Free service with access to 100+ lenders. Professional support throughout.
              </p>
              <ul className="space-y-3 mb-8 text-primary-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Commercial real estate, working capital, equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>100+ lenders to choose from</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Fast approval with dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Tailored to your cash flow needs</span>
                </li>
              </ul>
              <a
                href="/en/products/business-loan"
                className="block w-full text-center rounded-lg border-2 border-primary-200 bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-500 hover:border-accent-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Product 3: Development Loan */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-platinum-200 hover:shadow-2xl hover:border-accent-300 transition-all duration-300 overflow-hidden">
              {/* Gold Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

              <h3 className="text-2xl font-bold mb-4 text-primary-900 group-hover:text-accent-600 transition-colors">Development Loan</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Development finance for land subdivision and construction projects. Free service with specialist lenders and progress drawdowns.
              </p>
              <ul className="space-y-3 mb-8 text-primary-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>10+ years development loan experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Access to specialist development lenders</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Progress drawdowns, convert to permanent</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Dedicated specialist, fast pre-approval</span>
                </li>
              </ul>
              <a
                href="/en/products/development-loan"
                className="block w-full text-center rounded-lg border-2 border-primary-200 bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-500 hover:border-accent-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Platinum BG + Gold Icons */}
      <section className="py-20 bg-platinum-50 relative">
        {/* Products → Why Choose Us gold divider */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-primary-900">Why Choose Stress Free Finance</h2>
          <p className="text-center text-primary-600 mb-16 max-w-2xl mx-auto text-lg">Professional, transparent, and efficient service to make your property journey stress-free</p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">Free Service</h3>
              <p className="text-primary-600 leading-relaxed">Our service is completely free to you. We are paid by the lenders, not by you. No consultation fees, no hidden charges.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">100+ Lenders</h3>
              <p className="text-primary-600 leading-relaxed">We access 100+ lenders, from major banks to specialist finance providers, ensuring you get the best rates and terms.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">Save Your Time</h3>
              <p className="text-primary-600 leading-relaxed">Researching hundreds of products and handling paperwork can take weeks. Let us do the heavy lifting while you focus on what matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Unified Light Background */}
      <section className="bg-platinum-50 py-20 relative">
        {/* Why Choose Us → Testimonials gold divider */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-primary-900">What Our Clients Say</h2>
          <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">Real feedback from satisfied clients</p>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah J."
              location="Melbourne"
              text="Got my first home loan approved in 2 days. Amazing service!"
            />
            <TestimonialCard
              name="Mike T."
              location="Sydney"
              text="Helped me refinance and saved $400/month. Highly recommend."
            />
            <TestimonialCard
              name="Lisa K."
              location="Brisbane"
              text="Stress Free Finance made the whole process so easy. Highly professional and responsive."
            />
          </div>
        </div>
      </section>

      {/* CTA - Unified Light Background + Gold Button */}
      <section className="bg-white py-20 relative">
        {/* Testimonials → CTA gold divider */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-900">Ready for a Stress-Free Mortgage?</h2>
          <p className="text-xl text-primary-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation assessment from our expert brokers.
          </p>
          <a
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 px-10 py-6 text-lg font-bold text-primary-900 hover:from-accent-400 hover:to-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 transition-all duration-300 shadow-xl shadow-accent-500/30 hover:shadow-accent-400/40 transform hover:scale-105"
          >
            Book Free Assessment
          </a>
        </div>
      </section>

      {/* Footer - with Hero-matching wave top */}
      <footer className="relative text-primary-200" style={{ backgroundColor: '#020617' }}>
        {/* Wave - visible transition from CTA to Footer */}
        <div className="absolute top-0 left-0 right-0 h-32 -z-10">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 128"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroWaveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" stopOpacity="0.3"/>
                <stop offset="40%" stopColor="#0f172a" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#020617" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <path
              d="M0,20 C360,60 720,0 1080,40 C1200,60 1320,30 1440,20 L1440,128 L0,128 Z"
              fill="url(#heroWaveGrad)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 pt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="relative inline-block">
                <h4 className="text-white font-display font-bold text-2xl mb-2">STRESS FREE FINANCE</h4>
                {/* 金色装饰线 */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent-500 to-transparent"></div>
              </div>
              <p className="text-sm leading-relaxed text-primary-300">
                Professional, transparent, and stress-free mortgage services.
              </p>
              {/* 信任标语 */}
              <p className="text-xs text-accent-400 font-medium tracking-wider uppercase">
                100+ Lenders · Free Service · Melbourne Based
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  {href: "/en/products", label: "Products"},
                  {href: "/en/calculators", label: "Calculators"},
                  {href: "/en/about", label: "About Us"},
                  {href: "/en/contact", label: "Contact"},
                  {href: "/zh", label: "中文"}
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                Legal
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  {href: "/en/legal/privacy", label: "Privacy Policy"},
                  {href: "/en/legal/terms", label: "Terms of Service"},
                  {href: "/en/legal/credit-guide", label: "Credit Guide"}
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                Contact
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
              </h4>
              <div className="text-sm space-y-4">
                <p className="flex items-start gap-3 text-primary-300">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>123 Collins St, Melbourne VIC 3000</span>
                </p>
                <p className="flex items-center gap-3 text-primary-300">
                  <svg className="w-4 h-4 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:0412892782" className="text-accent-400 hover:text-accent-300 transition-colors font-medium">0412 892 782</a>
                </p>
                <p className="flex items-center gap-3 text-primary-300">
                  <svg className="w-4 h-4 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:info@stressfree.com.au" className="text-accent-400 hover:text-accent-300 transition-colors break-all">info@stressfree.com.au</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-primary-800 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm text-primary-500 leading-relaxed">
                &copy; {new Date().getFullYear()} STRESS FREE FINANCE. All rights reserved. ACN: 123 456 789. Australian Credit Licence: 123456.
              </p>
              {/* 社交媒体图标（占位，可添加实际链接） */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-primary-400">Follow us:</span>
                <div className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">FB</span>
                  <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">LI</span>
                  <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">IG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
