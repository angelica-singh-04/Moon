import React from "react";

const HeroButton = ({
  label = "Explore More",
  direction = "down", // "up", "down", "left", "right"
  bgColor = "bg-yellow-500",
  textColor = "text-black",
}) => {
  // Map directions to rotation classes
  const rotationMap = {
    up: "rotate-180",
    down: "rotate-0",
    left: "-rotate-90",
    right: "rotate-90",
  };

  return (
    <div className="flex items-center space-x-4 mt-8" data-aos="fade-up" data-aos-delay="600">
      <button className={`p-3 rounded-full ${bgColor} ${textColor}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform ${rotationMap[direction]}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      <span className={`text-sm uppercase tracking-wider text-gray-400`}>{label}</span>
    </div>
  );
};

export default HeroButton;
