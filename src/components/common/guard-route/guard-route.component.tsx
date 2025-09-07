import { useContext } from "react";
import { AuthContext } from "../../../providers/auth-provider";
import { Link } from "react-router-dom";
import type { Role } from "../../../types";

interface IProps {
  children: React.ReactNode;
  roles: Role[]
}

const GuardRoute = (props: IProps) => {
  const { user } = useContext(AuthContext);

  if (user === null) {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>You Must Login At First To See This Screen!</h3>
        <Link to={"/login"}>Login</Link>
      </div>
    )
  } else if (!props.roles.includes(user.role)) {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>You Don't Have Permission To See This Screen!</h3>
      </div>
    )
  }

  return props.children

}

export default GuardRoute;
