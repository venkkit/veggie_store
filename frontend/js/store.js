/**
 * VeggieStore — Data Layer (localStorage)
 * ─────────────────────────────────────────
 * All functions are designed for easy replacement with real API calls.
 * e.g. Replace: getProducts() { return JSON.parse(localStorage.getItem('vs_products')); }
 * With:         async getProducts() { return await fetch('/api/products').then(r => r.json()); }
 */

const VS = (() => {
  // Storage keys
  const KEYS = {
    products:  'vs_products',
    orders:    'vs_orders',
    users:     'vs_users',
    session:   'vs_session',
    cart:      'vs_cart',
    admin:     'vs_admin_session',
  };

  // ── Seed Data ───────────────────────────────────────────────
  const SEED_PRODUCTS = [
    { id: 'p1',  name: 'Tomato',        price: 20,  unit: 'kg',    category: 'seasonal', emoji: '🍅', stock: 50, isAvailable: true,  image: '' },
    { id: 'p2',  name: 'Potato',        price: 25,  unit: 'kg',    category: 'root',     emoji: '🥔', stock: 80, isAvailable: true,  image: '' },
    { id: 'p3',  name: 'Onion',         price: 30,  unit: 'kg',    category: 'root',     emoji: '🧅', stock: 40, isAvailable: true,  image: '' },
    { id: 'p4',  name: 'Spinach',       price: 10,  unit: 'bunch', category: 'leafy',    emoji: '🌿', stock: 30, isAvailable: true,  image: '' },
    { id: 'p5',  name: 'Carrot',        price: 35,  unit: 'kg',    category: 'root',     emoji: '🥕', stock: 25, isAvailable: true,  image: '' },
    { id: 'p6',  name: 'Capsicum',      price: 60,  unit: 'kg',    category: 'seasonal', emoji: '🫑', stock: 20, isAvailable: true,  image: '' },
    { id: 'p7',  name: 'Cabbage',       price: 18,  unit: 'piece', category: 'leafy',    emoji: '🥬', stock: 15, isAvailable: true,  image: '' },
    { id: 'p8',  name: 'Cauliflower',   price: 40,  unit: 'piece', category: 'seasonal', emoji: '🥦', stock: 12, isAvailable: true,  image: '' },
    { id: 'p9',  name: 'Bitter Gourd',  price: 45,  unit: 'kg',    category: 'seasonal', emoji: '🫒', stock: 10, isAvailable: true,  image: '' },
    { id: 'p10', name: 'Lady\'s Finger',price: 50,  unit: 'kg',    category: 'seasonal', emoji: '💚', stock: 8,  isAvailable: true,  image: '' },
    { id: 'p11', name: 'Brinjal',       price: 30,  unit: 'kg',    category: 'seasonal', emoji: '🍆', stock: 18, isAvailable: true,  image: '' },
    { id: 'p12', name: 'Cucumber',      price: 22,  unit: 'kg',    category: 'seasonal', emoji: '🥒', stock: 22, isAvailable: true,  image: '' },
    { id: 'p13', name: 'Coriander',     price: 5,   unit: 'bunch', category: 'leafy',    emoji: '🌱', stock: 40, isAvailable: true,  image: '' },
    { id: 'p14', name: 'Beans',         price: 55,  unit: 'kg',    category: 'seasonal', emoji: '🫘', stock: 14, isAvailable: true,  image: '' },
    { id: 'p15', name: 'Peas',          price: 70,  unit: 'kg',    category: 'seasonal', emoji: '🟢', stock: 0,  isAvailable: false, image: '' },
    { id: 'p16', name: 'Methi',         price: 8,   unit: 'bunch', category: 'leafy',    emoji: '🌿', stock: 25, isAvailable: true,  image: '' },
  ];

  const SEED_USERS = [
    { id: 'u1', name: 'Ramesh Kumar',   phone: '9876543210', joined: '2026-01-15', orders: 12 },
    { id: 'u2', name: 'Priya Mehta',    phone: '9123456789', joined: '2026-02-10', orders: 8  },
    { id: 'u3', name: 'Suresh Patel',   phone: '9988776655', joined: '2025-12-20', orders: 20 },
    { id: 'u4', name: 'Kavitha Rajan',  phone: '9876001234', joined: '2026-03-05', orders: 5  },
  ];

  const SEED_ORDERS = [
    {
      id: 'VG1001', userId: 'u1', userName: 'Ramesh Kumar', userPhone: '9876543210',
      items: [{ productId: 'p1', name: 'Tomato', emoji: '🍅', price: 20, unit: 'kg', qty: 2 }, { productId: 'p4', name: 'Spinach', emoji: '🌿', price: 10, unit: 'bunch', qty: 1 }],
      total: 50, address: '12, Main Street, Near Temple, Pallikaranai', slot: 'evening', payment: 'cod',
      status: 'delivered', createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
    {
      id: 'VG1002', userId: 'u2', userName: 'Priya Mehta', userPhone: '9123456789',
      items: [{ productId: 'p2', name: 'Potato', emoji: '🥔', price: 25, unit: 'kg', qty: 2 }, { productId: 'p3', name: 'Onion', emoji: '🧅', price: 30, unit: 'kg', qty: 1 }],
      total: 80, address: '5A, Rose Garden, Velachery', slot: 'morning', payment: 'upi',
      status: 'delivered', createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: 'VG1003', userId: 'u3', userName: 'Suresh Patel', userPhone: '9988776655',
      items: [{ productId: 'p5', name: 'Carrot', emoji: '🥕', price: 35, unit: 'kg', qty: 1 }, { productId: 'p6', name: 'Capsicum', emoji: '🫑', price: 60, unit: 'kg', qty: 0.5 }],
      total: 65, address: '23, Gandhi Nagar, Chromepet', slot: 'evening', payment: 'cod',
      status: 'out_for_delivery', createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 'VG1004', userId: 'u1', userName: 'Ramesh Kumar', userPhone: '9876543210',
      items: [{ productId: 'p7', name: 'Cabbage', emoji: '🥬', price: 18, unit: 'piece', qty: 2 }, { productId: 'p13', name: 'Coriander', emoji: '🌱', price: 5, unit: 'bunch', qty: 2 }],
      total: 46, address: '12, Main Street, Near Temple, Pallikaranai', slot: 'morning', payment: 'upi',
      status: 'packed', createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    },
    {
      id: 'VG1005', userId: 'u4', userName: 'Kavitha Rajan', userPhone: '9876001234',
      items: [{ productId: 'p1', name: 'Tomato', emoji: '🍅', price: 20, unit: 'kg', qty: 1 }, { productId: 'p11', name: 'Brinjal', emoji: '🍆', price: 30, unit: 'kg', qty: 1 }, { productId: 'p12', name: 'Cucumber', emoji: '🥒', price: 22, unit: 'kg', qty: 2 }],
      total: 94, address: '7, Lake View Road, Tambaram', slot: 'morning', payment: 'cod',
      status: 'pending', createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
  ];

  // ── Init (seed on first load) ────────────────────────────────
  function init() {
    if (!localStorage.getItem(KEYS.products)) {
      localStorage.setItem(KEYS.products, JSON.stringify(SEED_PRODUCTS));
    }
    if (!localStorage.getItem(KEYS.users)) {
      localStorage.setItem(KEYS.users, JSON.stringify(SEED_USERS));
    }
    if (!localStorage.getItem(KEYS.orders)) {
      localStorage.setItem(KEYS.orders, JSON.stringify(SEED_ORDERS));
    }
  }

  // ── Products ─────────────────────────────────────────────────
  function getProducts()    { return JSON.parse(localStorage.getItem(KEYS.products)) || []; }
  function getProduct(id)   { return getProducts().find(p => p.id === id); }
  function saveProducts(ps) { localStorage.setItem(KEYS.products, JSON.stringify(ps)); }
  function addProduct(p)    { const ps = getProducts(); ps.push({ ...p, id: 'p' + Date.now() }); saveProducts(ps); }
  function updateProduct(updated) {
    const ps = getProducts().map(p => p.id === updated.id ? updated : p);
    saveProducts(ps);
  }
  function deleteProduct(id) { saveProducts(getProducts().filter(p => p.id !== id)); }

  // ── Cart ─────────────────────────────────────────────────────
  function getCart()    { return JSON.parse(localStorage.getItem(KEYS.cart)) || []; }
  function saveCart(c)  { localStorage.setItem(KEYS.cart, JSON.stringify(c)); }
  function clearCart()  { localStorage.removeItem(KEYS.cart); }
  function getCartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
  function getCartTotal() { return getCart().reduce((s, i) => s + i.price * i.qty, 0); }

  function addToCart(productId, qty = 1) {
    const p = getProduct(productId);
    if (!p || !p.isAvailable) return false;
    const cart = getCart();
    const existing = cart.find(i => i.productId === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ productId, name: p.name, emoji: p.emoji, price: p.price, unit: p.unit, qty });
    }
    saveCart(cart);
    return true;
  }

  function updateCartQty(productId, qty) {
    const cart = getCart();
    const idx = cart.findIndex(i => i.productId === productId);
    if (idx < 0) return;
    if (qty <= 0) { cart.splice(idx, 1); } else { cart[idx].qty = qty; }
    saveCart(cart);
  }

  function removeFromCart(productId) {
    saveCart(getCart().filter(i => i.productId !== productId));
  }

  // ── Orders ───────────────────────────────────────────────────
  function getOrders()   { return JSON.parse(localStorage.getItem(KEYS.orders)) || []; }
  function saveOrders(o) { localStorage.setItem(KEYS.orders, JSON.stringify(o)); }

  function getUserOrders(userId) {
    return getOrders().filter(o => o.userId === userId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  function placeOrder(orderData) {
    const orders = getOrders();
    const id = 'VG' + (1000 + orders.length + 1);
    const order = { id, ...orderData, status: 'pending', createdAt: new Date().toISOString() };
    orders.push(order);
    saveOrders(orders);
    clearCart();
    return order;
  }

  function updateOrderStatus(orderId, status) {
    const orders = getOrders().map(o => o.id === orderId ? { ...o, status } : o);
    saveOrders(orders);
  }

  // ── Users/Auth ───────────────────────────────────────────────
  function getUsers()    { return JSON.parse(localStorage.getItem(KEYS.users)) || []; }
  function saveUsers(u)  { localStorage.setItem(KEYS.users, JSON.stringify(u)); }

  function getOrCreateUser(phone) {
    const users = getUsers();
    let user = users.find(u => u.phone === phone);
    if (!user) {
      user = { id: 'u' + Date.now(), name: 'User ' + phone.slice(-4), phone, joined: new Date().toISOString().split('T')[0], orders: 0 };
      users.push(user);
      saveUsers(users);
    }
    return user;
  }

  function getSession()   { return JSON.parse(localStorage.getItem(KEYS.session)); }
  function setSession(u)  { localStorage.setItem(KEYS.session, JSON.stringify(u)); }
  function clearSession() { localStorage.removeItem(KEYS.session); }
  function isLoggedIn()   { return !!getSession(); }

  function getAdminSession()   { return JSON.parse(localStorage.getItem(KEYS.admin)); }
  function setAdminSession(a)  { localStorage.setItem(KEYS.admin, JSON.stringify(a)); }
  function clearAdminSession() { localStorage.removeItem(KEYS.admin); }
  function isAdminLoggedIn()   { return !!getAdminSession(); }

  // ── Analytics ────────────────────────────────────────────────
  function getAnalytics() {
    const orders = getOrders();
    const today  = new Date().toDateString();
    const todayOrders = orders.filter(o => new Date(o.createdAt).toDateString() === today);

    // Most ordered
    const freq = {};
    orders.forEach(o => o.items.forEach(i => { freq[i.name] = (freq[i.name] || 0) + i.qty; }));
    const mostOrdered = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 5);

    return {
      totalOrders:     orders.length,
      todayOrders:     todayOrders.length,
      todayRevenue:    todayOrders.reduce((s, o) => s + o.total, 0),
      totalRevenue:    orders.reduce((s, o) => s + o.total, 0),
      pendingOrders:   orders.filter(o => o.status === 'pending').length,
      completedOrders: orders.filter(o => o.status === 'delivered').length,
      totalCustomers:  getUsers().length,
      mostOrdered,
    };
  }

  // ── Helpers ──────────────────────────────────────────────────
  function formatINR(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
  function statusLabel(s) {
    return { pending: 'Pending', packed: 'Packed', out_for_delivery: 'Out for Delivery', delivered: 'Delivered' }[s] || s;
  }
  function statusBadgeClass(s) {
    return { pending: 'badge-pending', packed: 'badge-packed', out_for_delivery: 'badge-delivery', delivered: 'badge-delivered' }[s] || '';
  }

  // Expose public API
  return {
    init,
    products: { getAll: getProducts, get: getProduct, add: addProduct, update: updateProduct, delete: deleteProduct },
    cart: { get: getCart, add: addToCart, updateQty: updateCartQty, remove: removeFromCart, clear: clearCart, count: getCartCount, total: getCartTotal },
    orders: { getAll: getOrders, getByUser: getUserOrders, place: placeOrder, updateStatus: updateOrderStatus },
    users: { getAll: getUsers, getOrCreate: getOrCreateUser },
    auth: { getSession, setSession, clearSession, isLoggedIn, getAdminSession, setAdminSession, clearAdminSession, isAdminLoggedIn },
    analytics: { get: getAnalytics },
    fmt: { inr: formatINR, date: formatDate, statusLabel, statusBadge: statusBadgeClass },
  };
})();

// ── Toast System ─────────────────────────────────────────────
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

// ── Update cart badge everywhere ─────────────────────────────
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count  = VS.cart.count();
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Auto-init on load
VS.init();
