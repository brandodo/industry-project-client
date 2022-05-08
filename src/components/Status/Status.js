import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import qrCode from "../../assets/images/QRcode-placeholder.png";
import "./Status.scss";

export default function Status({ match, status, date }) {
  const show = match.url === "/status" ? false : true;

  // feed user data status, state stores success, warning or error

  return (
    <section className="status">
      <div className="status__hContainer">
        <h3 className="status__header">My Health QR Code</h3>
      </div>
      <div className={`status__gradient status__gradient--${status}`}>
        <div className="status__container">
          <img className="status__qrCode" src={qrCode} alt="qr-code" />
        </div>
      </div>
      <p className="status__text">Last recorded: {date}</p>
      {show && (
        <Link to="/status" className="status__button">
          Update My Status
        </Link>
      )}
    </section>
  );
}
