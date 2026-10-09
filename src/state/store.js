/**
 * Enhanced State Management for Efex Luxury V2
 * Real-time Sync, Simulated Auth & DB
 */

const STORAGE_KEY = 'efex_db_v2';

// Nigerian Fashion Data
const INITIAL_PRODUCTS = [
  // Men's Collection
  { 
    id: 1, 
    name: 'Royal Blue Agbada', 
    price: 185000, 
    category: 'Traditional Wear', 
    department: 'Men',
    image: '/images/products/nigerian_agbada_men_1768240346228.png' 
  },
  { 
    id: 2, 
    name: 'Senator Kaftan White Gold', 
    price: 125000, 
    category: 'Traditional Wear', 
    department: 'Men',
    image: '/images/products/nigerian_kaftan_men_1768240409013.png' 
  },
  { 
    id: 3, 
    name: 'Emerald Dashiki Shirt', 
    price: 65000, 
    category: 'Casual Wear', 
    department: 'Men',
    image: '/images/products/nigerian_dashiki_men_1768240443851.png' 
  },
  { 
    id: 4, 
    name: 'Onyx Gold Watch', 
    price: 450000, 
    category: 'Accessories', 
    department: 'Men',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    name: 'Lagos City Loafers', 
    price: 75000, 
    category: 'Shoes',
    department: 'Men', 
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    name: 'Classic Agbada Burgundy', 
    price: 165000, 
    category: 'Traditional Wear', 
    department: 'Men',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop' 
  },

  // Women's Collection
  { 
    id: 7, 
    name: 'Ankara Maxi Gown', 
    price: 95000, 
    category: 'Dresses', 
    department: 'Women',
    image: '/images/products/nigerian_ankara_women_1768240362466.png' 
  },
  { 
    id: 8, 
    name: 'Iro and Buba Purple Gold', 
    price: 145000, 
    category: 'Traditional Wear', 
    department: 'Women',
    image: '/images/products/nigerian_iro_buba_women_1768240426603.png' 
  },
  { 
    id: 9, 
    name: 'Ankara Wrapper & Blouse', 
    price: 85000, 
    category: 'Traditional Wear', 
    department: 'Women',
    image: '/images/products/nigerian_wrapper_women_1768240469343.png' 
  },
  {
    id: 10,
    name: 'Silk Ankara Scarf',
    price: 25000,
    category: 'Accessories',
    department: 'Women',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 11, 
    name: 'Velvet Evening Gown', 
    price: 115000, 
    category: 'Dresses', 
    department: 'Women',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 12, 
    name: 'Gold Beaded Clutch', 
    price: 45000, 
    category: 'Accessories', 
    department: 'Women',
    image: 'https://images.unsplash.com/photo-1564422167509-4f3a4fc679c0?q=80&w=800&auto=format&fit=crop' 
  },

  // Children's Collection
  {
    id: 13,
    name: 'Kids Ankara Festive Set',
    price: 45000,
    category: 'Traditional Wear',
    department: 'Children',
    image: '/images/products/nigerian_children_outfit_1768240380700.png'
  },
  {
    id: 14,
    name: 'Buba & Sokoto Pink Set',
    price: 38000,
    category: 'Traditional Wear',
    department: 'Children',
    image: '/images/products/nigerian_children_buba_1768240492393.png'
  },
  {
    id: 15,
    name: 'Kids Dashiki Outfit',
    price: 35000,
    category: 'Casual Wear',
    department: 'Children',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 16,
    name: 'Children\'s Agbada Set',
    price: 55000,
    category: 'Traditional Wear',
    department: 'Children',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop'
  }
];

export const DEFAULT_ADMIN = {
  email: 'admin@admin.com',
  password: 'admin',
  name: 'Store Administrator',
  role: 'admin',
  phone: '+234 800 000 0000',
  location: 'Efex Luxury Headquarters, Victoria Island, Lagos'
};

