import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 shadow-md bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold">ZenFocus</h1>
        <Link to="/app">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Launch App
          </button>
        </Link>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Stay Focused. Get Things Done.
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          ZenFocus combines Pomodoro focus sessions, task tracking, and daily
          productivity stats — all in one minimalist dashboard.
        </p>
        <a
          href="https://your-gumroad-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-green-700 transition"
        >
          Get ZenFocus Pro
        </a>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-12">
        {[
          { title: "🧠 Focus Mode", desc: "Pomodoro timer with task link." },
          {
            title: "✅ Task Tracker",
            desc: "Plan and manage your to-dos easily.",
          },
          {
            title: "📊 Daily Stats",
            desc: "Visualize your focus with charts.",
          },
        ].map((feat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} ZenFocus by Alabi Khalid. All rights
        reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
