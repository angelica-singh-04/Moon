import React from "react";

const Primary = ({
  label = "Explore More",
  bgColor = "bg-yellow-500",
  textColor = "text-black",
  onClick,
}) => {

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center py-1 px-5 rounded-md
        ${bgColor} ${textColor} 
        font-medium 
        hover:bg-yellow-400
      `}
    >
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default Primary;