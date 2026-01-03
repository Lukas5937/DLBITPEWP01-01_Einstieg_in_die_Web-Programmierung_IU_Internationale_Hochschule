import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import { categories, products } from "../../dummy-data/dummy-data";
import { Link } from "react-router";

export default function Catalogue() {
  return (
    <div className="font-display min-h-screen">
      <Navbar />

      <section className="px-8 py-4">
        <h1 className="text-4xl font-thin">Catalogue</h1>
        <p className="font-body mt-2 text-gray-500">
          Discover our full range of premium coffees and explore every flavor we
          offer.
        </p>
      </section>

      {categories.map((category) => (
        <section key={category.id} className="max-w-7xl px-8 py-20">
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

      <Footer />
    </div>
  );
}
