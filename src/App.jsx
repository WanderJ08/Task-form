import Tasklist from "./components/Tasklist";
import Taskform from "./components/Taskform";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <h1>
      <Taskform createTask={createTask} />
      <Tasklist tasks={tasks} deleteTask={deleteTask} />
    </h1>
  );
}

export default App;
