import React, { useState } from "react";
import "./TimeBooking.scss";
import Times from "./Times";

export default function TimeBooking({ times, setTimes }) {
  const hours = times.length * 2;

  return (
    <section className="timeBooking">
      <h2 className="timeBooking__header">Time</h2>
      <p className="timeBooking__description">
        Please select the time(s) you would like to come for:
      </p>
      <div className="timeBooking__options">
        <Times times={times} setTimes={setTimes}>
          8-10AM
        </Times>
        <Times times={times} setTimes={setTimes}>
          10AM-12PM
        </Times>
        <Times times={times} setTimes={setTimes}>
          12-2PM
        </Times>
        <Times times={times} setTimes={setTimes}>
          2-4PM
        </Times>
        <Times times={times} setTimes={setTimes}>
          4-6PM
        </Times>
        <Times times={times} setTimes={setTimes}>
          6-8PM
        </Times>
      </div>
      <p
        className={
          times.length
            ? "timeBooking__text timeBooking__text--show"
            : "timeBooking__text"
        }
      >
        You will work for {hours} hours
      </p>
    </section>
  );
}
