import React from "react";

export default function Question({ children, name, changeHandler }) {
  return (
    <div className="questionnaire__container">
      <label className="questionnaire__question" htmlFor={name}>
        {children}
      </label>
      <div className="questionnaire__options">
        <input
          className="questionnaire__input"
          name={name}
          value="no"
          type="radio"
          onChange={(event) => {
            changeHandler(event.target.value);
          }}
        />
        <input
          className="questionnaire__input"
          name={name}
          value="yes"
          type="radio"
          onChange={(event) => {
            changeHandler(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
