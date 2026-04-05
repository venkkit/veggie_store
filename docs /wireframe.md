# 🖼️ Wireframe Document
## VeggieStore — Local Vegetables Delivery App

**Version:** 1.0  
**Date:** April 2026  
**Layout:** ASCII-based wireframe representations

---

## 📱 MOBILE WIREFRAMES (375px width)

---

### Screen 1: Splash / Landing Screen

```
┌─────────────────────────┐
│                         │
│                         │
│       🌿               │
│   VeggieStore           │
│  Fresh. Local. Fast.    │
│                         │
│                         │
│  ┌───────────────────┐  │
│  │   Login / Sign Up │  │
│  └───────────────────┘  │
│                         │
│  📍 Delivery within 2KM │
│                         │
└─────────────────────────┘
```

---

### Screen 2: Phone Login

```
┌─────────────────────────┐
│  ← Back                 │
│─────────────────────────│
│                         │
│   📱 Enter Phone Number │
│                         │
│  ┌───────────────────┐  │
│  │ 🇮🇳 +91  9876543210│  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │     Get OTP       │  │
│  └───────────────────┘  │
│                         │
│  By continuing you agree│
│  to our Terms of Use    │
└─────────────────────────┘
```

---

### Screen 3: OTP Verification

```
┌─────────────────────────┐
│  ← Back                 │
│─────────────────────────│
│                         │
│  Enter OTP sent to      │
│  +91 98765 43210        │
│                         │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐  │
│  │  │ │  │ │  │ │  │  │
│  └──┘ └──┘ └──┘ └──┘  │
│                         │
│  ┌───────────────────┐  │
│  │      Verify       │  │
│  └───────────────────┘  │
│                         │
│  Resend OTP in 0:30     │
└─────────────────────────┘
```

---

### Screen 4: Home / Product Listing (Mobile)

```
┌─────────────────────────┐
│  🌿 VeggieStore  🛒 (2) │
│─────────────────────────│
│  🔍 Search vegetables..  │
│─────────────────────────│
│  📍 Deliver within 2 KM │
│─────────────────────────│
│  [All] [Leafy] [Root]   │
│  [Seasonal] [Other]     │
│─────────────────────────│
│  ┌──────────┐ ┌────────┐│
│  │  🍅      │ │  🥔    ││
│  │  Tomato  │ │ Potato ││
│  │  ₹20/kg  │ │₹25/kg  ││
│  │ In Stock │ │In Stock││
│  │ [+ Add]  │ │[+ Add] ││
│  └──────────┘ └────────┘│
│  ┌──────────┐ ┌────────┐│
│  │  🧅      │ │  🌿    ││
│  │  Onion   │ │Spinach ││
│  │  ₹30/kg  │ │₹10/bun ││
│  │ In Stock │ │In Stock││
│  │ [+ Add]  │ │[+ Add] ││
│  └──────────┘ └────────┘│
│─────────────────────────│
│  🏠 Home │🔍 Search│🛒Cart│👤
└─────────────────────────┘
```

---

### Screen 5: Product Detail Page (Mobile)

```
┌─────────────────────────┐
│  ← Back           🛒(2) │
│─────────────────────────│
│  ┌─────────────────────┐│
│  │                     ││
│  │      🍅 🍅 🍅       ││
│  │    [Product Image]  ││
│  │                     ││
│  └─────────────────────┘│
│                         │
│  Tomato               🌿│
│  Category: Vegetable    │
│                         │
│  ₹ 20 / kg             │
│  ✅ In Stock (50 kg)    │
│                         │
│  Fresh farm tomatoes    │
│  sourced locally.       │
│                         │
│  Quantity:              │
│  ┌────┐                 │
│  │[-] │  2 kg  │ [+] │  │
│  └────┘                 │
│                         │
│  ┌───────────────────┐  │
│  │   🛒 Add to Cart  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

### Screen 6: Cart Page (Mobile)

```
┌─────────────────────────┐
│  ← My Cart        (3)   │
│─────────────────────────│
│  ┌─────────────────────┐│
│  │ 🍅 Tomato           ││
│  │ ₹20/kg    2 kg ₹40  ││
│  │         [-] [2] [+] ││
│  │                [🗑️] ││
│  └─────────────────────┘│
│  ┌─────────────────────┐│
│  │ 🥔 Potato           ││
│  │ ₹25/kg    1 kg ₹25  ││
│  │         [-] [1] [+] ││
│  │                [🗑️] ││
│  └─────────────────────┘│
│  ┌─────────────────────┐│
│  │ 🌿 Spinach          ││
│  │ ₹10/bunch  1   ₹10  ││
│  │         [-] [1] [+] ││
│  │                [🗑️] ││
│  └─────────────────────┘│
│─────────────────────────│
│  Subtotal:      ₹75     │
│  Delivery:      FREE    │
│  Total:         ₹75     │
│─────────────────────────│
│  ┌───────────────────┐  │
│  │  Proceed to Pay   │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

