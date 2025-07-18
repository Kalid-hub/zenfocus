// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import DailyChartPage from "./pages/DailyChartPage";
import { useTasks } from "./hook/useTasks";
import { useDarkMode } from "./hook/useDarkMode";
import { useBackgroundImage } from "./hook/useBackgroundImage";
import Footer from "./component/Footer";

const bgImages = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];

function App() {
  const { dark, toggleDark } = useDarkMode();
  const { tasks, setTasks, completeTask } = useTasks();
  const bgImage = useBackgroundImage(bgImages);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} toggleDarkMode={toggleDark} />

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 px-4 py-8"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <Routes>
          <Route path="/" element={<Home onTaskComplete={completeTask} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chart" element={<DailyChartPage />} />
          <Route
            path="/tasks"
            element={<TasksPage tasks={tasks} setTasks={setTasks} />}
          />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
