export default function MemoriesDetails({
	params,
}: {
	params: { memoriesId: string }
}) {
	return <div>Mym memory № {params.memoriesId}</div>
}
