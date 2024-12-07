import React from "react";
import film from "../../assets/Filmmaking.webp";

const BlogMain = () => {
  return (
    <div className="pl-8 pr-16 mb-10 max-sm:px-4">
      <div className="flex gap-[20px] items-start justify-center mt-[10px] mx-[30px] w-full max-md:flex-col max-md:m-auto">
        <div className="flex-grow-[0.7] flex-shrink basis-0 max-sm:flex-1">
          <img
            src={film}
            alt="How to Create a Winning Indie Film"
            className="text-transparent object-cover w-full h-full max-h-[400px]"
          />
        </div>
        <div className="flex-1 text-[#f5f2f0]">
          <h2 className="text-white text-[48px] m-0 break-words font-bold max-sm:text-[34px]">
            How to Create a Winning Indie Film
          </h2>
          <div className="text-[#ffffff70] text-[16px] mt-[20px] font-light max-sm:text-[16px]">
            Updated on December 04 2024, 09:43
          </div>
          <div className="gap-[10px] flex my-[20px]">
            <p className="border-[1px] border-[#d4555d] text-[12px] rounded-[8px] hover:bg-[#d4555d] text-[#e9ebf2] py-[5px] px-[10px] duration-300 ease-linear">
              Best Practice
            </p>
            <p className="border-[1px] border-[#1d6ee3] text-[12px] rounded-[8px] hover:bg-[#1d6ee3] text-[#e9ebf2] py-[5px] px-[10px] duration-300 ease-linear">
              Indie Filmmaking
            </p>
          </div>
          <p>Independent filmmaking is both an art and a test of resourcefulness. With limited budgets and often minimal support, indie filmmakers must navigate a labyrinth of challenges to bring their stories to life. This guide provides a comprehensive breakdown of each stage of the filmmaking process, offering actionable advice to help you transform your idea into a cinematic masterpiece.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
