#!/usr/bin/env node
// 精确修复产品页 Hero Image 标签

const fs = require('fs');
const path = require('path');

function fixPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 匹配并替换整个 Image 标签
  content = content.replace(
    /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s*(fill\s*)?(fill\s*)?(sizes="100vw"\s*)?(style=\{\{ width: '100%', height: '100%', objectFit: 'cover' \}\})?\s*\/>/g,
    (match, src, alt, fill1, fill2, sizes, style) => {
      // 确保属性顺序和唯一性
      const hasFill = fill1 || fill2;
      const attrs = [
        `src="${src}"`,
        `alt="${alt}"`,
        'fill',
        'sizes="100vw"',
        'style={{ width: \'100%\', height: \'100%\', objectFit: \'cover\' }}'
      ].filter(Boolean).join('\n            ');
      return `<Image\n            ${attrs}\n          />`;
    }
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// 处理所有产品页
const langs = ['en', 'zh'];
const products = ['home-loan', 'business-loan', 'investment', 'development-loan', 'construction'];

let count = 0;
for (const lang of langs) {
  for (const prod of products) {
    const filepath = `app/${lang}/products/${prod}/page.tsx`;
    if (fs.existsSync(filepath)) {
      if (fixPage(filepath)) count++;
    }
  }
}

console.log(`Total fixed: ${count}`);
