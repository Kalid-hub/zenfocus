// src/hooks/useTasks.js
import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const completeTask = (taskId) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updated);
  };

  return { tasks, setTasks, completeTask };
};
