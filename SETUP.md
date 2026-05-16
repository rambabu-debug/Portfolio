# Portfolio Setup & Usage Guide

## 📦 Installation

### Step 1: Prerequisites
Make sure you have:
- **Node.js** (v14 or higher) - Download from [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)

### Step 2: Install Dependencies

#### Option A: Using Setup Script (Windows)
```bash
# Double-click setup.bat
# Or run from Command Prompt/PowerShell
.\setup.bat
```

#### Option B: Manual Installation
```bash
cd "C:\Users\ramba\Downloads\demo\Portfolio"
npm install
```

## 🚀 Running the Portfolio

### Development Mode
```bash
npm run dev
```
This will:
- Start development server at `http://localhost:3000`
- Enable hot module replacement (HMR)
- Auto-reload on file changes

### Production Build
```bash
npm run build
```
This will:
- Create optimized production bundle in `dist/` folder
- Minify CSS and JavaScript
- Generate source maps

### Preview Production Build
```bash
npm run preview
```

## 📱 Features Overview

### 1. Hero Section
- Animated profile image with floating effect
- Professional title and tagline
- Statistics cards
- Call-to-action buttons
- Scroll indicator

### 2. About Section
- Professional background
- Career focus areas (Backend, System Design, Problem Solving)
- Education timeline with CGPA
- Detailed career interests

### 3. Skills Section
- Categorized skills:
  - Programming Languages (Java, Python, C)
  - Backend & Frameworks (Spring, Spring Boot, etc.)
  - Frontend (HTML, CSS, React, JavaFX)
  - Databases (PostgreSQL, SQL)
  - Cybersecurity & Tools
  - Developer Tools
- Coursework display

### 4. Projects Section
- Premium project cards with:
  - Project images
  - Detailed descriptions
  - Key features
  - Technology stack
  - Live demo links
  - Featured projects highlighting

Featured Projects:
- HybridEmergency Response System
- Payment Integrating System
- Threat Analysis System
- Campus Transit Application

### 5. Experience Section
- Academic achievements
- Competitive accomplishments
- Publications (ICT4SD Conference)
- Certifications and recognitions
- Core competencies
- Professional goals

### 6. Contact Section
- Contact information cards
- Email, LinkedIn, GitHub links
- Contact form with validation
- Quick statistics

### 7. Footer
- Quick links
- Social media links
- Back to top button
- Copyright information

## 🎨 Customization Guide

### Updating Personal Information

#### Hero Section (src/sections/Hero.jsx)
```jsx
// Change name
<motion.h1 className="...">Your Name</motion.h1>

// Change title
<motion.p className="...">Your Title</motion.p>

// Update tagline
<motion.p className="...">Your Tagline</motion.p>
```

#### About Section (src/sections/About.jsx)
```jsx
// Edit professional description
// Update education timeline
// Modify career focus areas
```

#### Skills Section (src/sections/Skills.jsx)
```jsx
// Update skill categories
// Add/remove skills
// Modify skill descriptions
```

#### Projects Section (src/sections/Projects.jsx)
```jsx
// Update project information
// Add project images
// Update live links and GitHub URLs
```

#### Contact Section (src/sections/Contact.jsx)
```jsx
// Update contact links
// Modify email address
// Update social media URLs
```

### Changing Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',     // Dark background
      secondary: '#1e293b',   // Lighter background
      accent: '#3b82f6',      // Main accent color
      'accent-light': '#60a5fa', // Light accent
      'accent-dark': '#1e40af',  // Dark accent
    },
  },
},
```

### Adding New Sections

1. Create new file in `src/sections/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add scroll section in App:
```jsx
<div id="newsection">
  <NewSection />
</div>
```
4. Add navigation link in `src/components/Navbar.jsx`

### Updating Profile Image

In `src/sections/Hero.jsx`, replace the placeholder:
```jsx
<img
  src="path/to/your/image.jpg"
  alt="Ram Babu"
  className="w-full h-full object-cover"
/>
```

## 📊 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation component
│   │   ├── Button.jsx           # Reusable button
│   │   └── SectionTitle.jsx     # Section headers
│   ├── sections/
│   │   ├── Hero.jsx             # Landing section
│   │   ├── About.jsx            # About me
│   │   ├── Skills.jsx           # Skills showcase
│   │   ├── Projects.jsx         # Portfolio projects
│   │   ├── Experience.jsx       # Achievements
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
├── README.md                   # Main documentation
├── SETUP.md                    # This file
└── setup.bat                   # Windows setup script
```

## 🔧 Troubleshooting

### Issue: "npm not found"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org)

### Issue: Port 3000 already in use
**Solution**: 
- Option 1: Stop the process using port 3000
- Option 2: Use different port: `npm run dev -- --port 3001`

### Issue: Styling not applied
**Solution**: 
- Restart dev server: `npm run dev`
- Clear browser cache: Ctrl+Shift+Delete

### Issue: Build fails
**Solution**:
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build`

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Push code to GitHub
2. Go to Settings > Pages
3. Select 'main' branch and '/root'
4. Save

## 📝 Adding Resume Download

1. Place resume PDF in `public/` folder (e.g., `resume.pdf`)
2. Update download link in `src/components/Navbar.jsx`:
```jsx
href="./resume.pdf"
```

## 🎯 Performance Tips

1. **Optimize Images**
   - Use compressed images
   - Use WebP format when possible
   - Implement lazy loading

2. **Code Splitting**
   - Vite handles this automatically
   - Large components can be lazy loaded

3. **Lighthouse Audit**
   - Run audit: DevTools > Lighthouse
   - Target score: 90+

## 📱 Responsive Testing

Test on different devices:
- Mobile: Use Chrome DevTools (Ctrl+Shift+M)
- Tablet: Set width to 768px
- Desktop: Full width

## 🚨 Common Errors

### "Cannot find module"
- Run: `npm install`

### "Port already in use"
- Use different port or stop existing process

### "CSS not loading"
- Run: `npm run dev`
- Clear cache and refresh

## 📞 Support Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/)

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add profile image
- [ ] Update project descriptions and links
- [ ] Check all external links work
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Add resume PDF
- [ ] Update meta descriptions
- [ ] Test form submission

## 🎉 You're All Set!

Your professional portfolio is ready to impress recruiters and clients. 

**Next Steps**:
1. Customize content with your information
2. Add your profile image
3. Update project links
4. Test locally: `npm run dev`
5. Build: `npm run build`
6. Deploy to your preferred platform

Good luck with your career! 🚀

