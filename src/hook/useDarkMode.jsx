// src/hooks/useDarkMode.js
import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark") === "true";
  });

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  return { dark, toggleDark };
};
