import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Product from "../components/product";
import Testing from "../components/testing";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  console.log(data);
  return (
    <div>
      <Banner />
      <Product products={products} />
      <Testing />
    </div>
  );
};

export default Home;
