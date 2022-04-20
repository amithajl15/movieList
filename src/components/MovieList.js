import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3 ">
          <p>
            <h2> {movie.Title} </h2>
            <img src={movie.Poster} alt="movie"></img>
            <h3>
              Year : {movie.Year}
              <br />
              ImdbID :{movie.imdbID}
              <br />
              Type :{movie.Type}
            </h3>
          </p>
          <div className="overlay d-flex align-items-center justify-content-center">
            Watch Now
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
