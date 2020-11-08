import { useState, useEffect } from "react";
import request from "../utils/request";
import { accessToken } from "../services/authAPI";

export const useLogin = (props) => {
  const [logged, setLogged] = useState(false);

  const setHeader = async () => {
    const token = localStorage.getItem("token");
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const getNewToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const result = await accessToken(refreshToken);
    localStorage.setItem("token", result.data.accessToken);
    setHeader();
    setLogged(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setLogged(false);
  };

  useEffect(() => {
    const localLogged = localStorage.getItem("refreshToken");
    if (localLogged) {
      setHeader();
      setLogged(true);
    }
  }, []);

  return { logout, logged, getNewToken, setLogged };
};
