import { create } from "axios";
import { apiUrl } from "../config";

const request = create({
  baseURL: apiUrl,
  timeout: 1000,
});

export default request;
