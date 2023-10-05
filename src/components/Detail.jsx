import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  cleanKittenInfo,
  loadKittenInfoAsync,
} from "../redux/slices/kittensSlice";
import GoBackBtn from "./GoBackBtn";
import { capitalize } from "../utils/capitalize";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadKittenInfoAsync(id));
    return function cleanup() {
      dispatch(cleanKittenInfo());
    };
  }, [id]);
  const cat = useSelector((state) => state.kittens.kittenInfo);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full gap-x-10 justify-center items-center py-10">
        <img
          src={`../../src/assets/images/${cat.image_file_name}`}
          alt={cat.name}
          className="rounded-full border-4 border-white shadow-inner w-52 h-52"
        />
        <div className="w-[94%] max-w-3xl">
          {cat.name ? (
            <>
              <div className="flex w-full justify-between gap-x-4">
                <div className="w-1/3">
                  <p className="text-amber-500 text-2xl font-bold font-alkatra tracking-widest">
                    Name
                  </p>
                  <p className="bg-white rounded-md w-full py-1 px-3 font-lato font-medium mb-4">
                    {capitalize(cat.name)}
                  </p>
                </div>
                <div className="w-1/3">
                  <p className="text-amber-500 text-2xl font-bold font-alkatra tracking-widest">
                    Gender
                  </p>
                  <p className="bg-white rounded-md w-full py-1 px-3 font-lato font-medium mb-4">
                    {capitalize(cat.gender)}
                  </p>
                </div>
                <div className="w-1/3">
                  <p className="text-amber-500 text-2xl font-bold font-alkatra tracking-widest">
                    Age
                  </p>
                  <p className="bg-white rounded-md w-full py-1 px-3 font-lato font-medium mb-4">
                    {capitalize(cat.age)}
                  </p>
                </div>
              </div>
              <p className="text-amber-500 text-2xl font-bold font-alkatra tracking-widest">
                Description
              </p>
              <p className="bg-white rounded-md w-full py-1 px-3 font-lato font-medium mb-4">
                {cat.description}
              </p>
            </>
          ) : null}
        </div>
      </div>
      <GoBackBtn />
    </div>
  );
};

export default Detail;
