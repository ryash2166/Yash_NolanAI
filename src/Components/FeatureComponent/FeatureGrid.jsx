import React from "react";
import FeatureCard from "./FeatureCard";

// Icon
import {
  MdOutlineAutoAwesome,
  MdOutlineDeveloperBoard,
  MdOutlineDriveFileRenameOutline,
  MdOutlineEmojiEvents,
  MdOutlineListAlt,
  MdOutlineMedicalServices,
  MdOutlineMovieFilter,
  MdOutlineNewspaper,
  MdOutlinePermMedia,
  MdOutlinePsychology,
  MdOutlineSavings,
  MdOutlineSchedule,
  MdOutlineTroubleshoot,
  MdOutlineVideoCameraFront,
  MdOutlineVideoFile,
} from "react-icons/md";

const FeatureGrid = () => {
  return (
    <div className="flex relative flex-wrap justify-center z-[1] max-xl:flex-col">
      <div className="flex justify-center relative w-full mb-6 max-xl:p-0 max-sm:mb-0">
        <div className="flex w-full justify-start gap-6 px-16 max-xl:flex-col max-xl:justify-start max-xl:items-start max-sm:p-0 max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:gap-[inherit]">
          <FeatureCard
            icon={MdOutlineVideoFile}
            iconBackground="rgb(30, 18, 74)"
            title="Video Editor (coming soon)"
            description="A bold, fiery new video editor feature is on its way. Stay tuned for the Hot Red Party—your next creative game-changer! 🚀"
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlinePermMedia}
            iconBackground="rgb(120, 167, 90)"
            title="SHOT LIST "
            description="NolanAI's shot list feature adapts seamlessly to your schedule and storyboard."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineEmojiEvents}
            iconBackground="rgb(128, 0, 128)"
            title="NOLANAI CONTESTS (coming soon)"
            description="Join NolanAI's Contests: Showcase, Learn, Win!"
            route="/features/analytics-dashboard"
          />
        </div>
      </div>
      <div className="flex justify-center relative w-full mb-6 max-xl:p-0 max-sm:mb-0">
        <div className="flex w-full justify-start gap-6 px-16 max-xl:flex-col max-xl:justify-start max-xl:items-start max-sm:p-0 max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:gap-[inherit]">
          <FeatureCard
            icon={MdOutlineMovieFilter}
            iconBackground=" rgb(218, 136, 19)"
            title="AI PITCH DECK"
            description="The essential tool for filmmakers seeking to craft captivating pitch decks effortlessly."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineNewspaper}
            iconBackground="rgb(154, 33, 7)"
            title="AI SCRIPT COVERAGE"
            description="AI Script Coverage delivers a comprehensive report on your script's logline, impression, synopsis, and character details—all within minutes."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineSavings}
            iconBackground="rgb(82, 94, 98)"
            title="AI BUDGETING (coming soon)"
            description="Coming Soon Our AI budgeting goes beyond simple calculations. It leverages the power of AI to forecast your budget based on your script."
            route="/features/analytics-dashboard"
          />
        </div>
      </div>
      <div className="flex justify-center relative w-full mb-6 max-xl:p-0 max-sm:mb-0">
        <div className="flex w-full justify-start gap-6 px-16 max-xl:flex-col max-xl:justify-start max-xl:items-start max-sm:p-0 max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:gap-[inherit]">
          <FeatureCard
            icon={MdOutlineSchedule}
            iconBackground="rgb(19, 100, 217)"
            title="SCHEDULING"
            description="Automatically sorts your stripboard (with advanced algorithms and the power of AI) in the most efficient way for shooting."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlinePsychology}
            iconBackground="rgb(218, 136, 19)"
            title="BRAINSTORMING"
            description="Collaborate with AI on brainstorming for script and screenplay writing."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineDeveloperBoard}
            iconBackground="rgb(100, 156, 7)"
            title="AUTOMATED STORYBOARD"
            description="Next-Level Storyboard for Film and Story Development."
            route="/features/analytics-dashboard"
          />
        </div>
      </div>
      <div className="flex justify-center relative w-full mb-6 max-xl:p-0 max-sm:mb-0">
        <div className="flex w-full justify-start gap-6 px-16 max-xl:flex-col max-xl:justify-start max-xl:items-start max-sm:p-0 max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:gap-[inherit]">
          <FeatureCard
            icon={MdOutlineVideoCameraFront}
            iconBackground="rgb(126, 8, 43)"
            title="CHARACTER DEVELOPMENT"
            description="Create, Edit your character with help of AI."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineAutoAwesome}
            iconBackground="rgb(131, 198, 25)"
            title="AI COPILOT"
            description="To help you create high-quality story, Nolan offers a powerful  AI editing feature."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineMedicalServices}
            iconBackground="rgb(187, 39, 26)"
            title="SCRIPT DOCTOR (smart formatting)"
            description="Smart formatting changed to a Script doctor, advising you not only on format but also the screenplay improvements."
            route="/features/analytics-dashboard"
          />
        </div>
      </div>
      <div className="flex justify-center relative w-full mb-6 max-xl:p-0">
        <div className="flex w-full justify-start gap-6 px-16 max-xl:flex-col max-xl:justify-start max-xl:items-start max-sm:p-0 max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:gap-[inherit]">
          <FeatureCard
            icon={MdOutlineListAlt}
            iconBackground="rgb(6, 80, 185)"
            title="AUTOMATIC SCRIPT BREAKDOWN"
            description="The Automatic Screenplay Breakdown (Break Smart) is a time-saving solution that simplifies the process of deconstructing a screenplay."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineTroubleshoot}
            iconBackground="rgb(177, 30, 70)"
            title="PLOT HOLE DETECTION REPORT"
            description="With the Plot Hole Detection Report, you can ensure the consistency and quality of your story, enhancing the overall engagement of your content."
            route="/features/analytics-dashboard"
          />
          <FeatureCard
            icon={MdOutlineDriveFileRenameOutline}
            iconBackground="rgb(218, 136, 19)"
            title="THE INDUSTRY STANDARD EDITOR"
            description="Nolan provides a user-friendly interface, advanced formatting options."
            route="/features/analytics-dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
