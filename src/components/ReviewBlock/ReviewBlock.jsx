import css from "./ReviewBlock.module.css";

export default function ReviewBlock({ data }) {
  return (
    <li className={css.block}>
      <div>
        <h3>{`Author: ${data.author}`}</h3>
        <p>{data.content}</p>
      </div>
    </li>
  );
}
