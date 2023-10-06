import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="flex items-center gap-x-3 justify-center group" to={"/"}>
      <img
        src="../../src/assets/images/logo.png"
        alt="logo"
        className="h-14 sm:h-16 md:h-20 w-14 sm:w-16 md:w-20"
      />
      <p className="font-alkatra text-white tracking-tight text-3xl sm:text-4xl md:text-6xl pt-1 sm:pt-2 md:pt-5 group-hover:text-amber-500">
        Kittens
      </p>
    </Link>
  );
};

export default Logo;