const DEMO_CUSTOMERS = [
  {
    email: 'b.adeleke@luxury.ng',
    password: 'password123',
    name: 'Babajide Adeleke',
    role: 'user',
    phone: '+234 802 345 6789',
    location: 'Plot 14, Admiralty Way, Lekki Phase 1, Lagos'
  },
  {
    email: 'chioma.o@gmail.com',
    password: 'password123',
    name: 'Chioma Okonkwo',
    role: 'user',
    phone: '+234 813 908 1122',
    location: '25 Bourdillon Road, Ikoyi, Lagos'
  },
  {
    email: 'seun.bakare@outlook.com',
    password: 'password123',
    name: 'Oluwaseun Bakare',
    role: 'user',
    phone: '+234 705 554 3210',
    location: 'Maitama District, Abuja FCT'
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'ORD-9842',
    customer: {
      name: 'Babajide Adeleke',
      email: 'b.adeleke@luxury.ng',
      phone: '+234 802 345 6789',
      address: 'Plot 14, Admiralty Way, Lekki Phase 1, Lagos'
    },
    date: '2026-10-06',
    total: '₦370,000',
    totalAmount: 370000,
    status: 'Processing',
    items: [
      { name: 'Royal Blue Agbada', qty: 2, price: 185000, image: '/images/products/nigerian_agbada_men_1768240346228.png' }
    ]
  },
  {
    id: 'ORD-9755',
    customer: {
      name: 'Chioma Okonkwo',
      email: 'chioma.o@gmail.com',
      phone: '+234 813 908 1122',
      address: '25 Bourdillon Road, Ikoyi, Lagos'
    },
    date: '2026-10-05',
    total: '₦240,000',
    totalAmount: 240000,
    status: 'Shipped',
    items: [
      { name: 'Ankara Maxi Gown', qty: 1, price: 95000, image: '/images/products/nigerian_ankara_women_1768240362466.png' },
      { name: 'Iro and Buba Purple Gold', qty: 1, price: 145000, image: '/images/products/nigerian_iro_buba_women_1768240426603.png' }
    ]
  },
  {
    id: 'ORD-9610',
    customer: {
      name: 'Oluwaseun Bakare',
      email: 'seun.bakare@outlook.com',
      phone: '+234 705 554 3210',
      address: 'Maitama District, Abuja FCT'
    },
    date: '2026-10-03',
    total: '₦450,000',
    totalAmount: 450000,
    status: 'Delivered',
    items: [
      { name: 'Onyx Gold Watch', qty: 1, price: 450000, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop' }
    ]
  },
  {
    id: 'ORD-9502',
    customer: {
      name: 'Amina Danjuma',
      email: 'amina.d@danluxury.com',
      phone: '+234 809 123 9988',
      address: 'Garki 2, Abuja FCT'
    },
    date: '2026-10-02',
    total: '₦125,000',
    totalAmount: 125000,
    status: 'Pending',
    items: [
      { name: 'Senator Kaftan White Gold', qty: 1, price: 125000, image: '/images/products/nigerian_kaftan_men_1768240409013.png' }
    ]
  }
];

const defaultState = {
  user: null, // Current logged in user
  users: [DEFAULT_ADMIN, ...DEMO_CUSTOMERS], // Registered users database
  cart: [], // { productId, qty }
  products: INITIAL_PRODUCTS.map((p, idx) => ({
    ...p,
    stock: p.stock || (15 - (idx % 8)),
    sku: p.sku || `EFX-${p.department ? p.department.slice(0, 3).toUpperCase() : 'ACC'}-${100 + p.id}`
  })),
  orders: INITIAL_ORDERS, // User orders
  cms: {
    heroText: "Experience the Future of Luxury Fashion",
    heroSubText: "Curated for the bold. Authentic. Timeless.",
    announcement: "Worldwide Shipping Available | Bespoke Nigerian Couture",
    contactPhone: "+234 800 000 0000",
    contactEmail: "concierge@efexluxury.com"
  }
};

const loadState = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const loaded = stored ? JSON.parse(stored) : defaultState;

  // Ensure products
  if (!loaded.products || loaded.products.length === 0) {
    loaded.products = defaultState.products;
  } else {
    loaded.products = loaded.products.map((p, idx) => ({
      ...p,
      stock: typeof p.stock === 'number' ? p.stock : (15 - (idx % 8)),
      sku: p.sku || `EFX-${p.department ? p.department.slice(0, 3).toUpperCase() : 'ACC'}-${100 + (p.id || idx)}`
    }));
  }

  // Ensure users list contains the guaranteed default admin
  if (!loaded.users || !Array.isArray(loaded.users) || loaded.users.length === 0) {
    loaded.users = [DEFAULT_ADMIN, ...DEMO_CUSTOMERS];
  } else {
    const adminIdx = loaded.users.findIndex(u => u.email && u.email.toLowerCase() === DEFAULT_ADMIN.email);
    if (adminIdx === -1) {
      loaded.users.unshift(DEFAULT_ADMIN);
    } else {
      loaded.users[adminIdx].password = DEFAULT_ADMIN.password;
      loaded.users[adminIdx].role = 'admin';
    }
  }

  // Ensure orders list has sample data if empty
  if (!loaded.orders || !Array.isArray(loaded.orders) || loaded.orders.length === 0) {
    loaded.orders = INITIAL_ORDERS;
  }

  // Ensure CMS
  if (!loaded.cms) {
    loaded.cms = defaultState.cms;
  }

  return loaded;
};

const saveState = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

// Reactive Store
const listeners = new Set();

const createStore = () => {
  const data = loadState();

  const handler = {
    set(target, prop, value) {
      target[prop] = value;
      saveState(data);
      notify();
      return true;
    },
    get(target, prop) {
      if (typeof target[prop] === 'object' && target[prop] !== null) {
        return new Proxy(target[prop], handler);
      }
      return target[prop];
    }
  };

  const proxy = new Proxy(data, handler);

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const notify = () => {
    listeners.forEach(cb => cb(proxy));
  };

  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      const newState = JSON.parse(e.newValue);
      Object.assign(data, newState);
      notify();
    }
  });

  return { state: proxy, subscribe };
};

