# Quick Start Guide

## ⚡ 30-Second Setup

### For Windows Users:
1. **Double-click** `setup.bat` in the portfolio folder
2. Wait for installation to complete
3. Run: `npm run dev`
4. Open browser to `http://localhost:3000`

### For Mac/Linux Users:
```bash
cd Portfolio
npm install
npm run dev
```

## 📋 What's Next?

### 1. **Update Your Profile** (5 minutes)
Edit these files with your information:
- `src/sections/Hero.jsx` - Name, title, tagline
- `src/sections/About.jsx` - Background, education
- `src/sections/Skills.jsx` - Your skills
- `src/sections/Projects.jsx` - Your projects
- `src/sections/Contact.jsx` - Contact info

### 2. **Add Your Image** (2 minutes)
Replace the placeholder image in `src/sections/Hero.jsx`:
```jsx
<img
  src="YOUR_IMAGE_URL"
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

### 3. **Deploy** (10 minutes)
Choose one option:

**Option A: Vercel (Easiest)**
```bash
npm install -g vercel
vercel
```

**Option B: Netlify**
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

**Option C: GitHub Pages**
- Push to GitHub
- Enable Pages in repository settings

## 🎯 Key Files to Customize

| File | Purpose |
|------|---------|
| `src/sections/Hero.jsx` | Landing page & first impression |
| `src/sections/Projects.jsx` | Showcase your best work |
| `src/sections/Contact.jsx` | Contact form & social links |
| `tailwind.config.js` | Color scheme & theme |
| `index.html` | Meta tags & SEO |

## 🚀 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
```

## 📞 Your Contact Information

Make sure to update:
- Email: rambabuask9347@gmail.com → Your email
- GitHub: github.com/rambabu-debug → Your GitHub
- LinkedIn: linkedin.com/in/ram-babu-h → Your LinkedIn

## ✅ Before Going Live

- [ ] All personal information updated
- [ ] Profile image added
- [ ] Project links verified working
- [ ] Tested on mobile devices
- [ ] Contact form tested
- [ ] Links to GitHub/LinkedIn verified
- [ ] Resume/CV ready to download

## 🎨 Color Customization (Optional)

Edit `tailwind.config.js` to change colors:
```javascript
accent: '#3b82f6',        // Change to your brand color
'accent-light': '#60a5fa',
primary: '#0f172a',       // Dark background
```

## 💡 Tips

- **Performance**: Optimize images to <100KB for faster loading
- **Mobile First**: Always test on phone screens
- **SEO**: Update meta tags in `index.html`
- **Analytics**: Add Google Analytics code in `index.html`

## 🆘 Need Help?

1. Check `SETUP.md` for detailed troubleshooting
2. Read component comments for customization
3. Refer to framework docs:
   - React: https://react.dev
   - Tailwind: https://tailwindcss.com/docs
   - Framer Motion: https://www.framer.com/motion/

## 🎉 You're Ready!

Your professional portfolio is fully functional. Start customizing and deploy to impress recruiters! 🚀

---

**Questions?** Check the documentation files in the project folder.

