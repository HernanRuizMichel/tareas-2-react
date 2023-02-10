import { useState } from "react"
import TaskCard from "./taskcard"
import TaskCardEdit from "./TaskCardEdit"

function TaskList({title, editable, setNewTitle, taskId, deleteTask}) {
    const [edit, setEdit] = useState(editable);

    return (
      <div className="taskList">
        {edit ? <TaskCardEdit title={title} setEdit={setEdit} setNewTitle={setNewTitle} taskId={taskId}/> : <TaskCard title={title} setEdit={setEdit} deleteTask={deleteTask} taskId={taskId}/>}
      </div>
    )

  
}
export default TaskList