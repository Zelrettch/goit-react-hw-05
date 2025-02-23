import css from "./Details.module.css";

export default function Details({ movieData }) {
  return (
    <div className={css.block}>
      <div className={css.thumb}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={`${movieData.title} poster`}
        />
      </div>
      <div className={css.info}>
        <h1 className={css.title}>{movieData.title}</h1>
        <p className={css.score}>{`User score: ${movieData.vote_average}`}</p>
        <h2>Overview</h2>
        <p className={css.overview}>{movieData.overview}</p>
        <h2>Genres</h2>
        {movieData.genres.map((e) => (
          <p key={e.id}>{e.name}</p>
        ))}
      </div>
    </div>
  );
}
