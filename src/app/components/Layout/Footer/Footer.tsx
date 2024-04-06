import { FunctionComponent } from "react";
import style from "./Footer.module.css";
import cn from "classnames";
interface Props {
  layoutStyle: string;
}
export const Footer: FunctionComponent<Props> = ({ layoutStyle }) => {
  return <div className={cn(layoutStyle, style.wrapper)}>FOOTER</div>;
};
