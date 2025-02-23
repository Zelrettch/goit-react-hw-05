import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFilmCredits } from "../../js/tmdb_api";
import toast from "react-hot-toast";
import ActorCard from "../ActorCard/ActorCard";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    (async () => {
      try {
        setStatus("loading");
        const credits = await fetchFilmCredits(movieId);
        setCastData(credits.cast);
        setStatus("done");
      } catch (e) {
        setStatus("error");
        toast.error(e.message);
      }
    })();
  }, [movieId]);

  return (
    <div className={css.block}>
      <ErrorBlock render={status === "error"} />
      <Loader render={status === "loading"} />
      {status === "done" && (
        <ul className={css.castList}>
          {castData.map((e) => (
            <ActorCard data={e} key={e.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
