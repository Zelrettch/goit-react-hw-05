import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFilmReviews } from "../../js/tmdb_api";
import toast from "react-hot-toast";
import ReviewBlock from "../ReviewBlock/ReviewBlock";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    (async () => {
      try {
        setStatus("loading");
        const reviews = await fetchFilmReviews(movieId);
        setReviews(reviews.results);
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

      {status === "done" &&
        (reviews.length ? (
          <ul className={css.reviews}>
            {reviews.map((e) => (
              <ReviewBlock data={e} key={e.id} />
            ))}
          </ul>
        ) : (
          <div className={css.emptyReviewsBlock}>
            <p>{"We don't have any reviews for this movie"}</p>
          </div>
        ))}
    </div>
  );
}
