import React, { useState } from "react";
import iconbg from "../../assets/asset_24.svg";
import Button from "../Common/Button";
import { tabs } from "./HomeData";
import { MdOutlineArrowForward } from "react-icons/md";

const AiFeature = () => {
  const [activeTab, setActiveTab] = useState("Screenwriters");

  return (
    <div>
      {/* Tab Header */}
      <div className="flex justify-center items-center text-center space-x-8 max-sm:space-x-0 border-b border-gray-700 max-sm:flex-col">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`text-[32px] font-light pb-2 cursor-pointer hover:!text-[#2c79ea] ease-in duration-200 ${
              activeTab === tab.title
                ? "text-[#2c79ea] border-b-2 border-[#2c79ea] !font-bold "
                : "text-white"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {tabs
          .find((tab) => tab.title === activeTab)
          ?.content.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-lg hover:shadow-md transition"
            >
              <div className="relative flex items-center justify-center w-14 h-14  shrink-0">
                <img src={iconbg} alt="" className="w-full h-full" />
                {/* Icon Placeholder */}
                <span className="absolute material-icons text-white">
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="text-white leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* All Features Button */}
      <div className="flex justify-center mt-8">
        <Button
          className=""
          to="/features"
          text="All Features"
          icon={MdOutlineArrowForward}
          iconSize="w-6 h-6"
        />
      </div>
    </div>
  );
};

export default AiFeature;
