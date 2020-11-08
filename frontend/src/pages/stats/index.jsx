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
        xdxd
      </button>
      {links ? (
        links.map((xd, i) => {
          return (
            <p
              key={i}
            >{`fullUrl ${xd.fullUrl} click ${xd.click} user ${xd.user}`}</p>
          );
        })
      ) : (
        <p>not logged</p>
      )}
    </div>
  );
};

export default Stats;
