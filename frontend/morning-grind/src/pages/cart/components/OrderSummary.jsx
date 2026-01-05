import { Link } from "react-router";
import Button from "../../../components/Button";

export default function OrderSummary({ subtotal, tax, total }) {
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
        <Button onClick={() => alert("Checkout not yet implemented")}>
          Proceed to Checkout
        </Button>
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
