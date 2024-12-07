import React from "react";

const UseCard = ({ image, date, tags, title, description }) => {
  const tagStyles = {
    "Best Practice": "border-[#d4555d] hover:bg-[#d4555d]",
    "Tutorials": "border-[#4ca86a] hover:bg-[#4ca86a]",
  };
  return (
    <div className="flex max-w-[30%] mx-[16px] mb-[32px] flex-auto max-lg:max-w-full">
      <div className="bg-[#202327] rounded-[16px] flex flex-col">
        <div className="h-[200px] rounded-t-[16px] w-full relative bg-cover bg-center">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="rounded-t-[16px] object-cover text-transparent w-full h-full"
          />
        </div>
        <div className="text-[#f5f2f0b2] px-10 flex-grow flex flex-col">
          <p className="mt-[10px] font-semibold text-[14px]">{date}</p>
          <div className="flex gap-[10px] cursor-pointer">
            {tags.map((tag, index) => (
              <p
                key={index}
                className={`border-[1px] text-[12px] rounded-[8px] text-[#e9ebf2] py-[5px] px-[10px] duration-300 ease-linear ${tagStyles[tag] || "border-[1px] text-[12px] rounded-[8px] border-[#1d6ee3] hover:bg-[#1d6ee3] text-[#e9ebf2] py-[5px] px-[10px] duration-300 ease-linear"}`}
              >
                {tag}
              </p>
            ))}
          </div>
          <h2 className="mt-[5px] mb-[10px] text-[#f5f2f0] text-[20px]">{title}</h2>
          <p className="m-0 text-[14px] leading-6 font-normal">{description}</p>
        </div>
        <div className="pt-[10px] px-6 pb-[15px]">
            <p className="font-medium text-[16px] text-[#057ffa]">Read article</p>
        </div>
      </div>
    </div>
  );
};

export default UseCard;
