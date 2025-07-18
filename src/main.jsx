import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AppMain from "./App"; // Your focus app with timer, dashboard, etc.import { inject } from "@vercel/analytics";
import { inject } from "@vercel/analytics";
inject();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/*" element={<AppMain />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
