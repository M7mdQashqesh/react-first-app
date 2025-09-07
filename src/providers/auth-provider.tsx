import { createContext, useState } from "react";
import type { IUserData } from "../types";

interface IAuthContext {
  user: IUserData | null;
  login: (data: IUserData) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  login: () => { },
  logout: () => { },
});

const AuthProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(() => {
    const localLogin = localStorage.getItem("login")
    try {
      return localLogin ? JSON.parse(localLogin) : null;
    } catch {
      return null;
    }
  });

  const login = (data: IUserData) => {
    if (data.username.length > 3) {
      setUser(data);
      localStorage.setItem("login", JSON.stringify(data));
    }
    else setUser(null);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("login")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
