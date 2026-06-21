# 🔐 Sabahat Jahangir - Traditional Portfolio


A stunning, cinematic, fully interactive cybersecurity-focused portfolio built with modern web technologies. This portfolio showcases expertise in cybersecurity, digital forensics, and full-stack development.

---

## ✨ Features

### 🎨 Design & UX
- **Dark Cyberpunk Theme** - Deep black with neon cyan and purple accents
- **Glassmorphism & Animations** - Smooth Framer Motion animations throughout
- **Responsive Design** - Mobile-first, works seamlessly on all devices
- **Loading Animation** - "Initializing Secure System" startup screen
- **Custom Cursor** - Cybersecurity-themed cursor effects
- **3D Effects** - Parallax scrolling, depth layering, perspective transforms

### 📊 Sections
1. **Hero Section** - Animated introduction with gradient text
2. **About Me** - Professional background and cybersecurity focus
3. **Career Goals** - "Securing Pakistan's Digital Future" vision
4. **Projects Showcase** - 6 featured projects with 3 live + 3 planned
5. **Skills Arsenal** - Organized by category (Programming, Systems, Security, Full Stack)
6. **Timeline** - Journey from 2022-2026 with major milestones
7. **Certifications** - Google AI Essentials, Ubuntu Linux, TA Certification
8. **Lab Workspace** - Active penetration testing and security labs
9. **Contact** - Email, LinkedIn, GitHub links with copy-to-clipboard
10. **Footer** - Complete navigation and social links

### 🎯 Key Projects Included
- ✅ AI-Based Accident Detection System (CNN + LSTM)
- ✅ Smart Trash Truck Routing System (Algorithms)
- ✅ Cybersecurity Awareness Game (Interactive Learning)
- 🔜 Digital Forensics Toolkit
- 🔜 OSINT Investigation Platform
- 🔜 Network Intrusion Detection System

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Next.js 14** - Full-stack framework
- **Framer Motion** - Advanced animations
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

### Advanced Features
- **Three.js** - 3D graphics (optional enhancement)
- **GSAP** - Timeline animations
- **TypeScript** - Type safety (ready)

---

## 📦 Installation & Setup

### 1. Clone & Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
portfolio/
├── pages/
│   ├── _app.js          # App wrapper
│   ├── _document.js     # Document setup
│   └── index.js         # Main portfolio page
├── components/
│   ├── LoadingScreen.jsx
│   ├── NavBar.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── CareerGoalSection.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   ├── TimelineSection.jsx
│   ├── CertificationsSection.jsx
│   ├── LabSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── styles/
│   └── globals.css
├── public/
│   └── (images, fonts)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Primary Accent | Cyan | #00ffcc |
| Secondary Accent | Purple | #a855f7 |
| Background | Black | #000000 |
| Text Primary | White | #ffffff |
| Text Secondary | Cyan (80%) | rgba(0,255,200,0.8) |

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run export
# Upload 'out' folder to GitHub Pages
```

### Netlify
```bash
npm run build
# Drag & drop 'out' folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 🔧 Customization

### Change Personal Info
Edit the following in `pages/index.js`:
- Name, title, bio
- Email and social links
- Projects and skills
- Timeline events

### Modify Colors
Edit `tailwind.config.js`:
```js
colors: {
  cyan: { 400: '#00ffcc' },
  purple: { 500: '#a855f7' }
}
```

### Add New Sections
1. Create component file
2. Import in main page
3. Add smooth scroll animation with Framer Motion
4. Update navigation menu

---

## 📈 Performance Optimization

- ✅ Image optimization with Next.js
- ✅ Code splitting & lazy loading
- ✅ CSS-in-JS with Tailwind
- ✅ Smooth animations without jank
- ✅ Mobile-first responsive design
- ✅ SEO optimized structure

### Performance Tips
1. Use `next/Image` for images
2. Implement code splitting with dynamic imports
3. Optimize animations (use GPU acceleration)
4. Lazy load below-fold sections
5. Minimize bundle size

---

## 🌐 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔒 Security Features

- No external tracking or analytics by default
- All data stays client-side
- No third-party API calls (except GitHub)
- Content Security Policy ready
- HTTPS recommended for production

---

## 🤝 Contributing & Feedback

This is a personal portfolio. For suggestions or improvements:
1. Test thoroughly on different devices
2. Check performance metrics
3. Optimize further as needed
4. Keep design cohesive and purposeful

---

## 📝 License

© 2026 Sabahat Jahangir. All rights reserved.

---


## 📞 Contact

**Email:** sabahat.jahangir.tech@gmail.com  
**LinkedIn:** [Sabahat Jahangir](https://linkedin.com/in/sabahat-jahangir)  
**Location:** Pakistan  
**Role:** BS Computer Science Student @ FAST NUCES  
**Graduating:** June 2026

---

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- Tailwind CSS for utility styling
- Next.js for amazing framework
- Lucide React for beautiful icons
- All cybersecurity mentors and teachers

---

**"Securing Pakistan's Digital Future"** 🔐✨
