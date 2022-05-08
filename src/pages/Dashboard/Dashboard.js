import News from "../../components/News/News";
import Status from "../../components/Status/Status";
import Schedule from "../../components/Schedule/Schedule";
import Events from "../../components/Events/Events";

import "./Dashboard.scss";

export default function HomePage({ user, match, status, date }) {
  return (
    <main id="page-wrap" className="dashboard">
      <div className="dashboard__textContainer">
        <h2 className="dashboard__headerText">Good Morning, {user}</h2>
        <p className="dashboard__welcomeText">Today is feeling super!</p>
      </div>
      <News />
      <Status match={match} status={status} date={date} />
      <Schedule />
      <Events />
    </main>
  );
}
