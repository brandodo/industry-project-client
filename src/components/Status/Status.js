import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import qrCode from "../../assets/images/QRcode-placeholder.png";
import "./Status.scss";

export default function Status({ match }) {
  const show = match.url === "/status" ? false : true;

  // feed user data status, state stores success, warning or error
  const [status, setStatus] = useState("success");

  useEffect(() => {
    const statuses = ["success", "warning", "error"];
    const rand = Math.floor(Math.random() * statuses.length);

    setStatus(statuses[rand]);
  }, []);

  return (
    <section className="status">
      <h3 className="status__header">My Health QR Code</h3>
      <div className={`status__gradient status__gradient--${status}`}>
        <div className="status__container">
          <img className="status__qrCode" src={qrCode} alt="qr-code" />
        </div>
      </div>
      {show && (
        <Link to="/status" className="status__button">
          Update My Status
        </Link>
      )}
    </section>
  );
}
