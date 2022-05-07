import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.scss";

export default function Header({ setUser }) {
  return (
    <header className="header">
      <h1 className="header__title">Secret Sauce App</h1>
      <Hamburger />
    </header>
  );
}
