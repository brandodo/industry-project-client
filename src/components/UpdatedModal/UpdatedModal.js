import React from "react";
import { Link } from "react-router-dom";
import qrCode from "../../assets/images/QRcode-placeholder.png";
import "./UpdatedModal.scss";

export default function UpdatedModal({ status }) {
  return (
    <div className="updatedModal">
      <div className="updatedModal__box">
        <h3 className="updatedModal__header">Status Updated</h3>
        <div className={`status__gradient status__gradient--${status}`}>
          <div className="status__container">
            <img className="status__qrCode" src={qrCode} alt="qr-code" />
          </div>
        </div>
        <p className="updatedModal__text">
          {status === "success" ? (
            "You are cleared to enter the office, book a time slot!"
          ) : (
            <p className="updatedModal__text">
              You are cleared to enter, but please review the following:
              <ul className="updatedModal__list">
                <li>Wear a mask</li>
                <li>Keep a distance of 6 ft. from others</li>
              </ul>
            </p>
          )}
        </p>
        <Link className="updatedModal__button" to="/dashboard">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
