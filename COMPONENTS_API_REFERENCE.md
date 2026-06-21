# 🔧 PORTFOLIO COMPONENTS & API REFERENCE

## Component Breakdown & Customization

---

## 1. LOADING SCREEN
### Purpose
Show cinematic loading animation on initial page load.

### Props
```jsx
<LoadingScreen isVisible={loading} />
```

### Customization
```jsx
// Change loading duration (currently 3000ms)
setTimeout(() => setLoading(false), 3000);

// Change text
<h2>YOUR TEXT HERE</h2>

// Change animation colors
border-cyan-500 → border-your-color
```

### What it displays
- Rotating spinner animation
- Grid background pattern
- "INITIALIZING SECURE SYSTEM" text
- Progress bar animation

---

## 2. NAVIGATION BAR
### Purpose
Fixed header with logo and navigation links.

### Features
- Sticky on scroll
- Blur effect on scroll
- Hover effects
- Mobile responsive

### Customization
```jsx
// Change logo text
<div>SJ.CYBER</div> → <div>YOUR.BRAND</div>

// Change nav links
{['About', 'Projects', 'Skills', 'Timeline', 'Contact'].map(...)}

// Add new link
'YourNewLink' → Add to array
```

### Color scheme
- Text: cyan-300 (normal), cyan-400 (hover)
- Border: cyan-500/20
- Background: transparent → black/80 on scroll

---

## 3. HERO SECTION
### Purpose
First impression - animated introduction.

### Key Elements
- Animated gradient text
- Subtitle animation
- Call-to-action buttons
- Scroll indicator

### Customization
```jsx
// Change main text
"Sabahat Jahangir" → "Your Name"
"Cybersecurity Enthusiast | Future Digital Forensics Officer" → Your title

// Change button links
href="#projects" → Your anchor
href="#contact" → Your anchor

// Add background effects
// Currently: 2 animated blur circles
// Modify colors or add more
```

### Animations
- Fade in + slide (title)
- Staggered text reveal
- Floating scroll indicator
- Particle background effects

---

## 4. ABOUT SECTION
### Purpose
Tell your story and professional background.

### Left Column
- Bio paragraphs
- Fade in animations
- Responsive layout

### Right Column
- Cybersecurity focus box
- 4 featured areas with icons
- Glassmorphic design

### Customization
```jsx
// Change about text
"I'm a cybersecurity enthusiast..." → Your bio

// Change focus areas
{
  icon: Shield,
  label: 'Ethical Hacking',
  desc: 'Your description'
}

// Change colors
from-cyan-500/10 → your color
border-cyan-500/30 → your color
```

---

## 5. CAREER GOALS SECTION
### Purpose
Highlight major career aspirations.

### Key Elements
- Animated gradient title
- "Securing Pakistan's Digital Future"
- 3 goal cards
- Motivational messaging

### Customization
```jsx
// Change main heading
"Securing Pakistan's Digital Future" → Your vision

// Modify goal cards
{ 
  title: 'Government Leadership',
  desc: 'Join FIA/Intelligence agencies'
}

// Change colors
from-purple-600 → your color
to-cyan-600 → your color
```

---

## 6. PROJECTS SECTION
### Purpose
Showcase your projects with detailed cards.

### Project Card Structure
```jsx
{
  title: 'AI-Based Accident Detection System',
  description: 'Real-time accident detection...',
  icon: <Cpu />, // Lucide icon
  features: [
    'CNN + LSTM neural networks',
    'Real-time CCTV video analysis',
    // ...
  ],
  tech: ['Python', 'TensorFlow', 'OpenCV'],
  status: 'COMPLETED' // or 'IN DEVELOPMENT' or 'PLANNED'
}
```

### Features
- Hover tilt effect
- Glowing border on hover
- Feature list with dots
- Tech tags with hover
- Status badge

### Customization
```jsx
// Add new project
projects.push({
  title: 'Your Project',
  description: 'Your description',
  icon: <YourIcon />,
  features: ['Feature 1', 'Feature 2'],
  tech: ['Tech1', 'Tech2'],
  status: 'COMPLETED'
});

// Change colors per status
COMPLETED → green border
IN DEVELOPMENT → yellow border
PLANNED → blue border
```

---

## 7. SKILLS SECTION
### Purpose
Display technical skills organized by category.

