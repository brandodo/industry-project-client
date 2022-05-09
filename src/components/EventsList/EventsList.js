import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import API_URL from "../utils";
import "./EventsList.scss";

export default function EventsList() {
  // fetch image, location, time of event and map to list of components
  const [data, setData] = useState();
  const DUMMY_API = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    axios
      .get(`${API_URL}/booking/event`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  if (!data) return null;

  const listOfEvents = data.map((event) => <EventCard data={event} />);
  return <div className="eventsList">{listOfEvents}</div>;
}
