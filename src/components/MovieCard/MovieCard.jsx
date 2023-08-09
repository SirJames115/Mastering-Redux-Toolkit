import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className="col mb-4 rounded">
        <Link to={`/movie/${data.imdbID}`}>
          <div className="card">
            <img src={data.Poster} alt={data.Title} />
            <div className="card-body">
              <h4 className="card-title">{data.Title}</h4>
              <p className="card-text">{data.Year}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
