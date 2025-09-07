import { useEffect, useRef, useState } from "react";

interface IProps {
  value: string[];
  onCoursesChange: (list: string[]) => void;
}

const CoursesListForm = (props: IProps) => {
  const [coursesList, setCoursesList] = useState<string[]>(props.value);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCoursesList(props.value);
  }, [props.value]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newCoursesList: string[] = [
      e.currentTarget["courseName"].value.toUpperCase(),
      ...coursesList,
    ];
    setCoursesList(newCoursesList);
    props.onCoursesChange(newCoursesList);

    if (refInput.current) refInput.current.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          style={{ display: "inline-block", minWidth: "150px" }}
          htmlFor="cName"
        >
          Course Name:{" "}
        </label>
        <input ref={refInput} type="text" name="courseName" id="cName" />
        <input
          type="submit"
          value="Add Course"
          style={{ marginLeft: "10px" }}
        />
      </form>
      <ul>
        {coursesList.map((course, index) => (
          <li key={course + index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesListForm;
