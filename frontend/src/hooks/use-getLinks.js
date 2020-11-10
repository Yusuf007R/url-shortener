import { useState } from "react";
import { getShortLinks } from "../services/getDataAPI";
import { useLogin } from "./use-login";

export const useGetLinks = () => {
  const [links, setLinks] = useState();
  const { getNewToken } = useLogin(true);

  const getLinks = async (params) => {
    console.log("request");
    try {
      const result = await getShortLinks({
        page: params.page,
        limit: params.limit,
      });
      setLinks(result.result);
    } catch (error) {
      return error;
    }
  };

  return { links, getLinks };
};
