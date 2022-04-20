import "./styles.css";
import MovieList from "./components/MovieList";
import React, { useState, useEffect } from "react";
export default function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=Avenger&apikey=7ef66620`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  return (
    <div className="App">
      <h1>StarWars Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
}
