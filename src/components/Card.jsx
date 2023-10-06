import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../utils/capitalize";

const Card = ({ cat }) => {
  return (
    <Link
      className="cursor-pointer hover:scale-105 transition-transform group"
      to={`/${cat.id}`}
    >
      <img
        className="h-32 sm:h-36 w-32 sm:w-36 rounded-full border-4 border-white group-hover:shadow-md shadow-inner transition-colors group-hover:border-amber-500"
        src={`../../src/assets/images/${cat.image_file_name}`}
      />
      <div className="flex justify-center mt-2">
        <p className="text-center bg-white text-amber-700 rounded-md font-medium font-alkatra py-1 px-3 transition-colors group-hover:bg-amber-200 group-hover:shadow-md text-base sm:text-lg inline-block">
          {capitalize(cat.name)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
