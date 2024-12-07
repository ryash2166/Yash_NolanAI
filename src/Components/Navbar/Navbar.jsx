import React from "react";
import logo from "../../assets/logo.svg";
import MobileMenu from "./MobileMenu.jsx";
import { NavLink } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated ,user } = useAuth0();

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
            { isAuthenticated && <NavLink
              to="/aboutus"
              className="m-3 cursor-pointer list-none text-base font-normal"
            >
              Dashboard
            </NavLink>}
            <NavLink
              to="/aboutus"
              className="m-3 cursor-pointer list-none text-base font-normal"
            >
              About Us
            </NavLink>
            <NavLink
              to="/pricing"
              className="m-3 cursor-pointer list-none text-base font-normal"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/features"
              className="m-3 cursor-pointer list-none text-base font-normal"
            >
              Features
            </NavLink>
            <NavLink
              to="/project"
              className="m-3 cursor-pointer list-none text-base font-normal"
            >
              New Project
            </NavLink>
            <NavLink
              to="/blog"
              className="m-3 cursor-pointer list-none text-base font-normal"
            >
              Blog
            </NavLink>
            {isAuthenticated && (
                    <span className="font-[500] text-white ">{user.name}</span>
                  )}
          </ul>
          <div className="ml-6 p-2 bg-[#f4f4f7] rounded-[96px] inline-flex items-center justify-center cursor-pointer">
            <div className="px-2 gap-1 flex justify-center items-center cursor-pointer max-md:gap-0">
              {isAuthenticated ? (
                <div
                  className="text-base font-semibold text-center text-[#1a1d24f5] max-md:text-sm max-md:font-bold"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log out
                </div>
              ) : (
                <div
                  className="text-base font-semibold text-center text-[#1a1d24f5] max-md:text-sm max-md:font-bold"
                  onClick={() => loginWithRedirect()}
                >
                  Log in
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
