# 照片资源目录

此目录用于存放从网上下载的真实图片，然后再复制到 `public/images/`。

## 目录结构

```
photos/
├── team/          # 团队成员头像 (800x800)
│   ├── steven-mo.jpg
│   ├── sarah-chen.jpg
│   └── david-liu.jpg
├── office/        # 办公室照片 (1600x900)
│   └── office-main.jpg
├── general/       # 通用图片
│   └── mortgage-dashboard.jpg  # 计算器 Hero (1200x400)
└── products/      # 产品特色图 (1200x500)
    ├── business-office.jpg
    ├── investment-growth.jpg
    ├── development-site.jpg
    ├── construction-site.jpg
    └── home-loan-hero.jpg
```

## 快速开始

### 1. 使用推荐图片（默认）

```bash
node scripts/download-photos.js
```

脚本会读取 `manifest.json` 中的链接并自动下载。

### 2. 手动下载（自由选择）

- 打开 `../IMAGE_SOURCES_GUIDE.md` 查看搜索链接
- 在 Unsplash/Pexels 中选择喜欢的图片
- 保存到对应目录（确保文件名匹配）

### 3. 修改推荐链接

编辑 `manifest.json`，替换 URL 为你自己的选择，然后再次运行下载脚本。

---

⚠️ **注意：**
- 下载的图片会自动保存到本目录
- 运行 `replace-photos.js` 会将本目录图片复制到 `public/images/`
- 复制前请确认尺寸和内容正确
- 建议先用 Squoosh.app 裁剪到目标尺寸
