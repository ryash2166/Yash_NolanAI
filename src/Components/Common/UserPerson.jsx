import React from "react";
import Button from "./Button";

const ImageSection = ({
  imgBg,
  img,
  customStyles,
  imgStyle,
  foregroundStyle = {},
}) => {
  return (
    <div className={`${customStyles}`}>
      {/* Background Image */}
      <img
        src={imgBg}
        alt=""
        className="w-[486px] h-[632px]   max-sm:left-0 max-sm:w-fit max-sm:top-0"
      />
      {/* Foreground Image with Perspective */}
      <div
        className={`${imgStyle}`}
        style={{
          ...foregroundStyle, // Merges additional custom styles
        }}
      >
        <img
          src={img}
          alt=""
          className="object-cover rounded-xl w-full h-full"
        />
      </div>
    </div>
  );
};

const TextSection = ({
  titlePart1,
  titlePart2,
  description,
  buttonProps,
  customStyles,
}) => {
  return (
    <div className={`flex justify-center flex-col text-white ${customStyles}`}>
      {/* Title */}
      <h5 className="text-[40px] m-0 font-extralight">{titlePart1}</h5>
      <h5 className="text-[40px] m-0 font-extralight">
        <span className="font-bold">{titlePart2}</span>
      </h5>
      {/* Description */}
      <p className="text-[20px] font-light leading-8">{description}</p>
      {/* Button */}
      {buttonProps && (
        <div className="mt-4">
          <Button {...buttonProps} />
        </div>
      )}
    </div>
  );
};

// Export Components
export { ImageSection, TextSection };
