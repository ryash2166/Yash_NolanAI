import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Comparison = ({ data }) => {
  return (
    <div className="overflow-x-auto relative z-[1] flex-col justify-start items-start flex gap-16 pt-8 pb-16 px-16 max-sm:p-4 max-sm:overflow-[inherit]">
      <div className=" w-full min-w-[1444px] self-stretch flex-col flex justify-start items-start max-sm:min-w-[inherit] ">
        <div className="h-16 self-stretch gap-3 inline-flex justify-start items-start">
          <div className="flex-1 py-3 px-2 border-b-[1px] border-gray-700 justify-start items-start gap-1 flex">
            <div className="flex-1 font-light break-words text-2xl max-sm:text-base text-gray-500">
              Features
            </div>
          </div>
          <div className="w-[225px] py-3 px-2 border-b-[1px] border-gray-700 flex-col inline-flex justify-start items-start gap-3 ">
            <div className="font-bold self-stretch text-2xl max-sm:text-base text-white">
              Basic
            </div>
          </div>
          <div className="w-[225px] py-3 px-2 border-b-[1px] border-gray-700 flex-col inline-flex justify-start items-start gap-3 ">
            <div className="font-bold self-stretch text-2xl max-sm:text-base text-white">
              Creator
            </div>
          </div>
          <div className="w-[225px] py-3 px-2 border-b-[1px] border-gray-700 flex-col inline-flex justify-start items-start gap-3 ">
            <div className="font-bold self-stretch text-2xl max-sm:text-base text-white">
              Pro
            </div>
          </div>
        </div>
        {data.map((feature, index) => (
          <div
            key={index}
            className="w-full h-full inline-flex gap-3 justify-start"
          >
            <div className="flex-1 self-stretch flex-col py-3 px-2 items-center justify-center inline-flex gap-1 border-b-[1px] border-gray-700 max-sm:min-w-[100px]">
              <div className="max-sm:text-[13px] self-stretch text-white font-semibold break-words text-base">
                {feature.title}
              </div>
              <div className="max-sm:text-[13px] self-stretch text-gray-500 font-normal break-words text-base leading-6">
                {feature.subtitle}
              </div>
            </div>
            <div className="w-[225px] py-3 px-2 border-b-[1px] border-gray-700 flex justify-start items-center gap-2 max-sm:flex-col max-sm:items-center">
              {feature.basic.true ? (
                <span className="text-2xl">
                  <MdCheckCircle className="text-[#1d6ee3]" />
                </span>
              ) : (
                <span className="text-2xl">
                  <MdClose className="text-[#ffffff70]" />
                </span>
              )}
              
            </div>
            <div className="w-[225px] py-3 px-2 border-b-[1px] border-gray-700 flex justify-start items-center gap-2 max-sm:flex-col max-sm:items-center">
            {feature.creator.true ? (
                <span className="text-2xl">
                  <MdCheckCircle className="text-[#1d6ee3]" />
                </span>
              ) : (
                <span className="text-2xl">
                  <MdClose className="text-[#ffffff70]" />
                </span>
              )}
              <div className="flex-1 text-[#e4931db8] text-[13px] font-normal break-words max-sm:text-center max-sm:text-[11px]">
                {feature.creator.text}
              </div>
            </div>
            <div className="w-[225px] py-3 px-2 border-b-[1px] border-gray-700 flex justify-start items-center gap-2 max-sm:flex-col max-sm:items-center">
              {feature.pro.true ? (
                <span className="text-2xl">
                  <MdCheckCircle className="text-[#91d626]" />
                </span>
              ) : (
                <span className="text-2xl">
                  <MdClose className="text-[#ffffff70]" />
                </span>
              )}
              <div className="flex-1 text-white text-[13px] font-normal break-words max-sm:text-center max-sm:text-[11px]">
                {feature.pro.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
