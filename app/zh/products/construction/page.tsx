import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "建筑贷款 | STRESS FREE FINANCE",
  description: "建筑贷款支持分期拨款、完工自动转永久房贷。适合建造新房、重大翻新。专业建筑贷款顾问。",
  keywords: "建筑贷款, 建房贷款, progress payment, 分期拨款, construction loan, 澳洲建筑贷款"
};

export default function ConstructionLoanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/construction-site-v2.jpg"
            alt="Construction Site - Construction Loan"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <HardHat className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">建筑贷款</h1>
          </div>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            建造梦想家园？我们提供分期拨款、无缝转房贷，全程专业支持。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">为什么选择我们的建筑贷款？</h2>
              <ul className="space-y-4">
                {[
                  "按工程进度分期拨款，控制资金风险",
                  "完工后自动转为永久房贷，无缝衔接",
                  "支持固定价格合同和成本-plus 合同",
                  "只需支付利息 during construction",
                  "建筑专家一对一服务，全程跟踪",
                  "灵活锁定利率，避免 settles 前利率上涨",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-xl font-bold mb-4">典型建筑时间线</h3>
              <div className="space-y-4">
                {[
                  { phase: "申请预批", time: "1-2 周" },
                  { phase: "选择建筑商/合同", time: "2-4 周" },
                  { phase: "正式申请 & 评估", time: "2-3 周" },
                  { phase: " Settlement（首次拨款）", time: "1 周" },
                  { phase: "施工期间（分期拨款）", time: "6-12 月" },
                  { phase: "完工 & 转为永久房贷", time: "2-4 周" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="font-medium">{item.phase}</span>
                    <span className="text-amber-700 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawdown process */}
          <h2 className="text-3xl font-bold mb-6">分期拨款流程</h2>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { num: "1", title: "地基完成", desc: "通常在 settlement 后 1-2 月" },
              { num: "2", title: "框架完成", desc: "建筑的 structural frame 完成" },
              { num: "3", title: "封顶", desc: "屋顶和外墙完成，房屋防水" },
              { num: "4", title: "内装", desc: "水电、石膏板、油漆等" },
              { num: "5", title: "完工", desc: "最终检查，颁发 occupancy permit" },
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

          {/* Interest Rates Reference */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-bold mb-4 text-center">📊 建筑贷款利率参考 (2026年4月)</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-gray-600 mb-1">新建住宅</p>
                    <p className="text-2xl font-bold text-amber-700">6.79% - 7.99%</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-gray-600 mb-1">翻新/扩建</p>
                    <p className="text-2xl font-bold text-amber-700">7.29% - 8.49%</p>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-3">* 利率取决于项目类型、LVR、建筑商资质和您的信用状况</p>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <div className="container mx-auto px-4 -mt-8 relative z-10">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/products/construction-site-v2.jpg"
                alt="建筑施工场地 - 建筑贷款"
                width={1200}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Important notes */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-4">重要注意事项</h3>
            <ul className="space-y-3">
              {[
                "建筑贷款通常要求更高首付（通常 20%+）",
                "需要提供建筑合同、规格书、建筑商执照等文件",
                "期间可能只支付利息，降低现金流压力",
                "建议使用 progress inspection，确保每阶段拨款前工程合格",
                "完工转为永久房贷时，利率可能根据当前市场重新定价",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interest Rates Reference */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-bold mb-4 text-center">📊 建筑贷款利率参考 (2026年4月)</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-gray-600 mb-1">标准建筑贷款</p>
                    <p className="text-2xl font-bold text-amber-700">6.39% - 7.29%</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-gray-600 mb-1">新建住宅</p>
                    <p className="text-2xl font-bold text-amber-700">6.29% - 7.19%</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-gray-600 mb-1">重大翻新</p>
                    <p className="text-2xl font-bold text-amber-700">6.59% - 7.49%</p>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-3">* 利率取决于项目类型、LVR、建筑商资质和贷款机构</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">准备开始建造？</h2>
            <p className="text-gray-600 mb-6">
              我们的建筑贷款专家将全程协助，确保您的项目顺利进行。
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
