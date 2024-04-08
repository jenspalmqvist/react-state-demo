import { useContext } from "react";
import { TodoContext, TodoDispatchContext } from "./TodoContext";

export const TodoList = () => {
  const state = useContext(TodoContext);
  const dispatch = useContext(TodoDispatchContext);
  return (
    <>
      {state.todos.length > 0 &&
        state.todos.map((todo) => (
          <>
            <p>
              todo: {todo.text} | completed: {todo.completed + ""}
            </p>{" "}
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              Toggle completed
            </button>
          </>
        ))}
    </>
  );
};
