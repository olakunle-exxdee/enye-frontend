import React, { useEffect, useState } from "react";

const FilterProfile = ({ categories, filterGender }) => {
  return (
    <div>
      {categories &&
        categories.map((item) => {
          return (
            <button
              className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-blue-800 active:bg-blue-600  text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
              key={item}
              onClick={() => filterGender(item)}
            >
              {item}
            </button>
          );
        })}
    </div>
  );
};

export default FilterProfile;
