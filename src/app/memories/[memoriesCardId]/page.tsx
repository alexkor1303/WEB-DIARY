export default function MemoriesCard({
  params,
}: {
  params: { memoriesCardId: string };
}) {
  return <div>My memory № {params.memoriesCardId}</div>;
}
