# 📄 Product Requirements Document (PRD)
## VeggieStore — Local Vegetables Delivery App

**Version:** 1.0  
**Date:** April 2026  
**Author:** Product Team  
**Status:** Draft

---

## 1. 🧭 Overview

VeggieStore is a full-stack local vegetables e-commerce web application built for a small delivery business operating within a **2 km radius** in India. The platform allows customers to browse, order fresh vegetables online and enables admins to manage products, orders, and customers from a dedicated dashboard.

---

## 2. 🎯 Goals & Objectives

| Goal | Description |
|------|-------------|
| Enable online ordering | Let customers browse & order vegetables from their phones or desktops |
| Admin control | Give store owner full control over inventory, pricing, and orders |
| Speed & simplicity | Fast, mobile-first UI with minimal friction |
| WhatsApp integration | Auto-send order summary via WhatsApp |
| Free deployment | Deployable on free hosting platforms |

---

## 3. 🌍 Business Context

- **Service Area:** Local delivery within 2 km radius
- **Currency:** Indian Rupees (₹)
- **Target Users:** Local households
- **Operating Hours:** Morning (6 AM – 10 AM) / Evening (5 PM – 8 PM) delivery slots
- **Business Model:** Cash on Delivery + UPI payments

---

## 4. 👥 User Roles

### 4.1 Customer
A local household user who browses vegetables, places orders, and tracks delivery status.

### 4.2 Admin
The store owner or operator who manages inventory, orders, and monitors analytics via a dashboard.

---

## 5. 🔐 Authentication System

### Customer Login
- **Method:** Phone number + OTP (simulated for MVP)
- **Session:** Maintained using `localStorage` or JWT token
- **Flow:** Enter phone → Receive OTP → Verify → Access account

### Admin Login
- **Method:** Username + Password
- **Session:** JWT token stored in `localStorage`
- **Security:** Hardcoded credentials for MVP; can be extended to DB-driven auth later

---

## 6. 🛒 Customer Features

### 6.1 Product Browsing
- View all available vegetables with name, image, price, and stock status
- Filter by category (Leafy, Root, Seasonal, etc.)
- Search bar with real-time filtering

### 6.2 Cart Management
- Add/remove items from cart
- Select quantity (kg or units)
- View total price with item-level breakdown
- Persistent cart using `localStorage`

### 6.3 Checkout
| Field | Details |
|-------|---------|
| Delivery Address | Text input (house no, area, landmark) |
| Delivery Slot | Morning (6–10 AM) / Evening (5–8 PM) |
| Payment Method | UPI / Cash on Delivery |

### 6.4 Order Placement
- Submit order after checkout
- Confirmation toast/alert notification
- WhatsApp message auto-sent to admin with order details

### 6.5 Order Tracking
Status stages:
1. ⏳ **Pending** — Order received
2. 📦 **Packed** — Items packed
3. 🚴 **Out for Delivery** — On the way
4. ✅ **Delivered** — Order complete

### 6.6 Order History
- View all past orders
- See order details (items, total, date, status)

---

## 7. 🧑‍💼 Admin Features

### 7.1 Dashboard
| Metric | Description |
|--------|-------------|
| Total Orders Today | Count of orders placed today |
| Total Revenue | Revenue generated today / overall |
| Pending Orders | Orders not yet delivered |
| Completed Orders | Delivered orders count |
| Active Users | Registered customer count |

### 7.2 Product Management
- Add new vegetables (name, price, image, category, stock)
- Edit existing product details
- Delete products
- Toggle product availability (in-stock / out-of-stock)

### 7.3 Order Management
- View all orders in a table/list
- Filter by: Today / Pending / Completed
- Update order status (Pending → Packed → Out for Delivery → Delivered)
- View customer details per order

### 7.4 Customer Management
- List of all registered customers
- View individual order history per customer

### 7.5 Analytics (Basic)
- Daily orders count chart
- Revenue summary (daily / weekly)
- Most ordered vegetables list

---

## 8. 📦 Product Data Schema

```json
{
  "id": "string",
  "name": "string",
  "price": "number (₹ per kg or unit)",
  "unit": "kg | bunch | piece",
  "image": "string (URL or path)",
  "category": "leafy | root | seasonal | other",
  "stock": "number",
  "isAvailable": "boolean"
}
```

### Sample Test Data

| Product | Price | Unit |
|---------|-------|------|
| Tomato 🍅 | ₹20 | per kg |
| Potato 🥔 | ₹25 | per kg |
| Onion 🧅 | ₹30 | per kg |
| Spinach 🌿 | ₹10 | per bunch |

---

## 9. 🎨 UI/UX Requirements

- **Theme:** Green (#4CAF50 primary, white background)
- **Typography:** Clean sans-serif (Inter or Poppins)
- **Responsive:** Mobile-first design; works on mobile, tablet, desktop
- **Interactions:** Toast notifications, loading spinners, smooth transitions
- **Navigation:** Bottom navigation bar on mobile; sidebar/top nav on desktop
- **Delivery Banner:** Always visible — *"Delivery within 2 KM only"*

---

## 10. 📱 Extra Features

| Feature | Priority | Notes |
|---------|----------|-------|
| WhatsApp Order Confirmation | High | Auto-open WhatsApp with prefilled order message |
| Toast Notifications | High | For cart actions, order placement |
| Search Bar | High | Real-time filter on product listing |
| First Order Discount | Low | Optional 10% off promo code |
| Delivery Note Banner | Medium | Static UI banner on homepage |

---

## 11. ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (or React) |
| Backend | Node.js + Express |
| Database | MongoDB (or Firebase Firestore) |
| Auth | OTP simulation (localStorage/JWT) |
| WhatsApp | WhatsApp Web API (URL scheme) |
| Deployment | Render / Railway / Vercel (free tier) |

---

## 12. 📁 Project Structure

```
veggie-store/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   ├── cart.js
│   │   ├── auth.js
│   │   └── admin.js
│   └── assets/
│       └── images/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   └── customers.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── .env
├── docs/
│   ├── PRD.md
│   ├── USER_FLOW.md
│   └── wireframe.md
└── README.md
```

---

## 13. 🚀 Deployment

### Local Development
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
Open frontend/index.html in browser
# or serve with: npx live-server frontend/
```

### Free Deployment Options
| Service | Use For | Free Tier |
|---------|---------|-----------|
| Render | Backend (Node.js) | Yes |
| Vercel | Frontend | Yes |
| Railway | Full-stack | Yes |
| MongoDB Atlas | Database | 512 MB free |

---

## 14. ✅ Success Metrics (MVP)

- [ ] Customer can register via phone OTP simulation
- [ ] Customer can browse, search, and filter products
- [ ] Customer can add to cart and checkout
- [ ] WhatsApp message sent on order placement
- [ ] Admin can log in and view dashboard
- [ ] Admin can manage products and update order status
- [ ] App is mobile responsive
- [ ] App is deployable on a free platform

---

## 15. 🔮 Future Enhancements (Post-MVP)

- Real OTP integration (Firebase/Twilio)
- Push notifications
- GPS-based 2 km radius validation
- Loyalty points system
- Live order tracking on map
- Multi-language support (Hindi/regional)
- Native mobile app (React Native)

---

*This document serves as the single source of truth for the VeggieStore MVP build.*
