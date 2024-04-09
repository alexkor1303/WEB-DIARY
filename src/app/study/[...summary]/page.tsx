export default function Summary({
  params,
}: {
  params: {
    summary: string[];
  };
}) {
  if (params.summary.length > 1) {
    return <h1>Конспект урока {params.summary[1]}</h1>;
  } else {
    return <h1>Главная страница кратких конспектов.</h1>;
  }
}
