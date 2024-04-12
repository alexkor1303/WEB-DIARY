import Card from "../components/DashboardCard/DashboardCard";
export default function Layout({
  children,
  dayCompliment,
  shortQuiz,
  userStat,
}: {
  children: React.ReactNode;
  dayCompliment: React.ReactNode;
  shortQuiz: React.ReactNode;
  userStat: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>
        <Card>{dayCompliment}</Card>
        <Card>{shortQuiz}</Card>
        <Card>{userStat}</Card>
      </div>
    </div>
  );
}