### Screen 7: Checkout Page (Mobile)

```
┌─────────────────────────┐
│  ← Checkout             │
│─────────────────────────│
│  📍 Delivery Address    │
│  ┌───────────────────┐  │
│  │ House No / Flat   │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Street / Area     │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Landmark (optional│  │
│  └───────────────────┘  │
│─────────────────────────│
│  ⏰ Delivery Slot       │
│  ┌────────┐ ┌─────────┐ │
│  │☀️Morning│ │🌇Evening│ │
│  │6–10 AM │ │ 5–8 PM  │ │
│  └────────┘ └─────────┘ │
│─────────────────────────│
│  💳 Payment Method      │
│  ┌────────┐ ┌─────────┐ │
│  │📱 UPI  │ │💵 Cash  │ │
│  └────────┘ └─────────┘ │
│─────────────────────────│
│  Order Total: ₹75       │
│  ┌───────────────────┐  │
│  │    Place Order    │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

### Screen 8: Order Confirmation (Mobile)

```
┌─────────────────────────┐
│                         │
│         ✅              │
│   Order Placed!         │
│   #VG1234               │
│                         │
│  Tomato 2kg    ₹40      │
│  Potato 1kg    ₹25      │
│  Spinach 1     ₹10      │
│  ─────────────────────  │
│  Total:        ₹75      │
│  Slot: Evening 5–8 PM   │
│  Payment: Cash on Del.  │
│                         │
│  ┌───────────────────┐  │
│  │ 📲 Share on WhatsApp│  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │   Track My Order  │  │
│  └───────────────────┘  │
│  [Continue Shopping]    │
└─────────────────────────┘
```

---

### Screen 9: Order Tracking (Mobile)

```
┌─────────────────────────┐
│  ← Order #VG1234        │
│─────────────────────────│
│                         │
│   ●─────────────────○   │
│   │                 │   │
│  ✅ Pending        ──►  │
│   │                     │
│  [📦] Packed        ──► │
│   │                     │
│  [🚴] Out for Del.  ──► │
│   │                     │
│  [✅] Delivered     ──► │
│                         │
│─────────────────────────│
│  Items:                 │
│  • Tomato 2kg — ₹40    │
│  • Potato 1kg — ₹25    │
│  • Spinach — ₹10       │
│─────────────────────────│
│  Address: 12, Main St   │
│  Slot: Evening 5–8 PM   │
└─────────────────────────┘
```

---

## 🖥️ DESKTOP WIREFRAMES (1280px width)

---

### Screen 10: Home Page (Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│  🌿 VeggieStore     Home    Shop    About    🛒 Cart(2)   Login/User  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │         🌿 Fresh Vegetables Delivered to Your Door             │  │
│  │         📍 Delivery within 2 KM · Order before 4 PM           │  │
│  │         [ 🔍 Search for vegetables... ]  [Shop Now]           │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  [ All ]  [ 🌿 Leafy ]  [ 🧅 Root ]  [ 🍅 Seasonal ]  [ Other ]     │
│──────────────────────────────────────────────────────────────────────│
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │  🍅      │  │  🥔      │  │  🧅      │  │  🌿      │            │
│  │  Tomato  │  │  Potato  │  │  Onion   │  │  Spinach │            │
│  │  ₹20/kg  │  │  ₹25/kg  │  │  ₹30/kg  │  │  ₹10/bun │            │
│  │ In Stock │  │ In Stock │  │ In Stock │  │ In Stock │            │
│  │ [+ Add]  │  │ [+ Add]  │  │ [+ Add]  │  │ [+ Add]  │            │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

### Screen 11: Admin Dashboard (Desktop)

```
┌──────┬───────────────────────────────────────────────────────────────┐
│ 🌿   │  📊 Dashboard                                    Admin ▾      │
│ADMIN │───────────────────────────────────────────────────────────────│
│      │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│ 📊   │  │ Orders   │  │ Revenue  │  │ Pending  │  │Customers │     │
│ Dash │  │  Today   │  │  Today   │  │  Orders  │  │  Total   │     │
│      │  │   24     │  │ ₹1,860   │  │    8     │  │   142    │     │
│ 🥦   │  └──────────┘  └──────────┘  └──────────┘  └──────────┘     │
│ Prod │──────────────────────────────────────────────────────────────│
│      │  📈 Weekly Orders Chart                                       │
│ 📦   │  ┌────────────────────────────────────────────────────────┐  │
│ Ords │  │ 30 │████                                               │  │
│      │  │ 25 │█████████                                          │  │
│ 👥   │  │ 20 │████████████████                                   │  │
│ Cust │  │ 15 │                                                   │  │
│      │  │    └───────────────────────────────────────            │  │
│      │  │     Mon  Tue  Wed  Thu  Fri  Sat  Sun                  │  │
│ 🚪   │  └────────────────────────────────────────────────────────┘  │
│ Out  │                                                               │
│      │  🏆 Most Ordered                  📦 Recent Orders           │
│      │  1. Tomato  - 120 orders          Order #VG1234 - ₹75 - ⏳   │
│      │  2. Potato  -  95 orders          Order #VG1233 - ₹120 - ✅  │
│      │  3. Onion   -  72 orders          Order #VG1232 - ₹45 - 🚴   │
└──────┴───────────────────────────────────────────────────────────────┘
```

---

### Screen 12: Admin Products Page (Desktop)

```
┌──────┬───────────────────────────────────────────────────────────────┐
│ SBAR │  🥦 Products                       [+ Add New Product]        │
│      │───────────────────────────────────────────────────────────────│
│      │  [ 🔍 Search products... ]  Filter: [ All ▾ ]                 │
│      │──────────────────────────────────────────────────────────────│
│      │  Image │ Name     │ Category │ Price │ Stock │ Status │ Actions│
│      │──────────────────────────────────────────────────────────────│
│      │  🍅    │ Tomato   │ Seasonal │ ₹20   │  50kg │ ✅ On  │ ✏️ 🗑️ │
│      │  🥔    │ Potato   │ Root     │ ₹25   │  80kg │ ✅ On  │ ✏️ 🗑️ │
│      │  🧅    │ Onion    │ Root     │ ₹30   │  40kg │ ✅ On  │ ✏️ 🗑️ │
│      │  🌿    │ Spinach  │ Leafy    │ ₹10   │  30bn │ ✅ On  │ ✏️ 🗑️ │
└──────┴───────────────────────────────────────────────────────────────┘
```

---

### Screen 13: Add/Edit Product Modal

```
┌──────────────────────────────────────────────┐
│  ✏️ Add New Product                      [✕]  │
│──────────────────────────────────────────────│
│                                              │
│  Product Name                                │
│  ┌────────────────────────────────────────┐  │
│  │ e.g. Tomato                            │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  Price (₹)          Unit                     │
│  ┌──────────────┐   ┌──────────────────────┐ │
│  │ 20           │   │ kg / bunch / piece ▾ │ │
│  └──────────────┘   └──────────────────────┘ │
│                                              │
│  Category            Stock Quantity           │
│  ┌──────────────┐   ┌──────────────────────┐ │
│  │ Seasonal ▾   │   │ 50                   │ │
│  └──────────────┘   └──────────────────────┘ │
│                                              │
│  Product Image                               │
│  ┌────────────────────────────────────────┐  │
│  │  [📁 Upload Image]  or paste URL       │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  Available?   ● Yes  ○ No                    │
│                                              │
│  ┌─────────────┐    ┌──────────────────────┐ │
│  │   Cancel    │    │     Save Product     │ │
│  └─────────────┘    └──────────────────────┘ │
└──────────────────────────────────────────────┘
```

---

### Screen 14: Admin Orders Page (Desktop)

```
┌──────┬───────────────────────────────────────────────────────────────┐
│ SBAR │  📦 Orders Management                                         │
│      │───────────────────────────────────────────────────────────────│
│      │  [All Orders] [Today] [Pending] [Completed]    🔍 Search      │
│      │──────────────────────────────────────────────────────────────│
│      │  ID      │ Customer    │ Items  │ Total │ Slot  │ Status │ Act │
│      │──────────────────────────────────────────────────────────────│
│      │  #VG1234 │ Ramesh K.   │ 3 itms │ ₹75   │ 🌇Eve │ ⏳Pend │[▾] │
│      │          │ 9876543210  │        │       │       │        │    │
│      │──────────────────────────────────────────────────────────────│
│      │  #VG1233 │ Priya M.    │ 2 itms │ ₹120  │ ☀️Morn│ ✅Done │[▾] │
│      │          │ 9123456789  │        │       │       │        │    │
│      │──────────────────────────────────────────────────────────────│
│      │  #VG1232 │ Suresh P.   │ 5 itms │ ₹200  │ 🌇Eve │ 🚴Out  │[▾] │
│      │          │ 9988776655  │        │       │       │        │    │
└──────┴───────────────────────────────────────────────────────────────┘
```

---

### Screen 15: Admin Customers Page (Desktop)

```
┌──────┬───────────────────────────────────────────────────────────────┐
│ SBAR │  👥 Customers                                                  │
│      │───────────────────────────────────────────────────────────────│
│      │  [ 🔍 Search customer... ]                                     │
│      │──────────────────────────────────────────────────────────────│
│      │  Name       │ Phone        │ Orders │ Joined     │ Action     │
│      │──────────────────────────────────────────────────────────────│
│      │  Ramesh K.  │ 98765 43210  │   12   │ Jan 2026   │ [History]  │
│      │  Priya M.   │ 91234 56789  │    8   │ Feb 2026   │ [History]  │
│      │  Suresh P.  │ 99887 76655  │   20   │ Dec 2025   │ [History]  │
└──────┴───────────────────────────────────────────────────────────────┘
```

---

## 🎨 Design System Reference

### Color Palette

```
Primary Green:    #2E7D32  (buttons, highlights)
Light Green:      #4CAF50  (hover states, tags)
Background:       #F9FBF9  (page background)
Card White:       #FFFFFF  (product cards)
Text Dark:        #1A1A1A  (headings)
Text Gray:        #666666  (subtext)
Success:          #43A047  (confirmations)
Error:            #E53935  (errors, alerts)
Warning:          #F57C00  (stock warnings)
```

### Typography Scale

```
H1 - Page Title:     28px, Bold, #1A1A1A
H2 - Section:        22px, SemiBold, #1A1A1A
H3 - Card Title:     18px, Medium, #1A1A1A
Body:                16px, Regular, #333333
Small / Caption:     13px, Regular, #666666
Button Text:         15px, SemiBold, #FFFFFF
```

### Component Sizing

```
Mobile card width:   160px (2 per row)
Desktop card width:  240px (4 per row)
Button height:       48px (mobile), 42px (desktop)
Input height:        48px
Navbar height:       60px (top), 64px (bottom mobile)
Sidebar width:       220px (desktop admin)
Border radius:       12px (cards), 8px (buttons/inputs)
```

### Spacing System

```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   32px
xxl:  48px
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 480px | 2-column grid, bottom nav |
| Tablet | 481–768px | 3-column grid, top nav |
| Desktop | > 769px | 4-column grid, top nav |
| Admin Desktop | > 769px | Sidebar + main content |

---

## 🔘 Key UI Components

### Toast Notification
```
┌─────────────────────────────┐
│ ✅  Tomato added to cart!   │
└─────────────────────────────┘
```

### Stock Badge
```
In Stock  → ✅ Green badge
Low Stock → ⚠️ Orange badge
Out       → ❌ Red badge, button disabled
```

### Order Status Badge
```
⏳ Pending         → Yellow pill
📦 Packed          → Blue pill
🚴 Out for Delivery → Orange pill
✅ Delivered        → Green pill
```

### Delivery Banner
```
┌────────────────────────────────────────────┐
│ 📍 Free Delivery within 2 KM radius only   │
└────────────────────────────────────────────┘
```

---

*This wireframe document provides the visual blueprint for the VeggieStore application across all screens and device sizes.*
