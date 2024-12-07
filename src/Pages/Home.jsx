import React from "react";

// Common Compoents & Components
import { ImageSection, TextSection } from "../Components/Common/UserPerson";
import Header from "../Components/HomeComponent/Header";
import VideoEditor from "../Components/HomeComponent/VideoEditor";
import CardAi from "../Components/HomeComponent/CardAi";
import Button from "../Components/Common/Button";
import Secure from "../Components/HomeComponent/Secure";
import AiFeature from "../Components/HomeComponent/AiFeature";
import SkyRocket from "../Components/HomeComponent/SkyRocket";

// Assets
import poster from "../assets/asset_0.jpeg";
import img1 from "../assets/asset_1.jpeg";
import img2 from "../assets/asset_2.jpeg";
import img3 from "../assets/asset_3.jpeg";
import red from "../assets/asset_14.svg";
import blue from "../assets/asset_15.svg";
import imgBg1 from "../assets/asset_20.svg";
import bg1 from "../assets/asset_21.svg";
import imgBg2 from "../assets/asset_22.svg";
import bg2 from "../assets/asset_23.svg";

// Icons
import { AiOutlineDiscord } from "react-icons/ai";
import { MdOutlineArrowForward } from "react-icons/md";
import ReviewSlider from "../Components/HomeComponent/ReviewSlider";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <VideoEditor />
        <CardAi />
        <div className="container flex px-16 pt-16 relative z-[2] mx-auto flex-col max-lg:px-[20px] max-lg:pt-0 max-lg:m-0 max-lg:mt-5">
          <div className="text-center text-white">
            <h4 className="text-[40px] font-extralight">
              Leading the charge in
              <span className="text-[40px] font-bold"> Ethical AI</span>
            </h4>
            <p className="text-2xl">
              At NolanAI, we prioritize the ethical implications of AI in the
              creative industry.
              <br />
              We believe in AI-powered tools that enhance human-driven
              storytelling.
            </p>
            <Button
              className="mt-[30px]"
              text="Learn more"
              to="/aboutus"
              icon={MdOutlineArrowForward}
              iconSize="w-6 h-6"
            />
          </div>
        </div>

        <div className="container pt-16 px-16 relative z-[1] flex flex-col mx-auto max-lg:px-[10px] max-lg:py-12 max-sm:py-[10px] max-sm:px-0">
          <div className="text-white text-center max-lg:px-[20px] max-lg:m-0">
            <h4 className="text-[40px] font-extralight">
              From <span className="font-bold">screen writing</span> to{" "}
              <span className="font-bold">pre-production</span>,
            </h4>
            <h4 className="text-[40px] font-extralight">we got you covered!</h4>
          </div>
          <div className="flex gap-8 relative z-[1] max-sm:px-[20px] max-sm:py-[10px] max-md:block max-sm:flex-col max-sm:items-start max-sm:justify-start">
            {/* Image Section */}
            <ImageSection
              imgBg={imgBg1}
              img={img1}
              imgStyle={
                "top-[249px] left-[76px] z-[1] w-fit h-[335px] absolute max-sm:h-[300px]"
              }
              foregroundStyle={{
                transform: "perspective(702px) rotateY(12.4deg)",
                transformOrigin: "0 -1600px",
              }}
              customStyles="relative mx-[85px]  max-lg:m-0 max-lg:flex max-lg:justify-center" // Additional custom styles if needed
            />
            {/* Text Section */}
            <TextSection
              titlePart1="Enhance your"
              titlePart2="screenwriting experience"
              description="Providing tailored solutions to overcome writer's block and streamlining your creative process."
              buttonProps={{
                className: "w-fit flex",
                to:'/features',
                text: "NolanAI for Screenwriters",
                icon: MdOutlineArrowForward,
                iconSize: "w-6 h-6",
              }}
              customStyles="mt-8" // Additional custom styles if needed
            />
          </div>

          <div className="flex gap-8 relative z-[1] max-sm:px-[20px] max-sm:py-[10px] max-md:block max-sm:flex-col max-sm:items-start max-sm:justify-start">
            <div className="absolute left-[285.5px] -top-[133px] max-xl:left-auto max-lg:hidden">
              <img src={bg1} alt="" className="" />
            </div>

            {/* Image Section */}
            <ImageSection
              imgBg={imgBg2}
              img={img2}
              imgStyle={
                "top-[78px] left-[50px] z-[1] w-fit h-[335px] absolute max-sm:h-[300px]"
              }
              foregroundStyle={{
                transform: "perspective(685px) rotateY(12deg) rotateX(0deg)",
                transformOrigin: "0 1800px",
              }}
              customStyles="md:order-2 relative w-full mx-[85px] max-lg:m-0 max-lg:flex max-lg:justify-center" // Additional custom styles if needed
            />

            {/* Text Section */}
            <TextSection
              titlePart1="Save time"
              titlePart2="cutting down on trivial tasks"
              description="revolutionizing the filmmaking process for producers: cutting costs and resources by automating script analysis. Helping create outstanding pitch decks resonating with your project"
              buttonProps={{
                className: "w-fit flex",
                to:'/features',
                text: "NolanAI for Producers",
                icon: MdOutlineArrowForward,
                iconSize: "w-6 h-6",
              }}
              customStyles="text-right mt-8" // Additional custom styles if needed
            />
          </div>

          <div className="flex gap-8 relative z-[1] max-sm:px-[20px] max-sm:py-[10px] max-md:block max-sm:flex-col max-sm:items-start max-sm:justify-start">
            <div className="absolute left-[450px] -top-[133px] max-xl:left-auto max-lg:hidden">
              <img src={bg2} alt="" className="" />
            </div>
            {/* Image Section */}
            <ImageSection
              imgBg={imgBg1}
              img={img3}
              imgStyle={
                "top-[249px] left-[76px] z-[1] w-fit h-[335px] absolute max-sm:h-[300px] "
              }
              foregroundStyle={{
                transform: "perspective(702px) rotateY(12.4deg)",
                transformOrigin: "0 -1600px",
              }}
              customStyles="relative mx-[85px] w-full h-full max-lg:m-0 max-lg:flex max-lg:justify-center" // Additional custom styles if needed
            />
            {/* Text Section */}
            <TextSection
              titlePart1="Have full control over the"
              titlePart2="creative process"
              description="saving you valuable time by automating repetitive tasks and facilitating seamless collaboration with the rest of your team. assisting in crafting the perfect schedule for a smooth production workflows of your creative vision."
              buttonProps={{
                className: "w-fit flex",
                to:'/features',
                text: "NolanAI for Directors",
                icon: MdOutlineArrowForward,
                iconSize: "w-6 h-6",
              }}
              customStyles="mt-8" // Additional custom styles if needed
            />
          </div>
        </div>
        <Secure />
        <div className="flex pt-16 px-16 justify-center gap-8 relative max-xl:flex-col max-lg:px-[20px] max-lg:pt-0 max-sm:py-[20px]">
          <div className="-top-[100px] z-[1] left-0 absolute  ">
            <img src={red} />
          </div>
          <div className="-top-[100px] right-0 z-[1] absolute max-md:hidden">
            <img src={blue} />
          </div>
          <div className=" relative z-[1] text-white ">
            <h2 className="text-[64px] font-thin m-0">
              NolanAI <span className="font-bold">in Action</span>
            </h2>
            <h4 className="text-2xl font-light text-gray-400">Meet Bryce</h4>
            <p className="my-8 text-base font-light leading-6">
              An independent filmmaker who is utilizing the full power of
              NolanAI to break down scripts, create pitch decks and storyboards,
              and reach his ultimate goal.
            </p>
            <p className="my-8 text-base font-light leading-6">
              With its AI-powered features and user-friendly interface, it can
              help you bring your stories to life in the most efficient and
              effective way possible, while respecting your unique creative
              voice.
            </p>
            <Button
              to="/pricing"
              className=""
              text="View premium plans"
              icon={MdOutlineArrowForward}
              iconSize="w-6 h-6"
            />
          </div>
          <div className="relative max-w-full h-full right-0 z-[2] max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:px-[20px] max-sm:p-0">
            <div className=" max-w-[540px] top-[10px] ">
              <video
                src="https://nolan-space.sfo3.cdn.digitaloceanspaces.com/assets/happy-halloween.mp4"
                preload="none"
                controls
                playsInline
                poster={poster}
                className="rounded-3xl w-full h-full"
              ></video>
            </div>
          </div>
        </div>

        <div className="flex pt-16 px-16 relative flex-col justify-center gap-8 z-[1] max-xl:px-[20px] max-xl:pt-0 max-xl:flex-col max-sm:py-[10px] max-sm:px-[20px]">
          <div className="relative text-center text-white  z-[1] ">
            <h3 className="text-[64px] font-light ">
              <span className="font-bold">Up your Game</span> with NolanAI
            </h3>
            <p className="my-[32px] text-2xl leading-6 font-light">
              NolanAI is the ultimate tool for any screenwriter looking to
              improve their craft. With its AI-powered features and
              user-friendly interface, it can help you bring your stories to
              life in the most efficient and effective way possible, while
              respecting your unique creative voice.
            </p>
          </div>
          <AiFeature />
        </div>

        <div className="flex pt-16 px-16 relative items-center flex-col justify-center gap-8 z-[1] max-xl:px-[20px] max-xl:pt-0 max-xl:flex-col max-sm:py-[10px] max-sm:px-[20px]">
          <div className="relative z-[1] pb-8 text-white text-center">
            <h3 className="text-[40px] font-bold">
              Skyrocket your productivity
            </h3>
          </div>
          <div className="flex w-full justify-center">
            <SkyRocket />
          </div>
          <Button
            className="mt-[30px]"
            text="Join Us On Discord"
            icon={AiOutlineDiscord}
            iconSize="w-6 h-6"
          />
        </div>
        <ReviewSlider />
      </main>
    </>
  );
};

export default Home;
