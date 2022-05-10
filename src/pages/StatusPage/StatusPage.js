import React, { useState } from "react";
import Status from "../../components/Status/Status";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import UpdatedModal from "../../components/UpdatedModal/UpdatedModal";
import axios from "axios";
import "./StatusPage.scss";
import API_URL from "../../components/utils";

export default function StatusPage({ match, user, setUser, late, setLate }) {
  const [show, setShow] = useState(false);
  if (user == null) return null;

  const { userInfo, email, username } = user;
  const { qrcodecolor, date } = userInfo[0];

  // submit form to update user's status
  const handleForm = (warning) => {
    axios
      .put(`${API_URL}/login/qrcode`, {
        email: email,
        qrcode: warning ? "error" : "success",
        username: username,
      })
      .then((res) => {
        sessionStorage.setItem("userData", JSON.stringify(res.data));
        setUser(res.data);
        setShow(true);
        setLate(false);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <section className="statusPage">
      {show && <UpdatedModal status={qrcodecolor} />}
      <Status
        match={match}
        status={late ? "warning" : qrcodecolor}
        date={date}
      />
      <Questionnaire user={user} handleForm={handleForm} />
    </section>
  );
}
