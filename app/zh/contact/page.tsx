import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "联系我们 | STRESS FREE FINANCE",
  description: "联系 STRESS FREE FINANCE 获取免费房贷评估。填写表单或直接致电 1300 123 456。",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
          <p className="text-xl text-gray-600">
            免费咨询，无任何义务。我们随时为您提供专业建议。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <h3 className="font-bold text-lg mb-2">电话</h3>
            <p className="text-2xl text-primary-700">1300 123 456</p>
            <p className="text-sm text-gray-500 mt-2">周一至周五 9am-5pm AEST</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <h3 className="font-bold text-lg mb-2">邮箱</h3>
            <p className="text-2xl text-primary-700">info@stressfree.com.au</p>
            <p className="text-sm text-gray-500 mt-2">24小时内回复</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border text-center">
            <h3 className="font-bold text-lg mb-2">地址</h3>
            <p className="text-lg text-gray-800">123 Collins St</p>
            <p className="text-gray-600">Melbourne VIC 3000</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm locale="zh" />
        </div>
      </div>
    </div>
  );
}
