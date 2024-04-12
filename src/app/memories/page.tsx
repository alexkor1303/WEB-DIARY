import Link from "next/link";
import Image from "next/image";
import MemoriesImage from "./photoList";
import style from "./memories.module.scss";
export default function Memories() {
  return (
    <div className={style.wrapper}>
      {MemoriesImage.map(({ id, src, name }) => {
        return (
          <section key={id} className={style.photoBlock}>
            <Link href={`/memoriesPhoto/${id}`}>
              <Image src={src} alt={name} />
            </Link>
          </section>
        );
      })}
    </div>
  );
}
