import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  let navigate = useNavigate(); //Permite cambiar de URL y enviar parametros 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchText}`); // Se detalla la ruta con la variable
    setSearchText('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value.toUpperCase());
  };

  return (
    <form
      className={styles.searchContainer}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => handleChange(e)}
        />
        <button className={styles.searchButton} type="submit" value="Search">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Search;
