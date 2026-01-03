import Product from "../../../components/Product";

export default function Offers() {
  const products = [
    {
      id: 1,
      name: "Sample Product Name",
      price: "15€",
      color: "text-indigo-900",
    },
    {
      id: 2,
      name: "Sample Product Name",
      price: "15€",
      color: "text-pink-900",
    },
    {
      id: 3,
      name: "Sample Product Name",
      price: "15€",
      color: "text-cyan-900",
    },
  ];

  return (
    <section className="px-8 py-20">
      <div className="flex gap-12">
        <div className="flex-1">
          <h4 className="mb-6 text-3xl">Special Offers</h4>
          <p className="font-body mb-4 text-gray-700">
            Discover our limited-time coffee deals.
          </p>
          <p className="font-body text-gray-700">
            Grab your favorites before they're gone!
          </p>
        </div>

        <div className="grid flex-2 grid-cols-3 gap-16">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
