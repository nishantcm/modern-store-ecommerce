import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  getCategoryBySlug,
  getCategoryName,
  getProductById,
  getProductUrl,
} from "@/data/products";

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

export default async function ProductDetailPage({ params }) {
  const { slug, id } = await params;
  const category = getCategoryBySlug(slug);
  const product = getProductById(id);

  if (!category || category.slug === "all") {
    notFound();
  }

  if (!product) {
    notFound();
  }

  if (product.category !== slug) {
    redirect(getProductUrl(product));
  }

  const categoryName = getCategoryName(slug);

  return (
    <div className="p-5">
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/product/all" className="hover:text-gray-700">
          All
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/product/${slug}`} className="hover:text-gray-700">
          {categoryName}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.title}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-[#f3df55] ring-1 ring-black/5">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-8"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-800">
            {categoryName}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900">
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
