import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ render }) {
  if (render)
    return (
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#c7c7c7"
        ariaLabel="rings-loading"
        wrapperClass={css.wrapper}
      />
    );
}
