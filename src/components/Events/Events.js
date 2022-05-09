import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";
import API_URL from "../utils";
import "./Events.scss";

export default function Events() {
  const DUMMY_API = "https://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState();
  const temp = [];

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

  const preview = data.slice(0, 3).map((item) => <Event data={item} />);
  console.log(preview);

  return (
    <section className="events">
      <div className="events__textWrapper">
        <h3 className="events__header">Events</h3>
        <Link to="/events" className="events__text">
          View More
        </Link>
      </div>
      <div className="events__container">{preview}</div>
    </section>
  );
}
