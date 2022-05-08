import React from "react";
import logo from "../../assets/images/flex-office-logo_white.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <section className="footer">
      <img className="footer__logo" src={logo} alt="footer-logo" />
    </section>
  );
}
