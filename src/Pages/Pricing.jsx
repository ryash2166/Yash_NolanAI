import React, { useState } from "react";
import red from "../assets/asset_14.svg";
import round from "../assets/asset_16.svg";
import blue from "../assets/asset_15.svg";
import {
  toggleOptions,
  tabsData,
  featuresData,
} from "../Components/Common/AllData";

import Tabs from "../Components/PricingComponent/Tabs";
import Toggle from "../Components/PricingComponent/Toggle";
import PricingSlider from "../Components/PricingComponent/PricingSlider";
import Student from "../Components/PricingComponent/Student";
import Comparison from "../Components/PricingComponent/Comparison";

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");

  return (
    <div className="relative ">
      <div className="max-sm:relative h-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={red} alt="" />
        </div>
        <div className="absolute top-0 right-0 max-sm:hidden">
          <img src={blue} alt="" />
        </div>
        <div className="absolute top-0 left-0 max-sm:hidden">
          <img src={round} alt="" />
        </div>
        <div className="min-h-72 pt-16 flex items-center py-8 px-16  max-sm:pb-8 max-sm:flex-col">
          <div className="z-[1] w-full text-white">
            <h1 className="text-[32px] uppercase font-bold max-sm:text-center m-0 -tracking-[0.4px]">
              Pricing
            </h1>
            <h3 className="m-0 font-light -tracking-[0.4px] text-[40px] max-lg:text-[28px] max-sm:text-center">
              Save thousands and transform your filmmaking process in days with
              new NolanAI features!
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full h-full z-[2] relative">
        <div className="py-8 px-16 flex flex-col justify-center items-center gap-8 max-sm:px-4 -mt-[40px]">
          <Toggle
            options={toggleOptions}
            onToggle={(value) => setSelectedOption(value)}
          />
          <Tabs data={tabsData[selectedOption]} />
        </div>
        <div>
          <div className="relative text-left text-white pt-8 px-16 max-sm:px-4">
            <h3 className="m-0 text-[40px] font-bold ">
              See what Our customers say about NolanAI
            </h3>
          </div>
          <PricingSlider />
        </div>
        <Student />
        <div className="px-16 py-8 flex-col justify-start items-start gap-16 flex max-sm:px-4 max-sm:py-8">
          <div className="gap-3 flex justify-center flex-col items-center self-stretch h-[88px]">
            <div className="self-stretch text-center text-[40px] font-bold break-words uppercase text-white">
              feature comparison
            </div>
          </div>
        </div>
        <div className="">
          <Comparison data={featuresData} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
