import React, { useEffect, useContext, useState } from "react";
import { ProfileContext } from "../ProfileContext";
import FilterProfile from "./FilterProfile";
import Pagination from "./Pagination";
import ProfileDetails from "./ProfileDetails";
import SearchProfile from "./SearchProfile";

const Profile = () => {
  const { data, loading, error } = useContext(ProfileContext);

  const [paginate, setPaginate] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);
  const [input, setInput] = useState("");
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const customPages =
    paginate && paginate.slice(indexOfFirstPage, indexOfLastPage);

  const perPage = (item) => setCurrentPage(item);
  const leng = paginate && paginate.length;
  const allCategories = [
    ...new Set(data && data.records.profiles.map((item) => item.Gender)),
  ];

  useEffect(() => {
    data && setPaginate(data.records.profiles);
  }, [data]);

  const filterGender = (gender) => {
    const newItem =
      paginate &&
      data.records.profiles.filter((item) => item.Gender === gender);
    setPaginate(newItem);
  };

  if (loading) {
    return <h1>Loading......</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("helllo");
  };

  const filterItem =
    data &&
    paginate.filter((item) => {
      if (item.FirstName === input) {
        return item;
      }
    });

  console.log(filterItem);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <FilterProfile categories={allCategories} filterGender={filterGender} />
      {paginate && <ProfileDetails data={customPages} />}
      <Pagination
        totalPages={leng}
        postPerPage={postPerPage}
        perPage={perPage}
      />
    </div>
  );
};

export default Profile;
