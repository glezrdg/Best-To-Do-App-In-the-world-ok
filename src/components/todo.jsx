import React, { useState } from 'react';

const Todo = ({id, titulo, descripcion, deleteTodo}) =>{

    const [openTodo, setOpenTodo] = useState(false)

    return(        
        <div className={!openTodo ? "TodoCard" : "TodoCard open"} onClick={()=> setOpenTodo(!openTodo)}>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>

            <div className={!openTodo ? 'todoIcon' : 'todoIcon active'}>
                <i class="fas fa-trash" onClick={()=> deleteTodo(id)}></i>
            </div>
        </div>
    );
}

export default Todo;