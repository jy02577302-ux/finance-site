import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "商业贷款 | STRESS FREE FINANCE",
  description: "商业贷款 - 免费服务，100+贷款机构。商业地产、营运资金、设备融资。快速审批，透明费用。",
  keywords: "商业贷款, 商业房贷, 企业贷款, 商业地产贷款, 设备融资, 澳洲商业贷款, 免费房贷经纪"
};

export default function BusinessLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/zh/products" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回产品列表
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">商业贷款</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-2xl">
            为企业和投资者提供灵活的商业融资方案，助您拓展业务、投资商业地产。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Benefits Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "🆓", title: "免费服务", desc: "贷款经纪费由银行支付" },
              { icon: "🏦", title: "100+ 机构", desc: "access to 100+ lenders" },
              { icon: "⚡", title: "快速审批", desc: "大多数申请快速处理" },
              { icon: "💎", title: "专业团队", desc: "10+ 年商业贷款经验" },
            ].map((benefit, i) => (
              <div key={i} className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">{benefit.icon}</p>
                <h3 className="font-bold text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">为什么选择我们的商业贷款？</h2>
              <ul className="space-y-4">
                {[
                  "商业地产购买与再融资（办公、零售、工业）",
                  "企业营运资金支持，灵活周转",
                  "设备与车辆融资方案",
                  "定制化还款结构和利率选项",
                  "高效的审批流程",
                  "专业商业顾问一对一服务",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">适合人群</h3>
              <div className="space-y-4">
                {[
                  { role: "企业主", desc: "扩张业务、购置物业、设备升级", icon: "🏢" },
                  { role: "投资者", desc: "投资商业地产、零售、工业项目", icon: "🏙️" },
                  { role: "开发商", desc: "土地开发、项目融资需求", icon: "🏗️" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.role}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Loan Types */}
          <h2 className="text-3xl font-bold mb-6">我们的商业贷款方案</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "商业地产贷款",
                desc: "购买或再融资办公、零售、工业物业。灵活的条款和 competitive rates。"
              },
              {
                title: "企业营运资金",
                desc: "短期到中期资金，满足运营现金流和扩张需求。"
              },
              {
                title: "设备融资",
                desc: "商业车辆、机械、设备的融资租赁方案。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">需要商业贷款支持？</h2>
            <p className="text-gray-600 mb-6">
              我们的商业贷款专家将根据您的业务需求，提供定制化融资方案。
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
