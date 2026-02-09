import { useEffect, useState } from "react";
import { getAllCategories } from "../../../api/categoriesApi";
import Decaf from "../../../assets/images/categories/decaf.jpg";
import Espresso from "../../../assets/images/categories/espresso.jpg";
import Filter from "../../../assets/images/categories/filter.jpg";
import Specials from "../../../assets/images/categories/specials.jpg";
import { Link } from "react-router";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories()
      .then(setCategories)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const categoryImages = {
    espresso: Espresso,
    filter: Filter,
    decaf: Decaf,
    specials: Specials,
  };

  if (loading)
    return <p className="px-6 text-xl text-gray-700 sm:px-8">Loading...</p>;
  if (!categories) return null;

  return (
    <section className="px-6 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-12 text-center text-3xl sm:mb-16 sm:text-4xl">
          Categories
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              to={`/catalogue#category-${category.id}`}
              key={category.id}
              className="group cursor-pointer"
            >
              <img
                src={categoryImages[category.name]}
                alt={category.name}
                className="mb-4 h-56 w-full rounded-lg object-cover transition duration-200 ease-out group-hover:scale-[1.02] sm:h-64 md:h-72 lg:h-80 xl:h-96"
              />
              <p className="text-lg text-gray-800 capitalize sm:text-xl">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
