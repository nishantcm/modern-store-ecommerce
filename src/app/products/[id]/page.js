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
  }
];

function formatUSD(amount) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  } catch {
    return `$${Number(amount).toFixed(2)}`;
  }
}

export default function ProductDetail({ params }) {
  const idParam = params?.id;
  const productId = Number(idParam);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-2 text-sm text-gray-600">
          We couldn&apos;t find a product with id <span className="font-mono">{String(idParam)}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-[#f3df55] ring-1 ring-black/5">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-8"
          />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.title}
          </h1>

          <div className="mt-3 text-2xl font-extrabold text-gray-900">
            {formatUSD(product.price)}
          </div>

          <div className="mt-2 text-sm font-medium text-emerald-700">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

