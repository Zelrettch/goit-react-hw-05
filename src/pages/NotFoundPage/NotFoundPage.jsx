import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.block}>
      <h1 className={css.header}>404 Page not found</h1>
      <Link className={css.link} to="/">
        Back to home page
      </Link>
    </div>
  );
}
