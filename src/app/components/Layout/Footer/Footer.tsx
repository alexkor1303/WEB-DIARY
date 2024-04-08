import { FunctionComponent } from "react";
import style from "./Footer.module.scss";
import cn from "classnames";
import Image from "next/image";
interface Props {
  layoutStyle: string;
}
export const Footer: FunctionComponent<Props> = ({ layoutStyle }) => {
  return (
    <div className={cn(layoutStyle, style.wrapper)}>
      <div className={style.logoSection}>
        <Image
          className={style.logoImage}
          src="/footerLogo.svg"
          width={120}
          height={120}
          alt="Kuromi image"
        />
        <p>{`Made with love <3`}</p>
      </div>
      <div className={style.favLink}>
        <ul>
          <li>
            <a target="_blank" href="#">
              HOROSHKOLA WEBSITE
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              NADPO WEBSITE
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              WEBTELEGRAM WEBSITE
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              WEBWHATSAPP WEBSITE
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              VK WEBSITE
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              WILDBERRIES WEBSITE
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              OZON WEBSITE
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              YANDEX MUSIC WEBSITE
            </a>
          </li>
        </ul>
      </div>
      <div className={style.socialMediaLink}>
        <div className={style.line}></div>
        <div className={style.underLineBlock}>
          <a target="_blank" href="https://github.com/alexkor1303/WEB-DIARY">
            <Image
              className={style.developLogo}
              src="/githubIcon.svg"
              width={50}
              height={50}
              alt="githubIcon"
            />
          </a>
          <p>
            <a href="mailto:alexkor1303@yandex.ru">alexkor1303@yandex.ru</a>
          </p>
        </div>
      </div>
    </div>
  );
};
