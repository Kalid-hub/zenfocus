import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const DailyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sample: simulate daily Pomodoro data from localStorage
    const stats = JSON.parse(localStorage.getItem("dailyStats") || "{}");

    // Optional: fill missing days (past 7)
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const key = date.toISOString().split("T")[0];
      const dayStat = stats[key] || { completedPomodoros: 0 };

      return {
        date: key.slice(5), // MM-DD
        sessions: dayStat.completedPomodoros,
      };
    }).reverse();
    setData(last7Days);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Weekly Focus Sessions
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis allowDecimals={false} stroke="#ccc" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorFocus)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyChart;
