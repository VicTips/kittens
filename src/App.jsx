import React, { useEffect } from "react";
import { useOutlet } from "react-router-dom";
import Cards from "./components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { loadKittensAsync } from "./redux/slices/kittensSlice";
import Logo from "./components/Logo";
import Spinner from "./components/Spinner";

const App = () => {
  const outlet = useOutlet();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadKittensAsync());
  }, []);
  const kittens = useSelector((state) => state.kittens.kittensLoaded);
  const loading = useSelector((state) => state.kittens.loading);
  return (
    <div className="bg-gradient-to-r from-cyan-700 to-indigo-800 bg-contain min-h-screen flex justify-center items-center shadow-inner">
      <div className="w-[94%] max-w-7xl py-14">
        <div className="flex justify-center">
          <Logo />
        </div>
        {loading && <Spinner />}
        {outlet || <Cards data={kittens} />}
      </div>
    </div>
  );
};

export default App;
