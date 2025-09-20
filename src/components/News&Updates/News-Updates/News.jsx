import React from 'react';
import { AnimatedList } from "../../ui/animated-list";
import { cn } from "@/lib/utils";

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
        "relative mx-auto font-[poppins] min-h-fit w-full max-w-[400px] cursor-pointer border-[0.5px] border-neutral-800 rounded-lg overflow-hidden p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-neutral-900",
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
    <div className="flex w-full font-[poppins] min-h-screen bg-black text-white">
      
      {/* Left Column: 30% for Latest News Live */}
    <div className="w-[25%] border-r border-neutral-800 p-8 flex flex-col">
        <h2 className="text-md font-normal mt-8 text-white pl-2">Latest News Live</h2>
    <div
      className="relative flex h-[800px] w-full flex-col overflow-hidden p-2"
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
      </div>

      {/* Right Column: 70% for Latest Moon Missions */}
      <div className="w-9/12 p-8 flex flex-col space-y-6">
        <h1 className="text-5xl font-extrabold mb-4 text-white mt-8">Missions.</h1>
        
        {/* Div 1: Mission 1 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-gray-200">Artemis III</h3>
          <p className="text-sm text-gray-400 mt-1">Status: In development</p>
          <p className="mt-4 text-gray-300">
            The Artemis III mission aims to land the first woman and next man on the Moon, specifically at the lunar south pole.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Target Launch: September 2026
          </div>
        </div>
        
        {/* Div 2: Mission 2 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-gray-200">Chang'e 6</h3>
          <p className="text-sm text-gray-400 mt-1">Status: Completed</p>
          <p className="mt-4 text-gray-300">
            China's Chang'e 6 mission successfully returned samples from the far side of the Moon, a historic first.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Mission Date: May - June 2024
          </div>
        </div>

        {/* Div 3: Mission 3 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-gray-200">Chandrayaan-4</h3>
          <p className="text-sm text-gray-400 mt-1">Status: Planned</p>
          <p className="mt-4 text-gray-300">
            ISRO is planning the Chandrayaan-4 mission, a collaborative effort for lunar sample return.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Expected Launch: 2027
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdatesPage;