# 照片拍摄/采购需求清单

## 项目概述
为 STRESS FREE FINANCE 网站替换 SVG 占位图，使用真实专业摄影作品。

---

## 📸 需要获取的照片列表

### 1. 团队照片（About 页）
**路径：** `public/images/team/`

| 文件 | 描述 | 用途 | 要求 |
|------|------|------|------|
| `steven-mo.jpg` | Steven Mo（创始人/高级经纪） | 团队成员卡片 | 400x400 或 800x800，正脸职业照，白色或浅灰背景 |
| `sarah-chen.jpg` | Sarah Chen（投资贷款专家） | 团队成员卡片 | 同上 |
| `david-liu.jpg` | David Liu（建筑贷款顾问） | 团队成员卡片 | 同上 |

**风格：** 专业商务肖像，微笑，穿着得体（西装/职业装），手持墨尔本地标背景可选

---

### 2. 办公室实景（About 页）
**路径：** `public/images/office/office-main.jpg`

| 要求 | 详情 |
|------|------|
| 尺寸 | 1600x900 (16:9) 或 1200x800 |
| 内容 | 墨尔本 Collins St 办公室内景 |
| 重点 | 整洁的办公桌、电脑、品牌标识、窗外街景 |
| 色调 | 明亮、现代、专业 |
| 时间 | 白天自然光 |

---

### 3. 计算器 Hero 图（Calculators 页）
**路径：** `public/images/mortgage-dashboard.jpg`

| 要求 | 详情 |
|------|------|
| 尺寸 | 1200x400 (3:1 宽幅) |
| 内容 | 房贷计算仪表盘/图表可视化 |
| 风格 | 现代数据可视化，青色/金色主调 |
| 元素 | 折线图、饼图、输入表单、月供数字突出 |
| 用途 | 吸引用户使用计算器 |

**替代方案：** 可使用 Figma 设计截图或信息图

---

### 4. 产品特色图（Products 详情页）
**路径：** `public/images/products/`

| 文件 | 产品 | 主题 | 尺寸 | 描述 |
|------|------|------|------|------|
| `business-office.jpg` | Business Loan | 商业地产/办公室 | 1200x500 | 现代化写字楼外观或大堂 |
| `investment-growth.jpg` | Investment | 投资增长 | 1200x500 | 上升曲线图表 + 房产图标 |
| `development-site.jpg` | Development | 土地开发 | 1200x500 | 建筑工地/土地分割示意 |
| `construction-site.jpg` | Construction | 建筑施工 | 1200x500 | 房屋建设现场（框架/施工中） |
| `home-loan-hero.jpg` | Home Loan | 房屋贷款 | 1200x500 | 温馨家庭住宅外景 |

**风格统一：**
- 使用品牌色（d4a855 金色 + primary-950 深黑）作为点缀
- 可添加半透明渐变叠加文字空间
- 保持专业、可信赖的视觉调性

---

## 🎨 摄影/设计规格

### 图像格式
- **格式：** JPG（摄影）或 PNG（图形）
- **质量：** 高质量（80%+ 压缩）
- **色彩空间：** sRGB
- **文件名：** 小写 + 连字符（如 `business-office.jpg`）

### 推荐资源
1. **免费图库（CC0）**
   - Unsplash（搜索关键词：office, mortgage, construction, etc.）
   - Pexels
   - Pixabay

2. **付费图库（高品质）**
   - Shutterstock
   - Adobe Stock
   - iStock

3. **自定义拍摄**
   - 墨尔本当地摄影师
   - 实景拍摄办公室、团队
   - 需合同授权使用

---

## 📝 替代方案：使用免费图库

如果预算有限，建议使用 Unsplash 等 CC0 图库，关键词：

| 类别 | 关键词 |
|------|--------|
| 团队 | "business portrait", "mortgage broker", "professional headshot" |
| 办公室 | "Melbourne office", "modern office interior", "Collins St" |
| 计算器 | "finance dashboard", "mortgage chart", "data visualization" |
| 商业 | "commercial building", "office tower", "business meeting" |
| 投资 | "investment growth", "property chart", "financial graph" |
| 开发 | "construction site", "land development", "subdivision" |
| 建筑 | "house construction", "building frame", "new home" |
| 房屋 | "family home", "modern house", "melbourne suburb" |

---

## 🔧 替换流程

1. **准备图片**
   - 按规格裁剪和优化
   - 文件大小控制在 100-200KB 以内
   - 使用工具：Squoosh（https://squoosh.app）或 ImageOptim

2. **替换文件**
   ```bash
   # 直接覆盖对应路径的文件
   cp your-photo.jpg public/images/team/steven-mo.jpg
   ```

3. **重新部署**
   ```bash
   git add -A
   git commit -m "feat: replace placeholder with real photo - [description]"
   git push origin main
   vercel --prod
   ```

4. **验证**
   - 访问生产环境检查显示
   - 在 DevTools 检查 Network 确认图片加载

---

## 📋 检查清单

- [ ] 所有 9 个图片文件已准备
- [ ] 尺寸和格式符合要求
- [ ] 品牌色调一致（可选后期调色）
- [ ] 已获得使用权/授权
- [ ] 文件命名规范
- [ ] 已复制到 `public/images/` 对应目录
- [ ] 本地预览正常
- [ ] Git 提交并推送
- [ ] Vercel 部署完成
- [ ] 生产环境验证通过

---

## 💡 注意事项

1. **版权：** 确保所有图片有合法使用权，避免侵权
2. **响应式：** 图片尺寸足够大（建议宽度 1200px+），适应 Retina 屏幕
3. **性能：** 压缩图片，避免过大影响加载速度
4. **Alt 文本：** 代码中已预留 alt 属性，无需额外修改

---

## 📞 需要协助？

如果需要：
- 图片裁剪/压缩帮助
- 寻找免费图库资源
- 设计品牌色叠加模板
- 批量替换自动化脚本

请告知具体需求。
