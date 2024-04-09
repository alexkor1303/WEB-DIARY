import Link from "next/link";
import { summaryList } from "./summaryList";

export const metadata = {
  title: "My education",
  description: "short summary",
};
export default function Study() {
  return (
    <div>
      <h1>Коспекты</h1>
      <ul>
        {summaryList.map((el, i) => {
          return (
            <li key={i}>
              <Link href={`study/` + el.id.toString()}>{el.id.toString()}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
