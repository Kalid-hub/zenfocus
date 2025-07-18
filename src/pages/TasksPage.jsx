import React from "react";
import TaskList from "../component/Tasklist";

const TasksPage = ({ tasks, setTasks }) => {
  return <TaskList externalTasks={tasks} setExternalTasks={setTasks} />;
};

export default TasksPage;
