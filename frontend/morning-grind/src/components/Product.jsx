export default function Product({ product }) {
  return (
    <div key={product.id} className="max-w-64">
      <h5
        className={`text-5xl leading-14 tracking-wide italic ${product.color} mb-6`}
      >
        {product.name.split(" ").map((word, index) => (
          <span key={index}>
            {word}
            <br />
          </span>
        ))}
      </h5>
      <p className="font-body mb-2 text-xs text-gray-400">
        Lorem ipsum dolor sit amet consectetur
      </p>
      <p className="text-2xl">{product.price}</p>
    </div>
  );
}
