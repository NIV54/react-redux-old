import { Todo } from "./todo.type";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CLEAR_TODOS = "CLEAR_TODOS";

interface AddTodo {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface RemoveTodo {
  type: typeof REMOVE_TODO;
  payload: string;
}

interface ClearTodos {
  type: typeof CLEAR_TODOS;
}

export type TodoAction = AddTodo | RemoveTodo | ClearTodos;
