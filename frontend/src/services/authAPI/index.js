import request from "../../utils/request";
import handleError from "../../utils/handleError";
//Auth Requests

const loginRequest = async (data) => {
  console.log(data);
  try {
    const result = await request({
      method: "post",
      url: "/auth/login",
      data: {
        username: data.username,
        password: data.password,
      },
    });

    if (result.status === 200) {
      localStorage.setItem("token", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      return { data: result.data, ok: true };
    }
  } catch (error) {
    return handleError(error.response);
  }
};

const registerRequest = async (data) => {
  try {
    const result = await request({
      method: "post",
      url: "/auth/register",
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
      },
    });
    if (result.status === 201) return result.data;
  } catch (error) {
    return handleError(error.response);
  }
};

const tokenRequest = async () => {
  try {
    const result = await request({
      method: "get",
      url: "/auth/verifytoken",
    });
    if (result.status === 200) return result;
  } catch (error) {
    return error.response;
  }
};

const accessToken = async (token) => {
  try {
    const result = await request({
      method: "get",
      url: "/auth/accesstoken",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result.status === 200) return result;
  } catch (error) {
    return error.response;
  }
};

export { loginRequest, registerRequest, tokenRequest, accessToken };
