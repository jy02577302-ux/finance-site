import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, TrendingUp, HardHat, ArrowRight, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "贷款产品 - 金色风格测试 | STRESS FREE FINANCE",
  description: "金色高端风格产品页面测试",
};

export default function ProductsPageGoldTest() {
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
    <div className="min-h-screen bg-white">
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>我们的贷款产品</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            无论您是首次置业、投资房产，还是建造梦想家园，我们都有合适的方案。
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div key={product.title} className="bg-white rounded-lg" style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(212, 168, 85, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(212, 168, 85, 0.15)'
                }}>
                  {/* Card Header */}
                  <div className="p-8 border-b" style={{
                    borderColor: 'rgba(212, 168, 85, 0.2)',
                    background: 'linear-gradient(135deg, #fdfbf7 0%, #ffffff 100%)'
                  }}>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                      boxShadow: '0 4px 12px rgba(212, 168, 85, 0.3)'
                    }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>{product.title}</h2>
                    <p className="text-center text-gray-600 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <div className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#d4a855' }}>
                            <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className="block w-full text-center py-3 px-6 font-semibold transition-all rounded-sm"
                      style={{
                        background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                      }}
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 p-8 rounded-lg" style={{
            background: '#fff',
            border: '1px solid rgba(212, 168, 85, 0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>为什么选择我们？</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>专业团队</h3>
                <p className="text-gray-600">10+ 年行业经验，持牌经纪为您服务</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>快速审批</h3>
                <p className="text-gray-600">大多数申请 48 小时内获批</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>免费评估</h3>
                <p className="text-gray-600">初次咨询完全免费，无任何义务</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>不确定哪种产品适合您？</h2>
            <p className="text-gray-600 mb-6">
              我们的专家将根据您的财务状况和目标，推荐最优方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-all rounded-sm"
                style={{
                  background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
                }}
              >
                <Phone className="w-5 h-5" />
                致电 0412 892 782
              </a>
              <a
                href="/zh/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors rounded-sm"
                style={{
                  background: 'transparent',
                  color: '#1a1a1a',
                  border: '1px solid rgba(212, 168, 85, 0.4)'
                }}
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
