#!/usr/bin/env python3
import re
import os

products = {
    'home-loan': ('home-loan-hero-v2.jpg', 'Family Home - Home Loan'),
    'business-loan': ('business-office-v2.jpg', 'Commercial Property - Business Loan'),
    'investment': ('investment-growth-v2.jpg', 'Investment Growth Chart'),
    'development-loan': ('development-site-v2.jpg', 'Development Site - Development Loan'),
    'construction': ('construction-site-v2.jpg', 'Construction Site - Construction Loan')
}

def fix_file(filepath, prod_key):
    prod_img, prod_alt = products[prod_key]
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 替换 Background Image 块
    pattern = r'({\s*<!--\s*Background Image\s*-->\s*<div className="absolute inset-0">\s*)<Image\s+src="[^"]+"\s+alt="[^"]+"\s*/>(\s*</div>)'
    replacement = r'''\1<Image
            src="/images/products/''' + prod_img + '''"
            alt="''' + prod_alt + '''"
            fill
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />\2'''

    new_content = re.sub(pattern, replacement, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'✓ Fixed: {filepath}')
        return True
    return False

# Process all product pages
langs = ['en', 'zh']
for lang in langs:
    for prod_key in products.keys():
        filepath = f'app/{lang}/products/{prod_key}/page.tsx'
        if os.path.exists(filepath):
            fix_file(filepath, prod_key)

print('All done.')
