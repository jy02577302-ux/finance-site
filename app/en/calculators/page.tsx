import Calculator from "@/components/calculator";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculators | STRESS FREE FINANCE",
  description: "Use our free mortgage calculators to estimate repayments, stamp duty, and borrowing capacity.",
};

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/calculators-hero.jpg"
            alt="Mortgage Calculator Dashboard"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Calculators</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Estimate your home loan repayments, calculate stamp duty, and see how much you can borrow.
          </p>
          <a
            href="#calculator-section"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-primary-900 hover:bg-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 transition-all shadow-md"
          >
            Start Calculating
          </a>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gray-50" id="calculator-section">
        <div className="container mx-auto px-4">
          {/* Dashboard Preview */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/calculators-hero.jpg"
                alt="Mortgage Calculator Dashboard"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Calculator and Info */}
          <div className="grid lg:grid-cols-3 gap-8" id="calculator-section">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <Calculator />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-bold text-lg mb-4">Supported Loan Types</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Principal & Interest</li>
                  <li>• Interest Only</li>
                  <li>• Fixed Rate Loans</li>
                  <li>• Variable Rate Loans</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow border">
                <h3 className="font-bold text-lg mb-4">Important Notes</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Results are estimates only and do not constitute loan approval or formal quotes.
                </p>
                <p className="text-sm text-gray-600">
                  Actual rates, fees, and terms may vary. Contact us for personalized advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
