import { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/calculator";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Loan | STRESS FREE FINANCE",
  description: "Home loans with competitive rates from 5.89% p.a. Free service, access to 100+ lenders. Fast approval 48hrs. No monthly fees.",
  keywords: "home loan, owner occupied mortgage, low interest rate, offset account, melbourne home loan, australian mortgage, free mortgage broker"
};

export default function HomeLoanPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/en/products" className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loan</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Competitive rates and flexible repayment options for owner-occupied homes. Make your dream home a reality.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Benefits Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "🆓", title: "Free Service", desc: "Paid by lender, not you" },
              { icon: "🏦", title: "100+ Lenders", desc: "Access to broad loan panel" },
              { icon: "⚡", title: "Fast Approval", desc: "Most approved within 48hrs" },
              { icon: "💎", title: "5000+ Clients", desc: "Trusted by Australians" },
            ].map((benefit, i) => (
              <div key={i} className="bg-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">{benefit.icon}</p>
                <h3 className="font-bold text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Home Loan?</h2>
              <ul className="space-y-4">
                {[
                  "Interest rates from 5.89% p.a.",
                  "No monthly fees, fully transparent pricing",
                  "100% offset account (free) - save on interest",
                  "Flexible repayment frequency (weekly/fortnightly/monthly)",
                  "Fast approval - typically within 48 hours",
                  "Both P&I and interest-only options available",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border">
              <Calculator compact />
              <p className="text-center text-sm text-gray-500 mt-4">
                * Rates are indicative. Actual rate depends on loan amount, LVR, and credit assessment.
              </p>
            </div>
          </div>

          {/* How it works */}
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { step: "1", title: "Free Consultation", desc: "Discuss your needs and financial situation with our mortgage broker" },
              { step: "2", title: "Pre-Approval", desc: "Quick assessment of your borrowing capacity and loan options" },
              { step: "3", title: "Property Selection", desc: "Find your dream home within your pre-approval range" },
              { step: "4", title: "Final Application", desc: "Submit full documentation, we handle approval and settlement" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Home Journey?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Contact us today for a free assessment and personalised loan solution. Our experts will guide you every step of the way.
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
