import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((e) => (
        <li key={e.id}>
          <Link to={`/movies/${e.id}`} state={location} className={css.link}>
            {e.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
