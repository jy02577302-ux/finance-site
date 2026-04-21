import Link from "next/link";
import Calculator from "@/components/calculator";
import TestimonialCard from "@/components/testimonial-card";

export default function HomePageZH() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            轻松贷款，无压力 <span className="text-accent-400">STRESS FREE FINANCE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-100">
            墨尔本专业房贷经纪 · 免费评估 · 快速审批 · 透明费用
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/zh/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent-500 px-8 py-6 text-lg font-semibold text-black hover:bg-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            >
              免费评估
            </a>
            <a
              href="/zh/calculators"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            >
              在线计算
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 items-center">
          <span className="text-sm font-medium text-gray-600">持牌机构：</span>
          <div className="flex gap-8 text-gray-500">
            <span className="font-bold text-xl">AFCA</span>
            <span className="font-bold text-xl">MFAA</span>
            <span className="font-bold text-xl">ASIC</span>
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                估算您的房贷还款
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                使用我们的计算器快速估算月供、总利息，并了解不同利率和期限对贷款的影响。透明计算，无隐藏费用。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>房屋贷款、投资贷款、建筑贷款</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>包含印花税和费用估算</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>即时结果，无需注册</span>
                </li>
              </ul>
              <a
                href="/zh/calculators"
                className="inline-flex items-center justify-center rounded-md bg-primary-700 px-6 py-3 text-base font-medium text-white hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                打开计算器
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <Calculator compact />
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">我们的贷款产品</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">房屋贷款</h3>
              <p className="text-gray-600 mb-6">为自住家庭提供具有竞争力的利率，灵活的还款方式，助您轻松置业。</p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• 低利率从 5.89% 起</li>
                <li>• 无月费，透明收费</li>
                <li>• 支持抵消账户（Offset）</li>
                <li>• 快速审批，平均 48 小时</li>
              </ul>
              <a href="/zh/products/home-loan" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                立即咨询
              </a>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">投资贷款</h3>
              <p className="text-gray-600 mb-6">最大化您的房产投资回报，提供税务优化方案和灵活信贷额度。</p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• 只还利息选项，减轻现金流压力</li>
                <li>• 信用额度（Line of Credit）</li>
                <li>• 打包优惠，降低整体成本</li>
                <li>• 利息可抵税，专业建议</li>
              </ul>
              <a href="/zh/products/investment" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                立即咨询
              </a>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">建筑贷款</h3>
              <p className="text-gray-600 mb-6">建造梦想家园？我们提供分期拨款、无缝转房贷，全程专业支持。</p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• 按工程进度分期拨款</li>
                <li>• 完工后自动转为永久房贷</li>
                <li>• 支持固定价格合同</li>
                <li>• 建筑专家一对一服务</li>
              </ul>
              <a href="/zh/products/construction" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                立即咨询
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">为什么选择 STRESS FREE FINANCE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">专家团队</h3>
              <p className="text-gray-600">我们的房贷经纪拥有 10+ 年墨尔本本地经验，精通各类贷款产品。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">快速审批</h3>
              <p className="text-gray-600">简化流程，大多数申请 48 小时内获批，无需漫长等待。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">免费评估，无任何义务</h3>
              <p className="text-gray-600">初次咨询完全免费，不收取任何费用，您可安心比较方案。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">客户评价</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah J."
              location="墨尔本"
              text="我的第一套房贷只用了两天就获批，整个过程非常顺畅！强烈推荐。"
            />
            <TestimonialCard
              name="Mike T."
              location="悉尼"
              text="帮我重新贷款，每月省了 $400。专业且高效，非常感谢！"
            />
            <TestimonialCard
              name="Lisa K."
              location="布里斯班"
              text=" Stress Free Finance 让买房变得如此轻松。经纪人对每个细节都耐心解释。"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">准备好轻松置业了吗？</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            免费评估，无任何义务。让我们帮您找到最合适的贷款方案。
          </p>
          <a
            href="/zh/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-10 py-6 text-lg font-bold text-accent-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            预约免费评估
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">STRESS FREE FINANCE</h4>
            <p className="text-sm">专业、透明、高效的房贷服务，助您轻松实现置业梦想。</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/zh/products" className="hover:text-white">产品</Link></li>
              <li><Link href="/zh/calculators" className="hover:text-white">计算器</Link></li>
              <li><Link href="/zh/about" className="hover:text-white">关于我们</Link></li>
              <li><Link href="/zh/contact" className="hover:text-white">联系我们</Link></li>
              <li><Link href="/en" className="hover:text-white">English</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">法律</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/zh/legal/privacy" className="hover:text-white">隐私政策</Link></li>
              <li><Link href="/zh/legal/terms" className="hover:text-white">服务条款</Link></li>
              <li><Link href="/zh/legal/credit-guide" className="hover:text-white">信贷指南</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">联系方式</h4>
            <address className="not-italic text-sm space-y-2">
              <p>123 Collins St</p>
              <p>墨尔本 VIC 3000</p>
              <p>电话：1300 123 456</p>
              <p>邮箱：info@stressfree.com.au</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} STRESS FREE FINANCE. 保留所有权利。ACN: 123 456 789。澳大利亚信贷执照号：123456。</p>
        </div>
      </footer>
    </div>
  );
}
