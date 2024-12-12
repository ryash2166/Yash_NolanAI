import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import red from "../../assets/asset_14.svg";
import round from "../../assets/asset_16.svg";
import blue from "../../assets/asset_15.svg";
import cover from "../../assets/asset_28.svg";
import book from "../../assets/notebook.png";

import Cards from "../Common/Cards";
import Button from "../Common/Button";

import {
  MdAnalytics,
  MdOutlineArrowForward,
  MdOutlinePsychology,
  MdOutlineWavingHand,
} from "react-icons/md";

const ForStudio = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="max-sm:relative h-full -mt-10 max-sm:mt-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={red} alt="" />
      </div>
      <div className="absolute top-0 right-0 max-sm:hidden">
        <img src={blue} alt="" />
      </div>
      <div className="absolute top-0 left-0 max-sm:hidden">
        <img src={round} alt="" />
      </div>
      <div className="min-h-72 pt-16 flex items-center py-8 px-16 max-sm:pb-0 max  max-sm:flex-col max-sm:px-0">
        <div className="z-[1] w-full text-white">
          <h3 className="m-0 font-light -tracking-[0.4px] text-[40px] max-lg:text-[28px] max-sm:text-center">
            For{" "}
            <strong className="font-bold text-[64px] max-sm:text-[48px]">
              Film
            </strong>{" "}
            And Entertainment <br />
            Production{" "}
            <strong className="font-bold text-[64px] max-sm:text-[48px]">
              Companies{" "}
            </strong>
          </h3>
        </div>
      </div>
      <div className="mt-0 text-center relative mb-5">
        <h1 className="text-[40px] font-bold text-white">
          All in one software for small and medium studios
        </h1>
      </div>
      <div className="flex justify-center items-center pt-16 px-16 relative z-[1]  flex-col max-sm:pt-[10px] max-sm:px-0">
        <div className="space-y-8">
          <div className="flex justify-center items-center">
            <Cards
              to=""
              className="max-w-fit"
              icon={MdOutlinePsychology}
              title="All-in-One Editor"
              description="Experience the future of script editing with our AI-powered co-pilot. Enhance your creative projects with intelligent assistance that simplifies the editing process, making it faster and more precise."
            />
          </div>
          <Cards
            to=""
            className="max-w-fit"
            icon={MdAnalytics}
            title="Analytics & Pre-Production Management"
            description="Streamline your pre-production process with comprehensive analytics. Make data-driven decisions, plan your projects effectively, and ensure every element of your production is optimized for success."
          />
          <div className="flex justify-center items-center mb-5">
            <Cards
              to=""
              className="max-w-fit"
              icon={MdOutlineWavingHand}
              title="Customization & Integration"
              description="Tailor NolanAI to suite your studio's unique needs. Our platform offers seamless integration with industry-standard tools, ensuring that it fits perfectly into your existing workflow."
            />
          </div>
        </div>
        <Button
          className="mt-[30px]"
          text="Sign Up For Free"
          onClick={() => loginWithRedirect()}
          icon={MdOutlineArrowForward}
          iconSize="w-6 h-6"
        />
      </div>
      <div className="bg-[#191b1f] flex flex-col justify-start items-start my-[24px] p-16 max-xl:py-16 max-xl:px-4 max-sm:py-0">
        <div className="inline-flex gap-6 items-center justify-start max-xl:flex-col ">
          <div className="w-[421px] justify-center flex self-stretch items-center gap-1 max-xl:w-[unset]">
            <div className="w-[336px] h-[336px] max-sm:w-[290px] max-sm:h-[290px] relative justify-center flex  items-center">
              <img
                src={cover}
                alt=""
                className="min-w-[536px] min-h-[536px] relative max-sm:hidden"
              />
              <img
                src={book}
                alt=""
                className="absolute z-[1] text-transparent object-cover left-5 max-sm:-left-2"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-8 pr-[375px] max-2xl:pr-0 max-xl:text-center max-xl:items-center">
            <div className="self-stretch flex-col justify-center items-start gap-3 flex ">
              <div className="self-stretch text-[40px] text-white font-bold break-words">
                Library of 2000+ Stories
              </div>
              <div className="self-stretch text-[24px] text-[#f5f2f0] font-light break-words">
                Access a vast collection of unique stories with full copyright
                transfer for further development. Unlock a wealth of creative
                possibilities and seamlessly transform your next blockbuster
                screenplay from these stories.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center -mt-5">
        <div className="max-w-[50%] flex flex-col justify-center max-md:max-w-full max-md:px-4">
          <div className="text-[#f5f2f0] ">
            <p className="text-[17px] leading-[30px] font-light">
              If you are looking for a way to implement creativity and unique
              storytelling with just a few clicks, then look no further than
              NolanAI. Unlock efficiency for your team in an instant. <br />
              Join NolanAI Enterprise. <br />
              For more details, contact us.
            </p>
            <p className="text-center text-[28px] text-[#da8813] font-semibold">
              enterprise @ nolanai.app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForStudio;
