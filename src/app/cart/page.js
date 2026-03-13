import CartItem from "@/components/cart/CartItem";

export default function CartPage() {

  const cart = [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      <div className="mt-6 space-y-4">
        {cart.map((item) => (
          <CartItem key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}