import { createContext, useReducer } from "react";
import reducer, { type Action, type IState } from "../state/reducer";
import type { IStudent } from "../types";
import useLocalStorage from "../hooks/local-storage.hooks";

interface IStateContext {
  state: IState,
  dispatch: React.Dispatch<Action>
}

interface IProps {
  children: React.ReactNode;
}

const StateContext = createContext<IStateContext>({ state: { studentsList: [], totalAbsents: 0 }, dispatch: () => { } });

const StateProvider = (props: IProps) => {
  const initialStudents: IStudent[] = JSON.parse(window.localStorage.getItem("students-list") || "[]");
  const [state, dispatch] = useReducer(reducer, {
    studentsList: initialStudents,
    totalAbsents: initialStudents.reduce((prev, cur) => prev + cur.absents, 0),
  });
  useLocalStorage(state.studentsList, "students-list");



  return <StateContext.Provider value={{ state, dispatch }}>{props.children}</StateContext.Provider>
}

export { StateContext, StateProvider }
