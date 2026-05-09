import ContactForm from "@/components/contact-form";
import Image from "next/image";

export const metadata = {
  title: "联系我们 | STRESS FREE FINANCE",
  description: "联系 STRESS FREE FINANCE 获取免费房贷评估。填写表单或直接致电 0412 892 782。",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact.jpg"
            alt="STRESS FREE FINANCE 办公室"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>联系我们</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8" style={{ fontWeight: 300 }}>
            免费咨询，无任何义务。我们随时为您提供专业建议。
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              电话咨询
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors rounded-sm"
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(212, 168, 85, 0.6)'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              在线留言
            </a>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-slate-50 to-white border-b" style={{ borderColor: 'rgba(212, 168, 85, 0.1)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold mb-1" style={{ color: '#b45309' }}>5000+</p>
              <p className="text-sm text-gray-600">满意客户</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1" style={{ color: '#b45309' }}>$2B+</p>
              <p className="text-sm text-gray-600">管理贷款</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1" style={{ color: '#b45309' }}>48h</p>
              <p className="text-sm text-gray-600">平均审批</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1" style={{ color: '#b45309' }}>10+</p>
              <p className="text-sm text-gray-600">年行业经验</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>专业团队随时为您服务</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            无论您有房贷、商业贷款还是开发贷款需求，我们的持牌经纪团队都随时准备为您提供免费、专业的咨询服务。我们承诺透明、高效、以客户为中心的服务。
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              免费咨询
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0 2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              无任何义务
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              快速响应
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info Cards (Left Side) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: '#1a1a1a' }}>
                <span style={{ color: '#b45309' }}>●</span>
                联系方式
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>电话</h4>
                    <p className="text-xl mb-1" style={{ color: '#b45309' }}>0412 892 782</p>
                    <p className="text-sm text-gray-500">周一至周五 9am-5pm AEST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>邮箱</h4>
                    <p className="text-xl mb-1" style={{ color: '#1a1a1a' }}>info@stressfree.com.au</p>
                    <p className="text-sm text-gray-500">24小时内回复</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>地址</h4>
                    <p className="text-lg" style={{ color: '#1a1a1a' }}>123 Collins St</p>
                    <p className="text-gray-600">Melbourne VIC 3000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border" style={{ borderColor: 'rgba(212, 168, 85, 0.2)' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#1a1a1a' }}>工作时间</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">周一 - 周五</span>
                  <span style={{ color: '#1a1a1a' }}>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">周六</span>
                  <span style={{ color: '#1a1a1a' }}>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">周日</span>
                  <span className="text-gray-500">休息</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">* 公共假期可能调整</p>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-xl shadow-lg border text-center" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#1a1a1a' }}>关注我们</h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[#b45309] hover:text-white" style={{ background: 'rgba(212, 168, 85, 0.1)', color: '#b45309' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[#b45309] hover:text-white" style={{ background: 'rgba(212, 168, 85, 0.1)', color: '#b45309' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[#b45309] hover:text-white" style={{ background: 'rgba(212, 168, 85, 0.1)', color: '#b45309' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-2">
            <div id="contact-form" className="bg-white rounded-xl shadow-lg border p-8" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>发送消息</h2>
                <p className="text-gray-600">填写以下表单，我们将在24小时内回复</p>
              </div>
              <ContactForm locale="zh" />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: 'rgba(212, 168, 85, 0.15)' }}>
            <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-80 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(212, 168, 85, 0.1)' }}>
                  <svg className="w-10 h-10" style={{ color: '#b45309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <p className="text-gray-700 font-medium mb-2">STRESS FREE FINANCE</p>
                <p className="text-gray-600 mb-4">123 Collins St, Melbourne VIC 3000</p>
                <a
                  href="https://maps.google.com/?q=123+Collins+St+Melbourne+VIC+3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                  style={{ background: '#b45309', color: '#fff' }}
                >
                  在 Google Maps 中打开
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 mt-16" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>准备好开始了吗？</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            我们的专家团队随时准备为您提供免费、专业的房贷咨询服务。现在就联系我们，迈出置业第一步。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0412892782"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 font-semibold transition-all rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              立即致电 0412 892 782
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 font-semibold transition-colors rounded-sm"
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(212, 168, 85, 0.4)'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              在线填写表单
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
