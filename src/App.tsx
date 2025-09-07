import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home.screen";
import About from "./screens/about.screen";
import StudentDetails from "./screens/student-details.screen";
import AddStudent from "./screens/add-student.screen";
import { Role, } from "./types";
import PageNotFound from "./screens/page-not-found.screen";
import Login from "./screens/login.screen";
import NavBar from "./components/nav-bar/nav-bar.component";
import GuardRoute from "./components/common/guard-route/guard-route.component";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome To GSG React/Next Course</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<GuardRoute roles={[Role.ADMIN, Role.GUEST, Role.TEACHER]}><Home /></GuardRoute>} />
        <Route path="/add" element={<GuardRoute roles={[Role.ADMIN]}><AddStudent /></GuardRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/student/:id" element={<GuardRoute roles={[Role.ADMIN, Role.TEACHER]}><StudentDetails /></GuardRoute>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
