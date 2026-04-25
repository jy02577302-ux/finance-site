#!/usr/bin/env node

/**
 * 批量下载图片脚本
 * 用法: node scripts/download-photos.js
 *
 * 从 photos/manifest.json 读取图片列表，自动下载到对应目录
 *
 * 支持来源：Unsplash, Pexels
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

const PROJECT_ROOT = path.join(__dirname, '..');
const MANIFEST_PATH = path.join(PROJECT_ROOT, 'photos', 'manifest.json');

// 读取 manifest
let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
} catch (err) {
  console.error('❌ 无法读取 manifest 文件:', MANIFEST_PATH);
  console.error('   请确保 photos/manifest.json 存在且格式正确');
  process.exit(1);
}

// 创建目录
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 从 URL 提取 ID 和来源
function parseUrl(url) {
  // Unsplash direct: https://images.unsplash.com/photo-{id}?...
  const unsplashDirectMatch = url.match(/images\.unsplash\.com\/photo-([a-zA-Z0-9-]+)/);
  if (unsplashDirectMatch) {
    return { source: 'unsplash-direct', id: unsplashDirectMatch[1], url };
  }

  // Unsplash page: https://unsplash.com/photos/{id}
  const unsplashMatch = url.match(/unsplash\.com\/photos\/([a-zA-Z0-9-]+)/);
  if (unsplashMatch) {
    return { source: 'unsplash', id: unsplashMatch[1] };
  }

  // Pexels: https://www.pexels.com/photo/{id}/...
  const pexelsMatch = url.match(/pexels\.com\/photo\/(\d+)/);
  if (pexelsMatch) {
    return { source: 'pexels', id: pexelsMatch[1] };
  }

  // 未知格式但可能是直接图片链接
  if (url.startsWith('http')) {
    return { source: 'direct', url };
  }

  return null;
}

// 构建下载链接
function buildDownloadUrl(parsed) {
  if (parsed.source === 'unsplash') {
    return `https://unsplash.com/photos/${parsed.id}/download?force=true`;
  } else if (parsed.source === 'pexels') {
    return `https://www.pexels.com/zh-cn/download/photo/${parsed.id}/`;
  } else if (parsed.source === 'unsplash-direct' || parsed.source === 'direct') {
    return parsed.url;
  }
  return null;
}

// 下载单个文件
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode === 200 || response.statusCode === 302) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        file.close();
        fs.unlink(destPath, () => {}); // 删除不完整文件
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// 主流程
async function main() {
  console.log('\n📸 开始批量下载图片...\n');

  let success = 0;
  let failed = 0;

  for (const [category, items] of Object.entries(manifest)) {
    const categoryDir = path.join(PROJECT_ROOT, 'photos', category);
    ensureDir(categoryDir);

    for (const item of items) {
      const destPath = path.join(categoryDir, item.filename);
      const parsed = parseUrl(item.url);

      if (!parsed) {
        console.log(`❌ 无法解析 URL: ${item.filename} -> ${item.url}`);
        failed++;
        continue;
      }

      const downloadUrl = buildDownloadUrl(parsed.source, parsed.id);
      console.log(`⬇️  下载: ${category}/${item.filename} (${parsed.source})`);

      try {
        await downloadFile(downloadUrl, destPath);
        const stats = fs.statSync(destPath);
        const sizeKB = (stats.size / 1024).toFixed(1);
        console.log(`   ✅ 完成 (${sizeKB} KB)`);
        success++;
      } catch (err) {
        console.log(`   ❌ 失败: ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\n📊 下载完成: ${success} 张成功, ${failed} 张失败`);

  if (failed > 0) {
    console.log('\n💡 失败处理：');
    console.log('   1. 检查网络连接');
    console.log('   2. 有些 Unsplash/Pexels 链接可能需要手动下载');
    console.log('   3. 更新 manifest.json 为有效的图片链接');
    console.log('   4. 或手动下载到对应 photos/{category}/ 目录\n');
  } else {
    console.log('\n🎉 全部下载成功！');
    console.log('\n下一步：');
    console.log('   node scripts/replace-photos.js    # 复制到 public/images');
    console.log('   # 或手动复制文件后部署\n');
  }
}

main().catch(err => {
  console.error('❌ 脚本执行失败:', err);
  process.exit(1);
});
