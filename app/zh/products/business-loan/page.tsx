import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "商业贷款 | STRESS FREE FINANCE",
  description: "商业贷款为企业和投资者提供灵活融资方案。商业地产、营运资金、设备融资。专业顾问服务。",
  keywords: "商业贷款, 商业房贷, 企业贷款, 商业地产贷款, 设备融资, 澳洲商业贷款"
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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">为什么选择我们的商业贷款？</h2>
              <ul className="space-y-4">
                {[
                  "商业地产购买与再融资",
                  "企业营运资金支持",
                  "设备与车辆融资",
                  "灵活的还款结构和利率选项",
                  "快速审批流程",
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">企业主</p>
                    <p className="text-sm text-gray-500">扩张业务、购置物业、升级设备</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">投资者</p>
                    <p className="text-sm text-gray-500">投资商业地产、零售物业、工业厂房</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">开发商</p>
                    <p className="text-sm text-gray-500">土地开发、项目融资、建筑贷款</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Types */}
          <h2 className="text-3xl font-bold mb-6">我们的商业贷款方案</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "商业地产贷款",
                desc: "购买或再融资商业物业，包括办公、零售、工业地产。"
              },
              {
                title: "企业营运资金",
                desc: "短期或中期资金支持，满足日常运营和扩张需求。"
              },
              {
                title: "设备融资",
                desc: "为商业设备、车辆、机械等提供融资租赁方案。"
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
