import Tasklist from "./Tasklist";
import Taskform from "./Taskform";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "Nueva tarea",
      },
    ]);
  }
  return (
    <h1>
      <Taskform createTask={createTask} />
      <Tasklist tasks={tasks} />
    </h1>
  );
}

export default App;
