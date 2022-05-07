import React from "react";
import Event from "./Event";
import "./Events.scss";

export default function Events() {
  return (
    <section className="events">
      <h3 className="events__header">Events</h3>
      <div className="events__container">
        {/* map array to list of event card components*/}
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </section>
  );
}
