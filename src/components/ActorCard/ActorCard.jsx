import css from "./ActorCard.module.css";

export default function ActorCard({ data }) {
  return (
    <li className={css.thumb}>
      <img
        src={`https://image.tmdb.org/t/p/h632/${data.profile_path}`}
        alt={`${data.name} photo`}
      />
      <div className={css.text}>
        <p>{data.name}</p>
        <p>{data.character}</p>
      </div>
    </li>
  );
}
