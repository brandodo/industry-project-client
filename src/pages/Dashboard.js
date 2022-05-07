import amazed from "../assets/images/amazed.gif";
import News from "../components/News/News";

export default function HomePage({ user }) {
  return (
    <main id="page-wrap" className="dashboard">
      <h2 className="dashboard__headerText">Dashboard</h2>

      <News />
    </main>
  );
}
