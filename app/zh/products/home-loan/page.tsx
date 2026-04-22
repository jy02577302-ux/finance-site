import { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/calculator";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "房屋贷款 | STRESS FREE FINANCE",
  description: "房屋贷款 - 免费服务，100+银行和贷款机构。专业房贷经纪全程协助，节省您的时间和精力。",
  keywords: "房屋贷款, 自住房贷款, 澳洲房贷, 首次置业, 免费房贷经纪, 快速审批"
};

export default function HomeLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/zh/products" className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回产品列表
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">房屋贷款</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            无论是首次购房、重新贷款还是投资房产，我们的房贷经纪将为您提供全程专业建议。
          </p>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">我们的承诺</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "免费服务",
                desc: "我们的房屋贷款服务对您完全免费，因为贷款机构支付我们的费用。您无需支付任何咨询费。",
                icon: "🆓"
              },
              {
                title: "节省您的时间",
                desc: "研究 hundreds of products 和处理繁琐的 paperwork 需要花费大量时间。让我们为您搞定一切，您只需专注于更重要的事。",
                icon: "⏰"
              },
              {
                title: "为您的最佳利益",
                desc: "我们不会偏向任何贷款机构。我们会根据您的具体需求和情况，选择最适合您的产品和方案。",
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

      {/* Calculator CTA */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">想知道您可以借多少？</h2>
                <p className="text-gray-600 mb-6">
                  使用我们的在线计算器快速估算您的借款能力和月供。完全免费，无需注册。
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 快速估算月供</li>
                  <li>• 查看总利息支出</li>
                  <li>• 对比不同利率的影响</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Calculator compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">为什么选择我们</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">丰富经验</h3>
              <p className="text-gray-600 leading-relaxed">
                数百个成功案例。我们的房贷经纪团队将全程陪伴，从最初咨询到最终 settlement，确保您理解每一个步骤。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">优质服务</h3>
              <p className="text-gray-600 leading-relaxed">
                我们的大部分业务来自客户口碑推荐。我们致力于提供顶级服务和专业水准，超越客户期望。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">持续支持</h3>
              <p className="text-gray-600 leading-relaxed">
                我们拥有专门的贷款处理团队，这使我们能够在贷款成功后继续为您提供灵活、持续的支持服务。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">我们的流程</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "初步咨询", desc: "与我们分享您的需求和财务状况，我们会认真聆听" },
              { step: "2", title: "方案匹配", desc: "从 100+ 贷款机构中为您筛选最合适的产品" },
              { step: "3", title: "申请处理", desc: "我们负责所有 paperwork，与银行和各方沟通" },
              { step: "4", title: "成功放款", desc: " Settlement 完成后，我们继续提供支持" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">准备好开始了吗？</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            免费咨询，无任何义务。让我们帮您找到最适合的房屋贷款方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0412892782"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-primary-800 font-semibold hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" />
              致电 0412 892 782
            </a>
            <a
              href="/zh/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-primary-800"
            >
              <Mail className="w-5 h-5" />
              在线预约
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
