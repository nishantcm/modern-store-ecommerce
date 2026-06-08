import { redirect } from "next/navigation";

export default async function LegacyCategoryProductPage({ params }) {
  const { slug, id } = await params;
  redirect(`/product/${slug}/${id}`);
}
