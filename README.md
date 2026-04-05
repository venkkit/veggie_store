# 🌿 VeggieStore — Local Vegetables Delivery App

A **complete frontend demo** of a local vegetables e-commerce app for India.  
No server needed — opens directly in a browser.

---

## 🚀 Quick Start

```bash
# Option 1: Open directly (simplest)
open frontend/index.html

# Option 2: Serve locally (recommended — avoids any CORS issues)
npx live-server frontend/

# Option 3: Python simple server
cd frontend && python3 -m http.server 3000
# Then open: http://localhost:3000
```

---

## 🔑 Demo Credentials

| Role | Login |
|------|-------|
| **Customer** | Any 10-digit phone → OTP: **123456** |
| **Admin** | Username: **admin** · Password: **admin123** |

---

## 📁 Project Structure

```
frontend/
├── index.html          ← Customer login (OTP)
├── home.html           ← Product listing, search, filter
├── cart.html           ← Cart management
├── checkout.html       ← Address, slot, payment, WhatsApp
├── orders.html         ← Order history + status tracker
│
├── admin/
│   ├── login.html      ← Admin login
│   ├── dashboard.html  ← Analytics + stats
│   ├── products.html   ← Product CRUD
│   ├── orders.html     ← Order management
│   └── customers.html  ← Customer management
│
├── css/
│   └── styles.css      ← Full design system (green theme)
└── js/
    └── store.js        ← Data layer (localStorage)

docs/
├── PRD.md              ← Product Requirements
├── USER_FLOW.md        ← User journey diagrams
└── wireframe.md        ← Screen wireframes
```

---

## ✨ Features

### Customer App
- 📱 Phone OTP login (simulated)
- 🥦 16 seed vegetables with search & category filter
- 🛒 Cart with quantity controls
- 📍 Checkout with address, delivery slot, payment method
- 📲 WhatsApp order confirmation
- 📦 Order tracking (Pending → Packed → Out for Delivery → Delivered)

### Admin Panel
- 📊 Dashboard with stats & most-ordered chart
- 🥦 Product CRUD (add, edit, delete, toggle availability)
- 📦 Order management with status updater + detail modal
- 👥 Customer list with per-customer order history

---

## 🔌 Upgrading to Real Backend

The data layer is in `frontend/js/store.js`.  
Each function is a clean wrapper — swap `localStorage` calls with `fetch()` calls:

```js
// Current (localStorage)
getProducts() { return JSON.parse(localStorage.getItem('vs_products')); }

// Replace with (Node.js API)
async getProducts() { return await fetch('/api/products').then(r => r.json()); }
```

### Recommended Backend Stack
- **Node.js + Express** for REST API
- **MongoDB Atlas** (free tier) for database
- **Twilio** or **Firebase Auth** for real OTP
- **Render** or **Railway** for free hosting

---

## 📱 Responsive

- **Mobile**: Bottom navigation, 2-column product grid
- **Tablet**: 3-column grid, top navigation
- **Desktop**: 4-column grid, admin sidebar

---

## 🧪 Sample Data Included

| Vegetable | Price |
|-----------|-------|
| Tomato 🍅 | ₹20/kg |
| Potato 🥔 | ₹25/kg |
| Onion 🧅  | ₹30/kg |
| Spinach 🌿| ₹10/bunch |
| + 12 more | — |

---

*Built for local businesses in India · Currency: ₹ · Delivery: 2 KM radius*