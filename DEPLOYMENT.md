# Deployment Guide

Complete instructions for deploying your portfolio to production.

## 🚀 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] Profile image is added
- [ ] All project links are working
- [ ] External links (GitHub, LinkedIn) are verified
- [ ] Contact form is functional
- [ ] Mobile responsiveness tested
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] SEO meta tags updated in `index.html`
- [ ] No console errors in DevTools

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Advantages**: 
- Easiest setup
- Free tier available
- Great performance
- Automatic deployments from Git

**Steps**:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts**:
   - Confirm project settings
   - Choose production environment
   - Done!

4. **Connect to GitHub (Optional)**:
   - Link your Vercel account to GitHub
   - Enable automatic deployments on push

**URL**: Your portfolio will be live at `yourname.vercel.app`

---

### Option 2: Netlify

**Advantages**:
- Easy drag-and-drop deployment
- Good free tier
- Built-in form handling

**Steps**:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to Netlify.com**:
   - Sign up for free account
   - Create new site

3. **Deploy**:
   - Drag and drop the `dist` folder
   - Or connect GitHub for auto-deployments

4. **Configure**:
   - Set build command: `npm run build`
   - Set publish directory: `dist`

**URL**: Your portfolio will be live at `yourname.netlify.app`

---

### Option 3: GitHub Pages

**Advantages**:
- Completely free
- Integrated with GitHub
- Great for developers

**Steps**:

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Update `vite.config.js`**:
   ```javascript
   export default {
     base: '/portfolio/', // Change to your repo name
     // ... rest of config
   }
   ```

3. **Go to GitHub Repository Settings**:
   - Pages section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder

4. **Build and push**:
   ```bash
   npm run build
   git add .
   git commit -m "Build"
   git push
   ```

**URL**: Your portfolio will be live at `yourname.github.io/portfolio`

---

### Option 4: Traditional Hosting (cPanel, Shared Hosting)

**Steps**:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Connect via FTP
   - Upload contents of `dist` folder to `public_html`

3. **Configure server**:
   - Ensure `.htaccess` is configured for SPA routing
   - Add rewrite rules

**.htaccess example**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### Option 5: Docker & AWS/GCP/Azure

**For advanced users**:

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM node:18-alpine
   WORKDIR /app
   RUN npm install -g serve
   COPY --from=build /app/dist ./dist
   EXPOSE 3000
   CMD ["serve", "-s", "dist", "-l", "3000"]
   ```

2. **Build and deploy**:
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

3. **Deploy to cloud**:
   - AWS: ECS/EC2
   - Google Cloud: Cloud Run
   - Azure: App Service

---

## 🔧 Configuration for Deployment

### Update Environment Variables

1. **Create `.env.production`**:
   ```
   VITE_API_URL=https://yourapi.com
   VITE_GITHUB_URL=https://github.com/yourusername
   ```

2. **Update contact links**:
   - `src/sections/Contact.jsx`
   - `src/components/Navbar.jsx`

### Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Ram Babu - Backend Engineer & System Designer">
<meta name="keywords" content="backend, java, spring boot, system design">
<meta property="og:title" content="Ram Babu - Backend Engineer">
<meta property="og:description" content="Professional portfolio">
<meta property="og:image" content="YOUR_IMAGE_URL">
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Image Optimization**:
   - Compress images (use TinyPNG)
   - Use modern formats (WebP)
   - Target max 100KB per image

2. **Build Analysis**:
   ```bash
   npm run build
   ```
   Check `dist` folder size (should be < 500KB)

3. **Lighthouse Audit**:
   - Open DevTools > Lighthouse
   - Target: 90+ for all metrics

### Optimization Checklist

- [ ] Images compressed
- [ ] Unused CSS removed
- [ ] JavaScript minified
- [ ] Code splitting enabled
- [ ] Lazy loading configured
- [ ] Caching headers set
- [ ] GZIP compression enabled
- [ ] CDN configured (if available)

---

## 🔒 Security Setup

### SSL Certificate

- **Vercel**: Automatic HTTPS
- **Netlify**: Automatic HTTPS
- **GitHub Pages**: Automatic HTTPS
- **Self-hosted**: Get free certificate from Let's Encrypt

### Security Headers

Add to deployment config:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 📈 Post-Deployment

### Monitoring

1. **Set up monitoring**:
   - Vercel: Built-in analytics
   - Netlify: Built-in analytics
   - Self-hosted: Google Analytics

2. **Add Google Analytics**:
   ```html
   <!-- In index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

### SEO Optimization

1. **Submit sitemap**:
   - Google Search Console
   - Bing Webmaster Tools

2. **Add robots.txt**:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

3. **Structured data**:
   - Add JSON-LD for rich snippets
   - Use Schema.org markup

---

## 🔄 Continuous Deployment

### GitHub Actions (Automatic)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 🆘 Troubleshooting Deployment

### Issue: 404 errors on refresh

**Solution**: Configure SPA routing in your hosting
- Vercel: Automatic
- Netlify: Add `_redirects` file
- GitHub Pages: Update `vite.config.js`

### Issue: Styling not loading

**Solution**:
- Check base path in `vite.config.js`
- Verify CSS files in `dist` folder
- Clear browser cache

### Issue: Images not showing

**Solution**:
- Use absolute URLs
- Check image paths
- Verify permissions

### Issue: Form not submitting

**Solution**:
- Check backend API endpoint
- Verify CORS settings
- Check browser console for errors

---

## 📞 Support

- **Vercel Support**: https://vercel.com/support
- **Netlify Support**: https://support.netlify.com
- **GitHub Help**: https://docs.github.com

---

## ✅ Final Checklist

Before going live:

- [ ] Domain name configured
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Backup created
- [ ] All links tested
- [ ] Performance optimized
- [ ] Mobile tested
- [ ] SEO configured
- [ ] Contact form tested
- [ ] Share on social media

---

## 🎉 Congratulations!

Your portfolio is now live! Keep it updated with your latest projects and achievements. Good luck with your career! 🚀

---

**Need help?** Check platform-specific documentation or contact support.

