import React from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../features/reducer/searchSlice/SearchSlice";

function Search() {
  //   code author:pyansh
  const searchVal = useSelector((state: any) => state.search.search);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/search/q=" + searchVal);
  };
  return (
    <div className="searchBody">
      <h1>Download High Quality Images by creators</h1>
      <p>Over 2.4 million+ stock Images by our talented community</p>
      <div className="InputBody searchInput">
        <BsSearch style={{ color: "black" }} />
        <input
          value={searchVal}
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleclick();
            }
          }}
          className="inputHeader"
          type="text"
          placeholder="Search Images Here"
        />
      </div>
    </div>
  );
}

export default Search;
