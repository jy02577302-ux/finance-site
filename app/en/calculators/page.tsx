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
