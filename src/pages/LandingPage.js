import {useQuery} from "../hooks/useQuery";
import {useDebounce} from "../hooks/useDebounce";
import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Search";

export function LandingPage() {

  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 600);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={search}/>
    </div>
  );
}
