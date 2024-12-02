import React from "react";
import frame from "../assets/asset_18.svg";
import videoAi from "../assets/videoeditor.mp4";
import videoPoster from "../assets/VideoEditor.webp";
import Button from "./Common/Button";
import { MdOutlineArrowForward } from "react-icons/md";

const VideoEditor = () => {
  const handleButtonClick = () => {
    console.log("Button clicked without reloading the page");
  };

  return (
    <div className="flex pt-10 px-16 relative justify-center gap-8 max-xl:flex-col max-xl:px-[20px] max-sm:py-[10px] max-sm:px-[20px] max-sm:flex-col">
      <div className="relative z-[2] max-xl:px-[20px] max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-sm:p-0">
        <div className="relative w-[700px] h-[350px] max-lg:w-auto max-lg:h-auto">
          <img className="max-sm:hidden" src={frame} alt="Video_Frame" />
          <div className="absolute top-[10px] left-[70px] w-[540px] h-[300px] max-sm:relative max-sm:py-[10px] max-sm:px-0 max-sm:left-0 max-sm:w-full max-sm:h-full">
            <video
              className="rounded-3xl w-full h-full"
              preload="none"
              poster={videoPoster}
              controls
              playsInline
              src={videoAi}
            ></video>
          </div>
        </div>
      </div>
      <div className="relative z-[1] text-white">
        <h2 className="m-0 text-[64px] font-light text-[#e4931d]">
          NoalAI <span className="font-bold">Video Editor</span>
        </h2>
        <p className="text-2xl leading-7">
          Transform your scripts into cinematic visuals with our upcoming AI
          video editor.
        </p>
        <p className="text-2xl leading-7">
          Sign up now to be among the first to access it!
        </p>
        <Button
          className="mt-[30px]"
          text="Join waitlist now!"
          icon={MdOutlineArrowForward}
          iconSize="w-6 h-6"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default VideoEditor;
