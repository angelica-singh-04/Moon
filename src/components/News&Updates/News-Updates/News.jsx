import React from 'react';
import { AnimatedList } from "../../ui/animated-list";
import { cn } from "@/lib/utils";
import img1 from "@/assets/moon2.jpg";

let notifications = [
  {
    name: "Rare Blue Supermoon Illuminates Night Sky This weekend",
    description: "The second full moon of December will appear 14% larger and 30% brighter than usual, offering spectacular viewing opportunities for astronomers worldwide.",
    time: "12/15/2024",
    icon: "💸",
    color: "#f2e03eff",
  },

  {
    name: "Water Ice Discovered in Permanently Shadowed Lunar Craters",
    description: "New radar data reveals significant water ice deposits in the Moon's south pole region, potentially crucial for future lunar missions and settlements.",
    time: "12/12/2024 • NASA",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Total Lunar Eclipse Visible Across Americas Next Month",
    description: "The first total lunar eclipse of 2025 will be visible across North and South America, with totality lasting approximately 85 minutes.",
    time: "12/10/2024 • IAU",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "James Webb Telescope Captures Stunning Moon Formation Images",
    description: "Unprecedented infrared images reveal new details about how moons form around exoplanets in distant star systems.",
    time: "12/8/2024 • STScI",
    icon: "🗞️",
    color: "#1E86FF",
  },
    {
    name: "Ancient Lunar Lava Tubes Could House Future Moon Bases",
    description: "Scientists identify stable underground caverns that could provide natural radiation shielding for lunar habitats.",
    time: "12/5/2024 • JPL",
    icon: "🗞️",
    color: "#1E86FF",
  },
];
notifications = Array.from({ length: 10 }, () => notifications).flat();
const Notification = ({ name, description, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto font-[poppins] min-h-fit w-full max-w-[400px] cursor-pointer border-[0.5px] border-neutral-900 rounded-lg overflow-hidden p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-neutral-900/70",
        // dark styles
        // "transform-gpu dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        {/* <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div> */}
        
        <div className="flex flex-col overflow-hidden p-2">
            <span className="text-xs text-yellow-500 pb-2">{time}</span>
          <figcaption className="flex flex-row items-center text-lg font-normal">
            
            <span className="text-sm">{name}</span>
            {/* <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span> */}
          </figcaption>
          <p className="text-xs font-normal text-gray-500 pt-2">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};


const NewsUpdatesPage = () => {
  return (
    <div>
    <div className="flex w-full font-[poppins] min-h-screen bg-black text-white">
      
      {/* Left Column: 30% for Latest News Live */}
    <div className="w-[35%] border-r border-neutral-800 p-8 flex flex-col">
        <h2 className="text-md font-normal mt-8 text-white pl-2">Latest News Live</h2>
    <div
      className="relative flex h-[800px] w-full flex-col overflow-hidden p-2"
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
    </div>
      </div>

      {/* Right Column: 70% for Latest Moon Missions */}
      <div className="w-9/12 p-8 flex flex-col space-y-10 ">
        <h1 className="text-5xl font-extrabold mb-4 text-white mt-8">Missions.</h1>
<div class="w-[80%] flex flex-col pb-10 justify-end border-b-[0.4px] border-neutral-800">
<div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">

  <div class="bg-neutral-900/70 p-6 shadow-lg">
<div class="w-18 h-18 bg-black flex items-center justify-center mr-4">
    <img src={img1}
    alt="Artemis III mission icon" 
    class="w-full h-full object-cover rounded-lg"/>
  </div>
    <div class="flex items-center mb-4">

      <div>
        <h2 class="text-md font-medium text-white mt-4">Artemis III</h2>
        <p class="text-sm text-neutral-600 my-2">First crewed lunar landing since Apollo 17, targeting the lunar south pole.</p>
      </div>
    </div>
    <div class="flex space-x-4 mt-6">
      <button class="bg-yellow-500 text-black text-xs font-regular py-2 px-4 hover:bg-yellow-600 transition-colors">View Details</button>    </div>
  </div>

  <div class="bg-neutral-900/70 p-6 shadow-lg">
<div class="w-18 h-18 bg-black flex items-center justify-center mr-4">
    <img src={img1}
    alt="Artemis III mission icon" 
    class="w-full h-full object-cover rounded-lg"/>
  </div>
    <div class="flex items-center mb-4">

      <div>
        <h2 class="text-md font-medium text-white mt-4">Artemis III</h2>
        <p class="text-sm text-neutral-600 my-2">First crewed lunar landing since Apollo 17, targeting the lunar south pole.</p>
      </div>
    </div>
    <div class="flex space-x-4 mt-6">
      <button class="bg-yellow-500 text-black text-xs font-regular py-2 px-4 hover:bg-yellow-600 transition-colors">View Details</button>    </div>
  </div>

  <div class="bg-black p-6 shadow-lg">

  </div>

  <div class="bg-black p-6 shadow-lg">

  </div>

    <div class="bg-neutral-900/70 p-6 shadow-lg">
<div class="w-18 h-18 bg-black flex items-center justify-center mr-4">
    <img src={img1}
    alt="Artemis III mission icon" 
    class="w-full h-full object-cover rounded-lg"/>
  </div>
    <div class="flex items-center mb-4">

      <div>
        <h2 class="text-md font-medium text-white mt-4">Artemis III</h2>
        <p class="text-sm text-neutral-600 my-2">First crewed lunar landing since Apollo 17, targeting the lunar south pole.</p>
      </div>
    </div>
    <div class="flex space-x-4 mt-6">
      <button class="bg-yellow-500 text-black text-xs font-regular py-2 px-4 hover:bg-yellow-600 transition-colors">View Details</button>    </div>
  </div>

    <div class="bg-neutral-900/70 p-6 shadow-lg">
<div class="w-18 h-18 bg-black flex items-center justify-center mr-4">
    <img src={img1}
    alt="Artemis III mission icon" 
    class="w-full h-full object-cover rounded-lg"/>
  </div>
    <div class="flex items-center mb-4">

      <div>
        <h2 class="text-md font-medium text-white mt-4">Artemis III</h2>
        <p class="text-sm text-neutral-600 my-2">First crewed lunar landing since Apollo 17, targeting the lunar south pole.</p>
      </div>
    </div>
    <div class="flex space-x-4 mt-6">
      <button class="bg-yellow-500 text-black text-xs font-regular py-2 px-4 hover:bg-yellow-600 transition-colors">View Details</button>    </div>
  </div>

</div>
</div>
      </div>

        {/* Rightmost column */}

    
</div>

</div>
  );
};

export default NewsUpdatesPage;