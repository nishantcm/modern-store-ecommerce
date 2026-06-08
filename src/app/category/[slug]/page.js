import { redirect } from "next/navigation";

export default async function LegacyCategoryPage({ params }) {
  const { slug } = await params;
  redirect(`/product/${slug}`);
}
