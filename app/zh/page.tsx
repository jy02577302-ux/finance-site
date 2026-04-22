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
            {/* Product 1: Home Loan */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">房屋贷款</h3>
              <p className="text-gray-600 mb-6">
                无论是首次购房、重新贷款还是投资，我们都能帮您找到合适方案。服务完全免费。
              </p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• 免费服务，贷款经纪费由银行支付</li>
                <li>• Access to 100+ 贷款机构</li>
                <li>• 我们处理所有 paperwork，节省您的时间</li>
                <li>• 独立建议，始终为您的最大利益</li>
              </ul>
              <a href="/zh/products/home-loan" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                了解详情
              </a>
            </div>

            {/* Product 2: Business Loan */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">商业贷款</h3>
              <p className="text-gray-600 mb-6">
                为企业和投资者提供商业融资方案。免费服务，无任何隐藏费用。
              </p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• 商业地产、营运资金、设备融资</li>
                <li>• 100+ 贷款机构选择</li>
                <li>• 快速审批，专业顾问支持</li>
                <li>• 定制化方案，符合您的现金流</li>
              </ul>
              <a href="/zh/products/business-loan" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                了解详情
              </a>
            </div>

            {/* Product 3: Development Loan */}
            <div className="bg-white p-8 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">开发贷款</h3>
              <p className="text-gray-600 mb-6">
                土地分割、住宅商业开发项目融资。按进度拨款，全程专业指导。免费咨询。
              </p>
              <ul className="space-y-2 text-sm mb-8">
                <li>• 开发贷款专家 10+ 年经验</li>
                <li>• Access to  specialist lenders</li>
                <li>• 分期拨款，完工转永久贷款</li>
                <li>• 专人跟进，快速预审批</li>
              </ul>
              <a href="/zh/products/development-loan" className="block w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                了解详情
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
              <h3 className="text-xl font-bold mb-4">免费服务</h3>
              <p className="text-gray-600 leading-relaxed">
                我们的服务对您完全免费。贷款经纪费由银行支付，您无需支付任何咨询费或手续费。
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">100+ 贷款机构</h3>
              <p className="text-gray-600 leading-relaxed">
                我们 access 100+ lenders，从大型银行到专业金融机构，确保您获得最佳利率和条款。
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">节省您的时间</h3>
              <p className="text-gray-600 leading-relaxed">
                研究 hundreds of products 和处理繁琐的 paperwork 需要花费大量时间。让我们为您搞定一切。
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
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">STRESS FREE FINANCE</h4>
            <p className="text-xs md:text-sm leading-relaxed">专业、透明、高效的房贷服务，助您轻松实现置业梦想。</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">快速链接</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/zh/products" className="hover:text-white transition-colors">产品</Link></li>
              <li><Link href="/zh/calculators" className="hover:text-white transition-colors">计算器</Link></li>
              <li><Link href="/zh/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/zh/contact" className="hover:text-white transition-colors">联系我们</Link></li>
              <li><Link href="/en" className="hover:text-white transition-colors">English</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">法律</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/zh/legal/privacy" className="hover:text-white transition-colors">隐私政策</Link></li>
              <li><Link href="/zh/legal/terms" className="hover:text-white transition-colors">服务条款</Link></li>
              <li><Link href="/zh/legal/credit-guide" className="hover:text-white transition-colors">信贷指南</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">联系方式</h4>
            <div className="text-xs md:text-sm space-y-2">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 Collins St, Melbourne VIC 3000</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:0412892782" className="hover:text-white transition-colors">0412 892 782</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@stressfree.com.au" className="hover:text-white transition-colors break-all">info@stressfree.com.au</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            &copy; {new Date().getFullYear()} STRESS FREE FINANCE. 保留所有权利。ACN: 123 456 789。澳大利亚信贷执照号：123456。
          </p>
        </div>
      </footer>
    </div>
  );
}
