import type { IStudent } from "../types";
import Student from "../components/student/student.component";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { StateContext } from "../providers/state-provider";

const COURSES_LIST = ["MATH", "HTML", "CSS", "JS"];

const Home = () => {
  const { state, dispatch } = useContext(StateContext);
  const [filteredStudents, setFilteredStudents] = useState<IStudent[]>(state.studentsList);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = params.get("search-query");
    const graduated = params.get("graduated");
    const courses = params.getAll("courses");

    let result = state.studentsList;

    if (searchQuery) result = result.filter((std: IStudent) => std.name.toLowerCase().includes(searchQuery?.toLowerCase()!));

    if (graduated === "graduated") result = result.filter((student) => student.isGraduated);
    else if (graduated === "not-graduated") result = result.filter((student) => student.isGraduated === false);

    if (courses.length > 0) result = result.filter((student) => courses.every((c) => student.coursesList.includes(c)));


    setFilteredStudents(result);
  }, [params, state.studentsList]);

  const handleSearchAndGraduatedFilter = (
    filterName: string, e: | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && value !== "all") params.set(filterName, value);
    else params.delete(filterName);
    setParams(params);
  };

  const handleCoursesFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) params.append("courses", value);
    else params.delete("courses", value);
    setParams(params);
  };

  return (
    <>
      <h2>Students List</h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
        <button
          style={{ marginBottom: "15px" }}
          onClick={() => (dispatch({ type: "REMOVE_FIRST_STUDENT" }))}>
          Remove First Student
        </button>
        <p>
          <b style={{ marginLeft: "10px" }}>Total Absents: </b>{" "}
          {state.totalAbsents}
        </p>
      </div>
      <div
        className="filters"
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearchAndGraduatedFilter("search-query", e)}
          value={params.get("search-query") || ""}
        />
        <select
          onChange={(e) => handleSearchAndGraduatedFilter("graduated", e)}
          name="isGraduated"
          value={params.get("graduated") || "all"}
          style={{ marginLeft: "10px", paddingBlock: "1px" }}
        >
          <option value="all">All</option>
          <option value="graduated">Graduated</option>
          <option value="not-graduated">Not Graduated</option>
        </select>
        <div>
          {COURSES_LIST.map((course) => (
            <React.Fragment key={course}>
              <input
                style={{ marginLeft: "10px" }}
                type="checkbox"
                value={course}
                checked={params.has("courses", course)}
                id={course}
                onChange={handleCoursesFilter}
              />
              <label htmlFor={course}>{course}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      {filteredStudents.length ? (
        <div className="students">
          {filteredStudents.map((student: IStudent) => (
            <Student
              key={student.id}
              mode="list"
              id={student.id}
              name={student.name}
              age={student.age}
              absents={student.absents}
              isGraduated={student.isGraduated}
              coursesList={student.coursesList}
              dispatch={dispatch}
            />
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>No Data Found!</h3>
      )}
    </>
  );
};

export default Home;
