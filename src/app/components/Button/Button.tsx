import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./Button.module.scss";
import cn from "classnames";
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}
export const Button = ({ text, onClick, ...rest }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={cn(style.standart)}>
      {text}
    </button>
  );
};
