import css from "./ErrorBlock.module.css";

export default function ErrorBlock({ render }) {
  if (render)
    return (
      <div className={css.block}>
        <h1>An internal system error occured, please try again later</h1>
      </div>
    );
}
