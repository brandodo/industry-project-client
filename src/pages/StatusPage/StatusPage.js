import React, { useState } from "react";
import Status from "../../components/Status/Status";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import UpdatedModal from "../../components/UpdatedModal/UpdatedModal";
import axios from "axios";
import "./StatusPage.scss";
import API_URL from "../../components/utils";

export default function StatusPage({ match, user, setUser }) {
  const { userInfo, userid, username } = user;
  const [show, setShow] = useState(false);
  if (userInfo == null) return null;

  const { qrcodecolor, date } = userInfo[0];

  const handleForm = (warning) => {
    axios
      .put(`${API_URL}/login/qrcode`, {
        email: userid,
        qrcode: warning ? "warning" : "success",
        username: username,
      })
      .then((res) => {
        setUser(res.data);
        setShow(true);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <section className="statusPage">
      {show && <UpdatedModal status={qrcodecolor} />}
      <Status match={match} status={qrcodecolor} date={date} />
      <Questionnaire user={user} handleForm={handleForm} />
    </section>
  );
}
