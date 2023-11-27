import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { banner } from "../assets";
import CartItem from "../components/cartItem";

const Carts = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = React.useState(0);
  // console.log(productData);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);
  return (
    <div>
      <img
        className="w-full h-60 overflow-hidden object-cover"
        src={banner}
        alt=""
      />
      <div className=" max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#eeeeee] py-6 px-4">
          <div className=" flex flex-col gap-6 border-b-[2px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>
            <p className="flex item-center gap-4 text-base ">
              Subtotal{" "}
              <span className=" font-titleFont font-bold text-lg">
                ${totalAmt}
              </span>
            </p>
            <p className="flex item-center gap-4 text-base ">
              Shipping{" "}
              <span className=" font-bodyFont text-sm font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, quisquam.
              </span>
            </p>
          </div>
          <p className=" font-titleFont font-semibold flex justify-between mt-4">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button className="w-full bg-[#000] text-white py-4 mt-4">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
