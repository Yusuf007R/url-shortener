import { useState } from "react";
import { getShortLinks } from "../services/getDataAPI";

export const useGetLinks = () => {
  const [linksInfo, setLinksInfo] = useState({ result: [], info: {} });
  const getLinks = async (params) => {
    try {
      const result = await getShortLinks({
        page: params.page,
        limit: params.limit,
      });
      setLinksInfo(result);
    } catch (err) {
      return;
    }
  };

  return { linksInfo, getLinks };
};
