import { createContext } from "react";
import { Action, State } from "./App";

const initialContext: State = { todos: [] };
const dispatch: React.Dispatch<Action> = () => null;

export const TodoContext = createContext(initialContext);
export const TodoDispatchContext = createContext(dispatch);
