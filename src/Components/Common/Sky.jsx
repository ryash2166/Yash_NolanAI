import React from "react";
import SkyBG from "../../assets/asset_19.svg";

const Sky = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center  text-center space-y-6">
      {/* Logo with SVG background */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <img src={SkyBG} alt="" className="w-full h-full" />
        {/* Icon */}
        <span className="absolute text-[#f1a939] text-4xl">{icon}</span>
      </div>

      {/* Title and Subtitle */}
      <div className="space-y-2">
        <h3 className="text-white text-[40px] text-center font-bold">
          {title}
        </h3>
        <p className="text-gray-400 text-2xl leading-6 font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Sky;
