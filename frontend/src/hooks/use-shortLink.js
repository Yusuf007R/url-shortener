import { useState } from "react";
import { shortUrlRequest } from "../services/urlShortenerAPI";
import { baseUrl } from "../config/";

export const useShortLink = () => {
  const [url, setUrl] = useState("");
  let fulldata;
  const shortLink = async (fullUrl) => {
    const result = await shortUrlRequest(fullUrl);
    let fulldata = { id: result, fullUrl };
    setUrl(`${baseUrl}/${result}`);
    return fulldata;
  };

  return { shortLink, url, setUrl, fulldata };
};
