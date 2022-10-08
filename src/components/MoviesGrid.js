import React, { useEffect, useState } from "react";
import { api } from "../helpers/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await api("discover/movie")
        .then((data) => setMovies(data.results))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((el) => (
        <MovieCard key={el.title} movie={el}></MovieCard>
      ))}
    </ul>
  );
};

export default MoviesGrid;
