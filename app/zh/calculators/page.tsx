import { Metadata } from "next";
import Calculator from "@/components/calculator";
import Image from "next/image";

export const metadata: Metadata = {
  title: "房贷计算器 | STRESS FREE FINANCE",
  description: "使用我们的免费房贷计算器估算月供、总利息和印花税。支持多种贷款类型，透明计算。",
  keywords: "房贷计算器, 月供计算, 印花税, 贷款利息, 澳洲房贷"
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
            alt="房贷计算仪表盘"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">房贷计算器</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            快速估算月供、总利息和印花税。透明计算，无隐藏费用，助您做出明智贷款决策。
          </p>
          <a
            href="#calculator-section"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-primary-900 hover:bg-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 transition-all shadow-md"
          >
            开始计算
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
                alt="房贷计算仪表盘"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Calculator and Info */}
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
      </section>
    </div>
  );
}
