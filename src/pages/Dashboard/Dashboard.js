import News from "../../components/News/News";
import Status from "../../components/Status/Status";
import Schedule from "../../components/Schedule/Schedule";
import Events from "../../components/Events/Events";
import StatusModal from "../../components/StatusModal/StatusModal";
import moment from "moment";
import "./Dashboard.scss";
import { useEffect } from "react";

export default function Dashboard({ user, match, setUser }) {
  if (!user) return null;

  const { userInfo, username } = user;
  const { qrcodecolor, date } = userInfo[0];
  const lastDay = moment(date, "YYYY-MMM-DD");
  const today = moment().startOf("day");
  const days = Math.round(moment.duration(today - lastDay).asDays());
  const lateStatus = days > 3 ? true : false;

  return (
    <main id="page-wrap" className="dashboard">
      <div className="dashboard__textContainer">
        <h2 className="dashboard__headerText">Good Morning, {username}</h2>
        <p className="dashboard__welcomeText">Today is feeling super!</p>
      </div>
      <News />
      <Status match={match} status={qrcodecolor} date={date} />
      <Schedule />
      <Events />
      {lateStatus ? <StatusModal /> : ""}
    </main>
  );
}
