import { useEffect, useState } from "react";
import { getAllCategories } from "../../../api/categoriesApi";
import Decaf from "../../../assets/images/categories/decaf.jpg";
import Espresso from "../../../assets/images/categories/espresso.jpg";
import Filter from "../../../assets/images/categories/filter.jpg";
import Specials from "../../../assets/images/categories/specials.jpg";

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
    Espresso: Espresso,
    Filter: Filter,
    Decaf: Decaf,
    Specials: Specials,
  };

  if (loading) return <p className="text-xl text-gray-700">Loading...</p>;
  if (!categories) return null;

  return (
    <section className="px-8 py-20">
      <h3 className="mb-16 text-center text-4xl">Categories</h3>
      <div className="grid grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group cursor-pointer">
            <img
              src={categoryImages[category.name]}
              alt={category.name}
              className="mb-4 h-96 w-full object-cover"
            />
            <p className="text-xl text-gray-800">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
