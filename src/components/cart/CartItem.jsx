"use client";

export default function CartItem({ product }) {
  return (
    <div className="flex items-center justify-between border p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover"
        />

        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-500">${product.price}</p>
        </div>
      </div>

      <button className="text-red-500 hover:text-red-700">
        Remove
      </button>
    </div>
  );
}