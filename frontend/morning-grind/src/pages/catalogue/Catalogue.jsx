import Product from "../../components/Product";
import { categories, products } from "../../dummy-data/dummy-data";
import { Link } from "react-router";

export default function Catalogue() {
  return (
    <div className="font-display min-h-screen">
      <section className="px-8 py-4">
        <p className="font-body mt-2 text-gray-500">
          Discover our full range of premium coffees and explore every flavor we
          offer.
        </p>
      </section>

      {categories.map((category) => (
        <section key={category.id} className="max-w-7xl px-8 pt-8 pb-28">
          <h2 className="mb-12 text-4xl">{category.name}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) =>
              product.category === category.name ? (
                <Link to={`/catalogue/${product.id}`}>
                  <Product key={product.id} product={product} />
                </Link>
              ) : null,
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
