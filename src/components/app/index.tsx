import React from "react";
import TodoList from "../todo-list";
import { Provider } from "react-redux";
import { store } from "../../store";

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
