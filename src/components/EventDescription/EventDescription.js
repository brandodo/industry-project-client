import "./EventDescription.scss";

export default function EventDescription({ data }) {
  const { name, date } = data;

  return (
    <div className="eventDescription">
      <h4 className="eventDescription__header">{name}</h4>
      <p className="eventDescription__text">
        You are registered for {name} for {date.toLowerCase()}!
      </p>
    </div>
  );
}
