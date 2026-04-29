# Rishi Car Service — Website

A modern, conversion-focused single-page business website built with:
- **React** (JavaScript, no TypeScript)
- **Vite**
- **Tailwind CSS**
- **Framer Motion**

---

## 🚀 Local Development

### Prerequisites
- Node.js v18+ (https://nodejs.org)
- npm or yarn

### Steps

```bash
# 1. Navigate to project folder
cd rishi-car-service

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📦 Production Build

```bash
npm run build
# Output in /dist folder

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✅

---

## 🌐 Deploy to Netlify

### Option A: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### Option B: Netlify Dashboard
1. Push to GitHub
2. Go to https://app.netlify.com/start
3. Connect your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site** ✅

---

## 📁 Project Structure

```
rishi-car-service/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── siteContent.js      ← All text, contact info, services
    ├── context/
    │   └── ToastContext.jsx
    ├── hooks/
    │   └── animations.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ServiceCard.jsx
    │   ├── FAQAccordion.jsx
    │   ├── ContactForm.jsx
    │   ├── CTA.jsx
    │   ├── Footer.jsx
    │   └── FloatingWhatsApp.jsx
    └── sections/
        ├── Hero.jsx
        ├── Services.jsx
        ├── About.jsx
        └── Testimonials.jsx
```

---

## ✏️ Customization

All content lives in `src/data/siteContent.js`:
- Update `brand` for phone, email, address
- Update `services` to add/remove service cards
- Update `testimonials` to add real reviews
- Update `faqs` to match your common questions

---

## 📞 Contact Details In Site
- **Phone:** 7978435746
- **WhatsApp:** +91 7978435746
- **Email:** rishicarservice@gmail.com
- **Location:** Near Odi Art Museum Centre, Badakul, Odisha
