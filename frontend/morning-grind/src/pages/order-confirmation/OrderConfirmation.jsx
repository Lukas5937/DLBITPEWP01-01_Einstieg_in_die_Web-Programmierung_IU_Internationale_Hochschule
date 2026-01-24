import { Link, useLocation } from "react-router";
import BackButton from "../../components/BackButton";

export default function OrderConfirmation() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="min-h-screen bg-white">
        <section className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-xl font-semibold sm:text-2xl">
              No order found
            </h1>
            <Link
              to="/catalogue"
              className="font-body inline-block w-full max-w-xs bg-black px-8 py-3 font-semibold text-white uppercase transition hover:bg-gray-800 sm:w-auto"
            >
              Back to Catalogue
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-4 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="mb-2 text-3xl font-semibold sm:text-4xl">
              Order Confirmed
            </h1>
            <p className="font-body text-sm text-gray-600 sm:text-base">
              Thank you for your order. We'll send you a confirmation email
              shortly.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-5 sm:p-6">
            <h2 className="mb-3 text-lg font-semibold sm:mb-2 sm:text-xl">
              Order Details
            </h2>
            <div className="font-body space-y-2 text-xs text-gray-600 sm:text-sm">
              <p>Order ID: {order.id}</p>
              <p>Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>Status: {order.status}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/catalogue"
              className="font-body inline-block w-full max-w-xs bg-black px-8 py-3 font-semibold text-white uppercase transition hover:bg-gray-800 sm:w-auto"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
