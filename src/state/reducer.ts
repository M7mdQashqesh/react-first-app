import type { IStudent } from "../types";

export interface IState {
  studentsList: IStudent[];
  totalAbsents: number;
}

export type Action =
  | { type: "ADD_STUDENT"; payload: IStudent }
  | { type: "REMOVE_FIRST_STUDENT" }
  | { type: "CHANGE_ABSENTS"; payload: { id: number; change: number } };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "ADD_STUDENT": {
      const newStudents = [action.payload, ...state.studentsList];
      return {
        studentsList: newStudents,
        totalAbsents: newStudents.reduce((prev, cur) => prev + cur.absents, 0),
      };
    }

    case "REMOVE_FIRST_STUDENT": {
      const newStudents = [...state.studentsList];
      newStudents.shift();
      return {
        studentsList: newStudents,
        totalAbsents: newStudents.reduce((prev, cur) => prev + cur.absents, 0),
      };
    }

    case "CHANGE_ABSENTS": {
      return {
        ...state,
        studentsList: state.studentsList.map((std) =>
          std.id === action.payload.id
            ? { ...std, absents: std.absents + action.payload.change }
            : std
        ),
        totalAbsents: state.totalAbsents + action.payload.change,
      };
    }

    default:
      return state;
  }
};

export default reducer;
