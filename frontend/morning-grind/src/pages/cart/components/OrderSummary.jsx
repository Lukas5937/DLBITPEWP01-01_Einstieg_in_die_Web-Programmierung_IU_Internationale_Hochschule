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
    <aside className="h-fit rounded-lg border border-gray-200 p-8">
      <h2 className="mb-6 text-2xl font-semibold">Order Summary</h2>

      <div className="space-y-4 border-b border-gray-200 pb-6">
        <div className="flex justify-between text-gray-700">
          <span className="font-body">Subtotal</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span className="font-body">Tax (19%)</span>
          <span>€{tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 mb-8 flex justify-between">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-2xl font-bold">€{total.toFixed(2)}</span>
      </div>

      <div className="text-end">
        <Button onClick={handleCheckout}>Proceed to Checkout</Button>
        <Link
          to="/catalogue"
          className="font-body mt-2 block text-right text-sm text-gray-700 transition hover:text-black"
        >
          Continue Shopping
        </Link>
      </div>
    </aside>
  );
}
