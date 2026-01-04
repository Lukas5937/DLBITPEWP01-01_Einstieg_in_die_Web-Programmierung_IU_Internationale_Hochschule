import "./App.css";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
