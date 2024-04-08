import { useContext } from "react";
import { TodoContext, TodoDispatchContext } from "./TodoContext";

export const AddTodoButton = () => {
  const state = useContext(TodoContext);
  const dispatch = useContext(TodoDispatchContext);
  return (
    <button
      onClick={() =>
        dispatch({
          type: "ADD_TODO",
          payload: {
            id: state.todos.length + 1,
            text: "Learn stuff",
            completed: false,
          },
        })
      }
    >
      Lägg till todo
    </button>
  );
};
