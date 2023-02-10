

function TaskForm({createTask, title, setTitle}) {
  

  return (
    <div className="form--container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTask(title);
          setTitle('');
          document.getElementById('form-txt').value = "";
        }}
      >
        <input
          type="text"
          placeholder="Escribe una tarea..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="form-txt"
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
