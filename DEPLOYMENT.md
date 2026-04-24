# 部署指南

## 生产部署流程

### 方式一：Vercel CLI (推荐)

```bash
# 1. 登录 Vercel（如果尚未登录）
vercel login

# 2. 生产环境部署
vercel --prod --yes
```

### 方式二：GitHub 自动部署

1. 代码已推送到 GitHub 的 `main` 分支
2. 访问 Vercel Dashboard → finance-site 项目
3. 点击 "Deployments" → "Promote" 或等待自动构建

---

## WCAG 对比度问题

✅ **深色背景**：accent-500 (#d4a855) on primary-950 (#020617) → 9.16 (PASS)

⚠️ **浅色背景**：accent-500 (#d4a855) on platinum-50 (#fafafa) → 2.11 (FAIL)

位于 Calculator、Products、Why Choose Us 区域的 checkmark 图标。

**建议修复：** 在这些区域将图标颜色改为 `accent-600` (#b45309) 对比度 4.81 (PASS)

---

## 项目信息
- Vercel Project ID: `prj_2WVGqbMKRPPKzIql2nwEiq0meicv`
- GitHub: https://github.com/jy02577302-ux/finance-site
