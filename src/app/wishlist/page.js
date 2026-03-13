import WishlistItem from "@/components/wishlist/WishlistItem";

export default function WishlistPage() {

  const wishlist = [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Wishlist</h1>

      <div className="mt-6 space-y-4">
        {wishlist.map((item) => (
          <WishlistItem key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}