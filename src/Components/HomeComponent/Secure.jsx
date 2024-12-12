import React from "react";
import secure from "../../assets/shield.webp";

const Secure = () => {
  return (
    <div className="bg-[#191b1f]  flex flex-col justify-start items-start my-[24px] max-xl:py-16 max-xl:px-4  ">
      <div className="inline-flex gap-6 items-center justify-start max-xl:flex-col ">
        <div className="w-[421px] justify-center flex self-stretch items-center gap-1 max-xl:w-[unset]">
          <div className="w-[336px] h-[336px] max-sm:w-[290px] max-sm:h-[290px] relative justify-center flex  items-center">
            <img
              src={secure}
              alt="sheild"
              className="absolute z-[1] w-full h-full text-transparent"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-8 max-xl:pr-0 max-xl:text-center max-xl:items-center">
          <div className="self-stretch flex-col justify-center items-start gap-3 flex ">
            <div className="self-stretch text-[40px] text-white font-bold break-words">
              Secure
            </div>
            <div className="self-stretch text-[24px] text-white font-light break-words">
              Don't worry, your data is secure and encrypted with NolanAI
            </div>
          </div>
          <div className="self-stretch text-white  text-base leading-6 font-light break-words">
            We take your privacy and the ownership of your work very seriously.
            We respect your creative content and have no rights over it. We do
            not use your work for training our models or for any other purposes
            without your explicit consent. Your scripts and content remain your
            intellectual property. So, when you create/upload or edit content
            using our software, you retain full ownership of the intellectual
            property. We do not claim any rights to your scripts or any other
            content you produce. Your creative work is yours and yours alone.
          </div>
        </div>
      </div>
    </div>
  );  
};

export default Secure;