### Skill Categories
```jsx
{
  title: 'Programming',
  skills: ['Python', 'C/C++', 'SQL'],
  color: 'cyan'
}
```

### Features
- 4 category cards
- Skill badges with hover effects
- Color coding
- Icon support

### Customization
```jsx
// Add new category
{
  title: 'Your Category',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  color: 'purple' // or 'cyan'
}

// Add skills to existing category
// Find the category and push to skills array
```

### Color options
- 'cyan' → blue-teal
- 'purple' → magenta-violet
- Can add custom colors

---

## 8. TIMELINE SECTION
### Purpose
Show career progression chronologically.

### Event Structure
```jsx
{
  year: '2022',
  title: 'BS Computer Science',
  org: 'FAST NUCES',
  desc: 'Started journey in computer science...'
}
```

### Features
- Vertical animated timeline
- Alternating left/right layout
- Animated center dots
- Pulsing glow effects
- Hover transformations

### Customization
```jsx
// Add new event
events.push({
  year: '2025',
  title: 'Your Event',
  org: 'Organization',
  desc: 'What happened'
});

// Change colors
text-cyan-400 → your color
border-cyan-500/30 → your color
```

---

## 9. CERTIFICATIONS SECTION
### Purpose
Display earned certifications and credentials.

### Certification Card
```jsx
{
  name: 'Google AI Essentials',
  issuer: 'Google',
  date: '2023',
  icon: Brain // Lucide icon
}
```

### Features
- 3-column responsive grid
- Rotating icon animations
- Hover lift effect
- Date display

### Customization
```jsx
// Add new certificate
certs.push({
  name: 'Your Cert',
  issuer: 'Issuer',
  date: '2025',
  icon: YourIcon
});

// Change animation speed
animate={{ rotate: [0, 5, -5, 0] }}
transition={{ duration: 4 }} // Change 4 to your duration
```

---

## 10. LAB SECTION (Hacker Workspace)
### Purpose
Display active learning labs and security tools.

### Lab Item Structure
```jsx
{
  name: 'Penetration Testing Lab',
  status: 'Active',
  tech: 'Kali Linux, Burp Suite'
}
```

### Features
- Terminal-style design
- Status indicators (Active/In Progress)
- Technology stack display
- Blinking status animation

### Customization
```jsx
// Add new lab
labs.push({
  name: 'Your Lab',
  status: 'Active', // or 'In Progress'
  tech: 'Tools and technologies'
});

// Change status colors
Active → bg-green-500/30
In Progress → bg-yellow-500/30
```

---

## 11. CONTACT SECTION
### Purpose
Provide contact information and social links.

### Features
- Email with copy-to-clipboard
- LinkedIn link
- Location display
- Hover animations

### Customization
```jsx
// Change email
'sabahatjahangir832@gmail.com' → your email

// Change LinkedIn
'linkedin.com/in/sabahat-jahangir' → your profile

// Change location
'Pakistan' → your location

// Add more contact methods
// Duplicate contact box structure
```

### Copy-to-clipboard
```jsx
const copyEmail = () => {
  navigator.clipboard.writeText('your@email.com');
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};
```

---

## 12. FOOTER
### Purpose
Bottom navigation and copyright information.

### Sections
- Navigation links
- Focus areas
- Current role
- Social media links
- Copyright

### Customization
```jsx
// Update copyright
© 2026 Your Name → © 2025 Your Name

// Change navigation links
{['About', 'Projects']} → add/remove

// Update social links
href="https://linkedin.com/..." → your URL
```

---

## ANIMATION API REFERENCE

### Common Framer Motion Patterns

#### 1. Fade In On Mount
```jsx
motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
```

#### 2. Slide In On Scroll
```jsx
motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: '-100px' }}
```

#### 3. Hover Scale
```jsx
motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
```

#### 4. Continuous Loop
```jsx
motion.div
  animate={{ y: [0, -10, 0], rotate: 360 }}
  transition={{ duration: 3, repeat: Infinity }}
```

#### 5. Stagger Children
```jsx
motion.div
  initial="initial"
  animate="animate"
  variants={{
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }}
>
  {items.map((item, i) => (
    motion.div
      key={i}
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 }
      }}
      transition={{ delay: i * 0.1 }}
    />
  ))}
</motion.div>
```

---

## TAILWIND CSS QUICK REFERENCE

