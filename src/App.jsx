import Navbar from "./components/common/Navbar";
import TopBanner from "./components/common/TopBanner";
import CuratedTeas from "./components/sections/curatedTeas/CuratedTeas";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <container className="flex flex-col bg-brand-50 mx-auto">
      <HeroSection />
      <CuratedTeas />
      </container>
    </>
  );
}

export default App;
