"use client";
import { FunctionComponent } from "react";
import ListData from "./SidebarList";
import style from "./Sidebar.module.scss";
import cn from "classnames";
import Image from "next/image";
import { usePathname } from "next/navigation";
interface Props {
  layoutStyle: string;
}

export const Sidebar: FunctionComponent<Props> = ({ layoutStyle }) => {
  const pathName = usePathname();
  return (
    <div className={cn(layoutStyle, style.wrapper)}>
      <div className={style.sidebarWrapper}>
        <div className={style.sidebarLogo}>
          <Image
            src="/helloKitty.svg"
            alt="Hello kitty image"
            width={60}
            height={60}
          />
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
            const isActive = pathName[1] === listElem.link[1]; //garbage code
            return (
              <li key={i} className={isActive ? cn(style.activePage) : ""}>
                <Image
                  src={listElem.icon}
                  width={30}
                  height={30}
                  alt={`${listElem.name}+ icon`}
                />
                <a href={listElem.link}>{listElem.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
