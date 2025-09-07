import { useContext } from "react";
import "./nav-bar.css"
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from "../../providers/auth-provider";


const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
      <Link className={`${location.pathname === "/" ? "active" : ""}`} to={"/"}>Home Page</Link>
      <Link className={`${location.pathname === "/add" ? "active" : ""}`} to={"/add"}>Add Student</Link>
      <Link className={`${location.pathname === "/about" ? "active" : ""}`} to={"/about"}>About</Link>
      <span style={{ marginLeft: "auto" }}>
        {!user && <Link to={"/login"} className={`${location.pathname === "/login" ? "active" : ""}`}>Login</Link>}
        {user && <button onClick={logout}>Logout</button>}
      </span>
    </nav>
  )
}

export default NavBar
