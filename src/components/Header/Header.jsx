import React, { useState } from "react";
import { Link } from "react-router-dom";
import react from "../../assets/react.svg";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));

    console.log(term);
    setTerm("");
  };

  return (
    <div
      className="header px-2 py-2 rounded d-flex bg-dark shadow align-items-center justify-content-lg-between
 justify-content-between">
      <div className="logo">
        <Link to="/">
          <p className="h2 text-white">MovieApp</p>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-3 dflex">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="rounded border-0"
            placeholder="Search for movies"
          />
          <button className="bg-info rounded p-1 m-1 border-0">
            <FaSearch color="white" height="0px" className="mx-2 rounded" />
          </button>
        </div>
      </form>
      <div className="user-image">
        <img src={react} alt="User-pmage" />
      </div>
    </div>
  );
};

export default Header;
