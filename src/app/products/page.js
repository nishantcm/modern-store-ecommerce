import Link from "next/link";
import { products } from "./[id]/page";

function RatingStars({ rating = 0 }) {
  const fullStars = Math.max(0, Math.min(5, Math.floor(rating)));
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({ length: fullStars }).map((_, idx) => (
        <i key={`full-${idx}`} className="fa-solid fa-star text-[13px] text-amber-400" />
      ))}
      {Array.from({ length: emptyStars }).map((_, idx) => (
        <i key={`empty-${idx}`} className="fa-solid fa-star text-[13px] text-gray-300" />
      ))}
    </div>
  );
}

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

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full bg-[#f3df55]">
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-xl bg-white/90 shadow-sm ring-1 ring-black/5 transition hover:bg-white"
        >
          <i className="fa-regular fa-heart text-gray-600" />
        </button>

        <Link
          href={`/products/${product.id}`}
          className="block h-full w-full"
          aria-label={`View ${product.title}`}
        >
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-[1.02]"
          />
        </Link>
      </div>

      <div className="p-4">
        <Link href={`/products/${product.id}`} className="block">
          <h2 className="line-clamp-2 text-[15px] font-semibold text-gray-900">
            {product.title}
          </h2>
        </Link>
        <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-gray-500">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <RatingStars rating={product.rating} />
          <span className="text-[12px] text-gray-400">({product.reviewCount})</span>
        </div>

        <div className="mt-2 text-[13px] font-medium text-emerald-600">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-[22px] font-extrabold tracking-tight text-gray-900">
            {formatUSD(product.price)}
          </div>

          <button
            type="button"
            disabled={!product.inStock}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-800 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            <i className="fa-solid fa-cart-shopping text-[13px]" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="p-5">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

