import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to={"/"} className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to={"/movies"} className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
