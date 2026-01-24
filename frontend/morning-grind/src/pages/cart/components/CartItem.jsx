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
      className="flex gap-6 border-b border-gray-200 pb-6"
    >
      <div className="h-24 w-24">
        <ProductImagePlaceholder />
      </div>

      <div className="flex flex-1 justify-between">
        <Link to={`/catalogue/${product.productId}`}>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">
            {product.productName}
          </h3>
          <p className="font-body text-sm text-gray-500">
            {product.category.name}
          </p>
          <p className="font-body text-sm text-gray-500">
            {product.origin}, {product.processing}
          </p>
        </Link>

        <div className="flex items-center gap-4">
          <div className="ml-auto text-right">
            <div className="flex gap-8">
              <AmountSelector
                amount={product.quantity}
                changeAmount={handleAmountChange}
              />
              <div>
                <p className="font-semibold text-gray-900">
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
      </div>
    </article>
  );
}
