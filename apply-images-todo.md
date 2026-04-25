# 产品页图片应用任务

## 问题
已下载 10 张真实图片到 `public/images/`，但产品详情页的 Hero 区域仍显示占位符，未使用真实图片。

## 需要修改的文件 (5 个英文产品页)

### 1. `/app/en/products/home-loan/page.tsx`
- 行号：约 110-120
- 替换占位符为 `<Image src="/images/products/home-loan-hero.jpg" alt="Family Home" />`
- 参考样式：`className="w-full h-64 md:h-80 object-cover"`

### 2. `/app/en/products/business-loan/page.tsx`
- 行号：约 60-70
- 替换占位符为 `<Image src="/images/products/business-office.jpg" alt="Commercial Property" />`

### 3. `/app/en/products/investment/page.tsx`
- 行号：约 30-40
- 替换占位符为 `<Image src="/images/products/investment-growth.jpg" alt="Investment Growth" />`

### 4. `/app/en/products/development-loan/page.tsx`
- 行号：约 60-70
- 替换占位符为 `<Image src="/images/products/development-site.jpg" alt="Development Site" />`

### 5. `/app/en/products/construction/page.tsx`
- 行号：约 90-100
- 替换占位符为 `<Image src="/images/products/construction-site.jpg" alt="Construction Site" />`

## 修改方法

### 方式一：使用 Next.js Image 组件（推荐）

```tsx
import Image from "next/image";

// 替换整个 div 占位块为：
<div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl -mt-8 relative z-10">
  <Image
    src="/images/products/home-loan-hero.jpg"
    alt="Family Home - Home Loan"
    width={1200}
    height={500}
    className="w-full h-auto"
  />
</div>
```

### 方式二：使用 img 标签（简单）

```tsx
<div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl -mt-8 relative z-10">
  <img
    src="/images/products/home-loan-hero.jpg"
    alt="Family Home - Home Loan"
    className="w-full h-64 md:h-80 object-cover"
  />
</div>
```

## 注意事项
- 保持容器样式：`max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl -mt-8 relative z-10`
- 图片已经在 `public/images/products/` 目录中
- 5 个产品页都需要修改
- 中文版本暂不需要修改（暂无对应图片）

## 完成后
1. 本地预览：`npm run dev`
2. 提交部署：`git add -A && git commit -m "feat: apply real product images" && git push`
3. 生产验证：检查各产品页是否正确显示图片

---

**快速批量修改脚本见 `scripts/apply-product-images.js`**（可后续创建）
