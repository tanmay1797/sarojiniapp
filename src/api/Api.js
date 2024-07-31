import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    // "https://fakestoreapiserver.vercel.app/products"
    "https://fakestoreapi.com/products"
  );
  console.log(products);
  return products;
}
