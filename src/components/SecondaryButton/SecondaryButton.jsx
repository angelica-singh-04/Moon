import React from "react";

const Primary = ({
  label = "Explore More",
  bgColor = "bg-neutral-900",
  textColor = "text-neutral-200",
  onClick,
}) => {

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center space-x-2 py-3 px-6
        p-3 rounded-md
        ${bgColor} ${textColor} 
        font-medium
        border-[1px] border-neutral-800
        hover:bg-neutral-800
      `}
    >
      <span className="text-sm font-regular">{label}</span>
    </button>
  );
};

export default Primary;