import handleError from "../../utils/handleError";
import request from "../../utils/request";

const getShortLinks = async (params) => {
  try {
    const result = await request({
      method: "get",
      url: "/getshortlinks",
      params: {
        page: params.page || 1,
        limit: params.limit || 10,
      },
    });
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    return handleError(error.response);
  }
};

export { getShortLinks };
