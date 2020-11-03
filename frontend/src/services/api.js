import request from "../utils/request";

//Auth Requests

const loginRequest = async (username, password) => {
  request({
    method: "post",
    url: "/auth/login",
    data: {
      username,
      password,
    },
  });
  //   .then(function (response) {
  //     return response;
  //   })
  //   .catch(function (error) {
  //     return error;
  //   });
  try {
    const result = await request({
      method: "post",
      url: "/auth/login",
      data: {
        username,
        password,
      },
    });
    if (result.status === 200) return result.data;
  } catch (error) {
    return handleError(error.response);
  }
};

//need to make a better error handler

function handleError(res) {
  return {
    ok: false,
    code: res.status,
    msg: res.data,
  };
}

export { loginRequest };
