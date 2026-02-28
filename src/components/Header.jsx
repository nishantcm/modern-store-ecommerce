import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="flex bg-white-500 text-white p-6 rounded-lg">
        <div className="flex items-center mr-4">
          <i className="fa-solid fa-bars fa-xl text-black"></i>
        </div>
        <div className="flex items-end">
          <h1 className="text-black text-[28px] font-medium pr-4">Modern Store</h1> 
        </div>
       
        <SearchBar />
      </div>
    </header>
  );
}