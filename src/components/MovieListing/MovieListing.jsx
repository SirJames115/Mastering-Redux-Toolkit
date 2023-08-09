import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="bg-warning border p-4 rounded">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((index, show) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="bg-warning border p-4 rounded">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="text-white mb-3">Moviess</h2>
        <div className="row"> {renderMovies} </div>
      </div>
      <div className="movie-list">
        <h2 className="text-white mb-2">Showss</h2>
        <div className="row"> {renderShows} </div>
      </div>
    </div>
  );
};

export default MovieListing;
