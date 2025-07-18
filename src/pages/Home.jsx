import React, { useEffect, useState } from "react";
import Timer from "../component/Timer";
import { useBackgroundImage } from "../hook/useBackgroundImage";
import { motion, AnimatePresence } from "framer-motion";

const bgImages = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];

const Home = ({ onTaskComplete }) => {
  const bgImage = useBackgroundImage(bgImages);
  const quotes = [
    "Focus on being productive instead of busy. – Tim Ferriss",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "It always seems impossible until it's done. – Nelson Mandela",
    "The future depends on what you do today. – Mahatma Gandhi",
    "The key to success is to start before you’re ready. – Marie Forleo",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-cover bg-center bg-fixed">
      <div className="text-center  mx-auto px-4 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl w-full max-w-md mb-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg font-gothic  text-gray-700 dark:text-gray-300"
          >
            {quotes[quoteIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <Timer onTaskComplete={onTaskComplete} />
    </div>
  );
};

export default Home;
