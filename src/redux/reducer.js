import * as types from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [{id: 1, task: "Sample Task Item1"}],
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            const newTodo = {
                id: uuidv4(),
                task: action.payload,
            };
            const addedTodos = [...state.todos, newTodo];
            return {
                ...state,
                todos: addedTodos,
            }
            default:
                return state;
    }
}

export default todosReducer;