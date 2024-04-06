import { FunctionComponent } from "react";
import ListData from "./SidebarList";
import style from "./Sidebar.module.scss";
import cn from "classnames";
interface Props {
  layoutStyle: string;
}
export const Sidebar: FunctionComponent<Props> = ({ layoutStyle }) => {
  return (
    <div className={cn(layoutStyle, style.wrapper)}>
      <div className={style.sidebarLogo}>
        <img src="./helloKitty.svg" alt="Hello kitty image" />
        <h2>
          WEB
          <br />
          DIARY
          <br />
          FOR ARISHA
        </h2>
      </div>
      <ul className={cn(style.sidebarlist)}>
        {ListData.map((listElem, i) => {
          return (
            <li key={i}>
              <a href={listElem.link}>{listElem.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// const change = (i: number) => {
//   if (!isEditable) {
//     return;
//   }
//   arrayConstructor(i);
// };
