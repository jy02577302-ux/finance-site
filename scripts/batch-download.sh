#!/bin/bash

# 批量下载 finance-site 所需图片
# 使用 curl 直接下载，跳过 SSL 验证（网络环境问题）

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "📸 开始批量下载图片..."

# 创建目录
mkdir -p photos/team photos/office photos/products photos/general

# 下载函数
download() {
  local url="$1"
  local dest="$2"
  echo "⬇️  下载: $dest"
  if curl -sL --insecure "$url" -o "$dest"; then
    local size=$(du -h "$dest" | cut -f1)
    echo "   ✅ 完成 (${size})"
  else
    echo "   ❌ 失败"
    return 1
  fi
}

# 团队照片
download "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" "photos/team/steven-mo.jpg"
download "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" "photos/team/sarah-chen.jpg"
download "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" "photos/team/david-liu.jpg"

# 办公室
download "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" "photos/office/office-main.jpg"

# 计算器
download "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" "photos/general/mortgage-dashboard.jpg"

# 产品图片
download "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" "photos/products/business-office.jpg"
download "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80" "photos/products/investment-growth.jpg"
download "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" "photos/products/development-site.jpg"
download "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80" "photos/products/construction-site.jpg"
download "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80" "photos/products/home-loan-hero.jpg"

echo ""
echo "📊 下载完成！"
echo ""
echo "💡 下一步："
echo "   node scripts/replace-photos.js    # 复制到 public/images"
echo "   # 或手动检查后复制"
echo ""
