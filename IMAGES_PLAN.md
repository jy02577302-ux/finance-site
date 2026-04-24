# 图片内容增强计划

## 页面分析与建议

### ✅ 已丰富页面
- **首页** - Hero + 多个区块 + 图标
- **Products** - 产品卡片 + 图标 + CTA
- **About** - 统计数据 + 价值观 + 团队占位符 + 牌照
- **Contact** - 联系信息 + 表单
- **Product Detail** (home-loan) - 承诺 + 计算器 + 流程

### 📝 需补充图片页面

#### 1. About Page (`/zh/about`, `/en/about`)
**现状：** 团队头像用首字母占位 (`<span className="text-2xl text-gray-500">S</span>`)
**建议添加：**
- 团队照片（3人）
- 办公室环境图
- 里程碑时间线图标（或插图）

#### 2. Calculators Page (`/zh/calculators`, `/en/calculators`)
**现状：** 纯表单 + 说明文字
**建议添加：**
- 计算器使用示意图（右侧区域）
- 常见问题插图
- 不同贷款类型对比图表（可选）

#### 3. Product Pages (除 home-loan 外)
- **business-loan** - 商业地产/办公室图片
- **development-loan** - 建筑施工现场/土地分割示意图
- **construction** - 房屋建设过程图
- **investment** - 投资增长图表

#### 4. Legal Pages
**现状：** 纯文字法律条款
**建议：** 无需图片，保持简洁专业

#### 5. 其他
- 添加 favicon（已有）
- 添加 OG image（可选）

---

## 图片规格建议

- 格式：WebP（优先）或 PNG/JPG
- 尺寸：根据区块宽度（~1200px 宽）
- 压缩：使用 < 100KB 的优化图片
- 路径：`/public/images/`

---

## 已完成 ✅

- [x] 团队照片占位（3人）- `public/images/team/`
  - `steven-mo.jpg` (200x200 SVG)
  - `sarah-chen.jpg`
  - `david-liu.jpg`
- [x] 办公室图片占位 - `public/images/office/office-main.jpg` (1200x400)
- [x] 计算器页 Hero 图 - `public/images/mortgage-dashboard.jpg` (1200x400)
- [x] Business Loan 特色图 - `public/images/products/business-office.jpg`
- [x] Investment 特色图 - `public/images/products/investment-growth.jpg`
- [x] Development Loan 特色图 - `public/images/products/development-site.jpg`
- [x] Construction Loan 特色图 - `public/images/products/construction-site.jpg`
- [x] Home Loan 特色图 - `public/images/products/home-loan-hero.jpg`
- [x] Contact 页地图占位（两语言）

**图片均为 SVG 占位，可直接替换为真实 JPG/PNG。**

## 待办（可选）

- 替换真实照片：
  - 团队成员实际头像（建议 400x400 或 800x800）
  - 办公室实景（建议 1600x900）
  - 产品场景图（建议 1200x500）
  - Google Maps embed code（Contact 页）