export const { state, subscribe } = createStore();

// Actions
export const actions = {
  register: (email, password, phone, location) => {
    const cleanEmail = email.trim().toLowerCase();
    if (state.users.find(u => u.email.toLowerCase() === cleanEmail)) {
      throw new Error('An account with this email already exists.');
    }
    const newUser = { 
      email: cleanEmail, 
      password, 
      phone: phone || '', 
      location: location || '',
      name: cleanEmail.split('@')[0], 
      role: 'user' 
    };
    state.users.push(newUser);
    state.user = newUser; // Auto login
    saveState(state);
    listeners.forEach(cb => cb(state));
    return newUser;
  },

  login: (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Explicit Default Admin match check
    if (cleanEmail === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      let adminUser = state.users.find(u => u.email.toLowerCase() === DEFAULT_ADMIN.email);
      if (!adminUser) {
        adminUser = { ...DEFAULT_ADMIN };
        state.users.unshift(adminUser);
      } else {
        adminUser.role = 'admin';
        adminUser.password = DEFAULT_ADMIN.password;
      }
      state.user = adminUser;
      saveState(state);
      listeners.forEach(cb => cb(state));
      return adminUser;
    }

    const user = state.users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);
    if (!user) throw new Error('Invalid email or password. Please verify your credentials.');
    state.user = user;
    saveState(state);
    listeners.forEach(cb => cb(state));
    return user;
  },

  logout: () => {
    state.user = null;
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  addToCart: (product) => {
    const existing = state.cart.find(item => item.productId === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ productId: product.id, qty: 1, product });
    }
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  removeFromCart: (productId) => {
    state.cart = state.cart.filter(item => item.productId !== productId);
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  clearCart: () => {
    state.cart = [];
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  // Admin Actions
  addProduct: (product) => {
    const newProduct = {
      id: Date.now(),
      name: product.name,
      price: Number(product.price),
      category: product.category || 'Traditional Wear',
      department: product.department || 'Men',
      stock: Number(product.stock) || 12,
      sku: product.sku || `EFX-${(product.department || 'LUX').slice(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      image: product.image || '/images/products/nigerian_agbada_men_1768240346228.png',
      featured: Boolean(product.featured)
    };
    state.products.unshift(newProduct);
    saveState(state);
    listeners.forEach(cb => cb(state));
    return newProduct;
  },

  updateProduct: (id, updatedFields) => {
    const numId = Number(id);
    const index = state.products.findIndex(p => p.id === numId);
    if (index !== -1) {
      state.products[index] = { ...state.products[index], ...updatedFields };
      saveState(state);
      listeners.forEach(cb => cb(state));
      return state.products[index];
    }
  },

  deleteProduct: (id) => {
    const numId = Number(id);
    state.products = state.products.filter(p => p.id !== numId);
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  updateOrderStatus: (orderId, newStatus) => {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      saveState(state);
      listeners.forEach(cb => cb(state));
      return order;
    }
  },

  deleteOrder: (orderId) => {
    state.orders = state.orders.filter(o => o.id !== orderId);
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  toggleOrderStatus: (orderId) => {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
      const cycle = ['Pending', 'Processing', 'Shipped', 'Delivered'];
      const currentIndex = cycle.indexOf(order.status);
      order.status = cycle[(currentIndex + 1) % cycle.length] || 'Pending';
      saveState(state);
      listeners.forEach(cb => cb(state));
    }
  },

  updateCMS: (cmsData) => {
    state.cms = { ...state.cms, ...cmsData };
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  resetDemoData: () => {
    state.products = defaultState.products;
    state.orders = INITIAL_ORDERS;
    state.users = [DEFAULT_ADMIN, ...DEMO_CUSTOMERS];
    saveState(state);
    listeners.forEach(cb => cb(state));
  },

  checkout: () => {
    if (state.cart.length === 0) return;
    
    const totalNum = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: {
        name: state.user?.name || 'Valued Client',
        email: state.user?.email || 'client@efexluxury.com',
        phone: state.user?.phone || '+234 800 000 0000',
        address: state.user?.location || 'Lagos, Nigeria'
      },
      date: new Date().toISOString().split('T')[0],
      total: '₦' + totalNum.toLocaleString(),
      totalAmount: totalNum,
      status: 'Pending',
      items: state.cart.map(i => ({
        name: i.product.name,
        image: i.product.image,
        price: i.product.price,
        qty: i.qty
      }))
    };
    
    state.orders.unshift(newOrder); // Add to top
    state.cart = [];
    saveState(state);
    listeners.forEach(cb => cb(state));
    return newOrder;
  }
};
