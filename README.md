# AURA Design Studio | Premium Luxury Interior Design Website

A state-of-the-art, premium, and fully responsive luxury interior design landing page engineered for **AURA Design Studio**. This landing page showcases high-end spatial architectures, bespoke styling, and advanced web animations. 

Designed for mobile-first views and scaling seamlessly to extra-wide desktop screens, the project merges geometric precision with modern organic luxury.

---

## ✨ Design Aesthetics & Philosophy

- **Color Palette:** A cohesive, premium palette of Pure White, Deep Charcoal (`#111827`), Onyx Black, Accent Gold Gradients (`#C8A96A` to `#9A7B3E`), and Warm Soft Beige (`#FCFAF6`).
- **Typography:** Sleek geometric pairings featuring **Plus Jakarta Sans** (for sharp, luxury headings) and **Outfit** (for light, crisp body texts).
- **Glassmorphism:** Subtle translucent cards, navigation bars, and experience badges with backdrop-blur effects and thin, gold-tinted borders.
- **Micro-interactions:** Smooth scroll-reveal triggers, parallax counters, custom indicator loops, and hover-state lift-and-glow card behaviors.
- **Handcrafted Vector Decors:** Inline SVGs including hanging gold pendant lamps, abstract palm leaf frameworks, and a detailed vector blueprint schematic of a villa cantilever structure.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/) (Client-side rendering, HMR hot module reloading)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via the `@tailwindcss/vite` compiler plugin
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Fluid entry, exit, slide, and layout transitions)
- **Icons:** [Lucide React](https://lucide.dev/) (Clean, modern outlines)

---

## ⚙️ Key Architectural Sections

1. **Scroll Progress Indicator:** A micro-interactive custom gold progress bar sitting at the top of the viewport.
2. **Branded Header Navigation:** Sticky glassmorphic bar with slide-out drawer menu for mobile and immediate Consultation call-to-actions.
3. **Hero Slideshow:** Cinematic fade-slideshow background with text animations and dynamic touch control buttons.
4. **About The Curators:** Introducing the design team with their respective bios and a floating "5+ Years Experience" badge.
5. **Services Grid:** 8 dedicated cards detailing custom design categories (living room, modular kitchen, bespoke bedroom, etc.) with lift hover actions.
6. **Masonry Portfolio Gallery:** Interactive category-filtering structure with detailed lightbox modal popup to browse photos, specs, and designer logs.
7. **Pillars of Excellence:** A responsive grid showing the studio's 6 core value principles with checklist hover checks.
8. **Alternating Journey Timeline:** An interactive vertical timeline tracing the design phases from consultation through to key delivery.
9. **Swipe Testimonials Carousel:** Client review slider featuring drag/swipe gesture support, star ratings, and clients' details.
10. **Parallax Counter Stats:** Scrolling stats board using dynamic counting scripts that count up when scrolled into view.
11. **Accordion FAQ:** Luxury collapsible lists using height animation loops.
12. **Bespoke Contact Board:** Includes project budget range sliders, custom dropdown selections, call/WhatsApp triggers, and a coordinate-based slate map element.

---

## 🚀 Performance & SEO Optimizations

- **Image Compression & Sizing:** Unsplash CDN URLs are re-engineered to support `auto=format` (serving AVIF/WebP depending on user-agent capabilities) and compressed to `q=40` (and `q=60` for detailed lightbox expand views) to dramatically reduce package weights (saving more than 70% in image payloads).
- **Asset Preloading:** The Largest Contentful Paint (LCP) image is explicitly preloaded in the HTML head with `fetchpriority="high"` to eliminate visual pop-in.
- **Accessibility Compliance (WCAG AA):** Modified standard Tailwind gray color tokens (`gray-500` replaced with `#59616D`) to satisfy a **5.1:1 contrast ratio** against light backdrops. All interactive elements have descriptive headers and labels.
- **Minification:** Vite/Rolldown minifies and compiles scripts into highly structured modules.

---

## 📂 Project Structure

```bash
├── public/
│   ├── favicon.svg        # Modern vector favicon
│   ├── icons.svg          # Custom SVG sprite map
│   └── robots.txt         # Standard crawler policy configuration
├── src/
│   ├── assets/            # Static image assets
│   ├── components/        # Interactive React modules
│   │   ├── About.jsx      # Designer & developer profiles
│   │   ├── Contact.jsx    # Consultation form and map block
│   │   ├── FAQ.jsx        # Collapsible accordions
│   │   ├── Footer.jsx     # Social links & directory links
│   │   ├── Header.jsx     # Drawer-based sticky nav
│   │   ├── Hero.jsx       # Slideshow & call-to-actions
│   │   ├── Portfolio.jsx  # Masonry grid & lightbox modal
│   │   ├── Process.jsx    # Vertical process timeline
│   │   ├── ScrollProgress.jsx # Gold progress timeline path
│   │   ├── Services.jsx   # 8 services layout
│   │   ├── StatsSection.jsx # Parallax numeric counter
│   │   ├── Testimonials.jsx # Slide reviews
│   │   └── WhyChooseUs.jsx# 6 value cards
│   ├── App.css            # Base styles
│   ├── App.jsx            # Main app assembly
│   ├── index.css          # Tailwind directives, fonts, and luxury variables
│   └── main.jsx           # App entry point
├── index.html             # Document wrapper (SEO meta and preloader config)
├── package.json           # Scripts and dependencies
└── vite.config.js         # Tailwind v4 plugin compilation config
```

---

## 📥 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the project dependencies:
```bash
# Clone the repository
git clone git@github.com:OrbitDevStudio-c/interior_design.git

# Navigate into the project directory
cd interior_design

# Install dependencies
npm install
```

### 3. Development Server
Run the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the site.

### 4. Build for Production
Compile optimized and minified assets for production hosting:
```bash
npm run build
```
Vite will output the static assets to the `dist/` directory, ready to be deployed.

---

## ✒️ Credits & Authors

- **Vansh** — Lead Luxury Interior Designer
- **Ridham** — Lead Frontend Software Engineer

---

## 📄 License
This project is proprietary and built for premium commercial staging. All rights reserved.# interirar-demo2  
