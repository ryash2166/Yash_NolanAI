import React from "react";
import nolan_2 from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full relative inline-flex flex-col justify-start items-start gap-16 ">
      <div className="p-16 pb-4 self-stretch justify-end gap-6 items-center inline-flex max-sm:flex-col">
        <div className="inline-flex flex-col justify-center items-start gap-4">
          <img src={nolan_2} alt="" className="" />
        </div>
        <div className="inline-flex flex-1 flex-col justify-center items-center gap-1 text-center w-full">
          <div className="text-[#e9ebf2] text-sm font-normal">
            © NolanAI, Inc. 2024
          </div>
          <p className="mt-[5px] text-[#e9ebf2] ">
            <NavLink
              to="/"
              className="text-sm font-normal leading-6 tracking-[0.1em] text-right"
            >
              Testimonials
            </NavLink>
            <span className="opacity-[0.9] text-gray-400 text-sm font-normal leading-6 text-right ">
              {" "}
              |{" "}
            </span>
            <NavLink
              to="/"
              className="text-sm font-normal leading-6 tracking-[0.1em] text-right"
            >
              Privacy Policy
            </NavLink>
            <span className="opacity-[0.9] text-gray-400 text-sm font-normal leading-6 text-right ">
              {" "}
              |{" "}
            </span>
            <NavLink
              to="/"
              className="text-sm font-normal leading-6 tracking-[0.1em] text-right"
            >
              Terms of Serivce
            </NavLink>
            <span className="opacity-[0.9] text-gray-400 text-sm font-normal leading-6 text-right ">
              {" "}
              |{" "}
            </span>
            <NavLink
              to="/"
              className="text-sm font-normal leading-6 tracking-[0.1em] text-right"
            >
              Referral Program
            </NavLink>
            <span className="opacity-[0.9] text-gray-400 text-sm font-normal leading-6 text-right ">
              {" "}
              |{" "}
            </span>
            <NavLink
              to="/"
              className="text-sm font-normal leading-6 tracking-[0.1em] text-right"
            >
              Releases
            </NavLink>
            <span className="opacity-[0.9] text-gray-400 text-sm font-normal leading-6 text-right ">
              {" "}
              |{" "}
            </span>
            <NavLink
              to="/"
              className="text-sm font-normal leading-6 tracking-[0.1em] text-right"
            >
              FAQ
            </NavLink>
          </p>
        </div>
        <div className="inline-flex flex-col items-end gap-1 justify-center">
          <div className="items-start inline-flex gap-6 justify-start h-8 text-white">
            <FaInstagram className="w-8 h-8 !font-extralight" />
            <FaXTwitter className="w-8 h-8 !font-extralight" />
            <FaYoutube className="w-8 h-8 !font-extralight" />
            <FaThreads className="w-8 h-8 !font-extralight" />
            <FaDiscord className="w-8 h-8 !font-extralight" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
