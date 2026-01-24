import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BackButton from "../../components/BackButton";
import AmountSelector from "../../components/AmountSelector";
import ProductInfoTable from "./components/ProductInfoTable";
import FlavourBadge from "./components/FlavourBadge";
import Button from "../../components/Button";
import ProductImagePlaceholder from "../../components/ProductImagePlaceholder";
import { productColorMap } from "../../helpers/ui-helpers";
import { getProductById } from "../../api/productApi";
import { useAuth } from "../../context/useAuth";
import { useCart } from "../../context/useCart";

export default function ProductDetail() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(productId)
      .then(setProduct)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [productId]);

  const [amount, setAmount] = useState(1);
  const [added, setAdded] = useState(false);

  function onAddToCart() {
    console.log("Add to cart button clicked.");
    addToCart(product.productId, amount);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (loading)
    return <p className="px-6 text-xl text-gray-700 sm:px-8">Loading...</p>;

  if (!product) {
    return (
      <div className="font-display min-h-screen">
        <div className="flex items-center justify-center px-8 py-40">
          <p className="text-xl text-gray-700">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-display min-h-screen">
      <article className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <BackButton />

          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
            <ProductImagePlaceholder />

            <section className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="font-body inline-block rounded bg-gray-100 px-4 py-2 text-sm text-gray-700">
                  {product.category.name}
                </span>
              </div>

              <h1
                className={`mb-3 text-4xl leading-tight font-semibold italic sm:text-5xl lg:text-6xl ${productColorMap[product.name]}`}
              >
                {product.name.split(" ").map((word, index) => (
                  <span key={index}>
                    {word}
                    <br />
                  </span>
                ))}
              </h1>

              <p className="mb-6 text-3xl font-bold text-gray-900 sm:mb-8 sm:text-4xl">
                €{product.price.toFixed(2)}
              </p>

              <p className="font-body mb-8 leading-relaxed text-gray-700 sm:mb-10">
                {product.details.description}
              </p>

              <ProductInfoTable {...product.details} />

              <section className="mb-10 sm:mb-12">
                <h3 className="font-body mb-3 text-sm font-semibold text-gray-700 sm:mb-4">
                  Flavor Notes
                </h3>
                <div className="flex flex-wrap gap-1">
                  {product.details.flavorNotes.map((note, index) => (
                    <FlavourBadge key={index} flavourNote={note} />
                  ))}
                </div>
              </section>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <AmountSelector amount={amount} changeAmount={setAmount} />
                <div className="flex items-center">
                  <Button onClick={onAddToCart} disabled={!user}>
                    Add to Cart
                  </Button>
                  {added && (
                    <span className="ml-3 text-sm font-medium text-green-800 sm:ml-4">
                      Product added to cart!
                    </span>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
