/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "./App";
import { toggleTodo } from "./todoSlice";

export const TodoListRedux = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo.todos);
  return (
    <>
      {todos.length > 0 &&
        todos.map((todo: Todo) => (
          <>
            <p>
              todo: {todo.text} | completed: {todo.completed + ""}
            </p>{" "}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Toggle completed
            </button>
          </>
        ))}
    </>
  );
};
