#!/usr/bin/env node

/**
 * 批量替换网站占位图片脚本
 * 用法: node scripts/replace-photos.js --type team
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');

// 图片映射表
const PHOTO_MAP = {
  team: {
    'steven-mo.jpg': { src: 'team/steven-mo.jpg', alt: 'Steven Mo - Senior Mortgage Broker' },
    'sarah-chen.jpg': { src: 'team/sarah-chen.jpg', alt: 'Sarah Chen - Investment Loan Specialist' },
    'david-liu.jpg': { src: 'team/david-liu.jpg', alt: 'David Liu - Construction Loan Advisor' },
  },
  office: {
    'office-main.jpg': { src: 'office/office-main.jpg', alt: 'STRESS FREE FINANCE Office - Melbourne CBD' },
  },
  general: {
    'mortgage-dashboard.jpg': { src: 'general/mortgage-dashboard.jpg', alt: 'Mortgage Calculator Dashboard' },
  },
  products: {
    'business-office.jpg': { src: 'products/business-office.jpg', alt: 'Commercial Property' },
    'investment-growth.jpg': { src: 'products/investment-growth.jpg', alt: 'Investment Property Growth' },
    'development-site.jpg': { src: 'products/development-site.jpg', alt: 'Development Project Site' },
    'construction-site.jpg': { src: 'products/construction-site.jpg', alt: 'House Construction Site' },
    'home-loan-hero.jpg': { src: 'products/home-loan-hero.jpg', alt: 'Family Home - Home Loan' },
  }
};

// 验证图片文件
function validateImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
  return allowed.includes(ext);
}

// 复制图片文件
function copyPhoto(srcFile, destFile) {
  const srcPath = path.join(PROJECT_ROOT, 'photos', srcFile);
  const destPath = path.join(PROJECT_ROOT, 'public/images/', destFile);

  if (!fs.existsSync(srcPath)) {
    console.log(`❌ 源文件不存在: ${srcPath}`);
    return false;
  }

  if (!validateImage(srcFile)) {
    console.log(`❌ 不支持的格式: ${srcFile}`);
    return false;
  }

  const stats = fs.statSync(srcPath);
  const sizeKB = (stats.size / 1024).toFixed(2);

  fs.copyFileSync(srcPath, destPath);
  console.log(`✅ 已复制: ${destFile} (${sizeKB} KB)`);
  return true;
}

// 主流程
function main() {
  const args = process.argv.slice(2);
  const type = args.find(arg => arg.startsWith('--type='))?.split('=')[1] || 'all';

  console.log('\n📸 开始替换图片...\n');

  let success = 0;
  let failed = 0;

  if (type === 'all') {
    for (const category of Object.values(PHOTO_MAP)) {
      for (const [dest, info] of Object.entries(category)) {
        if (copyPhoto(info.src, dest)) {
          success++;
        } else {
          failed++;
        }
      }
    }
  } else if (PHOTO_MAP[type]) {
    for (const [dest, info] of Object.entries(PHOTO_MAP[type])) {
      if (copyPhoto(info.src, dest)) {
        success++;
      } else {
        failed++;
      }
    }
  } else {
    console.log('❌ 未知类型。可用类型: all, team, office, general, products');
    process.exit(1);
  }

  console.log(`\n📊 完成: ${success} 张成功, ${failed} 张失败\n`);
  console.log('💡 接下来:');
  console.log('   git add -A');
  console.log('   git commit -m "feat: replace placeholder photos with real images"');
  console.log('   git push origin main');
  console.log('   vercel --prod\n');
}

main();
