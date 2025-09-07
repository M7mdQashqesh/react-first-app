import type { IStudent } from "../types";

function validationStudentForm(student: IStudent) {
  let errors: string[] = [];

  if (student.name.length < 3)
    errors.push("The name must be more than 3 letters");

  if (student.age < 17 || student.age > 40)
    errors.push("The age must be between 17 and 40");

  if (student.coursesList.length === 0)
    errors.push("A student should have one course at least");

  return errors;
}

export { validationStudentForm };
