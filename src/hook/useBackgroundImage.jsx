// src/hooks/useBackgroundImage.js
import { useState, useEffect } from "react";

export const useBackgroundImage = (images) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return images[index];
};
