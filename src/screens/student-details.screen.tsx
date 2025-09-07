import { useNavigate, useParams } from "react-router-dom";
import Student from "../components/student/student.component";
import { useEffect, useState } from "react";
import type { IStudent } from "../types";

const StudentDetails = () => {
  const [currentStd, setCurrentStd] = useState<IStudent | null>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const studentList: IStudent[] = JSON.parse(
      window.localStorage.getItem("students-list") || "[]"
    );
    const stu = studentList.find((std) => std.id === Number(id));
    if (stu) setCurrentStd(stu);
    else navigate("/404");
  }, [id]);

  return (
    <div style={{ marginTop: "30px" }}>
      {currentStd && (
        <Student
          mode="details"
          key={currentStd.id}
          id={currentStd.id}
          name={currentStd.name}
          age={currentStd.age}
          absents={currentStd.absents}
          isGraduated={currentStd.isGraduated}
          coursesList={currentStd.coursesList}
        />
      )}
    </div>
  );
};

export default StudentDetails;
