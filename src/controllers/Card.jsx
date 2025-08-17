import React from "react";
import image2 from "../assets/image2.avif";

const Card = ({item}) => {
  return (
    <div className="w-2/3 sm:w-[35%] md:w-[25%] lg:w-[20%] h-[270px] px-2 pt-2 pb-3 bg-white rounded-xl shadow-md z-50 flex flex-col gap-2 transition-all duration-200 ease-in hover:shadow-lg">
      {/* Image section */}
      <div className="h-[58%] rounded-xl overflow-hidden">
        <img
          src={item.food_image}
          alt="Pancakes"
          className="h-full w-full object-top transform scale-100 hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <div className="text-lg font-bold">{item.food_name}</div>

      {/* Price + Type */}
      <div className="flex justify-between text-green-600 text-sm font-semibold">
        <span>Rs{item.price}/-</span>
        <span>{item.food_type}</span>
      </div>

      {/* Button */}
      <button className="w-full bg-green-200 font-mono rounded-md text-center py-1 text-sm font-bold opacity-80 hover:opacity-100 transition">
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
