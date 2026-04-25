import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "投资贷款 | STRESS FREE FINANCE",
  description: "投资贷款最大化您的房产投资回报。只还利息、税务优化、信用额度灵活。专业投资贷款顾问服务。",
  keywords: "投资贷款, 投资房贷, 只还利息, 负扣税, 税务优化, 信用额度, 澳洲投资房贷款"
};

export default function InvestmentLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/investment-growth-v2.jpg"
            alt="投资增长图表 - 投资贷款"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/70 to-emerald-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/zh/products" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回产品列表
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">投资贷款</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            最大化您的房产投资回报，提供税务优化方案和灵活的信用额度。
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/products/investment-growth-v2.jpg"
            alt="投资增长图表 - 投资贷款"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">为什么选择我们的投资贷款？</h2>
              <ul className="space-y-4">
                {[
                  "只还利息选项，优化现金流管理",
                  "信用额度（Line of Credit）灵活取用",
                  "税务优化建议，最大化投资回报",
                  "打包优惠，降低整体持有成本",
                  "支持多套房产投资组合管理",
                  "免费贷款健康检查，定期审查方案",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">投资贷款优势</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-medium">资本增长潜力</p>
                    <p className="text-sm text-gray-500">长期持有享受房产增值</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">租金收入</p>
                    <p className="text-sm text-gray-500">正现金流或负扣税策略</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">专业建议</p>
                    <p className="text-sm text-gray-500">资深投资顾问全程支持</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tax benefits */}
          <h2 className="text-3xl font-bold mb-6">税务优化</h2>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 mb-6">
              投资房产可以带来多种税务优惠。我们的专家将帮助您：
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "抵扣贷款利息支出",
                "抵扣房产相关费用（维修、管理费等）",
                "利用负扣税（Negative Gearing）策略",
                "资本利得税（CGT）规划",
                "折旧减免（建筑折旧、设备折旧）",
                "结构优化以最小化税负",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interest Rates Reference */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-bold mb-4 text-center">📊 投资贷款利率参考 (2026年4月)</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <p className="text-gray-600 mb-1">只还利息 (Interest Only)</p>
                    <p className="text-2xl font-bold text-emerald-700">6.29% - 6.99%</p>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <p className="text-gray-600 mb-1">本息同还 (P&I)</p>
                    <p className="text-2xl font-bold text-emerald-700">5.99% - 6.69%</p>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <p className="text-gray-600 mb-1">投资房贷 (含 LVR 80%+)</p>
                    <p className="text-2xl font-bold text-emerald-700">6.09% - 6.89%</p>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-3">* 投资贷款利率通常高于自住贷款，取决于 LVR、贷款类型和您的财务状况</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">开始您的投资组合？</h2>
            <p className="text-gray-600 mb-6">
              让我们帮您制定个性化的投资策略，最大化回报同时控制风险。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-8 py-4 text-white font-semibold hover:bg-emerald-600"
              >
                <Phone className="w-5 h-5" />
                致电 0412 892 782
              </a>
              <a
                href="/zh/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-4 text-gray-900 font-semibold hover:bg-gray-50"
              >
                <Mail className="w-5 h-5" />
                预约咨询
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
