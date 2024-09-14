import { Product } from "@/interfaces";
import AddToCartContainer from "./AddToCartContainer";

export default function ProductPagePriceContainer({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="mt-8 grid grid-cols-1 rounded-xl border p-8 shadow-xl md:grid-cols-2">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-semibold text-sky-500">Shipping</h3>
        <p className="text-3xl font-medium">{product.price}$</p>
        <p className="capitalize">{product.shippingInformation}</p>
        <p className="capitalize">{product.warrantyInformation}</p>
        <p className="capitalize">{product.returnPolicy}</p>
        <p
          className={`${product.stock > 0 ? "text-green-500" : "text-red-500"}`}
        >
          Stock: {product.stock} in stock
        </p>
      </div>
      <AddToCartContainer product={product} />
    </div>
  );
}
