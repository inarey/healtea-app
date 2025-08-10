import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ShopPage from "./pages/ShopPage";
import Blog from "./pages/Blog";
import './App.css'; // Assuming you have a global CSS file for styles


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/blog" element={<Blog />} />
    </Routes> 
  )
}

export default App;
