import ContactForm from "@/components/contact-form";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | STRESS FREE FINANCE",
  description: "Contact Stress Free Finance for a free mortgage assessment. Call 0412 892 782 or fill out the form.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Free consultation, no obligation. Our experts are here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-2xl text-primary-700">0412 892 782</p>
            <p className="text-sm text-gray-500 mt-2">Mon-Fri 9am-5pm AEST</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-2xl text-primary-700">info@stressfree.com.au</p>
            <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-lg text-gray-800">123 Collins St</p>
            <p className="text-gray-600">Melbourne VIC 3000</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm locale="en" />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-primary-100 to-primary-200 h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="text-primary-600 font-medium">Add Google Maps embed</p>
                <p className="text-sm text-gray-500">123 Collins St, Melbourne VIC 3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
