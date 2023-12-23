import Image from "next/image";
import { categories } from "@/data";

export default function HomeCategorySection() {
  return (
    <div className="flex items-center flex-nowrap space-x-4 border-y-2  bg-stone-50 px-8 py-2 md:pl-32 overflow-x-scroll">
      {categories.map((category, index) => (
        <button 
            key={index} 
            className="shrink-0 flex space-x-2 items-center border bg-white p-2 rounded-md">
          <Image 
            src={category.icon} 
            alt={category.name}
            className="w-8 h-8" />
          <p>{category.name}</p>
        </button>
      ))}
    </div>
  );
}
