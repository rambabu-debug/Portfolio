# 🎨 Portfolio Customization Guide - Visual Reference

## Quick Navigation

- [Changing Text Content](#changing-text-content)
- [Updating Images](#updating-images)
- [Modifying Colors](#modifying-colors)
- [Adding/Removing Sections](#addingRemoving-sections)
- [Customizing Components](#customizing-components)

---

## 🔤 Changing Text Content

### Hero Section - Top of Page

**File**: `src/sections/Hero.jsx`

```jsx
// FIND THIS:
<motion.h1 className="...">Ram Babu H</motion.h1>

// CHANGE TO:
<motion.h1 className="...">Your Name</motion.h1>
```

```jsx
// FIND THIS:
<motion.p className="...">Backend Engineer & System Design Specialist</motion.p>

// CHANGE TO:
<motion.p className="...">Your Job Title</motion.p>
```

```jsx
// FIND THIS:
<motion.p className="...">Crafting scalable Java-based systems...</motion.p>

// CHANGE TO:
<motion.p className="...">Your professional tagline...</motion.p>
```

### About Section

**File**: `src/sections/About.jsx`

Find the `<p>` tags and update descriptions:

```jsx
<p className="text-slate-300 text-lg leading-relaxed">
  Your background and professional summary here
</p>
```

### Skills Section

**File**: `src/sections/Skills.jsx`

Find the skill categories and update:

```jsx
skills: ['Java', 'Python', 'C'],  // Add/remove skills
```

Or use the config file for easier management:

**File**: `src/config/portfolio.config.js`

```javascript
skills: {
  programming: ['Java', 'Python', 'C'],  // Edit here
  backend: ['Spring', 'Spring Boot', ...],
  // etc
}
```

### Projects Section

**File**: `src/sections/Projects.jsx` or `src/config/portfolio.config.js`

```javascript
{
  title: 'Project Name',
  description: 'Project description',
  tags: ['Tech 1', 'Tech 2'],
  features: ['Feature 1', 'Feature 2'],
  link: 'https://project-url.com',
}
```

### Contact Section

**File**: `src/sections/Contact.jsx`

Update email and social links:

```javascript
const contactMethods = [
  {
    value: 'your-email@gmail.com',  // Change this
    href: 'mailto:your-email@gmail.com',  // Change this
  },
  // ... more methods
]
```

---

## 🖼️ Updating Images

### Profile Picture (Hero Section)

**File**: `src/sections/Hero.jsx`

```jsx
// FIND THIS:
<img
  src="https://via.placeholder.com/400x400?text=Ram+Babu"
  alt="Ram Babu"
/>

// CHANGE TO:
<img
  src="https://your-image-url.jpg"  // OR local path: /images/profile.jpg
  alt="Your Name"
/>
```

### Project Images

**File**: `src/sections/Projects.jsx` or config file

```javascript
{
  image: 'https://via.placeholder.com/400x300?text=Project',
  // CHANGE TO:
  image: 'https://your-project-image.jpg',
}
```

### How to Get Image URLs

1. **Upload to Cloud** (Recommended):
   - Imgur.com (free)
   - Cloudinary.com
   - AWS S3
   - Your own server

2. **Use Local Images**:
   - Create `public/images/` folder
   - Add images there
   - Reference: `/images/filename.jpg`

---

## 🎨 Modifying Colors

### Main Theme Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: '#0f172a',      // Dark background
  secondary: '#1e293b',    // Lighter background
  accent: '#3b82f6',       // Main accent (CHANGE THIS)
  'accent-light': '#60a5fa',   // Light accent
  'accent-dark': '#1e40af',    // Dark accent
}
```

### How to Find Your Brand Color

1. Use [Color Picker](https://htmlcolorcodes.com)
2. Get hex code (e.g., #FF6B6B)
3. Replace the color value above
4. Run `npm run dev` to see changes

### Example Color Schemes

```javascript
// Professional Blue (Current)
accent: '#3b82f6'

// Modern Purple
accent: '#8b5cf6'

// Tech Green
accent: '#10b981'

// Orange Energy
accent: '#f97316'

// Red Alert
accent: '#ef4444'

// Cyan Modern
accent: '#06b6d4'
```

---

## ➕ Adding/Removing Sections

### Add a New Section

1. **Create component**: `src/sections/NewSection.jsx`

```jsx
import React from 'react'
import SectionTitle from '../components/SectionTitle'

export default function NewSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Section Title" />
        {/* Your content here */}
      </div>
    </section>
  )
}
```

2. **Add to App**: `src/App.jsx`

```jsx
import NewSection from './sections/NewSection'

// In JSX:
<div id="newsection">
  <NewSection />
</div>
```

3. **Add to Navbar**: `src/components/Navbar.jsx`

```javascript
const navItems = [
  // ... existing items
  { id: 'newsection', label: 'New Section' },
]
```

### Remove a Section

1. Delete from `src/App.jsx`
2. Remove from `src/components/Navbar.jsx`
3. Delete component file

---

## 🔧 Customizing Components

### Button Component

**File**: `src/components/Button.jsx`

Change button styling:

```jsx
// Primary button (blue)
<Button variant="primary">Click me</Button>

// Secondary button (darker)
<Button variant="secondary">Click me</Button>

// Outline button
<Button variant="outline">Click me</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Card Component

**File**: `src/components/Card.jsx`

```jsx
// With glass effect (default)
<Card>Content</Card>

// Without glass effect
<Card glassEffect={false}>Content</Card>

// Without hover effect
<Card hover={false}>Content</Card>
```

### Badge Component

**File**: `src/components/Badge.jsx`

```jsx
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>

<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

---

## 📐 Layout & Spacing

### Section Padding

All sections use standard padding. Modify in CSS:

**File**: `src/index.css`

```css
/* Find */
section {
  padding: 20px; /* y-axis */
  padding: 4px;  /* x-axis */
}
```

### Container Width

Default max-width: `6xl` (64rem / 1024px)

Change in components:
```jsx
<div className="max-w-6xl mx-auto">  {/* Change 6xl to 4xl, 5xl, 7xl, etc */}
```

---

## 🎬 Animation Customization

### Animation Speed

**File**: `src/index.css`

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Hover Effects

**File**: Components use Framer Motion

```jsx
whileHover={{ scale: 1.05 }}  // Change 1.05 to other values
whileTap={{ scale: 0.95 }}
```

---

## 📱 Responsive Design

### Responsive Classes (Tailwind)

```jsx
// Hide on mobile, show on desktop
<div className="hidden md:block">Desktop only</div>

// Different text size
<h1 className="text-3xl md:text-5xl">Heading</h1>

// Change grid columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔗 External Links

### Update Social Links

**File**: `src/sections/Contact.jsx` or `src/config/portfolio.config.js`

```javascript
social: {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  email: 'your-email@gmail.com',
  leetcode: 'https://leetcode.com/YOUR_USERNAME',
}
```

### Link Format Examples

```
GitHub: https://github.com/username
LinkedIn: https://linkedin.com/in/username
LeetCode: https://leetcode.com/u/username
Email: mailto:email@gmail.com
Website: https://yourwebsite.com
Resume: ./resume.pdf
```

---

## 🎯 Common Customizations

### Add Custom Font

**File**: `index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then in `src/index.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Add Favicon

**File**: `index.html`

```html
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
```

Place favicon in project root.

### Add Analytics

**File**: `index.html`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🚨 Common Issues & Solutions

### Colors not changing?
- Clear browser cache: `Ctrl+Shift+Delete`
- Restart dev server: `npm run dev`

### Changes not appearing?
- Save file: `Ctrl+S`
- Check file path is correct
- Restart dev server

### Mobile looks wrong?
- Check responsive classes: `md:`, `lg:`, etc
- Test in DevTools: `F12` → Ctrl+Shift+M

---

## 📊 File Edit Checklist

Use this to ensure you've updated everything:

- [ ] Name in Hero section
- [ ] Job title
- [ ] Professional tagline
- [ ] Profile image
- [ ] About section description
- [ ] Education details
- [ ] Skills list
- [ ] Project information
- [ ] Project images
- [ ] Social links
- [ ] Email address
- [ ] Contact information
- [ ] Color scheme (optional)
- [ ] Resume link

---

## 💡 Pro Tips

1. **Use Config File**: Update `src/config/portfolio.config.js` for easier management
2. **Test Locally**: Always test changes with `npm run dev`
3. **Image Compression**: Use TinyPNG or similar before uploading
4. **Version Control**: Use Git to track changes
5. **Browser DevTools**: Use F12 to inspect and test changes

---

## 🎓 Useful Commands

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production locally
```

---

## ✅ You're Ready to Customize!

Follow this guide to make your portfolio uniquely yours. Good luck! 🚀

For more details, check `SETUP.md` and component files.

