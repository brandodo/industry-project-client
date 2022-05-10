import React, { useEffect, useState } from "react";
import API_URL from "../utils";

export default function Event({ data }) {
  const { eventinfo } = data;
  const { name, time, date, location } = eventinfo;

  return (
    <div className="event__eventCard">
      <img
        className="event__image"
        src={`${API_URL}/${eventinfo.imageSmall}`}
        alt="event"
      />
      <div className="event__textContainer">
        <h4 className="event__header">{name}</h4>
        <div className="event__wrapper">
          <p className="event__text event__text--time">
            {time}, {date}
          </p>
          <p className="event__text event__text--room">{location}</p>
        </div>
      </div>
    </div>
  );
}
