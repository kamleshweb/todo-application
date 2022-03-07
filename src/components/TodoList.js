import React from "react";
import TodoInput from "./TodoInput";
import Todo from './Todo';
import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
 
const TodoList = () => {
    const state = useSelector((state) => ({...state.todos}));
    let dispatch = useDispatch();
    const create = (newTodo) => {
        dispatch(addTodo(newTodo));
    };
    return (
        <div className="TodoList">
            <h2>Simple Todo App</h2>
            <TodoInput createTodo={create} />
            <ul>
                <div className="todo-list">
                    {state.todos && state.todos.map((item) => {
                        return (
                            <div key={item.id} className="todo">
                                <Todo
                                key={item.id}
                                id={item.id}
                                task={item.task}
                                />
                            </div>
                        )
                    })}
                </div>
            </ul>
        </div>
    )
}

export default TodoList;