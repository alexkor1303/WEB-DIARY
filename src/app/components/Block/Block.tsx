import {
  DetailedHTMLProps,
  FunctionComponent,
  HtmlHTMLAttributes,
} from "react";
import { ReactNode } from "react";
import style from "./Block.module.scss";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  color?: "white";
}

export const Block: FunctionComponent<Props> = ({ children, color }) => {
  return (
    <div
      className={cn(style.wrapper, {
        [style.color_white]: color === "white",
        [style.color_pink]: color == undefined,
      })}>
      {children}
    </div>
  );
};