### Responsive Classes
```jsx
// Mobile first
className="text-sm md:text-lg lg:text-2xl"

// Column grids
className="grid md:grid-cols-2 lg:grid-cols-3"

// Visibility
className="hidden md:flex lg:block"
```

### Color Classes
```jsx
// Text colors
className="text-cyan-400 text-purple-500"

// Background colors
className="bg-cyan-500/20 bg-purple-500/10"

// Border colors
className="border-cyan-500/30"

// Opacity scale
/5 /10 /20 /30 /40 /50 /60 /70 /80 /90
```

### Spacing
```jsx
// Padding
className="p-4 px-6 py-8"

// Margin
className="m-4 mx-auto mb-6"

// Gap
className="gap-3 gap-4"
```

### Typography
```jsx
// Size
className="text-xs text-sm text-base text-lg text-xl text-2xl"

// Weight
className="font-light font-normal font-bold font-black"

// Family
className="font-mono font-sans"
```

---

## ICON REFERENCE (Lucide React)

### Imported Icons
```jsx
import {
  ChevronDown,    // Chevron down
  Github,         // GitHub logo
  Linkedin,       // LinkedIn logo
  Mail,           // Email icon
  Shield,         // Shield icon
  Lock,           // Lock icon
  Terminal,       // Terminal icon
  Zap,            // Lightning icon
  Code,           // Code icon
  Brain,          // Brain icon
  Cpu,            // CPU chip icon
  Eye             // Eye icon
} from 'lucide-react';
```

### Usage
```jsx
<Shield className="w-8 h-8 text-cyan-400" />
<Code className="w-5 h-5 text-purple-400" />
```

---

## STATE MANAGEMENT

### Loading State
```jsx
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 3000);
  return () => clearTimeout(timer);
}, []);
```

### Copy to Clipboard
```jsx
const [copied, setCopied] = useState(false);

const copyEmail = () => {
  navigator.clipboard.writeText('email@example.com');
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};
```

### Scroll Detection
```jsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Mouse Position
```jsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
```

---

## PERFORMANCE OPTIMIZATION CHECKLIST

### Images
- [ ] Use Next.js Image component
- [ ] Optimize image size
- [ ] Use WebP format
- [ ] Set width/height
- [ ] Add quality prop

### Code
- [ ] Lazy load components
- [ ] Code splitting
- [ ] Tree-shake unused imports
- [ ] Minimize bundle size

### Animations
- [ ] Use transform + opacity (GPU accelerated)
- [ ] Avoid layout-triggering properties
- [ ] Reduce animation complexity
- [ ] Use will-change sparingly

### Network
- [ ] Enable compression (gzip)
- [ ] Use CDN
- [ ] Cache static assets
- [ ] Minimize HTTP requests

---

## TROUBLESHOOTING QUICK FIXES

### Issue: Animations not smooth
**Fix:**
```jsx
// Use GPU-accelerated properties
animate={{ y: -10, opacity: 0.5 }}

// Not:
animate={{ top: '-10px' }}
```

### Issue: Styles not applying
**Fix:**
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`
- Check Tailwind content paths

### Issue: Mobile layout broken
**Fix:**
- Add responsive classes: `md:grid-cols-2`
- Test in Chrome DevTools mobile mode
- Check font sizes

### Issue: Component not rendering
**Fix:**
```jsx
// Check import
import Portfolio from '@/components/Portfolio';

// Check export
export default Portfolio;

// Check JSX syntax
<Component /> not <component>
```

---

## ACCESSIBILITY IMPROVEMENTS

### Add to components
```jsx
// Alt text for images
<img alt="Project screenshot" />

// ARIA labels
<button aria-label="Close menu" />

// Semantic HTML
<nav>, <header>, <footer>, <section>

// Keyboard navigation
onKeyDown={handleKeyPress}
```

---

## SEO METADATA

### In layout.jsx
```jsx
export const metadata = {
  title: 'Sabahat Jahangir - Cybersecurity Portfolio',
  description: 'Premium cybersecurity portfolio with projects',
  keywords: 'cybersecurity, developer, portfolio',
  author: 'Sabahat Jahangir',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Sabahat Jahangir - Cybersecurity Portfolio',
    description: 'Explore cybersecurity projects',
    image: '/og-image.png',
    url: 'https://yoursite.com'
  }
};
```

---

## ENVIRONMENT VARIABLES

### Create .env.local
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

### Usage
```jsx
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
```

---

**You now have complete reference docs. Happy coding!** 🚀
