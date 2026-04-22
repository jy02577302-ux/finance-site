import { Metadata } from "next";
import Link from "next/link";
import { Home, TrendingUp, HardHat, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "贷款产品 | STRESS FREE FINANCE",
  description: "我们提供房屋贷款、投资贷款和建筑贷款。低利率、快速审批、透明费用。免费咨询。",
  keywords: "房屋贷款, 投资贷款, 建筑贷款, 澳洲房贷, 低利率, 快速审批, 墨尔本房贷"
};

export default function ProductsPage() {
  const products = [
    {
      title: "房屋贷款",
      icon: Home,
      color: "primary",
      href: "/zh/products/home-loan",
      description: "为自住家庭提供具有竞争力的利率和灵活的还款方式。",
      features: [
        "利率从 5.89% 起",
        "无月费，透明收费",
        "支持抵消账户",
        "快速审批 48 小时",
      ],
      cta: "了解详情",
    },
    {
      title: "投资贷款",
      icon: TrendingUp,
      color: "emerald",
      href: "/zh/products/investment",
      description: "最大化房产投资回报，提供税务优化方案和灵活信贷额度。",
      features: [
        "只还利息选项",
        "灵活信用额度",
        "税务优化建议",
        "多套投资管理",
      ],
      cta: "了解详情",
    },
    {
      title: "建筑贷款",
      icon: HardHat,
      color: "amber",
      href: "/zh/products/construction",
      description: "分期拨款、无缝转房贷，全程专业支持。",
      features: [
        "按工程进度拨款",
        "完工自动转永久房贷",
        "只付利息 during construction",
        "建筑专家一对一",
      ],
      cta: "了解详情",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我们的贷款产品</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            无论您是首次置业、投资房产，还是建造梦想家园，我们都有合适的方案。
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              const isPrimary = product.color === "primary";
              const bgColor = isPrimary ? "bg-primary-700" : product.color === "emerald" ? "bg-emerald-700" : "bg-amber-700";
              const hoverColor = isPrimary ? "hover:bg-primary-800" : "hover:bg-opacity-90";

              return (
                <div key={product.title} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                  <div className={`${bgColor} text-white p-6`}>
                    <Icon className="w-10 h-10 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-white/80">{product.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className={`${bgColor} ${hoverColor} text-white w-full justify-between inline-flex items-center px-6 py-3 rounded-lg font-semibold`}
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

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">不确定哪种产品适合您？</h2>
            <p className="text-gray-600 mb-6">
              我们的专家将根据您的财务状况和目标，推荐最优方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300123456"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-700 px-8 py-4 text-white font-semibold hover:bg-primary-600"
              >
                <Phone className="w-5 h-5" />
                致电 1300 123 456
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
