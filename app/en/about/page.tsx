import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Award, Clock, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | STRESS FREE FINANCE",
  description: "Stress Free Finance - 10+ years experience, 1000+ happy clients, $20M+ loans managed. AFS licensed mortgage brokers in Melbourne.",
  keywords: "about Stress Free Finance, mortgage brokers melbourne, AFS license, 1000 clients, $20M loans, expert team"
};

export default function AboutPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/sff.jpg"
            alt="STRESS FREE FINANCE Office"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>About Stress Free Finance</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            We are committed to providing professional, transparent, and stress-free mortgage services to Australian families.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Stress Free Finance was founded by a team of mortgage brokers with over 10 years of industry experience. Our founders previously worked at major Australian banks and understood the complexity and frustration of traditional mortgage processes.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our mission is to make professional, transparent mortgage services accessible to everyone. We believe good financial products shouldn't be hidden behind complex processes. That's why we simplify every step, serving each client with professionalism and genuine care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To date, we've helped over 1,000 families achieve their homeownership dreams, with more than $20 million in loans under management. But what we're most proud of isn't the numbers—it's our clients' satisfaction and referrals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>1000+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>$20M+</p>
                  <p className="text-gray-600">Loans Managed</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>48h</p>
                  <p className="text-gray-600">Avg Approval</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#b45309' }}>10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Our Partner Institutions</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    30+ institutions, vast loan solutions. Covering mainstream banks and non-bank lenders, we compare rates, fees, and flexibility to quickly find the most suitable loan structure for you from thousands of options.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Under the regulatory framework of Australian authorities, we maintain long-term partnerships with 20+ Australian banks and non-bank lenders. Our strong relationships with senior bankers at various institutions help us secure the most suitable products and smoothest approval experiences for you.
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
                      <div key={idx} className="bg-gray-50 p-3 rounded-xl flex items-center justify-center">
                        <Image
                          src={`/images/partners/${logo}`}
                          alt={`Partner Institution ${idx+1}`}
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
                <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Our Values</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Heart,
                      title: "Integrity First",
                      desc: "We promise transparent pricing with no hidden costs. Every loan we arrange is transparent and defensible.",
                    },
                    {
                      icon: Users,
                      title: "Client First",
                      desc: "Your best interest is our priority. We provide free, no-obligation consultations.",
                    },
                    {
                      icon: Award,
                      title: "Professionalism",
                      desc: "Continuous learning, staying current with regulations and products. Our advice is always in your best interest.",
                    },
                    {
                      icon: Clock,
                      title: "Efficiency",
                      desc: "Streamlined processes, 48-hour pre-approvals, saving you valuable time.",
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
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>Ready to Work With Us?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you're just starting or ready to apply, we're here to help with free, professional advice.
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
                  Call 0412 892 782
                </a>
                <a
                  href="/en/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition-colors rounded-sm"
                  style={{
                    background: 'transparent',
                    color: '#fff',
                    border: '1px solid rgba(212, 168, 85, 0.4)'
                  }}
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
