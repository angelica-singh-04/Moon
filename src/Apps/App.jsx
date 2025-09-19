// This is your main App.jsx file
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/About/About";
import BentoSection from "@/components/Bento/Bento";
import HistorySection from "@/components/History/History";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-poppins bg-black">
      <div className="pt-0"> 
        <HeroSection />
        <AboutSection />
        <BentoSection />
        <HistorySection />
      </div>
    </div>
  );
}