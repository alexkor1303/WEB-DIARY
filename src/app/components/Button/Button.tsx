import { FunctionComponent } from "react";
import style from "./Button.module.scss";
import cn from "classnames";

interface Props {
  text: string;
}
export const Button: FunctionComponent<Props> = ({ text }) => {
  return <button className={cn(style.standart)}>{text}</button>;
};
