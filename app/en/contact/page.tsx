import ContactForm from "@/components/contact-form";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | STRESS FREE FINANCE",
  description: "Contact Stress Free Finance for a free mortgage assessment. Call 0412 892 782 or fill out the form.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="STRESS FREE FINANCE Office"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Free consultation, no obligation. Our experts are here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border text-center" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>Phone</h3>
            <p className="text-2xl mb-2" style={{ color: '#d4a855' }}>0412 892 782</p>
            <p className="text-sm text-gray-500">Mon-Fri 9am-5pm AEST</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border text-center" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>Email</h3>
            <p className="text-xl mb-2" style={{ color: '#1a1a1a' }}>info@stressfree.com.au</p>
            <p className="text-sm text-gray-500">Response within 24 hours</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border text-center" style={{ borderColor: 'rgba(212, 168, 85, 0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a1a' }}>Address</h3>
            <p className="text-lg" style={{ color: '#1a1a1a' }}>123 Collins St</p>
            <p className="text-gray-600">Melbourne VIC 3000</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm locale="en" />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: 'rgba(212, 168, 85, 0.15)' }}>
            <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="text-gray-600 font-medium">Google Maps embed coming soon</p>
                <p className="text-sm text-gray-500">123 Collins St, Melbourne VIC 3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 mt-16" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Urgent Inquiry?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            If you have an urgent loan need, call us directly and we'll prioritize your application.
          </p>
          <a
            href="tel:0412892782"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 font-semibold transition-all rounded-sm"
            style={{
              background: 'linear-gradient(135deg, #d4a855 0%, #c59547 100%)',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(212, 168, 85, 0.25)'
            }}
          >
            Call Now 0412 892 782
          </a>
        </div>
      </div>
    </div>
  );
}
