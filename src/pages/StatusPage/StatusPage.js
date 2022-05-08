import React, { useState } from "react";
import Status from "../../components/Status/Status";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import "./StatusPage.scss";

export default function StatusPage({ match, status, date }) {
  return (
    <section className="statusPage">
      <Status match={match} status={status} date={date} />
      <Questionnaire />
    </section>
  );
}
