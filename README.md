# 🌏 Devendra Sharma Tour & Travels

A modern, responsive website for **Devendra Sharma Tour & Travels** — a domestic tour & travel business based in Meerut, Uttar Pradesh.

Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 📸 Pages

| Page | Description |
|------|-------------|
| `/` | Home — Hero, stats, featured tours, testimonials |
| `/about` | About Us — Story, values, founder profile |
| `/tours` | Tour Packages — All 6 domestic packages |
| `/contact` | Contact — Enquiry form + contact info |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
devendra-travels/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── about/page.tsx      # About page
│   ├── tours/page.tsx      # Tours page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx          # Responsive navigation
│   ├── Hero.tsx            # Hero section
│   ├── Stats.tsx           # Stats bar
│   ├── FeaturedTours.tsx   # Featured tour cards
│   ├── WhyChooseUs.tsx     # Features section
│   ├── Testimonials.tsx    # Customer reviews
│   ├── CallToAction.tsx    # CTA banner
│   └── Footer.tsx          # Site footer
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## ⬆️ How to Upload to GitHub

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** (green button)
3. Name it `devendra-travels` (or anything you like)
4. Keep it **Public** or **Private** — your choice
5. **Do NOT** initialise with README (we already have one)
6. Click **Create repository**

### Step 2 — Push code from your computer

Open terminal/command prompt in the project folder and run:

```bash
# Initialise git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Devendra Sharma Tour & Travels website"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/devendra-travels.git

# Push to GitHub
git push -u origin main
```

### Step 3 — Deploy for free on Vercel (optional)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Select your `devendra-travels` repo
4. Click **Deploy** — done! 🎉

Your website will be live at `https://devendra-travels.vercel.app`

---

## ✏️ Customisation

- **Phone number**: Search for `+91 98765 43210` and replace with real number
- **Email**: Search for `info@devendratravels.com` and replace
- **Address**: Update in `Footer.tsx` and `contact/page.tsx`
- **Tour prices**: Edit the `tours` array in `app/tours/page.tsx`
- **Google Maps**: Replace the map placeholder in `contact/page.tsx` with an embedded iframe

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Google Fonts](https://fonts.google.com/) — Playfair Display + DM Sans
