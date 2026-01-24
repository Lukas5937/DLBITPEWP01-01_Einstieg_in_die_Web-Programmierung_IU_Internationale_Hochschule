import api from "./api";

export const checkout = async (cartId) => {
  const response = await api.post(`/orders/checkout/${cartId}`);
  return response.data;
};
