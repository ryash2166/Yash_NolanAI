import React from "react";
import Sky from "../Common/Sky";
import { features } from "./HomeData";

const SkyRocket = () => {
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
