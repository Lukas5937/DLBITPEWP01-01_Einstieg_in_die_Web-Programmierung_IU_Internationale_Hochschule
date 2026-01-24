import { productColorMap } from "../helpers/ui-helpers";

export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="flex h-full cursor-pointer flex-col rounded-2xl bg-white p-6 hover:bg-gray-50 sm:p-7 lg:p-8"
    >
      <h5
        className={`mb-5 flex-1 text-3xl leading-10 font-semibold tracking-wide italic sm:mb-6 sm:text-4xl sm:leading-[3.25rem] ${productColorMap[product.name]}`}
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
      <p className="text-xl sm:text-2xl">{product.price.toFixed(2)}€</p>
    </div>
  );
}
