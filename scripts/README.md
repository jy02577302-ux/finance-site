# 照片替换脚本

## 快速替换所有图片

1. 将准备好的真实照片放入 `photos/` 目录（按命名放对应文件夹）
2. 运行脚本：

```bash
# 替换所有图片
node scripts/replace-photos.js --type all

# 或按类别替换
node scripts/replace-photos.js --type team      # 仅团队照片
node scripts/replace-photos.js --type office    # 仅办公室
node scripts/replace-photos.js --type products  # 仅产品图
```

3. 脚本会自动：
   - 从 `photos/` 复制文件到 `public/images/`
   - 验证文件格式
   - 报告大小信息

4. 提交并部署：

```bash
git add -A
git commit -m "feat: replace placeholder photos with real images"
git push origin main
vercel --prod
```

---

## 目录结构

```
photos/
├── team/
│   ├── steven-mo.jpg
│   ├── sarah-chen.jpg
│   └── david-liu.jpg
├── office/
│   └── office-main.jpg
├── mortgage-dashboard.jpg
└── products/
    ├── business-office.jpg
    ├── investment-growth.jpg
    ├── development-site.jpg
    ├── construction-site.jpg
    └── home-loan-hero.jpg
```

---

## 照片要求

详细规格请参考 `PHOTO_SHOOT_BRIEF.md`：
- 团队照片：400x400 或 800x800，职业照
- 办公室：1600x900
- 产品特色图：1200x500
- 格式：JPG/PNG/WebP，< 200KB

---

## 验证清单

运行前检查：
- [ ] 照片文件已放入对应的 `photos/` 子目录
- [ ] 文件名与映射表一致（不区分大小写，推荐小写）
- [ ] 文件格式正确（jpg/png/webp）
- [ ] 文件大小合理（< 500KB）

运行后检查：
- `public/images/` 下文件已更新
- `git status` 显示修改
- 本地 `npm run build` 通过
- 部署后生产环境图片正常加载

---

## 故障排除

### 源文件不存在
确保照片放在正确的 `photos/` 子目录中，脚本会报错并跳过。

### 图片未显示
1. 检查文件名是否匹配（包括扩展名）
2. 清除浏览器缓存或硬刷新
3. 检查 Vercel 部署日志是否有构建错误

### 文件过大
使用 https://squoosh.app 压缩图片，目标 < 150KB。

---

## 自定义映射

如需修改映射（如使用不同文件名），编辑 `scripts/replace-photos.js` 中的 `PHOTO_MAP` 对象。

---

## 撤销替换

如果替换错误：

```bash
# 恢复为 SVG 占位
git checkout public/images/team/steven-mo.jpg
# 或其他文件...
```

---

## 下一步

替换完成后，建议：
1. 更新 `IMAGES_PLAN.md` 标记为 "completed"
2. 考虑添加 OpenGraph 图片（SEO）
3. 添加真实客户评价和案例研究
