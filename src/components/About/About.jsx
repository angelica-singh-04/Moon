import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Main App component
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // smooth scroll animations
  }, []);

  return (
    <div className="bg-black text-white min-h-screen antialiased flex flex-col lg:flex-row lg:p-12 overflow-hidden">
      
      {/* Left Sidebar */}
      <div
        className="flex flex-col items-center justify-between p-4 lg:w-16 border-r border-gray-500"
        data-aos="fade-right"
      >
        <div className="text-4xl font-bold mb-8 text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 15v3m0-12V6M9 12h-3m12 0h-3"></path>
          </svg>
        </div>
        <div className="text-2xl font-bold mb-8 lg:mb-0 transform rotate-90 hidden lg:block w-[30%]">
          <span className="tracking-widest">ARTICLES</span>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="text-white text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="text-white text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row flex-1 space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Main articles section */}
        <div className="flex-1 flex flex-col space-y-12 pr-8 border-r border-gray-500 ml-6 ">
          
          {/* Header */}
          <div
            className="flex items-center pb-6 mb-6 justify-between border-b border-gray-500"
            data-aos="fade-down"
          >
            <h1 className="text-5xl font-extrabold ">Articles.</h1>
            <div className="space-x-4 text-sm text-gray-400 hidden sm:flex">
              <span>All Articles</span>
              <span>Videos</span>
              <span>Series</span>
            </div>
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 space-y-25">
            
            {/* Top Row */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-xs font-semibold">
                Space Archaeologists Search For Dead Alien Civilizations
              </h2>
              <p className="text-sm text-gray-500">19 AUGUST, 2018</p>
            </div>
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-xs font-semibold">
                Space Archaeologists Search For Dead Alien Civilizations
              </h2>
              <p className="text-sm text-gray-500">19 AUGUST, 2018</p>
            </div>
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-xs font-semibold">
                Space Archaeologists Search For Dead Alien Civilizations
              </h2>
              <p className="text-sm text-gray-500">19 AUGUST, 2018</p>
            </div>
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-xs font-semibold">
                Space Archaeologists Search For Dead Alien Civilizations
              </h2>
              <p className="text-sm text-gray-500">19 AUGUST, 2018</p>
            </div>

            {/* Middle Row with Navigation */}
            <div className="flex items-center space-x-4 col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="500">
              <button className="p-2 border border-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <button className="p-2 border border-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Bottom Row */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="600">
              <h2 className="text-xs font-semibold">
                Herschel Space Observatory Running On Empty
              </h2>
              <p className="text-sm text-gray-500">13 AUGUST, 2018</p>
            </div>
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="700">
              <h2 className="text-xs font-semibold">
                Building Blocks of Life Found on Mars
              </h2>
              <p className="text-sm text-gray-500">05 AUGUST, 2018</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="flex-none flex flex-col justify-between lg:w-[15%]"
          data-aos="fade-left"
        >
          <div>
            <span className="text-sm text-gray-500 uppercase">
              By Laurent Ballesta
            </span>
            <h3 className="text-xl font-bold mt-2">
              From the Magazine
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed text-sm">
              Our special report offers a rare look at life beneath the frozen continent—where penguins, seals, and exotic creatures thrive.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-8" data-aos="fade-up" data-aos-delay="800">
            <button className="p-3 bg-yellow-500 text-black rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Explore more
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
