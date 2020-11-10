import { React, useEffect, useState } from "react";
import NavBar from "../../components/navbar";

import { useGetLinks } from "../../hooks/use-getLinks";

const Stats = () => {
  const [page, setPage] = useState();
  const [limit, setLimit] = useState();
  const { links, getLinks } = useGetLinks();
  useEffect(() => {
    getLinks({ page: 1, limit: 10 });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavBar right={true} center={true} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <input
        onChange={(e) => {
          setPage(e.target.value);
        }}
        type="text"
      />
      <input
        onChange={(e) => {
          setLimit(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={async (e) => {
          getLinks({ page, limit });
        }}
      >
        search
      </button>
      {links ? (
        links.map((link, key) => {
          // console.log(link);
          return (
            <p
              key={key}
            >{`fullUrl ${link.fullUrl} click ${link.click} user ${link.user} shortUrl ${link.shortUrl}`}</p>
          );
        })
      ) : (
        <p>not logged</p>
      )}
    </div>
  );
};

export default Stats;
