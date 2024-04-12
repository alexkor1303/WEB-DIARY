import Link from "next/link";
export default function DefaultShortQuiz() {
  return (
    <div>
      <h1>lets play! im quiz!</h1>
      <Link href="/dashboard/archiveQuiz">Go to archive</Link>
    </div>
  );
}
