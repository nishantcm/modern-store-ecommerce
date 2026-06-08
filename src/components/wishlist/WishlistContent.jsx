"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import WishlistItem from "./WishlistItem";

export default function WishlistContent() {
  const { wishlist, clearWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 p-2 rounded-md hover:bg-blue-100 transition"
          >
            <i className="fa-solid fa-arrow-left text-blue-600 mx-2" />
            Continue Shopping
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="p-6">
            <div className="flex justify-center items-center pb-10">
              <p className="rounded-full w-20 h-20 bg-gray-100 flex items-center justify-center">
                <i className="fa-regular fa-heart fa-xl" />
              </p>
            </div>

            <h1 className="text-2xl font-bold pb-4 text-center">Your Wishlist is Empty</h1>
            <p className="text-center pb-10">Save items you love for later!</p>
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="bg-blue-800 p-2 rounded-md hover:bg-blue-700 text-white text-sm font-bold"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="mb-5">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 p-2 rounded-md hover:bg-blue-100 transition"
        >
          <i className="fa-solid fa-arrow-left text-blue-600 mx-2" />
          Continue Shopping
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-5">
        Your Wishlist ({wishlist.length} {wishlist.length === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {wishlist.map((item) => (
          <WishlistItem key={item.id} product={item} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={clearWishlist}
          className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-50"
        >
          <i className="fa-solid fa-trash" />
          Clear Wishlist
        </button>
      </div>
    </div>
  );
}
