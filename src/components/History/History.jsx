import React from "react";
import history from "@/assets/history.png";
import Button from "@/components/Button/Button";


const HeroSection = () => {
  return (
    <div className="flex justify-center items-center bg-black py-20">
    <div className="bg-black text-white  flex justify-center items-center w-[70%]">
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">History</h2>
            <p className="text-sm">The Oldest Science of Observing the Moon</p>
            <p className="text-sm text-neutral-400">In 1609, Galileo turned a telescope toward the Moon, revealing its rugged mountains, deep craters, and mysterious valleys, forever changing...</p>
                    <Button 
                    label="Read more"
                    direction="left"
                    />

        </div>
        <div>
        <img 
        src={history}
        alt="history"
        className="h-auto w-[1000px]"
        />
        </div>


    </div>
    </div>
  );
};

export default HeroSection;
