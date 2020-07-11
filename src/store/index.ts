import { combineReducers, createStore } from "redux";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todosReducer
});

export type Store = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
