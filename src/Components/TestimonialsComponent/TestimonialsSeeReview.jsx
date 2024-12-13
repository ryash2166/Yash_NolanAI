import React from "react";
import { Link, useParams } from "react-router";
import reviewframe from "../../assets/asset_28.svg";
import { items } from "../Common/AllData";

const TestimonialsSeeReview = () => {
  const { id } = useParams();
  const review = items.find((item) => item.id.toString() === id);
  return (
    <div className="min-h-[93vh] bg-[#171a1f]">
      <div className="flex flex-col items-start justify-start">
        <div className="self-stretch py-8 px-16 max-sm:px-4 justify-start items-center gap-16 inline-flex mt-[60px] z-[1] max-sm:mt-[30px]">
          <div className="inline-flex flex-1 flex-col justify-center items-start">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-[#ffffff70]  break-words tracking-[0.03px] font-light text-[14px]">
                <Link to="/">NOLAN</Link>
                {" // "}
                <Link to="/testimonials">TESTIMONIALS</Link>
                {" // "}
              </div>
              <div className="text-white text-[14px]">{review.name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center max-sm:flex-col max-sm:px-[20px] max-sm:block">
        <div className="flex justify-center items-center relative h-[400px] flex-grow-[0.5] flex-shrink basis-0">
          <img
            src={reviewframe}
            alt="reviewFrame"
            className="absolute w-full h-full top-0 left-0"
          />
          <div className="w-[180px] h-[180px] flex justify-center items-center relative -left-[7px] top-2">
            <img
              src={review.image}
              alt="reviewerImage"
              className="w-full h-full inset-0 text-transparent object-cover rounded-[50%] absolute"
            />
          </div>
        </div>
        <div className="text-white flex-1 gap-8 flex-col pr-[30px] max-sm:pr-0">
          <div>
            <h1 className="text-4xl font-semibold">{review.name}</h1>
            <h2 className="text-[14px] mt-2 tracking-[1px] font-normal text-[#ffffff70]">
              {review.title}
            </h2>
          </div>
          <div>
            <div className="text-[#f5f2f0]">
              <p className="text-[17px] leading-8 font-light">
                {review.review_1}
              </p>
              <p className="text-[17px] leading-8 font-light">
                {review.review_2}
              </p>
              <p className="text-[17px] leading-8 font-light">
                {review.review_3}
              </p>
              <p className="text-[17px] leading-8 font-light">
                {review.review_4}
              </p>
            </div>
          </div>
          <div className="flex gap-2 pt-3">
            {review.review_img_1 && (
              <img src={review.review_img_1} alt="" className="w-8 h-8" />
            )}
            {review.review_img_2 && (
              <img src={review.review_img_2} alt="" className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSeeReview;
