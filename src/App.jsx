import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/taskList";
import "./css/style.css";
 

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const createTask = (title) => {
    let task = {
      id: crypto.randomUUID(),
      title,
      editable: false,
    };

    setTasks([...tasks, task]);
  };

  function deleteTask(id) {
    const temp = tasks.filter((task) => task.id !== id);
    console.log(temp)
    setTasks(temp);
  }

  const setNewTitle = (id, newTitle) => {
    const temp = [...tasks];
    const item = temp.find((item) => item.id == id);
    item.title = newTitle;
    setTasks(temp);
  }

  return (
    <main className="main">
      <TaskForm createTask={createTask} setTitle={setTitle} title={title}/>
      {tasks.length == 0 ? <h2 className="tareasPendientes">No Hay Tareas Pendientes</h2> : tasks.map((task) => (
        <TaskList
          key={task.id}
          className="taskList"
          title={task.title}
          deleteTask={deleteTask}
          editable={task.editable}
          setNewTitle={setNewTitle}
          taskId={task.id}
        />
      ))}
    </main>
  );
}

export default App;
