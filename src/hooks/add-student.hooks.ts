import { useState } from "react";
import { validationStudentForm } from "../utils/validationForm";
import type { IStudent } from "../types";

const INITIAL_STUDENT = {
  id: 0,
  name: "",
  age: 0,
  absents: 0,
  coursesList: [],
  isGraduated: false,
};

const useForm = (onSubmit: (std: IStudent) => void) => {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
  const [errorsList, setErrorsList] = useState<string[]>([]);

  const handleFormChange = (field: string, value: string | number| boolean) => {
    setStudent({ ...student, [field]: value });
  };

  const handleSubmit = () => {
    const newStudent = { ...student, id: Date.now() };

    const errors = validationStudentForm(newStudent);

    if (errors.length > 0) setErrorsList(errors);
    else {
      setErrorsList([]);
      onSubmit(newStudent);
      handleClear();
    }
  };

  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
  };

  const handleCoursesChange = (list: string[]) => {
    setStudent({ ...student, coursesList: list });
  };


  return {
    student,
    errorsList,
    handleFormChange,
    handleSubmit,
    handleClear,
    handleCoursesChange,
  };
};

export default useForm;
