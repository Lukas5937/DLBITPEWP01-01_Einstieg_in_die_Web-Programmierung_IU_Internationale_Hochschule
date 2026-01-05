import { useState } from "react";
import BackButton from "../../components/BackButton";
import { cartData } from "../../dummy-data/dummy-data";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
  const [cartItems, setCartItems] = useState(cartData);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );

  const TAX_RATE = 0.19;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  function updateAmount(productId, newAmount) {
    if (newAmount < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, amount: newAmount } : item,
      ),
    );
  }

  function removeItem(productId) {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  }

  return (
    <div className="font-display min-h-screen bg-white">
      <section className="px-8 py-20">
        <BackButton />

        <h1 className="mb-12 text-5xl">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-700">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.productId}
                    product={item}
                    onUpdateAmount={updateAmount}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            <OrderSummary subtotal={subtotal} tax={tax} total={total} />
          </div>
        )}
      </section>
    </div>
  );
}
