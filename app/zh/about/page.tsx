import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Award, Clock, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "关于我们 | STRESS FREE FINANCE",
  description: "STRESS FREE FINANCE 成立于 2015 年，拥有 10+ 年经验的房贷经纪团队。已帮助 5000+ 家庭实现置业梦想。",
  keywords: "关于 STRESS FREE FINANCE, 房贷经纪, 墨尔本房贷, 贷款专家, AFS 牌照"
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于 STRESS FREE FINANCE</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            我们致力于为澳大利亚家庭提供专业、透明、高效的房贷服务，让置业变得轻松简单。
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
              <p className="text-gray-700 mb-4">
                STRESS FREE FINANCE 成立于 2015 年，由一群拥有超过 10 年行业经验的房贷经纪创立。我们的创始人曾服务于澳洲四大银行，深知传统房贷流程的繁琐与不便。
              </p>
              <p className="text-gray-700 mb-4">
                我们的使命是让每个人都能轻松获得专业、透明的房贷服务。我们相信，好的金融产品不应该被复杂的过程所掩盖。因此，我们简化了每一步，用专业和热情服务每一位客户。
              </p>
              <p className="text-gray-700">
                如今，我们已经帮助超过 5000 个家庭实现了置业梦想，管理贷款总额超过 20 亿澳元。但我们最骄傲的，不是这些数字，而是客户的口碑和推荐。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">5000+</p>
                  <p className="text-gray-600">满意客户</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">$2B+</p>
                  <p className="text-gray-600">管理贷款</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">48h</p>
                  <p className="text-gray-600">平均审批</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">10+</p>
                  <p className="text-gray-600">年行业经验</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <h2 className="text-3xl font-bold mb-8">我们的价值观</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
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
                title: "高效执行",
                desc: "简化流程，48 小时预批，让我们为您节省宝贵时间。",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Team Overview */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">我们的团队</h2>
            <p className="text-gray-700 mb-6">
              我们的房贷经纪团队均持有澳洲金融牌照（AFS License），并定期参加培训以保持专业水准。无论您是首次置业者、经验丰富的投资者，还是需要建筑贷款，我们都有对应专家为您服务。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "John Smith", title: "高级房贷经纪", specialty: "首次置业", exp: "12 年" },
                { name: "Sarah Chen", title: "投资贷款专家", specialty: "投资组合", exp: "8 年" },
                { name: "Michael Wong", title: "建筑贷款顾问", specialty: "建筑贷款", exp: "10 年" },
              ].map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-xl border text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-gray-500">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary-700 mb-1">{member.title}</p>
                  <p className="text-sm text-gray-500">{member.specialty} · {member.exp}经验</p>
                </div>
              ))}
            </div>
          </div>

          {/* Licenses */}
          <h2 className="text-2xl font-bold mb-6">牌照与合规</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "AFCA", full: "澳大利亚金融投诉局 (AFCA)", desc: "会员编号: 123456" },
              { name: "MFAA", full: "Mortgage & Finance Association of Australia", desc: "认证会员" },
              { name: "ASIC", full: "Australian Securities & Investments Commission", desc: "AFS 牌照: 123456" },
            ].map((license) => (
              <div key={license.name} className="border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{license.full}</h3>
                <p className="text-gray-600">{license.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">准备好与我们合作了吗？</h2>
            <p className="text-gray-600 mb-6">
              无论您处于哪个阶段，我们都乐意提供免费、专业的建议。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300123456"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-700 px-8 py-4 text-white font-semibold hover:bg-primary-600"
              >
                致电 1300 123 456
              </a>
              <a
                href="/zh/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-4 text-gray-900 font-semibold hover:bg-gray-50"
              >
                在线预约
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
