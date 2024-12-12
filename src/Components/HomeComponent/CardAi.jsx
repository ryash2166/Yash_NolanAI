import React from "react";
import Cards from "../Common/Cards";
import Button from "../Common/Button";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex justify-center items-center pt-16 px-16 flex-col relative z-[1] max-sm:py-[10px] max-sm:px-0">
      <div className="flex flex-row flex-wrap justify-center items-start w-full gap-8 max-sm:px-[20px]">
        <Cards
          to="/features"
          className="max-w-[415px]"
          icon={MdOutlineDriveFileRenameOutline}
          title="AI Co-Pilot Editor"
          description="Overcome writer's block with AI-driven prompts and suggestions, ensuring a seamless writing flow."
        />
        <Cards
          to="/"
          className="max-w-[415px]"
          icon={MdMovieFilter}
          title="AI Pitch Deck"
          description="Create compelling pitch decks effortlessly with ready-made templates. NolanAI extracts crucial details to suggest casts and visualize your story."
        />
        <Cards
          to="/"
          className="max-w-[415px]"
          icon={MdOutlineTranslate}
          title="Multilingual"
          description="Work seamlessly in Spanish, French, Portuguese, or Russian - no language barriers to hold back your projects."
        />
        <Cards
          to="/"
          className="max-w-[415px]"
          icon={MdOutlineQueryStats}
          title="Analytics"
          description="Instantly identify plot holes and receive thorough script coverage analysis. Perfect your screenplay with targeted insights and scores."
        />
        <Cards
          to="/"
          className="max-w-[415px]"
          icon={MdOutlineListAlt}
          title="Automated Breakdown"
          description="Streamline pre-production with automatic breakdowns that quickly organize script elements for efficient planning."
        />
      </div>
      <Button
        className="mt-[30px]"
        text="Sign Up For Free"
        onClick={() => loginWithRedirect()}
        icon={MdOutlineArrowForward}
        iconSize="w-6 h-6"
      />
    </div>
  );
};

export default CardAi;
