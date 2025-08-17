import React from "react";
import Navbar from "../controllers/Navbar";
import Category from "../controllers/Category";
import Cards from "../controllers/Cards";
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <Category />
      <Cards/>
     
    </div>
  );
};

export default Home;
