import React from "react";
import logo from "../../assets/logo.svg";
import MobileMenu from "./MobileMenu.jsx";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-[#1a1d24f5] w-full h-16 py-1 top-0 sticky z-10">
      <div className="h-full flex justify-between items-center m-auto max-sm:!mr-4 sm:px-6">
        <div className="flex justify-center items-center">
          <MobileMenu className="flex items-center justify-center " />
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="flex text-[#f5f2f0] max-w-full">
          <ul className="flex items-center justify-center h-9 max-lg:hidden">
            <NavLink
              to="/aboutus"
              className="m-3 cursor-pointer list-none text-base font-normal"
            >
              About Us
            </NavLink>
            <li className="m-3 cursor-pointer list-none text-base font-normal">
              Pricing
            </li>
            <li className="m-3 cursor-pointer list-none text-base font-normal">
              Features
            </li>
            <li className="m-3 cursor-pointer list-none text-base font-normal">
              New Project
            </li>
            <li className="m-3 cursor-pointer list-none text-base font-normal">
              Blog
            </li>
          </ul>
          <div className="ml-6 p-2 bg-[#f4f4f7] rounded-[96px] inline-flex items-center justify-center cursor-pointer">
            <div className="px-2 gap-1 flex justify-center items-center cursor-pointer max-md:gap-0">
              <div className="text-base font-semibold text-center text-[#1a1d24f5] max-md:text-sm max-md:font-bold">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
