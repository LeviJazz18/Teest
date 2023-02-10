import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>I love my self</h1>
      <p>i know right</p>
      <Link to={"/product"}>Product page</Link>
    </div>
  );
};

export default Home;
