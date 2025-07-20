import React, { useState } from "react";

const TopBanner = () => {
  const [language, setLanguage] = useState("ENG");
  const [currency, setCurrency] = useState("$USD");

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-24 py-2 w-full bg-brand-700 text-white text-sm">
      {/* left shipping info */}
      <div className="text-center md:text-left mb-2 md:mb-0">
        Standard Flat Rate Shipping on orders of{" "}
        <span className="font-semibold">$100</span> or more!{" "}
        <a
          href="#"
          className="underline text-brand-100 hover:text-white ml-1 animate-pulse"
        >
          See Details &rsaquo;
        </a>
      </div>

      {/* Right: Language & Currency */}
      <div className="flex space-x-2 text-sm">
        <select 
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-brand-700 border border-brand-300 rounded px-2 py-0.5 focus:outline-none cursor-pointer ">
          <option>ENG</option>
          <option>日本語</option>
        </select>
        <select 
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="bg-brand-700 border border-brand-300 rounded px-2 py-0.5 focus:outline-none cursor-pointer">
          <option>$USD</option>
          <option>¥JPY</option>
        </select>
      </div>
    </div>
  );
};

export default TopBanner;
