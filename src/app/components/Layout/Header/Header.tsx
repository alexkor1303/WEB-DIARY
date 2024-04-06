import { FunctionComponent } from "react";

import classNames from "classnames";
import styles from "./Header.module.css";
interface Props {
  layoutStyle: string;
}
export const Header: FunctionComponent<Props> = ({ layoutStyle }) => {
  return <div className={classNames(layoutStyle, styles.wrapper)}>heeeder</div>;
};
