import React from "react";

export default function EventCard({ data }) {
  return (
    <div className="eventsList__card">
      <img className="eventsList__image" src={data.url} alt="event-card" />
      {data.title}
    </div>
  );
}
