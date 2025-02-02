import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const Button = ({
  text,
  icon: Icon,
  to = null,
  iconSize = "w-7 h-7", // Default icon size
  className = "",
  onClick = null,
  ...props
}) => {
  const ButtonContent = (
    <>
      <span className="flex-1 h-6 pl-3 pr-2  leading-[1.2em] justify-center items-center gap-1 flex">
        {text}
      </span>
      {Icon && (
        <span>
          <Icon className={`${iconSize}`} />
        </span>
      )}
    </>
  );
  return to ? (
    <Link
      to={to} // Routing with react-router
      className={`text-white bg-[#1d6ee3] text-center text-base font-semibold !py-3 !px-4 rounded-[96px] inline-flex justify-center items-center max-md:p-3 hover:bg-[#1d70e3c5] duration-100 ease-in ${className}`}
      {...props}
    >
      {ButtonContent}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={`text-white bg-[#1d6ee3] text-center text-base font-semibold !py-3 !px-4 rounded-[96px] inline-flex justify-center items-center max-md:p-3 hover:bg-[#1d70e3c5] duration-100 ease-in ${className}`}
      {...props}
    >
      {ButtonContent}
    </button>
  );
};

// PropTypes for type checking
Button.propTypes = {
  text: PropTypes.string.isRequired, // Text for the button
  icon: PropTypes.elementType, // Optional icon component
  to: PropTypes.string, // URL path for routing
  onClick: PropTypes.func, // Click handler
  className: PropTypes.string, // Additional custom classes
};

export default Button;
