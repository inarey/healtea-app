import React from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "../../context/CurrencyContext.jsx";

const TopBanner = () => {
  // const [language, setLanguage] = useState("ENG");
  const { currency, setCurrency } = useCurrency();
  const { t } = useTranslation();

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

      <div className="flex gap-2 justify-between items-center text-center md:text-left mb-2 md:mb-0">
        {/* Language */}
        <div className="flex space-x-2 text-sm">
          <select
            onChange={(e) => t.changeLanguage(e.target.value)}
            className="text-gray-50 bg-brand-700 border border-brand-300 rounded px-2 py-0.5
          focus:outline-none cursor-pointer"
          >
            <option value="en">ENG</option>
            <option value="jp">日本語</option>
          </select>
        </div>

        {/* Currency */}
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="text-gray-50 bg-brand-700 border border-brand-300 rounded px-2 py-0.5
          focus:outline-none cursor-pointer"
        >
          <option value="USD">$USD</option>
          <option value="JPY">¥JPY</option>
        </select>
      </div>
    </div>
  );
};

export default TopBanner;
