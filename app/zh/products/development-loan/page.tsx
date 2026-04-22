import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "开发贷款 | STRESS FREE FINANCE",
  description: "开发贷款支持土地分割、住宅和商业开发项目。按进度拨款，灵活条件，开发专家全程支持。",
  keywords: "开发贷款, 建筑贷款, 土地开发, 项目融资, progress payment, 澳洲开发贷款, 建筑贷款"
};

export default function DevelopmentLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/zh/products" className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回产品列表
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <HardHat className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">开发贷款</h1>
          </div>
          <p className="text-xl text-amber-100 max-w-2xl">
            支持土地分割、住宅和商业开发项目。按工程进度分期拨款，全程专业指导。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">为什么选择我们的开发贷款？</h2>
              <ul className="space-y-4">
                {[
                  "土地分割与规化项目融资",
                  "住宅开发（别墅、公寓楼）",
                  "商业开发（零售、工业）",
                  "按工程进度分期拨款",
                  "完工后自动转为永久贷款",
                  "开发专家全程支持",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">典型开发流程</h3>
              <div className="space-y-4">
                {[
                  { phase: "预审批", time: "1-2 周" },
                  { phase: "选择地块/项目", time: "2-4 周" },
                  { phase: "正式申请与评估", time: "2-3 周" },
                  { phase: "Settlement（首次拨款）", time: "1 周" },
                  { phase: "施工期间（分期拨款）", time: "6-18 月" },
                  { phase: "完工与转永久贷款", time: "2-4 周" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="font-medium">{item.phase}</span>
                    <span className="text-amber-700 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawdown stages */}
          <h2 className="text-3xl font-bold mb-6">分期拨款阶段</h2>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { num: "1", title: "地基完成", desc: "Settlement 后 1-2 月" },
              { num: "2", title: "框架完成", desc: "建筑框架完工" },
              { num: "3", title: "封顶", desc: "屋顶和外墙完成，房屋防水" },
              { num: "4", title: "内装", desc: "水电、石膏板、油漆等" },
              { num: "5", title: "完工", desc: "最终检查，颁发入住证" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.num}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Important notes */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-4">重要注意事项</h3>
            <ul className="space-y-3">
              {[
                "开发贷款通常要求更高首付（通常 20%-30%）",
                "需要提供开发计划、建筑合同、成本预算等文件",
                "期间通常只支付利息，降低现金流压力",
                "建议使用进度检查，确保每阶段工程合格",
                "完工转为永久贷款时，利率可能根据当前市场重新定价",
                "开发商需持有相关执照和保险",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">准备开始开发项目？</h2>
            <p className="text-gray-600 mb-6">
              我们的开发贷款专家将全程协助，确保您的项目顺利进行。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-700 px-8 py-4 text-white font-semibold hover:bg-amber-600"
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
