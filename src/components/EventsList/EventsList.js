import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import API_URL from "../utils";
import "./EventsList.scss";

export default function EventsList({ displayModal }) {
  const [data, setData] = useState();

  // fetch image, location, and time of event
  useEffect(() => {
    axios
      .get(`${API_URL}/booking/event`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  if (!data) return null;

  // map above data to list of components
  const listOfEvents = data.map((event) => (
    <EventCard data={event} displayModal={displayModal} />
  ));

  return <div className="eventsList">{listOfEvents}</div>;
}
