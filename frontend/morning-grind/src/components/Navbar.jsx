import { Link } from "react-router";
import { useAuth } from "../context/useAuth";
import { useCart } from "../context/useCart";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  console.log("Navbar user:", user);

  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <Link to="/">
        <h1 className="font-display text-2xl font-semibold">Morning Grind</h1>
      </Link>

      <div className="font-body flex gap-8">
        <Link to="/" className="text-gray-700 hover:text-black">
          Home
        </Link>
        <Link to="/catalogue" className="text-gray-700 hover:text-black">
          Catalogue
        </Link>
        <Link to="/" className="text-gray-700 hover:text-black">
          Search
        </Link>
      </div>

      <div className="font-body flex gap-6">
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
    </nav>
  );
}
