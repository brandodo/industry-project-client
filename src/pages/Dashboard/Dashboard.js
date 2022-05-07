import News from "../../components/News/News";
import Status from "../../components/Status/Status";
import Schedule from "../../components/Schedule/Schedule";
import Events from "../../components/Events/Events";

import "./Dashboard.scss";

export default function HomePage({ user }) {
  return (
    <main id="page-wrap" className="dashboard">
      <h2 className="dashboard__headerText">Dashboard</h2>

      <News />
      <Status />
      <Schedule />
      <Events />
    </main>
  );
}
