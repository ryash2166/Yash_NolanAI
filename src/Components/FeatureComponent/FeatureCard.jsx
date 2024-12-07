import React from "react";
import { useNavigate } from "react-router";

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconBackground,
  route,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#2b2d33] rounded-2xl flex-grow-[0.33] flex-shrink basis-0 flex cursor-pointer flex-col relative boxShadow max-xl:flex-1 max-xl:mb-5 max-xl:max-w-[95%] max-xl:min-w-[95%] max-sm:min-h-[inherit] max-sm:max-h-[inherit]"
      onClick={() => navigate(route)}
    >
      <div className="flex min-h-[170px] cursor-pointer pt-6 px-6">
        <div>
          <div
            className="rounded-[96px] p-3 overflow-hidden border-[4px] border-[#ffffff34] flex justify-center items-center"
            style={{ background: iconBackground }}
          >
            {Icon && (
              <span className="text-white text-[32px] max-sm:text-2xl">
                <Icon />
              </span>
            )}
          </div>
        </div>
        <div className="ml-[20px]">
          <h3 className="m-0 font-bold text-2xl text-white max-sm:text-xl">
            {title}
          </h3>
          <p className="text-[#ffffffb8] text-sm leading-6 font-normal ">
            {description}
          </p>
        </div>
      </div>
      <div className="pb-6 px-6">
        <div className="text-[#ffffffb8] cursor-pointer">Explore Feature</div>
      </div>
    </div>
  );
};

export default FeatureCard; 
