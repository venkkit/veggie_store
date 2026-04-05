# 🌿 VeggieStore — Local Vegetables Delivery App

A **full-stack ready** local vegetable e-commerce app for India.  
Frontend-only demo (localStorage) with a Node.js/Express backend ready to serve it.

---

## 📁 Project Structure

```
veggie store/
├── package.json            ← Root shortcuts (npm start / npm run dev)
├── .gitignore
├── README.md
│
├── frontend/               ← Static HTML/CSS/JS app
│   ├── index.html          ← Customer login (OTP)
│   ├── home.html           ← Product listing, search, filter
│   ├── cart.html           ← Cart management
│   ├── checkout.html       ← Address, slot, payment, WhatsApp
│   ├── orders.html         ← Order history + status tracker
│   ├── css/
│   │   └── styles.css      ← Full design system (green theme)
│   ├── js/
│   │   └── store.js        ← Data layer (localStorage)
│   └── admin/
│       ├── login.html      ← Admin login
│       ├── dashboard.html  ← Analytics + stats
│       ├── products.html   ← Product CRUD
│       ├── orders.html     ← Order management
│       └── customers.html  ← Customer management
│
├── backend/                ← Node.js + Express server
│   ├── server.js           ← Serves frontend/ as static files
│   └── package.json
│
└── docs/
    ├── PRD.md
    ├── USER_FLOW.md
    └── wireframe.md
```

---

## 🚀 Running the App

### Option 1 — Node.js server (recommended for deployment)

```bash
# 1. Install backend dependencies
cd backend && npm install && cd ..

# 2. Start the server
npm start
# → http://localhost:3000

# Or for development with auto-reload:
npm run dev
```

### Option 2 — Quick preview (no install)

```bash
npx live-server frontend/ --port=3000
# → http://localhost:3000
```

---

## 🔑 Demo Credentials

| Role | Login |
|------|-------|
| **Customer** | Any 10-digit phone → OTP: **123456** |
| **Admin** | Username: **admin** · Password: **admin123** |

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
- 📦 Order management with inline status updater
- 👥 Customer list with per-customer order history

---

## ☁️ Deploying to Production

### Render (free tier)
1. Push to GitHub
2. New Web Service → connect repo
3. **Build command**: `cd backend && npm install`
4. **Start command**: `node backend/server.js`
5. Set `PORT` env var (Render sets this automatically)

### Railway / Fly.io
Same build + start commands. Set `PORT` from the dashboard.

### Vercel (frontend only)
Upload `frontend/` as a Static site — zero config needed.

---

## 🔌 Upgrading to Real Backend

The data layer is in `frontend/js/store.js`.  
Each method is a clean wrapper — swap `localStorage` calls with `fetch()` API calls:

```js
// Current (localStorage)
getProducts() { return JSON.parse(localStorage.getItem('vs_products')); }

// Replace with (Express API)
async getProducts() { return await fetch('/api/products').then(r => r.json()); }
```

### Recommended Stack
- **Node.js + Express** REST API  
- **MongoDB Atlas** (free) + Mongoose  
- **Twilio / Firebase Auth** for real OTP  

---

*Built for local businesses in India · Currency: ₹ · Delivery radius: 2 KM*