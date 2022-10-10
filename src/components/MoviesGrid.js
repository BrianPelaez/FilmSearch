import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { api } from "../helpers/httpClient";
import Loader from "./Loader";
import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import NotFound from "./NotFound";


const MoviesGrid = ({search}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  // USE EFFECT API START

  useEffect(() => {
    setIsLoading(true);
    let URL = "";
    let options = "";

    const getData = async () => {
      if (search === null) {
        URL = "discover/movie?";
        options = "&page=" + page;
      } else {
        URL = `search/movie?query=${search}`;
        options = "&page=" + page;
      }
      await api(URL, options)
        .then((data) => {
          setMovies([...movies, ...data.results]);
          setHasMore(data.page < data.total_pages);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <NotFound></NotFound>
  }

  // USE EFFECT API END

  return (
    <InfiniteScroll
      dataLength={movies.length}
      loader={<Loader />}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((el) => (
          <MovieCard key={el.id} movie={el}></MovieCard>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default MoviesGrid;
