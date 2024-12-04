import React from "react";
import student from "../../assets/students.webp";
import enter from "../../assets/enter.webp";
import Button from "../Common/Button";
import { MdForwardToInbox } from "react-icons/md";

const Student = () => {
  return (
    <>
      <div className="bg-[#191b1f] flex flex-col justify-start items-start my-[24px] p-16 max-xl:py-16 max-xl:px-4">
        <div className="inline-flex gap-6 items-center justify-start max-xl:flex-col ">
          <div className="w-[421px] justify-center flex self-stretch items-center gap-1 max-xl:w-[unset]">
            <div className="w-[336px] h-[336px] max-sm:w-[290px] max-sm:h-[290px] relative justify-center flex  items-center">
              <img
                src={student}
                alt=""
                className="absolute z-[1] w-full h-full text-transparent object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-8 pr-[375px] max-2xl:pr-0 max-xl:text-center max-xl:items-center">
            <div className="self-stretch flex-col justify-center items-start gap-3 flex ">
              <div className="self-stretch text-[40px] text-white font-bold break-words">
                For Students - 50% discount
              </div>
              <div className="self-stretch text-[24px] text-[#f5f2f0] font-light break-words">
                Student Exclusive: Get a{" "}
                <strong className="text-[#da8813]">
                  50% discount on our annual subscription!&nbsp;
                </strong>
                Email us at{" "}
                <span className="text-[#007bff] ">discount@nolanai.app</span>{" "}
                from the email you used to register on our platform, and receive
                your personalized promo code. Boost your learning and creativity
                with NolanAI today!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#191b1f] flex flex-col justify-start items-start my-[24px] p-16 pt-0 max-xl:py-16 max-xl:px-4 max-lg:p-0">
        <div className="inline-flex gap-6 items-center justify-start max-xl:flex-col ">
          <div className="w-[421px] justify-center flex self-stretch items-center gap-1 max-xl:w-[unset]">
            <div className="w-[336px] h-[336px] max-sm:w-[290px] max-sm:h-[290px] relative justify-center flex  items-center">
              <img
                src={enter}
                alt=""
                className="absolute z-[1] w-full h-full text-transparent object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-8 pr-[375px] max-2xl:pr-0 max-xl:text-center max-xl:items-center">
            <div className="self-stretch flex-col justify-center items-start gap-3 flex max-xl:items-center">
              <div className="self-stretch text-[40px] text-white font-bold break-words">
                Enterprise
              </div>
              <div className="self-stretch text-[24px] text-[#f5f2f0] font-light break-words">
                Didn't find the options you were looking for? If you're a large
                team looking for a custom solution, we've got you covered!
              </div>
              <div className="self-stretch text-white  text-base leading-6 font-light break-words">
                All features unlimited in Pro plan and custom solutions
              </div>
              <Button
                className="mt-[30px]"
                text="See More"
                icon={MdForwardToInbox}
                iconSize="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
