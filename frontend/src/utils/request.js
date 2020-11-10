import { create } from "axios";
import { apiUrl } from "../config";
import { accessToken } from "../services/authAPI";

const request = create({
  baseURL: apiUrl,
  timeout: 1000,
});

//need to move this code to other place, and need to handle error of new accesstoken

request.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status !== 401) return err;

    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const result = await accessToken(refreshToken);
      const config = err.config;
      config.headers["Authorization"] = `Bearer ${result.data.accessToken}`;
      localStorage.setItem("token", result.data.accessToken);
      return await request(config);
    } catch (error) {
      return error;
    }
  }
);

export default request;
