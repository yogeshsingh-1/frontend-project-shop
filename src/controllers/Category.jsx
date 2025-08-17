import { categories } from "../Category";
const Category = () => {
  return (
    <div className="flex flex-wrap justify-center items-center  gap-9 w-full  mt-2 overflow-x-hidden">
      {categories.map((categorie) => (
        <div
          className=" md:w-[8%] flex flex-col items-center  bg-white p-2 md:p-4 rounded-md shadow-md z-50 gap-1 group hover:bg-green-200 duration-300 cursor-pointer transition-all ease-in"
          key={categorie.id}
        >
          <div className="group-hover:animate-pulse">{categorie.icon}</div>
          <div className="text-sm font-serif text-gray-400">
            {categorie.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
