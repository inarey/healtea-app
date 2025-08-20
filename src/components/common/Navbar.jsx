import React from "react";
import logo from "../../assets/logos/healteaWhiteBg.png";
import { Link, NavLink } from "react-router-dom";
import { RiHeart2Line, RiHeartFill,RiShoppingCart2Line } from "@remixicon/react";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full bg-brand-200 text-gray-50 py-3 md:px-10 flex flex-col md:flex-row justify-between items-center ">
      {/* Left: Logo + Nav Links */}
      <div className="flex flex-col px-16 md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="healtea logo" className="h-8 w-auto" />
        </Link>
        <ul className="flex space-x-4 text-brand-900 font-medium text-sm md:text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-brand-700"
                  : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-brand-700"
                  : "hover:underline"
              }
            >
              About
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Shop ▾
            </NavLink>
            {/* optional dropdown can go here */}
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Contact
            </NavLink>
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
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        <button className="hover:text-gray-600">
          <RiHeart2Line
            className="my-icon text-brand-500 size-7" // add custom class name
          />
        </button>
        <button className="hover:text-gray-600">
          <RiShoppingCart2Line className="my-icon text-brand-500 size-7" />
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
      </div>
    </nav>
  );
};

export default Navbar;
