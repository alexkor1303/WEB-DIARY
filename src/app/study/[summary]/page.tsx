import { Metadata } from "next";
import { summaryList } from "../summaryList";
import Link from "next/link";
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: {
      absolute: `Конспект № ${params.summary}`,
    },
  };
};
interface Props {
  params: {
    summary: string;
  };
}
export default function Summary({ params }: Props) {
  const summaryNumber = +params.summary;
  const selectedSummary = summaryList.find((item) => item.id === summaryNumber);
  if (selectedSummary) {
    return (
      <div>
        <h1>{`Конспект номер ${selectedSummary?.id}`}</h1>
        <h2>{`Конспект номер ${selectedSummary?.theme}`}</h2>
        <h3>{`Дата : ${selectedSummary?.date}`}</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, minus
          non, veniam iusto quam, eos doloremque voluptatem repudiandae omnis
          fugit magnam beatae odit reiciendis? Saepe ad obcaecati laborum
          facilis autem!
          <p>КОНЕЦ!</p>
        </div>
        <button>
          <Link href={`/study`}>Назад</Link>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>SUMMARY NOT FOUND</h1>
      </div>
    );
  }
}
