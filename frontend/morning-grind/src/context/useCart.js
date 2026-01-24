import { useContext } from "react";
import { CartContext } from "./CartContextConfig";

export function useCart() {
  return useContext(CartContext);
}
