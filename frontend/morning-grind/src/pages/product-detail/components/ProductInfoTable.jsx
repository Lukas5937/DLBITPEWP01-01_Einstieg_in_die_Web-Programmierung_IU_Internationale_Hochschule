export default function ProductInfoTable({
  origin,
  roastLevel,
  processing,
  size,
}) {
  return (
    <section className="mb-12 grid grid-cols-2 gap-6 border-y border-gray-200 py-8 md:grid-cols-4">
      <div>
        <p className="font-body mb-2 text-sm text-gray-500">Origin</p>
        <p className="font-semibold text-gray-900">{origin}</p>
      </div>
      <div>
        <p className="font-body mb-2 text-sm text-gray-500">Roast Level</p>
        <p className="font-semibold text-gray-900">{roastLevel}</p>
      </div>
      <div>
        <p className="font-body mb-2 text-sm text-gray-500">Processing</p>
        <p className="font-semibold text-gray-900">{processing}</p>
      </div>
      <div>
        <p className="font-body mb-2 text-sm text-gray-500">Size</p>
        <p className="font-semibold text-gray-900">{size}g</p>
      </div>
    </section>
  );
}
