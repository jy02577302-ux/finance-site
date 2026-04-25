#!/usr/bin/env node
// 最终修复：统一所有产品页 Hero Image 写法

const fs = require('fs');
const path = require('path');

function fixProductPage(filePath, productName, altText, colorClass) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 统一 Hero section
  const oldHero = `<section className="bg-gradient-to-br from-${colorClass.split(' ')[2]} text-white py-16">`;
  // 完全替换 Hero section
  const newHero = `{/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/${productName}"
            alt="${altText}"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* Gradient Overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-${colorClass}"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/en/products" className="inline-flex items-center gap-2 text-${colorClass.split(' ')[0]}-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{productName.replace('-v2', '').replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase())}</h1>
          <p className="text-xl text-${colorClass.split(' ')[0]}-100 max-w-2xl mx-auto">
            {/* Keep existing description */}
          </p>
        </div>
      </section>`;

  // 简化：只修复 Image 标签本身，不替换整个 section

  // 替换内容由 sed 完成了，这里只修复 Image 标签的重复属性
  // 移除所有重复的 style
  content = content.replace(/(fill\s*\n\s*sizes="100vw"\s*style=\{\{.*?\}\})\s*style=\{\{.*?\}\}/g, '$1');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Fixed: ${filePath}`);
}

// 批量处理
const products = [
  { name: 'home-loan-hero-v2.jpg', alt: 'Family Home - Home Loan', color: 'primary-900/90 via-primary-800/70 to-primary-900/50' },
  { name: 'business-office-v2.jpg', alt: 'Commercial Property - Business Loan', color: 'emerald-900/90 via-emerald-800/70 to-emerald-900/50' },
  { name: 'investment-growth-v2.jpg', alt: 'Investment Growth Chart', color: 'emerald-900/90 via-emerald-800/70 to-emerald-900/50' },
  { name: 'development-site-v2.jpg', alt: 'Development Site - Development Loan', color: 'amber-900/90 via-amber-800/70 to-amber-900/50' },
  { name: 'construction-site-v2.jpg', alt: 'Construction Site - Construction Loan', color: 'amber-900/90 via-amber-800/70 to-amber-900/50' }
];

const enDir = './app/en/products';
const zhDir = './app/zh/products';

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pagePath = path.join(dir, entry.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const prod = products.find(p => entry.name.replace('-', '').includes(p.name.replace('-v2.jpg', '').replace('-', '')));
        if (prod) {
          fixProductPage(pagePath, prod.name, prod.alt, prod.color);
        }
      }
    }
  }
}

processDir(enDir);
processDir(zhDir);
console.log('All product pages fixed.');
