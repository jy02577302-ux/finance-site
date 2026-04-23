"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 确定当前语言
  const isEnglish = pathname.startsWith("/en");
  const currentLang = isEnglish ? "en" : "zh";
  const otherLang = isEnglish ? "zh" : "en";

  // 切换语言：保留当前路径，只替换语言前缀
  const toggleLanguage = () => {
    const pathWithoutLang = pathname.replace(/^\/(en|zh)/, "") || "/";
    router.push(`/${otherLang}${pathWithoutLang}`);
  };

  // 导航链接（根据当前语言显示不同文本）
  const navLinks = isEnglish
    ? [
        { href: "/en", label: "Home" },
        { href: "/en/products", label: "Products" },
        { href: "/en/calculators", label: "Calculators" },
        { href: "/en/about", label: "About" },
        { href: "/en/contact", label: "Contact" },
      ]
    : [
        { href: "/zh", label: "首页" },
        { href: "/zh/products", label: "产品" },
        { href: "/zh/calculators", label: "计算器" },
        { href: "/zh/about", label: "关于我们" },
        { href: "/zh/contact", label: "联系我们" },
      ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* 顶部金色分隔线 */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Premium with Gold Border */}
          <Link
            href={`/${currentLang}`}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-md ring-2 ring-accent-500/30">
              <span className="text-primary-900 font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-xl text-primary-900 hidden sm:inline transition-colors group-hover:text-accent-600">
              STRESS FREE FINANCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-md
                    transition-all duration-200 ease-in-out
                    ${isActive
                      ? "text-accent-600 bg-accent-50"
                      : "text-primary-600 hover:text-accent-600 hover:bg-primary-50"
                    }
                    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                    after:w-0 after:h-0.5 after:bg-accent-500 after:transition-all after:duration-200
                    ${isActive ? "after:w-1/2" : "hover:after:w-1/2"}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-600 hover:bg-accent-50 hover:text-accent-600 transition-colors"
            >
              <Globe className="w-4 h-4 mr-2" />
              {isEnglish ? "中文" : "EN"}
            </Button>

            {/* Phone Number (click-to-call) - Desktop */}
            <a
              href="tel:0412892782"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0412 892 782</span>
            </a>

            {/* CTA Button - Premium Gold */}
            <Link href={`/${currentLang}/contact`}>
              <Button
                variant="ghost"
                size="sm"
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 hover:from-accent-400 hover:to-accent-500 focus-visible:ring-accent-500 hover:shadow-lg active:scale-95 transition-all duration-300 font-semibold"
              >
                {isEnglish ? "Free Assessment" : "免费评估"}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t bg-platinum-50">
            <div className="flex flex-col gap-1">
              {/* Phone */}
              <a
                href="tel:0412892782"
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-primary-600 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0412 892 782</span>
              </a>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      px-4 py-3 text-sm font-medium rounded-md
                      transition-all duration-200
                      flex items-center justify-between
                      ${isActive
                        ? "bg-accent-50 text-accent-700 pl-6 border-l-4 border-accent-600"
                        : "text-primary-600 hover:bg-white hover:shadow-sm"
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
