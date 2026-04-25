#!/usr/bin/env python3
import re, os

# 定义每个页面的图片信息
pages = {
    'app/en/about/page.tsx': ('about-hero.jpg', 'STRESS FREE FINANCE Office'),
    'app/zh/about/page.tsx': ('about-hero.jpg', 'STRESS FREE FINANCE 办公室'),
    'app/en/calculators/page.tsx': ('calculators-hero.jpg', 'Mortgage Calculator Dashboard'),
    'app/zh/calculators/page.tsx': ('calculators-hero.jpg', '房贷计算仪表盘'),
    'app/en/contact/page.tsx': ('contact-hero.jpg', 'STRESS FREE FINANCE Office'),
    'app/zh/contact/page.tsx': ('contact-hero.jpg', 'STRESS FREE FINANCE 办公室'),
}

prod_pages = {
    'app/en/products/home-loan/page.tsx': ('home-loan-hero-v2.jpg', 'Family Home - Home Loan', 'primary'),
    'app/en/products/business-loan/page.tsx': ('business-office-v2.jpg', 'Commercial Property - Business Loan', 'emerald'),
    'app/en/products/investment/page.tsx': ('investment-growth-v2.jpg', 'Investment Growth Chart', 'emerald'),
    'app/en/products/development-loan/page.tsx': ('development-site-v2.jpg', 'Development Site - Development Loan', 'amber'),
    'app/en/products/construction/page.tsx': ('construction-site-v2.jpg', 'Construction Site - Construction Loan', 'amber'),
    'app/zh/products/home-loan/page.tsx': ('home-loan-hero-v2.jpg', '温馨家庭住宅 - 房屋贷款', 'primary'),
    'app/zh/products/business-loan/page.tsx': ('business-office-v2.jpg', '商业地产 - 商业贷款', 'emerald'),
    'app/zh/products/investment/page.tsx': ('investment-growth-v2.jpg', '投资增长图表 - 投资贷款', 'emerald'),
    'app/zh/products/development-loan/page.tsx': ('development-site-v2.jpg', '土地开发现场 - 开发贷款', 'amber'),
    'app/zh/products/construction/page.tsx': ('construction-site-v2.jpg', '建筑施工场地 - 建筑贷款', 'amber'),
}

def replace_hero(content, img, alt, color):
    # 寻找并替换完整的 Background Image 块（从 <!-- Background Image --> 到 </div>）
    pattern = r'(/\* Background Image \*/\s*<div className="absolute inset-0">\s*)<Image[^>]*>(\s*</div>)'
    replacement = r'''\1<Image
            src="/images/products/''' + img + '''"
            alt="''' + alt + '''"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />\2'''
    # 特殊：通用页面路径不同
    if img.startswith('about-') or img.startswith('calculators-') or img.startswith('contact-'):
        replacement = r'''\1<Image
            src="/images/''' + img + '''"
            alt="''' + alt + '''"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />\2'''
    return re.sub(pattern, replacement, content, flags=re.MULTILINE)

# 处理通用页面
for filepath, (img, alt) in pages.items():
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        new = replace_hero(content, img, alt, '')
        if new != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new)
            print(f'✓ {filepath}')

# 处理产品页
for filepath, (img, alt, color) in prod_pages.items():
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        new = replace_hero(content, img, alt, color)
        if new != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new)
            print(f'✓ {filepath}')

print('All pages fixed.')
