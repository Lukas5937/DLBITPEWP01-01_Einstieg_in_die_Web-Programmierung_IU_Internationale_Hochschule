import Product from "../../components/Product";
import { categories, products } from "../../dummy-data/dummy-data";
import { Link } from "react-router";

export default function Catalogue() {
  const categoryMap = {
    Espresso: {
      color: "bg-sky-50",
      info: "Our espresso coffees are crafted for intensity and balance — developed to shine under pressure, from classic shots to milk-based drinks.",
    },
    Filter: {
      color: "bg-blue-50",
      info: "These coffees highlight origin character and clarity, designed for slow brewing methods that reveal every subtle note.",
    },
    Decaf: {
      color: "bg-violet-50",
      info: "Carefully decaffeinated using gentle processes, these coffees retain complexity and sweetness without compromise.",
    },
    Specials: {
      color: "bg-slate-100",
      info: "Our specials feature rare lots, innovative processing, or seasonal releases — coffees that push boundaries and reward curiosity.",
    },
  };

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
          className={`${categoryMap[category.name].color} px-8 pt-16 pb-60`}
        >
          <h2 className="mb-4 text-4xl">{category.name}</h2>
          <p className="font-body mb-8 text-sm text-gray-400">
            {categoryMap[category.name].info}
          </p>
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
