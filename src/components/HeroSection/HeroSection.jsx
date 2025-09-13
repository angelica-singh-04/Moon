import React from "react";
import astro from "@/assets/astro2.png";


const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex">

      <div className="flex-1 flex flex-col justify-center px-12 py-16 space-y-6 bg-black">
        <div className="flex flex-col space-y-2 text-zinc-500 text-sm">
          <span className="cursor-pointer hover:text-white">01</span>
          <span className="cursor-pointer hover:text-white">02</span>
          <span className="cursor-pointer hover:text-white">03</span>
        </div>

        <div>
          <h1 className="text-6xl mb-4">MOON</h1>
          <p className="max-w-lg text-zinc-400 leading-relaxed">
           The Moon is Earth’s only natural satellite and the fifth-largest moon in the Solar System. 
It is the brightest object in our night sky and has a profound influence on Earth, 
including tides and even the biological rhythms of life.

          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 text-sm text-zinc-400 mt-8">
          <div>
            <h4 className="text-white font-medium">Atmosphere</h4>
            <p>Thin exosphere, mostly hydrogen, helium, neon.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Climate</h4>
            <p>127°C in day, -173°C at night.
</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Physical</h4>
            <p>Diameter 3,474 km, one-quarter of Earth.
</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-black">
        <img
          src={astro}
          alt="Mars"
          className="w-auto h-[700px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
