import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const Button = ({
  text,
  icon: Icon,
  to = "/",
  iconSize = "w-7 h-7", // Default icon size
  className = "",
  ...props
}) => {
  const handleClick = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Call the provided onClick handler
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link
      to={to} // Routing with react-router
      className={`text-white bg-[#1d6ee3] border-[#1d6ee3] border-[1px] text-center text-base font-semibold !py-3 !px-4 rounded-[96px] inline-flex justify-center items-center max-md:p-3 ${className}`}
      {...props}
    >
      <div className="flex-1 h-6 pl-3 pr-2  leading-[1.2em] justify-center items-center gap-1 flex">
        {text}
      </div>
      {Icon && (
        <span>
          <Icon className={`${iconSize}`} />
        </span>
      )}
    </Link>
  );
};

// PropTypes for type checking
Button.propTypes = {
  text: PropTypes.string.isRequired, // Text for the button
  icon: PropTypes.elementType, // Optional icon component
  to: PropTypes.string, // URL path for routing
  className: PropTypes.string, // Additional custom classes
};

export default Button;
