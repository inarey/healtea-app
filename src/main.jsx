import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
import "./i18n.js"; // Import i18n configuration
import { CurrencyProvider } from "./context/CurrencyContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
    </BrowserRouter>
  </StrictMode>
);
