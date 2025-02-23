import { useEffect, useState } from "react";
import { Outlet, useNavigate, NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchFilmDetails } from "../../js/tmdb_api";
import toast from "react-hot-toast";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";
import Loader from "../../components/Loader/Loader";
import Details from "../../components/Details/Details";
import { IoMdReturnLeft } from "react-icons/io";

export default function MovieDetailsPage() {
  const [status, setStatus] = useState("loading");
  const [movieData, setMovieData] = useState();
  const [error, setError] = useState();
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setStatus("loading");
        setMovieData(await fetchFilmDetails(movieId));
        setStatus("done");
      } catch (e) {
        setStatus("error");
        setError(e);
      }
    })();
  }, [movieId]);

  useEffect(() => {
    if (status === "error") {
      error.status == 404
        ? navigate("/not-found", { replace: true })
        : toast.error(error.message);
    }
  }, [error, navigate, status]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  function handleBack() {
    const state = location.state;
    const url = state ? state.pathname + state.search : "/";
    navigate(url);
  }
  return (
    <>
      <ErrorBlock render={status === "error"} />
      <Loader render={status === "loading"} />
      {status === "done" && (
        <div>
          <button onClick={handleBack} type="button" className={css.backBtn}>
            <IoMdReturnLeft size="50px" />
          </button>
          <Details movieData={movieData} handleBack={handleBack} />
          <nav className={css.nav}>
            <NavLink
              to={`/movies/${movieId}/cast`}
              className={buildLinkClass}
              state={location.state}
            >
              Cast
            </NavLink>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              className={buildLinkClass}
              state={location.state}
            >
              Reviews
            </NavLink>
          </nav>
          <div className={css.outlet}>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
