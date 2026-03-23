import CartItem from "@/components/cart/CartItem";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";


export default function CartPage() {

  const cart = [];

  return (
    <div>
      <div className="">
        <button className="text-blue-600 p-2 rounded-md hover:bg-blue-100 transition">
          <i className="fa-solid fa-arrow-left text-blue-600 mx-2"></i>
          Continue Shopping
        </button>
      </div>
      <h1 className="font-extrabold text-3xl pt-5">Shopping Cart</h1>
      <div className="rounded-xl px-3 py-5 border border-gray-200 mt-3">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center justify-center">
              <FaRegHeart className="text-red-600 text-lg me-2" />
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Wishlist (0 items)</h3>
              <p className="text-sm font-light">You have 0 item saved for later</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-blue-600 p-2 rounded-md hover:bg-blue-100 transition text-sm font-semibold me-3">View All</button>
            <button className="bg-blue-800 p-2 rounded-md hover:bg-blue-700 text-white text-sm font-bold flex"><IoCartSharp className="text-xl me-2" /> Add All to Cart</button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-2">
        <div className="basis-4/4 rounded-xl px-3 py-5 border border-gray-200 mt-3 h-24">
          <h3 className="text-2xl font-bold pb-3">Cart Items (0)</h3>
        </div>
        <div className="basis-2/4 rounded-xl px-3 py-5 border border-gray-200 mt-3">
          <h3 className="text-2xl font-bold">Ordern Summary</h3>
          <hr className="mt-8"></hr>
          <p className="text-lg py-2 flex justify-between">Subtotal <span>$0.00</span></p>
          <p className="text-lg py-2 flex justify-between">Tax <span>$0.00</span></p>
          <hr className="mt-0"></hr>
          <p className="text-lg py-2 font-bold flex justify-between">Total <span>$0.00</span></p>
          
          <button className="mt-6 mb-3 bg-blue-800 p-2 rounded-md hover:bg-blue-700 text-white text-sm font-bold w-full items-center"> Proceed To Checkout</button>
        </div>
      </div>
      <div className="flex flex-wrap"></div>
      <div className="flex justify-center">
        <div className="p-6 ">
          
          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <CartItem key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}