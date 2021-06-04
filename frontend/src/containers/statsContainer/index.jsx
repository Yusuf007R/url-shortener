import { React, useEffect, useState } from "react";
import { useGetLinks } from "../../hooks/use-getLinks";
import { useTable, useSortBy } from "react-table";
import {
  Contianer,
  HeaderContainer,
  LinkAnchor,
  OptionsContainer,
  StyledTd,
  Styles,
} from "./styles";
import { FlexRowContainer } from "../../components/globalContainers";
import { baseUrl } from "../../config";

const columns = [
  {
    Header: "Links",
    columns: [
      {
        Header: "Short Url",
        accessor: "shortUrl",
      },
      {
        Header: "Full Url",
        accessor: "fullUrl",
      },
      {
        Header: "Clicks count",
        accessor: "click",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
  },
];
const TableCell = ({ cell }) => {
  switch (cell.column.id) {
    case "fullUrl":
      return (
        <StyledTd data-label={"Full URL"} {...cell.getCellProps()}>
          <LinkAnchor href={cell.value}>
            {cell.value.replace(/(^\w+:|^)\/\//, "")}
          </LinkAnchor>
        </StyledTd>
      );
    case "shortUrl":
      return (
        <StyledTd data-label={"Short URL"} {...cell.getCellProps()}>
          <LinkAnchor href={`${baseUrl}/${cell.value}`}>
            {`${baseUrl}/${cell.value}`}
          </LinkAnchor>
        </StyledTd>
      );
    case "date":
      return (
        <StyledTd data-label={"Date"} {...cell.getCellProps()}>
          {new Date(cell.value).toDateString()}
        </StyledTd>
      );

    default:
      return (
        <StyledTd data-label={"Click"} {...cell.getCellProps()}>
          {cell.render("Cell")}
        </StyledTd>
      );
  }
};

function Table({ columns, links, paginationSystem }) {
  const { setPagination, pagination } = paginationSystem;
  const { result: data, info } = links;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  return (
    <>
      {pagination && (
        <>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <HeaderContainer
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </HeaderContainer>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableCell key={cell.value} cell={cell}></TableCell>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => {
                setPagination((prev) => {
                  return { ...prev, page: 1 };
                });
              }}
            >
              {"<<"}
            </button>
            <button
              onClick={() => {
                setPagination((prev) => {
                  return { ...prev, page: prev.page - 1 };
                });
              }}
            >
              {"<"}
            </button>
            <button
              onClick={() => {
                setPagination((prev) => {
                  return { ...prev, page: prev.page + 1 };
                });
              }}
            >
              {">"}
            </button>
            <button
              onClick={() => {
                setPagination((prev) => {
                  return { ...prev, page: info.totalPages };
                });
              }}
            >
              {">>"}
            </button>
            <span>
              page {info.page} of {info.totalPages} pages
            </span>
            <select
              defaultValue={pagination.limit}
              onChange={(e) => {
                setPagination((prev) => {
                  return { ...prev, limit: Number(e.target.value) };
                });
              }}
            >
              <OptionsContainer>
                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </OptionsContainer>
            </select>
          </div>
        </>
      )}
    </>
  );
}

function StatsContainer() {
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const { linksInfo, getLinks } = useGetLinks();
  useEffect(() => {
    getLinks(pagination);
    // eslint-disable-next-line
  }, [pagination]);
  return (
    <FlexRowContainer>
      <Contianer>
        <Styles>
          <Table
            paginationSystem={{ setPagination, pagination }}
            columns={columns}
            links={linksInfo}
          ></Table>
        </Styles>
      </Contianer>
    </FlexRowContainer>
  );
}

export default StatsContainer;
