import Calculator from "@/components/calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculators | Melbourne Mortgage",
  description: "Use our free mortgage calculators to estimate repayments, stamp duty, and borrowing capacity for Australian home loans.",
};

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Mortgage Calculators</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Estimate your home loan repayments, calculate stamp duty, and see how much you can borrow.
        </p>

        {/* Hero Image Placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 h-48 md:h-64 flex items-center justify-center">
            <div className="text-center text-white">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              <p className="text-lg font-medium">Add visual chart or dashboard image</p>
              <p className="text-sm opacity-75">Path: /public/images/mortgage-dashboard.jpg</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <Calculator />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="font-bold text-lg mb-4">Loan Types</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Principal & Interest</li>
                <li>• Interest Only</li>
                <li>• Fixed Rate</li>
                <li>• Variable Rate</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="font-bold text-lg mb-4">Assumptions</h3>
              <p className="text-sm text-gray-600 mb-2">
                This calculator provides estimates only and does not constitute a loan approval.
              </p>
              <p className="text-sm text-gray-600">
                Actual interest rates and loan terms may vary. Please contact us for a personalised quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
