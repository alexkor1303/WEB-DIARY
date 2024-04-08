import style from "./Htag.module.scss";
import { ReactNode } from "react";
interface Props {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
export const Htag = ({ tag, children }: Props): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={style.h1}>{children}</h1>;
    case "h2":
      return <h2 className={style.h1}>{children}</h2>;
    case "h3":
      return <h3 className={style.h1}>{children}</h3>;
    default:
      return <>Developer forget about size or text</>;
  }
};
