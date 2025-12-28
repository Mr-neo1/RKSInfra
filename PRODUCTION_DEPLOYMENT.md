# Production Deployment Guide

This guide covers everything you need to deploy your RKS Infra website to production.

## 🚀 Pre-Deployment Checklist

### 1. Environment Variables

Create a `.env.production` file with production values:

```env
REACT_APP_SITE_URL=https://rksinfra.com
REACT_APP_WEB3FORMS_ACCESS_KEY=your-production-key
REACT_APP_USE_BACKEND_API=false
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### 2. Update Configuration

Update `src/config/constants.js`:
- ✅ Site information (email, phone, address)
- ✅ Social media links
- ✅ SEO configuration
- ✅ API endpoints (if using backend)

### 3. Content Review

Review and update `src/data/staticData.js`:
- ✅ All service descriptions
- ✅ Case studies
- ✅ Contact information
- ✅ Portfolio items

### 4. Build Optimization

Run production build:
```bash
npm run build
```

This creates an optimized `build/` folder ready for deployment.

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Already Configured)

Your `vercel.json` is already set up!

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Or connect GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect settings from `vercel.json`

**Advantages:**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ CDN included
- ✅ Auto-deploy on git push
- ✅ Already configured

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Create `netlify.toml`:**
   ```toml
   [build]
     command = "npm run build"
     publish = "build"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Hosting (cPanel, etc.)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload `build/` folder contents** to your hosting's `public_html` or `www` folder

3. **Configure `.htaccess`** (for Apache):
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QR,L]
   ```

## 🔒 Security Checklist

- [ ] Remove any API keys from code (use environment variables)
- [ ] Enable HTTPS (most platforms do this automatically)
- [ ] Set up proper CORS headers if using backend API
- [ ] Review and remove console.logs in production
- [ ] Set up error monitoring (Sentry, LogRocket, etc.)

## 📊 Analytics Setup

### Google Analytics

1. Get your GA4 Measurement ID
2. Add to `.env.production`:
   ```
   REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
3. Add GA script to `public/index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## 🎯 Performance Optimization

### Before Deployment

1. **Test build size:**
   ```bash
   npm run build
   # Check build/static/js and build/static/css sizes
   ```

2. **Optimize images:**
   - Compress all images
   - Use WebP format when possible
   - Lazy load images (already implemented)

3. **Enable compression:**
   - Most hosting platforms enable gzip/brotli automatically
   - For custom servers, configure compression middleware

### Performance Monitoring

- Use Lighthouse to test performance
- Target: 90+ score on all metrics
- Monitor Core Web Vitals

## 🔍 SEO Checklist

- [ ] All pages have unique titles and descriptions
- [ ] Open Graph images are set (1200x630px recommended)
- [ ] Sitemap.xml is generated (use a sitemap generator)
- [ ] robots.txt is configured
- [ ] Canonical URLs are set
- [ ] Structured data (JSON-LD) is added if needed

## 📝 Post-Deployment

1. **Test all pages:**
   - Homepage
   - All service pages
   - Contact form
   - All navigation links

2. **Test on multiple devices:**
   - Desktop
   - Mobile
   - Tablet

3. **Monitor:**
   - Error logs
   - Analytics
   - Performance metrics

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version (should be >=18.0.0)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript/ESLint errors

### Routes Not Working

- Ensure your hosting supports client-side routing
- Check redirect rules (all routes should point to index.html)

### Images Not Loading

- Check image paths (use relative paths)
- Ensure images are in `public/` folder
- Verify build includes all assets

## 📞 Support

For deployment issues:
1. Check build logs
2. Review browser console for errors
3. Test locally with production build: `npm run build && npx serve -s build`

## 🎉 Success!

Once deployed, your site should be:
- ✅ Fast and optimized
- ✅ SEO-friendly
- ✅ Mobile-responsive
- ✅ Secure (HTTPS)
- ✅ Error-free

