import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melbourne Mortgage - Expert Mortgage Solutions",
  description: "Australian mortgage lender serving Melbourne. Home loans, investment loans, construction loans. Free assessments, fast approvals.",
  keywords: "mortgage, home loan, melbourne mortgage, australian home loan, investment loan, construction loan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
