import React from "react";
import { logo, cart } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px]  sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={logo} alt="" className="w-28" />
          </div>
        </Link>
        <div className="flex items-center gap-8 font-titleFont">
          <ul className="flex items-center gap-8 font-titleFont">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/2832/2832499.png"
              alt="cart"
            />
            <span className="absolute w-6 top-2 left-3 text-sm items-center justify-center font-semibold">
              0
            </span>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            className="w-8 h-8 rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
