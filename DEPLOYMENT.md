# Deployment Guide

## 🚀 Deploying to Vercel

### Step 1: Prepare Your Code
1. Make sure all your code is committed to Git
2. Push to GitHub (or your preferred Git provider)

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Step 3: Configure Custom Domain (Optional)
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📊 Performance Optimization

### Before Deployment Checklist:
- [ ] Run `npm run build` locally to test build
- [ ] Check for console errors
- [ ] Optimize images (use WebP format)
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check SEO meta tags

### Post-Deployment:
- [ ] Test the live site
- [ ] Submit to Google Search Console
- [ ] Set up analytics (if using)
- [ ] Test all forms and links

## 🔍 SEO Setup

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Verify ownership (Vercel provides DNS verification)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Analytics (Optional)
- **Vercel Analytics**: Built-in, just enable in project settings
- **Google Analytics**: Add GA4 tracking code to `index.html`

## 📝 Environment Variables

If you need environment variables:
1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## 🔄 Continuous Deployment

Vercel automatically deploys on every push to your main branch:
- Push to `main` → Production deployment
- Push to other branches → Preview deployment

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 404 Errors
- Ensure `index.html` is in the root
- Check Vercel's routing configuration
- Verify all file paths are correct

### Performance Issues
- Optimize images
- Check bundle size
- Enable Vercel's Edge Network

---

**Need Help?** Check [Vercel Documentation](https://vercel.com/docs)

