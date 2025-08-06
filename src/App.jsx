import Navbar from "./components/common/Navbar";
import TopBanner from "./components/common/TopBanner";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <container className="flex flex-row bg-brand-50 mx-auto">
      <HeroSection />
      </container>
    </>
  );
}

export default App;
