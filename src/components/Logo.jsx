import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="flex items-center gap-x-3 justify-center group" to={"/"}>
      <img
        src="../../src/assets/images/logo.png"
        alt="logo"
        className="h-20 w-20"
      />
      <p className="font-alkatra text-white tracking-tight text-6xl pt-5 group-hover:text-amber-300">
        Kittens
      </p>
    </Link>
  );
};

export default Logo;
