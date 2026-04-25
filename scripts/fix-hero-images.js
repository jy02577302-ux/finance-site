#!/usr/bin/env node
// 批量修复所有页面的 Hero Background Image 写法

const fs = require('fs');
const path = require('path');

const appDir = './app';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 匹配 Hero section 中的 Image 标签背景图
  // 替换 fill 模式为标准的 fill + sizes + style
  content = content.replace(
    /<div className="absolute inset-0">\s*<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s*fill\s*style=\{\{([^}]+)\}\s*\}\s*\/>\s*<\/div>/g,
    `<div className="absolute inset-0">
          <Image
            src="$1"
            alt="$2"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>`
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${filePath}`);
  }
}

// 递归查找所有 page.tsx
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name === 'page.tsx') {
      fixFile(fullPath);
    }
  }
}

walk(appDir);
console.log('Done.');
