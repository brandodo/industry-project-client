import API_URL from "../utils";

export default function EventCard({ data, displayModal }) {
  const { name, time, location, date, imageLarge } = data.eventinfo;
  const cardId = imageLarge.replace(".jpg", "");

  return (
    <div
      className="eventsList__card"
      onClick={() => {
        displayModal(data.eventinfo);
      }}
    >
      <img
        id={cardId}
        className="eventsList__image"
        src={`${API_URL}/${imageLarge}`}
        alt="event-card"
      />
      <div className="eventsList__container">
        <h4 className="eventsList__header">{name}</h4>
        <div className="eventsList__wrapper">
          <p className="eventsList__text eventsList__text--room">{location}</p>
          <p className="eventsList__text eventsList__text--time">
            {time}, {date}
          </p>
        </div>
      </div>
    </div>
  );
}
