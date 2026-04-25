#!/bin/bash
cd "$(dirname "$0")"

# About Hero
curl -sL --insecure "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" -o about/about-hero.jpg

# Calculators Hero
curl -sL --insecure "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" -o calculators/calculators-hero.jpg

# Contact Hero
curl -sL --insecure "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80" -o contact/contact-hero.jpg

# Products
curl -sL --insecure "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80" -o products/home-loan-hero-v2.jpg
curl -sL --insecure "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80" -o products/business-office-v2.jpg
curl -sL --insecure "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80" -o products/investment-growth-v2.jpg
curl -sL --insecure "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" -o products/development-site-v2.jpg
curl -sL --insecure "https://images.unsplash.com/photo-1503387762-7051b0f5c1b2?auto=format&fit=crop&w=1200&q=80" -o products/construction-site-v2.jpg

echo "Download complete"
