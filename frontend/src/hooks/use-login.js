import { useState, useEffect } from "react";
import setHeader from "../utils/setHeader";

export const useLogin = (props) => {
  const [logged, setLogged] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setLogged(false);
  };

  useEffect(() => {
    const localLogged = localStorage.getItem("refreshToken");
    if (localLogged) {
      setLogged(true);
      setHeader();
    }
  }, []);

  return { logout, logged, setLogged };
};
