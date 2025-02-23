import { fetchPopularTitles } from "../../js/tmdb_api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";

export default function HomePage() {
  const [movies, setMovies] = useState();
  const [status, setStatus] = useState("initial");

  function fetchMovies() {
    (async () => {
      try {
        setStatus("loading");
        setMovies(await fetchPopularTitles());
        setStatus("done");
      } catch (e) {
        toast.error(e.message);
        setStatus("error");
      }
    })();
  }

  useEffect(fetchMovies, []);
  return (
    <>
      <ErrorBlock render={status === "error"} />
      <Loader render={status === "loading"}></Loader>
      {status === "done" && <MovieList movies={movies.results} />}
    </>
  );
}
