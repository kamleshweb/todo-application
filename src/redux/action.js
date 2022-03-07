import * as types from "./actionTypes";

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    payload: todo,
});