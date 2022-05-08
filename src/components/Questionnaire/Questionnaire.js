import React from "react";
import "./Questionnaire.scss";

export default function Questionnaire() {
  return (
    <form className="questionnaire">
      <h3 className="questionnaire__header">
        Have any of your symptoms changed?
      </h3>
      <div className="questionnaire__container">
        <label className="questionnaire__question">
          Do you have a fever above 37.8C?
        </label>
        <input className="questionnaire__input" type="checkbox" />
      </div>
      <div className="questionnaire__container">
        <label className="questionnaire__question">
          Do you have a soar throat or cough?
        </label>
        <input className="questionnaire__input" type="checkbox" />
      </div>
      <div className="questionnaire__container">
        <label className="questionnaire__question">
          Do you have shortness of breath?
        </label>
        <input className="questionnaire__input" type="checkbox" />
      </div>
      <div className="questionnaire__container">
        <label className="questionnaire__question">
          Have you been in contact with someone with Covid19?
        </label>
        <input className="questionnaire__input" type="checkbox" />
      </div>
      <p className="questionnaire__disclaimer">
        By clicking the button, you are confirming that all information is
        accurate.
      </p>
      <input className="questionnaire__button" type="submit" />
    </form>
  );
}
