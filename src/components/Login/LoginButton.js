import React from "react";

export default function LoginButton({
  children,
  setLogin,
  setUserType,
  setShow,
}) {
  return (
    <button
      className="login__button"
      onClick={() => {
        setShow(false);
        setTimeout(() => {
          setLogin(true);
          setUserType(`${children}`);
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}
