import React from "react";

const TeaCategoryCard = ({ name, img, isLimited }) => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={img} alt={name} className="w-full h-40 object-cover" />
      {isLimited && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Limited
        </span>
      )}
      <div className="p-2">
        <p className="text-center font-semibold text-gray-900">{name}</p>
      </div>
    </div>
  );
};

export default TeaCategoryCard;
