import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { Link, useLocation } from "react-router";
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

  const location = useLocation();

  useEffect(() => {
    if (!loading && location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading, location.hash]);

  if (loading) return <p className="text-3xl text-gray-400">Lade Produkte…</p>;

  return (
    <div className="font-display min-h-screen">
      <section className="px-6 pt-4 pb-6 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mt-2 text-2xl text-gray-400 sm:text-3xl">
            Discover our full range of premium coffees.
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <section
          key={category.id}
          id={`category-${category.id}`}
          className={`${categoryColorMap[category.name]} px-6 pt-12 pb-20 sm:px-8 lg:pt-16 lg:pb-40`}
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-3xl capitalize sm:mb-4 sm:text-4xl">
              {category.name}
            </h2>
            <p className="font-body mb-8 text-gray-600 sm:text-gray-500">
              {category.description}
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </section>
      ))}
    </div>
  );
}
