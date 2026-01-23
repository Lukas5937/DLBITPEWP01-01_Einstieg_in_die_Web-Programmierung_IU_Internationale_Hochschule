import "./App.css";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthContext";

function App() {
  const isAuthPage = useLocation().pathname.includes("/auth");

  return (
    <>
      <AuthProvider>
        <ScrollRestoration />
        <Navbar />
        <main>
          <Outlet />
        </main>
        {!isAuthPage && <Newsletter />}
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
