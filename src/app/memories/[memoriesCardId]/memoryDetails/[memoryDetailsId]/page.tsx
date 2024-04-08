export default function MemoryCardDetails({
  params,
}: {
  params: {
    memoriesCardId: string;
    memoryDetailsId: string;
  };
}) {
  return (
    <div>
      this is details of card {params.memoriesCardId} about memory
      {params.memoryDetailsId}
    </div>
  );
}
