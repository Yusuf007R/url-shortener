import { useState } from "react";
import { getShortLinks } from "../services/getDataAPI";
import { useLogin } from "./use-login";

export const useGetLinks = () => {
  const [links, setLinks] = useState();
  const { getNewToken } = useLogin(true);
  const getLinks = async (params) => {
    console.log("request");
    const result = await getShortLinks({
      page: params.page,
      limit: params.limit,
    });
    if (result.code === 403) {
      await getNewToken();
      return getLinks(params);
    }
    setLinks(result.result);
  };

  return { links, getLinks };
};
