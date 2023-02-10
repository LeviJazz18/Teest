import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="p-5">
      <Link
        className=" w-10 p-4 bg-blue-600 text-white m-6 rounded-full"
        to={"/"}
      >
        Home Button
      </Link>
    </div>
  );
};

export default Product;
