import React from "react";
import red from "../../assets/asset_14.svg";
import round from "../../assets/asset_16.svg";
import blue from "../../assets/asset_15.svg";

const FeatureTitle = () => {
  return (
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
      <div className="min-h-72 pt-16 flex items-center py-8 px-16 max-sm:pb-8 max-sm:flex-col max-sm:px-0">
        <div className="z-[1] w-full text-white">
          <h1 className="text-[32px] uppercase font-bold max-sm:text-center m-0 -tracking-[0.4px]">
            features
          </h1>
          <h3 className="m-0 font-light -tracking-[0.4px] text-[40px] max-lg:text-[28px] max-sm:text-center">
            See what <strong className="font-bold text-[64px] max-sm:text-[48px]">NolanAI</strong> comprehensive toolkit can do <strong className="font-bold text-[64px] max-sm:text-[48px]">for you. </strong>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FeatureTitle;
