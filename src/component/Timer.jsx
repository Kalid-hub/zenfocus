import React, { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import bell from "../assets/bell.mp3";

const Timer = ({ task, onTaskComplete }) => {
  const MODES = {
    pomodoro: { minutes: 25, label: "Pomodoro", color: "#3b82f6" }, // blue
    short: { minutes: 5, label: "Short Break", color: "#10b981" }, // green
    long: { minutes: 15, label: "Long Break", color: "#f59e0b" }, // amber
  };

  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(MODES[mode].minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const intervalRef = useRef(null);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatTime = (val) => (val < 10 ? `0${val}` : val);

  const getToday = () => new Date().toISOString().split("T")[0];

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(MODES[mode].minutes * 60);
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(MODES[newMode].minutes * 60);
  };

  const playSound = () => {
    if (soundOn) {
      const sound = new Howl({ src: [bell] });
      sound.play();
    }
    toast.success("Time's up! Take a break!");
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            playSound();

            // ✅ Update stats on session completion
            const today = getToday();
            const stats = JSON.parse(
              localStorage.getItem("dailyStats") || "{}"
            );

            const todayStats = stats[today] || {
              completedPomodoros: 0,
              focusMinutes: 0,
              tasksCompleted: 0,
            };

            if (mode === "pomodoro") {
              todayStats.completedPomodoros += 1;
              todayStats.focusMinutes += MODES[mode].minutes;
              if (task && onTaskComplete) onTaskComplete(task.id);
            }

            stats[today] = todayStats;
            localStorage.setItem("dailyStats", JSON.stringify(stats));

            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  const percentage = (timeLeft / (MODES[mode].minutes * 60)) * 100;

  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl w-full max-w-md mb-8">
      <Toaster position="top-center" />

      {/* Mode Selector */}
      <div className="flex gap-2 justify-center mb-4">
        {Object.entries(MODES).map(([key, val]) => (
          <button
            key={key}
            onClick={() => changeMode(key)}
            className={`px-4 py-1 rounded-full font-semibold shadow transition text-sm ${
              mode === key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* Circular Timer */}
      <div className="w-44 h-44 sm:w-56 sm:h-56 mx-auto">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: MODES[mode].color,
            trailColor: "#e5e7eb",
          })}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${minutes}:${seconds}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="text-4xl font-boldonse text-black dark:text-white"
            >
              {formatTime(minutes)}:{formatTime(seconds)}
            </motion.div>
          </AnimatePresence>
        </CircularProgressbarWithChildren>
      </div>

      {/* Controls */}
      <div className="flex gap-3 flex-wrap justify-center items-center mt-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="bg-green-500 hover:bg-green-600 transition px-4 py-2 text-white rounded shadow"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="bg-yellow-500 hover:bg-yellow-600 transition px-4 py-2 text-white rounded shadow"
          >
            Pause
          </button>
        )}
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 transition px-4 py-2 text-white rounded shadow"
        >
          Reset
        </button>
        <button
          onClick={() => setSoundOn(!soundOn)}
          className="text-sm mt-2 text-gray-600 dark:text-gray-300 underline"
        >
          {soundOn ? "🔊 Sound On" : "🔇 Muted"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
