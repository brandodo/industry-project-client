import React from "react";
import LoginButton from "./LoginButton";

export default function ({ setLogin, setUserType, setShow }) {
  return (
    <div className="login__options">
      <LoginButton
        setLogin={setLogin}
        setUserType={setUserType}
        setShow={setShow}
      >
        Employee
      </LoginButton>
      <LoginButton
        setLogin={setLogin}
        setUserType={setUserType}
        setShow={setShow}
      >
        Employer
      </LoginButton>
    </div>
  );
}
