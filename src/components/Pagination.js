import React from "react";

const Pagination = ({ postPerPage, totalPages, perPage }) => {
  let pageNumber = [];
  for (let index = 1; index <= Math.ceil(totalPages / postPerPage); index++) {
    pageNumber.push(index);
  }

  return (
    <div className="container">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {pageNumber.map((page) => {
            return (
              <li key={page} className="page-item">
                <a
                  onClick={() => perPage(page)}
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-purple-500 bg-white text-purple-500"
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
