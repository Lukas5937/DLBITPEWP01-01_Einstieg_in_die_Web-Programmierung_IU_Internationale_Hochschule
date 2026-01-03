export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-semibold">Morning Grind</h1>
      <div className="font-body flex gap-8">
        <a href="#" className="text-gray-700 hover:text-black">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Catalogue
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Search
        </a>
      </div>
      <div className="font-body flex gap-6">
        <a href="#" className="text-gray-700 hover:text-black">
          Login
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Cart (0)
        </a>
      </div>
    </nav>
  );
}
