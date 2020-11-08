import handleError from "../../utils/handleError";
import request from "../../utils/request";

const shortUrlRequest = async (fullUrl) => {
  try {
    const result = await request({
      method: "post",
      url: "/shorturl",
      data: {
        fullUrl,
      },
    });
    if (result.status === 200) return result.data;
  } catch (error) {
    return handleError(error.response);
  }
};

export { shortUrlRequest };
