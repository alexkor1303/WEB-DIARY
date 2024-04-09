import { Metadata } from "next";
type Props = {
  params: {
    memoriesId: string;
    descriptionId: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Memory № ${params.memoriesId}`,
    description: `${params.descriptionId}`,
  };
};

export default function Description({ params }: Props) {
  return (
    <h1>
      this is discription number {params.descriptionId} about memory{" "}
      {params.memoriesId}
    </h1>
  );
}
