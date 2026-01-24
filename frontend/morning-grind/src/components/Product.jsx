import { productColorMap } from "../helpers/ui-helpers";

export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="flex h-full cursor-pointer flex-col rounded-2xl bg-white p-8 hover:bg-gray-50"
    >
      <h5
        className={`flex-1 text-4xl leading-12 font-semibold tracking-wide italic ${productColorMap[product.name]} mb-6`}
      >
        {product.name.split(" ").map((word, index) => (
          <span key={index}>
            {word}
            <br />
          </span>
        ))}
      </h5>
      <p className="font-body mb-0.5 text-xs text-gray-500">
        {product.details.origin}
      </p>
      <p className="font-body mb-0.5 text-xs text-gray-400">
        {product.details.roastLevel} Roast, {product.details.processing}
      </p>

      <p className="font-body mb-0.5 text-xs font-semibold text-gray-400">
        {product.details.flavorNotes.join(", ")}
      </p>
      <p className="text-2xl">{product.price.toFixed(2)}€</p>
    </div>
  );
}
