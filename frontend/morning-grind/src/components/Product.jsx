import { productColorMap } from "../helpers/ui-helpers";

export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="flex h-full max-w-64 cursor-pointer flex-col rounded-2xl bg-gray-50 p-8 hover:bg-gray-100"
    >
      <h5
        className={`flex-1 text-5xl leading-14 font-semibold tracking-wide italic ${productColorMap[product.id]} mb-6`}
      >
        {product.name.split(" ").map((word, index) => (
          <span key={index}>
            {word}
            <br />
          </span>
        ))}
      </h5>
      <p className="font-body mb-2 text-xs text-gray-400">
        {product.info.origin}
      </p>
      <p className="font-body mb-2 text-xs text-gray-400">
        {product.info.roastLevel} Roast, {product.info.processing}
      </p>

      <p className="font-body mb-2 text-xs text-gray-400">
        {product.info.flavorNotes.join(", ")}
      </p>
      <p className="text-2xl">{product.price}€</p>
    </div>
  );
}
