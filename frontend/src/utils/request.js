import { create } from "axios";
import { apiUrl } from "../config";
import { accessToken } from "../services/authAPI";
import setHeader from "./setHeader";

const request = create({
  baseURL: apiUrl,
  timeout: 1500,
});

request.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status !== 401) return Promise.reject(err);
    const refreshToken = localStorage.getItem("refreshToken");
    const result = await accessToken(refreshToken);
    const config = err.config;
    config.headers["Authorization"] = `Bearer ${result.data.accessToken}`;
    localStorage.setItem("token", result.data.accessToken);
    setHeader();
    return await request(config);
  }
);

export default request;
