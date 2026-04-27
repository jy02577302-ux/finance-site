import { Metadata } from "next";
import Calculator from "@/components/calculator";
import Image from "next/image";

export const metadata: Metadata = {
  title: "房贷计算器 | STRESS FREE FINANCE",
  description: "使用我们的免费房贷计算器估算月供、总利息和印花税。支持多种贷款类型，透明计算。",
  keywords: "房贷计算器, 月供计算, 印花税, 贷款利息, 澳洲房贷"
};

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cal.jpg"
            alt="房贷计算仪表盘"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>房贷计算器</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8" style={{ fontWeight: 300 }}>
            快速估算月供、总利息和印花税。透明计算，无隐藏费用，助您做出明智贷款决策。
          </p>
          <a
            href="#calculator-section"
            className="inline-flex items-center justify-center rounded-sm px-8 py-3 font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
            }}
          >
            开始计算
          </a>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white" id="calculator-section">
        <div className="container mx-auto px-4">
          {/* Calculator */}
          <div className="max-w-4xl mx-auto">
            <Calculator />
          </div>

          {/* Info */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>计算结果说明</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-3" style={{ color: '#d4a855' }}>月供估算</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    月供计算基于贷款金额、利率、贷款期限和还款方式。结果仅供参考，实际月供可能因具体产品条款、费用和利率变动而有所不同。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-3" style={{ color: '#d4a855' }}>印花税</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    印花税计算基于房产类型、价格和首付比例。各州税率不同，此计算器使用维州标准。实际税费请以政府最终核算为准。
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(212, 168, 85, 0.1)' }}>
                <p className="text-sm text-gray-500 text-center">
                  * 本计算器提供估算结果，不构成正式贷款预批。具体贷款条件请咨询我们的专业经纪。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>需要更精确的方案？</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            我们的专家将根据您的具体情况，提供详细贷款方案和精确计算。
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
              在线咨询
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
