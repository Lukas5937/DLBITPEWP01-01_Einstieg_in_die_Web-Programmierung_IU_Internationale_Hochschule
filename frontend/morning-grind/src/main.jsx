import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import Catalogue from "./pages/catalogue/Catalogue.jsx";
import ProductDetail from "./pages/product-detail/ProductDetail.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Auth from "./pages/auth/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "catalogue",
        element: <Catalogue />,
      },
      { path: "catalogue/:productId", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "auth", element: <Auth /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
