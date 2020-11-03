import handleError from "../../utils/handleError";
import request from "../../utils/request";

const shortUrlRequest = async (data) => {
  try {
    const result = await request({
      method: "post",
      url: "/shorturl",
      data: {
        fullUrl: data.fullUrl,
      },
    });
    if (result.status === 200) return result.data;
  } catch (error) {
    return handleError(error.response);
  }
};

export { shortUrlRequest };
