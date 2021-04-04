import { useState } from "react";
import { getShortLinks } from "../services/getDataAPI";

export const useGetLinks = () => {
  const [links, setLinks] = useState([]);
  const getLinks = async (params) => {
    try {
      const result = await getShortLinks({
        page: params.page,
        limit: params.limit,
      });
      setLinks(result.result);
    } catch (err) {
      return;
    }
  };

  return { links, getLinks };
};
