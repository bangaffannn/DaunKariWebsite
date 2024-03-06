import React from "react";
import Img1 from '../assets/icecream-1.jpg'
import Img2 from '../assets/noodles-1.jpg'
import Img3 from '../assets/coffee-2.jpg'

const MenuCard = ({ image, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="h-360 w-full grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 ease-in-out" src={image} alt={title} />
      <div className="px-6 py-4 mt-4">
        <div className="text-center font-bold text-xl mb-2 text-primary z-10">{title}</div>
        <p className="text-center text-white z-10">{description}</p>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MenuCard
          image={Img1}
          title="Menu 1"
          description="Description of Menu 1"
        />
        <MenuCard
          image={Img2}
          title="Menu 2"
          description="Description of Menu 2"
        />
        <MenuCard
          image={Img3}
          title="Menu 3"
          description="Description of Menu 3"
        />
      </div>
    </div>
  );
};

export default RestaurantMenu;
