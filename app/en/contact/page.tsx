import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact Us | STRESS FREE FINANCE",
  description: "Contact Stress Free Finance for a free mortgage assessment. Call 0412 892 782 or fill out the form.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Free consultation, no obligation. Our experts are here to help.
          </p>
        </div>

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
    </div>
  );
}
