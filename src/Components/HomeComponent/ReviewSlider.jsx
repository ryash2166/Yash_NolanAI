import React from "react";
import Carousel from "../Common/Slider";
import { MdOutlineArrowForward } from "react-icons/md";
import { items } from "../Common/AllData";

const ReviewSlider = () => {
  return (
    <>
      <Carousel
        item={items}
        buttonProps={{
          className: "mt-4 w-fit flex",
          text: "All Testimonials",
          to: "/testimonials",
          icon: MdOutlineArrowForward,
          iconSize: "w-6 h-6",
        }}
      />
    </>
  );
};

export default ReviewSlider;
