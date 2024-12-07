import React, { useState } from "react";

const Toggle = ({ options, onToggle }) => {
  
  const [selected, setSelected] = useState(options[0]?.value);

  const handleToggle = (value) => {
    setSelected(value);
    onToggle(value); // Notify parent about selection
  };

  return (
    <div className="flex items-center bg-[#2b2d33] p-1 gap-3 rounded-[96px] h-11 break-words max-sm:!gap-3">
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => handleToggle(option.value)}
          className={`relative px-3 py-2 text-sm cursor-pointer text-white rounded-[96px] break-words
            ${
              selected === option.value
                ? "bg-[#191b1f] !text-[#2c79ea] !font-semibold"
                : "leading-4 tracking-tight"
            }`}
        >
          <div className="break-words">{option.label}</div>
          {option.badge && (
            <sup
              className="absolute font-light -top-3 -right-3 text-xs border border-white bg-orange-500 text-white px-2 py-[1px] rounded-full"
              style={{ background: option.badgeColor || "orange" }}
            >
              {option.badge}
            </sup>
          )}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
