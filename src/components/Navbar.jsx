import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full z-10 nav-bg-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 hidden md:flex items-center flex justify-around space-x-10">
        {/* Menu Links */}
        <a href="#home" className="nav-font hover:text-stroke-white">
          Home
        </a>
        <a href="#skills" className="nav-font hover:text-stroke-white">
          skills
        </a>
        <a href="#projects" className=" nav-font hover:text-stroke-white">
          Projects
        </a>
        <a href="#experience" className=" nav-font hover:text-stroke-white">
          Experience
        </a>
        <a href="#contact" className="nav-font hover:text-stroke-white">
          Contact
        </a>
        <a
          href="/files/John Davincent CV (4).pdf"
          download
          className=" text-xl px-4 py-2 bg-blue-500 text-white rounded-lg"
          style={{ fontFamily: "JetBrains Mono" }}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
