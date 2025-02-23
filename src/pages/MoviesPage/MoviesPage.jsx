import { useEffect, useState } from "react";
import useParamsQuery from "../../hooks/useParamsQuery";
import toast from "react-hot-toast";
import { fetchWithQuery } from "../../js/tmdb_api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./MoviesPage.module.css";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock.jsx";

export default function MoviesPage() {
  const { query, updateSearchParams } = useParamsQuery();
  const [status, setStatus] = useState();
  const [movies, setMovies] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed.length) return;
    fetchMovies(trimmed);
  }

  async function fetchMovies(query) {
    try {
      setStatus("loading");
      setMovies(await fetchWithQuery(query));
      setStatus("done");
    } catch (e) {
      toast.error(e.message);
      setStatus("error");
    }
  }

  useEffect(() => {
    movies?.results.length === 0 && toast.error("Nothing found");
  }, [movies]);

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => updateSearchParams("query", e.target.value)}
          className={css.input}
        />
        <button className={css.button}>Search</button>
      </form>

      <ErrorBlock render={status === "error"} />
      <Loader render={status === "loading"} />
      {status == "done" && movies.results.length !== 0 && (
        <MovieList movies={movies.results} />
      )}
    </>
  );
}
