import React, { useState } from "react";
import iconbg from "../assets/asset_24.svg";
import Button from "./Common/Button";

// Icons
import {
  MdOutlineArrowForward,
  MdOutlineDraw,
  MdOutlineEmojiObjects,
  MdOutlineDeveloperBoard,
  MdOutlineThumbUp,
  MdOutlinePsychologyAlt,
  MdOutlineCases,
  MdOutlineFormatAlignCenter,
  MdOutlineWorkspaces,
  MdOutlineUploadFile,
  MdOutlineNewspaper,
  MdMovieFilter,
  MdOutlinePhotoSizeSelectActual,
  MdOutlineSchedule,
  MdOutlineFormatListBulleted,
} from "react-icons/md";

const AiFeature = () => {
  const [activeTab, setActiveTab] = useState("Screenwriters");

  const tabs = [
    {
      title: "Screenwriters",
      content: [
        {
          text: "Write and experiment for free script editor with affordable Premium plans.",
          icon: <MdOutlineDraw className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Avoid writers's blocks with AI-powered suggestions.",
          icon: <MdOutlineEmojiObjects className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Brainstorm with AI to develop story beats and test out scene and character concepts.",
          icon: <MdOutlinePsychologyAlt className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Create scripts that look and feel professional without stressing out about the technicalities.",
          icon: <MdOutlineCases className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Cut down on tedious tasks such as formatting with Built-in automated script formatting.",
          icon: (
            <MdOutlineFormatAlignCenter className="w-6 h-6 text-[#2c79ea]" />
          ),
        },
        {
          text: "Collaborate with your team, get suggestions and feedback from your peers and colleagues.",
          icon: <MdOutlineWorkspaces className="w-6 h-6 text-[#2c79ea]" />,
        },
      ],
    },
    {
      title: "Producers",
      content: [
        {
          text: "Quickly import and work on existing scripts, streamlining the pre-production process.",
          icon: <MdOutlineUploadFile className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Generate comprehensive production schedules in seconds based on automatic script breakdowns.",
          icon: (
            <MdOutlineFormatListBulleted className="w-6 h-6 text-[#2c79ea]" />
          ),
        },
        {
          text: "Save on multiple tools by getting script scoring and coverage directly within the platform.",
          icon: <MdOutlineNewspaper className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Easily create compelling pitch decks that are directly linked to your script, enhancing the pitch process.",
          icon: <MdMovieFilter className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Access a vast library of film industry images, including posters and cast member photos, to find the perfect visual representation for your projects.",
          icon: (
            <MdOutlinePhotoSizeSelectActual className="w-6 h-6 text-[#2c79ea]" />
          ),
        },
        {
          text: "Reduce expenses by consolidating several production tools into one efficient platform, cutting down on overhead and increasing productivity.",
          icon: <MdOutlineWorkspaces className="w-6 h-6 text-[#2c79ea]" />,
        },
      ],
    },
    {
      title: "Directors",
      content: [
        {
          text: "Streamline your preparation with our automated breakdown, saving days of manual work and allowing more time for creative decisions.",
          icon: (
            <MdOutlineFormatListBulleted className="w-6 h-6 text-[#2c79ea]" />
          ),
        },
        {
          text: "Benefit from scheduling that's directly linked to your script breakdown, with seamless adjustments as script changes occur, ensuring constant alignment with your production team.",
          icon: <MdOutlineSchedule className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Utilize our impressive storyboard features that assist with detailed camera directions and render high-quality AI-generated images to visualize scenes vividly.",
          icon: <MdOutlineDeveloperBoard className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Gain deep insights with advanced analytics that review your script to identify any gaps or elements that might be missing, enhancing the narrative and technical robustness.",
          icon: <MdOutlineNewspaper className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Facilitate effective communication and instant feedback within your team through an integrated platform designed to keep everyone updated and engaged.",
          icon: <MdOutlineWorkspaces className="w-6 h-6 text-[#2c79ea]" />,
        },
        {
          text: "Maintain artistic integrity while leveraging technology to refine scenes, enhance pacing, and perfect shot compositions with intuitive tools that support your directorial vision.",
          icon: <MdOutlineThumbUp className="w-6 h-6 text-[#2c79ea]" />,
        },
      ],
    },
  ];

  const handleButtonClick = () => {
    console.log("Button clicked without reloading the page");
  };

  return (
    <div>
      {/* Tab Header */}
      <div className="flex justify-center items-center text-center space-x-8 max-sm:space-x-0 border-b border-gray-700 max-sm:flex-col">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`text-[32px] font-light pb-2 cursor-pointer hover:!text-[#2c79ea] ease-in duration-200 ${
              activeTab === tab.title
                ? "text-[#2c79ea] border-b-2 border-[#2c79ea] !font-bold "
                : "text-white"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {tabs
          .find((tab) => tab.title === activeTab)
          ?.content.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-lg hover:shadow-md transition"
            >
              <div className="relative flex items-center justify-center w-14 h-14  shrink-0">
                <img src={iconbg} alt="" className="w-full h-full" />
                {/* Icon Placeholder */}
                <span className="absolute material-icons text-white">
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="text-white leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* All Features Button */}
      <div className="flex justify-center mt-8">
        <Button
          className=""
          text="All Features"
          icon={MdOutlineArrowForward}
          iconSize="w-6 h-6"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default AiFeature;
