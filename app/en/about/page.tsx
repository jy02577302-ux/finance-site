import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Award, Clock, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | STRESS FREE FINANCE",
  description: "Stress Free Finance founded in 2015. 10+ years experience, 5000+ happy clients, $2B+ loans managed. AFS licensed mortgage brokers in Melbourne.",
  keywords: "about Stress Free Finance, mortgage brokers melbourne, AFS license, 5000 clients, $2B loans, expert team"
};

export default function AboutPageEN() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="STRESS FREE FINANCE Office"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-900/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Stress Free Finance</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            We are committed to providing professional, transparent, and stress-free mortgage services to Australian families.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Stress Free Finance was founded in 2015 by a team of mortgage brokers with over 10 years of industry experience. Our founders previously worked at major Australian banks and understood the complexity and frustration of traditional mortgage processes.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to make professional, transparent mortgage services accessible to everyone. We believe good financial products shouldn't be hidden behind complex processes. That's why we simplify every step, serving each client with professionalism and genuine care.
              </p>
              <p className="text-gray-700">
                To date, we've helped over 5,000 families achieve their homeownership dreams, with more than $2 billion in loans under management. But what we're most proud of isn't the numbers—it's our clients' satisfaction and referrals.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">5000+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">$2B+</p>
                  <p className="text-gray-600">Loans Managed</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">48h</p>
                  <p className="text-gray-600">Avg Approval</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-primary-700">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
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
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Partners */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Partner Institutions</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  30+ institutions, vast loan solutions. Covering mainstream banks and non-bank lenders, we compare rates, fees, and flexibility to quickly find the most suitable loan structure for you from thousands of options.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
                  "bc_invest_logo.png",
                  "ac_logo.png",
                  "ccc_logo.png"
                ].map((logo, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition">
                    <Image
                      src={`/images/partners/${logo}`}
                      alt={`Partner Institution ${idx+1}`}
                      width={120}
                      height={80}
                      className="object-contain max-h-16"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Under the regulatory framework of Australian authorities, we maintain long-term partnerships with 20+ Australian banks and non-bank lenders. Our strong relationships with senior bankers at various institutions help us secure the most suitable products and smoothest approval experiences for you.
                </p>
              </div>
            </div>
          </section>

          {/* Team Overview */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-700 mb-6">
              All our mortgage brokers hold Australian Financial Services (AFS) licences and undergo regular training to maintain professional standards. Whether you're a first home buyer, experienced investor, or seeking construction finance, we have specialists to assist you.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Steven Mo",
                  title: "Senior Mortgage Broker",
                  specialty: "First Home Buyers",
                  exp: "12 years",
                  avatar: "/images/team/steven-mo.jpg"
                },
                {
                  name: "Sarah Chen",
                  title: "Investment Loan Specialist",
                  specialty: "Investment Portfolios",
                  exp: "8 years",
                  avatar: "/images/team/sarah-chen.jpg"
                },
                {
                  name: "David Liu",
                  title: "Construction Loan Advisor",
                  specialty: "Construction Finance",
                  exp: "10 years",
                  avatar: "/images/team/david-liu.jpg"
                },
              ].map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-xl border text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    {/* TODO: Add real photo at /public/images/team/{name}.jpg */}
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary-700 mb-1">{member.title}</p>
                  <p className="text-sm text-gray-500">{member.specialty} · {member.exp} experience</p>
                </div>
              ))}
            </div>
          </div>

          {/* Licenses */}
          <h2 className="text-2xl font-bold mb-6">Licensing & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "AFCA", full: "Australian Financial Complaints Authority", desc: "Member ID: 123456" },
              { name: "MFAA", full: "Mortgage & Finance Association of Australia", desc: "Certified Member" },
              { name: "ASIC", full: "Australian Securities & Investments Commission", desc: "AFS Licence: 123456" },
            ].map((license) => (
              <div key={license.name} className="border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{license.full}</h3>
                <p className="text-gray-600">{license.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-600 mb-6">
              Whether you're just starting or ready to apply, we're here to help with free, professional advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0412892782"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-700 px-8 py-4 text-white font-semibold hover:bg-primary-600"
              >
                Call 0412 892 782
              </a>
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-4 text-gray-900 font-semibold hover:bg-gray-50"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
