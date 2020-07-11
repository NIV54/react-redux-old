import { Todo } from "./todo.type";
import { TodoAction } from "./action-types";

const initialState: Todo[] = [];

export const todosReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat(action.payload);
    case "REMOVE_TODO":
      return state.filter(({ id }) => action.payload !== id);
    case "CLEAR_TODOS":
      return [];
    default:
      return state;
  }
};
