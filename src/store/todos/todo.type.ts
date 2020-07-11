export interface Todo {
  id: string;
  content: string;
}

export type NewTodo = Omit<Todo, "id">;
