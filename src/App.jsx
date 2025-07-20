import Navbar from "./components/common/Navbar";
import TopBanner from "./components/common/TopBanner";

function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <container className="flex flex-row bg-brand-50 mx-auto"></container>
    </>
  );
}

export default App;
