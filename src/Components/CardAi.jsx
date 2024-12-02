import React from "react";
import Cards from "./Common/Cards";
import Button from "./Common/Button";

// Icons
import {
  MdOutlineDriveFileRenameOutline,
  MdMovieFilter,
  MdOutlineTranslate,
  MdOutlineListAlt,
  MdOutlineArrowForward,
  MdOutlineQueryStats,
} from "react-icons/md";

const CardAi = () => {
  return (
    <div className="flex justify-center items-center pt-16 px-16 flex-col relative z-[1] max-sm:py-[10px] max-sm:px-0">
      <div className="flex flex-row flex-wrap justify-center items-start w-full gap-8 max-sm:px-[20px]">
        <Cards
          href="/"
          icon={MdOutlineDriveFileRenameOutline}
          title="AI Co-Pilot Editor"
          description="Overcome writer's block with AI-driven prompts and suggestions, ensuring a seamless writing flow."
        />
        <Cards
          href="/"
          icon={MdMovieFilter}
          title="AI Pitch Deck"
          description="Create compelling pitch decks effortlessly with ready-made templates. NolanAI extracts crucial details to suggest casts and visualize your story."
        />
        <Cards
          href="/"
          icon={MdOutlineTranslate}
          title="Multilingual"
          description="Work seamlessly in Spanish, French, Portuguese, or Russian - no language barriers to hold back your projects."
        />
        <Cards
          href="/"
          icon={MdOutlineQueryStats}
          title="Analytics"
          description="Instantly identify plot holes and receive thorough script coverage analysis. Perfect your screenplay with targeted insights and scores."
        />
        <Cards
          href="/"
          icon={MdOutlineListAlt}
          title="Automated Breakdown"
          description="Streamline pre-production with automatic breakdowns that quickly organize script elements for efficient planning."
        />
      </div>
      <Button
        className="mt-[30px]"
        text="Sign Up For Free"
        icon={MdOutlineArrowForward}
        iconSize="w-6 h-6"
      />
    </div>
  );
};

export default CardAi;
