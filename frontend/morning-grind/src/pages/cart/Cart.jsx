import BackButton from "../../components/BackButton";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import { useCart } from "../../context/useCart";

export default function Cart() {
  const { cart, loading, addToCart, removeFromCart } = useCart();

  if (loading) {
    return (
      <div className="font-display min-h-screen bg-white">
        <section className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
          <BackButton />
          <p className="text-base text-gray-700 sm:text-lg">Loading cart...</p>
        </section>
      </div>
    );
  }

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="font-display min-h-screen bg-white">
        <section className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
          <BackButton />
          <h1 className="mb-8 text-3xl sm:mb-12 sm:text-4xl lg:text-5xl">
            Your Cart
          </h1>
          <div className="py-16 text-center sm:py-20">
            <p className="text-base text-gray-700 sm:text-lg">
              Your cart is empty
            </p>
          </div>
        </section>
      </div>
    );
  }

  const subtotal = cart.items
    ? cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  const TAX_RATE = 0.19;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  function updateAmount(productId, newAmount) {
    if (newAmount < 1) return;
    addToCart(productId, newAmount);
  }

  function removeItem(productId) {
    removeFromCart(productId);
  }

  return (
    <div className="font-display min-h-screen bg-white">
      <section className="px-8 py-20">
        <BackButton />

        <h1 className="mb-12 text-5xl">Your Cart</h1>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.items.map((item) => (
                <CartItem
                  key={item.productId}
                  product={item}
                  onUpdateAmount={updateAmount}
                  onRemove={removeItem}
                />
              ))}
            </div>
          </div>

          <OrderSummary
            subtotal={subtotal}
            tax={tax}
            total={total}
            cartId={cart.cartId}
          />
        </div>
      </section>
    </div>
  );
}
