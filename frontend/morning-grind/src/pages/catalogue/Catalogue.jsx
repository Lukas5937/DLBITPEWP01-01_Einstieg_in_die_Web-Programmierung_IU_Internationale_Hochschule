import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { Link } from "react-router";
import { getAllProducts } from "../../api/productApi";
import { categoryColorMap } from "../../helpers/ui-helpers";
import { getAllCategories } from "../../api/categoriesApi";

export default function Catalogue() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Fehler beim Laden der Daten", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-3xl text-gray-400">Lade Produkte…</p>;

  return (
    <div className="font-display min-h-screen">
      <section className="px-8 pt-4 pb-2">
        <p className="mt-2 text-3xl text-gray-400">
          Discover our full range of premium coffees.
        </p>
      </section>

      {categories.map((category) => (
        <section
          key={category.id}
          className={`${categoryColorMap[category.name]} px-8 pt-16 pb-60`}
        >
          <h2 className="mb-4 text-4xl">{category.name}</h2>
          <p className="font-body mb-8 text-gray-500">{category.description}</p>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {products
              .filter(
                (product) =>
                  product.active && product.category?.id === category.id,
              )
              .map((product) => (
                <Link
                  key={product.productId}
                  to={`/catalogue/${product.productId}`}
                >
                  <Product product={product} />
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
