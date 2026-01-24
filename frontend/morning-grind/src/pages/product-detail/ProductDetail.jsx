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

  function onAddToCart() {
    console.log("Add to cart button clicked.");
    addToCart(product.productId, amount);
  }

  if (loading) return <p className="text-xl text-gray-700">Loading...</p>;

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
      <article className="px-8 py-20">
        <BackButton />

        <div className="grid gap-12 lg:grid-cols-2">
          <ProductImagePlaceholder />

          <section className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="font-body inline-block rounded bg-gray-100 px-4 py-2 text-sm text-gray-700">
                {product.category.name}
              </span>
            </div>

            <h1
              className={`mb-2 text-6xl leading-tight font-semibold italic ${productColorMap[product.name]}`}
            >
              {product.name.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  <br />
                </span>
              ))}
            </h1>

            <p className="mb-8 text-4xl font-bold text-gray-900">
              €{product.price.toFixed(2)}
            </p>

            <p className="font-body mb-10 leading-relaxed text-gray-700">
              {product.details.description}
            </p>

            <ProductInfoTable {...product.details} />

            <section className="mb-12">
              <h3 className="font-body mb-4 text-sm font-semibold text-gray-700">
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
              <Button onClick={onAddToCart} disabled={!user}>
                Add to Cart
              </Button>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
