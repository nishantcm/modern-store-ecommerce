export const CATEGORIES = [
  { name: "All", slug: "all", href: "/product/all" },
  { name: "Electronics", slug: "electronics", href: "/product/electronics" },
  { name: "Clothings", slug: "clothings", href: "/product/clothings" },
  { name: "Accessories", slug: "accessories", href: "/product/accessories" },
  { name: "Home", slug: "home", href: "/product/home" },
];

export const products = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life",
    price: 299.99,
    rating: 4,
    reviewCount: 6,
    inStock: true,
    image: "/product-images/product1.png",
    category: "electronics",
  },
  {
    id: 2,
    title: "Minimal Sneakers",
    description: "Everyday sneakers with breathable mesh and all-day comfort.",
    price: 119.0,
    rating: 5,
    reviewCount: 18,
    inStock: true,
    image: "/product-images/product11.png",
    category: "clothings",
  },
  {
    id: 3,
    title: "Classic Cotton T‑Shirt",
    description: "Soft, durable cotton tee with a modern fit.",
    price: 24.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product4.png",
    category: "clothings",
  },
  {
    id: 4,
    title: "Wool Winter Coat",
    description: "Elegent wool-blend coat perfect for cold weather.",
    price: 199.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product5.png",
    category: "clothings",
  },
  {
    id: 5,
    title: "Smart 4K TV",
    description: "65-inch OLED Smart TV with HDR and built-in streaming apps.",
    price: 1299.99,
    rating: 4,
    reviewCount: 6,
    inStock: true,
    image: "/product-images/product2.png",
    category: "electronics",
  },
  {
    id: 6,
    title: "Professional Camera",
    description: "Mirrorless digital camera with 4K video capabilities.",
    price: 899.99,
    rating: 4,
    reviewCount: 51,
    inStock: true,
    image: "/product-images/product3.png",
    category: "electronics",
  },
  {
    id: 7,
    title: "Denim Jacket",
    description: "Vintage-style denim jacket with modern fit.",
    price: 79.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product12.png",
    category: "clothings",
  },
  {
    id: 8,
    title: "Leather Watch",
    description: "Classic analog watch with genuine leather strap.",
    price: 149.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product6.png",
    category: "accessories",
  },
  {
    id: 9,
    title: "Designer Sunglasses",
    description: "UV-protected polarized sunglasses with premium frame.",
    price: 129.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product7.png",
    category: "accessories",
  },
  {
    id: 10,
    title: "Smart Coffee Maker",
    description: "WiFi-enabled coffee maker with app control and automatic brewing.",
    price: 199.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product8.png",
    category: "home",
  },
  {
    id: 11,
    title: "Air Purifier",
    description: "HEPA air purifier with air quality monitoring.",
    price: 249.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product9.png",
    category: "home",
  },
  {
    id: 12,
    title: "Robot Vacuum",
    description: "Smart robot vacuum with mapping and scheduling.",
    price: 399.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image: "/product-images/product10.png",
    category: "home",
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getCategoryName(slug) {
  return getCategoryBySlug(slug)?.name ?? slug;
}

export function getProductsByCategorySlug(slug) {
  if (!slug || slug === "all") return products;
  return products.filter((product) => product.category === slug);
}

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

export function getProductUrl(product) {
  const category = product.category ?? getProductById(product.id)?.category;
  if (!category) return "/product/all";
  return `/product/${category}/${product.id}`;
}

export function getActiveCategoryFromPath(pathname) {
  if (!pathname) return "All";

  const match = pathname.match(/^\/product\/([^/]+)/);
  if (!match) return "All";

  const slug = match[1];
  if (/^\d+$/.test(slug)) return "All";

  return getCategoryName(slug);
}
