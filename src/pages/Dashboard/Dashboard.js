import News from "../../components/News/News";
import Status from "../../components/Status/Status";
import Schedule from "../../components/Schedule/Schedule";
import Events from "../../components/Events/Events";

import "./Dashboard.scss";

export default function HomePage({ user, match }) {
  return (
    <main id="page-wrap" className="dashboard">
      <h2 className="dashboard__headerText">Good Morning, Yibo</h2>
    
      <News />
      <Status match={match} />
      <Schedule />
      <Events />
    </main>
  );
}
