import { Block, Button, Htag } from "../components/index";
import style from "./emonotes.module.scss";

export default function Emotional() {
  return (
    <div className={style.main_wrapper}>
      <Block>
        <div className={style.upper_block_wrapper}>
          <Htag tag="h1">Create new emotional note</Htag>
          <Button text="+" />
        </div>
      </Block>
      <Block>
        <div className={style.lower_block_wrapper}>
          <Htag tag="h1">History</Htag>
        </div>
      </Block>
    </div>
  );
}
