import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="p-8 text-white bg-black">
      <nav className="container mx-auto flex justify-end md:justify-center items-center">
        <button className="md:hidden z-20 text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
        </button>
        <div
          className={`${
            isMenuOpen
              ? "fixed md:hidden p-8 top-20 left-0 right-0 bg-primary bg-opacity-80 transition-opacity duration-500 ease-in-out"
              : "hidden md:block md:flex md:justify-center md:items-center space-x-4"
          }`}
        >
          <ul className="flex justify-center items-center gap-x-10 font-serif text-md">
            <li className="px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out">
              <Link to="/" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li className="px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out">
              <Link to="/about" onClick={handleMenuClick}>
                About
              </Link>
            </li>
            <li className="px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out">
              <Link to="/menu" onClick={handleMenuClick}>
                Menu
              </Link>
            </li>
            {/* <li className="px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
