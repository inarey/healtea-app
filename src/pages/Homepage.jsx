import React from "react";
import TopBanner from "../components/common/TopBanner";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import CuratedTeas from "../components/sections/curatedTeas/CuratedTeas";
import { Link } from "react-router-dom";
import { ThemeProvider } from "../theme/ThemeContext";

const Homepage = () => {
  return (
    <>
    <ThemeProvider>
      <div className="fixed top-0 left-0 w-full z-50 dark:bg-gray-950">
        <TopBanner />
        <Navbar />
      </div>

      <main className="flex flex-col bg-brand-50 mx-auto pt-24">
        <HeroSection />
        <CuratedTeas />
      </main>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
