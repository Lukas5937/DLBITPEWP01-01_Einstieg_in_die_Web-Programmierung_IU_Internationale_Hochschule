import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { CartContext } from "./CartContextConfig";
import {
  getMyCart,
  addCartItem as apiAddCartItem,
  deleteCartItem as apiDeleteCartItem,
} from "../api/cartApi";

export function CartProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadCart() {
    setLoading(true);
    try {
      const response = await getMyCart();
      setCart(response);
    } catch (err) {
      console.error("Error loading cart:", err);
      setCart(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      setCart(null);
      setLoading(false);
      return;
    }

    loadCart();
  }, [isAuthenticated]);

  async function addToCart(productId, quantity) {
    try {
      await apiAddCartItem(productId, quantity);
      await loadCart();
      console.log(cart);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  }

  async function removeFromCart(cartItemId) {
    try {
      await apiDeleteCartItem(cartItemId);
      await loadCart();
    } catch (err) {
      console.error("Error removing cart item:", err);
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, loading, addToCart, removeFromCart, loadCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
