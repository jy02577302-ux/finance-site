import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <h4 className="text-white font-bold text-2xl mb-2">STRESS FREE FINANCE</h4>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-500 to-transparent"></div>
            </div>
            <p className="text-sm leading-relaxed text-primary-300">
              专业、透明、高效的房贷服务，助您轻松实现置业梦想。
            </p>
            <p className="text-xs text-accent-400 font-medium tracking-wider uppercase">
              100+ Lenders · Free Service · Melbourne Based
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 relative">
              快速链接
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/zh/products" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  产品
                </Link>
              </li>
              <li>
                <Link href="/zh/calculators" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  计算器
                </Link>
              </li>
              <li>
                <Link href="/zh/about" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/zh/contact" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/en" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  English
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 relative">
              法律
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/zh/legal/privacy" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/zh/legal/terms" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/zh/legal/credit-guide" className="group flex items-center text-primary-300 hover:text-accent-400 transition-colors">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-accent-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  信贷指南
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 relative">
              联系方式
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent-500"></div>
            </h4>
            <div className="text-sm space-y-4">
              <p className="flex items-start gap-3 text-primary-300">
                <svg className="w-4 h-4 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Collins St, Melbourne VIC 3000</span>
              </p>
              <p className="flex items-center gap-3 text-primary-300">
                <svg className="w-4 h-4 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0412892782" className="text-accent-400 hover:text-accent-300 transition-colors font-medium">0412 892 782</a>
              </p>
              <p className="flex items-center gap-3 text-primary-300">
                <svg className="w-4 h-4 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@stressfree.com.au" className="text-accent-400 hover:text-accent-300 transition-colors break-all">info@stressfree.com.au</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-800 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-primary-500 leading-relaxed">
              &copy; {new Date().getFullYear()} STRESS FREE FINANCE. 保留所有权利。ACN: 123 456 789。澳大利亚信贷执照号：123456。
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-primary-400">关注我们：</span>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">FB</span>
                <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">LI</span>
                <span className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center text-xs text-primary-400">IG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
