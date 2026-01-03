import Product from "../../../components/Product";
import { products } from "../../../dummy-data/dummy-data";

export default function Offers() {
  return (
    <section className="px-8 py-20">
      <div className="flex gap-12">
        <div className="flex-1">
          <h4 className="mb-6 text-3xl">Special Offers</h4>
          <p className="font-body mb-4 text-gray-500">
            Discover our limited-time coffee deals.
          </p>
          <p className="font-body text-gray-500">
            Grab your favorites before they're gone!
          </p>
        </div>

        <div className="grid flex-2 grid-cols-3 gap-8">
          {products.map((product) =>
            product.isOffer ? (
              <Product key={product.id} product={product} />
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
