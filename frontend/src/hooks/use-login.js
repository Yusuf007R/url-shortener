import { useState, useEffect } from "react";
import setHeader from "../utils/setHeader";
import { useHistory } from "react-router-dom";
import { logoutRequest } from "../services/authAPI";

export const useLogin = (props) => {
  const [logged, setLogged] = useState(false);
  let history = useHistory();
  const logout = async () => {
    const localLogged = localStorage.getItem("refreshToken");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    await logoutRequest(localLogged);
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
