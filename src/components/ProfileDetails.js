import React from "react";
import SearchProfile from "./SearchProfile";

const ProfileDetails = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        const { Email, Gender, FirstName } = item;

        return (
          <div key={Email} className="">
            <h1>{FirstName}</h1>
            <p>{Gender}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileDetails;
