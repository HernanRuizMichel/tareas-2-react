import React, { useState } from 'react'

function TaskCardEdit({title, setEdit, setNewTitle, taskId}) {
    const [newValue, setNewValue] = useState(title);

    const handleOnchange = (e) => {
        setNewValue(e.target.value)
    }

    const guardarCambio = () => {
        setNewTitle(taskId, newValue);
        setEdit(false)
    }
  return ( 
    <div className='taskCardEdit'>
        <input className='txt-editable' type="text" onChange={(e) => handleOnchange(e)} value={newValue}/>
        <button className='button update' onClick={() => guardarCambio()}>Guardar</button>
    </div>
  )
}

export default TaskCardEdit