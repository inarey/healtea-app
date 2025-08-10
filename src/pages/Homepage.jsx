import React from 'react'
import TopBanner from '../components/common/TopBanner';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/sections/HeroSection';
import CuratedTeas from '../components/sections/curatedTeas/CuratedTeas';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <container className="flex flex-col bg-brand-50 mx-auto">
      <HeroSection />
      <CuratedTeas />
      </container>
      </>
  )
}

export default Homepage
