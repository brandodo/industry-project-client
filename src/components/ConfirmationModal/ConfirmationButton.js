import React from "react";
import { Link } from "react-router-dom";

export default function ConfirmationButton({
  children,
  link,
  clickHandler,
  name,
}) {
  return (
    <Link
      to={link}
      className={
        name
          ? "bookedModal__button bookedModal__button--diff"
          : "bookedModal__button"
      }
      onClick={() => {
        if (clickHandler) {
          clickHandler();
        }
      }}
    >
      {children}
    </Link>
  );
}
