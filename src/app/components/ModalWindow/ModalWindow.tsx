import {
  FunctionComponent,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import { Block, Htag } from "../";
import style from "./ModalWindow.module.scss";
import cn from "classnames";
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isopened?: boolean;
}
export const ModalWindow: FunctionComponent<Props> = ({
  isopened,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={cn(style.overlay, {
        [style.hidden]: isopened === false,
        [style.opened]: isopened === true,
      })}>
      <div className={style.modalBlock}>
        <Block color="white">
          <div className={style.modalBlock_window}>
            <Htag tag="h2">Emotional note constructor</Htag>
          </div>
        </Block>
        <button className={style.modalBlock_button} onClick={onClick}>
          close
        </button>
      </div>
    </div>
  );
};
