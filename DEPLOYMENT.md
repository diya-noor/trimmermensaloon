# Deployment Guide - Trimmer Men's Saloon Website

This guide covers different deployment options for the Trimmer Men's Saloon website.

## Prerequisites

- Node.js (v16 or higher)
- Git (for version control)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Access at: `http://localhost:5173`

## Production Build

Build the project for production:
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

Preview the production build:
```bash
npm run preview
```

## Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

**Benefits:**
- Free hosting for static sites
- Automatic HTTPS
- Global CDN
- Easy custom domain setup
- Automatic deployments from Git

### Option 2: Netlify (Free)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Benefits:**
- Free hosting
- Continuous deployment from Git
- Custom domains
- Form handling

### Option 3: GitHub Pages (Free)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/trimmer-saloon"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/trimmer-saloon/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Web Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web hosting via FTP/SFTP

3. Configure your server to serve `index.html` for all routes (for React Router support)

**Example .htaccess for Apache:**
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

**Example nginx configuration:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Option 5: Firebase Hosting (Free)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

## Environment Variables

If you need to add environment variables:

1. Create `.env` file:
```
VITE_API_URL=your_api_url
VITE_GOOGLE_MAPS_KEY=your_maps_key
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. For production, set environment variables in your hosting platform's dashboard

## Custom Domain Setup

### For Vercel:
1. Go to project settings
2. Add your domain
3. Configure DNS records as instructed

### For Netlify:
1. Go to Domain settings
2. Add custom domain
3. Update DNS records

## Performance Optimization

The build is already optimized, but you can further improve:

1. **Enable compression** on your server (gzip/brotli)
2. **Add caching headers** for static assets
3. **Use a CDN** for global distribution
4. **Optimize images** before uploading to public folder

## Monitoring

Consider adding analytics:

1. **Google Analytics**
2. **Vercel Analytics**
3. **Netlify Analytics**

## Support

For deployment issues, check:
- Build logs
- Console errors in browser
- Network tab for failed requests

## Recommended Deployment

For the best experience, we recommend **Vercel** or **Netlify** for their:
- Free tier
- Automatic HTTPS
- CDN
- Easy Git integration
- Zero configuration needed
