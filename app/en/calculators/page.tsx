import { Metadata } from "next";
import Calculator from "@/components/calculator";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mortgage Calculator | STRESS FREE FINANCE",
  description: "Use our free mortgage calculator to estimate monthly repayments, total interest and stamp duty. Transparent calculations.",
  keywords: "mortgage calculator, home loan calculator, stamp duty, australia mortgage"
};

export default function CalculatorsPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cal.jpg"
            alt="Mortgage calculator dashboard"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Mortgage Calculator</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8" style={{ fontWeight: 300 }}>
            Quickly estimate monthly repayments, total interest and stamp duty. Transparent calculations with no hidden fees.
          </p>
          <a
            href="#calculator-section"
            className="inline-flex items-center justify-center rounded-sm px-8 py-3 font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
            }}
          >
            Start Calculating
          </a>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white" id="calculator-section">
        <div className="container mx-auto px-4">
          {/* Calculator */}
          <div className="max-w-4xl mx-auto">
            <Calculator />
          </div>

          {/* Info */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Calculation Notes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-3" style={{ color: '#b45309' }}>Monthly Repayments</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Repayment estimates are based on loan amount, interest rate, term and repayment type. Results are indicative only. Actual repayments may vary based on specific loan terms, fees and interest rate changes.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-3" style={{ color: '#b45309' }}>Stamp Duty</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Stamp duty is calculated based on property type, purchase price and down payment. Rates vary by state; this calculator uses VIC rates. Final amounts determined by government.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(212, 168, 85, 0.1)' }}>
                <p className="text-sm text-gray-500 text-center">
                  * This calculator provides estimates only and does not constitute formal loan pre-approval. For precise calculations, please consult our brokers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Need a More Accurate Quote?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experts can provide detailed loan scenarios and precise calculations based on your situation.
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
              Contact Us Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
