import hideIcon from "../../assets/images/hide_colored.svg";
import { Link } from "react-router-dom";
import "./StatusModal.scss";

export default function StatusModal() {
  return (
    <div className="statusModal">
      <div className="statusModal__box">
        <img className="statusModal__hide" src={hideIcon} alt="hide" />
        <h3 className="statusModal__header">Status Update Needed</h3>
        <p className="statusModal__text">
          Your health survey has not been done for over 3 days, please update
          your status first before proceeding!
        </p>
        <div className="statusModal__container">
          <Link className="statusModal__button" to="/status">
            Update My Status
          </Link>
        </div>
      </div>
    </div>
  );
}
