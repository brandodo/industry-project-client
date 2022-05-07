import React from "react";
import qrCode from "../../assets/images/QRcode-placeholder.png";
import "./Status.scss";

export default function Status() {
  return (
    <section className="status">
      <h3 className="status__header">My Status</h3>
      <div className="status__container">
        <img className="status__qrCode" src={qrCode} alt="qr-code" />
      </div>
      <button className="status__button">Check Status</button>
    </section>
  );
}
