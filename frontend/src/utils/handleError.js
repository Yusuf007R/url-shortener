import { genericError } from "../config";

const handleError = (res) => {
  if (res)
    return {
      ok: false,
      code: res.status,
      msg: res.data,
    };

  return {
    ok: false,
    code: null,
    msg: genericError,
  };
};

export default handleError;
