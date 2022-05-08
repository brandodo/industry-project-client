import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import "./EventsList.scss";

export default function EventsList() {
  // fetch image, location, time of event and map to list of components
  const [data, setData] = useState();
  const DUMMY_API = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    axios
      .get(DUMMY_API)
      .then((res) => setData(res.data))
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className="eventsList">
      {data
        ? data.map((image) => {
            return <EventCard data={image} />;
          })
        : ""}
    </div>
  );
}
