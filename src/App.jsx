import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Footer from './pages/Footer'

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Menu from "../src/pages/Menu";
import Contact from "../src/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-site bg-cover bg-no-repeat">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
