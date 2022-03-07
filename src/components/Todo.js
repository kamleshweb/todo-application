import React, {useState} from "react";
import './Todo.css';

const Todo = ({toggleTodo, task}) => {
    return (
        <div className="Todo">
                <li classNames="Todo-task" onClick={toggleTodo}>
                    {task}
                </li>
        </div>
    )
}

export default Todo;