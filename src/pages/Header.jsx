import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Menggunakan useLocation untuk mendapatkan lokasi saat ini

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
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
              ? "fixed block md:hidden p-8 top-0 left-0 right-0 bg-black bg-opacity-20 transition duration-500 ease-in-out"
              : "hidden md:block md:flex md:justify-center md:items-center space-x-4"
          }`}
        >
          <ul className="flex justify-center items-center gap-x-10 font-serif text-md">
            <li
              onClick={handleCloseMenu}
              className={`px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out ${
                location.pathname === "/" ? "bg-primary" : ""
              }`}
            >
              <Link onClick={handleCloseMenu} to="/">
                Home
              </Link>
            </li>
            <li
              onClick={handleCloseMenu}
              className={`px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out ${
                location.pathname === "/about" ? "bg-primary" : ""
              }`}
            >
              <Link onClick={handleCloseMenu} to="/about">
                About
              </Link>
            </li>
            <li
              onClick={handleCloseMenu}
              className={`px-4 py-1 rounded-full text-white hover:bg-primary transition-all duration-300 ease-in-out ${
                location.pathname === "/menu" ? "bg-primary" : ""
              }`}
            >
              <Link onClick={handleCloseMenu} to="/menu">
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
