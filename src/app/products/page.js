import ProductCard from "@/components/products/ProductCard";
import { products } from "./[id]/page";

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
