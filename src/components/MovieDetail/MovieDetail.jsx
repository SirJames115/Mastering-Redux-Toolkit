import React, { useEffect } from "react";
import { useParams } from "react-router";
import { FaStar, FaCalendarAlt, FaRegThumbsUp, FaBiking } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log("Movie Detail: ", data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="row justify-content-md-center mb-5 text-white bg-dark">
      {Object.keys(data).length === 0 ? (
        <div class="spinner-border m-auto text-info" role="status">
          {/* <span class="visually-hidden">Loading...</span> */}
        </div>
      ) : (
        <>
          <div className="col-lg-8 col-sm-12">
            <div className="title">
              <p className="h1">{data.Title}</p>
            </div>
            <div className="row text-primary">
              <div className="movie-rating">
                <span className="mx-3 align-center">
                  IMDB Rating <FaStar color="gold" /> : {data.imdbRating}
                </span>
                <span className="mx-3 align-center">
                  IMDB Voted <FaRegThumbsUp color="white" /> : {data.imdbVotes}
                </span>
                <span className="mx-3 align-center">
                  Runtime <FaBiking color="white" /> : {data.Runtime}
                </span>
                <span className="mx-3 align-center">
                  Year <FaCalendarAlt color="white" /> : {data.Year}
                </span>
              </div>
            </div>
            <div className="row">
              <span className="movie-plot">{data.Plot}</span>
            </div>
            <div className="col mt-4">
              <h3>Movie Info</h3>
              <div className="col align-center my-1">
                Director:
                <span className="m-1  text-primary my-1">{data.Director}</span>
              </div>
              <div className="col align-center my-1">
                Stars:
                <span className="m-1  text-primary my-1">{data.Actors}</span>
              </div>
              <div className="col align-center my-1">
                Genres:
                <span className="m-1 text-primary my-1">{data.Genre}</span>
              </div>
              <div className="col align-center my-1">
                Languages:
                <span className="m-1 text-primary my-1">{data.Language}</span>
              </div>
              <div className="col align-center my-1">
                Awards:
                <span className="m-1 text-primary my-1">{data.Awards}</span>
              </div>
              <div className="col align-center my-1">
                Writer:
                <span className="m-1 text-primary my-1">{data.Writer}</span>
              </div>
              <div className="col align-center my-1">
                Country:
                <span className="m-1 text-primary my-1">{data.Country}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 text-center mt-5">
            <img src={data.Poster} alt={data.Title} className="rounded" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
