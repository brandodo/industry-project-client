import { useState } from "react";
import Question from "./Question";
import "./Questionnaire.scss";

export default function Questionnaire({ handleForm }) {
  const [fever, setFever] = useState("");
  const [cough, setCough] = useState("");
  const [breath, setBreath] = useState("");
  const [contact, setContact] = useState("");

  const disableButton = !fever || !cough || !breath || !contact;
  const warningStatus =
    fever === "yes" || cough === "yes" || breath === "yes" || contact === "yes";

  return (
    <form
      className="questionnaire"
      onSubmit={(event) => {
        event.preventDefault();
        handleForm(warningStatus);
      }}
    >
      <h3 className="questionnaire__header">
        Have any of your symptoms changed?
      </h3>

      <div className="questionnaire__radioHeader">
        <div className="questionnaire__wrapper">
          <p className="questionnaire__radioLabel">no</p>
          <p className="questionnaire__radioLabel">yes</p>
        </div>
      </div>

      <Question name="feverQuestion" changeHandler={setFever}>
        Do you have a fever above 37.7C?
      </Question>
      <Question name="coughQuestion" changeHandler={setCough}>
        Do you have a soar throat or cough?
      </Question>
      <Question name="breathQuestion" changeHandler={setBreath}>
        Do you have shortness of breath?
      </Question>
      <Question name="contactQuestion" changeHandler={setContact}>
        Have you been in contact with someone with Covid19?
      </Question>

      <p className="questionnaire__disclaimer">
        By clicking the button, you are confirming that all information is
        accurate.
      </p>
      <input
        className={
          disableButton
            ? "questionnaire__button questionnaire__button--disabled"
            : "questionnaire__button"
        }
        disabled={disableButton}
        type="submit"
      />
    </form>
  );
}
