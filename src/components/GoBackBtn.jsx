import React from "react";
import { Link } from "react-router-dom";

const GoBackBtn = () => {
  return (
    <Link
      to={"/"}
      className="text-white font-alkatra font-medium border rounded-md px-3 py-1 hover:bg-amber-500 hover:border-amber-500 hover:text-cyan-800 hover:shadow-md transition-colors"
    >
      Regresar
    </Link>
  );
};

export default GoBackBtn;
