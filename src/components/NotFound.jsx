import React from "react";
import GoBackBtn from "./GoBackBtn";

const NotFound = () => {
  return (
    <div className="pt-14 pb-20 space-y-2">
      <h1 className="text-center text-amber-400 text-7xl font-extrabold font-lato">
        404
      </h1>
      <p className="text-center font-lato text-white italic">
        No hemos podido encontrar la página que buscas.
      </p>
      <div className="flex justify-center pt-4">
        <GoBackBtn />
      </div>
    </div>
  );
};

export default NotFound;
