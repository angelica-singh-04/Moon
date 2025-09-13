import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/About/About";
import BentoSection from "./components/Bento/Bento";
import HistorySection from "./components/History/History";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function App() {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once on scroll
  }, []);
  return (
    <div className="font-poppins">
      <HeroSection />
      <AboutSection />
      <BentoSection />
      <HistorySection />
    </div>
  );
}
