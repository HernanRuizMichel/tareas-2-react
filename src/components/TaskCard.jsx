function TaskCard({title, setEdit, taskId, deleteTask}) {
  return (
    <div className="taskcard">
      <h2 className="taskTitle">{title}</h2>
      <button className="button editar" onClick={() => setEdit(true)}>Editar</button>
      <button className="button eliminar" onClick={() => deleteTask(taskId)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
