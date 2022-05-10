import { Link } from "react-router-dom";
import Moment from "react-moment";
import qrCode from "../../assets/images/QRcode-placeholder.png";
import "./Status.scss";

export default function Status({ match, status, date }) {
  const show = match.url === "/status" ? false : true;

  const chooseMessage = (stat) => {
    switch (stat) {
      case "success":
        return <p className="status__message">You are cleared to go!</p>;

      case "warning":
        return <p className="status__message">Please update your status.</p>;

      case "error":
        return (
          <p className="status__message">
            You are <b>not</b> cleared to enter the office!
          </p>
        );

      default:
        return;
    }
  };

  const message = chooseMessage(status);

  return (
    <section className="status">
      <div className="status__hContainer">
        <h3 className="status__header">My Health QR Code</h3>
        {message}
      </div>
      <div className={`status__gradient status__gradient--${status}`}>
        <div className="status__container">
          <img className="status__qrCode" src={qrCode} alt="qr-code" />
        </div>
      </div>
      <p className="status__text">
        Last recorded: <Moment format="YYYY-MMM-DD">{date}</Moment>
      </p>
      {show && (
        <Link to="/status" className="status__button">
          Update My Status
        </Link>
      )}
    </section>
  );
}
