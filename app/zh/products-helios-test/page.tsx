import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, TrendingUp, HardHat, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "贷款产品 - Helios 风格测试 | STRESS FREE FINANCE",
  description: "Helios 风格产品页面测试",
};

export default function ProductsPageHeliosTest() {
  const products = [
    {
      title: "房屋贷款",
      icon: Home,
      href: "/zh/products/home-loan",
      description: "为自住或投资购买房产提供具有竞争力的利率和灵活的还款方式。",
      features: [
        "利率从 5.89% 起",
        "无月费，透明收费",
        "支持抵消账户",
        "快速审批 48 小时",
      ],
    },
    {
      title: "商业贷款",
      icon: TrendingUp,
      href: "/zh/products/business-loan",
      description: "为企业和投资者提供灵活的商业融资方案，助力业务增长。",
      features: [
        "商业地产贷款",
        "企业营运资金",
        "设备融资方案",
        "灵活还款结构",
      ],
    },
    {
      title: "开发贷款",
      icon: HardHat,
      href: "/zh/products/development-loan",
      description: "支持房地产开发商和土地分割项目，提供分期拨款和专业指导。",
      features: [
        "按工程进度拨款",
        "完工自动转为永久贷款",
        "只付利息 during construction",
        "开发专家全程支持",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: '#f0f4f4', fontFamily: "'Source Sans Pro', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/business-office.jpg"
            alt="STRESS FREE FINANCE 贷款产品"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#fff', fontWeight: 300 }}>我们的贷款产品</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            无论您是首次置业、投资房产，还是建造梦想家园，我们都有合适的方案。
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8" style={{ background: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2" style={{ background: '#f0f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg className="w-5 h-5" style={{ color: '#df7366' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>免费服务</h3>
              <p className="text-xs text-gray-500">贷款经纪费由银行支付</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2" style={{ background: '#f0f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg className="w-5 h-5" style={{ color: '#df7366' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>30+ 机构</h3>
              <p className="text-xs text-gray-500">覆盖主流银行与非银</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2" style={{ background: '#f0f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg className="w-5 h-5" style={{ color: '#df7366' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>快速审批</h3>
              <p className="text-xs text-gray-500">大多数 48 小时内</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full mx-auto mb-2" style={{ background: '#f0f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg className="w-5 h-5" style={{ color: '#df7366' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-sm" style={{ color: '#483949' }}>专业可靠</h3>
              <p className="text-xs text-gray-500">成立多年，1000+客户</p>
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

              return (
                <div key={product.title} className="bg-white rounded-xl" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'box-shadow 0.3s', border: '1px solid #e5e5e5' }}>
                  {/* Card Header */}
                  <div className="p-6" style={{ background: '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ background: '#df7366' }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-center" style={{ color: '#483949', fontWeight: 400 }}>{product.title}</h2>
                    <p className="text-center text-gray-500 text-sm leading-relaxed">{product.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <div className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#df7366' }}>
                            <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className="block w-full text-center py-2.5 px-6 rounded-full font-semibold transition-colors"
                      style={{ background: '#df7366', color: '#fff' }}
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="mt-12 p-8 rounded-lg" style={{ background: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#483949', fontWeight: 400 }}>为什么选择我们？</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ background: '#2B252C' }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#483949' }}>专业团队</h3>
                <p className="text-gray-500">10+ 年行业经验，持牌经纪为您服务</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ background: '#2B252C' }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#483949' }}>快速审批</h3>
                <p className="text-gray-500">大多数申请 48 小时内获批</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ background: '#2B252C' }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#483949' }}>免费评估</h3>
                <p className="text-gray-500">初次咨询完全免费，无任何义务</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#483949', fontWeight: 400 }}>不确定哪种产品适合您？</h2>
            <p className="text-gray-500 mb-6">
              我们的专家将根据您的财务状况和目标，推荐最优方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors rounded-full"
                style={{ background: '#df7366', color: '#fff' }}
              >
                <Phone className="w-5 h-5" />
                致电 0412 892 782
              </a>
              <a
                href="/zh/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors rounded-full border"
                style={{ borderColor: '#e5e5e5', color: '#483949' }}
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
