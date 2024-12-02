import React from "react";
import Sky from "./Common/Sky";
import {
  MdOutlineDirectionsRun,
  MdOutlineSavings,
  MdOutlineBolt,
} from "react-icons/md";

const SkyRocket = () => {
  const features = [
    {
      icon: <MdOutlineDirectionsRun />,
      title: "90% Faster",
      subtitle: "Speed Through Project Completion",
    },
    {
      icon: <MdOutlineSavings />,
      title: "80% Lower Costs",
      subtitle: "Halve Your Expenses",
    },
    {
      icon: <MdOutlineBolt />,
      title: "Exceptional Quality",
      subtitle: "Surpass the Highest Industry Standards",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {features.map((feature, index) => (
        <Sky
          key={index}
          icon={feature.icon}
          title={feature.title}
          subtitle={feature.subtitle}
        />
      ))}
    </div>
  );
};

export default SkyRocket;
