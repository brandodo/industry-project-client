import React, { useState } from "react";
import "./Login.scss";

export default function Login({ userType, formHandler }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disableButton = !email || !password;

  return (
    <form
      className="login__form"
      onSubmit={(event) => {
        event.preventDefault();
        formHandler(email, password);
      }}
    >
      <label className="login__label">{userType} Email:</label>
      <input
        className="login__input"
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />

      <label className="login__label">Password:</label>
      <input
        className="login__input"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />

      <input
        className={
          disableButton
            ? "login__submit login__submit--disabled"
            : "login__submit"
        }
        type="submit"
        value="Enter"
        disabled={disableButton}
      />
    </form>
  );
}
