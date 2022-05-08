import React, { useState } from "react";
import Status from "../../components/Status/Status";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import "./StatusPage.scss";

export default function StatusPage(props) {
  const [date, setDate] = useState(new Date());
  const { match } = props;

  return (
    <section className="statusPage">
      <Status match={match} />
      <p className="statusPage__date">{`Last recorded: ${date} `}</p>
      <Questionnaire />
    </section>
  );
}
