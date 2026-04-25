import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "商业贷款 | STRESS FREE FINANCE",
  description: "商业贷款 - 免费服务，100+银行和贷款机构。商业地产、营运资金、设备融资。专业顾问全程协助。",
  keywords: "商业贷款, 商业房贷, 企业贷款, 澳洲商业贷款, 免费房贷经纪"
};

export default function BusinessLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/business-office-v2.jpg"
            alt="Commercial Property - Business Loan"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">商业贷款</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            为企业和投资者提供灵活的商业融资方案。我们的专家将全程协助您找到最适合的解决方案。
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/products/business-office-v2.jpg"
            alt="商业地产 - 商业贷款"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Our Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">我们的承诺</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "免费服务",
                desc: "商业贷款服务对您完全免费。我们的费用由贷款机构支付，您只需专注于业务发展。",
                icon: "🆓"
              },
              {
                title: "广泛选择",
                desc: "我们 access to 100+ lenders，从大型银行到专业金融机构，为您找到最佳条款和利率。",
                icon: "🏦"
              },
              {
                title: "为您量身定制",
                desc: "每个企业情况不同。我们不偏向任何产品，只推荐真正符合您业务需求和现金流状况的方案。",
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">为什么选择我们</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">商业贷款专家</h3>
              <p className="text-gray-600 leading-relaxed">
                我们的团队拥有 10+ 年商业贷款经验，熟悉各类商业地产、营运资金和设备融资需求。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">高效审批</h3>
              <p className="text-gray-600 leading-relaxed">
                我们与贷款机构保持良好关系，加速审批流程。大多数商业贷款申请在数天内获得原则性批准。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">全程支持</h3>
              <p className="text-gray-600 leading-relaxed">
                从申请到 settlement，再到后续管理，我们提供持续支持，确保您的商业融资顺利无阻。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">我们的服务范围</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "商业地产贷款",
                desc: "购买或再融资办公、零售、工业物业。灵活条款，competitive rates。",
                icon: "🏢"
              },
              {
                title: "营运资金",
                desc: "短期到中期资金支持，满足企业日常运营和扩张需求，解决现金流问题。",
                icon: "💰"
              },
              {
                title: "设备融资",
                desc: "商业车辆、机械、设备的融资租赁方案，帮助您更新升级资产。",
                icon: "🔧"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border text-center">
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rates Reference */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
            <h3 className="text-xl font-bold mb-4 text-center">📊 商业贷款利率参考 (2026年4月)</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-1">商业地产 (自营)</p>
                <p className="text-2xl font-bold text-emerald-700">6.29% - 7.19%</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-1">企业营运资金</p>
                <p className="text-2xl font-bold text-emerald-700">7.50% - 9.50%</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-1">设备融资</p>
                <p className="text-2xl font-bold text-emerald-700">6.99% - 8.99%</p>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">* 利率仅供参考，具体取决于贷款金额、期限、担保和信用状况</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">需要商业贷款支持？</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            免费咨询，无任何义务。我们的商业贷款专家将为您定制融资方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0412892782"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-emerald-800 font-semibold hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              致电 0412 892 782
            </a>
            <a
              href="/zh/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-emerald-800"
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
