export type MenuItem = {
  name: string
  description: string
  price: number
  tag?: 'Signature' | 'Vegetarian' | 'Spicy' | 'New'
}

export type MenuCategory = {
  id: string
  label: string
  italian: string
  blurb: string
  image: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'pasta',
    label: 'Pasta',
    italian: 'Fatta a mano',
    blurb: 'Rolled every morning, cut by hand, sauced to order.',
    image: '/images/dish-bolognese.png',
    items: [
      {
        name: 'Spaghetti Bolognese',
        description: 'Slow-braised beef ragù, San Marzano tomato, aged parmesan',
        price: 85,
        tag: 'Signature',
      },
      {
        name: 'Shrimp Spaghetti',
        description: 'Gulf shrimp, garlic confit, chili, lemon, parsley',
        price: 110,
      },
      {
        name: 'Lasagne al Forno',
        description: 'Seven layers, béchamel, oven-baked to a crisp edge',
        price: 95,
      },
      {
        name: "Penne all'Arrabbiata",
        description: 'Calabrian chili, garlic, basil, tomato passata',
        price: 75,
        tag: 'Spicy',
      },
      {
        name: 'Chicken Alfredo',
        description: 'Grilled chicken, cream, parmesan, cracked pepper',
        price: 105,
      },
      {
        name: 'Risotto ai Funghi',
        description: 'Carnaroli rice, porcini, thyme butter, grana',
        price: 98,
        tag: 'Vegetarian',
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    italian: 'Forno a legna',
    blurb: '48-hour dough, 90 seconds in the wood-fired oven.',
    image: '/images/dish-pizza.png',
    items: [
      {
        name: 'Margherita Classica',
        description: 'Fior di latte, basil, tomato, Sicilian olive oil',
        price: 70,
        tag: 'Vegetarian',
      },
      {
        name: 'Chicken BBQ',
        description: 'Smoked chicken, red onion, mozzarella, BBQ drizzle',
        price: 90,
      },
      {
        name: 'Quattro Stagioni',
        description: 'Artichoke, mushroom, olive, cured ham',
        price: 95,
      },
      {
        name: 'Ricotta & Pesto',
        description: 'Whipped ricotta, basil pesto, toasted pine nuts',
        price: 88,
        tag: 'Vegetarian',
      },
      {
        name: 'Calzone del Chef',
        description: 'Folded, filled with salami, ricotta and mozzarella',
        price: 92,
        tag: 'Signature',
      },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    italian: 'Insalate',
    blurb: 'Market greens, dressed simply and served cold.',
    image: '/images/dish-salad.png',
    items: [
      {
        name: 'Insalata Caesar',
        description: 'Romaine, anchovy dressing, focaccia croutons, grana',
        price: 55,
      },
      {
        name: 'Burrata & Peach',
        description: 'Puglian burrata, grilled peach, basil, aged balsamic',
        price: 65,
        tag: 'New',
      },
      {
        name: 'Caprese di Bufala',
        description: 'Buffalo mozzarella, heirloom tomato, oregano',
        price: 60,
        tag: 'Vegetarian',
      },
    ],
  },
  {
    id: 'dessert',
    label: 'Dessert',
    italian: 'Dolci',
    blurb: 'Finished in the kitchen, never from a freezer.',
    image: '/images/dish-tiramisu.png',
    items: [
      {
        name: 'Tiramisù della Casa',
        description: 'Mascarpone, espresso-soaked savoiardi, cocoa',
        price: 45,
        tag: 'Signature',
      },
      {
        name: 'Panna Cotta',
        description: 'Vanilla bean cream, wild berry coulis',
        price: 40,
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Ricotta cream, candied orange, pistachio crumb',
        price: 42,
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    italian: 'Bevande',
    blurb: 'Aperitivo hour runs from 18:00 to 20:00, every day.',
    image: '/images/dish-spritz.png',
    items: [
      {
        name: 'Aperol Spritz (0%)',
        description: 'Bitter orange, soda, blood orange wheel',
        price: 60,
      },
      {
        name: 'Virgin Mojito',
        description: 'Lime, mint, cane sugar, sparkling water',
        price: 35,
      },
      {
        name: 'Espresso',
        description: 'Single origin, pulled short',
        price: 20,
      },
      {
        name: 'Limonata Siciliana',
        description: 'Pressed lemon, basil, a pinch of sea salt',
        price: 30,
      },
    ],
  },
  {
    id: 'gelato',
    label: 'Gelato',
    italian: 'Gelateria',
    blurb: 'Churned daily. Ask for the flavour of the day.',
    image: '/images/dish-gelato.png',
    items: [
      {
        name: 'Pistacchio di Bronte',
        description: 'Sicilian pistachio, sea salt flake',
        price: 30,
        tag: 'Signature',
      },
      {
        name: 'Mint & Lemon',
        description: 'Garden mint, lemon zest, two scoops',
        price: 30,
      },
      {
        name: 'Stracciatella',
        description: 'Fior di latte with dark chocolate shards',
        price: 30,
      },
    ],
  },
]

export const featured = [
  {
    name: 'Shrimp Spaghetti',
    price: 110,
    note: 'Garlic, chili, lemon',
    image: '/images/hero-pasta.png',
  },
  {
    name: 'Margherita Classica',
    price: 70,
    note: '48-hour dough, wood fire',
    image: '/images/dish-pizza.png',
  },
  {
    name: 'Tiramisù della Casa',
    price: 45,
    note: 'Mascarpone, espresso, cocoa',
    image: '/images/dish-tiramisu.png',
  },
]

export const gallery = [
  {
    image: '/images/interior-1.png',
    caption: 'The main room at golden hour',
  },
  { image: '/images/interior-2.png', caption: 'Corner tables for two' },
  { image: '/images/dish-bolognese.png', caption: 'Ragù, thirty-six hours in' },
  { image: '/images/interior-3.png', caption: 'The pass, mid-service' },
]

export type Employee = {
  id: string
  firstName: string
  lastName: string
  role: string
  contract: 'Full-time' | 'Part-time' | 'Seasonal'
  start: string
  end: string
  status: 'Active' | 'On leave' | 'Ended'
}

export const employees: Employee[] = [
  {
    id: 'EMP-001',
    firstName: 'Marco',
    lastName: 'Ferrara',
    role: 'Head chef',
    contract: 'Full-time',
    start: '2021-03-01',
    end: '—',
    status: 'Active',
  },
  {
    id: 'EMP-002',
    firstName: 'Salma',
    lastName: 'Benali',
    role: 'Restaurant manager',
    contract: 'Full-time',
    start: '2020-09-14',
    end: '—',
    status: 'Active',
  },
  {
    id: 'EMP-003',
    firstName: 'Youssef',
    lastName: 'El Amrani',
    role: 'Cashier',
    contract: 'Part-time',
    start: '2023-06-05',
    end: '—',
    status: 'Active',
  },
  {
    id: 'EMP-004',
    firstName: 'Giulia',
    lastName: 'Rossi',
    role: 'Pastry chef',
    contract: 'Full-time',
    start: '2022-01-10',
    end: '—',
    status: 'On leave',
  },
  {
    id: 'EMP-005',
    firstName: 'Karim',
    lastName: 'Ouazzani',
    role: 'Delivery',
    contract: 'Part-time',
    start: '2024-02-19',
    end: '—',
    status: 'Active',
  },
  {
    id: 'EMP-006',
    firstName: 'Nadia',
    lastName: 'Cherkaoui',
    role: 'Stock manager',
    contract: 'Full-time',
    start: '2021-11-02',
    end: '—',
    status: 'Active',
  },
  {
    id: 'EMP-007',
    firstName: 'Luca',
    lastName: 'Moretti',
    role: 'Pizzaiolo',
    contract: 'Seasonal',
    start: '2025-05-01',
    end: '2025-09-30',
    status: 'Ended',
  },
  {
    id: 'EMP-008',
    firstName: 'Imane',
    lastName: 'Tazi',
    role: 'Waiter',
    contract: 'Part-time',
    start: '2024-10-08',
    end: '—',
    status: 'Active',
  },
]

export type Ingredient = {
  id: string
  name: string
  quantity: string
  supplier: string
  price: number
  expires: string
  level: 'ok' | 'low' | 'critical'
}

export const ingredients: Ingredient[] = [
  {
    id: 'ING-101',
    name: 'Semola di grano duro',
    quantity: '48 kg',
    supplier: 'Molino Rossi',
    price: 22,
    expires: '2026-11-04',
    level: 'ok',
  },
  {
    id: 'ING-102',
    name: 'San Marzano tomatoes',
    quantity: '36 tins',
    supplier: 'Casa Verde',
    price: 34,
    expires: '2027-02-18',
    level: 'ok',
  },
  {
    id: 'ING-103',
    name: 'Fior di latte',
    quantity: '9 kg',
    supplier: 'Latteria Sud',
    price: 78,
    expires: '2026-08-02',
    level: 'low',
  },
  {
    id: 'ING-104',
    name: 'Bronte pistachio paste',
    quantity: '2.5 kg',
    supplier: 'Dolce Sicilia',
    price: 240,
    expires: '2026-12-30',
    level: 'critical',
  },
  {
    id: 'ING-105',
    name: 'Gulf shrimp',
    quantity: '14 kg',
    supplier: 'Atlas Marine',
    price: 165,
    expires: '2026-07-29',
    level: 'low',
  },
  {
    id: 'ING-106',
    name: 'Mascarpone',
    quantity: '11 kg',
    supplier: 'Latteria Sud',
    price: 92,
    expires: '2026-08-11',
    level: 'ok',
  },
  {
    id: 'ING-107',
    name: 'Extra virgin olive oil',
    quantity: '25 L',
    supplier: 'Oliveto Nord',
    price: 130,
    expires: '2027-05-20',
    level: 'ok',
  },
  {
    id: 'ING-108',
    name: 'Basil, fresh',
    quantity: '1.2 kg',
    supplier: 'Ferme Chaouia',
    price: 18,
    expires: '2026-07-28',
    level: 'critical',
  },
]

export type MenuRow = {
  id: string
  name: string
  category: string
  description: string
  price: number
  available: boolean
}

export const menuRows: MenuRow[] = [
  {
    id: 'MNU-01',
    name: 'Spaghetti Bolognese',
    category: 'Pasta',
    description: 'Slow-braised beef ragù, San Marzano tomato',
    price: 85,
    available: true,
  },
  {
    id: 'MNU-02',
    name: 'Shrimp Spaghetti',
    category: 'Pasta',
    description: 'Gulf shrimp, garlic confit, chili, lemon',
    price: 110,
    available: true,
  },
  {
    id: 'MNU-03',
    name: 'Margherita Classica',
    category: 'Pizza',
    description: 'Fior di latte, basil, tomato, olive oil',
    price: 70,
    available: true,
  },
  {
    id: 'MNU-04',
    name: 'Calzone del Chef',
    category: 'Pizza',
    description: 'Salami, ricotta, mozzarella, folded',
    price: 92,
    available: false,
  },
  {
    id: 'MNU-05',
    name: 'Burrata & Peach',
    category: 'Salads',
    description: 'Puglian burrata, grilled peach, basil',
    price: 65,
    available: true,
  },
  {
    id: 'MNU-06',
    name: 'Tiramisù della Casa',
    category: 'Dessert',
    description: 'Mascarpone, espresso savoiardi, cocoa',
    price: 45,
    available: true,
  },
  {
    id: 'MNU-07',
    name: 'Pistacchio di Bronte',
    category: 'Gelato',
    description: 'Sicilian pistachio, sea salt flake',
    price: 30,
    available: false,
  },
  {
    id: 'MNU-08',
    name: 'Aperol Spritz (0%)',
    category: 'Drinks',
    description: 'Bitter orange, soda, blood orange',
    price: 60,
    available: true,
  },
]

export type Reservation = {
  id: string
  guest: string
  phone: string
  covers: number
  date: string
  time: string
  table: string
  note?: string
  status: 'Pending' | 'Confirmed' | 'Cancelled'
}

export const reservations: Reservation[] = [
  {
    id: 'RES-4417',
    guest: 'Amine Bouzid',
    phone: '+212 6 61 44 21 09',
    covers: 4,
    date: 'Tonight',
    time: '20:30',
    table: 'T12 · window',
    note: 'Birthday — candle on the tiramisù',
    status: 'Pending',
  },
  {
    id: 'RES-4418',
    guest: 'Chiara Lombardi',
    phone: '+212 6 70 18 55 32',
    covers: 2,
    date: 'Tonight',
    time: '21:00',
    table: 'T04 · corner',
    status: 'Pending',
  },
  {
    id: 'RES-4419',
    guest: 'Hamza Rifai',
    phone: '+212 6 12 90 77 41',
    covers: 6,
    date: 'Tomorrow',
    time: '13:15',
    table: 'T20 · terrace',
    note: 'One high chair',
    status: 'Confirmed',
  },
]

export type Order = {
  id: string
  customer: string
  address: string
  phone: string
  items: { qty: number; name: string }[]
  total: number
  payment: 'Cash on delivery' | 'Card' | 'Paid online'
  placed: string
  status: 'On the way' | 'Delivered' | 'Canceled'
}

export const orders: Order[] = [
  {
    id: 'ORD-2091',
    customer: 'Leila Mansouri',
    address: '14 Rue des Oliviers, Apt 3B — Gauthier',
    phone: '+212 6 55 03 88 12',
    items: [
      { qty: 1, name: 'Shrimp Spaghetti' },
      { qty: 2, name: 'Margherita Classica' },
      { qty: 2, name: 'Virgin Mojito' },
    ],
    total: 320,
    payment: 'Cash on delivery',
    placed: '19:42',
    status: 'On the way',
  },
  {
    id: 'ORD-2092',
    customer: 'Omar Sbai',
    address: '2 Boulevard Zerktouni — Maarif',
    phone: '+212 6 44 71 20 65',
    items: [
      { qty: 1, name: 'Lasagne al Forno' },
      { qty: 1, name: 'Tiramisù della Casa' },
    ],
    total: 140,
    payment: 'Paid online',
    placed: '19:55',
    status: 'On the way',
  },
]

export const dashboardStats = [
  { label: 'Covers tonight', value: '86', delta: '+12 vs. last Friday' },
  { label: 'Open orders', value: '7', delta: '2 out for delivery' },
  { label: 'Low stock items', value: '4', delta: 'Restock by Monday' },
  { label: 'Staff on shift', value: '11', delta: '1 on leave' },
]
