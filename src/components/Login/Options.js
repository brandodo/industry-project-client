import React from "react";

export default function ({ setLogin, setUser }) {
  return (
    <div className="login__options">
      <button
        className="login__button"
        onClick={() => {
          setLogin(true);
          setUser("Employee");
        }}
      >
        EMPLOYEE
      </button>
      <button
        className="login__button"
        onClick={() => {
          setLogin(true);
          setUser("Employer");
        }}
      >
        EMPLOYER
      </button>
    </div>
  );
}
