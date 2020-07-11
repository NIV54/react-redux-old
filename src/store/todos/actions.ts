import { NewTodo } from "./todo.type";
import { TodoAction } from "./action-types";
import { v4 } from "uuid";

export const addTodo = (todo: NewTodo): TodoAction => ({
  type: "ADD_TODO",
  payload: {
    ...todo,
    id: v4()
  }
});

export const removeTodo = (id: string): TodoAction => ({
  type: "REMOVE_TODO",
  payload: id
});

export const clearTodos = (): TodoAction => ({
  type: "CLEAR_TODOS"
});
