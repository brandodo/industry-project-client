import React from "react";

export default function ({ setLogin, setUser, setShow }) {
  return (
    <div className="login__options">
      <button
        className="login__button"
        onClick={() => {
          setShow(false);
          setTimeout(() => {
            setLogin(true);
            setUser("Employee");
          }, 1000);
        }}
      >
        EMPLOYEE
      </button>
      <button
        className="login__button"
        onClick={() => {
          setShow(false);
          setTimeout(() => {
            setLogin(true);
            setUser("Employer");
          }, 1000);
        }}
      >
        EMPLOYER
      </button>
    </div>
  );
}
