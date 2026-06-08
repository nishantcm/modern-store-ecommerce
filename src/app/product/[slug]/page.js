import { notFound } from "next/navigation";
import ProductsListing from "@/components/products/ProductsListing";
import { getCategoryBySlug } from "@/data/products";

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <ProductsListing categorySlug={slug} title={category.name} />;
}
