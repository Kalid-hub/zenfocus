import React from "react";
import { FaCheckCircle, FaTasks, FaClock } from "react-icons/fa";

const Dashboard = () => {
  const focusedSessions = parseInt(localStorage.getItem("focusCount") || "0");
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const cards = [
    {
      label: "Focused Sessions",
      value: focusedSessions,
      icon: <FaClock className="text-blue-500 text-2xl" />,
    },
    {
      label: "Total Tasks",
      value: totalTasks,
      icon: <FaTasks className="text-green-500 text-2xl" />,
    },
    {
      label: "Completed Tasks",
      value: completedTasks,
      icon: <FaCheckCircle className="text-purple-500 text-2xl" />,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          ZenFocus Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800 text-center p-4 rounded-xl shadow hover:shadow-md transition"
            >
              {card.icon}
              <h3 className="text-lg font-semibold mt-2 text-gray-700 dark:text-white">
                {card.label}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
