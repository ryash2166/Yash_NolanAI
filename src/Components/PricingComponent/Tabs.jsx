import React from "react";
import Button from "../Common/Button";

import { MdCheck } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

// Function to map title to color
const getLabelColor = (title) => {
  const colorMapping = {
    Basic: "#aceb4f", 
    Creator: "aliceblue",
    Pro: "#b11e46", 
  };
  return colorMapping[title] 
};

// Function to map price colors for discounted prices
const getPriceColor = (title) => {
  const colorMapping = {
    Creator: "text-[#da8813]",
    Pro: "text-[#b11e46]", 
  };
  return colorMapping[title]
};

const getLineThrough = (title) => {
  const colorMapping = {
    Basic: "text-[40px] font-bold",
    Creator: "line-through text-[20px] font-medium mt-1",
    Pro: "line-through text-[20px] font-normal mt-1", 
  };
  return colorMapping[title]
};

const Tabs = ({ data }) => {
  return (
    <div className="self-stretch rounded-2xl inline-flex flex-wrap !gap-4 items-start justify-start max-sm:flex-col-reverse  ">
      {data.map((plan, index) => (
        <div
          key={index}
          className="inline-flex  min-w-[300px] flex-1 shadow-custom  rounded-2xl flex-col justify-start items-start bg-[#2b2d33] text-white"
        >
          <div className="w-full">
            <div className="inline-flex self-stretch justify-start items-center border-b-[1px] border-[#1a1d2470]">
              <div
                className="w-1 h-7 relative rounded-r-[5px]"
                style={{ backgroundColor: getLabelColor(plan.title) }}
              ></div>
              <div className="flex-1 gap-2 pl-2 py-[16px] justify-between inline-flex items-start">
                <div className="self-stretch text-2xl break-words font-bold">
                  {plan.title}
                </div>
                {/* Toast for "Best Value" */}
                {plan.title === "Creator" && (
                  <div className=" bg-[#e4931d] text-sm font-medium !px-3 !py-1 rounded-t-[4px]">
                    Best Value
                  </div>
                )}
              </div>
            </div>
            <div className="self-stretch py-8 px-4 border-b-[1px] border-[#1a1d2470] flex gap-2 flex-col items-center justify-start">
              <div className="text-center self-stretch tracking-[0.03px] min-h-[50px] font-normal break-words text-[13px]">
                {plan.description}
              </div>
              <div className="self-stretch h-16 flex justify-center items-center flex-col">
                {plan.discountedPrice && (
                  <div
                    className={`self-stretch text-center break-words text-[40px] font-bold ${getPriceColor(
                      plan.title
                    )} `}
                  >
                    {plan.discountedPrice}
                  </div>
                )}
                <div className="text-[13px] font-light -tracking-[0.03px] break-words text-center self-stretch text-gray-300">
                  {plan.billingInfo}
                </div>
                {plan.price && (
                  <div
                    className={`self-stretch text-center break-words ${getLineThrough(
                      plan.title
                    )} `}
                  >
                    {plan.price}
                  </div>
                )}
              </div>
            </div>
            <div className="self-stretch !p-4 border-b-[1px] border-[#1a1d2470] flex-col items-start justify-start flex gap-[10px]">
              <div className="w-full text-[16px] font-medium break-words ">{plan.featureTitle}</div>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="inline-flex pl-1 justify-start items-start gap-2 self-stretch">
                    <div className="py-[2px] gap-1 flex justify-start items-start text-[20px] text-[#91d626]">
                      <MdCheck />
                    </div>
                    <div className="inline flex-1 flex-col justify-start items-start gap-1">
                      <div className="self-stretch break-words text-base font-normal">{feature}</div>
                    </div>
                  </div>
                ))}
                <div className="flex-1 inline-flex justify-start items-start pt-3 flex-col">
                  <div className="self-stretch text-[#2c79ea] text-sm font-medium break-words leading-0 ">
                    See detailed feature breakdown
                  </div>
                </div>
            </div>
            <div className="flex justify-center items-start self-stretch p-3">
              <Button
              className=""
              text="Subscribe"
              icon={MdAddCircle}
              iconSize="w-6 h-6"
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
