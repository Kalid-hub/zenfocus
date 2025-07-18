// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  ListChecks,
  BarChart,
  PieChart,
  Sun,
  Moon,
  Menu,
} from "lucide-react";

const Navbar = ({ dark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/app", icon: <Home />, title: "Home" },
    { to: "/app/tasks", icon: <ListChecks />, title: "Tasks" },
    { to: "/app/dashboard", icon: <BarChart />, title: "Dashboard" },
    { to: "/app/chart", icon: <PieChart />, title: "Chart" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        ZenFocus
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6">
        {navItems.map(({ to, icon, title }) => (
          <Link
            key={to}
            to={to}
            className={`text-gray-600 dark:text-gray-200 hover:text-blue-500 ${
              location.pathname === to ? "text-blue-600 font-bold" : ""
            }`}
            title={title}
          >
            {icon}
          </Link>
        ))}
        <button onClick={toggleDarkMode} className="ml-2">
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="text-gray-800 dark:text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white dark:bg-gray-900 shadow-lg sm:hidden flex flex-col items-center py-4 gap-4">
          {navItems.map(({ to, icon, title }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              title={title}
            >
              {icon}
            </Link>
          ))}
          <button onClick={toggleDarkMode}>{dark ? <Sun /> : <Moon />}</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
