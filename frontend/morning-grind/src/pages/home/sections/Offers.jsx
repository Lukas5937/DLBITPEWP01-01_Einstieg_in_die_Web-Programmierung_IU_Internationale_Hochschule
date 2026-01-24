import { Link } from "react-router";
import Product from "../../../components/Product";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../api/productApi";

export default function Offers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="px-6 text-xl text-gray-700 sm:px-8">Loading...</p>;
  if (!products) return null;
  return (
    <section className="bg-slate-100 px-6 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="text-center lg:text-left">
          <h4 className="mb-4 text-2xl sm:mb-6 sm:text-3xl">Special Offers</h4>
          <p className="font-body mb-3 text-gray-500 sm:mb-4">
            Discover our limited-time coffee deals.
          </p>
          <p className="font-body text-gray-500">
            Grab your favorites before they're gone!
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {products.map((product) =>
            product.offer ? (
              <Link to={`/catalogue/${product.id}`} key={product.productId}>
                <Product key={product.productId} product={product} />
              </Link>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
