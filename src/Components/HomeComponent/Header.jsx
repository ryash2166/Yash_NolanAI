import React from "react";
import banner1 from "../../assets/asset_14.svg";
import banner3 from "../../assets/asset_16.svg";
import poster from "../../assets/asset_0.jpeg";
import Button from "../Common/Button";
import { MdOutlineArrowForward } from "react-icons/md";

const Header = () => {
  return (
    <section className="relative ">
      <div className="relative h-full">
        <div className="absolute left-0 top-0 h-full w-full">
          <img className="" src={banner1} alt="Banner" />
        </div>
        <div className="absolute left-0 top-0  max-sm:hidden">
          <img className="" src={banner3} alt="" />
        </div>
        <div className="flex items-center ju min-h-[600px] px-16 py-8 max-md:block max-sm:p-6">
          <div className="z-[1] w-full max-md:mt-[60px]">
            <h1 className="m-0 text-white text-[40px] font-extralight max-md:text-4xl max-md:text-center max-md:font-light">
              Bring your film project to life
            </h1>
            <h3 className="m-0 text-white text-[40px] font-extralight max-md:text-4xl max-md:text-center max-md:font-light">
              from <span></span>
              <span className="text-[64px] mr-2 font-bold max-md:text-5xl max-md:text-center">
                idea
              </span>
              to <span></span>
              <span className="text-[64px] font-bold max-md:text-5xl max-md:text-center">
                production
              </span>
            </h3>
            <a
              className="inline-block mt-16 max-md:mt-7 max-md:flex max-md:justify-center"
              href="/"
            >
              <Button
                text="Start Creating"
                iconSize="w-6 h-6"
                icon={MdOutlineArrowForward}
              />
            </a>
          </div>
          <div className="min-h-[450px] max-md:flex max-md:justify-center">
            <div
              className="z-[5] relative h-[70px] w-[590px] -top-[30px] -right-[40px] bg-contain bg-no-repeat max-lg:hidden"
              style={{
                backgroundImage: `url("https://www.nolanai.app/_next/static/media/discount-banner.0fdea41f.png")`,
              }}
            ></div>
            <div
              className="z-[5] relative h-[70px] w-[200px] -top-[30px] -right-[40px] bg-contain bg-no-repeat max-md:static max-md:mt-10 max-md:h-[76px] lg:hidden"
              style={{
                backgroundImage: `url(" https://www.nolanai.app/_next/static/media/discount-banner-mobile.d2e9539b.png")`,
              }}
            ></div>
            <div className="max-md:relative max-md:hidden">
              <div
                className="absolute rounded-3xl h-[400px] w-[670px] right-[70px] top-[130px] blur-xl bg-[#1d6ee366] max-lg:w-[500px] max-lg:h-[400px] max-lg:right-[30px] max-lg:top-[100px] "
                style={{ transform: "perspective(1500px) rotateY(-35deg)" }}
              ></div>
              <div
                className="absolute right-[70px] top-[130px] w-[650px] h-[400px] max-lg:w-[500px] max-lg:h-[400px] max-lg:right-[30px] max-lg:top-[155px] max-md:relative"
                style={{ transform: "perspective(1500px) rotateY(-35deg)" }}
              >
                <video
                  className="block absolute top-0 left-0 rounded-2xl"
                  autoPlay
                  src="https://nolan-space.sfo3.cdn.digitaloceanspaces.com/assets/meet_bryce.mp4"
                  preload="none"
                  poster={poster}
                  muted
                  controls
                  playsInline
                ></video>
              </div>
            </div>
          </div>
          <div className="md:hidden relative max-md:flex max-md:justify-center max-md:items-center max-md:-top-[70px] max-sm:-top-[100px]">
            <div className="absolute max-md:w-[500px] max-md:h-[500px] max-sm:w-[330px] max-sm:h-[330px] ">
              <video
                className="block top-0 rounded-2xl"
                src="https://nolan-space.sfo3.cdn.digitaloceanspaces.com/assets/meet_bryce.mp4"
                preload="none"
                poster={poster}
                muted
                controls
                playsInline
              ></video>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 relative text-white max-lg:mb-[50px] max-lg:mt-0 max-lg:px-[20px]">
          <h1 className="font-bold text-[40px]">
            NolanAI is a collaborative film production suite
          </h1>
          <h2 className="text-2xl font-light leading-7 pt-[10px] py-[20px]">
            "covering the full film production process from concept creation and
            screenwriting to planning and stage production"
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
