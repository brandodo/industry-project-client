import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import logo from "../../assets/images/flex-office-logo_V01.png";
import stockBg from "../../assets/images/17839577_generated.jpg";
import "./Header.scss";

export default function Header({ user, loggedIn }) {
  if (user) {
    return (
      <header className="header header--loggedIn">
        <Link to="/dashboard" className="header__logo header__logo--loggedIn">
          <img
            className="header__logo header__logo--loggedIn"
            src={logo}
            alt="logo"
          />
        </Link>
        <Hamburger />
      </header>
    );
  }

  return (
    <header className="header">
      <img className="header__background" src={stockBg} alt="stock-bg" />
      <img className="header__logo" src={logo} alt="logo" />
    </header>
  );
}
