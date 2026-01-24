import "./App.css";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

function App() {
  const isAuthPage = useLocation().pathname.includes("/auth");

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ScrollRestoration />
          <Navbar />
          <main>
            <Outlet />
          </main>
          {!isAuthPage && <Newsletter />}
          <Footer />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
