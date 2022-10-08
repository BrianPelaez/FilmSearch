import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../helpers/httpClient";
import Loader from "../components/Loader";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      await api("movie/" + movieId +'?')
        .then((data) => {
          setMovie(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [movieId]);

  const IMG_URL = "https://image.tmdb.org/t/p/w300/";

  return (
    <>
      {!isLoading ? (
        <div className={`${styles.detailsContainer}`}>
          <img
            className={`${styles.col} ${styles.movieImage}`}
            width={300}
            height={450}
            src={IMG_URL + movie.poster_path}
            alt={movie.title}
          />

          <div className={`${styles.movieDetails} ${styles.col}`}>
            <p>
              <strong>Titulo:</strong> {movie.title}
            </p>
            <p>
              <strong>Género:</strong>{" "}
              {movie.genres
                ? movie.genres.map((el) => el.name).join(", ")
                : null}
            </p>
            <p>
              <strong>Descripción:</strong> {movie.overview}
            </p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
