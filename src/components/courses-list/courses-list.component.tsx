import "./courses-list.css";

interface IProps {
  coursesList: string[];
}

const CoursesList = (props: IProps) => {
  return (
    <ul>
      {props.coursesList.map((course, index) => (
        <li key={index + course}>{course}</li>
      ))}
    </ul>
  );
};

export default CoursesList;
