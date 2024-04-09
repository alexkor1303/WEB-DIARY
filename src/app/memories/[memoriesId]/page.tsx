import { Metadata } from "next";
type Props = {
  params: {
    memoriesId: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Memory ${params.memoriesId}`,
  };
};

export default function MemoriesDetails({
  params,
}: {
  params: { memoriesId: string };
}) {
  return <div>Mym memory № {params.memoriesId}</div>;
}
