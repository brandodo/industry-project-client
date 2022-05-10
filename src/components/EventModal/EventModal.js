import API_URL from "../utils";
import hideIcon from "../../assets/images/hide_colored.svg";
import "./EventModal.scss";

export default function EventModal({ data, bookEvent, setShow }) {
  const { name, time, location, description, date, imageLarge } = data;
  const imageId = imageLarge.replace(".jpg", "");

  return (
    <div className="eventModal">
      <div className="eventModal__box">
        <img
          className="eventModal__close"
          src={hideIcon}
          alt="close"
          onClick={() => setShow(false)}
        />
        <h4 className="eventModal__header">Event Detail</h4>
        <div className="eventModal__imageContainer">
          <img
            id={`${imageId}-event`}
            className="eventModal__image"
            src={`${API_URL}/${imageLarge}`}
          />
        </div>
        <div className="eventModal__info">
          <h4 className="eventModal__header">{name}</h4>
          <p className="eventModal__description">{description}</p>
          <div className="eventModal__details">
            <p className="eventModal__text eventModal__text--location">
              {location}
            </p>
            <p className="eventModal__text eventModal__text--time">
              {time}, {date}
            </p>
          </div>
        </div>
        <button
          className="eventModal__button"
          onClick={(event) => {
            event.preventDefault();
            bookEvent(name);
          }}
        >
          Book the Event
        </button>
      </div>
    </div>
  );
}
