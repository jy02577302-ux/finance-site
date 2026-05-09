import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "开发贷款 | STRESS FREE FINANCE",
  description: "开发贷款 - 免费服务，30+银行和贷款机构。土地分割、住宅商业开发。分期拨款，完工转永久贷款。",
  keywords: "开发贷款, 土地开发, 项目融资, progress payment, 澳洲开发贷款, 免费房贷经纪"
};

export default function DevelopmentLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/development-site-v2.jpg"
            alt="Development Site - Development Loan"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/70 to-amber-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/zh/products" className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回产品列表
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">开发贷款</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            支持土地分割、住宅和商业开发项目。按工程进度分期拨款，全程专业指导。
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/products/development-site-v2.jpg"
            alt="土地开发现场 - 开发贷款"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Our Promise */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">我们的承诺</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "免费服务",
                desc: "开发贷款服务完全免费。我们的费用由贷款机构支付，不会增加您的项目成本。",
                icon: "🆓"
              },
              {
                title: "专业网络",
                desc: "我们与 30+ 贷款机构合作，包括专门从事开发贷的机构，能为您找到最合适的融资方案。",
                icon: "🏦"
              },
              {
                title: "独立建议",
                desc: "我们不会偏向任何贷款机构。根据您的项目类型、规模和风险承受能力，推荐最优方案。",
                icon: "⚖️"
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">为什么选择我们</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">开发贷款专家</h3>
              <p className="text-gray-600 leading-relaxed">
                10+ 年开发贷款经验，熟悉土地分割、住宅和商业开发的整个流程和资金需求。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">快速启动</h3>
              <p className="text-gray-600 leading-relaxed">
                预审批快速高效。我们理解开发项目对时间敏感，会加速审批流程，确保您及时获得资金。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">全程管理</h3>
              <p className="text-gray-600 leading-relaxed">
                从预审到 settlement，从分期拨款到完工转永久贷款，开发专家全程一对一支持。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">开发贷款要点</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-bold mb-4">分期拨款</h3>
              <ul className="space-y-3">
                {[
                  "按工程进度分期拨款，控制风险",
                  "通常 5-6 个关键阶段（地基、框架、封顶、内装、完工）",
                  "每阶段完成后申请，经检查通过后拨款",
                  "期间通常只付利息，减轻现金流压力",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-bold mb-4">完工转永久贷款</h3>
              <ul className="space-y-3">
                {[
                  "项目完工后自动转为标准永久房贷",
                  "利率按当时市场重新定价",
                  "可转为本息同还或只还利息",
                  "如果您已找到买家，可选择一次性还清",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-900">重要提示</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 通常需要 20-30% 首付或项目资产</li>
              <li>• 需提供开发计划、建筑合同、成本预算、 Builder License</li>
              <li>• 开发商需持有相关执照和保险</li>
              <li>• 我们强烈建议您使用进度检查服务，确保工程质量</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interest Rates Reference */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
            <h3 className="text-xl font-bold mb-4 text-center">📊 开发贷款利率参考 (2026年4月)</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-gray-600 mb-1">土地开发贷款</p>
                <p className="text-2xl font-bold text-amber-700">6.99% - 8.29%</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <p className="text-gray-600 mb-1">住宅建设项目</p>
                <p className="text-2xl font-bold text-amber-700">6.79% - 7.99%</p>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">* 利率通常较高，取决于项目规模、地点、builder 资质和贷款比例 (LVR)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">准备开始开发项目？</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8">
            免费咨询，无任何义务。我们的开发贷款专家将全程协助您的项目。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0412892782"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-amber-800 font-semibold hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              致电 0412 892 782
            </a>
            <a
              href="/zh/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-amber-800"
            >
              <Mail className="w-5 h-5" />
              预约咨询
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
