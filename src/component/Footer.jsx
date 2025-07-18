import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiList, FiBarChart2 } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="backdrop-blur-md bg-white/30 dark:bg-black/20 border-t border-white/10 dark:border-white/10 px-6 py-4  shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-700 dark:text-[#3b82f6] text-sm">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold">ZenFocus</span>. All rights
            reserved.
          </p>

          <div className="flex gap-6 text-base">
            <Link
              to="/dashboard"
              className="flex items-center gap-1 hover:text-indigo-500 transition"
            >
              <FiHome /> Dashboard
            </Link>
            <Link
              to="/tasks"
              className="flex items-center gap-1 hover:text-indigo-500 transition"
            >
              <FiList /> Tasks
            </Link>
            <Link
              to="/chart"
              className="flex items-center gap-1 hover:text-indigo-500 transition"
            >
              <FiBarChart2 /> Stats
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
