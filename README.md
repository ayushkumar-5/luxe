
# 🌸 Luxe — Classy Perfume E-Commerce Website

A premium **perfume e-commerce platform** designed to feel luxurious, modern, and immersive.  
Built with **React / Next.js + Tailwind CSS**, featuring a **Spline 3D animated hero** section, elegant product pages, and smooth shopping flow.

## 🌐 Live Demo

👉 [Visit the site](https://luxe-livid.vercel.app/)  
<img width="1440" height="742" alt="image" src="https://github.com/user-attachments/assets/9dd8d8f2-c250-48e1-8b19-3149040b4fb1" />

---
---

## ✨ Features

- 🎥 **Spline 3D Hero Animation**  
  Immersive fullscreen 3D animation powered by [Spline](https://spline.design/).  

- 🛍️ **Perfume Marketplace**  
  - Browse by scent family: Floral, Woody, Oriental, Citrus.  
  - Product detail pages with scent notes, reviews, and 3D previews.  
  - Related products carousel (“Complete the Ritual”).  

- 💳 **Cart & Checkout**  
  - Add to cart with smooth animations.  
  - Stripe integration for secure payments.  
  - One-page minimal checkout.  

- 👤 **User Accounts**  
  - Wishlist, order history, subscriptions.  
  - Firebase Authentication (Email + OAuth).  

- 📖 **Fragrance Journal**  
  Editorial blog for guides, gifting tips, and brand stories.  

- 📱 **Responsive & Accessible**  
  Mobile-first design, keyboard-friendly, and optimized performance.  

---

## 🎨 Design Guidelines

- **Colors**  
  - Background: `#0f0b10` (Midnight Black)  
  - Accent: `#b88b3b` (Gold)  
  - Text: `#f5f0ea` (Cream)  
  - Deep Plum Highlights  

- **Typography**  
  - Headings: *Playfair Display / Didot* (serif, classy)  
  - Body/UI: *Inter / Helvetica Neue* (clean sans-serif)  

---

## 🚀 Tech Stack

- **Frontend:** React / Next.js, Tailwind CSS  
- **3D Animations:** [Spline](https://spline.design/)  
- **Backend:** Node.js + Next.js API routes  
- **Database / CMS:** Firebase Firestore or Sanity CMS  
- **Auth:** Firebase Authentication  
- **Payments:** Stripe  
- **Hosting:** Vercel / Netlify  

---

## 🔧 Installation & Setup

```bash
# Clone repo
git clone https://github.com/ayushkumar-5/luxe.git

# Enter directory
cd aurelia-luxe

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
````

---

## 🎥 Spline Hero Integration

The homepage hero includes a Spline animation embed:

```html
<section id="hero" style="height:100vh;position:relative;overflow:hidden;">
  <iframe 
    src="https://my.spline.design/aurelialuxeanimation-DFkLHu6Glhm1XCmGfEIjIzoL/" 
    frameborder="0" 
    width="100%" 
    height="100%" 
    style="border:0;"
    allow="fullscreen; vr; autoplay">
  </iframe>
</section>
```

---

## 📌 Roadmap

* [ ] Add product quiz (*Find Your Signature Scent*).
* [ ] Enable subscriptions & refill plans.
* [ ] Implement wishlist & loyalty rewards.
* [ ] Add AI-powered scent recommendation engine.

---



## 📜 License

This project is licensed under the **MIT License** — feel free to use and adapt.

```

---

Do you want me to also create a **starter `index.jsx` file with Tailwind + your Spline embed already coded**, so you can just run `npm run dev` and see it live?
```
