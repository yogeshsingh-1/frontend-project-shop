import React from "react";
import Card from "./Card.jsx";
import { food_items } from "../food.js";
const Cards = () => {
   // clean array

  return (
    <div className="w-full lg:max-w-[1240px] mx-auto mt-5  flex flex-wrap gap-6 justify-center">
      {food_items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Cards;
