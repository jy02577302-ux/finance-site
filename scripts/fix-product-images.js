#!/usr/bin/env node
// 修复产品页 Hero Image 的重复属性

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 移除重复的 style 属性，只保留一个
  // 匹配：先有 style={{ objectFit: 'cover' }}，然后又添加了 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  content = content.replace(
    /style=\{\{ objectFit: 'cover' \}\}\s*sizes="100vw"\s*style=\{\{ width: '100%', height: '100%', objectFit: 'cover' \}\}/g,
    `fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}`
  );

  // 如果没有 style 只有 fill 和 sizes，添加 style
  content = content.replace(
    /(fill\s*\n\s*sizes="100vw")/g,
    `$1\n            style={{ width: '100%', height: '100%', objectFit: 'cover' }}`
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${filePath}`);
  }
}

// 处理所有产品页
const productsDir = './app/en/products';
const zhProductsDir = './app/zh/products';

function walkProducts(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pageFile = path.join(dir, entry.name, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        fixFile(pageFile);
      }
    }
  }
}

walkProducts(productsDir);
walkProducts(zhProductsDir);

console.log('Done.');
