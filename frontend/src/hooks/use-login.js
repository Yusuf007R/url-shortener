import { useState, useEffect } from "react";
import setHeader from "../utils/setHeader";
import { useHistory } from "react-router-dom";

export const useLogin = (props) => {
  const [logged, setLogged] = useState(false);
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setLogged(false);
    history.replace("/");
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
