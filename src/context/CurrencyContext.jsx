// src/context/CurrencyContext.jsx
import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  const symbols = {
    USD: "$",
    JPY: "¥",
  };

  const exchangeRates = {
    USD: 1,
    JPY: 145, // You can update this with live API later
  };

  const convertPrice = (amount) => {
    return amount * exchangeRates[currency];
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, symbol: symbols[currency], convertPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrency = () => useContext(CurrencyContext);
