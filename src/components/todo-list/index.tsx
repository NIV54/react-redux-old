import React from "react";
import { connect } from "react-redux";
import { Store } from "../../store";
import { addTodo, removeTodo, clearTodos } from "../../store/todos/actions";
import { useTextInput } from "../../hooks/use-text-input";

const mapStateToProps = (state: Store) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodoAction: addTodo,
  removeTodoAction: removeTodo,
  clearTodosAction: clearTodos
};

type TodoListStoreProps = ReturnType<typeof mapStateToProps>;

type TodoListDispatchProps = typeof mapDispatchToProps;

export const TodoList = ({
  todos,
  addTodoAction,
  removeTodoAction,
  clearTodosAction
}: TodoListStoreProps & TodoListDispatchProps) => {
  const { inputProps } = useTextInput(content => addTodoAction({ content }));

  return (
    <>
      <input {...inputProps} />
      <button onClick={() => clearTodosAction()}>🗑️</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => removeTodoAction(todo.id)}>✔</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
