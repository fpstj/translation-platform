# 🚀 Deployment Checklist - IN & OUT Translation Website

## Pre-Deployment Tasks

### ✅ Content Updates

- [ ] Add actual Hero image (`Hero-img.jpg`) to `/src/assets/images/`
- [ ] Replace placeholder icons with actual icon library (React Icons recommended)
- [ ] Add real company/partner logos to LogoSlider
- [ ] Add team member photographs
- [ ] Add service images
- [ ] Update all contact information (email, phone, address)
- [ ] Update Google Maps embed with actual location
- [ ] Review and update all text content
- [ ] Add actual company logo/favicon

### ✅ Technical Preparation

- [ ] Remove console.log statements
- [ ] Update meta tags in `index.html` (title, description, keywords)
- [ ] Add Open Graph tags for social media sharing
- [ ] Configure environment variables (if needed)
- [ ] Set up backend API endpoints (when ready)
- [ ] Configure email service for forms
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add cookie consent banner (if required by law)
- [ ] Set up error tracking (Sentry, etc.)

### ✅ Testing

#### Functionality Testing

- [ ] Test all navigation links
- [ ] Test dropdown menus
- [ ] Test all buttons and CTAs
- [ ] Test contact form submission
- [ ] Test job application form submission
- [ ] Test form validation (all fields)
- [ ] Test login form (even if placeholder)
- [ ] Test logo slider animation
- [ ] Test skip to main content link

#### Responsive Testing

- [ ] Test on iPhone (375px)
- [ ] Test on iPhone Plus/Max (414px)
- [ ] Test on iPad Portrait (768px)
- [ ] Test on iPad Landscape (1024px)
- [ ] Test on Laptop (1366px)
- [ ] Test on Desktop (1920px)
- [ ] Test on Ultra-wide (2560px+)

#### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

#### Accessibility Testing

- [ ] Run Lighthouse audit (target 95+ accessibility score)
- [ ] Test keyboard navigation (Tab, Shift+Tab, Enter, Escape)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Verify all images have alt text
- [ ] Check color contrast ratios
- [ ] Test focus indicators visibility
- [ ] Verify form error messages are announced
- [ ] Test skip navigation link

### ✅ Performance Optimization

- [ ] Optimize all images (use WebP format, compress)
- [ ] Add lazy loading for images
- [ ] Minimize JavaScript bundle size
- [ ] Enable gzip/brotli compression on server
- [ ] Set up CDN for static assets (optional)
- [ ] Add service worker for offline support (optional)
- [ ] Test page load speed (target < 3 seconds)
- [ ] Run Lighthouse performance audit (target 90+)

### ✅ SEO Optimization

- [ ] Verify meta descriptions on all pages
- [ ] Add canonical URLs
- [ ] Create robots.txt file
- [ ] Create sitemap.xml
- [ ] Add structured data (Schema.org)
- [ ] Verify Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Test with Google Search Console
- [ ] Submit sitemap to search engines

### ✅ Security

- [ ] Use HTTPS (SSL certificate)
- [ ] Set up Content Security Policy headers
- [ ] Enable HSTS (HTTP Strict Transport Security)
- [ ] Add X-Frame-Options header
- [ ] Add X-Content-Type-Options header
- [ ] Scan for vulnerabilities (npm audit)
- [ ] Keep dependencies updated
- [ ] Sanitize user inputs (when backend is connected)

---

## Build Process

### 1. Final Code Review

```bash
# Run linter
npm run lint

# Fix any issues
npm run lint -- --fix

# Check for TypeScript errors
npm run build
```

### 2. Build Production Bundle

```bash
# Clean previous builds
rm -rf dist

# Build for production
npm run build

# Output will be in dist/ folder
```

### 3. Test Production Build Locally

```bash
# Preview production build
npm run preview

# Test all functionality again in preview mode
```

### 4. Verify Build Output

Check `dist/` folder contains:

- [ ] index.html
- [ ] assets/ folder with JS and CSS
- [ ] All static assets copied
- [ ] Source maps (optional for debugging)

