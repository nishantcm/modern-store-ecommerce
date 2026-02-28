export default function SearchBar() {
  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Search products..."
        className="pl-10 border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <span className="absolute left-3 top-2 text-gray-400">
        <i className="fa-brands fa-sistrix text-black"></i>
      </span>
    </div>
  );
}