import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeLoader } from "../redux/bazarSlice";
import { useEffect } from "react";
export default async function ProductData() {
  let products = "";
  products = await axios
    .get("https://fakestoreapiserver.reactbd.com/products")
    .catch((err) => {
      console.log(err);
    });
  console.log(products);
  return products;
}

export function ApiComp() {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.bazar.isLoading))
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await ProductData();
        // const products = {status:100};
        console.log("here", products);
        // Assuming you want to dispatch the action when the data is fetched
        console.log("Before dispatch removeLoader");
        if (products.status === 200) {
          dispatch(removeLoader());
        }
        // removeLoader({payload:false});
        console.log("After dispatch removeLoader");
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  },[]);

  return <></>; // Your component JSX
}
