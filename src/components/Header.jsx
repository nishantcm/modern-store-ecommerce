import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-12 gap-2 justify-center bg-white-500 text-white p-6 rounded-lg">
        <div className="col-span-3 gap-2 flex justify-center">
          <div className="flex items-center bg-white-900 hover:bg-gray-100 text-gray-600 rounded-lg p-2 transition duration-300">
            <i className="fa-solid fa-bars fa-xl text-black"></i>
          </div>
          <div className="flex items-end">
            <h1 className="text-black text-[28px] font-medium pr-4">Modern Store</h1> 
          </div>
        </div>
        <div className="col-span-6 flex">
          <div className="w-150">
            <SearchBar />
          </div>
        </div>
        <div className="col-span-3 flex justify-center gap-2">
          <div className="bg-white-900 hover:bg-gray-100 text-gray-600 rounded-lg p-2 transition duration-300 flex items-center">
            <i className="fa-solid fa-heart fa-xl"></i>
          </div>
          <div className="bg-white-900 hover:bg-gray-100 text-gray-600 rounded-lg p-2 transition duration-300 flex items-center">
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
          </div>
          <div className="">
            <button type="submit" className="bg-white-900 hover:bg-gray-100 text-gray-600 rounded-lg p-2 px-3 transition duration-300 text-[14px] font-medium">Sign In</button>
          </div>
          <div className="">
            <button type="submit" className="bg-blue-800 hover:bg-blue-700 transiton duration-200 rounded-lg p-2 px-3 text-[14px] font-medium">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}