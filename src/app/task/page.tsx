import style from "./Task.module.css";
import cn from "classnames";
export const metadata = {
  title: "My to-do list",
  description: "need to do!",
};
export default function Task() {
  return <div className={style.taskWrapper}>IM TASK LIST</div>;
}
