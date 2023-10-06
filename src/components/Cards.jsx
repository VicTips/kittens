import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="flex justify-evenly gap-5 flex-wrap pt-10 pb-20">
      {data.map((cat, index) => {
        return <Card cat={cat} key={index} />;
      })}
    </div>
  );
};

export default Cards;
