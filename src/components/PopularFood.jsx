import React from "react";
import FoodCard from "./FoodCard";
import { centuryGothic } from "@/utils/fonts";

function PopularFood() {
  const Foods = [
    {
      src: "/apple.svg",
      name: "Apple",
    },
    {
      src: "/blueberry.svg",
      name: "Blueberry",
    },
    {
      src: "/strawberry.svg",
      name: "Strawberry",
    },
    {
      src: "/eggplant.svg",
      name: "Eggplant",
    },
    {
      src: "/cabbage.svg",
      name: "Cabbage",
    },
    {
      src: "/carrot.svg",
      name: "Carrot",
    },
  ];

  return (
    <div className="py-4 md:py-10 md:mb-16 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <p
            className={`text-lg uppercase mb-3 ${centuryGothic.className} font-medium`}
          >
            Popular Foods and Vegetables
          </p>
          <h3 className="md:text-5xl text-3xl font-bold">
            Quality Fruits & Vegetables
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {Foods.map((food, index) => (
            <div className="aspect-auto" key={index}>
              <FoodCard image={food.src} name={food.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularFood;
