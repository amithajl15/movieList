import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3 "
        >
          <h2> {movie.Title} </h2>
          <p>
            <img src={movie.Poster} alt="movie"></img>
            Year : {movie.Year}
            <br />
            ImdbID :{movie.imdbID}
            <br />
            Type :{movie.Type}
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
