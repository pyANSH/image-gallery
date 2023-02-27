import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Search from "./components/mainSearch/Search";
import { useDispatch } from "react-redux";
import { searchThunk } from "./features/thunk/searchThunk";

function App() {
  const dispatch: any = useDispatch();
  const handleSearch = () => {
    dispatch(searchThunk("dog"));
  };
  return (
    <div>
      <Header />
      <Search />
      <button onClick={handleSearch}>click me</button>
    </div>
  );
}

export default App;
