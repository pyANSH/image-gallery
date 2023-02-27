import React from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className="searchBody">
      <h1>Download High Quality Images by creators</h1>
      <p>Over 2.4 million+ stock Images by our talented community</p>
      <div className="InputBody searchInput">
        <BsSearch style={{ color: "black" }} />
        <input
          className="inputHeader"
          type="text"
          placeholder="Search Images Here"
        />
      </div>
    </div>
  );
}

export default Search;
