import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../../assets/asset_27.svg";
import next from "../../assets/asset_29.svg";
import reviewframe from "../../assets/asset_28.svg";
import Button from "./Button";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-2 top-1/2  z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src={prev} alt="Prev" className="w-12 h-12" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-2 top-1/2  z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src={next} alt="Next" className="w-12 h-12" />
    </div>
  );
};

const Carousel = ({ item, buttonProps }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="flex justify-center items-center pt-16 px-16 relative z-[1] flex-col max-md:px-0 max-sm:py-[20px]">
      <div className="max-w-full max-md:w-auto max-md:px-5">
        <Slider {...settings}>
          {item.map((item, index) => (
            <div
              key={index}
              className="!flex flex-row max-md:!flex-col max-md:!justify-center max-md:!items-center justify-start gap-x-8 relative z-[1]"
            >
              <div className="w-2/4 h-full bg-transparent flex justify-center items-center my-auto relative max-lg:static max-lg:w-1/2 max-sm:w-full">
                <img
                  src={reviewframe}
                  alt=""
                  className="max-w-[380px] max-h-[380px] max-lg:!hidden"
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[180px] h-[180px] absolute object-cover rounded-full mt-[16px] mr-3 max-lg:static max-lg:m-0"
                />
              </div>
              <div className="w-full">
                <div className="w-full text-white">
                  <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">
                    {item.title}
                  </p>
                </div>
                <div className="flex items-center mb-3 gap-2">
                {item.review_img_2 && (
                    <img src={item.review_img_2} alt="" className="w-8 h-8" />
                  )}
                  {item.review_img_2 && (
                    <img src={item.review_img_2} alt="" className="w-8 h-8" />
                  )}
                </div>
                <div className="text-white text-base leading-6">
                  <p className="mb-3">{item.review_1}</p>
                  <p className="mb-3">{item.review_2}</p>
                  <p className="mb-3">{item.review_3}</p>
                  <p className="mb-3">{item.review_4}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {buttonProps && <Button {...buttonProps} />}
    </div>
  );
};

export default Carousel;
