import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="section">
         <div>Home</div>
         <Link to={"/product"} > Product page </Link>
    </div>
   
   

  )
}

export default Home