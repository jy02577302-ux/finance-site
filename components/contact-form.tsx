"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface ContactInfoProps {
  locale?: "zh" | "en";
}

export default function ContactForm({ locale = "zh" }: ContactInfoProps) {
  const labels = {
    title: locale === "zh" ? "联系我们" : "Contact Us",
    description: locale === "zh"
      ? "如有任何问题或咨询，请通过以下方式联系我们："
      : "If you have any questions or inquiries, please contact us:",
    email: locale === "zh" ? "电子邮箱" : "Email",
    phone: locale === "zh" ? "电话" : "Phone",
    button: locale === "zh" ? "发送邮件" : "Send Email",
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{labels.title}</h2>
          <p className="text-gray-600">{labels.description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-gray-500">{labels.email}</p>
              <a href="mailto:info@stressfree.com.au" className="text-primary hover:underline font-medium">
                info@stressfree.com.au
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-gray-500">{labels.phone}</p>
              <a href="tel:1300123456" className="text-primary hover:underline font-medium">
                1300 123 456
              </a>
            </div>
          </div>
        </div>

        <a
  href="mailto:info@stressfree.com.au"
  className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 text-sm w-full"
>
  {labels.button}
</a>
      </CardContent>
    </Card>
  );
}
