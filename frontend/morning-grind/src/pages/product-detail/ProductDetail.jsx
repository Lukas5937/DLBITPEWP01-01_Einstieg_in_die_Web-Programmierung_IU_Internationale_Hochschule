import { useParams } from "react-router";
import { products } from "../../dummy-data/dummy-data";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <div>{product.name}</div>;
}
