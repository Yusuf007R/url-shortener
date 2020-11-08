import { shortUrlRequest } from "../services/urlShortenerAPI";
import { useLogin } from "./use-login";

export const useShortLink = () => {
  const { getNewToken } = useLogin();
  const shortLink = async (fullUrl) => {
    const result = await shortUrlRequest(fullUrl);
    if (result.code === 403) {
      await getNewToken();
      return shortLink(fullUrl);
    }
    return result;
  };

  return { shortLink };
};
