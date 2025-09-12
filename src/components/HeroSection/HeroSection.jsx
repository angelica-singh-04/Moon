import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-12 py-16 space-y-6 bg-gradient-to-b from-zinc-900 via-black to-black">
        {/* Navigation / Pagination */}
        <div className="flex flex-col space-y-2 text-zinc-500 text-sm">
          <span className="cursor-pointer hover:text-white">01</span>
          <span className="cursor-pointer hover:text-white">02</span>
          <span className="cursor-pointer hover:text-white">03</span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-6xl mb-4">Mars</h1>
          <p className="max-w-lg text-zinc-400 leading-relaxed">
            Mars is the fourth planet from the Sun and the second-smallest
            planet in the Solar System after Mercury. Known as the Red Planet,
            it has a thin atmosphere and surface features reminiscent of Earth.
          </p>
        </div>

        {/* Extra Info */}
        <div className="grid grid-cols-3 gap-6 text-sm text-zinc-400 mt-8">
          <div>
            <h4 className="text-white font-medium">Atmosphere</h4>
            <p>95% carbon dioxide, 1.93% argon, 1.89% nitrogen</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Climate</h4>
            <p>Temperatures vary from -225°F to 95°F in equatorial summer</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Physical</h4>
            <p>Mars is approximately half the diameter of Earth</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center bg-black">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
          alt="Mars"
          className="w-[500px] h-[500px] object-contain drop-shadow-[0_0_30px_rgba(255,100,50,0.7)]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
