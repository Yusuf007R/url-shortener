/* eslint-disable no-throw-literal */
import { genericError } from "../config";

const handleError = (res) => {
  if (res) {
    return Promise.reject({
      ok: false,
      code: res.status,
      msg: res.data,
    });
  }
  return Promise.reject({
    ok: false,
    code: null,
    msg: genericError,
  });
};

export default handleError;
