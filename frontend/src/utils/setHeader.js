import request from "../utils/request";

const setHeader = async () => {
  const token = localStorage.getItem("token");
  request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default setHeader;
