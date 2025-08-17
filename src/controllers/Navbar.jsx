import React, { useEffect, useRef } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
const Navbar = () => {
  const input = useRef(null);
  useEffect(() => {
    input.current?.focus();
  }, []);
  return (
    <div className="w-full h-[10vh]  flex justify-between items-center ">
      <div className="bg-white p-[10px] shadow-md z-50 rounded ml-5">
        <MdFastfood className="text-[22px] text-green-500 font-semibold " />
      </div>

      <div className="w-[50%] h-[40px]  flex rounded-md  overflow-hidden border-hidden outline-none shadow-md items-center bg-white group">
        <span className="w-[15%] lg:w-[5%] h-full   p-2 ">
          <IoSearchOutline className="text-2xl text-green-500  group-hover:text-green-100 duration-300" />
        </span>
        <input
          ref={input}
          type="text"
          className="w-[85%] lg:w-[95%] h-full border-hidden outline-none placeholder:text-md placeholder:text-gray-300 text-black  p-1"
          placeholder="seacrh your dish..."
        />
      </div>
      <div className="bg-white p-[10px] shadow-md z-50 rounded mr-5">
        <LuShoppingBag className="text-[22px] text-green-500 font-semibold" />
      </div>
    </div>
  );
};

export default Navbar;
