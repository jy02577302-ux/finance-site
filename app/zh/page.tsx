import Link from "next/link";
import Calculator from "@/components/calculator";
import TestimonialCard from "@/components/testimonial-card";

export default function HomePageZH() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 高端深色系 + 真实夜景天际线 */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-melbourne.jpg"
            alt="Melbourne skyline at night"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        {/* 黑金渐变遮罩 - 60% 透明度，看到更多图片细节 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-800/60 to-primary-900/60"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            财务轻松，生活乐融
            <span className="block mt-2 text-accent-500 bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-500">
              STRESS FREE FINANCE
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-200 font-light">
            墨尔本专业房贷经纪 · 免费评估 · 100+ 贷款机构 · 透明费用
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/zh/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-accent-500 bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-900 hover:bg-accent-400 hover:border-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-400/30"
            >
              免费评估
            </a>
            <a
              href="/zh/calculators"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 transition-all duration-300"
            >
              在线计算
            </a>
          </div>
        </div>
      </section>


      {/* Calculator Preview - 铂灰背景 */}
      <section className="py-20 bg-platinum-50 relative">
        {/* Hero → Calculator 金色分隔条 */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                估算您的房贷还款
              </h2>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                使用我们的计算器快速估算月供、总利息，并了解不同利率和期限对贷款的影响。透明计算，无隐藏费用。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-primary-700">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>房屋贷款、投资贷款、建筑贷款</span>
                </li>
                <li className="flex items-center gap-3 text-primary-700">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>包含印花税和费用估算</span>
                </li>
                <li className="flex items-center gap-3 text-primary-700">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>即时结果，无需注册</span>
                </li>
              </ul>
              <a
                href="/zh/calculators"
                className="inline-flex items-center justify-center rounded-lg bg-primary-900 px-6 py-3 text-base font-medium text-white hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all shadow-md hover:shadow-lg"
              >
                打开计算器
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-platinum-200">
              <Calculator compact />
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products - 右下-右对齐边框 + 金色点缀 */}
      <section className="py-20 bg-white relative">
        {/* Calculator → Products 金色分隔 */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-primary-900">我们的贷款产品</h2>
          <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">无论您的置业目标是什么，我们都有专业方案助您实现</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1: Home Loan */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-platinum-200 hover:shadow-2xl hover:border-accent-300 transition-all duration-300 overflow-hidden">
              {/* 金色顶部边框 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

              <h3 className="text-2xl font-bold mb-4 text-primary-900 group-hover:text-accent-600 transition-colors">房屋贷款</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                无论是首次购房、重新贷款还是投资，我们都能帮您找到最佳方案。我们的服务完全免费，由银行支付经纪费用。
              </p>
              <ul className="space-y-3 mb-8 text-primary-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>免费服务，费用由银行承担</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Access to 100+ 贷款机构</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>省时省力，我们处理所有 paperwork</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>独立建议，以您的利益为先</span>
                </li>
              </ul>
              <a
                href="/zh/products/home-loan"
                className="block w-full text-center rounded-lg border-2 border-primary-200 bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-500 hover:border-accent-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all duration-300"
              >
                了解详情
              </a>
            </div>

            {/* Product 2: Business Loan */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-platinum-200 hover:shadow-2xl hover:border-accent-300 transition-all duration-300 overflow-hidden">
              {/* 金色顶部边框 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

              <h3 className="text-2xl font-bold mb-4 text-primary-900 group-hover:text-accent-600 transition-colors">商业贷款</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                为企业和投资者提供灵活的商业融资方案。覆盖商业地产、营运资金、设备融资等多种需求。
              </p>
              <ul className="space-y-3 mb-8 text-primary-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>商业地产、营运资金、设备融资</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>100+ 专业贷款机构选择</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>资深顾问团队全程支持</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>定制化方案，适配您的现金流</span>
                </li>
              </ul>
              <a
                href="/zh/products/business-loan"
                className="block w-full text-center rounded-lg border-2 border-primary-200 bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-500 hover:border-accent-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all duration-300"
              >
                了解详情
              </a>
            </div>

            {/* Product 3: Development Loan */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-platinum-200 hover:shadow-2xl hover:border-accent-300 transition-all duration-300 overflow-hidden">
              {/* 金色顶部边框 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

              <h3 className="text-2xl font-bold mb-4 text-primary-900 group-hover:text-accent-600 transition-colors">开发贷款</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                土地分割、住宅商业开发项目融资。按进度拨款，全程专业指导，助您顺利完工。
              </p>
              <ul className="space-y-3 mb-8 text-primary-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>开发贷款专家 10+ 年经验</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Access to  specialist lenders</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>分期拨款，完工转永久贷款</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>专人跟进，快速预审批</span>
                </li>
              </ul>
              <a
                href="/zh/products/development-loan"
                className="block w-full text-center rounded-lg border-2 border-primary-200 bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-500 hover:border-accent-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-all duration-300"
              >
                了解详情
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - 简洁铂灰背景 + 金色图标 */}
      <section className="py-20 bg-platinum-50 relative">
        {/* Products → Why Choose Us 金色分隔 */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-primary-900">为什么选择 STRESS FREE FINANCE</h2>
          <p className="text-center text-primary-600 mb-16 max-w-2xl mx-auto text-lg">我们以专业、透明、高效的服务，助您轻松实现置业梦想</p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">免费服务</h3>
              <p className="text-primary-600 leading-relaxed">我们的服务对您完全免费。贷款经纪费由银行支付，您无需支付任何咨询费或手续费。</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">100+ 贷款机构</h3>
              <p className="text-primary-600 leading-relaxed">我们合作 100+ 家贷款机构，从大型银行到专业金融机构，确保您获得最佳利率和条款。</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">节省您的时间</h3>
              <p className="text-primary-600 leading-relaxed">研究上百种产品和处理繁琐的 paperwork 非常耗时。让我们为您搞定一切，专注您的事业。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - 统一浅色背景 */}
      <section className="bg-platinum-50 py-20 relative">
        {/* Why Choose Us → Testimonials 金色分隔 */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-primary-900">客户评价</h2>
          <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">来自真实客户的信任与反馈</p>

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

      {/* CTA - 统一浅色背景 + 金色按钮 */}
      <section className="bg-white py-20 relative">
        {/* Testimonials → CTA 金色分隔 */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-900">准备好轻松置业了吗？</h2>
          <p className="text-xl text-primary-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            节省您的时间与精力。让我们用专业服务，帮您找到最合适的贷款方案。
          </p>
          <a
            href="/zh/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 px-10 py-6 text-lg font-bold text-primary-900 hover:from-accent-400 hover:to-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 transition-all duration-300 shadow-xl shadow-accent-500/30 hover:shadow-accent-400/40 transform hover:scale-105"
          >
            预约免费评估
          </a>
        </div>
      </section>

      {/* Footer - 极致黑金风格 + 增强设计 */}
      <footer className="bg-primary-950 text-primary-200 py-12 md:py-16 border-t-2 border-accent-500/30">
        {/* 顶部金色渐变分隔线 */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-accent-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="relative inline-block">
                <h4 className="text-white font-display font-bold text-2xl mb-2">STRESS FREE FINANCE</h4>
                {/* 金色装饰线 */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent-500 to-transparent"></div>
              </div>
              <p className="text-sm leading-relaxed text-primary-300">
                专业、透明、高效的房贷服务，助您轻松实现置业梦想。
              </p>
              {/* 信任标语 */}
              <p className="text-xs text-accent-400 font-medium tracking-wider uppercase">
                100+ Lenders · Free Service · Melbourne Based
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                快速链接
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  {href: "/zh/products", label: "产品"},
                  {href: "/zh/calculators", label: "计算器"},
                  {href: "/zh/about", label: "关于我们"},
                  {href: "/zh/contact", label: "联系我们"},
                  {href: "/en", label: "English"}
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                法律
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  {href: "/zh/legal/privacy", label: "隐私政策"},
                  {href: "/zh/legal/terms", label: "服务条款"},
                  {href: "/zh/legal/credit-guide", label: "信贷指南"}
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                联系方式
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
              </h4>
              <div className="text-sm space-y-4">
                <p className="flex items-start gap-3 text-primary-300">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>123 Collins St, Melbourne VIC 3000</span>
                </p>
                <p className="flex items-center gap-3 text-primary-300">
                  <svg className="w-4 h-4 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:0412892782" className="text-accent-400 hover:text-accent-300 transition-colors font-medium">0412 892 782</a>
                </p>
                <p className="flex items-center gap-3 text-primary-300">
                  <svg className="w-4 h-4 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:info@stressfree.com.au" className="text-accent-400 hover:text-accent-300 transition-colors break-all">info@stressfree.com.au</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-primary-800 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm text-primary-500 leading-relaxed">
                &copy; {new Date().getFullYear()} STRESS FREE FINANCE. 保留所有权利。ACN: 123 456 789。澳大利亚信贷执照号：123456。
              </p>
              {/* 社交媒体图标（占位，可添加实际链接） */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-primary-400">关注我们：</span>
                <div className="flex gap-3">
                  {/* 这里可以添加实际的社交媒体链接和图标 */}
                  <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">FB</span>
                  <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">LI</span>
                  <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">IG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
