import React from "react";

function FoodCard({ name, image }) {
  return (
    <div className="px-12 py-8 bg-black/10 hover:bg-[#F7C35F] hover:text-black hover:font-bold rounded-md flex flex-col justify-center items-center">
      <div>
        <img src={image} alt={name} />
      </div>
      <p className="font-medium mt-3 text-base">{name}</p>
    </div>
  );
}

export default FoodCard;
