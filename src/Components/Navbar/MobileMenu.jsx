import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when clicking a menu item
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block mt-3 lg:!hidden max-lg:mt-0"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="bg-transparent text-white px-4 my-auto r focus:outline-none"
      >
        <GiHamburgerMenu className="h-8 w-8 max-lg:h-6 max-lg:w-6" />
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-[5px] w-[700px] max-sm:w-44 max-sm:ml-5 bg-[#222429] shadow-lg z-10 overflow-y-auto ">
          <li
            className="text-white p-6 border-t-[1px] border-[#1a1d24b8] cursor-pointer"
            onClick={handleMenuItemClick}
          >
            <NavLink className="text-2xl font-medium" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li
            className=" text-white p-6 border-t-[1px] border-[#1a1d24b8] cursor-pointer"
            onClick={handleMenuItemClick}
          >
            <NavLink className="text-2xl font-medium" to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li
            className=" text-white p-6 border-t-[1px] border-[#1a1d24b8] cursor-pointer"
            onClick={handleMenuItemClick}
          >
            <NavLink className="text-2xl font-medium" to="/features">
              Features
            </NavLink>
          </li>
          <li
            className=" text-white p-6 border-t-[1px] border-[#1a1d24b8] cursor-pointer"
            onClick={handleMenuItemClick}
          >
            <NavLink className="text-2xl font-medium" to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
