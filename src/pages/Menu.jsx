import React from "react";
import CardMenu from "../components/CardMenu";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black">
      <h1 className="text-white my-20 text-3xl font-serif">OUR <span className="font-bold text-primary">MENU</span></h1>
      <CardMenu />
    </div>
  );
};

export default Menu;
