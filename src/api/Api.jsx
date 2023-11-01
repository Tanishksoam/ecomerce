import axios from "axios";

export default async function ProductData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  // console.log(products);
  return products;
}
