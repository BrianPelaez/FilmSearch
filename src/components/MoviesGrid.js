import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../helpers/httpClient";
import Loader from "./Loader";
import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setIsLoading(true);
    let URL = '';

    const getData = async () => {
      if (query.get('search') === null){
        URL = "discover/movie?";
      } else {
        URL = `search/movie?query=${search}`;
      }
      await api(URL)
        .then((data) => {
          setMovies(data.results)
          setIsLoading(false)
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [search]);

  return (<>
    {!isLoading? (
    
    <ul className={styles.moviesGrid}>
      
      {movies.map((el) => (
        <MovieCard key={el.id} movie={el}></MovieCard>
      ))}
    </ul>) : <Loader/> 
  }</>
  );
};

export default MoviesGrid;
