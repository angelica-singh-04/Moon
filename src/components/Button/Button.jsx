import React from 'react';

const HeroButton = ({
  label = 'Explore More',
  direction = 'down', // "up", "down", "left", "right"
  bgColor = 'bg-yellow-500',
  textColor = 'text-black',
  onClick,
}) => {
  // Map directions to rotation classes
  const rotationMap = {
    up: '-rotate-90',
    down: 'rotate-90',
    left: 'rotate-180',
    right: 'rotate-0',
  };

  return (
    <div className="flex items-center space-x-4 mt-8">
      <button
        onClick={onClick}
        className={`p-3 rounded-full ${bgColor} ${textColor} hover:scale-110 transition-transform duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform ${rotationMap[direction]}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
      <span className="text-sm uppercase tracking-wider text-gray-400">
        {label}
      </span>
    </div>
  );
};

export default HeroButton;