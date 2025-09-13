import React from "react";
import news2 from "@/assets/news2.jpeg"
import bento2 from "@/assets/bento2.jpeg"
import bento3 from "@/assets/moon2.jpg"
import video from "@/assets/space_rotate.mp4"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const BentoLayout = () => {
      useEffect(() => {
    AOS.init({ duration: 100, once: true }); 
  }, []);
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="grid grid-cols-4 auto-rows-[22rem] gap-6">
        
    <div className="col-span-2 row-span-2 bg-neutral-900 border rounded-xs border-6 border-neutral-800 overflow-hidden relative flex flex-col p-6">
      <img
        src={news2}
        alt="asteroid"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 mt-auto flex justify-center">
        <div className="flex flex-col gap-4 p-4 w-full">
          <div className="gap-4 mb-0">
            <h2
              className="text-neutral-600"
              data-aos="fade-down"
            >
              Space News
            </h2>

            <h1
              className="text-2xl font-semibold leading-snug mb-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Did a Giant Impact Create the Moon? New Evidence Emerges.
            </h1>

            <h1
              className="text-neutral-500"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              26 Aug 2025
            </h1>

            <p
              className="text-gray-400 text-sm mt-4"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Recent studies suggest that the Moon may have formed after a massive collision between Earth and a Mars-sized body over 4.5 billion years ago. Evidence from lunar rock samples and computer simulations shows that debris from this impact eventually coalesced into the Moon we see today. This giant-impact theory helps explain the Moon’s composition and its unique orbital relationship with Earth.
            </p>

            <div
              className="flex items-center space-x-4 mt-8"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button className="p-3 bg-yellow-500 text-black rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <span className="text-sm uppercase tracking-wider text-gray-400">
                Explore more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
        

        {/* Mast Video hai */}

{/* <div className="col-span-1 bg-black rounded-xs border border-6 border-neutral-800 flex items-center justify-center overflow-hidden">
  <video
    src={video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover rounded-xs"
  />
</div> */}


<div className="col-span-1 bg-neutral-900 rounded-xs border border-6 border-neutral-800 relative overflow-hidden">
      <img
        src={bento2}
        alt="moon"
        className="w-full h-auto object-cover"
        data-aos="zoom-in"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between items-start px-4 py-6">
        <h2
          className="text-sm font-semibold text-neutral-500 z-10"
          data-aos="fade-down"
        >
          21 Aug 2025
        </h2>

        {/* Question */}
        {/* <h1
          className="text-white text-sm font-semibold mt-2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Why does the Moon always show the same face to Earth?
        </h1> */}

        {/* Answer */}
        <p
          className="text-gray-400 text-xs mt-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          The Moon is tidally locked with Earth, which means its rotation period matches its orbit around our planet. In simpler terms, it takes the Moon the same amount of time to spin once on its axis as it does to complete one orbit around Earth—about 27.3 days.
        </p>
      </div>
    </div>

<div className="col-span-1 bg-neutral-900 rounded-xs border border-6 border-neutral-800 relative overflow-hidden cursor-pointer">
  <img
    src={bento3}
    alt="moon"
    className="w-full h-auto object-cover"
  />

  <div className="absolute inset-0 bg-black/40 flex flex-col justify-between items-start px-6 py-12">
    <h2 
      className="text-lg font-semibold text-white z-10"
      data-aos="fade-down"
    >
      How was water discovered on the Moon?
    </h2>

    <p 
      className="text-gray-500 text-xs"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      In recent years, scientists have detected signs of water on the Moon, particularly in permanently shadowed craters near its poles. Using instruments aboard spacecraft like NASA’s Lunar Reconnaissance Orbiter and India's Chandrayaan-1, they found traces of ice mixed with lunar soil.
    </p>
  </div>
</div>


  <div
      className="col-span-2 bg-neutral-900 border border-6 border-neutral-800 overflow-hidden relative flex flex-col"
      data-aos="fade-up"
    >
<div
  className="absolute inset-0 overflow-hidden"
  data-aos="zoom-in"
  data-aos-delay="150"
>
  <video
    src={video}
    className="w-full h-full object-cover opacity-60"
    loop
    muted
    playsInline
    autoPlay
  />
</div>      <div
        className="relative z-10 p-6 mt-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="text-lg font-bold">Moon Exploration Videos</h2>
        <p className="text-gray-300 text-sm mt-2">
          Discover breathtaking footage from lunar missions, showcasing the Moon’s surface, craters, and historic landings like never before.
        </p>
      </div>
    </div>


      </div>
    </div>
  );
};

export default BentoLayout;
