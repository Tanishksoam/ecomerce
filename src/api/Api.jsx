import axios from "axios";

export default async function ProductData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  ).catch((err) => {
    console.log(err);
  });
  return products;
}
