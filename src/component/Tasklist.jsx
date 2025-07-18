import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskList = ({ externalTasks, setExternalTasks, onSelectTask }) => {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      name: newTask,
      completed: false,
    };
    const updatedTasks = [...externalTasks, task];
    setExternalTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("Task added!");
    setNewTask("");
  };

  const toggleTask = (taskId) => {
    const updated = externalTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setExternalTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (taskId) => {
    const updated = externalTasks.filter((task) => task.id !== taskId);
    setExternalTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    toast.error("Task deleted!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ToastContainer position="top-right" />
      <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md mx-4 transition-all duration-300">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Your Tasks
        </h2>

        {/* Input to add tasks */}
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 rounded-l-lg bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white placeholder:text-gray-500 outline-none"
            placeholder="Add a task..."
          />
          <button
            onClick={addTask}
            className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Tasks List */}
        <ul className="space-y-2 transition-all duration-500">
          {externalTasks.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300 italic">
              No tasks yet
            </p>
          ) : (
            externalTasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-2 bg-white/70 dark:bg-gray-800 rounded-lg shadow-sm hover:bg-white/90 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-[1.02]`}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span
                    className={`text-sm ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800 dark:text-white"
                    }`}
                    onClick={() => onSelectTask?.(task)}
                  >
                    {task.name}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 text-lg px-2"
                  title="Delete Task"
                >
                  🗑️
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
