import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategorySlug } from "@/data/products";

export default function ProductsListing({ categorySlug = "all", title = "All" }) {
  const filteredProducts = getProductsByCategorySlug(categorySlug);

  return (
    <div className="p-5">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-sm text-gray-500">No products found in this category.</p>
      ) : (
        <ProductGrid>
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductGrid>
      )}
    </div>
  );
}