---

## Deployment Options

### Option 1: Traditional Web Hosting

**Services**: Bluehost, HostGator, GoDaddy, etc.

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder via FTP/SFTP
3. Point domain to hosting
4. Configure server for SPA routing (URL rewriting)

**Server Configuration (.htaccess for Apache)**:

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

### Option 2: Netlify (Recommended)

**Why**: Automatic builds, HTTPS, CDN, form handling

1. Sign up at netlify.com
2. Connect GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

**netlify.toml** (in project root):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Vercel

**Why**: Optimized for React, automatic deployments

1. Sign up at vercel.com
2. Import project from GitHub
3. Vercel auto-detects Vite
4. Deploy!

**vercel.json** (optional configuration):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Option 4: GitHub Pages

**Why**: Free hosting for static sites

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:

```json
{
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Run: `npm run deploy`

Update `vite.config.ts` for GitHub Pages:

```typescript
export default defineConfig({
  base: "/repo-name/",
  plugins: [react()],
});
```

### Option 5: AWS S3 + CloudFront

**Why**: Scalable, professional infrastructure

1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/` contents
4. Set up CloudFront distribution
5. Configure Route 53 for custom domain

---

## Post-Deployment Tasks

### ✅ Verification

- [ ] Visit live URL and test all pages
- [ ] Test all forms
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test on mobile devices
- [ ] Verify analytics tracking works
- [ ] Test contact form email delivery

### ✅ Monitoring Setup

- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking alerts
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Set up performance monitoring

### ✅ SEO Submission

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Submit to other search engines (Yandex, DuckDuckGo)
- [ ] Create Google My Business listing
- [ ] Add to relevant directories

### ✅ Marketing

- [ ] Announce launch on social media
- [ ] Send email to existing clients
- [ ] Update email signatures with new URL
- [ ] Update business cards and marketing materials
- [ ] List in translation service directories

---

## Maintenance Schedule

### Daily

- [ ] Check uptime monitoring
- [ ] Monitor error tracking

### Weekly

- [ ] Review analytics data
- [ ] Check for security alerts
- [ ] Review form submissions

### Monthly

- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Review performance metrics
- [ ] Update content as needed
- [ ] Check broken links

### Quarterly

- [ ] Major dependency updates
- [ ] SEO audit
- [ ] Accessibility audit
- [ ] Performance optimization review
- [ ] Content refresh

### Annually

- [ ] Renew domain
- [ ] Renew SSL certificate (if manual)
- [ ] Major redesign consideration
- [ ] User feedback survey

---

## Rollback Plan

If issues occur after deployment:

1. **Immediate**: Use hosting platform's rollback feature
2. **Manual**:
   ```bash
   git checkout previous-commit-hash
   npm run build
   # Redeploy dist/ folder
   ```
3. **Monitor**: Check error logs and user reports
4. **Fix**: Address issues and redeploy

---

## Documentation URLs

After deployment, update these documents:

- [ ] Update README.md with live URL
- [ ] Update PROJECT_DOCUMENTATION.md
- [ ] Add deployment date to SUMMARY.md
- [ ] Document any deployment-specific configurations

---

## Emergency Contacts

**Hosting Provider Support**: [Provider phone/email]
**Domain Registrar**: [Registrar support info]
**Developer**: [Your contact info]
**IT Team**: [Team contact info]

---

## Success Criteria

Your deployment is successful when:

- ✅ Website loads in < 3 seconds
- ✅ All pages accessible and functional
- ✅ Forms submit successfully
- ✅ Mobile experience is smooth
- ✅ No console errors
- ✅ Lighthouse score > 90 (all categories)
- ✅ SSL certificate valid
- ✅ Analytics tracking works
- ✅ Search engines can crawl site

---

## Notes

**Deployment Date**: ******\_******
**Deployed By**: ******\_******
**Version**: ******\_******
**Issues Found**: ******\_******
**Resolution**: ******\_******

---

**Ready to launch? Go through this checklist carefully and check off each item!** 🚀

**Good luck with your deployment!** 🎉
