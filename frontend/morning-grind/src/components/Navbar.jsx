import { Link } from "react-router";
import { useAuth } from "../context/useAuth";
import { useCart } from "../context/useCart";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="bg-white px-6 py-4 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="font-display text-2xl font-semibold">
              Morning Grind
            </h1>
          </Link>
        </div>

        <div className="font-body flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/catalogue" className="text-gray-700 hover:text-black">
            Catalogue
          </Link>
        </div>

        <div className="font-body flex flex-wrap items-center justify-center gap-4 sm:justify-end sm:gap-6">
          {!user ? (
            <Link to="/auth" className="text-gray-700 hover:text-black">
              Login
            </Link>
          ) : (
            <button onClick={logout} className="text-gray-700 hover:text-black">
              Logout
            </button>
          )}
          {user && (
            <Link to="/cart" className="text-gray-700 hover:text-black">
              Cart ({cart && cart.items ? cart.items.length : 0})
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
