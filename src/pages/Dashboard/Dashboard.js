import News from "../../components/News/News";
import Status from "../../components/Status/Status";
import Schedule from "../../components/Schedule/Schedule";
import Events from "../../components/Events/Events";
import StatusModal from "../../components/StatusModal/StatusModal";
import "./Dashboard.scss";
import { useEffect } from "react";
import API_URL from "../../components/utils";
import axios from "axios";

export default function Dashboard({ user, match, late, setToggle }) {
  // persist the user's profile using sessionStorage
  useEffect(() => {
    if (user) {
      const { email, password } = user;
      axios
        .post(`${API_URL}/login`, { email, password })
        .then((res) => {
          sessionStorage.setItem("userData", JSON.stringify(res.data));
          setToggle(true);
        })
        .catch((err) => {
          return err;
        });
    }
  }, []);

  if (!user) return null;

  const { userInfo, username } = user;
  const { qrcodecolor, date } = userInfo[0];

  return (
    <main id="page-wrap" className="dashboard">
      <div className="dashboard__textContainer">
        <h2 className="dashboard__headerText">
          Good Morning,<br></br>
          {username}
        </h2>
        <p className="dashboard__welcomeText">Today is feeling super!</p>
      </div>
      <News />
      <Status
        match={match}
        status={late ? "warning" : qrcodecolor}
        date={date}
      />

      {/* Prevent user from booking if "Yes" to any symptoms */}
      {qrcodecolor === "error" ? (
        ""
      ) : (
        <>
          <Schedule user={user} />
          <Events />
        </>
      )}
      {late ? <StatusModal /> : ""}
    </main>
  );
}
