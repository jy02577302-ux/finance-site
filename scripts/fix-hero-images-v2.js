#!/usr/bin/env node
// 统一修复 Hero Background Image 为标准 fill 写法

const fs = require('fs');
const path = require('path');

const appDir = './app';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 查找并替换所有 Hero section 中的 Image background
  // 匹配 pattern: <div className="absolute inset-0">\n          <Image src="..." alt="..." fill\n            className="object-cover"\n          />\n        </div>
  // 替换为标准 fill 写法

  content = content.replace(
    /<div className="absolute inset-0">\s*<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s*fill\s*(?:sizes="[^"]*")?\s*(?:style=\{\{[^}]*\}\s*\})?\s*\/>\s*<\/div>/g,
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
console.log('All done.');
