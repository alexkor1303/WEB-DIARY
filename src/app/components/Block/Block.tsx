import { FunctionComponent } from "react";
import { ReactNode } from "react";
import style from "./Block.module.scss";

interface Props {
  children: ReactNode;
}

export const Block: FunctionComponent<Props> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
