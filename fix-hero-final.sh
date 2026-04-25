#!/bin/bash
# 修复所有产品页 Hero Image 标签

for f in app/en/products/*/page.tsx app/zh/products/*/page.tsx; do
  # 1. 删除重复的 fill（保留第一个）
  sed -i '0,/fill/{/fill/d;}' "$f"
  
  # 2. 删除重复的 style（保留第一个）
  sed -i '0,/style={{/{/style={{/d;}' "$f"
  
  # 3. 确保在 fill 后添加 sizes
  if grep -q 'fill' "$f"; then
    # 在 fill 后添加 sizes 和 style（如果还没有）
    sed -i '/fill/a\            sizes="100vw"\n            style={{ width: '\''100%'\'', height: '\''100%'\'', objectFit: '\''cover'\'' }}' "$f"
  fi
  
  echo "✓ Fixed $f"
done
