import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery"
import styles from "./Search.module.css";

const Search = () => {

  const query = useQuery();
  const search = query.get("search");

  let navigate = useNavigate(); //Permite cambiar de URL y enviar parametros 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === ''){
      navigate(`/`);
    } else {
      navigate(`/?search=${e.target.value}`);
    }
    
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
          
          placeholder="Search title..."
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
};

export default Search;
