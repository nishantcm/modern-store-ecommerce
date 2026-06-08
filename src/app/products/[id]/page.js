import { redirect } from "next/navigation";
import { getProductById, getProductUrl } from "@/data/products";

export default async function LegacyProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    redirect("/product/all");
  }

  redirect(getProductUrl(product));
}
