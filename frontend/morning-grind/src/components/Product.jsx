export default function Product({ product }) {
  const productColorMap = {
    1: "text-cyan-950",
    2: "text-cyan-900",
    3: "text-cyan-800",
    4: "text-cyan-700",

    5: "text-orange-950",
    6: "text-orange-900",
    7: "text-orange-800",
    8: "text-orange-700",

    9: "text-indigo-950",
    10: "text-indigo-900",
    11: "text-indigo-800",
    12: "text-indigo-700",

    13: "text-rose-950",
    14: "text-rose-900",
    15: "text-rose-800",
    16: "text-rose-700",
  };

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
