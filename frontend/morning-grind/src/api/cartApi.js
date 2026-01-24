import api from "./api";

export const getMyCart = async () => {
  const response = await api.get("/carts/me");
  return response.data;
};

export const addCartItem = async (productId, quantity) => {
  const response = await api.post("/cart-items", { productId, quantity });
  return response.data;
};

export const deleteCartItem = async (id) => {
  const response = await api.delete(`/cart-items/${id}`);
  return response.data;
};
