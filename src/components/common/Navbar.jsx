import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-brand-200 text-gray-50 py-3 md:px-10 flex flex-col md:flex-row justify-between items-center">
      {/* Left: Logo + Nav Links */}
      <div className="flex flex-col px-16 md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto">
        <h1 className="text-2xl font-bold text-brand-950">
          Heal<span className="text-brand-500">tea</span>
        </h1>

        <ul className="flex space-x-4 text-brand-900 font-medium text-sm md:text-base">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="relative group">
            <a href="#">Shop ▾</a>
            {/* optional dropdown can go here */}
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Right: Search + Icons */}
      <div className="flex items-center mt-4 md:mt-0 space-x-4 w-full md:w-auto justify-center md:justify-end">
        {/* Search */}
        <div className="relative text-sm w-full md:w-64">
          <input
            type="text"
            placeholder="Search Item"
            className="w-full pl-10 pr-4 py-2 rounded border border-brand-500 text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 placeholder:text-gray-400"
          />
          <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>

        {/* Icons */}
        <button className="hover:text-gray-600">
          <i className="ri-heart-line"></i>
        </button>
        <button className="hover:text-gray-600">
          <i className="ri-shopping-cart-line"></i>
        </button>

        {/* Auth */}
        <a
          href="#"
          className="flex items-center space-x-1 text-brand-900 hover:text-gray-600"
        >
          <i className="ri-user-line"></i>
          <span className="text-sm">Login/Register</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
