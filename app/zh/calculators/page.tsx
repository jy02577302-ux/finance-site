import { Metadata } from "next";
import Calculator from "@/components/calculator";

export const metadata: Metadata = {
  title: "房贷计算器 | STRESS FREE FINANCE",
  description: "使用我们的免费房贷计算器估算月供、总利息和印花税。支持多种贷款类型，透明计算。",
  keywords: "房贷计算器, 月供计算, 印花税, 贷款利息, 澳洲房贷"
};

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">房贷计算器</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          快速估算月供、总利息和 Stamp Duty。透明计算，无隐藏费用，助您做出明智贷款决策。
        </p>

        {/* Hero Image Placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 h-48 md:h-64 flex items-center justify-center">
            <div className="text-center text-white">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              <p className="text-lg font-medium">添加视觉图表或仪表盘图片</p>
              <p className="text-sm opacity-75">路径: /public/images/mortgage-dashboard.jpg</p>
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
              <h3 className="font-bold text-lg mb-4">支持的贷款类型</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 本息同还（Principal & Interest）</li>
                <li>• 只还利息（Interest Only）</li>
                <li>• 固定利率贷款</li>
                <li>• 浮动利率贷款</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="font-bold text-lg mb-4">重要说明</h3>
              <p className="text-sm text-gray-600 mb-2">
                本计算器提供的结果仅为估算，不构成贷款批准或正式报价。
              </p>
              <p className="text-sm text-gray-600">
                实际利率、费用和贷款条款可能有所不同。如需个性化方案，请联系我们免费咨询。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
