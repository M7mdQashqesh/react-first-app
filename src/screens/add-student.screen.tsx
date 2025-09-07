import { useContext } from "react";
import CoursesListForm from "../components/courses-list-form/courses-list-form.component";
import useForm from "../hooks/add-student.hooks";
import { StateContext } from "../providers/state-provider";

const AddStudent = () => {
  const { dispatch } = useContext(StateContext);

  const form = useForm((newStudent) => dispatch({ type: "ADD_STUDENT", payload: newStudent }));

  return (
    <div className="add-student-screen">
      <div>
        <label htmlFor="name">Student Name: </label>
        <input
          type="text"
          id="name"
          value={form.student.name}
          onChange={(e) => form.handleFormChange("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Student Age: </label>
        <input
          type="number"
          id="age"
          min={17}
          max={40}
          value={form.student.age}
          onChange={(e) => form.handleFormChange("age", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isGraduated">Is Graduated: </label>
        <input
          type="checkbox"
          id="isGraduated"
          checked={form.student.isGraduated}
          onChange={(e) =>
            form.handleFormChange("isGraduated", e.target.checked)
          }
        />
      </div>
      <div>
        <CoursesListForm
          value={form.student.coursesList}
          onCoursesChange={form.handleCoursesChange}
        />
      </div>
      <div className="actions" style={{ marginBottom: "15px" }}>
        <button onClick={form.handleSubmit}>Submit</button>
        <button onClick={form.handleClear}>Clear</button>
      </div>

      {form.errorsList.length > 0 && (
        <div>
          <h4>You Have The Following Error/s</h4>
          {form.errorsList.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddStudent;
