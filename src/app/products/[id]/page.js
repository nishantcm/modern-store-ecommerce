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
    image:
      "https://images.unsplash.com/photo-1518441902117-f0a8a1f43489?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Minimal Sneakers",
    description: "Everyday sneakers with breathable mesh and all-day comfort.",
    price: 119.0,
    rating: 5,
    reviewCount: 18,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1528701800489-20be3c20bfe3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Classic Cotton T‑Shirt",
    description: "Soft, durable cotton tee with a modern fit.",
    price: 24.99,
    rating: 4,
    reviewCount: 41,
    inStock: false,
    image:
      "https://images.unsplash.com/photo-1520975682031-a92e1e3c0a7f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Wool Winter Coat",
    description: "Elegent wool-blend coat perfect for cold weather.",
    price: 199.99,
    rating: 4,
    reviewCount: 41,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1520975682031-a92e1e3c0a7f?auto=format&fit=crop&w=800&q=80",
  },
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

