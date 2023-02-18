import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="p-3 rounded-full text-blue text-center font-bold text-lg">
      <Link to={"/"} > Hello Home</Link>
    </div>
  );
};

export default Product;
