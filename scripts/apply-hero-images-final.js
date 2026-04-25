#!/usr/bin/env node
// 为产品页写入正确的 Hero Image 标签

const fs = require('fs');
const path = require('path');

const products = {
  'home-loan': { img: 'home-loan-hero-v2.jpg', alt: 'Family Home - Home Loan', color: 'primary' },
  'business-loan': { img: 'business-office-v2.jpg', alt: 'Commercial Property - Business Loan', color: 'emerald' },
  'investment': { img: 'investment-growth-v2.jpg', alt: 'Investment Growth Chart', color: 'emerald' },
  'development-loan': { img: 'development-site-v2.jpg', alt: 'Development Site - Development Loan', color: 'amber' },
  'construction': { img: 'construction-site-v2.jpg', alt: 'Construction Site - Construction Loan', color: 'amber' }
};

function updatePage(filePath, productKey) {
  const prod = products[productKey];
  if (!prod) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 构建正确的 Image 标签
  const imageBlock = `        <div className="absolute inset-0">
          <Image
            src="/images/products/${prod.img}"
            alt="${prod.alt}"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>`;

  // 找到并替换 Background Image section
  const oldPattern = /        {\/* Background Image *\/}\n\s*<div className="absolute inset-0">[\s\S]*?<\/div>/;
  const replacement = `        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/${prod.img}"
            alt="${prod.alt}"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>`;

  content = content.replace(oldPattern, replacement);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated: ${filePath}`);
}

// Process all
const langs = ['en', 'zh'];
for (const lang of langs) {
  for (const prodKey of Object.keys(products)) {
    const filepath = `app/${lang}/products/${prodKey}/page.tsx`;
    if (fs.existsSync(filepath)) {
      updatePage(filepath, prodKey);
    }
  }
}

console.log('Done.');
