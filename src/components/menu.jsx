import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-screen h-screen z-10 flex flex-col font-titleFont text-3xl items-center gap-4">
      <div className=" w-screen py-2 text-center border-b-2 border-t-2 hover:border-gray-400 hover:bg-gray-500 hover:text-white transition duration-300">
        cross
      </div>
      <Link to="/">
        <div className=" w-screen py-2 text-center border-b-2 border-t-2 hover:border-gray-400 hover:bg-gray-500 hover:text-white transition duration-300">
          Home
        </div>
      </Link>
      <Link to="/cart">
        <div className=" w-screen py-2 text-center border-b-2 border-t-2 hover:border-gray-400 hover:bg-gray-500 hover:text-white transition duration-300">
          Cart
        </div>
      </Link>{" "}
      <Link to="/cart">
        <div className=" w-screen py-2 text-center border-b-2 border-t-2 hover:border-gray-400 hover:bg-gray-500 hover:text-white transition duration-300">
          Profile
        </div>
      </Link>{" "}
      <Link to="/login">
        <div className=" w-screen py-2 text-center border-b-2 border-t-2 hover:border-gray-400 hover:bg-gray-500 hover:text-white transition duration-300">
          Login
        </div>
      </Link>
    </div>
  );
};

export default Menu;
