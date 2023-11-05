import React from "react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootid = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootid}`, {
      state: {
        item: product,
      },
    });
  };

  
      // addToCart({
      //   _id: product._id,
      //   title: product.title,
      //   image: product.image,
      //   price: product.price,
      //   description: product.description,
      //   quantity: 1,
      // })

  const onClickAddtoCart = () => {
    dispatch(
      addToCart({
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
        quantity: 1,
      })
    );
  }
  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-96 overflow-hidden cursor-pointer"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={product.image}
          alt=""
        />
      </div>
      <div className="w-full border-[1px] border-white px-2 py-4 hover:border-gray-300 duration-300">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="font-titleFont tetx-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex gap-2 relative overflow-hidden w-28 justify-end text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 text-sm">
              <p className=" text-gray-400 line-through ">
                ${product.oldPrice}
              </p>
              <p className=" font-semibold">${product.price}</p>
            </div>
            <p
              onClick={onClickAddtoCart}
              className="absolute text-sm text-gray-500 hover:text-gray-900 z-20 w-[100px] flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0  transition-transform cursor-pointer duration-500 "
            >
              Add to Cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between text-sm font-thin">
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0 z-100">
          {product.isNew && (
            <p className=" bg-neutral-800 text-white py-1 px-6 font-semibold font-titleFont">
              Sale
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
