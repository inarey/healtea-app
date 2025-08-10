import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import './App.css'; // Assuming you have a global CSS file for styles


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<ShopPage/>} />
    </Routes> 
  )
}

export default App;
