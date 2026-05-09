import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Award, Clock, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "关于我们 | STRESS FREE FINANCE",
  description: "STRESS FREE FINANCE 成立于 2015 年，拥有 10+ 年经验的房贷经纪团队。已帮助 1000+ 家庭实现置业梦想。",
  keywords: "关于 STRESS FREE FINANCE, 房贷经纪, 墨尔本房贷, 贷款专家, AFS 牌照"
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/sff.jpg"
            alt="STRESS FREE FINANCE 办公室"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>关于 STRESS FREE FINANCE</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            我们致力于为澳大利亚家庭提供专业、透明、高效的房贷服务，让置业变得轻松简单。
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>我们的故事</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                STRESS FREE FINANCE 成立于 2015 年，由一群拥有超过 10 年行业经验的房贷经纪创立。我们的创始人曾服务于澳洲四大银行，深知传统房贷流程的繁琐与不便。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                我们的使命是让每个人都能轻松获得专业、透明的房贷服务。我们相信，好的金融产品不应该被复杂的过程所掩盖。因此，我们简化了每一步，用专业和热情服务每一位客户。
              </p>
              <p className="text-gray-700 leading-relaxed">
                如今，我们已经帮助超过 5000 个家庭实现了置业梦想，管理贷款总额超过 20 亿澳元。但我们最骄傲的，不是这些数字，而是客户的口碑和推荐。
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>1000+</p>
                  <p className="text-gray-600">满意客户</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>$2B+</p>
                  <p className="text-gray-600">管理贷款</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>48h</p>
                  <p className="text-gray-600">平均审批</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>10+</p>
                  <p className="text-gray-600">年行业经验</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>我们的合作机构</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                30+机构，海量贷款方案。覆盖本地主流银行与非银机构，综合比较利率、费用与灵活度，从上千方案中为你快速筛选更合适的贷款结构。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在澳洲相关监管机构监管框架下，我们与20多家澳洲银行及非银行机构保持长期合作关系，并与多家银行的资深 Banker 保持良好沟通渠道，有助于为您争取更合适的产品与更顺畅的审批体验。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border" style={{ borderColor: 'rgba(212, 168, 85, 0.15)' }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "anz_logo.jpg",
                  "commonwealth_bank_logo.png",
                  "westpac_logo.jpg",
                  "nab_logo.jpg",
                  "boq_logo.png",
                  "ing_logo.png",
                  "amp_logo.png",
                  "pepper_logo.png",
                  "la_trobe_logo.png",
                  "liberty_logo.png",
                  "resimac_logo.png",
                  "brighten_logo.png",
                  "citybank_logo.jpg",
                  "chinabank_logo.jpg",
                  "st_logo.jpg",
                  "sun_logo.jpg",
                  "bc_invest_logo.png"
                ].map((logo, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-xl flex items-center justify-center hover:bg-primary-50 transition">
                    <Image
                      src={`/images/partners/${logo}`}
                      alt={`合作机构 ${idx+1}`}
                      width={140}
                      height={90}
                      className="object-contain max-h-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>我们的价值观</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "诚信为本",
                  desc: "我们承诺透明收费，无隐藏费用。每一笔贷款都经得起审视。",
                },
                {
                  icon: Users,
                  title: "客户至上",
                  desc: "您的利益是我们优先考虑。我们提供 free, no-obligation 咨询。",
                },
                {
                  icon: Award,
                  title: "专业精神",
                  desc: "持续学习，掌握最新政策和产品。我们的建议 always in your best interest.",
                },
                {
                  icon: Clock,
                  title: "效率优先",
                  desc: "简化流程，48 小时预审批，为您节省宝贵时间。",
                },
              ].map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)' }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#1a1a1a' }}>{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>准备好与我们合作了吗？</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            无论您处于哪个阶段，我们都乐意提供免费、专业的建议。
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
              在线预约
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
