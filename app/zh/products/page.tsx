import { Metadata } from "next";
import Link from "next/link";
import { Home, TrendingUp, HardHat, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "贷款产品 | STRESS FREE FINANCE",
  description: "我们提供房屋贷款、商业贷款和开发贷款。免费服务，100多家银行和贷款机构选择。快速审批，透明费用。",
  keywords: "房屋贷款, 商业贷款, 开发贷款, 澳洲房贷, 低利率, 快速审批, 墨尔本房贷, 免费咨询"
};

export default function ProductsPage() {
  const products = [
    {
      title: "房屋贷款",
      icon: Home,
      color: "primary",
      href: "/zh/products/home-loan",
      description: "为自住或投资购买房产提供具有竞争力的利率和灵活的还款方式。",
      features: [
        "利率从 5.89% 起",
        "无月费，透明收费",
        "支持抵消账户",
        "快速审批 48 小时",
      ],
      cta: "了解详情",
    },
    {
      title: "商业贷款",
      icon: TrendingUp,
      color: "emerald",
      href: "/zh/products/business-loan",
      description: "为企业和投资者提供灵活的商业融资方案，助力业务增长。",
      features: [
        "商业地产贷款",
        "企业营运资金",
        "设备融资方案",
        "灵活还款结构",
      ],
      cta: "了解详情",
    },
    {
      title: "开发贷款",
      icon: HardHat,
      color: "amber",
      href: "/zh/products/development-loan",
      description: "支持房地产开发商和土地分割项目，提供分期拨款和专业指导。",
      features: [
        "按工程进度拨款",
        "完工自动转为永久贷款",
        "只付利息 during construction",
        "开发专家全程支持",
      ],
      cta: "了解详情",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我们的贷款产品</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            无论您是首次置业、投资房产，还是建造梦想家园，我们都有合适的方案。
          </p>
        </div>
      </section>

      {/* Why Choose Us - Benefits */}
      <section className="py-8 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-sm">免费服务</h3>
              <p className="text-xs text-gray-600">贷款经纪费由银行支付，不向您收费</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="font-bold text-sm">100+ 机构</h3>
              <p className="text-xs text-gray-600"> access to 100+ lenders 和贷款产品</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-bold text-sm">快速审批</h3>
              <p className="text-xs text-gray-600">大多数申请 48 小时内获批</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-sm">专业可靠</h3>
              <p className="text-xs text-gray-600">持牌经纪，2015年成立，5000+满意客户</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              const isPrimary = product.color === "primary";
              const bgColor = isPrimary ? "bg-primary-700" : product.color === "emerald" ? "bg-emerald-700" : "bg-amber-700";
              const hoverColor = isPrimary ? "hover:bg-primary-800" : "hover:bg-opacity-90";

              return (
                <div key={product.title} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                  <div className="bg-primary-700 text-white p-6">
                    <Icon className="w-10 h-10 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-primary-100">{product.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className="bg-primary-700 hover:bg-primary-800 text-white w-full justify-between inline-flex items-center px-6 py-3 rounded-lg font-semibold"
                    >
                      {product.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">为什么选择我们？</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold mb-2">专业团队</h3>
                <p className="text-gray-600">10+ 年行业经验，持牌经纪为您服务</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-bold mb-2">快速审批</h3>
                <p className="text-gray-600">大多数申请 48 小时内获批</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold mb-2">免费评估</h3>
                <p className="text-gray-600">初次咨询完全免费，无任何义务</p>
              </div>
            </div>
          </div>

          {/* Interest Rates Overview */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">
              <h3 className="text-xl font-bold mb-4 text-center">📊 当前基准利率参考 (2026年4月)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  { label: "自住浮动", range: "5.89% - 6.49%", color: "text-primary-700" },
                  { label: "自住固定(1-3年)", range: "5.69% - 6.29%", color: "text-primary-700" },
                  { label: "投资贷款", range: "6.09% - 6.79%", color: "text-emerald-700" },
                  { label: "只还利息", range: "6.29% - 6.99%", color: "text-amber-700" },
                  { label: "商业地产", range: "6.29% - 7.19%", color: "text-emerald-700" },
                  { label: "开发贷款", range: "6.79% - 8.29%", color: "text-amber-700" },
                  { label: "建筑贷款", range: "6.29% - 7.49%", color: "text-amber-700" },
                  { label: "设备融资", range: "6.99% - 8.99%", color: "text-emerald-700" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-1 text-xs">{item.label}</p>
                    <p className={`text-xl font-bold ${item.color}`}>{item.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-gray-500 mt-3">* 利率仅供参考，实际利率取决于 LVR、贷款规模、信用状况和具体条款</p>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">不确定哪种产品适合您？</h2>
            <p className="text-gray-600 mb-6">
              我们的专家将根据您的财务状况和目标，推荐最优方案。
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
