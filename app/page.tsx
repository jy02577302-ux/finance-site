import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center rounded-sm">
                <span className="text-[#0A0A0A] font-bold text-sm">SF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest text-white">STRESS FREE FINANCE</span>
                <span className="text-[10px] text-[#D4AF37] tracking-[0.2em] -mt-1 uppercase">Premium Mortgage Broker</span>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <Link href="/en/products" className="text-white hover:text-[#D4AF37]">贷款产品</Link>
              <Link href="/en/about" className="text-white hover:text-[#D4AF37]">关于我们</Link>
              <Link href="/en/contact" className="text-white hover:text-[#D4AF37]">联系我们</Link>
              <div className="h-6 w-[1px] bg-[#D4AF37]/30 mx-4"></div>
              <div className="flex items-center text-[#D4AF37]">
                <span>📞</span>
                <span className="ml-2">0412 892 782</span>
              </div>
              <Link href="/en/contact" className="bg-gradient-to-r from-[#D4AF37] to-[#996515] text-[#0A0A0A] px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest">
                免费评估
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden text-[#D4AF37] text-2xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-melbourne.jpg"
            alt="Melbourne CBD"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3"></span>
              <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">Melbourne's Premier Choice</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
              Stress-Free Finance<br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Expert mortgage brokers based in Melbourne. Free assessment, fast approval, transparent fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/en/contact" className="bg-gradient-to-r from-[#D4AF37] to-[#996515] text-[#0A0A0A] px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest flex items-center justify-center">
                免费评估
              </Link>
              <Link href="/en/products" className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#D4AF37]/10">
                了解我们的方案
              </Link>
            </div>
            <div className="flex items-center space-x-8 pt-6 border-t border-[#D4AF37]/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$20M+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Loans Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#141414]" id="process">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">The Experience</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold">无压力申请流程</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: "1. 深度评估", desc: "专业顾问 1V1 交流，全方位梳理您的财务状况与购房需求。" },
              { title: "2. 方案定制", desc: "对接 30+ 银行及非银贷款机构，精准匹配利率最优方案。" },
              { title: "3. 极速递交", desc: "文案专家全程整理资料，确保申请材料一次性达到审批标准。" },
              { title: "4. 成功获批", desc: "获取 Unconditional Approval，在拍卖场上从容举牌。" },
              { title: "5. 无忧结算", desc: "对接律师与房产经纪，确保结算无误，正式开启理想生活。" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#0A0A0A]">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#996515] rounded-full flex items-center justify-center">
                    <span className="text-[#0A0A0A] font-bold text-xs">{idx + 1}</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0A0A0A]" id="team">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Elite Partners</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold">墨尔本资深顾问团队</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "James Wilson", role: "Founder / Lead Broker", img: "/images/team/steven-mo.jpg" },
              { name: "Elena Zhang", role: "Executive Broker", img: "/images/team/sarah-chen.jpg" },
              { name: "Michael Chen", role: "Investment Specialist", img: "/images/team/david-liu.jpg" },
              { name: "David Liu", role: "Business Finance Specialist", img: "/images/team/office-main.jpg" }
            ].map((broker) => (
              <div key={broker.name} className="bg-[#141414] border border-[#D4AF37]/20 overflow-hidden">
                <div className="aspect-[4/5]">
                  <Image src={broker.img} alt={broker.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-1">{broker.name}</h4>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4">{broker.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-[#141414]" id="products">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Products</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold">核心产品</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "房屋贷款", href: "/en/products/home-loan", initial: "H" },
              { title: "商业贷款", href: "/en/products/business-loan", initial: "B" },
              { title: "开发贷款", href: "/en/products/development-loan", initial: "D" }
            ].map((product) => (
              <div key={product.title} className="bg-[#0A0A0A]/60 p-8 border border-[#D4AF37]/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#996515] flex items-center justify-center">
                  <span className="text-2xl text-[#0A0A0A] font-bold">{product.initial}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{product.title}</h3>
                <p className="text-gray-500 text-center mb-6">
                  Competitive rates and flexible options.
                </p>
                <Link href={product.href} className="block w-full text-center rounded-lg border border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all">
                  了解更多
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">准备好开始了吗？</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            我们的专家团队随时准备为您提供免费、专业的房贷咨询服务。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/contact" className="bg-gradient-to-r from-[#D4AF37] to-[#996515] text-[#0A0A0A] px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest">
              致电 0412 892 782
            </Link>
            <Link href="/zh/contact" className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#D4AF37]/10">
              中文咨询
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
