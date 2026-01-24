import { Link } from "react-router";
import ProductImagePlaceholder from "../../../components/ProductImagePlaceholder";
import AmountSelector from "../../../components/AmountSelector";

export default function CartItem({ product, onUpdateAmount, onRemove }) {
  function handleAmountChange(newAmount) {
    onUpdateAmount(product.productId, newAmount);
  }

  function handleRemoveItem() {
    onRemove(product.id);
  }

  return (
    <article
      key={product.productId}
      className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:gap-6"
    >
      <div className="h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24">
        <ProductImagePlaceholder />
      </div>

      <div className="flex flex-1 flex-col justify-between sm:flex-row">
        <Link to={`/catalogue/${product.productId}`} className="flex-1">
          <h3 className="mb-1 text-base font-semibold text-gray-900 sm:text-lg">
            {product.productName}
          </h3>
          <p className="font-body text-xs text-gray-500 sm:text-sm">
            {product.category.name}
          </p>
          <p className="font-body text-xs text-gray-500 sm:text-sm">
            {product.origin}, {product.processing}
          </p>
        </Link>

        <div className="flex items-center justify-between gap-3 sm:flex-col sm:justify-center sm:gap-4 sm:text-right">
          <div className="mt-6 flex gap-3 sm:mt-0 sm:gap-4">
            <AmountSelector
              amount={product.quantity}
              changeAmount={handleAmountChange}
            />
            <div>
              <p className="text-base font-semibold text-gray-900 sm:text-base">
                €
                {product.itemTotal
                  ? product.itemTotal.toFixed(2)
                  : (product.price * product.quantity).toFixed(2)}
              </p>
              <button
                onClick={handleRemoveItem}
                className="font-body cursor-pointer text-xs text-gray-500 transition hover:text-rose-700"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
