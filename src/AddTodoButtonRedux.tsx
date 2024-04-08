import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

export const AddTodoButtonRedux = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addTodo("Lär dig nåt"))}>
      Lägg till todo
    </button>
  );
};
