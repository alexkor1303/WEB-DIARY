import Card from "./components/DashboardCard/DashboardCard";
import Dashboard from "./dashboard/page";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Card>
        <h1>Welcome back!</h1>
      </Card>
      <div>some content</div>
      <ul>
        <li>some content</li>
        <li>some content</li>
        <li>some content</li>
        <li>some content</li>
        <li>some content</li>
      </ul>
      <button>
        <a href="./dashboard">to dashboard</a>
      </button>
    </div>
  );
}
