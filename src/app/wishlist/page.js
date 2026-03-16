import WishlistItem from "@/components/wishlist/WishlistItem";

export default function WishlistPage() {

  const wishlist = [];

  return (
    <div>
      <div className="">
        <button className="text-blue-600 p-2 rounded-md hover:bg-blue-100 transition">
          <i className="fa-solid fa-arrow-left text-blue-600 mx-2"></i>
          Continue Shopping
        </button>
      </div>
      <div className="flex justify-center">
        <div className="p-6 ">
          <div className="flex justify-center items-center pb-10">
            <p className="rounded-full w-20 h-20 bg-gray-100 flex items-center justify-center">
              <i className="fa-regular fa-heart fa-xl"></i>
            </p>
          </div>

          <h1 className="text-2xl font-bold pb-4">Your Wishlist is Empty</h1>
          <p className ="text-center pb-10">Save items you love for later!</p>
          <div className="flex items-center justify-center">
            <button className="bg-blue-800 p-2 rounded-md hover:bg-blue-700 text-white text-sm font-bold">Start Shopping</button>
          </div>
          <div className="mt-6 space-y-4">
            {wishlist.map((item) => (
              <WishlistItem key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
}