import "./student.css";
import type { IStudent } from "../../types";
import { useEffect, useState } from "react";
import CoursesList from "../courses-list/courses-list.component";
import { Link } from "react-router-dom";
import Absents from "../absents/absents.component";
import type { Action } from "../../state/reducer";

interface IProps extends IStudent {
  mode: "details" | "list";
  dispatch: React.Dispatch<Action>
}

const Student = (props: IProps) => {
  const [isDangerous, setIsDangerous] = useState(false);

  useEffect(() => {
    if (props.absents > 6) setIsDangerous(true);
    else setIsDangerous(false);
  }, [props.absents]);

  return (
    <div className={`std-wrapper ${isDangerous ? "dangerous" : ""}`}>
      <div>
        <b>Student:</b>
        {props.mode === "list" ? (
          <Link to={`/student/${props.id}`}>{props.name}</Link>
        ) : (
          props.name
        )}
      </div>
      <div>
        <b>Age:</b> {props.age}
      </div>
      <div>
        <b>IsGraduated:</b> {props.isGraduated ? "Yes" : "No"}
      </div>
      <div>
        <b>Courses List: </b>
        <CoursesList coursesList={props.coursesList} />
      </div>
      {props.mode === "list" && <Absents {...props} />}
    </div>
  );
};

export default Student;
