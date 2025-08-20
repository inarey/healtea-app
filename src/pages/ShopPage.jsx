import React from "react";
import TopBanner from "../components/common/TopBanner";
import Navbar from "../components/common/Navbar";
import { ThemeProvider } from "../theme/ThemeContext";

const ShopPage = () => {
  return (
    <>
      <ThemeProvider>
        <TopBanner />
        <Navbar />
      </ThemeProvider>
    </>
  );
};

export default ShopPage;
