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

  if (loading) return <p className="text-xl text-gray-700">Loading...</p>;
  if (!products) return null;
  return (
    <section className="bg-slate-100 px-8 py-20">
      <div className="flex gap-20">
        <div className="">
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
            product.offer ? (
              <Link to={`/catalogue/${product.id}`}>
                <Product key={product.productId} product={product} />
              </Link>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
