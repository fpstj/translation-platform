# Deployment Guide - IN & OUT Translation Platform

This guide covers deployment options for the translation platform.

## Table of Contents
1. [Vercel Deployment (Recommended)](#vercel-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [GitHub Pages](#github-pages)
4. [Traditional Hosting (cPanel/VPS)](#traditional-hosting)
5. [Environment Variables](#environment-variables)
6. [Post-Deployment Checklist](#post-deployment-checklist)

---

## Vercel Deployment (Recommended)

Vercel offers the best experience for Vite + React applications with zero configuration.

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available)

### Steps

1. **Push code to Git repository**
```bash
cd translation_frontend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Vercel CLI Alternative**
```bash
npm install -g vercel
cd translation_frontend
vercel
```

### Custom Domain
1. Go to Project Settings  Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

### Build Configuration (if needed)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## Netlify Deployment

### Method 1: Drag & Drop

1. **Build the project locally**
```bash
cd translation_frontend
npm run build
```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to Netlify Drop
   - Done!

### Method 2: Git Integration

1. **Connect repository**
   - Go to Netlify Dashboard
   - "Add new site"  "Import an existing project"
   - Connect your Git provider
   - Select repository

2. **Build settings**
   - **Base directory**: `translation_frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `translation_frontend/dist`

3. **Deploy**

### Custom Domain on Netlify
1. Domain settings  Add custom domain
2. Configure DNS records
3. Enable HTTPS (automatic)

---

## Traditional Hosting (cPanel/VPS)

### For Shared Hosting / cPanel

1. **Build the project**
```bash
cd translation_frontend
npm run build
```

2. **Upload files**
   - Upload contents of `dist` folder to `public_html` or `www`
   - Use FTP/SFTP or File Manager

3. **Configure .htaccess** (for React Router)

Create `.htaccess` in root directory:
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

## Environment Variables

For production, create `.env.production`:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_ENV=production
```

---

## Post-Deployment Checklist

### Testing
- [ ] Test all pages load correctly
- [ ] Verify routing works (refresh on any page)
- [ ] Test on mobile devices
- [ ] Check contact form functionality

### Performance
- [ ] Enable Gzip/Brotli compression
- [ ] Test load time with Lighthouse

### Security
- [ ] Enable HTTPS (SSL/TLS)
- [ ] Configure security headers

---

**Last Updated**: October 29, 2025
