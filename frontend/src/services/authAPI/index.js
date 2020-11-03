import request from "../../utils/request";
import handleError from "../../utils/handleError";
//Auth Requests

const loginRequest = async (data) => {
  try {
    const result = await request({
      method: "post",
      url: "/auth/login",
      data: {
        username: data.username,
        password: data.password,
      },
    });
    if (result.status === 200) return result.data;
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
        username: data.username,
        password: data.password,
      },
    });
    if (result.status === 201) return result.data;
  } catch (error) {
    return handleError(error.response);
  }
};

export { loginRequest, registerRequest };
