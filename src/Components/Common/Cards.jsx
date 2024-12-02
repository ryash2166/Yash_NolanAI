import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/asset_25.svg";

const Cards = ({ href, icon: Icon, title, description }) => {
  return (
    <a
      href={href}
      className="flex flex-grow flex-shrink basis-[415px] max-w-[415px]"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex justify-center items-center relative py-2 w-[90px] h-[90px]">
          <img src={logo} alt="logo" className="absolute w-full h-full" />
          <div className="rounded-full p-8 bg-[#1d6ee3] w-8 h-8 w- flex justify-center items-center">
            {Icon && (
              <span className="text-white text-[32px]">
                <Icon />
              </span>
            )}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white text-center max-s">
          {title}
        </h3>
        <div className="text-sm text-white font-normal text-center leading-6">
          {description}
        </div>
      </div>
    </a>
  );
};

Cards.propTypes = {
  href: PropTypes.string.isRequired, // Link for the card
  icon: PropTypes.elementType, // Optional icon component
  title: PropTypes.string.isRequired, // Title for the card
  description: PropTypes.string.isRequired, // Description text for the card
};

export default Cards;
