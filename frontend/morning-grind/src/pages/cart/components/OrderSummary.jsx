import { Link, useNavigate } from "react-router";
import Button from "../../../components/Button";
import { checkout } from "../../../api/orderApi";
import { useCart } from "../../../context/useCart";

export default function OrderSummary({ subtotal, tax, total, cartId }) {
  const navigate = useNavigate();
  const { loadCart } = useCart();

  async function handleCheckout() {
    try {
      const order = await checkout(cartId);
      console.log("Order created:", order);
      // Reload cart to reflect emptied items
      await loadCart();
      navigate("/order-confirmation", { state: { order } });
    } catch (err) {
      console.error("Checkout error:", err);
    }
  }

  return (
    <aside className="h-fit rounded-lg border border-gray-200 p-6 sm:p-8">
      <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
        Order Summary
      </h2>

      <div className="space-y-3 border-b border-gray-200 pb-5 sm:space-y-4 sm:pb-6">
        <div className="flex justify-between text-sm text-gray-700 sm:text-base">
          <span className="font-body">Subtotal</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 sm:text-base">
          <span className="font-body">Tax (19%)</span>
          <span>€{tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-5 mb-6 flex justify-between sm:mt-6 sm:mb-8">
        <span className="font-semibold text-gray-900">Total</span>
        <span className="text-xl font-bold sm:text-2xl">
          €{total.toFixed(2)}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <Button onClick={handleCheckout} className="w-full">
          Proceed to Checkout
        </Button>
        <Link
          to="/catalogue"
          className="font-body text-center text-sm text-gray-700 transition hover:text-black"
        >
          Continue Shopping
        </Link>
      </div>
    </aside>
  );
}
