import { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/calculator";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "房屋贷款 | STRESS FREE FINANCE",
  description: "房屋贷款 - 免费服务，100+银行和贷款机构选择。低利率从 5.89% 起，快速审批 48 小时。",
  keywords: "房屋贷款, 自住房贷款, 低利率房贷, 抵消账户, 澳洲房屋贷款, 首次置业, 免费房贷经纪"
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
            为自住家庭提供具有竞争力的利率和灵活的还款方式，助您轻松实现置业梦想。
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
              { icon: "⚡", title: "快速审批", desc: "大多数 48 小时内" },
              { icon: "💎", title: "优质客户", desc: "5000+ 满意客户" },
            ].map((benefit, i) => (
              <div key={i} className="bg-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">{benefit.icon}</p>
                <h3 className="font-bold text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">为什么选择我们的房屋贷款？</h2>
              <ul className="space-y-4">
                {[
                  "利率从 5.89% 起（p.a.）",
                  "无月费，透明收费，无隐藏成本",
                  "100% 抵消账户（Offset）免费，节省利息",
                  "灵活的还款频率（每周/每两周/每月）",
                  "快速审批，平均 48 小时内完成",
                  "支持本息同还和只还利息选项",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border">
              <Calculator compact />
              <p className="text-center text-sm text-gray-500 mt-4">
                * 利率仅供参考，实际利率根据贷款金额、LVR 和个人信用情况确定
              </p>
            </div>
          </div>

          {/* How it works */}
          <h2 className="text-3xl font-bold mb-8">贷款流程</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { step: "1", title: "免费咨询", desc: "与我们的房贷经纪初步沟通，了解您的需求和财务状况" },
              { step: "2", title: "贷款预审", desc: "快速评估您的 borrowing capacity，获得预批证书" },
              { step: "3", title: "选择房产", desc: "在预批范围内寻找心仪的房产，正常 bid/offer" },
              { step: "4", title: "正式申请", desc: "提交完整文件，我们处理所有审批和 settlement 事宜" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">准备开始您的置业之旅？</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              立即联系我们，获得免费评估和个性化贷款方案。我们的专家团队将全程协助您。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-700 px-8 py-4 text-white font-semibold hover:bg-primary-600"
              >
                <Phone className="w-5 h-5" />
                致电 0412 892 782
              </a>
              <a
                href="/zh/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-4 text-gray-900 font-semibold hover:bg-gray-50"
              >
                <Mail className="w-5 h-5" />
                在线咨询
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
