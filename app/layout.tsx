import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "STRESS FREE FINANCE - 轻松贷款，无压力",
    template: "%s | STRESS FREE FINANCE"
  },
  description: "STRESS FREE FINANCE - 墨尔本专业房贷经纪。免费评估，快速审批，透明费用。房屋贷款、投资贷款、建筑贷款。",
  keywords: "mortgage, home loan, melbourne mortgage, australian home loan, investment loan, construction loan, 房贷, 房屋贷款, 墨尔本房贷, 澳洲房贷",
  alternates: {
    languages: {
      'en': '/en',
      'zh': '/zh'
    }
  },
  openGraph: {
    title: "STRESS FREE FINANCE - 轻松贷款，无压力",
    description: "墨尔本专业房贷经纪 · 免费评估 · 快速审批 · 透明费用",
    siteName: "STRESS FREE FINANCE",
    locale: "zh_CN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
