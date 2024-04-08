import { useReducer } from "react";
import "./App.css";
import { TodoContext, TodoDispatchContext } from "./TodoContext";
import { TodoList } from "./TodoList";
import { AddTodoButton } from "./AddTodoButton";
import { TodoListRedux } from "./TodoListRedux";
import { AddTodoButtonRedux } from "./AddTodoButtonRedux";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type State = {
  todos: Todo[];
};

export type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number };

const todoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      console.log(action.payload);
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            return {
              ...todo,
              completed:
                todo.id === action.payload
                  ? (todo.completed = true)
                  : todo.completed,
            };
          }),
        ],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <>
      <TodoContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoList />
          <AddTodoButton />
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
      <TodoListRedux />
      <AddTodoButtonRedux />
    </>
  );
}

export default App;
