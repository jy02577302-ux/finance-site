import Link from "next/link";
import Calculator from "@/components/calculator";
import TestimonialCard from "@/components/testimonial-card";

export default function HomePageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stress-Free Finance Solutions <span className="text-accent-400">Melbourne</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-100">
            Expert mortgage brokers · Free assessment · Fast approval · Transparent fees
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent-500 px-8 py-6 text-lg font-semibold text-black hover:bg-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            >
              Get Free Assessment
            </a>
            <a
              href="/en/calculators"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            >
              Use Calculator
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 items-center">
          <span className="text-sm font-medium text-gray-600">Licensed & Regulated:</span>
          <div className="flex gap-8 text-gray-500">
            <span className="font-bold text-xl">AFCA</span>
            <span className="font-bold text-xl">MFAA</span>
            <span className="font-bold text-xl">ASIC</span>
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Estimate Your Mortgage Repayments
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our easy mortgage calculator to estimate monthly payments, total interest, and understand how rates and terms affect your loan. Transparent calculations, no hidden fees.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Home loans, investment loans, construction loans</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Stamp duty & fees included</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Instant results, no registration required</span>
                </li>
              </ul>
              <a
                href="/en/calculators"
                className="inline-flex items-center justify-center rounded-md bg-primary-700 px-6 py-3 text-base font-medium text-white hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Open Calculator
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <Calculator compact />
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Loan Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Home Loan</h3>
              <p className="text-gray-600 mb-6">Competitive rates for owner-occupied homes. Flexible repayment options to suit your needs.</p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• Low interest rates from 5.89%</li>
                <li>• No monthly fees, transparent pricing</li>
                <li>• Offset account available</li>
                <li>• Fast approval, typically within 48 hours</li>
              </ul>
              <a href="/en/products/home-loan" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Enquire Now
              </a>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Investment Loan</h3>
              <p className="text-gray-600 mb-6">Maximise your property portfolio with our tailored investment lending solutions.</p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• Interest-only options to improve cash flow</li>
                <li>• Line of credit facilities</li>
                <li>• Package deals for multiple loans</li>
                <li>• Tax-deductible interest advice</li>
              </ul>
              <a href="/en/products/investment" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Enquire Now
              </a>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Construction Loan</h3>
              <p className="text-gray-600 mb-6">Building your dream home? We offer progressive drawdowns and seamless conversion to permanent mortgage.</p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• Progressive drawdowns based on construction milestones</li>
                <li>• Automatic conversion to permanent mortgage</li>
                <li>• Support for fixed-price contracts</li>
                <li>• Dedicated construction specialist</li>
              </ul>
              <a href="/en/products/construction" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Stress Free Finance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-600">Our brokers have 10+ years of local Melbourne experience and deep product knowledge.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Approval</h3>
              <p className="text-gray-600">We streamline the process, with most applications approved within 48 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Free, No-Obligation Assessment</h3>
              <p className="text-gray-600">Your first consultation is completely free. No hidden fees, no pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
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

      {/* CTA */}
      <section className="bg-accent-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for a Stress-Free Mortgage?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation assessment from our expert brokers.
          </p>
          <a
            href="/en/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-10 py-6 text-lg font-bold text-accent-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Book Free Assessment
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">STRESS FREE FINANCE</h4>
            <p className="text-sm">Professional, transparent, and stress-free mortgage services.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/en/products" className="hover:text-white">Products</a></li>
              <li><a href="/en/calculators" className="hover:text-white">Calculators</a></li>
              <li><a href="/en/about" className="hover:text-white">About Us</a></li>
              <li><a href="/en/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/zh" className="hover:text-white">中文</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/en/legal/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/en/legal/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/en/legal/credit-guide" className="hover:text-white">Credit Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic text-sm space-y-2">
              <p>123 Collins St</p>
              <p>Melbourne VIC 3000</p>
              <p>Phone: 0412 892 782</p>
              <p>Email: info@stressfree.com.au</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} STRESS FREE FINANCE. All rights reserved. ACN: 123 456 789. Australian Credit Licence: 123456.</p>
        </div>
      </footer>
    </div>
  );
}
