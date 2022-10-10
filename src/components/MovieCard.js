import React from "react";
import {Link} from 'react-router-dom'
import { getMovieImg } from "../helpers/getMovieImg";
import styles from "./MovieCard.module.css";


const MovieCard = ({ movie }) => {
  const IMG_URL = getMovieImg(movie.poster_path, 300)

  return (
    <>
      <li className={styles.movieCard}>
        <Link to={'/movies/'+movie.id}>
        <img
        className={styles.movieImg}
          width={300}
          height={450}
          src={IMG_URL}
          alt={movie.title}
        />
        </Link>
        {movie.title}
        
      </li>
    </>
  );
};

export default MovieCard;
