export const categories = [
  {
    id: 1,
    name: "Espresso",
  },
  {
    id: 2,
    name: "Filter",
  },
  {
    id: 3,
    name: "Decaf",
  },
  {
    id: 4,
    name: "Specials",
  },
];

const productInfo = {
  origin: "Ethiopia",
  roastLevel: "Medium",
  flavorNotes: ["Chocolate", "Citrus", "Floral"],
  processing: "Washed",
  size: 500, // in grams
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const products = [
  {
    id: 1,
    name: "Single Shot Coffee",
    price: 3.0,
    isOffer: true,
    info: productInfo,
    category: "Espresso",
  },
  {
    id: 2,
    name: "Double Shot",
    price: 4.0,
    isOffer: false,
    info: productInfo,
    category: "Espresso",
  },
  {
    id: 3,
    name: "Long Black",
    price: 5.0,
    isOffer: false,
    info: productInfo,
    category: "Espresso",
  },
  {
    id: 4,
    name: "Ristretto",
    price: 3.5,
    isOffer: false,
    info: productInfo,
    category: "Espresso",
  },

  {
    id: 5,
    name: "Drip Coffee",
    price: 4.0,
    isOffer: false,
    info: productInfo,
    category: "Filter",
  },
  {
    id: 6,
    name: "Pour Over",
    price: 5.0,
    isOffer: true,
    info: productInfo,
    category: "Filter",
  },
  {
    id: 7,
    name: "French Press",
    price: 6.0,
    isOffer: false,
    info: productInfo,
    category: "Filter",
  },
  {
    id: 8,
    name: "Aeropress",
    price: 5.5,
    isOffer: false,
    info: productInfo,
    category: "Filter",
  },

  {
    id: 9,
    name: "Decaf Espresso",
    price: 3.5,
    isOffer: false,
    info: productInfo,
    category: "Decaf",
  },
  {
    id: 10,
    name: "Decaf Filter",
    price: 4.5,
    isOffer: false,
    info: productInfo,
    category: "Decaf",
  },
  {
    id: 11,
    name: "Decaf Latte",
    price: 5.5,
    isOffer: true,
    info: productInfo,
    category: "Decaf",
  },
  {
    id: 12,
    name: "Decaf Cappuccino",
    price: 5.5,
    isOffer: false,
    info: productInfo,
    category: "Decaf",
  },

  {
    id: 13,
    name: "Cold Brew",
    price: 5.0,
    isOffer: false,
    info: productInfo,
    category: "Specials",
  },
  {
    id: 14,
    name: "Flat White",
    price: 6.0,
    isOffer: false,
    info: productInfo,
    category: "Specials",
  },
  {
    id: 15,
    name: "Cortado",
    price: 4.5,
    isOffer: true,
    info: productInfo,
    category: "Specials",
  },
  {
    id: 16,
    name: "Macchiato",
    price: 5.0,
    isOffer: false,
    info: productInfo,
    category: "Specials",
  },
];
