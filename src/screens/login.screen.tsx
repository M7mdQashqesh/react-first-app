import { useContext } from "react";
import { AuthContext } from "../providers/auth-provider";
import { useNavigate } from "react-router-dom";
import { Role } from "../types";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget["username"].value;
    const role = (e.currentTarget["role"] as any).value;

    login({ username, role });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <input
        style={{ padding: "5px", width: "200px" }}
        type="text"
        name="username"
        placeholder="Enter username"
      />
      <select style={{ padding: "5px", width: "215px" }} name="role" id="role">
        <option value={Role.ADMIN}>Admin</option>
        <option value={Role.TEACHER}>Teacher</option>
        <option value={Role.GUEST}>Guest</option>
      </select>
      <input
        style={{ padding: "5px", width: "215px", cursor: "pointer" }}
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default Login;
